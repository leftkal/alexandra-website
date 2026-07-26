import { mkdir, readdir, rename, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const sourceDir = path.join(process.cwd(), 'public/images/cms');
const outputDir = path.join(process.cwd(), 'public/images/generated');
const supportedExtensions = new Set(['.jpg', '.jpeg']);

await mkdir(outputDir, { recursive: true });

const files = await readdir(sourceDir, { withFileTypes: true });
let generated = 0;
let skipped = 0;

for (const file of files) {
  if (!file.isFile()) continue;

  const extension = path.extname(file.name).toLowerCase();
  if (!supportedExtensions.has(extension)) continue;

  const sourcePath = path.join(sourceDir, file.name);
  const outputName = `${path.basename(file.name, path.extname(file.name))}.webp`;
  const outputPath = path.join(outputDir, outputName);
  const temporaryPath = `${outputPath}.tmp`;

  const [sourceStats, outputStats] = await Promise.all([
    stat(sourcePath),
    stat(outputPath).catch(() => null),
  ]);

  if (outputStats && outputStats.mtimeMs >= sourceStats.mtimeMs) {
    skipped += 1;
    continue;
  }

  await sharp(sourcePath)
    .webp({ quality: 82, effort: 5 })
    .withMetadata()
    .toFile(temporaryPath);

  await rename(temporaryPath, outputPath).catch(async (error) => {
    await rm(temporaryPath, { force: true });
    throw error;
  });

  generated += 1;
}

console.log(`Generated ${generated} WebP image(s); skipped ${skipped} up-to-date image(s).`);

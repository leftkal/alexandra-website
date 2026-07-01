# Opencode Agents

This project uses real opencode agents, not YAML task templates.

## Primary Agent

- `architect` is the default primary agent.
- It uses `openai/gpt-5.5` with variant `high`.
- It delegates implementation and review work to specialist subagents.

## Subagents

- `builder` - pages, components, routes, layouts (`openai/gpt-5.5`, variant `low`)
- `debugger` - build/runtime/TypeScript fixes (`openai/gpt-5.5`, variant `low`)
- `refactorer` - safe cleanup and deduplication (`nvidia/qwen/qwen3.5-397b-a17b`)
- `seo` - metadata, OpenGraph, JSON-LD, SEO structure (`nvidia/qwen/qwen3.5-397b-a17b`)
- `accessibility` - WCAG, keyboard, ARIA, alt text (`nvidia/qwen/qwen3.5-397b-a17b`)
- `content` - bio, CTA, captions, guide copy (`nvidia/qwen/qwen3.5-397b-a17b`)
- `performance` - images, lazy loading, bundles, Lighthouse (`nvidia/qwen/qwen3.5-397b-a17b`)
- `vision` - alt text and visual review from supplied image context (`nvidia/qwen/qwen3.5-397b-a17b`)

## Files

- Config: `.opencode/opencode.json`
- Agents: `.opencode/agent/*.md`

After changing these files, quit and restart opencode. Config is loaded only at startup.

Check registered agents with:

```bash
opencode agent list
```

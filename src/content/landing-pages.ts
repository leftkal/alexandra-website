export interface FAQ {
  question: string;
  answer: string;
}

export interface ContentSection {
  heading: string;
  body: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface LandingPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  introduction: string;
  keyword: string;
  sections: ContentSection[];
  faq: FAQ[];
  galleryImages: GalleryImage[];
  relatedPages: string[];
  schemaType: 'Photographer' | 'LocalBusiness';
  socialImage?: string;
  ctaText?: string;
}

export const landingPages: LandingPage[] = [
  {
    slug: 'photographer-athens',
    title: 'Photographer in Athens',
    metaTitle: 'Athens Photographer | Alexandra Maria Deli',
    metaDescription: 'Photographer in Athens working across portraits, editorial, branding, travel, and analog photography. Based in Athens, available for selected projects across Greece.',
    h1: 'Athens Photographer',
    introduction: 'I\'m an Athens-based photographer working across portrait, editorial, travel, and analog photography. Every project begins with a conversation about light, mood, and intention — whether indoors, on location, or outdoors. My approach is rooted in observation and patience: I look for light that shapes a face, textures that give a place character, and moments that feel unforced.\n\nAthens rewards a photographer\'s patience. The light is often clear, warm, and directional, especially outside the harsh middle of the day. I plan sessions around how that light moves through different neighbourhoods, seasons, and times of day, so the location supports the mood rather than distracting from it.\n\nMy background includes photographic studies in Berlin and hands-on darkroom practice. Those experiences taught me to see photography as a craft that extends beyond the shutter — into how an image is developed, edited, printed, and sequenced. That same care applies to every project I take on today, whether I\'m working digitally or with film.',
    keyword: 'photographer athens',
    sections: [
      {
        heading: 'A Practice Across Media and Mood',
        body: 'I work with both digital and analog formats depending on what the project asks for. Digital gives me speed and flexibility for commercial and editorial work; 35mm and medium-format film bring a different pace, texture, and tonal quality. Many projects benefit from a hybrid approach: digital for reliability and range, film for frames that need a quieter hand.\n\nMy background includes photographic studies in Berlin and darkroom practice, including black-and-white printing. These experiences shaped how I see: not just through the viewfinder, but through the process of developing, proofing, editing, and sequencing images with intention.',
      },
      {
        heading: 'Who I Work With',
        body: 'My clients range from individuals looking for natural portraits to small businesses building a cohesive brand library, and from artists seeking promotional imagery to editorial teams planning visual stories. I\'m based in Athens and available for selected assignments across Greece and abroad.\n\nEvery project, regardless of scale, starts with a conversation. I want to understand not just what you need photographed, but how you want the images to feel. From there I build a practical shot list, suggest locations, and plan a session that gives us room to explore without losing focus.',
      },
      {
        heading: 'Studio and Location Work in Athens',
        body: 'Athens offers a broad range of backdrops: the stone streets of Plaka and Anafiotika, the slopes of Filopappou with the Acropolis in the frame, the coastline toward Piraeus, and the quiet green of the National Garden. Studio-based sessions can also be arranged when controlled lighting or a minimal background is the better fit.\n\nMy location planning is practical and light-led. When needed, I check timing, background consistency, access, and crowd levels before the session. This preparation means that when you arrive, we spend more time making images and less time deciding where to stand.',
      },
      {
        heading: 'Booking and Turnaround',
        body: 'To book a session, use the contact section and share a few details about your project. We can arrange a call to discuss the brief, timeline, and budget before I prepare a written proposal.\n\nDelivery time depends on the scope of the project and the final image selection. Portrait sessions are usually delivered within a week, while branding and editorial projects may take longer. Rush delivery can be discussed when there is a fixed deadline. Final images are delivered through a private online gallery with direct download.',
      },
      {
        heading: 'Session Preparation Checklist',
        body: 'Once your session is booked, I send preparation notes tailored to the shoot. They cover what to wear, what to bring, how to think about outfit changes or props, and how to arrive feeling prepared rather than over-managed.\n\nFor outdoor sessions, I include timing and weather considerations. For indoor or studio-based sessions, I share practical arrival details. The goal is to remove unnecessary uncertainty so you can arrive relaxed and focused on the experience.',
      },
      {
        heading: 'My Creative Process',
        body: 'Every project follows a structure that leaves room for spontaneity. It begins with a brief — a conversation where I learn about you, your project, and what the images need to communicate. I ask about the intended use of the photos, your preferred style, and any references you admire. From there I prepare a plan covering locations, light, wardrobe notes, shot priorities, and timing.\n\nOn the day of the shoot, I check the light and work methodically through the essential frames while staying alert to unplanned moments — a change in expression, a shift in the background, or a quieter frame that feels more honest than the original idea. After the shoot, I edit the final selection carefully, with colour and retouching choices made to suit the image rather than a fixed preset.',
      },
      {
        heading: 'Why Athens Is Exceptional for Photography',
        body: 'Athens offers a wide visual range in a compact area: neoclassical streets, rocky hills, busy markets, quiet parks, and coastal light toward the Saronic Gulf. The conditions change strongly by season and time of day, which makes planning important.\n\nI pay attention to how light behaves in different parts of the city: morning light through the pines on Filopappou Hill, late-afternoon reflection near marble and pale stone, or soft winter light along the coast. I match locations to the mood and purpose of each session, with backup options when weather or crowds change the plan.',
      },
      {
        heading: 'What to Expect When You Book',
        body: 'After our initial conversation, I send a proposal outlining the session scope, timeline, locations, and investment. Once you confirm, I share preparation notes with wardrobe suggestions, location logistics, and a day-of plan. On the shoot day, I work through the priorities while staying open to spontaneous opportunities.\n\nAfter the session, I review the day\'s images and prepare a selection or proof gallery depending on the project. Final editing includes colour grading, exposure refinement, and subtle retouching. Delivery happens within the agreed timeline through a private online gallery with full-resolution download access.',
      },
    ],
    faq: [
      {
        question: 'What type of photography do you specialise in?',
        answer: 'I work primarily in portrait, editorial, personal branding, travel/documentary, and analog photography. My approach is atmospheric and story-led, whether indoors or on location around Athens.',
      },
      {
        question: 'Are you available for assignments outside Athens?',
        answer: 'Yes. I\'m available for projects across Greece and abroad. Travel and documentary work are central to my practice, so I\'m well set up for location shoots outside the city.',
      },
      {
        question: 'Do you shoot both digital and film?',
        answer: 'Yes. I work with both digital and analog (35mm and medium format) depending on the project. Many clients choose a hybrid approach for different textures within the same set.',
      },
      {
        question: 'How can I book a session?',
        answer: 'Use the contact section on the site to share a few details about your project. From there we can discuss the brief, timeline, and budget.',
      },
      {
        question: 'What should I wear for a photoshoot?',
        answer: 'I recommend solid colours, soft textures, and clothing that feels like you. Avoid busy patterns and logos — they date quickly and distract from your face. I send a detailed styling guide after booking with specific suggestions based on your location and session type.',
      },
      {
        question: 'How long does a typical session last?',
        answer: 'Portrait sessions usually run 1.5 to 2 hours. Branding sessions often range from 3 to 6 hours depending on the brief. Editorial shoots vary by scope. I\'ll give you a clear time estimate before you book.',
      },
      {
        question: 'What happens if it rains on the day of my shoot?',
        answer: 'I monitor weather leading up to outdoor sessions. If conditions are unsuitable, we discuss rescheduling or moving to an indoor alternative. Overcast weather can also work beautifully for portraits, so the decision depends on the look we want.',
      },
      {
        question: 'Can you recommend locations in Athens?',
        answer: 'Absolutely. I maintain a curated list of locations across Athens — from the historic centre to the coast — and I\'m happy to recommend based on your style and the purpose of the images. I also scout new locations on request.',
      },
      {
        question: 'Do you offer commercial usage rights?',
        answer: 'Yes. Branding and editorial packages include commercial usage rights. Portrait sessions include personal use rights. Extended licensing is available for an additional fee.',
      },
      {
        question: 'How are the edited images delivered?',
        answer: 'Final images are delivered through a private online gallery with download access. You can share the gallery with family, friends, or colleagues. Gallery access duration is confirmed with delivery, with extended access available on request.',
      },
    ],
    galleryImages: [
      { src: 'images/album1/545231903_17957342184003956_1496422976014836905_n.jpg', alt: 'Featured photograph by Alexandra Maria Deli — Athens photographer portfolio highlight', width: 800, height: 1000 },
      { src: 'images/album1/544123387_17957342838003956_7079444052374342043_n.jpg', alt: 'Street scene photograph by Alexandra Maria Deli — Athens street photography in Plaka', width: 800, height: 1000 },
      { src: 'images/album1/546523041_17957342757003956_2372337750703247383_n.jpg', alt: 'Architectural detail photograph by Alexandra Maria Deli', width: 800, height: 1000 },

    ],
    relatedPages: ['portrait-photographer-athens', 'personal-branding-photographer-athens', 'editorial-photographer-athens', 'photoshoot-athens'],
    schemaType: 'Photographer',
    socialImage: 'images/album1/545231903_17957342184003956_1496422976014836905_n.jpg',
    ctaText: 'For portrait, editorial, or branding projects in Athens and beyond.',
  },
  {
    slug: 'portrait-photographer-athens',
    title: 'Portrait Photographer in Athens',
    metaTitle: 'Portrait Photographer Athens | Alexandra Maria Deli',
    metaDescription: 'Athens portrait photographer for natural, atmospheric portraits — studio, outdoor, and environmental. Individual and small-group sessions in and around Athens.',
    h1: 'Portrait Photographer Athens',
    introduction: 'Portrait work is at the heart of my practice. I photograph people in a way that feels quiet, intentional, and connected to their environment. Whether indoors or in an Athens neighbourhood, the goal is the same: a portrait that feels like the person, not just a pose. I don\'t use rigid posing templates. Instead, I guide movement, find good light, and watch for the moments in between.\n\nA strong portrait doesn\'t come from a formula. It comes from the interaction between photographer and subject — the trust that builds over the course of a session, the small adjustments in expression and posture that happen when someone relaxes into being seen. My role is to create the conditions for that to happen: the right light, the right location, the right pace.\n\nI photograph professionals, artists, couples, families, and individuals who simply want a set of thoughtful images of themselves. Each session is shaped around the person, their comfort level, and the purpose of the photographs. What remains consistent is the attention to light, composition, and the quality of the interaction.',
    keyword: 'portrait photographer athens',
    sections: [
      {
        heading: 'My Approach to Portraiture',
        body: 'A portrait session with me is less about a series of prescribed poses and more about creating a space where you can be yourself in front of the camera. I work with natural light whenever possible, and I\'m patient — I\'d rather wait for the right expression than rush through a list of setups.\n\nBefore each session, I send a brief questionnaire about your style, comfort level, and what you want the images for. This helps me plan the light, location, and pacing. On the day, we move slowly. I\'ll show you frames as we go so you can see what\'s working and build confidence in front of the lens.',
      },
      {
        heading: 'Where Portrait Sessions Happen',
        body: 'Portrait sessions can happen in three kinds of settings. The first is a studio or indoor space, which gives controlled light and a focused background. The second is outdoors in the city: Plaka\'s stone streets, Anafiotika\'s whitewashed walls, the green paths of the National Garden, or the hills around Filopappou with the city below. The third is a location of your choice: your home, your workspace, or somewhere that holds meaning for you.\n\nEach setting gives a different feel. Studio-style portraits are focused and graphic. Outdoor portraits add context and atmosphere. Environmental portraits tell a story about where you live or work. I can help you choose based on the look you want and how you plan to use the images.',
      },
      {
        heading: 'Who Books Portrait Sessions',
        body: 'Portrait clients include professionals updating their LinkedIn and website presence, actors and performers needing headshots, couples celebrating an engagement or anniversary, and individuals who simply want a set of thoughtful, well-crafted images of themselves. I also photograph small groups — families, creative teams, friend groups — in sessions that balance group compositions with individual frames.\n\nPortrait sessions usually include a pre-shoot conversation, the shoot itself, and a curated set of edited images. The final selection is delivered through a private gallery with download access.',
      },
      {
        heading: 'Preparation and Styling Guidance',
        body: 'After booking, I send preparation notes covering clothing suggestions, grooming tips, what to bring, and how to prepare if you\'re nervous about being photographed. Many people feel awkward in front of a camera at first — that\'s normal. I pace the session to build comfort gradually, starting with simpler setups and working toward more expressive frames as you settle in.',
      },
      {
        heading: 'The Portrait Session Workflow',
        body: 'A typical portrait session follows a rhythm designed to build confidence. We start with a warm-up — a few frames in straightforward light with minimal direction. This gives you time to adjust to being in front of the lens without pressure. As you settle in, I gradually introduce more direction: changes in position, expression, and interaction with the environment.\n\nI can review frames with you as we go, showing you what\'s working so you can understand the direction of the session. As the shoot progresses, the most natural portraits often come from small pauses, movement, and in-between expressions. I leave time at the end to revisit any setup you particularly enjoyed or to try something spontaneous that occurred to us during the shoot.',
      },
      {
        heading: 'Editing and Delivery',
        body: 'After the session, I select the strongest frames and edit the final set with a natural, film-informed approach. I adjust exposure, colour-grade for mood, and apply subtle retouching that preserves skin texture. I avoid heavy airbrushing or artificial reshaping.\n\nFinal images are delivered through a private online gallery within the agreed timeline. Where appropriate, I include both colour and black-and-white versions, along with files suitable for web use.',
      },
      {
        heading: 'Who Portrait Sessions Are For',
        body: 'Portrait sessions suit anyone who needs professional, authentic images of themselves. I photograph professionals updating their LinkedIn and website presence, actors and performers needing headshots, couples celebrating an engagement or anniversary, individuals who simply want a set of thoughtful images, and small groups such as families or creative teams. Every session is tailored to the subject and the intended use of the photographs.\n\nI also offer specialised portrait sessions for artists and makers who need images for press kits, exhibition catalogues, or grant applications. These sessions focus on the relationship between the person and their work, combining environmental portraits with detail shots of their creative practice.',
      },
    ],
    faq: [
      {
        question: 'Where do portrait sessions take place?',
        answer: 'Sessions can happen in an indoor or studio-style space, outdoors in Athens (Plaka, Anafiotika, the hills around the city), or at a location meaningful to you — a home, a workspace, or a favourite neighbourhood.',
      },
      {
        question: 'How long does a typical portrait session last?',
        answer: 'A standard session runs 1.5 to 2 hours. This allows enough time to settle in, explore different light conditions, and create a varied set of images without rushing.',
      },
      {
        question: 'Do you retouch the photos?',
        answer: 'Yes. Final images are carefully edited with colour grading, exposure refinement, and subtle retouching. My style leans toward natural, film-informed tones rather than heavy airbrushing.',
      },
      {
        question: 'What should I wear for a portrait session?',
        answer: 'I recommend solid colours, soft textures, and clothing that feels like you. Avoid busy patterns and logos. I send a short styling guide after booking to help you prepare.',
      },
      {
        question: 'Do you photograph couples together?',
        answer: 'Yes. Couples sessions are some of my favourites. The dynamic between two people creates natural, candid moments that are hard to replicate with an individual. I keep the session relaxed with gentle direction.',
      },
      {
        question: 'Can I bring outfit changes?',
        answer: 'Absolutely. I recommend planning 2-3 outfits for a standard session. Bring them to the shoot and I\'ll help you choose which works best in each location and light condition.',
      },
      {
        question: 'What happens if I\'m nervous about being photographed?',
        answer: 'Many people feel nervous at first. I start each session with simple, low-pressure frames so you can settle in before we move toward more expressive portraits.',
      },
      {
        question: 'Do you offer headshots for professional use?',
        answer: 'Yes. Headshots are included in portrait sessions. I can shoot against a clean background in the studio or use an outdoor setting for a more natural look. Both work well for LinkedIn, company websites, and press.',
      },
      {
        question: 'Can we shoot at my home or workplace?',
        answer: 'Yes. Environmental portraits at your home or workplace add context and authenticity. When needed, I review the space beforehand or ask for reference photos so we can plan the best light and angles.',
      },
      {
        question: 'How many photos do I receive?',
        answer: 'For a standard portrait session, the final number of edited images depends on the brief and package. I confirm the expected range before booking.',
      },
    ],
    galleryImages: [
      { src: 'images/album1/544844732_17957343321003956_6179681169613150223_n.jpg', alt: 'Portrait photograph by Alexandra Maria Deli', width: 800, height: 1000 },

      { src: 'images/album1/544823803_17957343063003956_3198052180525970656_n.jpg', alt: 'Environmental portrait by Alexandra Maria Deli', width: 800, height: 1000 },

      { src: 'images/album1/545351514_17957344248003956_4273194522779784991_n.jpg', alt: 'Studio portrait photograph by Alexandra Maria Deli', width: 800, height: 1000 },

    ],
    relatedPages: ['photographer-athens', 'personal-branding-photographer-athens', 'photoshoot-athens', 'plaka-photoshoot'],
    schemaType: 'Photographer',
    socialImage: 'images/album1/544844732_17957343321003956_6179681169613150223_n.jpg',
    ctaText: 'Book your portrait session — studio or on location in Athens.',
  },
  {
    slug: 'personal-branding-photographer-athens',
    title: 'Personal Branding Photographer in Athens',
    metaTitle: 'Personal Branding Photographer Athens | Alexandra Maria Deli',
    metaDescription: 'Branding photography for creative professionals, small businesses, and personal brands in Athens. Cohesive visual sets for your website, social media, and press.',
    h1: 'Personal Branding Photographer Athens',
    introduction: 'Your brand visuals should feel as considered as the work you do. I work with creative professionals, small businesses, and personal brands in Athens to build cohesive image libraries — portraits, workspace shots, process imagery, and detail frames — that translate across web and social media. A strong set of brand images does more than fill a gallery: it communicates care, consistency, and point of view.\n\nPersonal branding photography is different from a standard portrait session. The focus is not just on how you look, but on what you do, where you work, and how you create. The strongest branding images support a clear message about your expertise, your values, and the quality of your work. I spend time understanding that message before I plan the shoot.\n\nBranding sessions are suited to architects, designers, musicians, therapists, chefs, ceramicists, makers, and small-business owners who need images that feel authentic rather than staged. I avoid stiff, overtly commercial branding photography in favour of frames that show the person and their work with clarity and warmth.',
    keyword: 'personal branding photographer athens',
    sections: [
      {
        heading: 'What a Branding Session Includes',
        body: 'A typical branding package begins with a planning call where we discuss your visual identity, the platforms you use, and how the images will be deployed. From there I build a shot list organised by category: hero portraits, candid working shots, detail images of your tools or products, and environmental shots of your workspace.\n\nOn the shoot day, we work through each category systematically. I direct light and composition while keeping the atmosphere natural — I want the images to feel like you, not like a stock photo. After the shoot, I edit and deliver a curated set of images in both landscape and vertical crops, optimised for web and social use.',
      },
      {
        heading: 'Why Cohesive Visuals Matter for Your Brand',
        body: 'In a crowded marketplace, consistency helps a brand become recognisable. A set of images that shares a considered colour palette, lighting style, and compositional approach can signal professionalism and attention to detail. Whether a visitor lands on your website, scrolls through your Instagram, or reads a feature about your work, the visual language should feel connected.\n\nI help achieve this by planning light and palette before the shoot. If you already have brand guidelines, I work within them. If you don\'t, we can use the planning process to define a simple visual direction for the session.',
      },
      {
        heading: 'Industries and Roles I Work With',
        body: 'My branding clients include architects, designers, chefs, musicians, therapists, coaches, makers, and small-shop owners. Anyone whose work benefits from a professional visual presence. I\'m comfortable shooting in a wide range of environments — from a quiet home office to a busy restaurant kitchen, from a ceramic studio to a law firm\'s reception.\n\nThe common thread is a desire for images that feel authentic. I avoid stiff, overly produced branding photography in favour of frames that show the person and their work with clarity and warmth.',
      },
      {
        heading: 'The Planning Process',
        body: 'Before the shoot, I ask you to share examples of branding photography you admire, your current website and social channels, and any brand guidelines you\'ve developed. I use this to build a shot list organised by use case: hero images for your homepage, portrait variants for your About page, detail shots for product or service pages, and candid process images for social media.\n\nOn the day, we work efficiently through each category. I direct movement and composition while keeping the energy natural. After the shoot, I prepare a proof gallery or edited selection depending on the package and deliver the final set within the agreed timeline.',
      },
      {
        heading: 'From Session to Strategy',
        body: 'A branding session does not end with image delivery. I help you think about how each image will be used — which frames work best as hero visuals, which belong on your About page, and which are strongest for social media. When useful, I deliver images in multiple aspect ratios for websites, vertical platforms, and profile or directory listings.\n\nFor larger branding projects, I can also provide simple usage notes that map image types to likely placements. This helps the photographs work as part of a wider visual system rather than a folder of disconnected files.',
      },
      {
        heading: 'Building a Long-Term Visual Identity',
        body: 'Brand imagery often needs updating as your work evolves. Returning clients can book refresh sessions to keep portraits, workspace images, and process photographs current without rebuilding the entire visual direction from scratch.\n\nWhen a project has an ongoing need, I keep notes on the colour palette, lighting approach, and compositional preferences used in the original session. This makes future shoots easier to align, even if they happen months apart.',
      },
      {
        heading: 'Deliverables and Post-Production',
        body: 'After your branding session, I review the day\'s images and prepare a proof gallery or edited selection depending on the agreed package. Final editing includes colour grading, exposure refinement, and subtle retouching. Where needed, I deliver the final set in multiple aspect ratios for website and social use.\n\nImages are delivered through a private online gallery with download access. For clients working toward a launch or content calendar, staged delivery can be discussed during planning.',
      },
    ],
    faq: [
      {
        question: 'What is included in a branding photography package?',
        answer: 'A typical package includes a planning call, a half-day or full-day shoot, and a curated set of edited images. Depending on the brief, this can include portraits, workspace/environment shots, detail images, and process frames for web and social use.',
      },
      {
        question: 'Can we shoot at my workspace or studio?',
        answer: 'Absolutely. Shooting on location at your workspace, studio, or a place that reflects your brand adds authenticity. When useful, I review the space beforehand or ask for reference photos to plan light and angles.',
      },
      {
        question: 'Do you offer commercial usage rights?',
        answer: 'Yes. Branding projects include usage rights for the agreed channels, such as web, social media, press, or print. The scope is confirmed in the proposal so there is no ambiguity.',
      },
      {
        question: 'How many images do you deliver?',
        answer: 'The final number depends on the package and brief. I confirm the expected image range before booking so you know what will be delivered.',
      },
      {
        question: 'What if I don\'t have brand guidelines?',
        answer: 'That\'s perfectly fine. I can help define a visual direction during our planning call. We\'ll discuss colour palettes, mood, and how you want the images to feel across your website and social channels.',
      },
      {
        question: 'How long does a branding session take?',
        answer: 'Half-day sessions run 3-4 hours. Full-day sessions run 6-8 hours. The timeline depends on the number of looks, locations, and outfit changes you need.',
      },
      {
        question: 'Do you shoot product photos as part of branding?',
        answer: 'Yes. Detail shots of your products, tools, or workspace are included in branding packages. These images work well for product pages, social media content, and press kits.',
      },
      {
        question: 'Can I update my brand photos annually?',
        answer: 'Yes. Returning clients can book refresh sessions when they need updated portraits, workspace images, or seasonal content.',
      },
      {
        question: 'What should I prepare before a branding shoot?',
        answer: 'I\'ll send a preparation guide that covers wardrobe, workspace styling, props, and scheduling. I also ask for examples of branding photography you admire and any current brand assets (logo, colours, fonts).',
      },
      {
        question: 'Do you offer rush delivery for branding projects?',
        answer: 'Rush delivery can be discussed when there is a fixed deadline. Standard turnaround depends on the scope and final image count.',
      },
    ],
    galleryImages: [
      { src: 'images/album1/544145230_17957343375003956_5933756572986482124_n.jpg', alt: 'Branding photograph by Alexandra Maria Deli', width: 800, height: 1000 },

      { src: 'images/album1/546571339_17957343453003956_6976260187363928964_n.jpg', alt: 'Workspace detail by Alexandra Maria Deli', width: 800, height: 1000 },

      { src: 'images/album1/544089634_17957344473003956_5163365635602737228_n.jpg', alt: 'Process photograph by Alexandra Maria Deli', width: 800, height: 1000 },

    ],
    schemaType: 'LocalBusiness',
    socialImage: 'images/album1/546571339_17957343453003956_6976260187363928964_n.jpg',
    ctaText: 'Build your brand library with cohesive, professional visuals.',
    relatedPages: ['photographer-athens', 'portrait-photographer-athens', 'photoshoot-athens', 'photographer-athens-prices'],
  },
  {
    slug: 'editorial-photographer-athens',
    title: 'Editorial Photographer in Athens',
    metaTitle: 'Editorial Photographer Athens | Alexandra Maria Deli',
    metaDescription: 'Editorial photography in Athens for magazines, brands, and artists. Narrative-driven images with a documentary sensibility and cinematic palette.',
    h1: 'Editorial Photographer Athens',
    introduction: 'Editorial projects are where my background in visual storytelling comes forward most naturally. I collaborate with brands, artists, and creative teams to create narrative-driven images — on location in Athens or further afield. My editorial eye leans toward natural light, muted colour palettes, and composition that leaves room for atmosphere. I\'m interested in what the frame suggests rather than everything it shows.\n\nEditorial work is collaborative. I work closely with the people shaping the brief to develop a visual language that serves the story. This requires not just technical skill but the ability to interpret direction, adapt to changing conditions on set, and deliver images that are cohesive as a series rather than just strong as individual frames.\n\nI have photographed musicians, chefs, architects, and artists in studios, homes, workspaces, and performance environments. Each assignment reinforces the same lesson: the strongest editorial images come from preparation, trust, and the ability to find the right light quickly in an unfamiliar space.',
    keyword: 'editorial photographer athens',
    sections: [
      {
        heading: 'My Editorial Process',
        body: 'Every editorial project begins with a creative brief. I read the story, discuss the mood with the editor or creative director, and build a visual plan that serves the narrative. This includes location scouting, lighting tests, model or subject casting input, and a mood board that aligns the team\'s expectations.\n\nOn set, I work quickly but not hurriedly. Editorial shoots often involve multiple looks or locations within a tight window, so I plan lighting setups in advance and communicate clearly with the team. I shoot tethered when needed so the art director can review frames in real time. Post-production focuses on colour grading that reinforces the story\'s emotional tone.',
      },
      {
        heading: 'Types of Editorial Work',
        body: 'Editorial photography can include portrait series, fashion stories, documentary features, travel essays, food imagery, and product-led visual stories. Each genre demands a different approach. Portraiture for editorial often requires a stronger sense of concept and styling than a standalone portrait session. Fashion and lifestyle stories may involve coordination with stylists, makeup artists, assistants, or location contacts. Documentary and travel work requires adaptability — working with available light, unfamiliar environments, and unpredictable subjects.\n\nAthens is a strong city for editorial work because of its visual contrast: ancient and modern, dense and open, luminous and shadowed. I use these contrasts deliberately in my editorial compositions.',
      },
      {
        heading: 'Mood, Light, and Palette',
        body: 'My editorial style is defined by natural light, muted colour palettes, and compositions that prioritise atmosphere over explicitness. I rarely oversaturate or use heavy contrast. Instead, I work with the light that exists on location, shaping it with reflectors or diffusers when needed but preserving its natural character.\n\nColour grading is applied per project to reinforce the emotional tone of the story. A documentary series about the Athenian coastline might call for cool, desaturated tones. A portrait of a ceramic artist might lean warm and earthy. The grading is always in service of the narrative, not an aesthetic applied uniformly across projects.',
      },
      {
        heading: 'Deliverables and Timeline',
        body: 'Editorial clients receive a curated set of high-resolution images with a written usage agreement. I deliver via a private online gallery with download access. Turnaround depends on the scope of the shoot, the number of final images, and whether client review rounds are included.\n\nFor time-sensitive projects, expedited editing can be discussed before booking. I can provide both colour and black-and-white versions where appropriate, and print-specific file preparation can be arranged when needed.',
      },
      {
        heading: 'Working with Publications and Brands',
        body: 'Editorial assignments start with a clear creative brief that defines the visual direction, the number of final images required, usage rights, and deadlines. Depending on the project, I can help with location scouting, production planning, and post-production, while larger productions may involve additional collaborators.\n\nClient feedback is important to me. Throughout the selection and editing process, I involve the editor, brand lead, or art director in key decisions where appropriate: initial selects, colour direction, and final retouching. This collaborative approach helps the finished set align with the project\'s visual standards.',
      },
      {
        heading: 'Preparing for an Editorial Assignment',
        body: 'Preparation for an editorial shoot goes beyond standard session planning. I research the publication\'s visual style by studying previous issues or online features. I develop a mood board that covers lighting references, colour direction, and composition references. I coordinate with stylists, makeup artists, and assistants to ensure everyone arrives on the same page.\n\nOn location, I work quickly and communicate clearly. Editorial shoots often involve multiple scenes within a tight window, so I plan lighting setups in advance and shoot tethered when the art director needs to review frames in real time. Post-production focuses on colour grading that reinforces the editorial tone, and I deliver images organised by scene or narrative sequence rather than as a flat collection.',
      },
      {
        heading: 'Why Athens for Editorial Photography',
        body: 'Athens is a rewarding editorial location because of its visual contrast: ancient marble against modern concrete, quiet residential courtyards near busy commercial streets, and sea light visible from parts of the city. This variety makes it possible to build several distinct moods within a compact production day.\n\nThe quality of light in Athens can be a practical advantage for editorial shoots, especially early in the morning or late in the day. Overcast days can also be useful for portrait-led work because the light becomes softer and more even. These conditions make Athens a flexible location for editorial assignments of different scales.',
      },
    ],
    faq: [
      {
        question: 'What editorial experience do you have?',
        answer: 'My editorial work includes portrait-led, documentary, travel, fashion, and lifestyle-oriented projects. My approach is collaborative, with a strong emphasis on pre-production planning and mood-board development.',
      },
      {
        question: 'Do you work with a team or independently?',
        answer: 'I\'m comfortable working both ways. I have a network of stylists, makeup artists, and assistants in Athens, and I\'m also happy to work independently depending on the scale of the project.',
      },
      {
        question: 'Can you shoot both indoors and outdoors for editorials?',
        answer: 'Yes. My portfolio spans studio editorials, outdoor location shoots across Athens, and mixed projects that combine both. I adapt the lighting and approach to the narrative needs of each story.',
      },
      {
        question: 'How do you handle usage licensing for editorial work?',
        answer: 'Licensing is negotiated per project and typically covers specific publication use, territory, and duration. I\'m flexible and transparent about usage terms.',
      },
      {
        question: 'What is the typical timeline for an editorial project?',
        answer: 'The timeline depends on pre-production, shoot scope, editing, and any review rounds. I confirm a realistic schedule after reviewing the brief, and rush timelines can be discussed for time-sensitive assignments.',
      },
      {
        question: 'Do you provide mood boards before the shoot?',
        answer: 'Yes. For editorial projects, I usually develop a visual mood board after the initial briefing. It can cover lighting references, colour direction, composition styles, and wardrobe or prop suggestions.',
      },
      {
        question: 'Can you handle permits and location releases?',
        answer: 'Some locations require permits or written approval, especially for commercial production. When that applies, I help identify the relevant process and build the necessary lead time into the schedule.',
      },
      {
        question: 'Do you deliver both colour and black-and-white?',
        answer: 'Yes. Where appropriate, I provide both colour-graded and black-and-white versions of selected frames. This is common in editorial work where publications may use different treatments across print and digital.',
      },
      {
        question: 'What format do you deliver editorial images in?',
        answer: 'I usually deliver high-resolution JPEG files suitable for web and many editorial uses. For print-specific projects, additional file formats or colour-profile preparation can be discussed before delivery.',
      },
      {
        question: 'Do you accept editorial assignments outside Greece?',
        answer: 'Yes. I\'m available for editorial assignments internationally. Travel and documentary work are central to my practice, and I\'m experienced in producing work in unfamiliar environments with tight deadlines.',
      },
    ],
    galleryImages: [
      { src: 'images/album1/542865988_17957342607003956_4305994197225772454_n.jpg', alt: 'Editorial photograph by Alexandra Maria Deli', width: 800, height: 1000 },

      { src: 'images/album1/544995829_17957343621003956_1516659409349310951_n.jpg', alt: 'Editorial travel photograph by Alexandra Maria Deli', width: 800, height: 1000 },

      { src: 'images/album1/543984369_17957345421003956_262576140533256651_n.jpg', alt: 'Editorial detail shot by Alexandra Maria Deli', width: 800, height: 1000 },

    ],
    relatedPages: ['photographer-athens', 'portrait-photographer-athens', 'photoshoot-athens', 'acropolis-photoshoot'],
    schemaType: 'Photographer',
    socialImage: 'images/album1/542865988_17957342607003956_4305994197225772454_n.jpg',
    ctaText: 'For editorial commissions, pitches, and collaborations.',
  },
  {
    slug: 'photoshoot-athens',
    title: 'Photoshoot in Athens',
    metaTitle: 'Photoshoot in Athens | Alexandra Maria Deli',
    metaDescription: 'Book a photoshoot in Athens — portraits, branding, editorial, or personal projects. Indoor and location sessions with an Athens photographer.',
    h1: 'Photoshoot in Athens',
    introduction: 'Whether you\'re looking for portraits, branding imagery, editorial content, or personal project photographs, I offer photoshoot sessions in Athens tailored to your needs. Every session is planned around light, location, and the specific mood you want to capture.\n\nA photoshoot in Athens can change character completely between neighbourhoods — from the whitewashed steps of Anafiotika to the seaside promenade of the Athens Riviera, from the marble courtyards of the Zappeion to the urban murals of Psyrri. I help you choose a setting that matches your vision and the practical needs of the shoot.\n\nEvery session is preceded by a conversation where I learn about your goals, your comfort level with being photographed, and the style you\'re drawn to. I build the session around your answers — selecting locations that suit your personality, planning a pace that works for you, and preparing guidance that addresses any concerns you have about the experience.',
    keyword: 'photoshoot athens',
    sections: [
      {
        heading: 'Planning Your Athens Photoshoot',
        body: 'The best photoshoots are planned but not rigid. I start with a conversation: what are the images for, what style resonates with you, have you done a shoot before, and what would help you feel comfortable? I build the session around your answers.\n\nI help with location planning, timing based on light conditions, and a shot list that covers the essentials while leaving room for spontaneous frames. I also send preparation notes covering clothing, grooming, what to bring, and what to expect on the day.',
      },
      {
        heading: 'Studio vs. Location: Which Is Right for You?',
        body: 'Studio-style sessions give you controlled lighting and a clean, distraction-free background. They are useful for headshots, product work, and portraits where the focus is entirely on the subject. Indoor or studio spaces can be arranged when they suit the brief.\n\nLocation sessions take advantage of Athens\'s architecture and natural light. Depending on the session length, we can work through one or several distinct looks — from the neoclassical streets of Plaka to the panoramic views from Filopappou Hill, from the seaside light of the Athenian Riviera to the urban texture of Exarcheia. I help you choose based on your style and the purpose of the images.',
      },
      {
        heading: 'Session Types and Duration',
        body: 'A standard portrait session usually runs 1.5 to 2 hours, enough for one focused location or a small number of simple looks. Half-day sessions suit branding shoots or multiple locations. Full-day sessions are better for editorial productions, complex branding projects, or shoots involving multiple subjects, outfit changes, and locations.\n\nTurnaround time depends on the scope and final image count. Rush delivery can be discussed when there is a fixed deadline. Final images are delivered via a private online gallery with download access.',
      },
      {
        heading: 'How to Prepare for Your Photoshoot',
        body: 'I send preparation notes with every booking confirmation. They cover wardrobe suggestions, grooming tips, what to bring, and any weather considerations for outdoor sessions.\n\nOn the day, arrive rested and hydrated. If you\'re nervous, that\'s completely normal — I start each session with simple, low-pressure frames so you have time to settle in before we move toward more expressive images.',
      },
      {
        heading: 'Popular Athens Photoshoot Locations',
        body: 'Athens has many photogenic locations within a short distance of the centre. Useful options include the neoclassical streets of Plaka, the panoramic views from Filopappou Hill, the seaside light of the Athens Riviera, the urban character of Psyrri and Kerameikos, and the green spaces of the National Garden or the Stavros Niarchos Foundation Cultural Center.\n\nI keep notes on locations, best shooting times, light conditions, crowd levels, and possible permit restrictions. I\'m also happy to research a new location if you have something specific in mind — a particular rooftop, a hidden courtyard, or a cafe with good natural light.',
      },
      {
        heading: 'Seasonal Considerations for Your Shoot',
        body: 'Each season in Athens offers different photographic opportunities. Spring brings mild temperatures and colour in the streets. Summer offers long days but often requires early starts to avoid heat and crowds. Autumn can bring warm, directional light. Winter is quieter, with lower sun and occasional overcast days that can be excellent for portraits.\n\nI advise clients on the best timing for their specific vision. If you have a fixed deadline, I\'ll work around the seasonal conditions to find the strongest available light within your schedule.',
      },
      {
        heading: 'The Day-of Photoshoot Experience',
        body: 'On the day of your shoot, I check the location, equipment, and light before we begin. We start with a brief check-in and a simple warm-up setup in good light. This first setup is intentionally easy: it gives you time to adjust and gives me a baseline to work from.\n\nAs the session progresses, I introduce more variety in posing, location, and expression. I can show you frames on the back of the camera so you can see what\'s working. I also leave space for the spontaneous images that often happen between planned setups.',
      },
    ],
    faq: [
      {
        question: 'How do I book a photoshoot in Athens?',
        answer: 'Use the contact section and mention what kind of session you\'re looking for. From there, we\'ll set up a call to discuss the details.',
      },
      {
        question: 'What locations in Athens do you recommend?',
        answer: 'Popular choices include Plaka, Anafiotika, the National Garden, Lycabettus Hill, and the coastline around Piraeus. I\'m also happy to scout a new location if you have something specific in mind.',
      },
      {
        question: 'What is your pricing for a photoshoot?',
        answer: 'Pricing depends on the type and duration of the session. The prices page lists current starting points, and editorial or commercial projects are quoted per brief.',
      },
      {
        question: 'What is the turnaround time for edited photos?',
        answer: 'Delivery depends on the size of the set and the project scope. Rush delivery can be discussed when there is a fixed deadline.',
      },
      {
        question: 'Can I bring multiple outfits?',
        answer: 'Yes. I recommend 2-3 outfits for a standard session. Choose pieces that reflect different sides of your personality — casual, polished, and something in between.',
      },
      {
        question: 'What happens if the weather is bad?',
        answer: 'I monitor forecasts before outdoor sessions and will suggest rescheduling or an indoor alternative if conditions are unsuitable.',
      },
      {
        question: 'Do you shoot in the studio as well as on location?',
        answer: 'Yes. Indoor or studio-style sessions can be arranged when controlled lighting or a simple background is the better fit. They are especially useful for headshots and product work.',
      },
      {
        question: 'Can I see the photos during the shoot?',
        answer: 'Yes. I review frames with you throughout the session so you can see what\'s working and build confidence. This also helps us adjust direction in real time.',
      },
      {
        question: 'Do you offer prints or albums?',
        answer: 'Prints and albums can be discussed on request. Options depend on the image selection, size, finish, and timeline.',
      },
      {
        question: 'Can couples or groups book a session?',
        answer: 'Yes. I photograph couples, families, and small groups. Group pricing depends on the number of people, location, and session length.',
      },
    ],
    galleryImages: [
      { src: 'images/album1/545231903_17957342184003956_1496422976014836905_n.jpg', alt: 'Athens photoshoot photograph by Alexandra Maria Deli', width: 800, height: 1000 },

      { src: 'images/album1/544823803_17957343063003956_3198052180525970656_n.jpg', alt: 'Location photoshoot in Athens by Alexandra Maria Deli', width: 800, height: 1000 },

      { src: 'images/album1/544844732_17957343321003956_6179681169613150223_n.jpg', alt: 'Portrait session in Athens by Alexandra Maria Deli', width: 800, height: 1000 },

    ],
    relatedPages: ['photographer-athens', 'acropolis-photoshoot', 'plaka-photoshoot', 'photographer-athens-prices'],
    schemaType: 'LocalBusiness',
    socialImage: 'images/album1/544823803_17957343063003956_3198052180525970656_n.jpg',
    ctaText: 'Plan your Athens photoshoot — portraits, branding, or editorial.',
  },
  {
    slug: 'acropolis-photoshoot',
    title: 'Acropolis Photoshoot',
    metaTitle: 'Acropolis Photoshoot Athens | Alexandra Maria Deli',
    metaDescription: 'Photoshoot at the Acropolis in Athens. Professional photography with the Parthenon backdrop. Portrait, editorial, and branding sessions at the Acropolis.',
    h1: 'Acropolis Photoshoot',
    introduction: 'The Acropolis area offers a powerful backdrop for a photoshoot when it is planned with care. I organise portrait, editorial, and branding sessions around the Acropolis — working from nearby public viewpoints, the slopes of Filopappou, or streets that frame the Parthenon from a respectful distance. It is a location that rewards early starts, flexible timing, and careful attention to current rules.\n\nWhat makes an Acropolis photoshoot special is not only the monument itself but the way it interacts with the city around it. From Filopappou Hill, the Parthenon can sit above the treeline, visible against the sky. From Anafiotika\'s narrow whitewashed streets, it appears between rooflines — a reminder of how closely ancient and modern Athens coexist.\n\nI plan Acropolis-area sessions around light, access, and crowd levels. The goal is not to make a tourist postcard, but to create portraits or editorial images where the location adds atmosphere and context without overwhelming the subject.\n\nAn Acropolis photoshoot is as much about the experience as it is about the images. Early morning light, quieter paths, and the city waking below the hill all help shape the mood of the session.',
    keyword: 'acropolis photoshoot athens',
    sections: [
      {
        heading: 'Why the Acropolis for a Photoshoot',
        body: 'The Acropolis is not just a monument — it is part of the city\'s visual language. The way its columns stand against the sky, the way the city falls away below it, and the way the surrounding hills frame it can all add depth to a portrait or editorial image. For a photoshoot, what matters most is finding frames that feel personal rather than generic.\n\nI avoid the most obvious tourist viewpoints when possible and instead work from angles that use the Acropolis as a contextual backdrop rather than a literal subject. Filopappou Hill, the slopes of the Pnyx, and the streets of Anafiotika can all offer compositions where the Acropolis sits naturally in the frame — part of the landscape rather than dominating it.',
      },
      {
        heading: 'Logistics and Permits',
        body: 'Permit requirements around archaeological sites and monuments can change depending on the location, equipment, crew size, and intended use of the images. Small portrait sessions from public viewpoints may be possible without a formal production permit, while commercial shoots, larger crews, or work inside controlled archaeological areas may require approval from the relevant authorities.\n\nI discuss the intended use and location before confirming the route. If a permit appears necessary, we build in extra lead time and identify the appropriate process. For sessions from public viewpoints, I usually recommend early morning or the golden hour before sunset, when the light is softer and the area is often calmer.',
      },
      {
        heading: 'What to Expect from an Acropolis Session',
        body: 'Most Acropolis sessions run 1.5 to 2 hours and cover 2-3 distinct viewpoints. We start at one location, work through a series of compositions as the light changes, then move to the next spot. I pace the session so we capture variety without feeling rushed.\n\nI recommend wearing comfortable shoes — there\'s walking involved, and some of the best viewpoints are up gentle slopes. The terrain is dry and stable but uneven in places. I\'ll send exact meeting coordinates and a parking or taxi plan before the session so there\'s no confusion on the day.',
      },
      {
        heading: 'Combining the Acropolis with Other Locations',
        body: 'Many clients combine an Acropolis-area session with nearby locations for greater variety. A longer session can include public Acropolis viewpoints, the narrow streets of Anafiotika, and parts of Plaka. Each location adds a different texture: monumental, intimate, and urban.\n\nCombined sessions are planned around walking distance, light, crowds, and outfit changes. They typically need more time than a single-location shoot, but they can produce a varied set of images that still feels cohesive.\n\nBy working through nearby locations in one planned route, we reduce unnecessary travel and keep the visual story connected. The images from each location can complement one another across your website, social media, or portfolio.',
      },
      {
        heading: 'What to Wear for an Acropolis Photoshoot',
        body: 'The Acropolis setting calls for outfits that complement rather than compete with the landscape. Neutral tones — cream, beige, taupe, pale blue, dusty rose — often work well against pale stone and sky. Flowing fabrics can add movement to portraits. For editorial shoots, bolder colours can create a stronger contrast when they fit the concept.\n\nComfortable walking shoes are essential since many viewpoints involve uneven ground. A light layer can be useful for early morning sessions, depending on the season. I\'ll send specific wardrobe guidance after booking, tailored to the route we\'ll be using.',
      },
      {
        heading: 'Best Times of Year for an Acropolis Shoot',
        body: 'The Acropolis area is photogenic year-round, but the experience varies by season. Spring can bring mild temperatures and colour on the surrounding hills. Autumn often has warm light and more comfortable conditions. Summer usually requires very early starts to avoid heat and peak visitor traffic.\n\nWinter sessions have their own appeal. The lower sun can create long shadows, the area is often quieter, and cloudy days provide soft, diffused light that can be flattering for portraits.',
      },
      {
        heading: 'The Golden Hour Experience',
        body: 'Golden-hour light around the Acropolis can be warm, directional, and flattering, but the exact timing changes throughout the year and depends on the chosen viewpoint. During these windows, long shadows and lower contrast can add depth to portraits.\n\nI plan Acropolis-area sessions around the season, sunrise or sunset time, and how the light reaches each viewpoint. The goal is to arrive with enough time to settle in, adjust the route if needed, and work with the strongest available light rather than chasing a rigid minute-by-minute schedule.',
      },
      {
        heading: 'What to Bring to Your Acropolis Session',
        body: 'Comfortable walking shoes are essential — the terrain around Filopappou and the Acropolis slopes is uneven in places. Bring water, especially during warmer months, and consider a light layer for early morning sessions depending on the season.\n\nFor outfit changes, bring your looks in a small bag and we\'ll plan discreet, practical options along the route where possible. Sunscreen and sunglasses are advisable for warmer months, and contact lens wearers may want to bring eye drops for longer outdoor sessions.',
      },
    ],
    faq: [
      {
        question: 'Do I need a permit to shoot at the Acropolis?',
        answer: 'Permit requirements depend on the exact location, equipment, crew size, and intended use of the images. Commercial or larger productions may need formal approval, while smaller sessions from public viewpoints may be simpler. I confirm the approach before booking.',
      },
      {
        question: 'What time of day is best for an Acropolis photoshoot?',
        answer: 'Early morning and the period before sunset often offer softer light and fewer visitors. The exact timing depends on the season and chosen viewpoint.',
      },
      {
        question: 'What are the best viewpoints for shooting the Acropolis?',
        answer: 'Filopappou Hill, Areopagus Hill, and parts of Anafiotika can all offer strong views of the Acropolis. Each gives a different feel — from wider cityscape frames to more intimate foreground-background compositions.',
      },
      {
        question: 'How long does an Acropolis photoshoot last?',
        answer: 'Most Acropolis sessions run 1.5 to 2 hours, allowing time to visit 2-3 viewpoints and work with changing light conditions.',
      },
      {
        question: 'What should I wear for an Acropolis photoshoot?',
        answer: 'Neutral tones and flowing fabrics work beautifully against the marble and sky. Avoid busy patterns. Bring a light layer — it can be cool on the hill in the early morning, even in summer.',
      },
      {
        question: 'Is it crowded at the Acropolis viewpoints?',
        answer: 'Popular viewpoints can get busy, especially from late morning through afternoon. I plan sessions during low-traffic hours and know several quieter spots that most visitors don\'t find.',
      },
      {
        question: 'Can we combine the Acropolis with other locations?',
        answer: 'Yes. Many clients combine an Acropolis-area shoot with Anafiotika or Plaka. The route and timing depend on walking distance, light, outfit changes, and the amount of variety you want.',
      },
      {
        question: 'What happens if it\'s cloudy on the day?',
        answer: 'Cloudy conditions can actually be excellent for Acropolis photography — the soft, diffused light reduces harsh shadows and creates even skin tones. I monitor conditions and advise on the best approach.',
      },
      {
        question: 'Do you provide transport to the Acropolis?',
        answer: 'Most nearby Acropolis-area routes are planned on foot. For locations farther apart, transport needs are discussed during planning. I provide detailed meeting coordinates before the session.',
      },
      {
        question: 'Are there bathroom facilities near the shooting locations?',
        answer: 'There are facilities in the wider Acropolis museum area, though availability varies by route and opening hours. I include practical meeting and break information in the pre-session notes.',
      },
    ],
    galleryImages: [
      { src: 'images/album1/545351514_17957344248003956_4273194522779784991_n.jpg', alt: 'Acropolis photoshoot by Alexandra Maria Deli', width: 800, height: 1000 },

      { src: 'images/album1/544089634_17957344473003956_5163365635602737228_n.jpg', alt: 'Athenian light photograph by Alexandra Maria Deli', width: 800, height: 1000 },

      { src: 'images/album1/546523041_17957342757003956_2372337750703247383_n.jpg', alt: 'Architectural portrait by Alexandra Maria Deli', width: 800, height: 1000 },

    ],
    relatedPages: ['photoshoot-athens', 'plaka-photoshoot', 'photographer-athens', 'editorial-photographer-athens'],
    schemaType: 'LocalBusiness',
    socialImage: 'images/album1/545351514_17957344248003956_4273194522779784991_n.jpg',
    ctaText: 'Book an Acropolis photoshoot with expert location planning.',
  },
  {
    slug: 'plaka-photoshoot',
    title: 'Plaka Photoshoot',
    metaTitle: 'Plaka Photoshoot Athens | Alexandra Maria Deli',
    metaDescription: 'Photoshoot in Plaka, Athens — the historic neighbourhood with neoclassical walls, narrow streets, and warm Athenian light. Portrait and editorial sessions.',
    h1: 'Plaka Photoshoot',
    introduction: 'Plaka is one of my favourite locations in Athens for a photoshoot. Its narrow stone streets, neoclassical buildings, climbing bougainvillea, and warm light create a natural environment for portraits, editorial content, and branding imagery. Walking through Plaka with a camera feels like moving through a set of ready-made frames.\n\nWhat sets Plaka apart from other Athens neighbourhoods is its variety within a compact area. In a short walk you can move from a quiet stone staircase to a street with neoclassical facades, from a tucked-away church to a sunlit corner with the Acropolis rising above the rooftops. This diversity means a single session in Plaka can produce images with several distinct moods.\n\nI plan Plaka routes around light, crowds, and visual variety. The goal is to spend more time shooting and less time searching for the next spot, while still leaving room for the small discoveries that make the neighbourhood interesting.',
    keyword: 'plaka photoshoot athens',
    sections: [
      {
        heading: 'What Makes Plaka Special for Photography',
        body: 'Plaka is one of Athens\'s historic neighbourhoods, built on the north-eastern slope of the Acropolis. What makes it useful for photography is its variety within a compact area. In a single session we can move from a quiet stone staircase framed by bougainvillea to a street with neoclassical facades, from a shaded courtyard to a sunlit corner with a view of the Acropolis rising above the rooftops.\n\nThe textures alone give you many possibilities: painted wooden doors, iron balconies, rough stone walls, smooth marble steps. I use these elements as background layers, letting the subject sit naturally within the environment rather than placing them in front of it.',
      },
      {
        heading: 'Best Times and Routes',
        body: 'Plaka changes strongly through the day. Morning light can catch upper facades and quieter side streets. Midday is challenging in summer but workable in shadier lanes. Late afternoon often brings warmer tones and softer shadows through the narrow passages.\n\nI plan routes that reduce time in the busiest tourist corridors when possible. Even in peak season, quieter side streets can work well if we choose the right timing and keep the route flexible.',
      },
      {
        heading: 'What Kind of Shots Work Best in Plaka',
        body: 'Plaka suits a wide range of photographic styles. For portraits, the enclosed streets create a sense of intimacy, and the varied backdrops offer many options within a short walk. For editorial and lifestyle work, the neighbourhood adds immediate context and atmosphere — clearly Athens, but not only in a postcard way. For branding sessions, Plaka\'s visual richness can communicate creativity, culture, and a refined sensibility.\n\nI recommend planning two or three outfits to match the different environments: something neutral for the stone streets, something with colour for the bougainvillea walls, and something relaxed for the cafe corners.',
      },
      {
        heading: 'Plaka Through the Seasons',
        body: 'Plaka changes character with the seasons. Spring can bring strong colour from flowering plants against pale stone. Summer brings intense light and long days, though midday can be difficult in open streets. Autumn often softens the light and can make the area feel calmer. Winter is quieter, with lower sun and a more contemplative atmosphere.\n\nI adjust route planning and timing based on the season so the session works with the conditions rather than against them.',
      },
      {
        heading: 'Neighbourhood Highlights and Hidden Corners',
        body: 'Some of the most photogenic spots in Plaka are the ones visitors easily walk past: staircases, painted doors, neoclassical walls, shaded courtyards, and narrow passages where the light falls softly. Specific routes depend on season, crowd levels, and the kind of images we want to make.\n\nI build Plaka routes to avoid the busiest corridors where possible while still using the neighbourhood\'s most visually rewarding textures. The aim is not to tick off landmarks, but to create a comfortable route with enough variety for portraits, lifestyle frames, and detail images.',
      },
      {
        heading: 'Combining Plaka with Nearby Neighbourhoods',
        body: 'Plaka\'s location at the foot of the Acropolis makes it easy to combine with other nearby areas in a single session. A longer shoot can start in Plaka, move toward the Anafiotika steps, and include a nearby viewpoint if the timing and route make sense. Each area adds a different texture: the intimate scale of Plaka\'s streets, the whitewashed character of Anafiotika, and broader city views from the surrounding hills.\n\nCombined neighbourhood sessions use a structured walking route through two or three areas, allowing for outfit changes where practical and a more varied final image set. The exact duration depends on the route, pace, and number of looks.',
      },
      {
        heading: 'Practical Tips for Your Plaka Session',
        body: 'Plaka is a pedestrian neighbourhood with uneven stone streets, so comfortable walking shoes are essential. Late afternoon can offer beautiful light, but it can also be busy. I plan routes that prioritise quieter parallel streets while still using strong backgrounds.\n\nI recommend bringing outfits that complement the neighbourhood\'s warm tones. Soft whites, creams, olive greens, and muted terracotta often work well against Plaka\'s stone and bougainvillea. I\'ll send specific guidance based on the season and route we\'ll be using.',
      },
    ],
    faq: [
      {
        question: 'Why is Plaka good for photography?',
        answer: 'Plaka offers strong variety in a compact area: neoclassical doorways, textured stone walls, quiet staircases, cafes, and vine-covered courtyards. The light can filter beautifully through the narrow streets, especially in the late afternoon.',
      },
      {
        question: 'Is Plaka crowded for photoshoots?',
        answer: 'It can be busy during peak tourist season, but quieter side streets and early-morning windows often work well. We\'ll plan the route to reduce crowds and make good use of the light.',
      },
      {
        question: 'What style of photos work best in Plaka?',
        answer: 'Plaka suits editorial, lifestyle, portrait, and branding work. The architecture lends itself to both wide environmental shots and tight detail frames — hands on an old door, a profile against a painted wall.',
      },
      {
        question: 'What time of day should we shoot in Plaka?',
        answer: 'Morning and late afternoon usually work best. Exact timing depends on the season, but lower sun can cast warm tones on the stone and create gentle shadows through the streets.',
      },
      {
        question: 'What should I wear for a Plaka photoshoot?',
        answer: 'Neutral and earth tones complement Plaka\'s warm stone and greenery. Soft whites, creams, olive greens, and terracotta work well. I can advise based on the specific streets and season.',
      },
      {
        question: 'Can we shoot at specific Plaka landmarks?',
        answer: 'Yes. The Lysikrates Monument, the Tower of the Winds, and the streets around the Cathedral are all accessible. I can include specific landmarks in the route planning.',
      },
      {
        question: 'Are there restrooms and cafes available during the shoot?',
        answer: 'Yes. Plaka has plenty of cafes where we can take a break and review frames. I include practical stops in longer sessions.',
      },
      {
        question: 'Can we combine Plaka with an Acropolis shoot?',
        answer: 'Yes. Plaka sits at the foot of the Acropolis, making it easy to combine with nearby viewpoints in a longer walking route. Timing depends on light, crowds, and the number of looks.',
      },
      {
        question: 'Do you shoot in Plaka during winter?',
        answer: 'Yes. Winter in Plaka is quiet and atmospheric. The low sun creates long dramatic shadows, and the empty streets give the neighbourhood a more intimate feel.',
      },
      {
        question: 'How do you handle lighting in the narrow streets?',
        answer: 'I work with natural light by positioning you where the sun filters through gaps in the buildings. I use a small reflector to fill shadows when needed, keeping the setup minimal.',
      },
    ],
    galleryImages: [
      { src: 'images/album1/542865988_17957342607003956_4305994197225772454_n.jpg', alt: 'Plaka photoshoot by Alexandra Maria Deli', width: 800, height: 1000 },

      { src: 'images/album1/544145230_17957343375003956_5933756572986482124_n.jpg', alt: 'Plaka street photography by Alexandra Maria Deli', width: 800, height: 1000 },

      { src: 'images/album1/544123387_17957342838003956_7079444052374342043_n.jpg', alt: 'Neoclassical detail photograph by Alexandra Maria Deli', width: 800, height: 1000 },

    ],
    relatedPages: ['photoshoot-athens', 'acropolis-photoshoot', 'photographer-athens', 'portrait-photographer-athens'],
    schemaType: 'LocalBusiness',
    socialImage: 'images/album1/544145230_17957343375003956_5933756572986482124_n.jpg',
    ctaText: 'Book a Plaka photoshoot — portraits, editorial, or branding.',
  },
  {
    slug: 'photographer-athens-prices',
    title: 'Photographer in Athens — Prices & Packages',
    metaTitle: 'Photographer Athens Prices | Alexandra Maria Deli',
    metaDescription: 'Photography pricing in Athens — starting points for portraits, branding, and editorial projects, with final quotes prepared around the brief.',
    h1: 'Photographer Athens Prices',
    introduction: 'Below is an overview of starting prices for photography sessions in Athens. Every project is different, so these figures should be treated as guidance rather than a fixed menu. I provide a written quote after we discuss the brief, usage, timeline, location, and final image needs.\n\nI believe pricing should be clear before a project is confirmed. The proposal outlines what is included, what is optional, and which costs depend on scope, travel, licensing, print needs, or turnaround.',
    keyword: 'photographer athens prices',
    sections: [
      {
        heading: 'Portrait Sessions — From €150',
        body: 'A standard portrait session usually includes a pre-shoot conversation, a 1.5 to 2-hour shoot indoors or at a chosen Athens location, careful editing, and delivery through a private online gallery. Sessions are relaxed and paced to your comfort level.\n\n<table class="pricing-table"><thead><tr><th>Service</th><th>Starting point</th><th>Notes</th></tr></thead><tbody><tr><td>Portrait Session</td><td>From €150</td><td>1.5–2 hr, indoor or location session</td></tr><tr><td>Group Portrait</td><td>Quoted by brief</td><td>Depends on number of people and location</td></tr><tr><td>Rush Delivery</td><td>On request</td><td>Depends on deadline and image count</td></tr><tr><td>Additional Retouching</td><td>Quoted separately</td><td>For requests beyond standard editing</td></tr><tr><td>Travel beyond central Athens</td><td>Quoted separately</td><td>Depends on distance and logistics</td></tr></tbody></table>\n\nGroup portraits, extended retouching, and travel beyond central Athens are quoted separately so the final price reflects the real scope of the session.',
      },
      {
        heading: 'Branding Packages — From €300',
        body: 'Branding projects usually start from €300 and are quoted around the scope: planning time, shoot duration, number of locations, number of final images, and usage needs. A smaller branding session might focus on portraits and workspace images, while a larger project can include process frames, detail images, and multiple crops for web and social use.\n\nUsage rights are agreed in the proposal and can cover web, social media, press, or print depending on the project. Additional edits, extra locations, or travel outside Athens are quoted separately.',
      },
      {
        heading: 'Editorial and Commercial Projects — Quoted per Brief',
        body: 'Editorial and commercial projects are priced based on scope: number of looks or scenes, crew requirements, usage licensing, and timeline. I provide a written quote after reviewing the brief.\n\nEditorial quotes can include pre-production planning, the shoot, editing, and a usage licence tailored to the publication or campaign. Extended use — such as broader territory, cross-platform campaigns, or long-term commercial use — is discussed separately.\n\nFor cultural, artistic, or non-profit projects with limited budgets, I\'m open to discussing a realistic scope that fits the available resources.',
      },
      {
        heading: 'Additional Services',
        body: 'Possible add-ons include film photography, additional location research, expedited editing, extra retouching, print preparation, or extended usage licensing. These are quoted according to the brief because costs depend on materials, lab work, deadlines, and final usage.\n\nPrints can be discussed for selected images from your session. Paper type, finish, size, and framing options depend on the chosen image and production timeline.',
      },
      {
        heading: 'How to Book and Payment Terms',
        body: 'Booking starts with a short description of what you need. From there, we can schedule a call to discuss the project in detail. After the call, I send a written proposal with the scope, timeline, deliverables, usage terms, and price.\n\nDeposit, payment method, invoicing, and cancellation terms are confirmed in the proposal before the booking is final. This keeps the agreement clear and avoids assumptions about policies that may vary by project.',
      },
    ],
    faq: [
      {
        question: 'What is included in the portrait session price?',
        answer: 'A portrait session starting from €150 usually includes planning, a 1.5-2 hour indoor or location shoot, careful editing, and private gallery delivery. The exact image count and details are confirmed before booking.',
      },
      {
        question: 'What does the branding package include?',
        answer: 'Branding projects usually start from €300 and are quoted around planning time, shoot duration, number of locations, image count, crops, and usage rights.',
      },
      {
        question: 'Do you offer discounts for recurring clients?',
        answer: 'Returning clients may be eligible for refresh sessions or bundled pricing when regular photography is needed, such as seasonal content or branding updates.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'Payment method and deposit terms are confirmed in the written proposal before the booking is final.',
      },
      {
        question: 'How many images do I receive?',
        answer: 'Image count depends on the session type, duration, and brief. I confirm the expected range in the proposal before you book.',
      },
      {
        question: 'Do you offer student or artist discounts?',
        answer: 'If you are a student, emerging artist, or working with a limited cultural budget, mention this in the inquiry and we can discuss a realistic scope.',
      },
      {
        question: 'What is your cancellation policy?',
        answer: 'Cancellation and rescheduling terms are confirmed before booking. If an unexpected situation arises, contact me as early as possible so we can discuss the best option.',
      },
      {
        question: 'Do you charge for travel outside Athens?',
        answer: 'Travel needs are included in the project quote. Locations beyond central Athens or outside Attica may require additional travel costs depending on distance and timing.',
      },
      {
        question: 'Can I purchase additional edited images?',
        answer: 'Additional edited images can usually be added when a proof gallery is part of the package. The cost is confirmed in the proposal.',
      },
      {
        question: 'Do you offer gift vouchers?',
        answer: 'Gift vouchers can be discussed for portrait sessions. Availability and terms depend on the session type and scheduling window.',
      },
    ],
    galleryImages: [
      { src: 'images/album1/544995829_17957343621003956_1516659409349310951_n.jpg', alt: 'Portfolio photograph by Alexandra Maria Deli', width: 800, height: 1000 },

      { src: 'images/album1/546571339_17957343453003956_6976260187363928964_n.jpg', alt: 'Detail photograph by Alexandra Maria Deli', width: 800, height: 1000 },

      { src: 'images/album1/543984369_17957345421003956_262576140533256651_n.jpg', alt: 'Black and white photograph by Alexandra Maria Deli', width: 800, height: 1000 },

    ],
    relatedPages: ['photographer-athens', 'portrait-photographer-athens', 'photoshoot-athens', 'personal-branding-photographer-athens'],
    schemaType: 'Photographer',
    socialImage: 'images/album1/543984369_17957345421003956_262576140533256651_n.jpg',
    ctaText: 'Request a detailed quote tailored to your project.',
  },
];

export const getLandingPage = (slug: string): LandingPage | undefined =>
  landingPages.find((page) => page.slug === slug);

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
    metaDescription: 'Professional photographer in Athens covering portraits, editorial, branding, travel, and analog photography. Based in Athens, available for projects across Greece.',
    h1: 'Athens Photographer',
    introduction: 'I\'m an Athens-based photographer working across portrait, editorial, travel, and analog photography. Every project begins with a conversation about light, mood, and intention — whether in a studio, on location, or outdoors. My approach is rooted in observation and patience: I look for the kind of light that shapes a face, the textures that give a place its character, and the moments that feel unforced. I believe the best photographs are the ones that feel inevitable — like they couldn\'t have been taken any other way.\n\nAthens is a city that rewards a photographer\'s patience. The light here has a particular quality — clear, warm, and directional for much of the year — that makes it possible to shoot without artificial lighting in most settings. I\'ve spent years learning how this light behaves across different neighbourhoods, seasons, and times of day. This knowledge is built into every session I plan, whether we\'re shooting in the studio or out in the city.\n\nI trained at the University of Europe in Berlin and completed a darkroom programme at Safelight in Athens. These experiences taught me to see photography as a craft that extends beyond the shutter — into how an image is developed, printed, and sequenced. That same care applies to every project I take on today, whether I\'m shooting digital or film, in a studio or on location.',
    keyword: 'photographer athens',
    sections: [
      {
        heading: 'A Practice Across Media and Mood',
        body: 'I work with both digital and analog formats depending on what the project asks for. Digital gives me speed and flexibility for commercial and editorial work; medium-format and 35mm film bring a different kind of depth — softer grain, wider tonal range, a pace that changes how both photographer and subject move through a session. Many projects benefit from a hybrid approach: digital for reliability and volume, film for the frames that need a quieter hand.\n\nMy training includes darkroom practice at Safelight in Athens, where I learned to print black-and-white fibre-based paper, and a Bachelor of Photography from the University of Europe in Berlin. These years shaped how I see: not just through the viewfinder, but through the process of developing, proofing, and sequencing images with intention.',
      },
      {
        heading: 'Who I Work With',
        body: 'My clients range from individuals looking for natural portraits to small businesses building a cohesive brand library, and from editorial teams commissioning travel essays to musicians and artists seeking promotional imagery. I\'m based in Athens but available for assignments across Greece and internationally.\n\nEvery project, regardless of scale, starts with a conversation. I want to understand not just what you need photographed, but how you want the images to feel. From there I build a shot list, scout locations, and plan a session that gives us room to explore without losing focus.',
      },
      {
        heading: 'Studio and Location Work in Athens',
        body: 'Athens offers an extraordinary range of backdrops: the light-drenched streets of Plaka and Anafiotika, the rocky slopes of Filopappou with the Acropolis in the frame, the coastline toward Piraeus, and the quiet green of the National Garden. I also have access to a studio space in central Athens for controlled lighting sessions.\n\nMy location scouting is thorough. If we\'re shooting outdoors, I\'ll visit the site beforehand at the same time of day to check light direction, background consistency, and crowd levels. This preparation means that when you arrive, we spend more time making images and less time figuring out where to stand.',
      },
      {
        heading: 'Booking and Turnaround',
        body: 'To book a session, use the contact section and share a few details about your project. We\'ll arrange a call to discuss the brief, timeline, and budget before I prepare a detailed proposal.\n\nDelivery time depends on the scope of the project. Portrait sessions typically take 5-7 working days. Branding and editorial projects require 7-10 working days. Rush delivery within 48 hours is available for an additional fee. All images are delivered through a private online gallery with direct download.',
      },
      {
        heading: 'Session Preparation Checklist',
        body: 'Once your session is booked, I send a comprehensive preparation guide. It covers everything: what to wear (solid colours, layered textures, comfortable shoes), what to bring (outfit changes, water, any props you want included), grooming recommendations (avoid drastic changes right before the shoot unless we\'ve planned for them), and how to prepare mentally.\n\nI also send a timeline for the day so you know exactly what to expect and when. If we\'re shooting outdoors, I include a weather contingency plan. If we\'re in the studio, I share directions and parking information. The goal is to remove any uncertainty so you can arrive relaxed and focused on enjoying the experience.',
      },
      {
        heading: 'My Creative Process',
        body: 'Every project follows a structure that leaves room for spontaneity. It begins with a brief — a conversation where I learn about you, your project, and what the images need to communicate. I ask about the intended use of the photos, your preferred style, and any references you admire. From there I build a creative proposal that covers locations, lighting approach, wardrobe suggestions, shot list, and timeline.\n\nOn the day of the shoot, I arrive early to set up and check the light. I work methodically through the shot list but stay alert to unplanned moments — a shift in the light, a change in your expression, something happening in the background that adds context. These in-between frames often become the images people love most. After the shoot, I cull, colour-grade, and retouch every selected image by hand. I don\'t use presets or batch processing. Each frame gets individual attention.',
      },
      {
        heading: 'Why Athens Is Exceptional for Photography',
        body: 'Athens offers a visual range that few European cities can match. Within a 20-minute drive you can move from a neoclassical neighbourhood built in the 19th century to a rocky hillside overlooking the Aegean, from a bustling central market to a quiet pine-covered park. The quality of light — especially from late September through early June — gives photographers consistent, predictable conditions for outdoor work.\n\nI know the city\'s photographic potential intimately. The way the morning light filters through the pines on Filopappou Hill. The golden reflection off the marble of the Panathenaic Stadium in late afternoon. The soft, diffused light of an overcast winter day along the Athens Riviera. I match locations to the mood and purpose of each session, and I always have a backup plan for unexpected weather.',
      },
      {
        heading: 'What to Expect When You Book',
        body: 'After our initial conversation, I send a detailed proposal outlining the session scope, timeline, locations, and investment. Once you confirm, I send a preparation guide with wardrobe suggestions, location logistics, and a day-of timeline. On the day of the shoot, I arrive early to set up and check the light. I work through the shot list methodically while staying open to spontaneous opportunities.\n\nAfter the session, I cull the day\'s images and select the strongest frames within 48 hours. You\'ll receive a proof gallery where you can flag any favourites. I then edit each selected image individually — colour grading, exposure refinement, and subtle retouching. Final delivery happens within the agreed timeline through a private online gallery with full-resolution download access.',
      },
    ],
    faq: [
      {
        question: 'What type of photography do you specialise in?',
        answer: 'I work primarily in portrait, editorial, personal branding, travel/documentary, and analog photography. My approach is atmospheric and story-led, whether in a studio session or on location around Athens.',
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
        answer: 'Portrait sessions run 1.5 to 2 hours. Branding sessions range from 3 to 6 hours depending on the package. Editorial shoots vary by scope. I\'ll give you a clear time estimate before you book.',
      },
      {
        question: 'What happens if it rains on the day of my shoot?',
        answer: 'I monitor weather closely and maintain contact leading up to your session. If conditions are unfavourable, we reschedule at no cost. I also keep a list of indoor locations and studio alternatives that work well in overcast or rainy conditions.',
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
        answer: 'All final images are delivered through a private online gallery with full-resolution download. You can share the gallery with family, friends, or colleagues. Images are available for 30 days after delivery, with extended access available on request.',
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
    introduction: 'Portrait work is at the heart of my practice. I photograph people in a way that feels quiet, intentional, and connected to their environment. Whether in the studio or in an Athens neighbourhood, the goal is always the same: a portrait that feels like the person, not just a pose. I don\'t use rigid posing templates. Instead, I guide movement, find good light, and watch for the moments in between.\n\nA great portrait doesn\'t come from a formula. It comes from the interaction between photographer and subject — the trust that builds over the course of a session, the small adjustments in expression and posture that happen when someone relaxes into being seen. My role is to create the conditions for that to happen: the right light, the right location, the right pace.\n\nI\'ve been photographing people in Athens for years — professionals, artists, couples, families, and individuals who simply want a set of thoughtful images of themselves. Every session is different because every person is different. I adapt my approach to your personality, your comfort level, and the purpose of the photographs. What remains consistent is the attention to light, composition, and the quality of the interaction.',
    keyword: 'portrait photographer athens',
    sections: [
      {
        heading: 'My Approach to Portraiture',
        body: 'A portrait session with me is less about a series of prescribed poses and more about creating a space where you can be yourself in front of the camera. I work with natural light whenever possible, and I\'m patient — I\'d rather wait for the right expression than rush through a list of setups.\n\nBefore each session, I send a brief questionnaire about your style, comfort level, and what you want the images for. This helps me plan the light, location, and pacing. On the day, we move slowly. I\'ll show you frames as we go so you can see what\'s working and build confidence in front of the lens.',
      },
      {
        heading: 'Where Portrait Sessions Happen',
        body: 'I offer three settings for portrait work. The first is my studio in central Athens — clean, minimal, with controlled lighting for a classic look. The second is outdoors in the city: Plaka\'s stone streets and bougainvillea, Anafiotika\'s whitewashed walls, the green paths of the National Garden, or the hills around Filopappou with the city below. The third is a location of your choice: your home, your workspace, or somewhere that holds meaning for you.\n\nEach setting gives a different feel. Studio portraits are focused and graphic. Outdoor portraits add context and atmosphere. Environmental portraits tell a story about where you live or work. I can help you choose based on the look you want and how you plan to use the images.',
      },
      {
        heading: 'Who Books Portrait Sessions',
        body: 'My portrait clients include professionals updating their LinkedIn and website presence, actors and performers needing headshots, couples celebrating an engagement or anniversary, and individuals who simply want a set of thoughtful, well-crafted images of themselves. I also photograph small groups — families, creative teams, friend groups — in sessions that balance group compositions with individual frames.\n\nEvery portrait session includes a pre-shoot consultation, the shoot itself (typically 1.5 to 2 hours), and a curated set of edited high-resolution images with both colour and black-and-white versions. I deliver the final selection through a private gallery where you can download full-resolution files and share with family or colleagues.',
      },
      {
        heading: 'Preparation and Styling Guidance',
        body: 'I send every client a detailed preparation guide after booking. It covers clothing suggestions (solid colours, soft textures, no busy patterns), grooming tips, what to bring, and how to prepare mentally if you\'re nervous about being photographed. Many people feel awkward in front of a camera at first — that\'s normal. I pace the session to build your comfort gradually, starting with simpler setups and working toward more expressive frames as you settle in.',
      },
      {
        heading: 'The Portrait Session Workflow',
        body: 'A typical portrait session follows a rhythm designed to build confidence. We start with a warm-up — a few frames in straightforward light with minimal direction. This gives you time to adjust to being in front of the lens without pressure. As you relax, I gradually introduce more direction: changes in position, expression, and interaction with the environment.\n\nI review frames with you as we go, showing you what\'s working so you can see your own progress. By the midpoint of the session, most clients have forgotten the camera is there. This is when the most natural, expressive portraits emerge. I always leave time at the end to revisit any setup you particularly enjoyed or to try something spontaneous that occurred to us during the shoot.',
      },
      {
        heading: 'Editing and Delivery',
        body: 'After the session, I select the strongest frames and edit each one individually. My editing style is natural and film-informed: I adjust exposure, colour-grade for mood, and apply subtle retouching that preserves skin texture. I don\'t use heavy airbrushing or artificial reshaping.\n\nFinal images are delivered through a private online gallery within 5-7 working days. Each image is available in both colour and black-and-white, and you can download full-resolution files directly. I also provide web-optimised versions for social media and email.',
      },
      {
        heading: 'Who Portrait Sessions Are For',
        body: 'Portrait sessions suit anyone who needs professional, authentic images of themselves. I photograph professionals updating their LinkedIn and website presence, actors and performers needing headshots, couples celebrating an engagement or anniversary, individuals who simply want a set of thoughtful images, and small groups such as families or creative teams. Every session is tailored to the subject and the intended use of the photographs.\n\nI also offer specialised portrait sessions for artists and makers who need images for press kits, exhibition catalogues, or grant applications. These sessions focus on the relationship between the person and their work, combining environmental portraits with detail shots of their creative practice.',
      },
    ],
    faq: [
      {
        question: 'Where do portrait sessions take place?',
        answer: 'Sessions can happen in my studio space, outdoors in Athens (Plaka, Anafiotika, the hills around the city), or at a location meaningful to you — a home, a workspace, or a favourite neighbourhood.',
      },
      {
        question: 'How long does a typical portrait session last?',
        answer: 'A standard session runs 1.5 to 2 hours. This allows enough time to settle in, explore different light conditions, and create a varied set of images without rushing.',
      },
      {
        question: 'Do you retouch the photos?',
        answer: 'Yes. Every image is carefully edited — colour grading, exposure refinement, and subtle retouching. My style leans toward natural, film-informed tones rather than heavy airbrushing.',
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
        answer: 'Nearly everyone is nervous at first. I start each session with simple, low-pressure frames to build your comfort. By the time we reach the expressive shots, most people have forgotten the camera is there.',
      },
      {
        question: 'Do you offer headshots for professional use?',
        answer: 'Yes. Headshots are included in portrait sessions. I can shoot against a clean background in the studio or use an outdoor setting for a more natural look. Both work well for LinkedIn, company websites, and press.',
      },
      {
        question: 'Can we shoot at my home or workplace?',
        answer: 'Yes. Environmental portraits at your home or workplace add context and authenticity. I\'ll visit beforehand to assess natural light and plan the best angles.',
      },
      {
        question: 'How many photos do I receive?',
        answer: 'For a standard portrait session I deliver 20-30 edited images. Each image is individually colour-graded and retouched, available in both colour and black-and-white.',
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
    introduction: 'Your brand visuals should feel as considered as the work you do. I work with creative professionals, small business owners, and personal brands in Athens to build cohesive image libraries — portraits, workspace shots, process imagery, and detail frames — that translate across web and social media. A strong set of brand images does more than fill a gallery: it communicates your standards before you say a word.\n\nPersonal branding photography is different from a standard portrait session. The focus is not just on how you look, but on what you do, where you work, and how you create. Every image in a branding set should reinforce a specific message about your expertise, your values, and the quality of your work. I spend time understanding your brand before I plan a single frame.\n\nMy branding clients include architects, graphic designers, musicians, therapists, chefs, ceramicists, and small-business owners across Athens. Each project is different, but the common thread is a desire for images that feel authentic rather than staged. I avoid stiff, overtly commercial branding photography in favour of frames that show the person and their work with clarity and warmth.',
    keyword: 'personal branding photographer athens',
    sections: [
      {
        heading: 'What a Branding Session Includes',
        body: 'A typical branding package begins with a planning call where we discuss your visual identity, the platforms you use, and how the images will be deployed. From there I build a shot list organised by category: hero portraits, candid working shots, detail images of your tools or products, and environmental shots of your workspace.\n\nOn the shoot day, we work through each category systematically. I direct light and composition while keeping the atmosphere natural — I want the images to feel like you, not like a stock photo. After the shoot, I edit and deliver a curated set of images in both landscape and vertical crops, optimised for web and social use.',
      },
      {
        heading: 'Why Cohesive Visuals Matter for Your Brand',
        body: 'In a crowded marketplace, consistency is what makes a brand recognisable. A set of images that shares a consistent colour palette, lighting style, and compositional approach signals professionalism and attention to detail. Whether a visitor lands on your website, scrolls through your Instagram, or reads a feature about your work, the visual language should feel like one body of work.\n\nI help achieve this by planning light and palette before the shoot. If you already have brand guidelines (colours, tone, typography), I work within them. If you don\'t, the shoot itself can help define your visual direction. Many clients use their branding session images as the foundation for their visual identity for a year or more.',
      },
      {
        heading: 'Industries and Roles I Work With',
        body: 'My branding clients include architects, designers, chefs, musicians, therapists, coaches, makers, and small-shop owners. Anyone whose work benefits from a professional visual presence. I\'m comfortable shooting in a wide range of environments — from a quiet home office to a busy restaurant kitchen, from a ceramic studio to a law firm\'s reception.\n\nThe common thread is a desire for images that feel authentic. I avoid stiff, overly produced branding photography in favour of frames that show the person and their work with clarity and warmth.',
      },
      {
        heading: 'The Planning Process',
        body: 'Before the shoot, I ask you to share examples of branding photography you admire, your current website and social channels, and any brand guidelines you\'ve developed. I use this to build a shot list organised by use case: hero images for your homepage, portrait variants for your About page, detail shots for product or service pages, and candid process images for social media.\n\nOn the day, we work efficiently through each category. I direct movement and composition while keeping the energy natural. After the shoot, I send a proof gallery within 48 hours and deliver the final edited set within 7 working days.',
      },
      {
        heading: 'From Session to Strategy',
        body: 'A branding session doesn\'t end with image delivery. I help you think about how each image will be used — which ones work best as hero visuals, which belong on your About page, which should be reserved for social media campaigns. I deliver images in multiple aspect ratios: landscape for your website, vertical for Instagram and TikTok, square for LinkedIn and directory listings.\n\nI also provide a simple usage guide that maps each image to its ideal placement. This ensures your investment in professional photography translates directly into a stronger online presence, not just a folder of files on your hard drive.',
      },
      {
        heading: 'Building a Long-Term Visual Identity',
        body: 'Professional branding is not a one-time investment. As your business evolves, your visual identity should evolve with it. I offer discounted refresh sessions for returning clients, making it easy to keep your imagery current without the full investment of a new brand shoot each time.\n\nI also maintain a style guide for each client — a document that records the colour palette, lighting approach, and compositional preferences used in your session. This makes future shoots consistent even if they happen months apart, and helps other designers or marketers you work with maintain visual coherence across your materials.',
      },
      {
        heading: 'Deliverables and Post-Production',
        body: 'After your branding session, I cull the day\'s images and prepare an initial proof gallery within 48 hours. You select your favourites, and I edit each chosen image individually — colour grading, exposure refinement, and subtle retouching. I deliver the final set in multiple aspect ratios (landscape, vertical, square) and provide a simple guide mapping each image to its best use.\n\nAll images are delivered through a private online gallery with full-resolution download. I also provide web-optimised versions for faster social media uploads. For clients who need them, I can deliver edited images in batches to match a content calendar or product launch timeline.',
      },
    ],
    faq: [
      {
        question: 'What is included in a branding photography package?',
        answer: 'A typical package includes a planning call, a half-day or full-day shoot (portraits, workspace/environment shots, detail images, and process frames), and a curated set of edited, high-resolution images with both landscape and vertical crops for web and social use.',
      },
      {
        question: 'Can we shoot at my workspace or studio?',
        answer: 'Absolutely. Shooting on location at your workspace, studio, or a place that reflects your brand adds authenticity. I\'ll visit beforehand to assess natural light and plan the best angles.',
      },
      {
        question: 'Do you offer commercial usage rights?',
        answer: 'Yes. All branding packages include full commercial usage rights for web, social media, print, and press. You\'ll have the freedom to use the images across your marketing channels.',
      },
      {
        question: 'How many images do you deliver?',
        answer: 'For a half-day session I typically deliver 30-40 edited images. For a full day, 50-70. Every image is individually colour-graded and retouched.',
      },
      {
        question: 'What if I don\'t have brand guidelines?',
        answer: 'That\'s perfectly fine. I can help define a visual direction during our planning call. We\'ll discuss colour palettes, mood, and how you want to be perceived. Many clients use their branding session images as the foundation for their visual identity.',
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
        answer: 'Yes. I offer discounted refresh sessions for returning clients. An annual update keeps your visual identity current without the investment of a full brand shoot each time.',
      },
      {
        question: 'What should I prepare before a branding shoot?',
        answer: 'I\'ll send a preparation guide that covers wardrobe, workspace styling, props, and scheduling. I also ask for examples of branding photography you admire and any current brand assets (logo, colours, fonts).',
      },
      {
        question: 'Do you offer rush delivery for branding projects?',
        answer: 'Yes. Rush delivery within 48 hours is available for an additional fee. Standard turnaround is 7 working days.',
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
    introduction: 'Editorial projects are where my background in visual storytelling comes forward most naturally. I collaborate with magazines, brands, and artists to create narrative-driven images — on location in Athens or further afield. My editorial eye leans toward natural light, muted colour palettes, and composition that leaves room for atmosphere. I\'m interested in what the frame suggests rather than everything it shows.\n\nEvery editorial project is a collaboration. I work closely with editors, art directors, and creative teams to develop a visual language that serves the story. This requires not just technical skill but the ability to interpret a brief, adapt to changing conditions on set, and deliver images that are cohesive as a series rather than just strong as individual frames.\n\nMy editorial portraiture has been published in Greek and international magazines. I\'ve photographed musicians, chefs, architects, and artists in their studios, homes, and performance spaces. Each assignment has taught me something about how to work efficiently without sacrificing quality — how to read a room, earn a subject\'s trust quickly, and find the right light in an unfamiliar space within minutes.',
    keyword: 'editorial photographer athens',
    sections: [
      {
        heading: 'My Editorial Process',
        body: 'Every editorial project begins with a creative brief. I read the story, discuss the mood with the editor or creative director, and build a visual plan that serves the narrative. This includes location scouting, lighting tests, model or subject casting input, and a mood board that aligns the team\'s expectations.\n\nOn set, I work quickly but not hurriedly. Editorial shoots often involve multiple looks or locations within a tight window, so I plan lighting setups in advance and communicate clearly with the team. I shoot tethered when needed so the art director can review frames in real time. Post-production focuses on colour grading that reinforces the story\'s emotional tone.',
      },
      {
        heading: 'Types of Editorial Work',
        body: 'I\'ve worked on portrait series for magazines, fashion editorials, documentary features, travel essays, and food or product stories for lifestyle publications. Each genre demands a different approach. Portraiture for editorial requires a stronger sense of concept and styling than a standalone portrait session. Fashion editorial involves coordinating with stylists, makeup artists, and sometimes location scouts. Documentary and travel editorial requires adaptability — working with available light, unfamiliar environments, and unpredictable subjects.\n\nAthens is an exceptional city for editorial work because of its visual contrast: ancient and modern, dense and open, luminous and shadowed. I use these contrasts deliberately in my editorial compositions.',
      },
      {
        heading: 'Mood, Light, and Palette',
        body: 'My editorial style is defined by natural light, muted colour palettes, and compositions that prioritise atmosphere over explicitness. I rarely oversaturate or use heavy contrast. Instead, I work with the light that exists on location, shaping it with reflectors or diffusers when needed but preserving its natural character.\n\nColour grading is applied per project to reinforce the emotional tone of the story. A documentary series about the Athenian coastline might call for cool, desaturated tones. A portrait of a ceramic artist might lean warm and earthy. The grading is always in service of the narrative, not an aesthetic applied uniformly across projects.',
      },
      {
        heading: 'Deliverables and Timeline',
        body: 'Editorial clients receive a curated set of high-resolution images with a detailed invoice and usage agreement. I deliver via a private online gallery with download access. Standard turnaround is 7-10 working days from the shoot date.\n\nFor time-sensitive publications, I offer expedited editing with delivery within 48 hours. I also provide both colour and black-and-white versions where appropriate, and can deliver in CMYK for print use if requested before the edit begins.',
      },
      {
        heading: 'Working with Publications and Brands',
        body: 'I\'ve produced editorial work for magazines, lifestyle brands, and cultural organisations in Greece and abroad. Each assignment starts with a clear creative brief that defines the visual direction, the number of final images required, usage rights, and deadlines. I manage the entire production pipeline — from location scouting and permits to talent coordination and post-production.\n\nClient feedback is important to me. Throughout the selection and editing process, I involve the editor or art director in key decisions: initial selects, colour grading direction, and final retouching. This collaborative approach ensures the finished set aligns with the publication\'s vision and editorial standards.',
      },
      {
        heading: 'Preparing for an Editorial Assignment',
        body: 'Preparation for an editorial shoot goes beyond standard session planning. I research the publication\'s visual style by studying previous issues or online features. I develop a mood board that covers lighting references, colour direction, and composition references. I coordinate with stylists, makeup artists, and assistants to ensure everyone arrives on the same page.\n\nOn location, I work quickly and communicate clearly. Editorial shoots often involve multiple scenes within a tight window, so I plan lighting setups in advance and shoot tethered when the art director needs to review frames in real time. Post-production focuses on colour grading that reinforces the editorial tone, and I deliver images organised by scene or narrative sequence rather than as a flat collection.',
      },
      {
        heading: 'Why Athens for Editorial Photography',
        body: 'Athens is an underrated editorial destination. Its visual contrast is extraordinary — ancient marble against modern concrete, quiet residential courtyards next to busy commercial streets, the blue of the Aegean visible from hillsides covered in pine and scrub. This variety means an editorial team can shoot multiple distinct looks within walking distance, reducing production time and costs.\n\nThe quality of light in Athens is also a practical advantage for editorial shoots. With reliable sunshine for most of the year, outdoor scenes are easier to plan and execute without complex lighting setups. Even on overcast days, the light is soft and even — excellent for portrait-focused editorial work. These conditions make Athens a practical and visually rewarding location for editorial assignments of all scales.',
      },
    ],
    faq: [
      {
        question: 'What editorial experience do you have?',
        answer: 'I\'ve worked on editorial projects ranging from portrait series and fashion editorials to documentary features and travel essays. My approach is collaborative, with a strong emphasis on pre-production planning and mood-board development.',
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
        answer: 'From initial brief to final delivery, editorial projects typically take 2-4 weeks. This includes pre-production, the shoot, editing, and client review rounds. Rush timelines are available for time-sensitive assignments.',
      },
      {
        question: 'Do you provide mood boards before the shoot?',
        answer: 'Yes. I develop a visual mood board for every editorial project after our initial briefing. It covers lighting references, colour palette direction, composition styles, and wardrobe or prop suggestions.',
      },
      {
        question: 'Can you handle permits and location releases?',
        answer: 'Yes. I manage permit applications for shoots that require them, including locations managed by the Greek Ministry of Culture. I build permit timelines into the project schedule.',
      },
      {
        question: 'Do you deliver both colour and black-and-white?',
        answer: 'Yes. Where appropriate, I provide both colour-graded and black-and-white versions of selected frames. This is common in editorial work where publications may use different treatments across print and digital.',
      },
      {
        question: 'What format do you deliver editorial images in?',
        answer: 'I deliver high-resolution JPEG files suitable for both print and web. For print-specific projects, I can deliver TIFF or PSD files with CMYK colour profiles on request.',
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
    metaDescription: 'Book a photoshoot in Athens — portraits, branding, editorial, or personal projects. Studio and location sessions with an experienced Athens photographer.',
    h1: 'Photoshoot in Athens',
    introduction: 'Whether you\'re looking for portraits, branding imagery, editorial content, or personal project photographs, I offer photoshoot sessions in Athens tailored to your needs. Every session is planned around natural light, location, and the specific mood you want to capture. Athens offers a visual range that few cities can match, and I know how to use it.\n\nA photoshoot in Athens is different from a studio session in another city. The landscape here changes character completely between neighbourhoods — from the whitewashed steps of Anafiotika to the seaside promenade of the Athens Riviera, from the marble courtyards of the Zappeion to the urban murals of Psyrri. I help you choose the setting that matches your vision.\n\nEvery session is preceded by a conversation where I learn about your goals, your comfort level with being photographed, and the style you\'re drawn to. I build the session around your answers — selecting locations that suit your personality, planning a pace that works for you, and preparing guidance that addresses any concerns you have about the experience.',
    keyword: 'photoshoot athens',
    sections: [
      {
        heading: 'Planning Your Athens Photoshoot',
        body: 'The best photoshoots are the ones that are planned but not rigid. I start every booking with a conversation: what are the images for, what style resonates with you, have you done a shoot before, what makes you uncomfortable? I build the session around your answers.\n\nI handle location scouting, timing based on light conditions, and a shot list that covers the essentials while leaving room for spontaneous frames. I also send a preparation guide that covers clothing, grooming, what to bring, and what to expect on the day. Whether you\'re a first-time subject or an experienced model, the goal is the same: you leave with images you\'re excited to share.',
      },
      {
        heading: 'Studio vs. Location: Which Is Right for You?',
        body: 'Studio sessions give you controlled lighting and a clean, distraction-free background. They\'re ideal for headshots, product work, and portraits where the focus is entirely on the subject. I have access to a well-equipped studio space in central Athens with continuous and strobe lighting, seamless paper backdrops, and a quiet, focused atmosphere.\n\nLocation sessions take advantage of Athens\'s incredible architecture and natural light. In a single session we can move through three or four distinct looks — from the neoclassical streets of Plaka to the panoramic views from Filopappou Hill, from the seaside light of the Athenian Riviera to the urban texture of Exarcheia. I help you choose based on your style and the purpose of the images.',
      },
      {
        heading: 'Session Types and Duration',
        body: 'A standard portrait session runs 1.5 to 2 hours, enough for two looks or one location with thorough coverage. Half-day sessions (3-4 hours) suit branding shoots or multiple locations. Full-day sessions (6-8 hours) are for editorial productions, complex branding projects, or shoots involving multiple subjects, outfit changes, and locations.\n\nTurnaround time is typically 5-10 working days. Rush delivery is available for an additional fee. All images are delivered via a private online gallery with download access.',
      },
      {
        heading: 'How to Prepare for Your Photoshoot',
        body: 'I send a detailed preparation guide with every booking confirmation. It covers wardrobe suggestions (solid tones, layered textures, comfortable shoes), grooming tips, and what to bring. If you\'re shooting outdoors, I also include a weather contingency plan.\n\nOn the day, arrive rested and hydrated. If you\'re nervous, that\'s completely normal — I start each session with simple, low-pressure frames to build your comfort. By the time we reach the more expressive shots, most people have forgotten the camera is there.',
      },
      {
        heading: 'Popular Athens Photoshoot Locations',
        body: 'Athens has dozens of photogenic locations within a short distance of the centre. Some of the most popular include the neoclassical streets of Plaka, the panoramic views from Filopappou Hill, the seaside light of the Athens Riviera at Piraeus or Vouliagmeni, the urban character of Psyrri and Kerameikos, and the green spaces of the National Garden and Stavros Niarchos Park.\n\nI maintain a curated location list with notes on best shooting times, light conditions, crowd levels, and permit requirements. I\'m also happy to scout a new location if you have something specific in mind — a particular rooftop, a hidden courtyard, or a cafe with good natural light.',
      },
      {
        heading: 'Seasonal Considerations for Your Shoot',
        body: 'Each season in Athens offers different photographic opportunities. Spring (March to May) brings blooming bougainvillea and mild temperatures — ideal for outdoor sessions. Summer (June to September) offers long golden hours but requires early starts to avoid heat and crowds. Autumn (October to November) has the best light of the year: warm, directional, and consistent. Winter (December to February) is quiet and atmospheric, with soft overcast light that\'s excellent for portraits.\n\nI advise clients on the best timing for their specific vision. If you have a fixed deadline, I\'ll work around the seasonal conditions to find the best possible light within your schedule.',
      },
      {
        heading: 'The Day-of Photoshoot Experience',
        body: 'On the day of your shoot, I arrive 15-20 minutes early to check the location, set up equipment, and confirm the light conditions. I start with a brief check-in — how are you feeling, any last questions about the plan. Then we begin with a simple warm-up pose in good light. This first setup is intentionally easy: it gives you time to adjust, and it gives me a baseline to work from.\n\nAs the session progresses, I introduce more variety in posing, location, and expression. I show you frames on the back of the camera so you can see what\'s working. By the end of the session, most clients feel noticeably more confident in front of the lens. I always leave a few minutes for "one more" frames — the spontaneous shots that often become favourites.',
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
        answer: 'Pricing depends on the type and duration of the session. Portrait sessions start at €150, branding packages at €300, and editorial projects are quoted per brief. Contact me for a detailed quote.',
      },
      {
        question: 'What is the turnaround time for edited photos?',
        answer: 'Delivery usually takes 5-10 working days depending on the size of the set. Rush delivery is available for an additional fee.',
      },
      {
        question: 'Can I bring multiple outfits?',
        answer: 'Yes. I recommend 2-3 outfits for a standard session. Choose pieces that reflect different sides of your personality — casual, polished, and something in between.',
      },
      {
        question: 'What happens if the weather is bad?',
        answer: 'I monitor forecasts closely and will suggest rescheduling if conditions are unfavourable. I also have indoor location alternatives and studio options ready as backup plans.',
      },
      {
        question: 'Do you shoot in the studio as well as on location?',
        answer: 'Yes. I have access to a studio space in central Athens with controlled lighting, seamless backdrops, and a quiet atmosphere. Studio sessions are ideal for headshots and product work.',
      },
      {
        question: 'Can I see the photos during the shoot?',
        answer: 'Yes. I review frames with you throughout the session so you can see what\'s working and build confidence. This also helps us adjust direction in real time.',
      },
      {
        question: 'Do you offer prints or albums?',
        answer: 'Yes. Fine-art prints and albums are available on request. I work with professional print labs in Athens to ensure high-quality output for display or gifting.',
      },
      {
        question: 'Can couples or groups book a session?',
        answer: 'Absolutely. I photograph couples, families, and small groups. Group sessions are priced at €250 for up to 5 people. Additional participants can be added for €30 per person.',
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
    introduction: 'The Acropolis offers one of the most iconic backdrops in the world for a photoshoot. I organise portrait, editorial, and branding sessions at and around the Acropolis — working with the golden-hour light on the slopes of Filopappou or from viewpoints that frame the Parthenon without the crowds. It\'s a location that rewards early starts and careful planning.\n\nWhat makes an Acropolis photoshoot special is not just the monument itself but the way it interacts with the landscape around it. The marble catches the first light of dawn with a warm glow that lasts about 45 minutes. From Filopappou Hill, the Parthenon sits above the treeline, visible against the sky without the distraction of modern buildings. From Anafiotika\'s narrow whitewashed streets, it appears unexpectedly between rooflines — a reminder of how deeply the ancient and modern coexist in this city.\n\nI\'ve photographed at the Acropolis and its surrounding hills more times than I can count, and I continue to find new angles and compositions each time. The changing seasons, the shifting light, the different subjects I bring to the location — each session reveals something I hadn\'t noticed before. This familiarity means I can focus entirely on you and your vision rather than figuring out where to stand.\n\nAn Acropolis photoshoot is as much about the experience as it is about the images. Standing on Filopappou Hill as the sun rises over the city, watching the marble catch the first light while Athens wakes up below — it\'s a moment that stays with you. My job is to make sure the photographs do it justice.',
    keyword: 'acropolis photoshoot athens',
    sections: [
      {
        heading: 'Why the Acropolis for a Photoshoot',
        body: 'The Acropolis is not just a monument — it\'s a natural stage. The way it catches the first and last light of the day, the way its columns stand against the sky, the way the city falls away below it: these qualities make it one of the most photographed landmarks in the world for good reason. For a photoshoot, what matters most is finding the frames that don\'t look like everyone else\'s.\n\nI avoid the direct tourist viewpoints and instead work from angles that use the Acropolis as a contextual backdrop rather than a literal subject. Filopappou Hill, the slopes of the Pnyx, and the streets of Anafiotika all offer compositions where the Acropolis sits naturally in the frame — part of the landscape rather than dominating it.',
      },
      {
        heading: 'Logistics and Permits',
        body: 'For intimate portrait sessions with minimal equipment and no commercial intent, we can work from public viewpoints around the Acropolis without a permit. For larger productions involving multiple outfit changes, assistants, or commercial usage, a permit from the Greek Ministry of Culture may be required.\n\nI handle permit applications for clients who need them. The process typically takes 2-4 weeks, so early planning is essential. For sessions that don\'t require a permit, I recommend early morning (7:00-9:00) or the golden hour before sunset — the light is softer, the crowds are thinner, and the city below glows.',
      },
      {
        heading: 'What to Expect from an Acropolis Session',
        body: 'Most Acropolis sessions run 1.5 to 2 hours and cover 2-3 distinct viewpoints. We start at one location, work through a series of compositions as the light changes, then move to the next spot. I pace the session so we capture variety without feeling rushed.\n\nI recommend wearing comfortable shoes — there\'s walking involved, and some of the best viewpoints are up gentle slopes. The terrain is dry and stable but uneven in places. I\'ll send exact meeting coordinates and a parking or taxi plan before the session so there\'s no confusion on the day.',
      },
      {
        heading: 'Combining the Acropolis with Other Locations',
        body: 'Many clients combine an Acropolis session with nearby locations for greater variety. A single morning can cover the Acropolis viewpoints, the narrow streets of Anafiotika, and the panoramic terrace of a rooftop cafe in Plaka. Each location adds a different texture: monumental, intimate, and urban.\n\nI offer combined location packages that include transportation between sites and a structured timeline. These sessions typically run 3-4 hours and produce a rich, varied set of images that feel like they were shot over multiple days rather than one morning.\n\nCombined sessions also offer practical advantages. By working through multiple locations in a single morning, you save time and reduce the need for multiple bookings. The images from each location complement the others, giving you a cohesive but diverse final set that works across your website, social media, and portfolio.',
      },
      {
        heading: 'What to Wear for an Acropolis Photoshoot',
        body: 'The Acropolis setting calls for outfits that complement rather than compete with the landscape. Neutral tones — cream, beige, taupe, pale blue, dusty rose — work well against the warm marble and blue sky. Flowing fabrics catch the morning breeze and add movement to portraits. For editorial shoots, bolder colours like deep red or emerald green can create striking contrast against the stone.\n\nI recommend bringing a light jacket or layer even in summer — the early morning hours on the hill can be cooler than the city below. Comfortable walking shoes are essential since we\'ll be covering uneven ground. I\'ll send specific wardrobe guidance after booking, tailored to the viewpoints we\'ll be using.',
      },
      {
        heading: 'Best Times of Year for an Acropolis Shoot',
        body: 'The Acropolis is photogenic year-round, but the experience varies significantly by season. Spring (March to May) offers mild temperatures, blooming wildflowers on Filopappou, and softer light. Autumn (September to November) has the most reliable golden-hour conditions and thinner crowds. Summer (June to August) requires very early starts — before 7:00 — to catch good light and avoid both heat and tourist density.\n\nWinter sessions have their own appeal. The low sun creates long dramatic shadows, the crowds are minimal, and the light has a cool clarity that suits black-and-white and editorial work. Cloudy winter days provide soft, diffused light that flatters portraits beautifully.',
      },
      {
        heading: 'The Golden Hour Experience',
        body: 'Golden hour at the Acropolis — roughly 45 minutes after sunrise or 90 minutes before sunset — transforms the marble into a warm amber glow that photographs beautifully. During this window, the light is directional and soft, casting long shadows that add depth to portraits. The city below catches the same warm tones, creating layered compositions that feel rich and cinematic.\n\nI plan all Acropolis sessions to take full advantage of these windows. The exact timing shifts throughout the year — sunrise sessions start as early as 6:00 in June and as late as 7:30 in December. I calculate the precise golden-hour window for your session date and schedule accordingly, ensuring you arrive at the optimal moment. This attention to timing is one of the main reasons Acropolis sessions produce images that stand out from typical tourist photography at the site.',
      },
      {
        heading: 'What to Bring to Your Acropolis Session',
        body: 'Comfortable walking shoes are essential — the terrain around Filopappou and the Acropolis slopes is uneven in places. I recommend bringing water, especially during warmer months, and a light jacket or scarf even in summer since early mornings on the hill can be cooler than the city below.\n\nFor outfit changes, bring your looks in a small bag and I\'ll help you find a private spot to change between viewpoints. I carry a portable changing screen for sessions that need one. Sunscreen and sunglasses are advisable, and if you wear contact lenses, bring lubricating drops — the combination of sun and wind can dry them out during longer sessions.',
      },
    ],
    faq: [
      {
        question: 'Do I need a permit to shoot at the Acropolis?',
        answer: 'For professional shoots with multiple outfit changes or commercial use, a permit from the Greek Ministry of Culture may be required. For intimate portrait sessions, we can work from public viewpoints that don\'t require permits.',
      },
      {
        question: 'What time of day is best for an Acropolis photoshoot?',
        answer: 'Early morning (7:00-9:00) and golden hour before sunset offer the best light and fewer visitors. I always plan Acropolis sessions around these windows.',
      },
      {
        question: 'What are the best viewpoints for shooting the Acropolis?',
        answer: 'Filopappou Hill, Areopagus Hill, and the Anafiotika neighbourhood all offer stunning, less-crowded views of the Acropolis. Each gives a different feel — from sweeping cityscape frames to intimate foreground-background compositions.',
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
        answer: 'Yes. Many clients combine an Acropolis shoot with Anafiotika, Plaka, or a rooftop cafe. Combined sessions run 3-4 hours and include transportation between sites.',
      },
      {
        question: 'What happens if it\'s cloudy on the day?',
        answer: 'Cloudy conditions can actually be excellent for Acropolis photography — the soft, diffused light reduces harsh shadows and creates even skin tones. I monitor conditions and advise on the best approach.',
      },
      {
        question: 'Do you provide transport to the Acropolis?',
        answer: 'Combined location packages include transportation between sites. For single-location sessions, I provide detailed meeting coordinates and parking or taxi instructions.',
      },
      {
        question: 'Are there bathroom facilities near the shooting locations?',
        answer: 'Yes. The Acropolis museum area and Filopappou Hill both have public facilities nearby. I include practical information like this in the pre-session briefing I send after booking.',
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
    introduction: 'Plaka is one of my favourite locations in Athens for a photoshoot. Its narrow stone streets, neoclassical buildings, climbing bougainvillea, and warm light create a natural studio environment that works beautifully for portraits, editorial content, and branding imagery. Walking through Plaka with a camera feels like moving through a set of pre-composed frames.\n\nWhat sets Plaka apart from other Athens neighbourhoods is its variety within a compact area. In a 200-metre walk you can go from a quiet stone staircase draped in bougainvillea to a wide street with neoclassical facades painted in ochre and terracotta, from a tucked-away Byzantine church to a sun-drenched corner with a view of the Acropolis rising above the rooftops. This diversity means a single session in Plaka can produce images that look like they were shot across multiple locations.\n\nI\'ve guided hundreds of portrait and editorial sessions through Plaka\'s streets. I know which corners catch the best afternoon light, which doorways have the most interesting paint textures, and which cafes have courtyards that work well for candid lifestyle frames. This experience means we spend more time shooting and less time searching for the next spot.',
    keyword: 'plaka photoshoot athens',
    sections: [
      {
        heading: 'What Makes Plaka Special for Photography',
        body: 'Plaka is the oldest neighbourhood in Athens, built on the north-eastern slope of the Acropolis. What makes it exceptional for photography is its variety within a compact area. In a single session we can move from a quiet stone staircase framed by bougainvillea to a wide street with neoclassical facades, from a shaded courtyard to a sunlit corner with a view of the Acropolis rising above the rooftops.\n\nThe textures alone give you dozens of possibilities: painted wooden doors, iron balconies, rough stone walls, smooth marble steps. I use these elements as background layers, letting the subject sit naturally within the environment rather than placing them in front of it.',
      },
      {
        heading: 'Best Times and Routes',
        body: 'I\'ve walked Plaka at every hour of the day, and I know which streets work at which time. Morning light (8:00-10:00) pours into the eastern streets and catches the upper facades. Midday is challenging in summer but workable in the shadier lanes. Late afternoon (16:00-19:00) is ideal — the sun drops behind the Acropolis, casting warm tones on the stone and creating long, soft shadows through the narrow passages.\n\nI have a set of routes that avoid the busiest tourist corridors. Even in peak season, Plaka has quiet corners that most visitors don\'t find. I\'ll plan a path that balances variety with privacy, so the session feels comfortable and uninterrupted.',
      },
      {
        heading: 'What Kind of Shots Work Best in Plaka',
        body: 'Plaka suits a wide range of photographic styles. For portraits, the enclosed streets create a sense of intimacy, and the varied backdrops mean every few steps gives you a new frame. For editorial and lifestyle work, the neighbourhood adds immediate context and atmosphere — it\'s clearly Athens, but not in a postcard way. For branding sessions, Plaka\'s visual richness communicates creativity, culture, and a refined sensibility.\n\nI recommend planning 2-3 outfits to match the different environments: something neutral for the stone streets, something with colour for the bougainvillea walls, and something relaxed for the cafe corners.',
      },
      {
        heading: 'Plaka Through the Seasons',
        body: 'Plaka changes character with the seasons. In spring, the bougainvillea blooms in deep magenta and orange, creating saturated colour accents against the pale stone. Summer brings intense light and long golden hours, though midday can be challenging in the open streets. Autumn softens the light and thins the crowds, making it perhaps the best season for a relaxed session. Winter is quiet, with low sun casting long shadows through the empty streets and a cooler, more contemplative atmosphere.\n\nI adjust route planning and timing based on the season to ensure consistent results regardless of when you book.',
      },
      {
        heading: 'Neighbourhood Highlights and Hidden Corners',
        body: 'Some of the most photogenic spots in Plaka are the ones most visitors walk past. The intersection of Mnisikleous and Stratonos offers a staircase view toward the Acropolis that works perfectly for portraits. The Klettou and Epimenidou area has pastel-coloured neoclassical walls in excellent condition. Adrianou Street, the oldest in Athens, provides consistent ambient light in the late afternoon.\n\nI\'ve developed a set of routes through Plaka that avoid the busiest tourist corridors while hitting the most visually rewarding spots. Even in peak season, I know quiet corners — a shaded courtyard behind the Lysikrates Monument, a vine-covered passage near the Tower of the Winds — where we can work without interruptions.',
      },
      {
        heading: 'Combining Plaka with Nearby Neighbourhoods',
        body: 'Plaka\'s location at the foot of the Acropolis makes it easy to combine with other nearby areas in a single session. A morning shoot can start in Plaka, move up to the Anafiotika steps, and finish at a Filopappou viewpoint — all within walking distance. Each area adds a different texture: the intimate scale of Plaka\'s streets, the whitewashed Cycladic character of Anafiotika, and the panoramic Acropolis views from Filopappou.\n\nI offer combined neighbourhood packages that include a structured route through 2-3 areas, allowing for outfit changes and a diverse final image set. These sessions typically run 3 hours and produce images that feel rich in variety while maintaining a cohesive visual style.',
      },
      {
        heading: 'Practical Tips for Your Plaka Session',
        body: 'Plaka is a pedestrian neighbourhood with uneven stone streets, so comfortable walking shoes are essential. The best light arrives in the late afternoon, but this is also when the streets are busiest. I plan routes that prioritise quieter parallel streets while still hitting the most photogenic spots.\n\nI recommend bringing 2-3 outfits that complement the neighbourhood\'s warm tones. Soft whites, creams, olive greens, and muted terracotta work particularly well against Plaka\'s stone and bougainvillea. Avoid all-black or all-white outfits — they can look flat against the varied backgrounds. I\'ll send specific guidance based on the season and route we\'ll be using.',
      },
    ],
    faq: [
      {
        question: 'Why is Plaka good for photography?',
        answer: 'Plaka offers incredible variety in a compact area: neoclassical doorways, textured stone walls, quiet staircases, cafes, and vine-covered courtyards. The light filters beautifully through the narrow streets, especially in the late afternoon.',
      },
      {
        question: 'Is Plaka crowded for photoshoots?',
        answer: 'It can be busy during peak tourist season, but I know quieter side streets and early-morning windows that work well. We\'ll plan the route to avoid crowds and maximise good light.',
      },
      {
        question: 'What style of photos work best in Plaka?',
        answer: 'Plaka suits editorial, lifestyle, portrait, and branding work. The architecture lends itself to both wide environmental shots and tight detail frames — hands on an old door, a profile against a painted wall.',
      },
      {
        question: 'What time of day should we shoot in Plaka?',
        answer: 'Morning (8:00-10:00) and late afternoon (16:00-19:00) are ideal. The low sun casts warm tones on the stone and creates gentle shadows through the streets.',
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
        answer: 'Absolutely. Plaka sits at the foot of the Acropolis, making it easy to combine both in a single session. Combined shoots typically run 3 hours and include transportation between areas.',
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
    metaDescription: 'Photographer prices in Athens — portrait sessions from €150, branding packages from €300, editorial projects quoted per brief. Transparent pricing for professional photography.',
    h1: 'Photographer Athens Prices',
    introduction: 'Below is an overview of my pricing for photography sessions in Athens. Every project is unique, so these are starting points — I\'ll provide a detailed quote after we discuss your specific needs. All prices include the shoot, editing, and high-resolution delivery through a private online gallery.\n\nI believe in transparent pricing. There are no hidden fees, and I\'ll always give you a complete cost breakdown before you commit. The prices below reflect the base investment for each type of session. Add-on services and custom requirements are quoted separately so you only pay for what you need.',
    keyword: 'photographer athens prices',
    sections: [
      {
        heading: 'Portrait Sessions — From €150',
        body: 'A standard portrait session includes a pre-shoot consultation, a 1.5 to 2-hour session in my studio or at a chosen Athens location, a full set of individually edited high-resolution images, and both colour and black-and-white versions where appropriate. Sessions are relaxed and paced to your comfort level.\n\n<table class="pricing-table"><thead><tr><th>Service</th><th>Price</th><th>Details</th></tr></thead><tbody><tr><td>Portrait Session</td><td>From €150</td><td>1.5–2 hr, studio or location, full edit</td></tr><tr><td>Group Portrait</td><td>€250</td><td>3+ people, same format as portrait</td></tr><tr><td>Rush Delivery</td><td>€50</td><td>48-hour turnaround</td></tr><tr><td>Additional Retouching</td><td>€20/image</td><td>Beyond standard colour grading</td></tr><tr><td>Travel beyond central Athens</td><td>€30–60</td><td>Depending on distance</td></tr></tbody></table>\n\nGroup portrait sessions (3+ people) are €250. Travel beyond central Athens is quoted separately and typically ranges from €30 to €60 depending on distance.',
      },
      {
        heading: 'Branding Packages — From €300',
        body: 'Half-day branding package (€300): planning call, 3-hour shoot, 30-40 edited images with commercial usage rights, landscape and vertical crops for web and social. Full-day branding package (€550): extended planning, 6-hour shoot, 50-70 edited images, priority editing, and a private gallery with client-select favourites for additional retouching.\n\nBoth packages include commercial usage rights for web, social media, print, and press. Additional images beyond the package limit can be purchased at €15 per image. Travel outside Athens is quoted separately.',
      },
      {
        heading: 'Editorial and Commercial Projects — Quoted per Brief',
        body: 'Editorial and commercial projects are priced based on scope: number of looks or scenes, crew requirements, usage licensing, and timeline. I provide a detailed written quote after reviewing the brief. Typical editorial rates start at €400 for a half-day local shoot and range up to €1,200 for full-day productions with multiple scenes and licensing.\n\nAll editorial quotes include pre-production planning, the shoot, professional editing, and a usage licence tailored to the publication or campaign. Licensing for extended use (cross-platform, extended territory, or indefinite duration) is negotiated separately and added to the base rate.\n\nI also offer discounted rates for non-profit organisations, cultural institutions, and editorial projects with limited budgets. If your project has cultural or artistic merit but a tight budget, contact me to discuss what\'s possible within your means.',
      },
      {
        heading: 'Additional Services',
        body: 'I offer several add-on services that can be included in any package: film photography (medium format and 35mm) at €80 per roll including development and scanning, expedited editing at €50 for 48-hour delivery, location scouting at €60 per location, and print licensing for fine-art or display use at €50 per image. For recurring clients, I offer a 15% discount on all future sessions and priority scheduling.\n\nI also offer fine-art prints of select images from your session. Printed on archival paper with a choice of finishes (matte, lustre, or metallic), these are available in sizes from A4 to A2. Prints are produced in collaboration with a professional lab in Athens and delivered within 10 working days. Framing options are available on request.',
      },
      {
        heading: 'How to Book and Payment Terms',
        body: 'Booking is straightforward. Use the contact section with a brief description of what you need, and we can schedule a call to discuss your project in detail. After the call, I send a written proposal with the scope, timeline, and price.\n\nA 30% deposit is required to confirm the booking, with the balance due on the day of the shoot. I accept bank transfer, PayPal, and cash. For corporate clients, I can issue a formal invoice with VAT details. Cancellations made more than 48 hours before the session receive a full refund of the deposit. Within 48 hours, the deposit is retained.',
      },
    ],
    faq: [
      {
        question: 'What is included in the portrait session price?',
        answer: 'The portrait session (€150) includes a pre-shoot consultation, 1.5-2 hour session in studio or at a chosen Athens location, full set of edited high-resolution images, and both colour and black-and-white versions where appropriate.',
      },
      {
        question: 'What does the branding package include?',
        answer: 'The branding package (€300+) includes a planning call, half-day shoot, 30-40 edited images with commercial usage rights, landscape/vertical crops, and a private online gallery.',
      },
      {
        question: 'Do you offer discounts for recurring clients?',
        answer: 'Yes. Returning clients receive a 15% discount on all future sessions. I also offer bundled packages if you need regular photography (quarterly branding updates, seasonal content).',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'I accept bank transfer, PayPal, and cash. A 30% deposit is required to confirm the booking, with the remainder due on the day of the shoot.',
      },
      {
        question: 'How many images do I receive?',
        answer: 'Portrait sessions include 20-30 edited images. Half-day branding sessions include 30-40 images. Full-day branding sessions include 50-70 images. Editorial projects are quoted per brief.',
      },
      {
        question: 'Do you offer student or artist discounts?',
        answer: 'Yes. I offer a 10% discount for students and emerging artists with a valid portfolio or enrolment. Contact me to discuss your project.',
      },
      {
        question: 'What is your cancellation policy?',
        answer: 'Cancellations made more than 48 hours before the session receive a full refund of the deposit. Within 48 hours, the deposit is retained. I understand unexpected situations arise — contact me and I\'ll do my best to accommodate.',
      },
      {
        question: 'Do you charge for travel outside Athens?',
        answer: 'Travel within central Athens is included. For locations beyond the city centre, I charge €30-60 depending on distance. For destinations outside Attica, travel expenses are quoted as part of the project proposal.',
      },
      {
        question: 'Can I purchase additional edited images?',
        answer: 'Yes. Additional images beyond the package limit can be purchased at €15 per image. You\'ll have access to a proof gallery where you can select your favourites.',
      },
      {
        question: 'Do you offer gift vouchers?',
        answer: 'Yes. Gift vouchers for portrait sessions and branding packages are available. They make thoughtful presents for birthdays, anniversaries, or professional milestones.',
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

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
    title: "Athens Photographer",
    metaTitle: "Athens Photographer | Portrait, Branding & Editorial Photography",
    metaDescription: "Guide to planning portrait, branding, editorial, and location photography in Athens with Alexandra Maria Deli — natural light, thoughtful locations, and calm direction.",
    h1: "Athens Photographer",
    introduction: "Choosing a photographer in Athens is not only about finding someone with a camera. It is about finding the right visual approach for the purpose of the images: a portrait that feels honest, a brand library that can support your work for months, an editorial story with atmosphere, or a personal session that preserves a particular time in your life.\n\nI am an Athens-based photographer working across portraits, personal branding, editorial, travel, and analog photography. My approach is calm, observant, and light-led. I plan each session around the person, the place, and the intended use of the images, so the photographs feel considered rather than generic.\n\nAthens is a generous city for photography, but it also needs thoughtful planning. Light changes quickly between narrow streets, open hills, marble courtyards, studio spaces, and the coastline. A good session uses those conditions instead of fighting them.",
    keyword: 'photographer athens',
    sections: [
      {
        heading: "What Kind of Photography Session Do You Need?",
        body: "Before choosing a location or package, it helps to understand what the photographs need to do.\n\nA portrait session is usually centred on you as a person. It may be for a website, LinkedIn, press, an artist profile, a dating profile, a personal milestone, or simply a thoughtful set of images that feels like this period of your life.\n\nA personal branding session is broader. It usually includes portraits, workspace images, process details, tools, products, and environmental frames. These images are designed to work together across a website, social media, press kit, newsletter, or content calendar.\n\nAn editorial session is more story-led. It may involve a publication, artist profile, campaign, cultural project, or visual essay. The images need to work as a sequence, not just as isolated strong frames.\n\nA travel or personal Athens session is often about memory and place. The goal is not to stand in front of every landmark, but to create images that carry the feeling of the city and your experience inside it.",
      },
      {
        heading: "Choosing the Right Athens Location",
        body: "Athens offers many different visual moods within a small area. The best location depends on the kind of images you want, how comfortable you feel in public, the time of day, and whether you need the setting to be recognisably Athens or more discreet.\n\nFor a historic Athens atmosphere, Plaka, Anafiotika, and the streets around the Acropolis offer stone, whitewashed walls, neoclassical details, and glimpses of the city’s older layers. These areas are beautiful but can be busy, so timing matters.\n\nFor wider views and a more open feeling, Filopappou Hill, the Pnyx, Lycabettus, and selected viewpoints around the centre can work well. These locations give more sky, movement, and breathing room.\n\nFor quieter portraits, the National Garden, residential streets, indoor spaces, and studio-style setups often create a calmer environment. They are useful if you want the attention to stay on expression, posture, and light rather than a famous backdrop.\n\nFor branding work, your own workspace may be the strongest location. A studio, shop, kitchen, atelier, office, or home workspace can say more about your work than a photogenic street ever could.",
      },
      {
        heading: "Best Time of Day for Photography in Athens",
        body: "The best light in Athens is usually early morning or late afternoon. Morning sessions often feel quieter and cleaner, especially in areas that become crowded later. Late afternoon can bring warmer tones, longer shadows, and more atmosphere.\n\nMidday is not impossible, but it needs careful handling. In summer, the sun can be harsh and heat can affect comfort quickly. Shaded streets, indoor locations, or studio-style sessions are often better choices during the middle of the day.\n\nWinter has its own advantages. The sun stays lower, the city is calmer, and cloudy days can create soft, flattering light for portraits. Spring and autumn are often the most flexible seasons for outdoor sessions because the temperature and light are easier to manage.",
      },
      {
        heading: "Studio, Location, or Hybrid Session?",
        body: "A studio-style session gives control. It is useful for headshots, clean portraits, product details, and images where the background should stay minimal. It can also be a good option for people who feel nervous outdoors or want privacy.\n\nA location session uses Athens as part of the image. It may be architectural, atmospheric, natural, urban, or personal. Location work is ideal when the setting should add context rather than disappear.\n\nA hybrid session combines both. For example, a personal branding shoot might begin with clean indoor portraits, then move into a workspace or nearby street for process and lifestyle images. A portrait session might include a quiet indoor setup followed by a short outdoor walk.\n\nThe right choice depends on the purpose of the images. Before the session, I help you decide which environment will support that purpose best.",
      },
      {
        heading: "How I Plan a Session",
        body: "Every session starts with a short conversation. I ask what the images are for, where they will be used, what mood you are drawn to, and whether you have any concerns about being photographed.\n\nFrom there, I suggest a practical plan: location, timing, route, wardrobe direction, image priorities, and any useful backup options. For outdoor sessions, I consider light, weather, crowds, walking distance, and the pace of the shoot. For indoor or branding sessions, I look at available light, background options, props, and how the space can support the story.\n\nThe plan matters, but it should not make the session feel rigid. The best images often come from small pauses, changes in light, or a moment that was not on the shot list. Good preparation creates space for those moments.",
      },
      {
        heading: "What the Session Feels Like",
        body: "Most people do not arrive feeling perfectly comfortable in front of a camera. That is normal. I begin with simple, low-pressure frames so you can settle into the process. As the session progresses, I guide posture, movement, expression, and interaction with the environment.\n\nI do not rely on stiff posing templates. Instead, I look for small adjustments that make a frame feel more natural: where the light meets the face, how the hands rest, how the body turns, when the expression becomes less performed.\n\nWhen useful, I can show you frames during the session so you understand what is working. This often helps people relax and trust the direction.",
      },
      {
        heading: "Editing, Delivery, and Usage",
        body: "After the session, I review the images carefully and prepare the final selection according to the agreed scope. Editing includes exposure refinement, colour grading, and subtle retouching. My preference is natural, film-informed editing that keeps skin texture and atmosphere intact.\n\nImages are delivered through a private online gallery with download access. For branding and editorial projects, usage rights are confirmed in the proposal so you know where and how the images can be used.",
      },
      {
        heading: "When to Enquire",
        body: "You do not need to have every detail decided before getting in touch. A short description is enough to begin: the kind of session you want, your preferred date or season, how you plan to use the images, and any locations you are considering.\n\nFrom there, I can suggest the most suitable session type, timing, and practical next steps.",
      },
    ],
    faq: [
      {
        question: "What type of photography do you specialise in?",
        answer: "I work mainly across portraits, personal branding, editorial, travel, and analog photography. The common thread is a calm, atmospheric approach built around light, place, and natural direction.",
      },
      {
        question: "Can you help me choose the right type of session?",
        answer: "Yes. If you are not sure whether you need portraits, branding images, an editorial session, or a more personal Athens photoshoot, describe how you want to use the images and I will suggest the best format.",
      },
      {
        question: "Where do sessions usually happen in Athens?",
        answer: "Sessions can take place in a studio-style space, outdoors in Athens, at your home or workspace, or across a planned route. Common options include Plaka, Anafiotika, Filopappou, the National Garden, the coastline, and quieter indoor locations.",
      },
      {
        question: "What time of day is best?",
        answer: "Early morning and late afternoon usually offer the most flattering light for outdoor sessions. Midday can work in shaded streets, indoor spaces, or studio-style setups.",
      },
      {
        question: "Do you work with people who feel nervous in front of the camera?",
        answer: "Yes. Many clients feel nervous at first. I begin gently, explain what I am doing, and guide the session step by step so you do not feel left alone to “perform”.",
      },
      {
        question: "Do you shoot both digital and film?",
        answer: "Yes. I work digitally and with analog formats depending on the project. Film can be included when it supports the mood, timeline, and budget.",
      },
      {
        question: "How long does a session last?",
        answer: "Portrait sessions are often 1.5 to 2 hours. Branding sessions may be half-day or full-day depending on the number of looks, locations, and image needs. Editorial projects are quoted around the brief.",
      },
      {
        question: "How are images delivered?",
        answer: "Final images are delivered through a private online gallery with download access. The delivery timeline and expected image range are confirmed before booking.",
      },
      {
        question: "Are you available outside Athens?",
        answer: "Yes. I am based in Athens and available for selected projects across Greece and abroad.",
      },
      {
        question: "How do I enquire?",
        answer: "Send a short note through the contact form with the project type, timing, location, and how you plan to use the images. You do not need to have everything fully planned before reaching out.",
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
    ctaText: "If you are looking for a photographer in Athens and want help shaping the session around your purpose, send a short note with your idea, timing, and location.",
  },
  {
    slug: 'portrait-photographer-athens',
    title: "Portrait Photographer Athens",
    metaTitle: "Portrait Photographer Athens | Natural Portraits & Headshots",
    metaDescription: "Guide to planning a portrait session in Athens — natural portraits, professional headshots, artist images, couples, families, locations, styling, and preparation.",
    h1: "Portrait Photographer Athens",
    introduction: "A good portrait should feel recognisable, but not flat. It should show something true about the person while still being carefully shaped by light, setting, expression, and timing.\n\nI photograph portraits in Athens for individuals, professionals, artists, couples, families, and small creative teams. Sessions can happen indoors, in a studio-style space, at your home or workplace, or outdoors in an Athens neighbourhood that suits the mood of the images.\n\nMy portrait work is calm and lightly directed. I do not expect you to arrive knowing how to pose. I guide the session gradually, beginning with simple frames and building towards more natural, expressive portraits as you become comfortable.",
    keyword: 'portrait photographer athens',
    sections: [
      {
        heading: "What Makes a Strong Portrait?",
        body: "A strong portrait is not only a technically correct image of a face. It is a meeting point between the person, the light, the photographer, and the purpose of the photograph.\n\nFor professional portraits, the image needs to create trust quickly. It should feel polished without becoming stiff. For artist portraits, the image may need more atmosphere and context. For personal portraits, the goal might be quieter: to preserve a version of yourself that feels honest, thoughtful, and specific.\n\nThe best portraits often come from small details: the angle of the shoulders, the way the eyes soften, the texture of the background, the space around the subject, or the moment just after someone stops trying too hard.",
      },
      {
        heading: "Choosing the Right Portrait Setting",
        body: "Portraits can be made in many kinds of spaces. The right setting depends on the mood you want and the practical use of the images.\n\nA studio-style setting is useful for clean headshots, press images, LinkedIn portraits, and portraits where the focus should stay entirely on the person. It gives more control over light and background.\n\nAn outdoor Athens setting adds atmosphere. Plaka and Anafiotika can feel historic and intimate. Filopappou and nearby hills give more sky and space. The National Garden creates softer greenery and shade. The coastline can work well for relaxed portraits with open light.\n\nAn environmental setting — your home, studio, office, workshop, or rehearsal space — can make the portrait more personal. It works especially well for artists, makers, therapists, designers, writers, chefs, musicians, and people whose work is connected to a specific place.",
      },
      {
        heading: "Portraits for Different Uses",
        body: "For a professional profile, the session may prioritise clean headshots and a few relaxed variations that work across LinkedIn, websites, speaker bios, and press materials.\n\nFor artists and performers, the session can include more expressive portraits, environmental frames, and images that show the relationship between the person and their practice.\n\nFor couples or families, the session is less about formal posing and more about connection, movement, and small interactions. The aim is to create images that feel natural without leaving everything to chance.\n\nFor personal portraits, the purpose may be more open. You may want images for yourself, to mark a transition, or simply because you have never had photographs that feel like you. That is a valid reason to book a session.",
      },
      {
        heading: "What If You Feel Awkward in Front of the Camera?",
        body: "Most people do. Feeling awkward at first does not mean you are not photogenic. It usually means you need a photographer who gives clear, calm direction and allows the session to warm up.\n\nI begin with simple setups in good light. We do not start with dramatic poses or forced expressions. As you settle in, I introduce small adjustments: turning slightly, shifting weight, using the hands naturally, walking, sitting, looking away, or interacting with the space.\n\nWhen it helps, I show you a few frames during the session so you can see what is working. This often changes the energy immediately because the process becomes less mysterious.",
      },
      {
        heading: "What to Wear for a Portrait Session",
        body: "Clothing should support the portrait, not take over. Solid colours, natural textures, and pieces that fit well usually photograph better than busy patterns, large logos, or clothes that make you feel unlike yourself.\n\nFor professional portraits, bring options that reflect how you want to be perceived: calm, creative, precise, warm, formal, or approachable. For personal portraits, choose clothes that feel comfortable and familiar, but still intentional.\n\nTwo or three outfits are usually enough for a standard session. More choices can create unnecessary decisions on the day. After booking, I send styling notes based on the location, light, season, and purpose of the photographs.",
      },
      {
        heading: "The Session Rhythm",
        body: "A portrait session usually begins slowly. We meet, check the light, talk through the plan, and start with a simple setup. These first frames are often a warm-up, not the final destination.\n\nAs the session develops, we move through different angles, backgrounds, expressions, and distances. Some frames will be more direct; others may be quieter or more candid. I leave space for pauses because those in-between moments often feel more truthful than obvious poses.\n\nThe session should feel guided, but not over-controlled. You should not feel abandoned in front of the camera, and you should not feel pushed into a version of yourself that feels false.",
      },
      {
        heading: "Editing and Delivery",
        body: "After the shoot, I select the strongest frames and edit the final set with a natural, film-informed approach. I adjust exposure, colour, contrast, and tone while keeping the image believable.\n\nRetouching is subtle. I do not heavily airbrush skin or reshape features. The aim is to refine the photograph while preserving texture, expression, and character.\n\nFinal images are delivered through a private online gallery with download access. Depending on the session, I may include colour and black-and-white versions where they serve the image.",
      },
      {
        heading: "Is a Portrait Session Right for You?",
        body: "A portrait session is useful if you need images that feel considered, current, and personal. It can be practical — for work, press, websites, applications, or profiles — but it can also be meaningful in a quieter way.\n\nYou do not need to know exactly how the images should look before enquiring. It is enough to know what they are for, what kind of mood you are drawn to, and whether you prefer an indoor, outdoor, or personal setting.",
      },
    ],
    faq: [
      {
        question: "Where do portrait sessions take place?",
        answer: "Portrait sessions can happen in a studio-style space, outdoors in Athens, at your home, at your workplace, or in a location that has personal meaning. I can suggest options based on the look you want.",
      },
      {
        question: "How long does a portrait session last?",
        answer: "A standard portrait session usually runs 1.5 to 2 hours. This gives enough time to warm up, explore a few variations, and create a varied final set without rushing.",
      },
      {
        question: "Do you offer professional headshots?",
        answer: "Yes. Headshots can be included in a portrait session. They can be photographed against a clean background or in a more natural setting, depending on how you want to present yourself.",
      },
      {
        question: "Can you photograph artists or makers in their workspace?",
        answer: "Yes. Environmental portraits are especially strong for artists, makers, musicians, writers, designers, therapists, and other professionals whose work is connected to a specific space.",
      },
      {
        question: "What should I wear?",
        answer: "Choose clothing that feels like you but is visually calm. Solid colours, soft textures, and well-fitting pieces usually work best. I send more specific wardrobe notes after booking.",
      },
      {
        question: "Can I bring outfit changes?",
        answer: "Yes. Two or three outfits are usually enough for a standard portrait session. We will choose what works best with the light and location.",
      },
      {
        question: "What if I am nervous?",
        answer: "That is normal. I start slowly, give clear direction, and show you what is working when helpful. You do not need to arrive confident; the session is designed to help you settle in.",
      },
      {
        question: "Do you retouch the images?",
        answer: "Yes, but subtly. Editing includes exposure, colour, tone, and gentle retouching. I avoid heavy airbrushing or artificial reshaping.",
      },
      {
        question: "Can couples, families, or small groups book portrait sessions?",
        answer: "Yes. I photograph couples, families, friend groups, and small creative teams. Group sessions are planned around the number of people and the type of images needed.",
      },
      {
        question: "How many images will I receive?",
        answer: "The final number depends on the session type and package. I confirm the expected range before booking.",
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
    ctaText: "If you are planning a portrait session in Athens, send a short note with the purpose of the images, your preferred timing, and any locations you have in mind.",
  },
  {
    slug: 'personal-branding-photographer-athens',
    title: "Personal Branding Photographer Athens",
    metaTitle: "Personal Branding Photographer Athens | Brand Image Libraries",
    metaDescription: "Guide to planning a personal branding photoshoot in Athens — portraits, workspace images, process shots, website visuals, social content, and usage rights.",
    h1: "Personal Branding Photographer Athens",
    introduction: "Personal branding photography is not just a set of nice portraits. It is a practical image library that helps people understand who you are, what you do, where you work, and what kind of experience or quality they can expect from you.\n\nI create personal branding photography in Athens for creative professionals, small businesses, artists, makers, therapists, chefs, architects, designers, musicians, and service providers who need images for websites, social media, press, newsletters, launches, or ongoing content.\n\nThe best branding sessions are planned around use, not vanity. Before we choose locations or outfits, we clarify where the images need to appear and what they need to communicate.",
    keyword: 'personal branding photographer athens',
    sections: [
      {
        heading: "What Personal Branding Photography Should Do",
        body: "A good brand image library should make your work easier to understand. It should give you a set of images that can be used across different platforms without feeling random or repetitive.\n\nAt minimum, most branding sessions include portraits. But portraits alone are often not enough. A useful image library may also include workspace images, process photographs, tools, details, products, client-facing moments, environmental frames, and wider images that can work as website banners or section backgrounds.\n\nThe goal is to create a small visual system. The images should feel connected through light, colour, composition, and mood, while still giving you enough variety for different uses.",
      },
      {
        heading: "Start with Where the Images Will Be Used",
        body: "Before the shoot, think about the places where you actually need photographs.\n\nYour website may need a homepage hero image, an About page portrait, service page visuals, process images, and horizontal banners. Instagram may need vertical crops, behind-the-scenes details, and images that can sit beside captions. Press or speaker requests may need clean portraits that work at different sizes. A newsletter may need more intimate or documentary-style frames.\n\nWhen we know the uses in advance, the session becomes more efficient. We can plan horizontal and vertical crops, negative space for text, close-up details, and a mix of direct and candid images.",
      },
      {
        heading: "What to Include in a Brand Image Library",
        body: "A strong branding session usually includes several image categories.\n\nPortraits show who is behind the work. These can range from clean, direct portraits to more relaxed environmental frames.\n\nWorkspace images show context. They help clients understand where and how the work happens.\n\nProcess images show action: hands working, materials, tools, preparation, conversation, movement, or small repeated rituals.\n\nDetail images give texture. They are useful for websites and social media because they add rhythm between portraits.\n\nBrand atmosphere images are wider, quieter frames that communicate mood. They may not show your face clearly, but they help the visual identity feel complete.",
      },
      {
        heading: "Choosing the Right Location",
        body: "Your own workspace is often the strongest location if it has visual character and enough light. A studio, atelier, office, kitchen, treatment room, shop, workshop, or home workspace can make the images feel specific and credible.\n\nIf your workspace is not suitable, we can use a rented studio, a calm interior, an outdoor route, or a location that reflects the tone of your brand. For example, an architect may need clean lines and thoughtful geometry. A ceramicist may need hands, clay, tools, shelves, and texture. A therapist may need warmth, privacy, and calm.\n\nThe best location is not always the most photogenic one. It is the place that helps the right audience understand your work.",
      },
      {
        heading: "Wardrobe, Props, and Preparation",
        body: "Branding sessions benefit from simple preparation. Bring clothing that reflects how you actually work and how you want clients to see you. Avoid outfits that feel like a costume unless that is part of the concept.\n\nProps should be real and useful. Tools, notebooks, materials, products, instruments, books, table settings, sketches, fabric, ceramics, or documents can add context. Too many props can make images feel staged, so we choose carefully.\n\nBefore the shoot, I ask for your website, social channels, brand colours if you have them, and a few visual references. You do not need a complete brand strategy. The planning process can help define a simple direction.",
      },
      {
        heading: "Planning Around Your Website and Content",
        body: "A common mistake is to book a branding shoot and then realise afterwards that most images do not fit the website layout. To avoid that, we think about crops and placements before the shoot.\n\nDoes your homepage need a wide horizontal image? Do your service pages need calm background visuals? Do you need square crops for profile images? Do you need vertical images for Instagram stories or reels covers? Do you need press images that work in black and white?\n\nWhen those needs are clear, the shoot becomes more useful. The final gallery feels like a working toolkit, not just a set of favourites.",
      },
      {
        heading: "How the Session Works",
        body: "The session begins with planning. We discuss your work, audience, platforms, visual references, and any practical limits. I then prepare a shot list organised by use: portraits, workspace, process, details, website crops, social images, and optional press images.\n\nOn the day, I guide the session calmly and efficiently. We move through each category while keeping the images natural. I pay attention to light, background, colour, and small details that can affect how polished the final set feels.\n\nAfter the shoot, I edit the final selection with a consistent tone so the images can sit together across your brand materials.",
      },
      {
        heading: "Updating Your Brand Images Over Time",
        body: "Brand photography is not always a one-time project. Your work changes, your space changes, your services change, and your audience may change too.\n\nSome clients need a full brand library once. Others benefit from smaller refresh sessions every season or every year. A refresh can update portraits, add new work, photograph a launch, or create content for upcoming campaigns.\n\nIf we work together again, I keep notes on the light, colour, locations, and visual direction so future sessions can feel connected without repeating the same images.",
      },
    ],
    faq: [
      {
        question: "What is included in a personal branding session?",
        answer: "A typical branding session includes planning, portraits, workspace or environmental images, process photographs, details, editing, and gallery delivery. The exact scope depends on your profession and where the images will be used.",
      },
      {
        question: "Is branding photography different from a portrait session?",
        answer: "Yes. A portrait session focuses mainly on you. A branding session focuses on you, your work, your process, your space, and the visual story your business needs to communicate.",
      },
      {
        question: "Can we shoot at my workspace?",
        answer: "Yes. Your workspace is often the best location if it reflects your work and has usable light. I may ask for simple reference photos beforehand to plan angles and timing.",
      },
      {
        question: "What if I do not have a beautiful workspace?",
        answer: "That is common. We can use a rented studio, a calm interior, an outdoor route, or a location that fits your brand. The goal is not perfection; it is clarity and visual consistency.",
      },
      {
        question: "What should I prepare before the shoot?",
        answer: "Prepare your website or social links, examples of images you like, any brand colours or visual guidelines, clothing options, relevant tools or products, and a rough list of where you need images.",
      },
      {
        question: "Do you provide images in different crops?",
        answer: "Where needed, yes. Branding projects can include landscape, portrait, square, and web-friendly crops so the final images are easier to use across platforms.",
      },
      {
        question: "Do branding sessions include commercial usage rights?",
        answer: "Yes, usage rights are discussed and confirmed in the proposal. The agreement can cover web, social media, press, print, or other agreed uses.",
      },
      {
        question: "How long does a branding session take?",
        answer: "A smaller session may take 3 to 4 hours. Larger branding projects can take a full day or more depending on locations, subjects, outfits, and final image needs.",
      },
      {
        question: "Can you photograph products or details too?",
        answer: "Yes. Detail and product-adjacent images can be included when they support the brand story. Full e-commerce product photography is a different type of project and should be discussed separately.",
      },
      {
        question: "Can I book a refresh session later?",
        answer: "Yes. Refresh sessions are useful for updated portraits, seasonal content, new services, launches, or additional workspace/process imagery.",
      },
    ],
    galleryImages: [
      { src: 'images/album1/544145230_17957343375003956_5933756572986482124_n.jpg', alt: 'Branding photograph by Alexandra Maria Deli', width: 800, height: 1000 },

      { src: 'images/album1/546571339_17957343453003956_6976260187363928964_n.jpg', alt: 'Workspace detail by Alexandra Maria Deli', width: 800, height: 1000 },

      { src: 'images/album1/544089634_17957344473003956_5163365635602737228_n.jpg', alt: 'Process photograph by Alexandra Maria Deli', width: 800, height: 1000 },

    ],
    schemaType: 'LocalBusiness',
    socialImage: 'images/album1/546571339_17957343453003956_6976260187363928964_n.jpg',
    ctaText: "If you need a brand image library for your website, social media, press, or launch, send a short note about your work, where the images will appear, and your preferred timing.",
    relatedPages: ['photographer-athens', 'portrait-photographer-athens', 'photoshoot-athens', 'photographer-athens-prices'],
  },
  {
    slug: 'editorial-photographer-athens',
    title: "Editorial Photographer Athens",
    metaTitle: "Editorial Photographer Athens | Narrative Photography for Brands & Publications",
    metaDescription: "Guide to planning editorial photography in Athens with Alexandra Maria Deli — visual stories, portraits, locations, production planning, licensing, and delivery.",
    h1: "Editorial Photographer Athens",
    introduction: "Editorial photography begins with a story. The images need to do more than look good; they need to hold together as a sequence, support a mood, and serve the publication, brand, artist, or cultural project behind them.\n\nI work as an editorial photographer in Athens for portrait-led stories, artist features, brand editorials, travel and lifestyle projects, cultural work, and visual essays. My approach is natural-light-led, atmospheric, and collaborative, with attention to preparation as well as the quieter moments that appear during the shoot.\n\nAthens is especially strong for editorial work because it offers contrast: ancient stone and modern concrete, dense streets and open hills, domestic interiors and coastal light, polished spaces and rough textures. The right location can become part of the narrative without overpowering the subject.",
    keyword: 'editorial photographer athens',
    sections: [
      {
        heading: "What Editorial Photography Needs to Do",
        body: "Editorial images usually need to work as a series. A single strong portrait may be useful, but the full set should create rhythm: wide frames, close details, environmental portraits, transitional images, and moments that help the story breathe.\n\nFor a magazine or online publication, the images need to support layout, headline, captions, and pacing. For a brand editorial, they may need to carry both atmosphere and commercial clarity. For an artist profile, they may need to reveal the person, the work, and the space between them.\n\nThe best editorial photography feels intentional without becoming over-explained. It leaves some room for the viewer to enter the story.",
      },
      {
        heading: "Starting with the Brief",
        body: "A strong editorial session begins before the shoot day. I ask for the purpose of the project, the intended audience, the story angle, references, deadlines, required image count, format needs, and usage requirements.\n\nIf there is an editor, art director, brand lead, stylist, or producer involved, I work from the shared brief so the visual direction is clear. When the brief is still loose, I can help shape a practical shot list and visual mood.\n\nThe brief does not remove spontaneity. It gives us a direction, so that unexpected moments can still serve the story.",
      },
      {
        heading: "Location, Light, and Visual Language",
        body: "Athens can create many editorial moods. A bright rooftop, a quiet studio, a workshop, a restaurant kitchen, a theatre, a courtyard, a residential street, a hill, or the coastline can each suggest a different narrative.\n\nI plan locations around both meaning and practicality. A location may look beautiful but fail if the light is wrong, the sound is disruptive, the access is complicated, or there is no space for the subject and crew to work comfortably.\n\nLight is central to the final mood. I often work with available light, shaping it with simple tools when needed. I prefer to preserve the character of the location rather than make every project look artificially uniform.",
      },
      {
        heading: "Editorial Portraits",
        body: "Editorial portraits sit between documentary observation and controlled portraiture. The subject needs to feel present, but the image also needs composition, atmosphere, and a reason for its setting.\n\nFor artists, musicians, chefs, architects, writers, performers, or makers, I often combine portraits with process images and details of the space. These supporting frames help the final story feel richer and give editors more options for layout.\n\nA portrait may be direct and still, or it may be built around movement, work, conversation, or rehearsal. The right approach depends on the story.",
      },
      {
        heading: "Working with Creative Teams",
        body: "Editorial work is collaborative. I am comfortable working with editors, art directors, stylists, makeup artists, assistants, producers, and brand teams. I am also comfortable working independently on smaller assignments where the production needs to stay light.\n\nClear communication matters on set. I keep the team aware of what we have, what we still need, and where the light or timing may require adjustment. When useful, I can review frames during the shoot so key people can confirm direction before we move on.",
      },
      {
        heading: "Deliverables, Licensing, and Timeline",
        body: "Editorial deliverables depend on the project. The final set may include high-resolution images, web-ready files, selected black-and-white versions, print preparation, or crops for specific formats.\n\nUsage rights are agreed before the project begins. Editorial use, commercial use, campaign use, territory, duration, exclusivity, and third-party usage all affect the quote. It is better to clarify these terms early so there is no confusion later.\n\nTurnaround depends on the scope, number of final images, and review process. Rush delivery can be discussed when there is a fixed publication or campaign deadline.",
      },
      {
        heading: "Preparing for an Editorial Shoot in Athens",
        body: "Planning should cover location access, time of day, weather, wardrobe, props, lighting needs, crew size, transport, permissions, and backup options. If the shoot involves archaeological areas, private interiors, hotels, restaurants, cultural spaces, or public-facing commercial imagery, permit and approval requirements should be discussed early.\n\nAthens can be visually generous, but production days can be affected by heat, traffic, crowds, stairs, narrow streets, and changing light. A good plan protects the shoot from losing energy to avoidable logistics.",
      },
      {
        heading: "Why Athens Works for Editorial Photography",
        body: "Athens can hold many visual contradictions inside one story. It can feel classical, urban, domestic, coastal, cinematic, intimate, raw, or refined depending on the route and timing.\n\nFor editorial work, this range is useful. A project can move from a quiet interior to a textured street, from pale stone to deep shadow, from a working space to a wider city view. The city allows mood changes without requiring long travel, as long as the day is planned carefully.",
      },
    ],
    faq: [
      {
        question: "What kinds of editorial projects do you photograph?",
        answer: "I work on portrait-led features, artist profiles, cultural stories, brand editorials, lifestyle projects, travel/documentary work, and visual essays.",
      },
      {
        question: "Do you work with publications and creative teams?",
        answer: "Yes. I can work with editors, art directors, stylists, producers, brand teams, and assistants, or independently for smaller assignments.",
      },
      {
        question: "Can you help with location ideas in Athens?",
        answer: "Yes. I can suggest locations based on the story, light, access, mood, and practical needs of the shoot.",
      },
      {
        question: "Do you create mood boards?",
        answer: "Yes, when useful. A mood board can cover lighting, colour, composition, wardrobe, location direction, and overall atmosphere.",
      },
      {
        question: "Can you shoot indoors and outdoors?",
        answer: "Yes. Editorial projects can be studio-based, interior-led, outdoor, or a combination of locations.",
      },
      {
        question: "How does licensing work?",
        answer: "Licensing is agreed per project and may depend on use, territory, duration, exclusivity, and whether the images are editorial or commercial.",
      },
      {
        question: "Can you handle tight deadlines?",
        answer: "Rush timelines can be discussed before booking. The feasibility depends on shoot scope, final image count, and review needs.",
      },
      {
        question: "Do you provide black-and-white versions?",
        answer: "Where they serve the story, yes. Some editorial projects benefit from both colour and black-and-white treatments.",
      },
      {
        question: "Do you work outside Athens?",
        answer: "Yes. I am available for selected editorial projects across Greece and abroad.",
      },
      {
        question: "What should I send when enquiring?",
        answer: "Send the brief, deadline, intended use, approximate image count, location ideas, references, and any known production details.",
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
    ctaText: "If you are planning an editorial project in Athens, share the brief, deadline, intended usage, and any references. I can respond with a practical approach, timeline, and quote.",
  },
  {
    slug: 'photoshoot-athens',
    title: "Photoshoot in Athens",
    metaTitle: "Photoshoot in Athens | Guide to Locations, Timing & Sessions",
    metaDescription: "Plan a photoshoot in Athens with guidance on locations, light, timing, outfits, session types, preparation, and what to expect from enquiry to delivery.",
    h1: "Photoshoot in Athens",
    introduction: "Planning a photoshoot in Athens can feel simple at first — choose a beautiful location and take photographs. In reality, the best sessions come from a little more care: the right neighbourhood, the right light, a comfortable pace, and a clear idea of what the images are for.\n\nI offer photoshoots in Athens for portraits, couples, personal projects, branding images, editorial content, and travel memories. Sessions can be relaxed and personal, polished and professional, or more story-led depending on your purpose.\n\nThis guide will help you think through the main decisions before booking: location, timing, style, clothing, session length, and what happens on the day.",
    keyword: 'photoshoot athens',
    sections: [
      {
        heading: "Start with the Purpose of the Photoshoot",
        body: "Before choosing a location, ask what the images need to do.\n\nIf the photos are for personal use, the session can be more intuitive. We can focus on atmosphere, movement, connection, and the feeling of being in Athens.\n\nIf the images are for professional use, we may need clearer headshots, portrait variations, clean backgrounds, or crops that work across websites and profiles.\n\nIf the session is for branding, we should plan a broader image library: portraits, details, process, workspace, and images that support your website or social content.\n\nIf the shoot is editorial, the planning should begin with the story, mood, and final use of the images.\n\nThe same city can support all of these needs, but the session should be planned differently for each one.",
      },
      {
        heading: "Choosing an Athens Location",
        body: "Athens has many strong photoshoot locations, but the “best” one depends on the look you want and how comfortable you feel in public.\n\nPlaka and Anafiotika are ideal for a historic, intimate Athens feeling: stone streets, whitewashed walls, neoclassical details, narrow passages, and occasional Acropolis views.\n\nFilopappou Hill and nearby viewpoints work well for open light, city views, and Acropolis-area atmosphere without standing directly inside crowded landmark spaces.\n\nThe National Garden offers shade, greenery, and a calmer pace. It is useful for portraits, families, and anyone who wants a softer background.\n\nPsyrri, Kerameikos, and selected central streets can work for more urban, textured, contemporary images.\n\nThe Athens Riviera and coastal areas offer open sky, sea light, and a more relaxed feeling, especially outside the harsh middle of the day.\n\nIndoor spaces, studios, cafés, homes, and workspaces can be better choices when privacy, controlled light, or brand context matters more than outdoor scenery.",
      },
      {
        heading: "Best Time of Day",
        body: "For outdoor photoshoots, early morning and late afternoon are usually the strongest options.\n\nMorning is often best for quieter streets, fresher energy, and fewer people in popular areas. This is especially useful for Plaka, Anafiotika, Acropolis viewpoints, and other central routes.\n\nLate afternoon gives warmer light and longer shadows. It can feel more atmospheric, but some locations may be busier depending on the season.\n\nMidday can work in shaded streets, indoor spaces, or studio-style sessions. In summer, it is often better to avoid long outdoor sessions during the hottest hours.",
      },
      {
        heading: "How Long Should You Book?",
        body: "A focused portrait session usually needs 1.5 to 2 hours. This gives enough time to warm up, move through one location or a short route, and create a varied set of images.\n\nA couples, family, or personal Athens session may also fit well into 1.5 to 2 hours if the route is simple.\n\nA branding session often needs 3 to 4 hours or more because it includes portraits, details, process images, and several use cases.\n\nAn editorial or commercial project is quoted by brief. The timeline depends on locations, subjects, styling, production needs, usage, and final image count.\n\nLonger is not always better. The goal is to choose enough time for variety without losing energy or making the session feel too stretched.",
      },
      {
        heading: "What to Wear",
        body: "The best clothing depends on the location and purpose of the shoot, but a few principles are useful.\n\nChoose clothes that fit well and feel like you. Avoid busy patterns, large logos, and pieces that need constant adjusting. Textures usually photograph better than flat, synthetic fabrics.\n\nFor historic Athens locations, soft whites, creams, beige, olive, dusty blue, terracotta, and muted tones often work well against stone and pale walls. For more urban locations, stronger colours or sharper silhouettes can work if they fit the concept.\n\nFor branding sessions, clothing should match how you want clients to understand your work. Bring a polished option, a more relaxed option, and any clothing connected to your process.\n\nComfortable shoes matter, especially for walking routes in Plaka, Anafiotika, Filopappou, and Acropolis-area viewpoints.",
      },
      {
        heading: "What to Bring",
        body: "For outdoor sessions, bring water, comfortable shoes, a compact bag, any outfit changes, simple touch-up items, and weather-appropriate layers. In summer, sunscreen and a small towel can be useful. For contact lens wearers, eye drops can help during longer outdoor sessions.\n\nFor branding sessions, bring tools, products, notebooks, materials, or objects that genuinely belong to your work. A few meaningful items are better than a large collection of props.\n\nFor couples or families, bring only what you need. Too many bags or accessories can slow the session down.",
      },
      {
        heading: "What Happens on the Day",
        body: "We begin with a short check-in and confirm the route or setup. I look at the light, adjust the plan if needed, and start with simple frames so you can settle in.\n\nDuring the session, I guide movement, posture, expression, and interaction with the location. You do not need to know how to pose. I will give direction while leaving enough space for natural moments.\n\nIf we are walking through Athens, I plan the route so we are not constantly deciding where to go next. Good route planning keeps the session relaxed and helps the final gallery feel coherent.",
      },
      {
        heading: "After the Photoshoot",
        body: "After the session, I review the images and prepare the final selection according to the agreed package. Editing includes exposure, colour, tone, and subtle retouching.\n\nImages are delivered through a private online gallery with download access. For professional, branding, or editorial projects, usage rights and file needs are confirmed before booking.",
      },
    ],
    faq: [
      {
        question: "How do I book a photoshoot in Athens?",
        answer: "Send a note through the contact form with your preferred date, session type, number of people, and any locations you are considering. From there, we can confirm the best format and timing.",
      },
      {
        question: "What are the best photoshoot locations in Athens?",
        answer: "Popular options include Plaka, Anafiotika, Filopappou Hill, Acropolis-area viewpoints, the National Garden, Psyrri, Kerameikos, and the Athens Riviera. The best choice depends on the mood and purpose of the images.",
      },
      {
        question: "What time of day is best?",
        answer: "Early morning and late afternoon usually offer the best outdoor light. Morning is often calmer in busy areas, while late afternoon can bring warmer tones.",
      },
      {
        question: "How long does a photoshoot take?",
        answer: "Most portrait or personal sessions last 1.5 to 2 hours. Branding or editorial sessions may need half a day, a full day, or a custom timeline.",
      },
      {
        question: "Can couples or families book a session?",
        answer: "Yes. I photograph couples, families, friend groups, and small groups. The session is planned around the number of people, walking distance, and desired variety.",
      },
      {
        question: "What should I wear?",
        answer: "Wear clothes that fit well, feel comfortable, and suit the location. Avoid large logos and very busy patterns. I send more specific guidance after booking.",
      },
      {
        question: "What if the weather is bad?",
        answer: "I monitor the weather before outdoor sessions. Depending on conditions, we can adjust timing, move to an indoor option, or reschedule if necessary.",
      },
      {
        question: "Can we use more than one location?",
        answer: "Yes, if the session length allows it. Nearby combinations such as Plaka and Anafiotika or Plaka and an Acropolis viewpoint can work well with a planned walking route.",
      },
      {
        question: "Can I see photos during the shoot?",
        answer: "Yes, when useful. Reviewing a few frames during the session can help you understand the direction and feel more comfortable.",
      },
      {
        question: "How will I receive the images?",
        answer: "Final edited images are delivered through a private online gallery with download access.",
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
    ctaText: "If you are planning a photoshoot in Athens, send a few details about your date, preferred style, and how you want to use the images. I can suggest the most suitable route, timing, and session length.",
  },
  {
    slug: 'acropolis-photoshoot',
    title: "Acropolis Photoshoot Athens",
    metaTitle: "Acropolis Photoshoot Athens | Viewpoints, Timing & Permit Guide",
    metaDescription: "Guide to planning an Acropolis-area photoshoot in Athens — respectful viewpoints, timing, routes, permits, what to wear, crowds, and practical preparation.",
    h1: "Acropolis Photoshoot Athens",
    introduction: "An Acropolis photoshoot can be beautiful when it is planned with care. The strongest images are often not made by standing directly in front of the monument, but by using the surrounding hills, streets, light, and city views to create photographs where the Acropolis becomes part of the atmosphere.\n\nI photograph portrait, personal, branding, and editorial sessions around the Acropolis area using nearby public viewpoints, walking routes, and streets that frame the Parthenon from a respectful distance. The exact route depends on light, crowds, access, intended use, and any permission requirements.\n\nThis guide explains what to consider before booking an Acropolis-area session: where to shoot, when to go, what to wear, what to bring, and when permits may need to be discussed.",
    keyword: 'acropolis photoshoot athens',
    sections: [
      {
        heading: "Acropolis Area vs. Inside the Archaeological Site",
        body: "There is an important difference between a photoshoot around the Acropolis and a shoot inside controlled archaeological areas.\n\nMany portrait and personal sessions can be planned from public viewpoints and nearby streets, such as Filopappou Hill, the Pnyx area, parts of Anafiotika, and selected walking routes with Acropolis views. These locations can create strong images without entering controlled spaces with professional production activity.\n\nCommercial, editorial, advertising, larger-crew, tripod, lighting, drone, or production-style work may require permissions depending on the exact location and intended use. Rules can change, so permit questions should be discussed before the route is confirmed.\n\nThe safest approach is to plan honestly: choose respectful viewpoints, keep the setup light where appropriate, and allow extra lead time if permissions may be needed.",
      },
      {
        heading: "Why the Acropolis Works as a Backdrop",
        body: "The Acropolis is powerful because it is not only a monument; it is part of Athens’s visual identity. It appears above rooftops, between narrow streets, beyond pine trees, and across open viewpoints.\n\nFor portraits, the best use of the Acropolis is often subtle. The monument can give context without turning the image into a tourist postcard. A strong portrait still needs expression, light, composition, and a sense of the person in the frame.\n\nFor editorial or branding work, the Acropolis can communicate place, history, scale, and cultural context. The key is to use it with restraint and respect.",
      },
      {
        heading: "Best Viewpoints and Route Ideas",
        body: "Filopappou Hill is one of the most flexible Acropolis-area options. It offers trees, paths, wider views, and several angles where the Parthenon can sit naturally in the background.\n\nThe Pnyx area can give open space and a quieter historical atmosphere, depending on timing and access.\n\nAnafiotika offers narrow streets, whitewashed walls, stairs, and occasional views toward the Acropolis. Because it is residential and compact, it should be approached carefully and quietly.\n\nPlaka can be combined with nearby viewpoints for a session with more variety: intimate streets first, then wider Acropolis-area frames as the light changes.\n\nThe exact route should be chosen around the season, walking comfort, crowd levels, outfit changes, and the kind of images you want.",
      },
      {
        heading: "Best Time of Day for an Acropolis Photoshoot",
        body: "Early morning is often the most practical choice. The area is calmer, the light is softer, and the session can move through viewpoints before the busiest part of the day.\n\nLate afternoon and golden hour can be beautiful, with warmer light and longer shadows. These times can also be busier, so the route needs flexibility.\n\nSummer sessions usually require early starts. The heat and crowds can become difficult quickly. Spring and autumn are often the easiest seasons for comfort and light. Winter can be excellent for quieter routes, lower sun, and softer conditions.",
      },
      {
        heading: "What to Wear",
        body: "Choose clothing that complements the setting without fighting it. Neutral tones such as cream, white, beige, taupe, olive, dusty blue, and soft rose often work well against stone, sky, and greenery.\n\nFlowing fabrics can add movement, especially when the location has open space or wind. For more editorial concepts, stronger colours can work if they are intentional.\n\nComfortable shoes are important. Many of the best routes involve stone paths, slopes, stairs, or uneven ground. If you want a more formal shoe for the photographs, bring it separately and walk in something practical.",
      },
      {
        heading: "What to Bring",
        body: "Bring water, comfortable shoes, a small bag, any outfit changes, and a light layer if the session is early morning or in cooler months. In summer, sunscreen and a compact touch-up kit are useful.\n\nFor outfit changes, keep the plan realistic. Acropolis-area routes are public and not always convenient for changing. Two carefully chosen looks often work better than several complicated outfits.\n\nIf the session is for branding or editorial use, bring only props or materials that genuinely support the concept. The Acropolis area is visually strong already; unnecessary props can feel forced.",
      },
      {
        heading: "How to Avoid Cliché Images",
        body: "An Acropolis photoshoot does not need to copy the same poses and angles everyone has seen before. The strongest images often use the monument indirectly: a line of stone leading the eye, the Parthenon softened in the distance, a quiet street with the hill above it, or a portrait where the background gives context but does not dominate.\n\nI plan the session around layered compositions, changing light, and a route that gives variety. The aim is to create images that feel personal and specific, not simply recognisable.",
      },
      {
        heading: "Permits, Respect, and Practical Limits",
        body: "Permit requirements depend on location, equipment, crew size, commercial use, and whether the shoot takes place inside or near controlled archaeological spaces. When in doubt, it is better to discuss the intended use early.\n\nFor personal portrait sessions from public viewpoints, the process is usually simpler. For commercial, advertising, editorial production, drone work, larger crews, tripods, lighting, or work inside archaeological sites, permissions may be needed and lead time should be allowed.\n\nRespect is part of the planning. We avoid blocking paths, disturbing residents, treating residential areas as sets, or using the monument in a way that feels careless.",
      },
    ],
    faq: [
      {
        question: "Can we shoot inside the Acropolis archaeological site?",
        answer: "That depends on the type of shoot, equipment, intended use, and current rules. Personal visitor photography and professional production activity are not the same. For planned sessions, it is usually better to discuss the exact use before assuming access.",
      },
      {
        question: "Do I need a permit for an Acropolis photoshoot?",
        answer: "Permit needs depend on location, crew size, equipment, and image use. Commercial, editorial, advertising, larger-crew, tripod, lighting, or controlled-site work may require approval. Public-viewpoint personal sessions may be simpler.",
      },
      {
        question: "What are the best public viewpoints?",
        answer: "Filopappou Hill, the Pnyx area, selected Acropolis-area paths, parts of Anafiotika, and nearby Plaka routes can all work well depending on the season and light.",
      },
      {
        question: "What time of day is best?",
        answer: "Early morning is usually the calmest. Late afternoon can offer beautiful warmer light but may be busier. Exact timing depends on season and route.",
      },
      {
        question: "How long does an Acropolis-area session last?",
        answer: "Most sessions last 1.5 to 2 hours and cover two or three nearby viewpoints. Longer sessions can combine Acropolis-area views with Plaka or Anafiotika.",
      },
      {
        question: "What should I wear?",
        answer: "Neutral tones, soft fabrics, and comfortable shoes work well. Bring formal shoes separately if needed, but walk in something practical.",
      },
      {
        question: "Is the area crowded?",
        answer: "It can be, especially in peak season and during the middle of the day. I plan routes around quieter hours and flexible alternatives.",
      },
      {
        question: "Can we combine the Acropolis with Plaka?",
        answer: "Yes. Plaka, Anafiotika, and Acropolis-area viewpoints can work well together in a planned walking route.",
      },
      {
        question: "What happens if it is cloudy?",
        answer: "Cloudy weather can be excellent for portraits because it softens shadows and creates even skin tones. The route may be adjusted depending on visibility and mood.",
      },
      {
        question: "Do you provide transport?",
        answer: "Most Acropolis-area routes are planned on foot. If a session includes locations farther apart, transport can be discussed during planning.",
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
    ctaText: "If you want photographs around the Acropolis, send a note with your preferred date, purpose, number of people, and whether the images are personal or commercial. I can suggest a respectful route and timing.",
  },
  {
    slug: 'plaka-photoshoot',
    title: "Plaka Photoshoot Athens",
    metaTitle: "Plaka Photoshoot Athens | Routes, Timing & What to Wear",
    metaDescription: "Guide to planning a Plaka photoshoot in Athens — best timing, routes, light, outfits, crowds, Anafiotika, Acropolis views, and practical preparation.",
    h1: "Plaka Photoshoot Athens",
    introduction: "Plaka is one of the most atmospheric places in Athens for a photoshoot, but it works best when the route is planned carefully. Its narrow streets, stone steps, neoclassical facades, whitewashed corners, bougainvillea, cafés, and occasional Acropolis views can create a varied set of images within a short walk.\n\nA Plaka photoshoot can suit portraits, couples, branding images, personal sessions, and editorial-style work. The challenge is not finding beautiful corners; it is choosing the right time, avoiding the busiest streets, respecting the residential areas, and using the light well.\n\nThis guide explains how to plan a Plaka session so it feels calm, useful, and visually varied.",
    keyword: 'plaka photoshoot athens',
    sections: [
      {
        heading: "Why Plaka Works So Well for Photography",
        body: "Plaka gives a strong sense of Athens without needing a formal landmark in every frame. The neighbourhood sits below the Acropolis and offers a mix of old stone, painted doors, balconies, stairs, small churches, courtyards, and narrow passages.\n\nFor portraits, the enclosed streets can create intimacy. For couples, the walking rhythm allows natural movement. For branding images, Plaka can suggest culture, warmth, creativity, and a refined Athenian atmosphere. For editorial work, it offers texture and layers.\n\nThe variety is the advantage. In one route, the images can move from quiet and minimal to colourful and architectural, from tight portraits to wider environmental frames.",
      },
      {
        heading: "Plaka, Anafiotika, or Both?",
        body: "Plaka and Anafiotika are often mentioned together, but they do not feel exactly the same.\n\nPlaka has neoclassical streets, cafés, stone walls, churches, squares, and a busier old-town feeling. It gives more options for movement and slightly wider compositions.\n\nAnafiotika is smaller, quieter, and more residential. Its whitewashed walls and narrow stairs can feel almost island-like, but the area should be treated with care because people live there. It is better for a few respectful frames than for a loud or disruptive shoot.\n\nA good route can include both, but it should not rush through them. The best results come from choosing a few strong pockets and letting the light guide the pace.",
      },
      {
        heading: "Best Time of Day in Plaka",
        body: "Morning is often the most comfortable time for a Plaka photoshoot. The streets are quieter, the light can be soft, and the route feels easier before the neighbourhood fills with visitors.\n\nLate afternoon can also be beautiful, especially when warm light reaches the upper facades and filters into the narrow streets. It can be busier, so route planning becomes more important.\n\nMidday is more difficult, especially in summer. Some shaded lanes can still work, but open streets may create harsh contrast and discomfort. If midday is unavoidable, I plan around shade, interiors, or calmer side streets.",
      },
      {
        heading: "What Kind of Images Work Best?",
        body: "Plaka is strong for natural portraits, couples, personal travel sessions, lifestyle imagery, and softer branding photographs. It works especially well when the goal is atmosphere rather than a very polished corporate look.\n\nGood Plaka images often use layers: a doorway behind the subject, stairs leading through the frame, a wall catching reflected light, greenery softening stone, or a glimpse of the Acropolis in the distance.\n\nThe location can become busy visually, so styling and composition should stay intentional. The subject should not disappear into the background.",
      },
      {
        heading: "What to Wear for a Plaka Photoshoot",
        body: "Plaka’s colours are warm and textured, so clothing should either complement the setting or deliberately contrast with it.\n\nSoft whites, creams, beige, olive, muted blue, terracotta, rust, and pale yellow often work well. Natural fabrics such as linen, cotton, silk, wool, and textured knits usually photograph beautifully against stone and painted walls.\n\nAvoid very busy patterns unless they are part of a clear editorial idea. Comfortable shoes are important because the route may include stone streets, stairs, and uneven surfaces. You can bring a second pair for specific frames if needed.",
      },
      {
        heading: "Route Planning and Crowd Management",
        body: "The strongest Plaka sessions are not random walks. I plan routes around light, crowd patterns, background variety, and walking distance.\n\nSome of the most useful spots are not the obvious ones. A quiet side street, a wall with good reflected light, a staircase with clean lines, or a narrow corner with soft shade can produce stronger portraits than a crowded landmark.\n\nDuring busy seasons, flexibility matters. If one street is full, we move to a quieter parallel route. The goal is to keep the session relaxed and avoid spending the time waiting for backgrounds to clear.",
      },
      {
        heading: "Respecting the Neighbourhood",
        body: "Parts of Plaka and Anafiotika are residential. That matters. A photoshoot should not block doorways, sit on private steps, disturb residents, or treat someone’s home as a prop.\n\nRespectful planning often creates better photographs anyway. Quieter movement, smaller setups, and simple direction fit the atmosphere of the neighbourhood and keep the session more comfortable.",
      },
      {
        heading: "Combining Plaka with Nearby Locations",
        body: "Plaka combines well with Anafiotika, Acropolis-area viewpoints, the Roman Agora area, Monastiraki, or selected central streets, depending on timing and session length.\n\nA 1.5 to 2-hour session can usually cover one focused Plaka route with some variety. A longer session can include two nearby areas and possibly an outfit change.\n\nThe best combination depends on the mood you want: intimate streets, wider city views, more historic context, or a mix of old Athens and contemporary urban texture.",
      },
    ],
    faq: [
      {
        question: "Why is Plaka good for photoshoots?",
        answer: "Plaka offers strong visual variety in a compact area: stone streets, stairs, painted doors, neoclassical buildings, cafés, churches, greenery, and occasional Acropolis views.",
      },
      {
        question: "Is Plaka too crowded?",
        answer: "It can be busy, especially during peak season. Morning sessions and flexible side-street routes help keep the experience calmer.",
      },
      {
        question: "Can we include Anafiotika?",
        answer: "Yes, if the route and timing make sense. Anafiotika is small and residential, so it should be photographed respectfully and without disruption.",
      },
      {
        question: "What time of day is best?",
        answer: "Morning is usually calmest. Late afternoon can bring warmer light, but crowd levels may be higher. Midday is less ideal in summer.",
      },
      {
        question: "What should I wear?",
        answer: "Neutral, earthy, or softly coloured clothing works well with Plaka’s stone and warm tones. Comfortable shoes are important.",
      },
      {
        question: "Can we shoot at specific landmarks?",
        answer: "Yes, some landmarks can be included if they fit the route and conditions. However, the strongest images often come from quieter streets and smaller details.",
      },
      {
        question: "How long should a Plaka session be?",
        answer: "A focused session usually lasts 1.5 to 2 hours. Longer sessions can include nearby locations or outfit changes.",
      },
      {
        question: "Are there places to change outfits?",
        answer: "Options are limited on walking routes. Keep outfit changes simple, or plan a café/interior stop if necessary.",
      },
      {
        question: "Can Plaka work for branding photos?",
        answer: "Yes, especially for creative, cultural, personal, or lifestyle brands. For more corporate images, a studio or workspace may be better.",
      },
      {
        question: "What if the weather changes?",
        answer: "Light clouds can work beautifully. If rain or strong wind affects the session, we can adjust timing, use sheltered areas, or discuss rescheduling.",
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
    ctaText: "If you want a Plaka photoshoot, send a note with your preferred date, style, number of people, and whether you want Plaka only or a longer route with nearby locations.",
  },
  {
    slug: 'photographer-athens-prices',
    title: "Photographer Athens Prices",
    metaTitle: "Photographer Athens Prices | Portrait, Branding & Editorial Rates",
    metaDescription: "Guide to photographer prices in Athens — portrait sessions from €150, branding from €300, editorial quotes by brief, usage rights, add-ons, and what affects cost.",
    h1: "Photographer Athens Prices",
    introduction: "Photography pricing in Athens can vary widely because not every session asks for the same amount of planning, shooting time, editing, usage, travel, or delivery. A simple portrait session and a commercial brand shoot may both involve a camera, but they are not the same project.\n\nThis page gives starting points for portrait, branding, and editorial photography, along with a guide to what affects the final quote. My aim is to make pricing clear before a booking is confirmed, so you understand what is included and where costs may change.\n\nCurrent starting points: portrait sessions from €150, branding packages from €300, and editorial or commercial projects quoted by brief.",
    keyword: 'photographer athens prices',
    sections: [
      {
        heading: "Why Photography Prices Vary",
        body: "A photography quote is shaped by more than the time spent taking pictures. It can include planning, location research, creative direction, shooting time, travel, equipment, assistants, image selection, editing, retouching, gallery delivery, usage rights, and deadline needs.\n\nA short portrait session may be simple to plan and deliver. A branding project may require a shot list, several crops for web and social media, workspace preparation, multiple outfits, product or process details, and commercial usage. An editorial project may involve a creative brief, location scouting, team coordination, licensing, and publication deadlines.\n\nClear pricing starts with a clear brief.",
      },
      {
        heading: "Portrait Sessions — From €150",
        body: "Portrait sessions usually start from €150. A standard session often includes a pre-shoot conversation, 1.5 to 2 hours of photography, one indoor or Athens location setup, careful editing, and delivery through a private online gallery.\n\nPortrait sessions can be used for professional profiles, websites, LinkedIn, artist bios, press images, dating profiles, personal portraits, couples, families, or small groups.\n\nThe final price may change if the session involves multiple locations, more people, extended retouching, rush delivery, travel beyond central Athens, or additional edited images.\n\nHelpful guide:\n- Best for: individuals, professionals, artists, couples, simple personal sessions.\n- Usually includes: planning, shoot time, edited selection, private gallery.\n- May cost more when: there are several locations, groups, tight deadlines, or extra retouching needs.",
      },
      {
        heading: "Branding Packages — From €300",
        body: "Branding photography usually starts from €300 and is quoted around the actual scope. A branding session may include portraits, workspace images, process photographs, tools, products, details, and crops for websites, social media, press, or newsletters.\n\nBranding work takes more planning than a standard portrait session because the images need to function as a visual library. We consider your website layout, social media needs, brand colours, platforms, launch plans, and the different ways the images will be used.\n\nThe final quote depends on shoot duration, number of locations, image count, usage rights, crops, preparation time, and delivery needs.\n\nHelpful guide:\n- Best for: creative professionals, small businesses, makers, therapists, chefs, designers, artists, service providers.\n- Usually includes: planning call, shot list, portraits, process/details, edited gallery.\n- May cost more when: multiple locations, products, larger teams, extended usage, or staged delivery are needed.",
      },
      {
        heading: "Editorial and Commercial Projects — Quoted by Brief",
        body: "Editorial and commercial projects are quoted individually because usage and production needs can vary significantly.\n\nAn editorial assignment may be for a publication, artist feature, cultural project, brand story, or visual essay. A commercial project may involve broader advertising use, campaign assets, product or service promotion, team coordination, or extended licensing.\n\nThe quote may include pre-production, location research, shoot time, editing, retouching, file preparation, usage rights, assistants, equipment, travel, and delivery timeline.\n\nHelpful guide:\n- Best for: publications, brands, artists, cultural projects, campaigns, hospitality, restaurants, creative teams.\n- Usually requires: a brief, intended use, image count, deadline, and licensing details.\n- May cost more when: commercial usage, larger crews, multiple locations, short deadlines, or exclusivity are involved.",
      },
      {
        heading: "Usage Rights and Why They Matter",
        body: "Usage rights define where and how the images can be used. Personal use, website use, social media use, press use, editorial publication, print use, advertising, and long-term commercial campaigns are different categories.\n\nFor portraits, usage is often personal or professional profile use. For branding, usage may include website, social media, press, and marketing materials. For editorial or commercial projects, usage may depend on publication, territory, duration, exclusivity, and campaign scope.\n\nAgreeing usage in advance protects both sides and keeps the quote transparent.",
      },
      {
        heading: "Possible Add-Ons",
        body: "Possible add-ons include:\n\n<ul><li>Additional edited images</li><li>Extra retouching beyond standard editing</li><li>Rush delivery</li><li>Additional locations</li><li>Travel outside central Athens or outside Attica</li><li>Film photography and lab costs</li><li>Print preparation</li><li>Commercial licensing extensions</li><li>Assistant or additional production support</li><li>Location research or scouting</li><li>Staged delivery for launches or campaigns</li></ul>\n\nNot every project needs add-ons. They are only included when they support the brief.",
      },
      {
        heading: "How to Compare Photography Quotes",
        body: "When comparing photographers, do not look only at the starting price. Check what is included.\n\nAsk:\n- How long is the session?\n- How many final images are included?\n- Is planning included?\n- Are usage rights clear?\n- Is retouching included?\n- How are images delivered?\n- What is the turnaround time?\n- Are travel, permits, or studio costs included?\n- What happens if the weather changes?\n\nA cheaper quote may be fine for a simple need. But for branding, editorial, or commercial work, unclear usage or limited planning can create problems later.",
      },
      {
        heading: "How Quotes Are Prepared",
        body: "To prepare an accurate quote, I usually need:\n\n<ul><li>The type of session</li><li>Preferred date or deadline</li><li>Location or route idea</li><li>Number of people</li><li>Intended image use</li><li>Desired image count, if known</li><li>Whether you need web, print, press, or social crops</li><li>Any rush delivery needs</li><li>Any examples of images you like</li></ul>\n\nAfter reviewing the details, I can suggest the most suitable session format and provide a written proposal with scope, timeline, deliverables, usage, and price.",
      },
    ],
    faq: [
      {
        question: "What is included in the portrait session price?",
        answer: "Portrait sessions from €150 usually include planning, a 1.5 to 2-hour session, editing, and private gallery delivery. The exact image count and details are confirmed before booking.",
      },
      {
        question: "What is included in a branding package?",
        answer: "Branding packages from €300 usually include a planning call, shot list, portraits, workspace or process images, editing, and gallery delivery. The scope depends on your business needs.",
      },
      {
        question: "Why are editorial and commercial projects quoted separately?",
        answer: "Because usage, production, crew, locations, deadlines, and licensing can vary widely. A custom quote keeps the scope clear.",
      },
      {
        question: "Do prices include usage rights?",
        answer: "Usage rights are included according to the agreed scope. Personal portraits, branding, editorial, and commercial use have different requirements, so they are confirmed in the proposal.",
      },
      {
        question: "Can I buy additional edited images?",
        answer: "Yes, when a proof gallery or additional selections are part of the package. Pricing is confirmed before final delivery.",
      },
      {
        question: "Do you charge for travel?",
        answer: "Travel within central Athens may be included depending on the session. Locations outside central Athens, outside Attica, or outside Greece may require additional travel costs.",
      },
      {
        question: "Do you require a deposit?",
        answer: "Deposit and payment terms are confirmed in the proposal before the booking is final.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "Payment method and invoicing details are confirmed before booking.",
      },
      {
        question: "Do you offer discounts for artists or cultural projects?",
        answer: "For emerging artists, students, cultural projects, or non-profit work with limited budgets, mention this in the inquiry and we can discuss a realistic scope.",
      },
      {
        question: "How do I get an accurate quote?",
        answer: "Send the project type, date, location, number of people, intended image use, deadline, and any visual references. The more specific the brief, the clearer the quote.",
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
    ctaText: "If you would like a detailed quote, send a short description of your project, where the images will be used, and your preferred timing.",
  },
];

export const getLandingPage = (slug: string): LandingPage | undefined =>
  landingPages.find((page) => page.slug === slug);

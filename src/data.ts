import { ServiceItem, DesignTemplate } from './types';

export const PERSONAL_INFO = {
  name: 'Harikrishna K',
  brandName: 'CMAC Designs',
  phone: '7510859522',
  email: 'camcgraphics.in@gmail.com',
  address: 'Kerala, India',
  whatsappUrl: 'https://wa.me/917510859522',
  tagline: 'We turn abstract concepts into pixel-perfect visual masterpieces.',
  about: 'I am Harikrishna K, a passionate lead graphic designer and the founder of CMAC Designs. With years of experience in visual art, branding, digital cards, and high-impact layouts, my team and I craft stunning visuals tailored to each client\'s unique personality and goals. Combining classic design fundamentals with cutting-edge digital styling, we deliver premium results for print, web, and social media.',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Web Designing',
    description: 'Bespoke UI/UX layouts, wireframes, and responsive website designs that look stunning on any screen, blending aesthetics with user-centric functionality.',
    features: ['Custom Figma Layouts', 'Landing Page Designs', 'Responsive UI/UX Prototypes', 'Modern Web Animations'],
    iconName: 'Globe',
    badge: 'Popular',
    bgGradient: 'from-cyan-500/10 to-blue-500/5',
  },
  {
    id: 'poster-design',
    title: 'Poster Designing',
    description: 'High-impact, visually striking posters designed to capture attention instantly, perfect for events, product launches, corporate campaigns, or artistic statements.',
    features: ['High-Res Print Ready PDFs', 'Event & Corporate Formats', 'Custom Illustrations', 'Bespoke Color Schemes'],
    iconName: 'Image',
    bgGradient: 'from-magenta-500/10 to-purple-500/5',
  },
  {
    id: 'social-media',
    title: 'Social Media Post Designing',
    description: 'Scroll-stopping, on-brand graphics tailored for Instagram, Facebook, LinkedIn, and more, engineered to boost engagement and convey message clarity.',
    features: ['Perfect Ratio Templates', 'Branded Graphic Assets', 'Carousels & Ad Creatives', 'Highlight Cover Curations'],
    iconName: 'Share2',
    badge: 'High Demand',
    bgGradient: 'from-yellow-500/10 to-orange-500/5',
  },
  {
    id: 'wedding-card',
    title: 'Wedding Card Designing',
    description: 'Timeless, elegant printed wedding invitations crafted with premium typography, traditional motifs, and customized thematic illustrations.',
    features: ['Traditional & Royal Motifs', 'Premium Typography Layouts', 'Die-cut & Foil Press Ready', 'Custom Couple Monograms'],
    iconName: 'Heart',
    bgGradient: 'from-pink-500/10 to-rose-500/5',
  },
  {
    id: 'digital-wedding',
    title: 'Digital Wedding Cards',
    description: 'Eco-friendly, modern digital invitations with stunning layouts, interactive animations, and optimized for instant sharing via WhatsApp and social media.',
    features: ['Interactive PDF Structures', 'Beautiful Slide Animations', 'Music Integration Layouts', 'One-Tap RSVP Linking'],
    iconName: 'Smartphone',
    badge: 'Trending',
    bgGradient: 'from-emerald-500/10 to-cyan-500/5',
  },
  {
    id: 'invitation-card',
    title: 'Invitation Cards',
    description: 'Elegant invitation cards for all milestone events including birthdays, anniversaries, housewarmings, corporate galas, and religious ceremonies.',
    features: ['Multi-page Invitation Suites', 'Thematic Custom Concepts', 'Digital & Print Formats', 'Custom Greeting Wording'],
    iconName: 'Mail',
    bgGradient: 'from-purple-500/10 to-indigo-500/5',
  },
  {
    id: 'album-design',
    title: 'Album Designing',
    description: 'Masterfully layouted photo albums, wedding books, and portfolios that narrate your stories through spacious grids, crisp typography, and visual balance.',
    features: ['Full-bleed Cinematic Spreads', 'Wedding & Event Storytelling', 'High-Detail Print Layouts', 'Color-matched Backgrounds'],
    iconName: 'BookOpen',
    bgGradient: 'from-blue-500/10 to-indigo-500/5',
  },
  {
    id: 'visiting-card',
    title: 'Visiting Cards / Business Cards',
    description: 'Ultra-professional business cards designed to command respect, featuring premium typography and layouts optimized for spot UV, foil, or matte finishes.',
    features: ['Single or Double Sided', 'Spot UV & Gold Foil Ready', 'Modern QR Code Embeds', 'Custom Structural Layouts'],
    iconName: 'CreditCard',
    bgGradient: 'from-teal-500/10 to-emerald-500/5',
  },
  {
    id: 'all-graphic-works',
    title: 'All Graphic Designing Works',
    description: 'Comprehensive graphic design services for any visual medium. From logo development and brand books to packaging design and vectors, we handle it all.',
    features: ['Logo & Branding Suite', 'Brochures & Flyers', 'Vector Tracing & Restoration', 'Custom Merchandise Design'],
    iconName: 'Layers',
    badge: 'All-in-One',
    bgGradient: 'from-gradient-cmyk/10 to-slate-500/5',
  },
];

export const DESIGN_TEMPLATES: DesignTemplate[] = [
  {
    id: 'tech-poster',
    name: 'Tech Future Poster',
    category: 'Poster Designing',
    description: 'A cutting-edge cyberpunk style poster with bold futuristic fonts and bright neon highlights.',
    primaryColor: '#00f0ff', // Cyan
    secondaryColor: '#ff007f', // Magenta
    accentColor: '#070a12', // Rich Black
    layoutType: 'poster',
  },
  {
    id: 'gold-visiting-card',
    name: 'Luxurious Gold Card',
    category: 'Visiting Card',
    description: 'A premium, minimalist design with rich gold typography set against a deep obsidian texture.',
    primaryColor: '#ffdf00', // Yellow/Gold
    secondaryColor: '#1e293b', // Slate
    accentColor: '#070a12', // Rich Black
    layoutType: 'business_card',
  },
  {
    id: 'insta-promo',
    name: 'Vibrant Instagram Post',
    category: 'Social Media Designing',
    description: 'A high-contrast grid post layout perfect for grabbing attention on mobile newsfeeds.',
    primaryColor: '#ff007f', // Magenta
    secondaryColor: '#00f0ff', // Cyan
    accentColor: '#ffffff', // White
    layoutType: 'social_media',
  },
  {
    id: 'royal-wedding',
    name: 'Royal Floral Invitation',
    category: 'Digital Wedding Card',
    description: 'A gorgeous, classical invitation frame styled with elegant floral vectors and gold leaf details.',
    primaryColor: '#ffdf00', // Gold
    secondaryColor: '#ff007f', // Rose
    accentColor: '#0f1423', // Dark Navy
    layoutType: 'wedding_card',
  },
];

export const CLIENT_REVIEWS = [
  {
    name: 'Rahul Nair',
    role: 'Event Organizer',
    comment: 'Harikrishna is an absolute wizard! He designed a wedding card and digital video invite for my sister\'s marriage that guests are still talking about. Outstanding attention to detail!',
    rating: 5,
  },
  {
    name: 'Anjali Sharma',
    role: 'Brand Manager',
    comment: 'The social media templates and visiting cards designed by CMAC Designs have completely elevated our visual game. Super professional, responsive, and creative.',
    rating: 5,
  },
  {
    name: 'Mathew Thomas',
    role: 'Co-founder, NeoTech',
    comment: 'Highly modern and responsive web layouts. Harikrishna delivered clean UI designs that were ready to build, complete with custom vectors. Highly recommended!',
    rating: 5,
  },
];

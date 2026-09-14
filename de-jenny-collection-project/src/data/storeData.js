export const STORE_INFO = {
  name: 'DE JENNY COLLECTION',
  tagline: "Quality Women's Wear",
  location: 'Lagos, Nigeria',
  instagram: '@djenny_collection_in_lagos',
  instagramUrl: 'https://instagram.com/djenny_collection_in_lagos',
  whatsAppNumber: '2349114351380',
  whatsAppDisplay: '+234 911 435 1380',
  announcementText: "QUALITY WOMEN'S WEAR • DELIVERY AVAILABLE NATIONWIDE"
};

export const PRODUCTS_DATA = [
  {
    id: 'djc-01',
    name: 'Amina Pleated Halter Maxi Dress',
    category: 'DRESSES',
    price: 68000,
    badge: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80',
    description: 'Breathtaking draped halter silhouette with sunburst micro-pleating. Tailored for galas and Lagos evening glamour.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Emerald Silk', 'Warm Champagne', 'Midnight Black']
  },
  {
    id: 'djc-02',
    name: 'Victoria Silk Satin Two-Piece Co-ord',
    category: 'TWO-PIECE SETS',
    price: 75000,
    badge: 'HOT PIECE',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
    description: 'Lustrous champagne silk blend featuring an relaxed button-down blouse paired with fluid wide-leg trousers.',
    sizes: ['S', 'M', 'L'],
    colors: ['Champagne Gold', 'Terracotta Rose']
  },
  {
    id: 'djc-03',
    name: 'Tiwa Sculpted Linen Midi Dress',
    category: 'DRESSES',
    price: 54000,
    badge: 'NEW ARRIVAL',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    description: 'Tailored architectural waist with contrast tortoise shell buttons and a breathable organic linen weave.',
    sizes: ['M', 'L', 'XL'],
    colors: ['Alabaster White', 'Soft Sand']
  },
  {
    id: 'djc-04',
    name: 'Zahra Tailored Denim Utility Jumpsuit',
    category: 'DENIM & CASUAL',
    price: 62000,
    badge: 'TRENDING',
    image: 'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=900&q=80',
    description: 'Structured premium medium-wash denim with topstitch detailing and cinched belt.',
    sizes: ['S', 'M', 'L'],
    colors: ['Raw Indigo', 'Stonewash Azure']
  },
  {
    id: 'djc-05',
    name: 'Kemi Cutout Back Resort Dress',
    category: 'NEW ARRIVALS',
    price: 58000,
    badge: 'LIMITED',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
    description: 'Earthy terracotta cotton-crepe with open tie-back detailing and a tiered romantic hem.',
    sizes: ['S', 'M', 'L'],
    colors: ['Terracotta', 'Olive Leaf']
  },
  {
    id: 'djc-06',
    name: 'Lagosian Contrast Stitch Two-Piece',
    category: 'TWO-PIECE SETS',
    price: 72000,
    badge: 'CLIENT FAVORITE',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=80',
    description: 'Minimalist statement crop vest and tailored straight trouser set finished with contrast micro-piping.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Deep Obsidian', 'Cream Ivory']
  },
  {
    id: 'djc-07',
    name: 'Sade High-Waisted Wide Leg Denim',
    category: 'DENIM & CASUAL',
    price: 46000,
    badge: 'ESSENTIAL',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
    description: 'Flattering high-rise silhouette designed to elongate legs with clean lines and soft stretch comfort.',
    sizes: ['28', '30', '32', '34'],
    colors: ['Deep Navy', 'Bleached Sky']
  },
  {
    id: 'djc-08',
    name: 'Eniola Shimmer Corset Cocktail Dress',
    category: 'DRESSES',
    price: 85000,
    badge: 'EXCLUSIVE',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80',
    description: 'Built-in boned corset with champagne sparkle mesh overlay and an asymmetrical slit.',
    sizes: ['S', 'M', 'L'],
    colors: ['Rose Gold Shimmer', 'Gilded Bronze']
  }
];

export const FEATURED_COLLECTIONS = [
  { id: 'dresses', name: 'DRESSES', subtitle: 'Elegant looks for every occasion', categoryKey: 'DRESSES', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80', badge: 'Collection' },
  { id: 'two-piece', name: 'TWO-PIECE SETS', subtitle: 'Effortless coordinated style', categoryKey: 'TWO-PIECE SETS', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80', badge: 'Collection' },
  { id: 'denim-casual', name: 'DENIM & CASUAL', subtitle: 'Everyday pieces with attitude', categoryKey: 'DENIM & CASUAL', image: 'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=700&q=80', badge: 'Collection' },
  { id: 'new-arrivals', name: 'NEW ARRIVALS', subtitle: 'Fresh styles, just in', categoryKey: 'NEW ARRIVALS', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=80', badge: 'Fresh Drop' }
];

export const INSTAGRAM_POSTS = [
  { id: 1, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80', likes: '1,240', caption: 'Sunday best in Lagos. Wearing the Amina Pleated Maxi ✨' },
  { id: 2, image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80', likes: '890', caption: 'Effortless co-ords for the modern woman who commands the room.' },
  { id: 3, image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80', likes: '1,530', caption: 'New deliveries hitting our rack today. WhatsApp to reserve yours!' },
  { id: 4, image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80', likes: '2,100', caption: "Luxury isn't loud; it's the fit, fabric, and grace." },
  { id: 5, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80', likes: '940', caption: 'Denim styling done the sophisticated way.' },
  { id: 6, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80', likes: '1,860', caption: 'Confidence is your best accessory. Made for Lagos.' }
];

export const DEMO_TESTIMONIALS = [
  { id: 1, quote: "Loved my outfit! The fabric drape was identical to the photos on their page. Arrived in Lekki within 24 hours.", author: "Folashade A.", location: "Lekki, Lagos", item: "Amina Pleated Maxi Dress", rating: 5 },
  { id: 2, quote: "The two-piece set fit like it was custom tailored. Ordering through WhatsApp was swift and so polite!", author: "Chioma N.", location: "Abuja, FCT", item: "Victoria Silk Two-Piece Set", rating: 5 },
  { id: 3, quote: "De Jenny Collection exceeded every expectation. True luxury quality.", author: "Zainab B.", location: "Ikeja GRA, Lagos", item: "Zahra Denim Jumpsuit", rating: 5 }
];
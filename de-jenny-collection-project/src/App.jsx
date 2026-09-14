import React, { useState, useMemo } from 'react';
import {
  ShoppingBag,
  Heart,
  Search,
  Menu,
  X,
  MessageCircle,
  Truck,
  ShieldCheck,
  Sparkles,
  Star,
  ArrowRight,
  Eye,
  Instagram,
  Plus,
  Minus,
  Trash2,
  ChevronRight,
  PhoneCall,
  MapPin
} from 'lucide-react';

const STORE_INFO = {
  name: 'DE JENNY COLLECTION',
  tagline: "Quality Women's Wear",
  location: 'Lagos, Nigeria',
  instagram: '@djenny__collection_in_lagos',
  instagramUrl: 'https://instagram.com/djenny__collection_in_lagos',
  whatsAppNumber: '2349114351380',
  whatsAppDisplay: '+234 911 435 1380',
  announcementText: "QUALITY WOMEN'S WEAR • DELIVERY AVAILABLE NATIONWIDE"
};

const PRODUCTS_DATA = [
  {
    id: 'djc-01',
    name: 'Waist-Cinched Long Shirt Dress',
    category: 'DRESSES',
    price: 68000,
    badge: 'BESTSELLER',
    image: '/images/products/black-shirt-dress.jpg',
    description: 'Breathtaking draped halter silhouette with sunburst micro-pleating and fluid movement. Tailored for galas, wedding guest luxury, and Lagos evening glamour.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Emerald Silk', 'Warm Champagne', 'Midnight Black']
  },
  {
    id: 'djc-02',
    name: 'Olive 3-in-1 Shirt & Bra Top Set',
    category: 'TWO-PIECE SETS',
    price: 75000,
    badge: 'HOT PIECE',
    image: '/images/products/olive-3in1-set.jpg',
    description: 'Lustrous champagne silk blend featuring an relaxed button-down blouse paired with fluid high-waist wide-leg trousers.',
    sizes: ['S', 'M', 'L'],
    colors: ['Champagne Gold', 'Terracotta Rose']
  },
  {
    id: 'djc-03',
    name: 'Floral Tiered Ruffle Maxi Dress',
    category: 'DRESSES',
    price: 54000,
    badge: 'NEW ARRIVAL',
    image: '/images/products/floral-tiered-dress.jpg',
    description: 'Tailored architectural waist with contrast tortoise shell buttons and a breathable organic linen weave designed for elevated day wear.',
    sizes: ['M', 'L', 'XL'],
    colors: ['Alabaster White', 'Soft Sand']
  },
  {
    id: 'djc-04',
    name: 'Orange Floral Cutout Wide-Leg Jumpsuit',
    category: 'DENIM & CASUAL',
    price: 62000,
    badge: 'TRENDING',
    image: '/images/products/orange-floral-jumpsuit.jpg',
    description: 'Structured premium medium-wash denim with topstitch detailing, a cinched belt, and gold hardware for confident everyday edge.',
    sizes: ['S', 'M', 'L'],
    colors: ['Raw Indigo', 'Stonewash Azure']
  },
  {
    id: 'djc-05',
    name: 'Leopard Print High-Low Maxi Dress',
    category: 'NEW ARRIVALS',
    price: 58000,
    badge: 'LIMITED',
    image: '/images/products/leopard-maxi-dress.jpg',
    description: 'Earthy terracotta cotton-crepe with open tie-back detailing and a tiered romantic hem. Perfect for Sunday brunch and island getaways.',
    sizes: ['S', 'M', 'L'],
    colors: ['Terracotta', 'Olive Leaf']
  },
  {
    id: 'djc-06',
    name: 'Rhinestone Bandage Maxi Dress',
    category: 'TWO-PIECE SETS',
    price: 72000,
    badge: 'CLIENT FAVORITE',
    image: '/images/products/rhinestone-bandage-dress.jpg',
    description: 'Minimalist statement crop vest and tailored straight trouser set finished with exquisite contrast micro-piping and tortoiseshell buckles.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Deep Obsidian', 'Cream Ivory']
  },
  {
    id: 'djc-07',
    name: 'Red Satin High-Slit Maxi Dress',
    category: 'DENIM & CASUAL',
    price: 46000,
    badge: 'ESSENTIAL',
    image: '/images/products/red-maxi-dress.jpg',
    description: 'Flattering high-rise silhouette designed to elongate legs with clean lines, soft stretch denim comfort, and zero fading.',
    sizes: ['28', '30', '32', '34'],
    colors: ['Deep Navy', 'Bleached Sky']
  },
  {
    id: 'djc-08',
    name: 'Velvet Off-Shoulder Ruched Gown',
    category: 'DRESSES',
    price: 85000,
    badge: 'EXCLUSIVE',
    image: '/images/products/velvet-gown.jpg',
    description: 'Built-in boned corset with subtle champagne sparkle mesh overlay and an asymmetrical slit designed to turn heads across Victoria Island.',
    sizes: ['S', 'M', 'L'],
    colors: ['Rose Gold Shimmer', 'Gilded Bronze']
  }
];

const FEATURED_COLLECTIONS = [
  {
    id: 'dresses',
    name: 'DRESSES',
    subtitle: 'Elegant looks for every occasion',
    categoryKey: 'DRESSES',
    image: 'https://images.unsplash.com/photo-1618298363265-4b9039837f54?auto=format&fit=crop&w=700&q=80',
    badge: 'Collection'
  },
  {
    id: 'two-piece',
    name: 'TWO-PIECE SETS',
    subtitle: 'Effortless coordinated style',
    categoryKey: 'TWO-PIECE SETS',
    image: 'https://images.unsplash.com/photo-1619086303291-0ef7699e4b31?auto=format&fit=crop&w=700&q=80',
    badge: 'Collection'
  },
  {
    id: 'denim-casual',
    name: 'DENIM & CASUAL',
    subtitle: 'Everyday pieces with attitude',
    categoryKey: 'DENIM & CASUAL',
    image: 'https://images.unsplash.com/photo-1583167462579-5df2ca99e1b8?auto=format&fit=crop&w=700&q=80',
    badge: 'Collection'
  },
  {
    id: 'new-arrivals',
    name: 'NEW ARRIVALS',
    subtitle: 'Fresh styles, just in',
    categoryKey: 'NEW ARRIVALS',
    image: 'https://images.unsplash.com/photo-1620516996162-8466fc26f100?auto=format&fit=crop&w=700&q=80',
    badge: 'Fresh Drop'
  }
];

const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1583167463546-12676e914c0a?auto=format&fit=crop&w=600&q=80',
    likes: '1,240',
    caption: 'Sunday best in Lagos. Wearing the Amina Pleated Maxi ✨'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1619064609438-e06b80118b17?auto=format&fit=crop&w=600&q=80',
    likes: '890',
    caption: 'Effortless co-ords for the modern woman who commands the room.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1518632547633-53033b96f605?auto=format&fit=crop&w=600&q=80',
    likes: '1,530',
    caption: 'New deliveries hitting our rack today. WhatsApp to reserve yours first!'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?auto=format&fit=crop&w=600&q=80',
    likes: '2,100',
    caption: "Luxury isn't loud; it's the fit, fabric, and grace. De Jenny Collection."
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1583167462579-5df2ca99e1b8?auto=format&fit=crop&w=600&q=80',
    likes: '940',
    caption: 'Denim styling done the sophisticated way. Pair with gold hoops.'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1548918901-9b31223c5c3a?auto=format&fit=crop&w=600&q=80',
    likes: '1,860',
    caption: 'Confidence is your best accessory. Made for Lagos and beyond.'
  }
];

const DEMO_TESTIMONIALS = [
  {
    id: 1,
    quote: "Absolutely loved my outfit! The fabric drape was identical to the photos on their page. Arrived in Lekki Phase 1 within 24 hours.",
    author: "Folashade A.",
    location: "Lekki, Lagos",
    item: "Waist-Cinched Long Shirt Dress",
    rating: 5
  },
  {
    id: 2,
    quote: "The two-piece set fit like it was custom tailored to my exact measurements. Ordering through WhatsApp was swift and so polite!",
    author: "Chioma N.",
    location: "Abuja, FCT",
    item: "Olive 3-in-1 Shirt & Bra Top Set",
    rating: 5
  },
  {
    id: 3,
    quote: "I was skeptical buying clothing via Instagram at first, but De Jenny Collection exceeded every expectation. True luxury quality.",
    author: "Zainab B.",
    location: "Ikeja GRA, Lagos",
    item: "Red Satin High-Slit Maxi Dress",
    rating: 5
  }
];

function formatNaira(amount) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0
  }).format(amount).replace('NGN', '₦');
}

function getWhatsAppOrderLink(product, selectedSize) {
  const sizeText = selectedSize ? ` (Size: ${selectedSize})` : '';
  const message = `Hello De Jenny Collection!\nI am visiting your website demo and I would love to order:\n\n*${product.name}*${sizeText}\nPrice: ${formatNaira(product.price)}\n\nPlease confirm availability and delivery to my location in Nigeria. Thank you!`;
  return `https://wa.me/${STORE_INFO.whatsAppNumber}?text=${encodeURIComponent(message)}`;
}

function getCartWhatsAppCheckoutLink(cartItems, total) {
  if (cartItems.length === 0) {
    return `https://wa.me/${STORE_INFO.whatsAppNumber}?text=${encodeURIComponent("Hello De Jenny Collection! I would like to inquire about your latest collection.")}`;
  }

  const itemsList = cartItems
    .map((item, index) => `${index + 1}. *${item.name}* (Size: ${item.selectedSize}) x${item.quantity} - ${formatNaira(item.price * item.quantity)}`)
    .join('\n');

  const message = `Hello De Jenny Collection!\nI would like to place an order from your website:\n\n${itemsList}\n\n*Estimated Total: ${formatNaira(total)}*\n\nPlease confirm stock availability and send payment / delivery details.`;
  return `https://wa.me/${STORE_INFO.whatsAppNumber}?text=${encodeURIComponent(message)}`;
}

function Toast({ message, isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-stone-900 text-stone-100 px-5 py-3.5 shadow-2xl border-l-2 border-amber-500 text-sm font-sans tracking-wide">
      <Sparkles className="w-4 h-4 text-amber-400" />
      <span>{message}</span>
      <button onClick={onClose} aria-label="Close notification" className="ml-3 text-stone-400 hover:text-white">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

function AnnouncementBar() {
  return (
    <div className="bg-stone-900 text-[#F5EFE6] px-4 py-2 text-center text-[11px] sm:text-xs tracking-[0.22em] uppercase font-medium flex items-center justify-center gap-3">
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400"></span>
      <span>{STORE_INFO.announcementText}</span>
      <span className="hidden md:inline text-stone-400">|</span>
      <span className="hidden md:inline text-amber-300 font-normal tracking-wider">LAGOS, NIGERIA</span>
    </div>
  );
}

function Navbar({ onOpenMobileMenu, onOpenSearch, onOpenCart, cartCount, onNavigate }) {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EBE5DA] transition-all">
      <AnnouncementBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center lg:hidden">
            <button
              onClick={onOpenMobileMenu}
              aria-label="Open Navigation Menu"
              className="p-2 text-stone-800 hover:text-stone-950 focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 lg:flex-none text-center lg:text-left">
            <button onClick={() => onNavigate('hero')} className="inline-block text-left group">
              <span className="block font-serif text-xl sm:text-2xl tracking-[0.2em] font-semibold text-stone-900 group-hover:text-amber-900 transition-colors uppercase">
                {STORE_INFO.name}
              </span>
              <span className="block text-[9px] tracking-[0.32em] text-stone-500 uppercase font-sans -mt-0.5">
                Lagos • Nigeria
              </span>
            </button>
          </div>

          <nav className="hidden lg:flex items-center space-x-8 text-xs font-medium tracking-[0.18em] uppercase text-stone-700">
            <button onClick={() => onNavigate('hero')} className="hover:text-amber-800 transition-colors py-1">Home</button>
            <button onClick={() => onNavigate('shop', 'ALL')} className="hover:text-amber-800 transition-colors py-1">Shop</button>
            <button onClick={() => onNavigate('shop', 'NEW ARRIVALS')} className="hover:text-amber-800 transition-colors py-1">New Arrivals</button>
            <button onClick={() => onNavigate('collections')} className="hover:text-amber-800 transition-colors py-1">Collections</button>
            <button onClick={() => onNavigate('about')} className="hover:text-amber-800 transition-colors py-1">About</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-amber-800 transition-colors py-1">Contact</button>
          </nav>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={onOpenSearch}
              aria-label="Search catalog"
              className="p-2 text-stone-700 hover:text-stone-950 transition-colors"
              title="Search collection"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenCart}
              aria-label="Open Shopping Bag"
              className="relative p-2 text-stone-700 hover:text-stone-950 transition-colors"
              title="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-stone-900 text-stone-100 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            <a
              href={`https://wa.me/${STORE_INFO.whatsAppNumber}?text=${encodeURIComponent("Hello De Jenny Collection, I'm browsing your online store and would like to place an order.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#1EBE5D] text-xs font-semibold tracking-wider uppercase px-4 py-2.5 transition-all shadow-sm active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Order</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileDrawer({ isOpen, onClose, onNavigate }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex lg:hidden">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-4/5 max-w-sm bg-[#FAF7F2] h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#E8E1D5]">
            <div>
              <h2 className="font-serif text-lg tracking-[0.16em] uppercase font-semibold">DE JENNY</h2>
              <p className="text-[10px] tracking-[0.2em] text-stone-500 uppercase">Lagos, Nigeria</p>
            </div>
            <button onClick={onClose} aria-label="Close navigation" className="p-2 text-stone-600 hover:text-stone-900">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-8 flex flex-col space-y-5 text-sm tracking-[0.18em] uppercase font-medium text-stone-800">
            <button onClick={() => onNavigate('hero')} className="text-left py-2 border-b border-[#F0EAE1] hover:text-amber-800">Home</button>
            <button onClick={() => onNavigate('shop', 'ALL')} className="text-left py-2 border-b border-[#F0EAE1] hover:text-amber-800">Shop Collection</button>
            <button onClick={() => onNavigate('shop', 'NEW ARRIVALS')} className="text-left py-2 border-b border-[#F0EAE1] hover:text-amber-800 flex items-center justify-between">
              <span>New Arrivals</span>
              <span className="text-[9px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full">Fresh</span>
            </button>
            <button onClick={() => onNavigate('collections')} className="text-left py-2 border-b border-[#F0EAE1] hover:text-amber-800">Featured Collections</button>
            <button onClick={() => onNavigate('about')} className="text-left py-2 border-b border-[#F0EAE1] hover:text-amber-800">About Us</button>
            <button onClick={() => onNavigate('reviews')} className="text-left py-2 border-b border-[#F0EAE1] hover:text-amber-800">Client Reviews</button>
            <button onClick={() => onNavigate('contact')} className="text-left py-2 border-b border-[#F0EAE1] hover:text-amber-800">Contact</button>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E8E1D5] space-y-4">
          <a
            href={`https://wa.me/${STORE_INFO.whatsAppNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 text-xs font-semibold tracking-wider uppercase shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Order on WhatsApp</span>
          </a>
          <div className="text-center text-[11px] text-stone-500">
            Instagram: <span className="font-semibold text-stone-800">{STORE_INFO.instagram}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection({ onShopClick }) {
  return (
    <section id="hero" className="relative bg-[#F4EFE6] border-b border-[#EBE3D7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px] items-center gap-10 py-12 lg:py-16">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 z-10 text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2">
              <span className="w-6 h-[1px] bg-stone-500"></span>
              <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-stone-600 font-medium">
                DE JENNY COLLECTION • LAGOS
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-light tracking-tight text-stone-950 leading-[1.08]">
              STYLE THAT <br />
              <span className="italic font-normal">SPEAKS</span> FOR YOU
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-stone-600 text-base sm:text-lg font-normal leading-relaxed">
              Discover carefully selected women's fashion designed to make every moment feel special. Tailored silhouettes, luxury fabrics, and effortless elegance made for the modern woman.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onShopClick}
                className="w-full sm:w-auto px-9 py-4 bg-stone-950 text-[#FAF7F2] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-stone-800 transition-all shadow-md active:scale-95"
              >
                SHOP COLLECTION
              </button>

              <a
                href={`https://wa.me/${STORE_INFO.whatsAppNumber}?text=${encodeURIComponent("Hello De Jenny Collection! I would like to explore your latest collection and order.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 border border-stone-800 text-stone-900 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>ORDER ON WHATSAPP</span>
              </a>
            </div>

            <div className="pt-6 border-t border-[#E8E1D5] flex items-center justify-center lg:justify-start gap-8 text-[11px] uppercase tracking-wider text-stone-500">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-stone-800" />
                <span>Nationwide Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-stone-800" />
                <span>Quality Assured</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <MapPin className="w-4 h-4 text-stone-800" />
                <span>Lagos Showroom</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] bg-stone-300 shadow-2xl overflow-hidden group border border-[#E8E1D5]">
              <img
                src="https://images.unsplash.com/photo-1595882669314-919b3d51f2c7?auto=format&fit=crop&w=1000&q=85"
                alt="De Jenny Collection Editorial Feature"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-[#FAF7F2]/95 backdrop-blur-md p-4 border border-stone-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] tracking-[0.25em] text-stone-500 uppercase">Featured Silhouette</p>
                    {/* <h3 className="font-serif text-base font-medium text-stone-900">Amina Pleated Halter</h3> */}
                    <h3 className="font-serif text-base font-medium text-stone-900">Fitted Lace-Trim Capri Set</h3>
                  </div>
                  <span className="font-sans text-xs font-semibold tracking-wider text-stone-900">
                    ₦68,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickViewModal({ product, onClose, selectedSize, onSelectSize, onAddToCart }) {
  if (!product) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-3xl bg-[#FAF7F2] shadow-2xl overflow-hidden border border-stone-300 z-10 max-h-[90vh] flex flex-col md:flex-row">
        <button
          onClick={onClose}
          aria-label="Close product view"
          className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-stone-800 hover:text-black shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="md:w-1/2 aspect-[3/4] md:aspect-auto bg-stone-200">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center" />
        </div>

        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-stone-500 font-medium block">
                {product.category}
              </span>
              <h3 className="font-serif text-2xl text-stone-950 font-normal mt-1">{product.name}</h3>
              <p className="text-lg font-semibold text-stone-900 mt-2">{formatNaira(product.price)}</p>
            </div>

            <div className="w-full h-[1px] bg-stone-200"></div>
            <p className="text-xs text-stone-600 leading-relaxed">{product.description}</p>

            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-800 block mb-2">Select Size</label>
              <div className="flex items-center gap-2">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => onSelectSize(sz)}
                    className={`w-10 h-10 text-xs font-semibold flex items-center justify-center border transition-all ${
                      selectedSize === sz
                        ? 'bg-stone-950 text-white border-stone-950'
                        : 'bg-white text-stone-700 border-stone-300 hover:border-stone-500'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {product.colors && (
              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-800 block mb-1.5">Colorways</label>
                <div className="flex flex-wrap gap-1.5">
                  {product.colors.map((color) => (
                    <span key={color} className="text-[10px] bg-[#EFE9DF] text-stone-700 px-2.5 py-1 uppercase tracking-wide">
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="pt-6 space-y-3 mt-4 border-t border-stone-200">
            <button
              onClick={() => onAddToCart(product, selectedSize)}
              className="w-full py-3.5 bg-stone-950 text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>ADD TO BAG</span>
            </button>
            <a
              href={getWhatsAppOrderLink(product, selectedSize)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[#25D366] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#1EBE5D] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>ORDER DIRECT ON WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartDrawer({ isOpen, onClose, cart, cartTotal, onUpdateQuantity, onStartShopping }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-md bg-[#FAF7F2] h-full shadow-2xl flex flex-col justify-between overflow-hidden z-10">
        <div className="p-6 border-b border-[#E8E1D5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-stone-900" />
            <h3 className="font-serif text-lg tracking-wider uppercase font-medium">YOUR SHOPPING BAG</h3>
          </div>
          <button onClick={onClose} aria-label="Close cart" className="p-1.5 text-stone-500 hover:text-stone-950">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4 divide-y divide-[#EBE3D7]">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-stone-500 space-y-4 py-12">
              <ShoppingBag className="w-12 h-12 stroke-1 text-stone-400" />
              <p className="font-serif text-lg text-stone-700">Your shopping bag is empty</p>
              <p className="text-xs max-w-xs leading-relaxed">
                Explore our curated collection and add your favorite outfits to place an easy WhatsApp order.
              </p>
              <button
                onClick={onStartShopping}
                className="px-6 py-3 bg-stone-950 text-white text-xs font-semibold tracking-wider uppercase"
              >
                START SHOPPING
              </button>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={`${item.id}-${item.selectedSize}-${index}`} className="pt-4 first:pt-0 flex gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-24 object-cover bg-stone-200 border border-stone-300" />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <h4 className="font-serif text-sm font-medium text-stone-900 line-clamp-1">{item.name}</h4>
                      <button onClick={() => onUpdateQuantity(index, -item.quantity)} className="text-stone-400 hover:text-red-500 ml-2">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-[11px] text-stone-500 uppercase mt-0.5">Size: {item.selectedSize}</p>
                    <p className="text-xs font-semibold text-stone-900 mt-1">{formatNaira(item.price)}</p>
                  </div>

                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center border border-stone-300 bg-white">
                      <button onClick={() => onUpdateQuantity(index, -1)} className="p-1 hover:bg-stone-100 text-stone-600">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 text-xs font-semibold text-stone-800">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(index, 1)} className="p-1 hover:bg-stone-100 text-stone-600">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="text-xs text-stone-600 font-medium">{formatNaira(item.price * item.quantity)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-[#E8E1D5] bg-[#F7F2E9] space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="uppercase tracking-wider text-stone-600 font-medium">Estimated Total:</span>
              <span className="font-serif text-xl font-bold text-stone-950">{formatNaira(cartTotal)}</span>
            </div>
            <p className="text-[11px] text-stone-500 leading-tight">
              Order items will be formatted into a WhatsApp message to <strong>{STORE_INFO.whatsAppDisplay}</strong> for instant confirmation.
            </p>
            <a
              href={getCartWhatsAppCheckoutLink(cart, cartTotal)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 px-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#1EBE5D] transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>CHECKOUT VIA WHATSAPP</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

function SearchModal({ isOpen, onClose, searchQuery, onSearchChange, filteredProducts, onSelectProduct, onViewFilteredShop }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] shadow-2xl p-6 border border-stone-300 z-10">
        <div className="flex items-center justify-between pb-4 border-b border-stone-300">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-600">SEARCH DE JENNY CATALOG</span>
          <button onClick={onClose} aria-label="Close search" className="text-stone-500 hover:text-stone-900">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search dresses, two-piece sets, denim..."
            autoFocus
            className="w-full bg-white border border-stone-300 px-4 py-3 text-sm focus:outline-none focus:border-stone-900 tracking-wide"
          />
          {searchQuery && (
            <button onClick={() => onSearchChange('')} className="absolute right-3 top-3 text-stone-400 hover:text-stone-700">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="mt-6 max-h-64 overflow-y-auto space-y-3">
          {filteredProducts.slice(0, 4).map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectProduct(item)}
              className="flex items-center gap-4 p-2 hover:bg-[#F0EAE1] cursor-pointer transition-colors"
            >
              <img src={item.image} alt={item.name} className="w-12 h-14 object-cover" />
              <div className="flex-1">
                <p className="font-serif text-sm text-stone-900">{item.name}</p>
                <p className="text-xs text-stone-500">{item.category} • {formatNaira(item.price)}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-stone-300 flex justify-end">
          <button onClick={onViewFilteredShop} className="px-6 py-2.5 bg-stone-900 text-white text-xs uppercase tracking-wider font-semibold">
            View Filtered Shop ({filteredProducts.length})
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, isFavorite, onToggleWishlist, onQuickView }) {
  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[3/4] bg-stone-200 overflow-hidden mb-4 border border-[#ECE5DA]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-sm text-stone-900 text-[9px] tracking-[0.2em] uppercase font-semibold px-2.5 py-1 shadow-sm">
            {product.badge}
          </span>
        )}

        <button
          onClick={(e) => onToggleWishlist(product.id, e)}
          aria-label="Save to favorites"
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-stone-700 hover:text-red-500 transition-colors shadow-sm"
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
        </button>

        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <button
            onClick={() => onQuickView(product)}
            className="flex-1 py-2.5 bg-white text-stone-900 text-[10px] tracking-[0.18em] uppercase font-semibold hover:bg-stone-100 transition-colors flex items-center justify-center gap-1 shadow-sm"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
          <a
            href={getWhatsAppOrderLink(product, product.sizes[0] || 'M')}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors flex items-center justify-center"
            title="Quick Order via WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
          </a>
        </div>
      </div>

      <div className="space-y-1.5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] tracking-[0.22em] uppercase text-stone-500 block font-medium">
            {product.category}
          </span>
          <h3
            onClick={() => onQuickView(product)}
            className="font-serif text-base text-stone-900 font-normal hover:text-amber-900 cursor-pointer transition-colors line-clamp-1"
          >
            {product.name}
          </h3>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="font-sans text-sm font-semibold tracking-wide text-stone-900">
            {formatNaira(product.price)}
          </span>
          <button
            onClick={() => onQuickView(product)}
            className="text-[11px] tracking-wider uppercase font-medium text-stone-500 hover:text-stone-950 transition-colors"
          >
            View Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState(['djc-01', 'djc-06']);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedSizeForModal, setSelectedSizeForModal] = useState('M');
  const [toastMessage, setToastMessage] = useState('');
  const [isToastOpen, setIsToastOpen] = useState(false);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setIsToastOpen(true);
    setTimeout(() => setIsToastOpen(false), 3200);
  };

  const toggleWishlist = (productId, e) => {
    e?.stopPropagation();
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
      triggerToast('Item removed from your saved list');
    } else {
      setWishlist([...wishlist, productId]);
      triggerToast('Added to your personal wishlist');
    }
  };

  const addToCart = (product, size = 'M') => {
    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.id === product.id && item.selectedSize === size);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { ...product, selectedSize: size, quantity: 1 }];
    });
    setQuickViewProduct(null);
    triggerToast(`Added "${product.name}" to shopping bag`);
  };

  const updateQuantity = (index, delta) => {
    setCart(prev => {
      const updated = [...prev];
      const newQty = updated[index].quantity + delta;
      if (newQty <= 0) return updated.filter((_, i) => i !== index);
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const cartTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }, [cart]);

  const totalCartCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter(product => {
      const matchesCategory =
        selectedCategory === 'ALL' ||
        product.category === selectedCategory ||
        (selectedCategory === 'NEW ARRIVALS' && product.badge === 'NEW ARRIVAL');
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const scrollToSection = (id, category = null) => {
    setIsMobileMenuOpen(false);
    if (category) setSelectedCategory(category);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openQuickView = (product) => {
    setSelectedSizeForModal(product.sizes[0] || 'M');
    setQuickViewProduct(product);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 font-sans selection:bg-[#E0CEB7] antialiased">
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={() => setIsToastOpen(false)} />

      <Navbar
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
        onNavigate={scrollToSection}
      />

      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={scrollToSection}
      />

      <HeroSection onShopClick={() => scrollToSection('shop', 'ALL')} />

      {}
      <section id="collections" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] tracking-[0.28em] uppercase text-stone-500 font-medium block mb-2">
            CURATED CATEGORIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal tracking-tight">
            SHOP BY COLLECTION
          </h2>
          <div className="w-12 h-[1px] bg-stone-400 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_COLLECTIONS.map((col) => (
            <div
              key={col.id}
              onClick={() => scrollToSection('shop', col.categoryKey)}
              className="group cursor-pointer relative bg-stone-200 overflow-hidden aspect-[4/5] shadow-sm flex flex-col justify-end p-6 border border-[#EBE3D7]"
            >
              <img
                src={col.image}
                alt={col.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent"></div>
              <div className="relative z-10 text-white space-y-1">
                <span className="text-[10px] tracking-[0.25em] uppercase text-amber-200 block">{col.badge}</span>
                <h3 className="font-serif text-2xl font-light tracking-wide">{col.name}</h3>
                <p className="text-xs text-stone-300 font-normal">{col.subtitle}</p>
                <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-white pt-2 font-medium group-hover:underline">
                  Explore <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section id="shop" className="py-16 bg-[#FAF7F2] border-t border-[#EBE5DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#E8E1D5] gap-6">
            <div>
              <span className="text-[11px] tracking-[0.28em] uppercase text-stone-500 font-medium block mb-2">
                HANDPICKED SELECTION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal tracking-tight">
                CURATED FOR YOU
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                *Demo pricing shown for client preview purposes.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {['ALL', 'DRESSES', 'TWO-PIECE SETS', 'DENIM & CASUAL', 'NEW ARRIVALS'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-[11px] tracking-[0.16em] uppercase font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-stone-950 text-white shadow-sm'
                      : 'bg-[#F2ECE1] text-stone-700 hover:bg-stone-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {searchQuery && (
            <div className="mb-6 flex items-center justify-between bg-[#F2ECE1] px-4 py-2.5 text-xs text-stone-700">
              <span>Showing results for: <strong className="text-stone-950">"{searchQuery}"</strong></span>
              <button onClick={() => setSearchQuery('')} className="underline hover:text-stone-950">Clear search</button>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isFavorite={wishlist.includes(product.id)}
                onToggleWishlist={toggleWishlist}
                onQuickView={openQuickView}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => setSelectedCategory('ALL')}
              className="inline-flex items-center gap-3 px-10 py-4 border border-stone-900 text-stone-950 text-xs font-semibold tracking-[0.22em] uppercase hover:bg-stone-900 hover:text-white transition-all shadow-sm"
            >
              <span>VIEW ALL PRODUCTS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {}
      <section className="relative py-28 bg-stone-900 text-white overflow-hidden my-6">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1619086303291-0ef7699e4b31?auto=format&fit=crop&w=1600&q=80"
            alt="Editorial Campaign"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-stone-950/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-amber-300 font-medium">
            THE SIGNATURE EDIT • LAGOS
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight leading-tight">
            LOOK GOOD. FEEL CONFIDENT.
          </h2>
          <p className="text-stone-300 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Your next favorite outfit is waiting. Hand-selected pieces crafted to accentuate grace, boldness, and understated luxury.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('shop', 'ALL')}
              className="w-full sm:w-auto px-10 py-4 bg-[#FAF7F2] text-stone-950 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-stone-200 transition-all shadow-lg"
            >
              SHOP NOW
            </button>
            <a
              href={`https://wa.me/${STORE_INFO.whatsAppNumber}?text=${encodeURIComponent("Hello! I'd love some styling advice from De Jenny Collection.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border border-stone-400/60 text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>CHAT WITH STYLIST</span>
            </a>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#EBE5DA]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'QUALITY', desc: "Carefully selected pieces you'll love wearing.", icon: <Sparkles className="w-5 h-5 text-amber-700" /> },
            { title: 'STYLE', desc: 'Fashion-forward looks for every occasion.', icon: <Star className="w-5 h-5 text-amber-700" /> },
            { title: 'EASY ORDERING', desc: 'Order quickly through WhatsApp.', icon: <MessageCircle className="w-5 h-5 text-[#25D366]" /> },
            { title: 'NATIONWIDE DELIVERY', desc: 'Convenient delivery across Nigeria.', icon: <Truck className="w-5 h-5 text-amber-700" /> }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#F6EFE6]/60 p-8 border border-[#ECE5DA] text-center space-y-3 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-stone-900 mb-1">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg tracking-wider text-stone-900 uppercase">{item.title}</h3>
              <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {}
      <section id="about" className="py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] bg-stone-300 shadow-xl overflow-hidden border border-[#E8E1D5]">
                <img
                  src="https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?auto=format&fit=crop&w=900&q=80"
                  alt="De Jenny Collection Story"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-stone-900 text-stone-100 p-6 shadow-2xl hidden sm:block max-w-xs border-l-2 border-amber-400">
                <p className="font-serif text-sm italic">
                  "Fashion is not just what you wear, it is the confidence you step out with."
                </p>
                <span className="block text-[10px] tracking-[0.2em] text-amber-300 uppercase mt-2">
                  — DE JENNY COLLECTION
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 lg:pl-6 text-center lg:text-left">
              <span className="text-[11px] tracking-[0.28em] uppercase text-stone-500 font-medium block">
                WHO WE ARE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-stone-950 font-normal tracking-tight leading-tight">
                ABOUT DE JENNY COLLECTION
              </h2>
              <div className="w-12 h-[1px] bg-stone-400 mx-auto lg:mx-0"></div>
              <p className="text-stone-700 text-lg leading-relaxed font-normal">
                De Jenny Collection is a women's fashion store based in Lagos, offering quality women's wear and styles for different occasions.
              </p>
              <p className="text-stone-600 text-sm leading-relaxed">
                From show-stopping evening dresses and coordinated two-piece sets to effortlessly elevated denim essentials, each piece in our edit is chosen to bring out your natural poise.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => scrollToSection('shop', 'ALL')}
                  className="px-8 py-3.5 bg-stone-950 text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-stone-800 transition-colors shadow-sm"
                >
                  DISCOVER OUR STORY
                </button>
                <a
                  href={STORE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-stone-800 hover:text-amber-800 transition-colors py-2"
                >
                  <Instagram className="w-4 h-4" />
                  <span>View Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-[#F4EFE6] border-y border-[#EBE3D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] tracking-[0.28em] uppercase text-stone-500 font-medium block">
              SOCIAL LOOKBOOK
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal tracking-tight">
              FOLLOW OUR STYLE
            </h2>
            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium tracking-wider text-amber-900 hover:text-stone-900 transition-colors"
            >
              {STORE_INFO.instagram}
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {INSTAGRAM_POSTS.map((post) => (
              <a
                key={post.id}
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square bg-stone-300 overflow-hidden shadow-sm block"
              >
                <img
                  src={post.image}
                  alt={`Look ${post.id}`}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-white text-center">
                  <Instagram className="w-5 h-5 mb-1.5 text-white" />
                  <span className="text-[10px] tracking-wider uppercase font-semibold">{post.likes} Likes</span>
                  <span className="text-[9px] text-stone-300 line-clamp-2 mt-1">{post.caption}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-stone-800 text-stone-900 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>FOLLOW ON INSTAGRAM</span>
            </a>
          </div>
        </div>
      </section>

      {}
      <section id="reviews" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-[11px] tracking-[0.28em] uppercase text-stone-500 font-medium block">
            CLIENT WORDS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal tracking-tight">
            WHAT OUR CLIENTS SAY
          </h2>
          <div className="w-12 h-[1px] bg-stone-400 mx-auto mt-4"></div>
          <p className="text-[11px] text-stone-400 tracking-wider uppercase">
            *Demo Testimonials • Readily replaceable with verified customer feedback
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEMO_TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-[#FAF7F2] p-8 border border-[#E8E1D5] flex flex-col justify-between space-y-6 shadow-sm hover:border-amber-800/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="font-serif text-stone-800 text-base leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#EDE7DD]">
                <h4 className="font-sans font-semibold text-xs tracking-wider uppercase text-stone-950">
                  {test.author}
                </h4>
                <p className="text-[11px] text-stone-500">{test.location}</p>
                <span className="text-[10px] text-amber-900 font-medium tracking-wide mt-1 block">
                  Purchased: {test.item}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section id="contact" className="py-20 bg-[#F4EFE6] border-t border-[#EBE3D7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
            <MessageCircle className="w-7 h-7 fill-[#25D366]" />
          </div>

          <span className="text-[11px] tracking-[0.3em] uppercase text-stone-500 font-medium block">
            INSTANT LAGOS ASSISTANCE
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-stone-950 font-normal tracking-tight">
            FOUND SOMETHING YOU LOVE?
          </h2>

          <p className="text-stone-600 text-base sm:text-lg max-w-lg mx-auto font-normal leading-relaxed">
            Chat with us on WhatsApp and place your order easily. Send a screenshot, confirm your size, and get fast delivery nationwide.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${STORE_INFO.whatsAppNumber}?text=${encodeURIComponent("Hello De Jenny Collection! I found an item I love on your website and would like to order.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#25D366] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#1EBE5D] transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>ORDER ON WHATSAPP</span>
            </a>

            <a
              href={`tel:${STORE_INFO.whatsAppDisplay.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-8 py-4 border border-stone-400 text-stone-800 text-xs font-semibold tracking-[0.18em] uppercase hover:bg-stone-200 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>CALL: {STORE_INFO.whatsAppDisplay}</span>
            </a>
          </div>

          <div className="pt-6 text-xs text-stone-500">
            Official line: <span className="font-semibold text-stone-800">{STORE_INFO.whatsAppDisplay}</span> • Available Mon – Sat for orders & inquiries.
          </div>
        </div>
      </section>

      {}
      <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-stone-800">
            <div className="lg:col-span-2 space-y-4">
              <h3 className="font-serif text-xl tracking-[0.18em] uppercase text-white font-semibold">
                {STORE_INFO.name}
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
                Quality women's wear based in Lagos, Nigeria. Delivering carefully curated styles, luxury co-ords, and statement silhouettes nationwide.
              </p>
              <div className="pt-2 flex items-center space-x-4">
                <a
                  href={STORE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center text-stone-300 hover:text-white hover:border-amber-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/${STORE_INFO.whatsAppNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center text-[#25D366] hover:text-white hover:border-[#25D366] transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white">EXPLORE</h4>
              <ul className="space-y-2 text-xs text-stone-400">
                <li><button onClick={() => scrollToSection('shop', 'ALL')} className="hover:text-white transition-colors">Shop All</button></li>
                <li><button onClick={() => scrollToSection('shop', 'NEW ARRIVALS')} className="hover:text-white transition-colors">New Arrivals</button></li>
                <li><button onClick={() => scrollToSection('shop', 'DRESSES')} className="hover:text-white transition-colors">Dresses</button></li>
                <li><button onClick={() => scrollToSection('shop', 'TWO-PIECE SETS')} className="hover:text-white transition-colors">Two-Piece Sets</button></li>
                <li><button onClick={() => scrollToSection('shop', 'DENIM & CASUAL')} className="hover:text-white transition-colors">Denim & Casual</button></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white">ABOUT US</h4>
              <ul className="space-y-2 text-xs text-stone-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">Our Story</button></li>
                <li><button onClick={() => scrollToSection('collections')} className="hover:text-white transition-colors">Collections</button></li>
                <li><button onClick={() => scrollToSection('reviews')} className="hover:text-white transition-colors">Client Reviews</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact Lagos Office</button></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white">CUSTOMER SERVICE</h4>
              <ul className="space-y-2 text-xs text-stone-400">
                <li className="flex items-center gap-1.5">
                  <span>WhatsApp:</span>
                  <a href={`https://wa.me/${STORE_INFO.whatsAppNumber}`} className="text-white hover:underline">{STORE_INFO.whatsAppDisplay}</a>
                </li>
                <li className="flex items-center gap-1.5">
                  <span>Instagram:</span>
                  <a href={STORE_INFO.instagramUrl} className="text-white hover:underline">{STORE_INFO.instagram}</a>
                </li>
                <li>Nationwide Delivery (Lagos & Interstate)</li>
                <li>Standard & Express Dispatch Available</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
            <p>© 2026 De Jenny Collection. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span>Lagos, Nigeria</span>
              <span>•</span>
              <span className="text-amber-400/80">PREMIUM STORE DEMO</span>
            </div>
          </div>
        </div>
      </footer>

      {}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        selectedSize={selectedSizeForModal}
        onSelectSize={setSelectedSizeForModal}
        onAddToCart={addToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        cartTotal={cartTotal}
        onUpdateQuantity={updateQuantity}
        onStartShopping={() => {
          setIsCartOpen(false);
          scrollToSection('shop', 'ALL');
        }}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        filteredProducts={filteredProducts}
        onSelectProduct={(item) => {
          openQuickView(item);
          setIsSearchOpen(false);
        }}
        onViewFilteredShop={() => {
          setIsSearchOpen(false);
          scrollToSection('shop');
        }}
      />
    </div>
  );
}
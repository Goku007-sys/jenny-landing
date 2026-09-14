import React from 'react';
import { Search, ShoppingBag, MessageCircle, Menu } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export function Navbar({ onOpenMobileMenu, onOpenSearch, onOpenCart, cartCount, onNavigate }) {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EBE5DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center lg:hidden">
            <button onClick={onOpenMobileMenu} className="p-2 text-stone-800">
              <Menu className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 lg:flex-none text-center lg:text-left">
            <button onClick={() => onNavigate('hero')} className="inline-block text-left">
              <span className="block font-serif text-xl sm:text-2xl tracking-[0.2em] font-semibold text-stone-900 uppercase">
                {STORE_INFO.name}
              </span>
              <span className="block text-[9px] tracking-[0.32em] text-stone-500 uppercase font-sans -mt-0.5">
                Lagos • Nigeria
              </span>
            </button>
          </div>

          <nav className="hidden lg:flex items-center space-x-8 text-xs font-medium tracking-[0.18em] uppercase text-stone-700">
            <button onClick={() => onNavigate('hero')} className="hover:text-amber-800 py-1">Home</button>
            <button onClick={() => onNavigate('shop', 'ALL')} className="hover:text-amber-800 py-1">Shop</button>
            <button onClick={() => onNavigate('shop', 'NEW ARRIVALS')} className="hover:text-amber-800 py-1">New Arrivals</button>
            <button onClick={() => onNavigate('collections')} className="hover:text-amber-800 py-1">Collections</button>
            <button onClick={() => onNavigate('about')} className="hover:text-amber-800 py-1">About</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-amber-800 py-1">Contact</button>
          </nav>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <button onClick={onOpenSearch} className="p-2 text-stone-700 hover:text-stone-950">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={onOpenCart} className="relative p-2 text-stone-700 hover:text-stone-950">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-stone-900 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <a
              href={`https://wa.me/${STORE_INFO.whatsAppNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#1EBE5D] text-xs font-semibold tracking-wider uppercase px-4 py-2.5 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
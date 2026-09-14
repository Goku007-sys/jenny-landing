import React from 'react';
import { MessageCircle, Truck, ShieldCheck, MapPin } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export function HeroSection({ onShopClick }) {
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
              Discover carefully selected women's fashion designed to make every moment feel special. Tailored silhouettes, luxury fabrics, and effortless elegance.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onShopClick}
                className="w-full sm:w-auto px-9 py-4 bg-stone-950 text-[#FAF7F2] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-stone-800 transition-all shadow-md"
              >
                SHOP COLLECTION
              </button>

              
              <a  href={`https://wa.me/${STORE_INFO.whatsAppNumber}?text=${encodeURIComponent("Hello De Jenny Collection! I would like to explore your latest collection.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 border border-stone-800 text-stone-900 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>ORDER ON WHATSAPP</span>
              </a>
            </div>

            <div className="pt-6 border-t border-[#E8E1D5] flex items-center justify-center lg:justify-start gap-8 text-[11px] uppercase tracking-wider text-stone-500">
              <div className="flex items-center gap-2"><Truck className="w-4 h-4 text-stone-800" /><span>Nationwide Delivery</span></div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-stone-800" /><span>Quality Assured</span></div>
              <div className="hidden sm:flex items-center gap-2"><MapPin className="w-4 h-4 text-stone-800" /><span>Lagos Showroom</span></div>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] bg-stone-300 shadow-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1595882669314-919b3d51f2c7?auto=format&fit=crop&w=1000&q=85"
                alt="De Jenny Collection Editorial Feature"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
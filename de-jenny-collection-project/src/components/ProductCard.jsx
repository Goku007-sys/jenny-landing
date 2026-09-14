import React from 'react';
import { Heart, Eye, MessageCircle } from 'lucide-react';
import { formatNaira, getWhatsAppOrderLink } from '../utils/helpers';

export function ProductCard({ product, isFavorite, onToggleWishlist, onQuickView }) {
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
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-stone-700 hover:text-red-500 transition-colors shadow-sm"
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
        </button>

        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <button
            onClick={() => onQuickView(product)}
            className="flex-1 py-2.5 bg-white text-stone-900 text-[10px] tracking-[0.18em] uppercase font-semibold hover:bg-stone-100 flex items-center justify-center gap-1 shadow-sm"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
          <a
            href={getWhatsAppOrderLink(product, product.sizes[0] || 'M')}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 bg-[#25D366] text-white hover:bg-[#1EBE5D] flex items-center justify-center"
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
          <h3 onClick={() => onQuickView(product)} className="font-serif text-base text-stone-900 font-normal hover:text-amber-900 cursor-pointer line-clamp-1">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="font-sans text-sm font-semibold tracking-wide text-stone-900">
            {formatNaira(product.price)}
          </span>
          <button onClick={() => onQuickView(product)} className="text-[11px] tracking-wider uppercase font-medium text-stone-500 hover:text-stone-950">
            View Product
          </button>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { ZoomIn, X, ShoppingBag } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  gujarati: string;
  category: 'farsan' | 'sweets' | 'festive';
  image: string;
  caption: string;
  details: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Hot Vanela Gathiya & Kadak Fafda Platter',
    gujarati: 'ગરમાગરમ વાણેલા ગાંઠિયા અને ફાફડા પ્લેટર',
    category: 'farsan',
    image: '/src/assets/images/product_vanela_gathiya_fafda_1792001379515.jpg',
    caption: 'Served with signature Papaya Sambharo, spiced fried chillies, and yellow kadhi.',
    details: 'Fried at 180°C in pure groundnut oil by our experienced Gujarati karigars on Amin Marg.'
  },
  {
    id: 'gal-2',
    title: 'Pure Desi Ghee Kesar Jalebi Whirls',
    gujarati: 'શુદ્ધ દેશી ઘી કેસર જલેબી',
    category: 'sweets',
    image: '/src/assets/images/product_kesar_jalebi_sweet_1792001379204.jpg',
    caption: 'Dipped into saffron-infused cardamom nectar, garnished with Iranian saffron and pistachios.',
    details: 'Made fresh around the clock in 100% Gir cow Desi Ghee for unbeatable crunch.'
  },
  {
    id: 'gal-3',
    title: 'Diamond Shahi Kaju Katli Geometric Fan',
    gujarati: 'રોયલ શાહી કાજુ કતરી',
    category: 'sweets',
    image: '/src/assets/images/product_kaju_katli_dryfruit_1792001381084.jpg',
    caption: 'Pure Goan cashew fudge with certified pure vegetarian silver vark.',
    details: 'Crafted without extra essence or flour. Pure cashew and cane sugar perfection.'
  },
  {
    id: 'gal-4',
    title: 'Imperial Royal Festive Gift Hamper',
    gujarati: 'રોયલ તહેવાર મિઠાઈ બોક્સ',
    category: 'festive',
    image: '/src/assets/images/festival_luxury_gift_box_1792001380501.jpg',
    caption: 'Gold embossed maroon keepsake box with assorted dry fruit barfis and roasted farsan.',
    details: 'The choice of Rajkot for Diwali, wedding shagun, and corporate executive gifting.'
  },
  {
    id: 'gal-5',
    title: 'Kathiyawadi Morning Farsan Banquet',
    gujarati: 'કાઠિયાવાડી ફરસાણ અને સ્વીટ થાળ',
    category: 'farsan',
    image: '/src/assets/images/hero_gujarati_farsan_sweets_1792001377340.jpg',
    caption: 'Steamed spongy khaman, spicy sev, and crispy snacks fresh from the dawn cauldrons.',
    details: 'Every Sunday hundreds of Rajkoti families gather for our fresh breakfast spread.'
  }
];

interface GallerySectionProps {
  onOrderNow: () => void;
}

export function GallerySection({ onOrderNow }: GallerySectionProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'farsan' | 'sweets' | 'festive'>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filtered = activeFilter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e05a12] mb-3">
            <span>સ્વાદિષ્ટ ઝાંખી</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Food Photography Showcase</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Fresh From The Kitchen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3a080e] font-serif-luxury tracking-tight text-balance">
            Culinary Craftsmanship in Focus
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed font-light">
            Take a visual tour through our daily creations. Click any image to view details in high resolution.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1 bg-stone-100 rounded-lg border border-stone-200 gap-1">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#3a080e] text-[#f3e5ab] shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Gallery
            </button>
            <button
              onClick={() => setActiveFilter('farsan')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeFilter === 'farsan'
                  ? 'bg-[#3a080e] text-[#f3e5ab] shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Fresh Farsan
            </button>
            <button
              onClick={() => setActiveFilter('sweets')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeFilter === 'sweets'
                  ? 'bg-[#3a080e] text-[#f3e5ab] shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Royal Sweets
            </button>
            <button
              onClick={() => setActiveFilter('festive')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeFilter === 'festive'
                  ? 'bg-[#3a080e] text-[#f3e5ab] shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Festival Gift Boxes
            </button>
          </div>
        </div>

        {/* Masonry / Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-stone-900 aspect-4/3 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
              
              {/* Overlay Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Zoom Icon badge */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ZoomIn className="w-4 h-4 text-[#d4af37]" />
              </div>

              {/* Content bottom */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] text-[#d4af37] font-royal block mb-1">
                  {item.gujarati}
                </span>
                <h4 className="text-base font-bold font-serif-luxury text-amber-100 group-hover:text-white transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-300 line-clamp-1 mt-1 font-light">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-all">
          <div className="relative max-w-3xl w-full bg-[#faf7f2] rounded-2xl overflow-hidden shadow-2xl border border-[#d4af37]/40 flex flex-col md:flex-row">
            
            {/* Close button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="md:w-1/2 h-64 md:h-auto relative bg-stone-900">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between">
              <div>
                <span className="text-xs font-royal text-[#e05a12] font-semibold block mb-1">
                  {activeModalItem.gujarati}
                </span>
                <h3 className="text-xl font-bold font-serif-luxury text-[#3a080e] leading-snug">
                  {activeModalItem.title}
                </h3>
                
                <p className="mt-3 text-sm text-stone-700 leading-relaxed">
                  {activeModalItem.caption}
                </p>

                <div className="mt-4 p-3 rounded-lg bg-amber-50/80 border border-amber-200/60 text-xs text-stone-700">
                  <strong className="text-[#3a080e] block mb-1">Culinary Guarantee:</strong>
                  {activeModalItem.details}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500">
                  Prepared fresh at Amin Marg, Rajkot
                </span>
                <button
                  onClick={() => {
                    setActiveModalItem(null);
                    onOrderNow();
                  }}
                  className="px-4 py-2 bg-[#3a080e] text-[#f3e5ab] hover:bg-[#58111a] font-semibold text-xs rounded shadow transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Order Now</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}

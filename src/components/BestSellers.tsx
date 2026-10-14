import { Product } from '../types';
import { Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';

interface BestSellersProps {
  products: Product[];
  onAddToCart: (product: Product, weight: string, price: number) => void;
  onSelectProduct: (product: Product) => void;
  onExploreAll: () => void;
}

export function BestSellers({
  products,
  onAddToCart,
  onSelectProduct,
  onExploreAll,
}: BestSellersProps) {
  // Grab bestsellers
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-[#3a080e] text-white relative overflow-hidden">
      {/* Background glow and subtle motif */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#d4af37]/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Rajkot's Daily Obsession</span>
              <span aria-hidden="true" className="text-amber-200/40">·</span>
              <span>Fastest Selling Delicacies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif-luxury text-white tracking-tight">
              Our Signature <span className="gold-gradient-text">Best Sellers</span>
            </h2>
          </div>

          <button
            onClick={onExploreAll}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#f3e5ab] hover:text-white transition-colors cursor-pointer group"
          >
            <span>View All 35+ Specialties</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Featured Best Seller Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((item, idx) => {
            const defaultWeight = item.defaultWeight;
            const defaultPrice =
              item.weights.find((w) => w.weight === defaultWeight)?.price ||
              item.weights[0].price;

            return (
              <div
                key={item.id}
                className="relative rounded-2xl bg-[#4a0e17]/80 border border-[#d4af37]/30 hover:border-[#d4af37] p-6 shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Ranking Ribbon */}
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-[#d4af37] to-[#aa8010] text-[#3a080e] font-extrabold text-[11px] uppercase tracking-wider px-3 py-0.5 rounded shadow">
                  Top #{idx + 1} Best Seller
                </div>

                <div>
                  {/* Image with 3D shadow lift */}
                  <div
                    className="relative h-48 w-full rounded-xl overflow-hidden mt-2 mb-4 bg-black/40 cursor-pointer"
                    onClick={() => onSelectProduct(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-3 text-xs text-amber-200 font-royal">
                      {item.gujaratiName}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3
                    className="text-lg font-bold font-serif-luxury text-amber-100 group-hover:text-[#f3e5ab] transition-colors cursor-pointer"
                    onClick={() => onSelectProduct(item)}
                  >
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs text-amber-200/80 leading-relaxed line-clamp-2">
                    {item.shortDesc}
                  </p>

                  {/* Accompaniments / Highlights */}
                  {item.accompaniments && (
                    <div className="mt-3 p-2.5 rounded bg-[#280408]/60 border border-[#d4af37]/20 text-[11px] text-amber-300/90">
                      <strong>Accompaniments:</strong> {item.accompaniments}
                    </div>
                  )}
                </div>

                {/* Price and Cart row */}
                <div className="mt-6 pt-4 border-t border-[#d4af37]/20 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-amber-200/60 block">Price ({defaultWeight})</span>
                    <span className="text-xl font-bold font-mono text-[#f3e5ab] tabular-nums">
                      ₹{defaultPrice}
                    </span>
                  </div>

                  <button
                    onClick={() => onAddToCart(item, defaultWeight, defaultPrice)}
                    className="px-4 py-2 bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] text-[#3a080e] font-bold text-xs uppercase tracking-wider rounded shadow hover:opacity-95 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Quick Add</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

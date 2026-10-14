import { useState } from 'react';
import { Product } from '../types';
import { X, Check, ShoppingBag, ShieldCheck, Clock, Flame, Sparkles } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, weight: string, price: number) => void;
}

export function ProductDetailModal({
  product,
  onClose,
  onAddToCart,
}: ProductDetailModalProps) {
  if (!product) return null;

  const [selectedWeight, setSelectedWeight] = useState(product.defaultWeight);
  const [justAdded, setJustAdded] = useState(false);

  const currentPrice =
    product.weights.find((w) => w.weight === selectedWeight)?.price ||
    product.weights[0].price;

  const handleAdd = () => {
    onAddToCart(product, selectedWeight, currentPrice);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative max-w-2xl w-full bg-[#faf7f2] rounded-3xl overflow-hidden shadow-2xl border border-[#d4af37]/40 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image in modal */}
        <div className="relative h-64 sm:h-72 w-full bg-stone-900">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3a080e] via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between text-white">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block mb-0.5">
                {product.gujaratiName}
              </span>
              <h3 className="text-2xl font-bold font-serif-luxury text-white">
                {product.name}
              </h3>
            </div>
            {product.badge && (
              <span className="bg-[#d4af37] text-[#3a080e] font-bold text-xs px-2.5 py-1 rounded shadow">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Cooking Medium & Diet pills */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-100/70 text-[#3a080e] font-semibold">
              <Flame className="w-3.5 h-3.5 text-[#e05a12]" />
              <span>{product.cookingMedium}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-100/70 text-emerald-900 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{product.isJainAvailable ? '100% Jain Available' : 'Traditional Recipe'}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-stone-200/70 text-stone-700 font-medium">
              <Clock className="w-3.5 h-3.5 text-stone-500" />
              <span>{product.shelfLife}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
              About This Delicacy
            </h4>
            <p className="text-sm text-stone-700 leading-relaxed">
              {product.longDesc}
            </p>
          </div>

          {/* Accompaniments if any */}
          {product.accompaniments && (
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/70 text-xs text-stone-800 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#e05a12] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#3a080e] block">Included Accompaniments:</strong>
                <span>{product.accompaniments}</span>
              </div>
            </div>
          )}

          {/* Ingredients list */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
              Pure Ingredients Used:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {product.ingredients.map((ing, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs bg-white border border-stone-200 text-stone-700 rounded"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Weight Selection & Add Button */}
          <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                Pack Size:
              </span>
              <div className="flex items-center gap-1.5">
                {product.weights.map((w) => (
                  <button
                    key={w.weight}
                    onClick={() => setSelectedWeight(w.weight)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer ${
                      selectedWeight === w.weight
                        ? 'bg-[#3a080e] text-[#f3e5ab] shadow-sm'
                        : 'bg-white text-stone-700 border border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    {w.weight}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
              <div className="text-right">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Price</span>
                <span className="text-2xl font-bold font-mono text-[#3a080e] tabular-nums">
                  ₹{currentPrice}
                </span>
              </div>

              <button
                onClick={handleAdd}
                className={`px-6 py-3 font-bold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
                  justAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] text-[#3a080e] shadow-md hover:opacity-95'
                }`}
              >
                {justAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

import { useState } from 'react';
import { Product, ProductCategory } from '../types';
import { Plus, Check, Info, Sparkles } from 'lucide-react';

interface ProductsSectionProps {
  products: Product[];
  onAddToCart: (product: Product, weight: string, price: number) => void;
  onSelectProduct: (product: Product) => void;
}

export function ProductsSection({
  products,
  onAddToCart,
  onSelectProduct,
}: ProductsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedWeights, setSelectedWeights] = useState<Record<string, string>>({});
  const [addedEffect, setAddedEffect] = useState<Record<string, boolean>>({});

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Items' },
    { id: 'morning-farsan', label: 'Morning Farsan (Gathiya & Fafda)' },
    { id: 'sweets', label: 'Pure Desi Ghee Sweets' },
    { id: 'namkeen', label: 'Crispy Namkeen & Sev' },
    { id: 'festival-boxes', label: 'Festival Gift Hampers' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleWeightChange = (productId: string, weight: string) => {
    setSelectedWeights((prev) => ({ ...prev, [productId]: weight }));
  };

  const getProductActiveWeight = (product: Product) => {
    return selectedWeights[product.id] || product.defaultWeight;
  };

  const getProductActivePrice = (product: Product) => {
    const activeWeight = getProductActiveWeight(product);
    const option = product.weights.find((w) => w.weight === activeWeight);
    return option ? option.price : product.weights[0].price;
  };

  const handleQuickAdd = (product: Product) => {
    const activeWeight = getProductActiveWeight(product);
    const activePrice = getProductActivePrice(product);
    onAddToCart(product, activeWeight, activePrice);

    // Trigger visual button feedback
    setAddedEffect((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedEffect((prev) => ({ ...prev, [product.id]: false }));
    }, 1200);
  };

  return (
    <section id="products" className="py-16 lg:py-24 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e05a12] mb-3">
            <span>શુદ્ધ સ્વાદ</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Handcrafted In Rajkot</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Daily Fresh Batches</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3a080e] font-serif-luxury tracking-tight text-balance">
            Our Traditional Farsan & Sweets Collection
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed font-light">
            Select your preferred weight to check live pricing. All orders include authentic Gujarati accompaniments and express vacuum packing for outstation travel.
          </p>
        </div>

        {/* Category Filter Tabs (Interactive Filter Control - Allowed by Zero-Pill Rules) */}
        <div className="flex items-center justify-center mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 bg-stone-100 rounded-xl border border-stone-200/80 gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#3a080e] text-[#f3e5ab] shadow-sm font-semibold'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid: 3-column desktop layout with generous whitespace */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const currentWeight = getProductActiveWeight(product);
            const currentPrice = getProductActivePrice(product);
            const isAdded = addedEffect[product.id];

            return (
              <div
                key={product.id}
                className="group rounded-2xl bg-[#faf7f2] border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Half: Product Imagery & Badges */}
                <div className="relative h-60 w-full overflow-hidden bg-stone-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Clean unboxed tag in top left */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-[#3a080e]/90 text-[#f3e5ab] text-[11px] font-semibold px-2.5 py-1 rounded backdrop-blur-sm shadow border border-[#d4af37]/40 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#d4af37]" />
                      <span>{product.badge}</span>
                    </div>
                  )}

                  {/* Quick info trigger button in top right */}
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="absolute top-3 right-3 p-1.5 rounded-full bg-white/90 text-stone-700 hover:text-[#3a080e] hover:bg-white shadow transition-all cursor-pointer"
                    title="View ingredients and details"
                    aria-label={`View details for ${product.name}`}
                  >
                    <Info className="w-4 h-4" />
                  </button>

                  {/* Gujarati Name Display on image footer */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-medium tracking-wide text-amber-200 font-royal">
                      {product.gujaratiName}
                    </span>
                    <span className="text-[11px] text-stone-300 font-light">
                      {product.cookingMedium.includes('Ghee') ? 'Desi Ghee' : 'Pure Singtel'}
                    </span>
                  </div>
                </div>

                {/* Bottom Half: Details, Weight Selector, and Action */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed metadata line */}
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5 font-medium">
                      <span>{product.shelfLife}</span>
                      <span aria-hidden="true">·</span>
                      <span>{product.isJainAvailable ? 'Jain Available' : 'Traditional'}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#3a080e] font-serif-luxury group-hover:text-[#e05a12] transition-colors leading-snug">
                      {product.name}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-2 text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>
                  </div>

                  {/* Weight Selector & Price Row */}
                  <div className="mt-5 pt-4 border-t border-stone-200">
                    
                    {/* Weight Selector Buttons */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                        Select Pack:
                      </span>
                      <div className="flex items-center gap-1.5">
                        {product.weights.map((w) => (
                          <button
                            key={w.weight}
                            onClick={() => handleWeightChange(product.id, w.weight)}
                            className={`px-2.5 py-1 text-xs font-semibold rounded transition-all cursor-pointer ${
                              currentWeight === w.weight
                                ? 'bg-[#3a080e] text-[#f3e5ab] shadow-sm'
                                : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400'
                            }`}
                          >
                            {w.weight}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price & Action Button */}
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[11px] text-stone-400 block font-normal leading-none">
                          Price ({currentWeight})
                        </span>
                        <span className="text-xl font-bold text-[#3a080e] font-mono tabular-nums">
                          ₹{currentPrice}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onSelectProduct(product)}
                          className="px-2.5 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 bg-white border border-stone-300 rounded hover:bg-stone-50 transition-colors cursor-pointer"
                        >
                          Details
                        </button>

                        <button
                          onClick={() => handleQuickAdd(product)}
                          className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all flex items-center gap-1.5 cursor-pointer ${
                            isAdded
                              ? 'bg-emerald-600 text-white'
                              : 'bg-gradient-to-r from-[#d4af37] to-[#c5a059] hover:from-[#f3e5ab] hover:to-[#d4af37] text-[#3a080e] shadow-sm'
                          }`}
                          aria-label={`Add ${product.name} ${currentWeight} to cart`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>Add</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

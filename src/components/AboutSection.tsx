import { ShieldCheck, HeartHandshake, Award, Clock } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="specialties" className="py-16 lg:py-24 bg-[#faf7f2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e05a12] mb-3">
            <span>પરંપરા અને સ્વાદ</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Since Decades</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Pure Gujarati Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3a080e] font-serif-luxury tracking-tight text-balance">
            Crafting Rajkot’s Most Cherished Farsan & Sweets Tradition
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed font-light">
            Located near Payal Medical on Amin Marg, New Kailash Farshan & Sweet Mart was founded on a simple, uncompromising promise: to serve pure, authentic Kathiyawadi taste prepared with the finest ingredients and boundless warmth.
          </p>
        </div>

        {/* 2-Column Split: Story & Visual Heritage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Visual Collage with High-End Image */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 group">
              <img
                src="/src/assets/images/hero_gujarati_farsan_sweets_1792001377340.jpg"
                alt="Traditional Indian Sweets & Farsan spread at New Kailash"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3a080e]/90 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block">Artisanal Purity</span>
                <p className="text-lg font-serif-luxury font-bold text-amber-100 mt-1">
                  "In every swirl of our jalebi and twist of our gathiya lives the sacred culinary soul of Saurashtra."
                </p>
                <div className="mt-2 text-xs text-amber-200/80">
                  Amin Marg, Rajkot · Fresh Batches Every Morning
                </div>
              </div>
            </div>

            {/* Quote Strip below */}
            <div className="mt-6 p-4 rounded-xl bg-white border border-stone-200 shadow-sm flex items-start gap-3">
              <HeartHandshake className="w-5 h-5 text-[#e05a12] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                <strong className="text-[#3a080e]">Family-Friendly & Community Rooted:</strong> We take pride in serving generations of Rajkoti families, from early morning walkers to festive grand celebrations.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Core Pillars of Distinction */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            
            <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-sm hover:border-[#d4af37]/50 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#e05a12] flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="text-lg font-bold text-[#3a080e] font-serif-luxury">
                  100% Pure Singtel (Groundnut Oil)
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                Unlike mass commercial vendors who cut corners with palm or hydrogenated fats, our savory farsan is exclusively prepared in pure, cold-pressed Gujarat groundnut oil. It delivers the distinctive, crisp aromatic lightness that true Saurashtra food lovers revere.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-sm hover:border-[#d4af37]/50 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#d4af37] flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="text-lg font-bold text-[#3a080e] font-serif-luxury">
                  Pure Desi Cow Ghee Sweets
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                Every batch of Kesar Jalebi, Mohanthal, and Mawa Peda is prepared in slow-melted pure cow ghee. We never use artificial essences, thickeners, or heavy additives—only pure Iranian saffron, green cardamom, and premium California dry fruits.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-sm hover:border-[#d4af37]/50 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-emerald-600 flex items-center justify-center font-bold">
                  03
                </div>
                <h3 className="text-lg font-bold text-[#3a080e] font-serif-luxury">
                  Immaculate Hygiene Standards
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                Our kitchen features food-grade stainless steel counters, filtered water preparation, mandatory headgear and gloves, and strict daily oil disposal protocols. You can inspect our open production area anytime.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-sm hover:border-[#d4af37]/50 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-rose-600 flex items-center justify-center font-bold">
                  04
                </div>
                <h3 className="text-lg font-bold text-[#3a080e] font-serif-luxury">
                  Generous Accompaniments & Hospitality
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                Gathiya and Fafda are incomplete without their soul: freshly prepared raw papaya relish (sambharo), sweet-spicy besan kadhi, and salted fried green chillies. We pack all accompaniments lavishly with every single order.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

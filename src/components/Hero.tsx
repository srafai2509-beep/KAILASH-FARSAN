import { useState } from 'react';
import { ArrowRight, Phone, Sparkles, ShieldCheck, Flame, UtensilsCrossed } from 'lucide-react';

interface HeroProps {
  onOrderNow: () => void;
  onExploreMenu: () => void;
}

export function Hero({ onOrderNow, onExploreMenu }: HeroProps) {
  const [activeItem, setActiveItem] = useState<'jalebi' | 'gathiya' | 'kaju'>('jalebi');

  return (
    <section className="relative overflow-hidden bg-[#3a080e] text-white pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Subtle luxury Indian background motifs */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#d4af37]/20 via-[#e05a12]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#e05a12]/15 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines, Subtitle, Guarantees & Primary Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Cultural Top Line */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
              <span className="font-royal">રાજકોટનું ગૌરવ</span>
              <span aria-hidden="true" className="text-amber-300/40">·</span>
              <span>Authentic Kathiyawadi Heritage</span>
              <span aria-hidden="true" className="text-amber-300/40">·</span>
              <span>Amin Marg Landmark</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] font-serif-luxury text-balance">
              Rajkot's Favourite Destination for{' '}
              <span className="gold-gradient-text">Authentic Farsan</span> &{' '}
              <span className="text-[#f59e0b]">Sweets</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-amber-100/90 leading-relaxed max-w-2xl font-light">
              Freshly Prepared Daily with Premium Ingredients, Traditional Recipes and Unmatched Taste. Experience the legendary melt-in-mouth Vanela Gathiya, crisp Fafda, and pure Desi Ghee Kesar Jalebi right in the heart of Rajkot.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOrderNow}
                className="px-6 py-3.5 bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] text-[#3a080e] font-bold text-sm tracking-wide rounded-md shadow-lg hover:shadow-[#d4af37]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreMenu}
                className="px-6 py-3.5 border border-[#d4af37]/50 text-amber-100 hover:text-white hover:bg-white/5 font-semibold text-sm rounded-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#d4af37]" />
                <span>View Menu</span>
              </button>

              <a
                href="tel:+919016100004"
                className="px-5 py-3.5 bg-[#58111a] hover:bg-[#7a1b26] border border-[#d4af37]/30 text-amber-200 hover:text-white font-medium text-sm rounded-md transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span className="font-mono tabular-nums">+91 90161 00004</span>
              </a>
            </div>

            {/* Trust and Purity Highlights */}
            <div className="pt-4 border-t border-[#d4af37]/20 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-amber-200/80">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#f59e0b] shrink-0" />
                <span>Pure Groundnut Oil (Singtel)</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>100% Desi Cow Ghee Sweets</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Hygienic Kitchen</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Sweets & Farsan Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Golden Halo Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#d4af37]/40 via-[#e05a12]/30 to-[#d4af37]/40 blur-xl opacity-75" />

              {/* Main Card with Glass & Gold Border */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[#4a0e17] to-[#280408] border border-[#d4af37]/40 p-5 sm:p-6 shadow-2xl overflow-hidden">
                
                {/* 3D Visual Stage */}
                <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden shadow-inner group">
                  <img
                    src={
                      activeItem === 'jalebi'
                        ? '/src/assets/images/product_kesar_jalebi_sweet_1792001379204.jpg'
                        : activeItem === 'gathiya'
                        ? '/src/assets/images/product_vanela_gathiya_fafda_1792001379515.jpg'
                        : '/src/assets/images/product_kaju_katli_dryfruit_1792001381084.jpg'
                    }
                    alt={
                      activeItem === 'jalebi'
                        ? 'Crispy golden Desi Ghee Kesar Jalebi'
                        : activeItem === 'gathiya'
                        ? 'Fresh hot Vanela Gathiya & Fafda with Sambharo'
                        : 'Pure Silver Leaf Royal Kaju Katli'
                    }
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Scrim for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* 3D Floating Sweets Indicator badge */}
                  <div className="absolute top-3 left-3 bg-[#3a080e]/90 border border-[#d4af37]/60 text-[#f3e5ab] text-xs font-semibold px-3 py-1 rounded shadow-md backdrop-blur-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Signature Fresh Batch</span>
                  </div>

                  {/* Floating Price & Weight tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                    <div>
                      <h4 className="text-lg font-bold font-serif-luxury text-amber-100">
                        {activeItem === 'jalebi' && 'Desi Ghee Kesar Jalebi'}
                        {activeItem === 'gathiya' && 'Vanela Gathiya & Fafda'}
                        {activeItem === 'kaju' && 'Royal Shahi Kaju Katli'}
                      </h4>
                      <p className="text-xs text-amber-200/80">
                        {activeItem === 'jalebi' && 'Served hot & crispy with Iranian Saffron'}
                        {activeItem === 'gathiya' && 'With Papaya Sambharo & Kadhi'}
                        {activeItem === 'kaju' && '100% Cashews with Pure Silver Vark'}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-amber-300 block font-light">Starting from</span>
                      <span className="text-xl font-bold font-mono text-[#f3e5ab] tabular-nums">
                        {activeItem === 'jalebi' && '₹140'}
                        {activeItem === 'gathiya' && '₹110'}
                        {activeItem === 'kaju' && '₹260'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Interactive Item Switcher Tabs */}
                <div className="mt-4 grid grid-cols-3 gap-2 bg-[#280408] p-1.5 rounded-lg border border-[#d4af37]/20">
                  <button
                    onClick={() => setActiveItem('jalebi')}
                    className={`py-2 px-1 text-xs font-semibold rounded transition-all text-center cursor-pointer ${
                      activeItem === 'jalebi'
                        ? 'bg-[#d4af37] text-[#3a080e] shadow-sm'
                        : 'text-amber-200/70 hover:text-white'
                    }`}
                  >
                    Kesar Jalebi
                  </button>
                  <button
                    onClick={() => setActiveItem('gathiya')}
                    className={`py-2 px-1 text-xs font-semibold rounded transition-all text-center cursor-pointer ${
                      activeItem === 'gathiya'
                        ? 'bg-[#d4af37] text-[#3a080e] shadow-sm'
                        : 'text-amber-200/70 hover:text-white'
                    }`}
                  >
                    Vanela Gathiya
                  </button>
                  <button
                    onClick={() => setActiveItem('kaju')}
                    className={`py-2 px-1 text-xs font-semibold rounded transition-all text-center cursor-pointer ${
                      activeItem === 'kaju'
                        ? 'bg-[#d4af37] text-[#3a080e] shadow-sm'
                        : 'text-amber-200/70 hover:text-white'
                    }`}
                  >
                    Kaju Katli
                  </button>
                </div>

                {/* Subtext info */}
                <div className="mt-3 text-center">
                  <p className="text-[11px] text-amber-200/60">
                    Prepared daily from 5:30 AM at our Amin Marg store. Doorstep delivery available across Rajkot.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Full-width 4-Column Proof & Statistics Strip (adhering to spatial rules: below hero split) */}
        <div className="mt-12 pt-8 border-t border-[#d4af37]/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-3">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#d4af37] font-mono tabular-nums">1000+</span>
            <span className="block text-xs uppercase tracking-wider text-amber-200/80 mt-1">Daily Happy Customers</span>
            <span className="text-[11px] text-amber-300/60 block">In-store & Online</span>
          </div>

          <div className="p-3">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#d4af37] font-mono tabular-nums">100%</span>
            <span className="block text-xs uppercase tracking-wider text-amber-200/80 mt-1">Pure Singtel & Cow Ghee</span>
            <span className="text-[11px] text-amber-300/60 block">Zero palm oil adulteration</span>
          </div>

          <div className="p-3">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#d4af37] font-mono tabular-nums">35+</span>
            <span className="block text-xs uppercase tracking-wider text-amber-200/80 mt-1">Artisanal Farsan Varieties</span>
            <span className="text-[11px] text-amber-300/60 block">Authentic Gujarati taste</span>
          </div>

          <div className="p-3">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#d4af37] font-mono tabular-nums">4.9★</span>
            <span className="block text-xs uppercase tracking-wider text-amber-200/80 mt-1">Trusted Local Brand</span>
            <span className="text-[11px] text-amber-300/60 block">Amin Marg, Rajkot</span>
          </div>
        </div>

      </div>
    </section>
  );
}

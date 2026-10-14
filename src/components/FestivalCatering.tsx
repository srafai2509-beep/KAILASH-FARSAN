import { useState } from 'react';
import { FESTIVAL_PACKAGES } from '../data/products';
import { Sparkles, Users, Calendar, Calculator, Check, ArrowRight, MessageSquare } from 'lucide-react';

export function FestivalCatering() {
  // Interactive Catering Calculator state
  const [guestCount, setGuestCount] = useState<number>(100);
  const [eventType, setEventType] = useState<string>('Wedding & Reception');
  const [selectedSweetOption, setSelectedSweetOption] = useState<'standard' | 'premium' | 'royal'>('premium');
  const [includeLiveCounter, setIncludeLiveCounter] = useState<boolean>(true);

  // Calculations
  // Standard: 100g sweet + 120g farsan per guest
  // Premium: 150g sweet + 150g farsan per guest
  // Royal: 200g sweet (Kaju / Dry fruit) + 200g farsan + sambharo
  const perGuestSweetKg = selectedSweetOption === 'standard' ? 0.10 : selectedSweetOption === 'premium' ? 0.15 : 0.20;
  const perGuestFarsanKg = selectedSweetOption === 'standard' ? 0.12 : selectedSweetOption === 'premium' ? 0.15 : 0.20;

  const totalSweetKg = Math.round(guestCount * perGuestSweetKg);
  const totalFarsanKg = Math.round(guestCount * perGuestFarsanKg);

  const sweetRatePerKg = selectedSweetOption === 'standard' ? 450 : selectedSweetOption === 'premium' ? 750 : 1100;
  const farsanRatePerKg = 380;

  const liveCounterCost = includeLiveCounter ? Math.min(5000 + guestCount * 25, 20000) : 0;
  const estimatedTotal = Math.round(
    totalSweetKg * sweetRatePerKg + totalFarsanKg * farsanRatePerKg + liveCounterCost
  );

  const whatsappInquiryUrl = `https://wa.me/919016100004?text=${encodeURIComponent(
    `Namaste New Kailash Mart! I would like to inquire about Festival/Wedding Catering for ${guestCount} guests.\nEvent: ${eventType}\nSweet Tier: ${selectedSweetOption.toUpperCase()}\nEstimated Sweets: ${totalSweetKg} kg\nEstimated Farsan: ${totalFarsanKg} kg\nLive Karigar Counter: ${
      includeLiveCounter ? 'Yes' : 'No'
    }\nEstimated Budget: ₹${estimatedTotal.toLocaleString('en-IN')}.\nPlease share tasting details and quote.`
  )}`;

  return (
    <section id="festivals" className="py-16 lg:py-24 bg-[#3a080e] text-white relative overflow-hidden">
      {/* Background Motifs */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#e05a12]/20 via-[#d4af37]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-3">
            <span>તહેવાર અને પ્રસંગ વિશેષ</span>
            <span aria-hidden="true" className="text-amber-300/40">·</span>
            <span>Celebration & Bulk Catering</span>
            <span aria-hidden="true" className="text-amber-300/40">·</span>
            <span>Amin Marg Rajkot</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif-luxury text-white tracking-tight text-balance">
            Festive Gift Boxes & Wedding Farsan Banquets
          </h2>
          <p className="mt-3 text-base text-amber-100/90 leading-relaxed font-light">
            From the grand Dussehra Fafda-Jalebi rush to Diwali corporate executive hampers and live wedding Vanela Gathiya stations.
          </p>
        </div>

        {/* 4 Festival Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {FESTIVAL_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-2xl bg-[#4a0e17]/70 border border-[#d4af37]/30 hover:border-[#d4af37] p-5 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 bg-black/40">
                  <img
                    src={pkg.image}
                    alt={pkg.festivalName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute top-2.5 right-2.5 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#d4af37] text-[#3a080e] shadow">
                    {pkg.tag}
                  </span>
                </div>

                <span className="text-xs text-amber-300/80 block mb-1 font-medium">
                  {pkg.subtitle}
                </span>
                <h3 className="text-base font-bold font-serif-luxury text-amber-100 group-hover:text-white transition-colors">
                  {pkg.festivalName}
                </h3>
                <p className="mt-2 text-xs text-amber-200/80 line-clamp-2 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="mt-3 pt-3 border-t border-[#d4af37]/20 space-y-1">
                  {pkg.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-amber-200/90">
                      <Check className="w-3 h-3 text-[#d4af37] shrink-0" />
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#d4af37]/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-amber-300/70 block">Starting from</span>
                  <span className="text-base font-bold font-mono text-[#f3e5ab] tabular-nums">
                    ₹{pkg.startingPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <a
                  href={`https://wa.me/919016100004?text=${encodeURIComponent(
                    `Hello New Kailash, I want to book/order the ${pkg.festivalName}. Please share details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#d4af37] text-[#3a080e] font-bold text-xs rounded hover:bg-[#f3e5ab] transition-colors flex items-center gap-1"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Wedding & Bulk Catering Calculator */}
        <div className="rounded-3xl bg-gradient-to-br from-[#2a060a] to-[#4a0e17] border border-[#d4af37]/40 p-6 sm:p-10 shadow-2xl">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-[#d4af37]/20">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-1">
                <Calculator className="w-4 h-4" />
                <span>Instant Estimator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif-luxury text-white">
                Live Wedding & Event Catering Calculator
              </h3>
              <p className="text-xs sm:text-sm text-amber-200/80 mt-1 max-w-2xl font-light">
                Planning an auspicious wedding, reception, housewarming or corporate event in Rajkot? Calculate required quantities and estimate costs instantly.
              </p>
            </div>

            <div className="px-4 py-2 bg-[#d4af37]/20 border border-[#d4af37]/40 rounded-xl text-center">
              <span className="text-[11px] text-amber-200 block uppercase tracking-wider">Tasting Sessions</span>
              <span className="text-xs font-bold text-[#f3e5ab]">Complimentary at Amin Marg</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Inputs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Event Type */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-amber-200 block mb-2">
                  Select Occasion:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Wedding & Reception',
                    'Diwali Corporate Gifts',
                    'Sangeet / Mehendi',
                    'Vastu / Housewarming',
                    'Dussehra Morning',
                    'Family Get-Together',
                  ].map((evt) => (
                    <button
                      key={evt}
                      onClick={() => setEventType(evt)}
                      className={`py-2 px-3 text-xs font-medium rounded-lg text-left transition-all cursor-pointer ${
                        eventType === evt
                          ? 'bg-[#d4af37] text-[#3a080e] font-bold shadow-sm'
                          : 'bg-[#3a080e]/80 text-amber-100 hover:bg-[#58111a] border border-[#d4af37]/20'
                      }`}
                    >
                      {evt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Count Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-amber-200 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Estimated Guest Count:</span>
                  </label>
                  <span className="text-lg font-bold font-mono text-[#f3e5ab] tabular-nums">
                    {guestCount} Guests
                  </span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="1500"
                  step="25"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full accent-[#d4af37] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-amber-200/50 mt-1 font-mono">
                  <span>25 Guests</span>
                  <span>500 Guests</span>
                  <span>1,500+ Guests</span>
                </div>
              </div>

              {/* Sweet Selection Tier */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-amber-200 block mb-2">
                  Mithai & Sweet Tier:
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    onClick={() => setSelectedSweetOption('standard')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedSweetOption === 'standard'
                        ? 'border-[#d4af37] bg-[#d4af37]/20 text-white'
                        : 'border-[#d4af37]/20 bg-[#3a080e]/60 text-amber-200/80 hover:bg-[#58111a]'
                    }`}
                  >
                    <div className="font-bold text-xs">Traditional Standard</div>
                    <div className="text-[11px] text-amber-300/80 mt-0.5">Mohanthal, Peda, Jalebi</div>
                  </button>

                  <button
                    onClick={() => setSelectedSweetOption('premium')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedSweetOption === 'premium'
                        ? 'border-[#d4af37] bg-[#d4af37]/20 text-white'
                        : 'border-[#d4af37]/20 bg-[#3a080e]/60 text-amber-200/80 hover:bg-[#58111a]'
                    }`}
                  >
                    <div className="font-bold text-xs">Royal Kaju Katli</div>
                    <div className="text-[11px] text-amber-300/80 mt-0.5">Kaju Katli + Kesar Jalebi</div>
                  </button>

                  <button
                    onClick={() => setSelectedSweetOption('royal')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedSweetOption === 'royal'
                        ? 'border-[#d4af37] bg-[#d4af37]/20 text-white'
                        : 'border-[#d4af37]/20 bg-[#3a080e]/60 text-amber-200/80 hover:bg-[#58111a]'
                    }`}
                  >
                    <div className="font-bold text-xs">Imperial Dry Fruit</div>
                    <div className="text-[11px] text-amber-300/80 mt-0.5">Anjeer, Almond & Pista</div>
                  </button>
                </div>
              </div>

              {/* Live Karigar Counter Checkbox */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#3a080e]/60 border border-[#d4af37]/20">
                <input
                  type="checkbox"
                  id="liveCounter"
                  checked={includeLiveCounter}
                  onChange={(e) => setIncludeLiveCounter(e.target.checked)}
                  className="w-4 h-4 accent-[#d4af37] rounded cursor-pointer"
                />
                <label htmlFor="liveCounter" className="text-xs text-amber-100 cursor-pointer">
                  <strong className="text-[#f3e5ab]">Include Live Karigar Counter:</strong> Fresh piping hot Vanela Gathiya & Kesar Jalebi fried live in brass kadhais at your event venue.
                </label>
              </div>

            </div>

            {/* Right Output Summary Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#1e0306] border border-[#d4af37]/50 p-6 text-white shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#d4af37]/20">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                    Catering Estimate
                  </span>
                  <span className="text-xs font-mono text-amber-300/70">Rajkot Region</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-amber-200/80">Occasion:</span>
                    <span className="font-semibold text-white">{eventType}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-amber-200/80">Guest Count:</span>
                    <span className="font-mono font-bold text-amber-100 tabular-nums">{guestCount} persons</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-amber-200/80">Recommended Farsan:</span>
                    <span className="font-mono font-bold text-[#f3e5ab] tabular-nums">~{totalFarsanKg} kg</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-amber-200/80">Recommended Mithai:</span>
                    <span className="font-mono font-bold text-[#f3e5ab] tabular-nums">~{totalSweetKg} kg</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-amber-200/80">Live Kitchen Setup:</span>
                    <span className="font-semibold text-amber-100">
                      {includeLiveCounter ? 'Included' : 'Standard Delivery'}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#d4af37]/30">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs uppercase tracking-wider text-amber-200/70">Estimated Budget</span>
                    <div className="text-right">
                      <span className="text-2xl font-extrabold font-mono text-[#f3e5ab] tabular-nums">
                        ₹{estimatedTotal.toLocaleString('en-IN')}
                      </span>
                      <span className="block text-[10px] text-amber-300/60 font-light">
                        (~₹{Math.round(estimatedTotal / guestCount)} / person)
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] text-[#3a080e] font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Lock Slot via WhatsApp</span>
                </a>

                <p className="text-[11px] text-amber-300/50 text-center font-light">
                  Exact rates may vary by custom menu selection. Our catering manager will contact you within 2 hours.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

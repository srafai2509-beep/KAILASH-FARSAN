import { MessageSquare, Phone, MapPin, Truck, CheckCircle } from 'lucide-react';

interface OnlineOrderingProps {
  onOpenCart: () => void;
}

export function OnlineOrdering({ onOpenCart }: OnlineOrderingProps) {
  const storePhone = '+919016100004';
  const whatsappUrl = `https://wa.me/919016100004?text=${encodeURIComponent(
    'Namaste New Kailash Mart! I would like to order fresh farsan and sweets for delivery in Rajkot. Please share today’s fresh batches.'
  )}`;

  return (
    <section className="py-16 lg:py-24 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e05a12] mb-3">
            <span>ઓનલાઇન ઓર્ડર</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Fast Rajkot Delivery</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Express Kitchen Dispatch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3a080e] font-serif-luxury tracking-tight text-balance">
            Hot & Fresh At Your Doorstep
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed font-light">
            Enjoy your favourite Vanela Gathiya, Fafda, and Sweets without leaving home. Order via your preferred food app or directly through WhatsApp for fastest priority packing.
          </p>
        </div>

        {/* 3 Main Ordering Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Channel 1: WhatsApp Quick Order (Recommended) */}
          <div className="rounded-2xl bg-gradient-to-b from-emerald-950 to-emerald-900 text-white p-7 shadow-xl border border-emerald-700/50 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded border border-emerald-400/30">
                  Direct Store Dispatch
                </span>
                <MessageSquare className="w-6 h-6 text-emerald-400" />
              </div>

              <h3 className="text-xl font-bold font-serif-luxury text-white mb-2">
                Order via WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed font-light mb-4">
                Chat directly with our Amin Marg store manager. Customize portions, request extra spicy kadhi or papaya sambharo, and receive instant bill breakdown.
              </p>

              <div className="space-y-1.5 text-xs text-emerald-200/90 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Fresh hot batch packaging</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>UPI / Google Pay accepted</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
              <button
                onClick={onOpenCart}
                className="w-full py-2.5 bg-emerald-800/80 hover:bg-emerald-700/80 text-emerald-100 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Build Order In Cart First
              </button>
            </div>
          </div>

          {/* Channel 2: Swiggy */}
          <div className="rounded-2xl bg-white border border-stone-200/90 p-7 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-orange-50 text-orange-700 px-2.5 py-0.5 rounded border border-orange-200">
                  Food Delivery App
                </span>
                <div className="w-8 h-8 rounded-full bg-[#FC8019] text-white flex items-center justify-center font-bold text-xs shadow">
                  S
                </div>
              </div>

              <h3 className="text-xl font-bold font-serif-luxury text-[#3a080e] mb-2">
                Order on Swiggy
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light mb-4">
                Available for express delivery across Amin Marg, Kalawad Road, Yagnik Road, and all central Rajkot neighborhoods with live GPS driver tracking.
              </p>

              <div className="space-y-1.5 text-xs text-stone-600 mb-6">
                <div className="flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5 text-[#FC8019]" />
                  <span>Average delivery in 25-35 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#FC8019]" />
                  <span>Contactless doorstep drop</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.swiggy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#FC8019] hover:bg-[#e06f12] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-all flex items-center justify-center gap-2"
            >
              <span>Find Us on Swiggy</span>
            </a>
          </div>

          {/* Channel 3: Zomato */}
          <div className="rounded-2xl bg-white border border-stone-200/90 p-7 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-red-50 text-red-700 px-2.5 py-0.5 rounded border border-red-200">
                  Food Delivery App
                </span>
                <div className="w-8 h-8 rounded-full bg-[#E23744] text-white flex items-center justify-center font-bold text-xs shadow">
                  Z
                </div>
              </div>

              <h3 className="text-xl font-bold font-serif-luxury text-[#3a080e] mb-2">
                Order on Zomato
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light mb-4">
                Browse our complete menu ratings, customer reviews, and order fresh morning farsan with exciting ongoing platform dining offers.
              </p>

              <div className="space-y-1.5 text-xs text-stone-600 mb-6">
                <div className="flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5 text-[#E23744]" />
                  <span>Live delivery status updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#E23744]" />
                  <span>Verified customer ratings</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.zomato.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#E23744] hover:bg-[#cb2e3a] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-all flex items-center justify-center gap-2"
            >
              <span>Find Us on Zomato</span>
            </a>
          </div>

        </div>

        {/* Store Pickup Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#3a080e] text-[#d4af37] flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#3a080e] font-serif-luxury">
                Passing by Amin Marg? Use Quick Counter Pickup!
              </h4>
              <p className="text-xs text-stone-600 mt-0.5">
                Call ahead on <span className="font-mono font-semibold">+91 90161 00004</span>. We’ll keep your hot gathiya, fafda, and sweets packed and ready when you pull up.
              </p>
            </div>
          </div>

          <a
            href={`tel:${storePhone}`}
            className="px-5 py-2.5 bg-[#3a080e] hover:bg-[#58111a] text-amber-100 font-semibold text-xs rounded-lg transition-colors flex items-center gap-2 shrink-0"
          >
            <Phone className="w-4 h-4 text-[#d4af37]" />
            <span>Call for Quick Pickup</span>
          </a>
        </div>

      </div>
    </section>
  );
}

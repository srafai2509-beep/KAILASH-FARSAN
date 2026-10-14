import { MapPin, Phone, Clock, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#2a0509] text-white pt-16 pb-12 border-t border-[#d4af37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Heritage */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-royal text-[#d4af37]">
              New Kailash
            </h3>
            <span className="text-xs text-amber-200/80 block font-medium -mt-2">
              Farshan & Sweet Mart · Rajkot
            </span>
            <p className="text-xs text-stone-300 leading-relaxed font-light">
              Crafting authentic Kathiyawadi Vanela Gathiya, crispy Fafda, and 100% pure Desi Ghee sweets in the heart of Rajkot with traditional recipes and medical-grade kitchen cleanliness.
            </p>
            <div className="text-xs text-[#d4af37] font-royal">
              શુદ્ધતા અને સ્વાદનું અવિરત સરનામું
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a href="#products" className="hover:text-amber-200 transition-colors">
                  Farsan & Sweets Catalog
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-amber-200 transition-colors">
                  Pure Singtel & Cow Ghee Heritage
                </a>
              </li>
              <li>
                <a href="#festivals" className="hover:text-amber-200 transition-colors">
                  Festival Gift Hampers
                </a>
              </li>
              <li>
                <a href="#festivals" className="hover:text-amber-200 transition-colors">
                  Wedding & Bulk Catering Estimator
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-200 transition-colors">
                  Rajkot Customer Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-200 transition-colors">
                  Store Directions & Google Maps
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Store Timings & Hygiene */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
              Business Hours & Fresh Batches
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Monday to Sunday:</span>
                  <span>6:00 AM – 10:30 PM (All 7 Days)</span>
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-amber-200/90 leading-relaxed">
                <strong>Sunday Morning Rush:</strong> Fresh Vanela Gathiya & Jalebi cauldrons ready from 5:30 AM. Pre-orders recommended.
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Social Presence */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
              Amin Marg Landmark
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Near Payal Medical, Amin Marg, Rajkot, Gujarat 360001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href="tel:+919016100004" className="font-mono font-bold text-white hover:underline">
                  +91 90161 00004
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>orders@newkailashrajkot.com</span>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 text-[11px] rounded bg-white/10 hover:bg-[#d4af37] hover:text-[#3a080e] transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 text-[11px] rounded bg-white/10 hover:bg-[#d4af37] hover:text-[#3a080e] transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://wa.me/919016100004"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 text-[11px] rounded bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Gujarati Pride */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} New Kailash Farshan & Sweet Mart. All Rights Reserved. Rajkot, Gujarat.</p>
          <div className="flex items-center gap-1.5 text-stone-300">
            <span>Prepared with true Saurashtri love</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
            <span>and pure ingredients</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

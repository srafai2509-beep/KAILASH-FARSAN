import { useState, useEffect } from 'react';
import { ShoppingBag, Phone, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartItemCount: number;
  onOpenCart: () => void;
  onOpenInquiry: () => void;
}

export function Navbar({ cartItemCount, onOpenCart }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#3a080e]/95 backdrop-blur-md shadow-lg border-b border-[#d4af37]/20 py-3'
            : 'bg-[#3a080e] border-b border-[#d4af37]/20 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element wordmark) */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 font-royal hover:text-[#d4af37] transition-colors"
          >
            <span className="text-[#d4af37]">New Kailash</span>{' '}
            <span className="text-amber-100 font-sans text-base sm:text-lg font-medium">Farshan & Sweets</span>
          </a>

          {/* Zone 2: 4-5 single-line text links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-amber-100/90">
            <a
              href="#products"
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0"
            >
              Farsan & Sweets
            </a>
            <a
              href="#specialties"
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0"
            >
              Our Heritage
            </a>
            <a
              href="#festivals"
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0"
            >
              Festival & Catering
            </a>
            <a
              href="#reviews"
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0"
            >
              Rajkot Reviews
            </a>
            <a
              href="#contact"
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0"
            >
              Store Location
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+919016100004"
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-amber-200 hover:text-white transition-colors"
              title="Call store directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="font-mono tabular-nums">+91 90161 00004</span>
            </a>

            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#3a080e] bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] rounded hover:opacity-95 shadow-md transition-all whitespace-nowrap shrink-0 cursor-pointer"
              aria-label={`View cart with ${cartItemCount} items`}
            >
              <ShoppingBag className="w-4 h-4 text-[#3a080e]" />
              <span>Cart</span>
              <span className="ml-1 px-1.5 py-0.2 bg-[#3a080e] text-[#f3e5ab] text-[11px] font-bold rounded-sm font-mono tabular-nums">
                {cartItemCount}
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-amber-200 hover:text-white cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] z-30 bg-[#3a080e]/98 border-b border-[#d4af37]/30 px-6 py-5 shadow-2xl transition-all">
          <div className="flex flex-col space-y-4 text-base font-medium text-amber-100">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#d4af37]"
            >
              Farsan & Sweets Menu
            </a>
            <a
              href="#specialties"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#d4af37]"
            >
              Our Heritage & Quality
            </a>
            <a
              href="#festivals"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#d4af37]"
            >
              Festival Hampers & Catering
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#d4af37]"
            >
              Rajkot Customer Reviews
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#d4af37]"
            >
              Visit Amin Marg Store
            </a>

            <div className="pt-3 border-t border-[#d4af37]/20 flex items-center justify-between">
              <a
                href="tel:+919016100004"
                className="flex items-center gap-2 text-sm text-[#d4af37] font-semibold"
              >
                <Phone className="w-4 h-4" />
                <span className="font-mono tabular-nums">+91 90161 00004</span>
              </a>
              <span className="text-xs text-amber-200/70">6:00 AM - 10:30 PM</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

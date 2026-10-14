import { useState } from 'react';
import { REVIEWS } from '../data/reviews';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from 'lucide-react';

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const current = REVIEWS[currentIndex];

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e05a12] mb-3">
            <span>ગ્રાહકોનો વિશ્વાસ</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Voices of Rajkot</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>4.9 / 5.0 Rating</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3a080e] font-serif-luxury tracking-tight text-balance">
            Loved by Rajkot’s Discerning Food Connoisseurs
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed font-light">
            Real feedback from local residents, doctors, and celebratory families who make New Kailash their first choice for authentic farsan and pure sweets.
          </p>
        </div>

        {/* Carousel / Spotlight Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-white border border-stone-200/90 p-8 sm:p-12 shadow-xl">
            
            {/* Top Row: Stars and Verified customer indicator */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-1 text-[#d4af37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="ml-2 text-xs font-bold text-stone-700 font-mono tabular-nums">5.0 / 5.0</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-700 font-medium bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Verified Rajkot Customer</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="relative mb-8">
              <Quote className="absolute -top-4 -left-4 w-10 h-10 text-stone-200 pointer-events-none -z-0" />
              <p className="relative z-10 text-base sm:text-xl text-stone-800 font-serif-luxury italic leading-relaxed">
                "{current.reviewText}"
              </p>
            </div>

            {/* Author Footer & Carousel Controls */}
            <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-[#3a080e]">
                  {current.author}
                </h4>
                <div className="flex items-center gap-2 text-xs text-stone-500 mt-0.5">
                  <span>{current.roleOrLocation}</span>
                  <span aria-hidden="true">·</span>
                  <span>Ordered {current.highlightItem}</span>
                  <span aria-hidden="true">·</span>
                  <span>{current.date}</span>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevReview}
                  className="p-2.5 rounded-full border border-stone-200 text-stone-600 hover:text-[#3a080e] hover:bg-stone-50 transition-colors cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono text-stone-400 px-2 tabular-nums">
                  0{currentIndex + 1} / 0{REVIEWS.length}
                </span>
                <button
                  onClick={nextReview}
                  className="p-2.5 rounded-full border border-stone-200 text-stone-600 hover:text-[#3a080e] hover:bg-stone-50 transition-colors cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Quick Review Highlights Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-xl bg-white/80 border border-stone-200/60 shadow-xs">
              <span className="text-xs uppercase tracking-wider text-stone-500 block mb-1">Taste & Flavor</span>
              <strong className="text-sm font-bold text-[#3a080e]">Unrivaled Authenticity</strong>
            </div>
            <div className="p-4 rounded-xl bg-white/80 border border-stone-200/60 shadow-xs">
              <span className="text-xs uppercase tracking-wider text-stone-500 block mb-1">Kitchen Hygiene</span>
              <strong className="text-sm font-bold text-emerald-700">100% Medical Grade</strong>
            </div>
            <div className="p-4 rounded-xl bg-white/80 border border-stone-200/60 shadow-xs">
              <span className="text-xs uppercase tracking-wider text-stone-500 block mb-1">Counter Service</span>
              <strong className="text-sm font-bold text-[#e05a12]">Rapid 3-Min Packing</strong>
            </div>
            <div className="p-4 rounded-xl bg-white/80 border border-stone-200/60 shadow-xs">
              <span className="text-xs uppercase tracking-wider text-stone-500 block mb-1">Staff Hospitality</span>
              <strong className="text-sm font-bold text-[#3a080e]">Courteous & Warm</strong>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

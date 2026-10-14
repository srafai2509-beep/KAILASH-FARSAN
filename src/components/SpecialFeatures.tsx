import { 
  Flame, 
  ShieldCheck, 
  Sparkles, 
  ChefHat, 
  Zap, 
  Gift 
} from 'lucide-react';

export function SpecialFeatures() {
  const features = [
    {
      icon: Flame,
      title: 'Fresh Daily Preparation',
      gujarati: 'રોજ સવારે તાજું નિર્માણ',
      description: 'Our cauldrons are lit at 4:30 AM every single morning. Vanela Gathiya, Fafda, and Jalebi are fried in real-time right before your eyes.',
    },
    {
      icon: ShieldCheck,
      title: '100% Hygienic Kitchen',
      gujarati: 'સંપૂર્ણ સ્વચ્છ અને પારદર્શક રસોડું',
      description: 'Open viewing kitchen with medical-grade stainless steel surfaces, continuous oil purity testing, and sterile food handling.',
    },
    {
      icon: Sparkles,
      title: 'Premium Ingredients Only',
      gujarati: 'શુદ્ધ સીંગતેલ અને ગીર ગાયનું દેશી ઘી',
      description: 'Zero palm oil, zero chemical food colorings. We use pure cold-pressed Saurashtra groundnut oil, A2 cow ghee, and real saffron.',
    },
    {
      icon: ChefHat,
      title: 'Authentic Kathiyawadi Taste',
      gujarati: 'અસલ રાજકોટી સ્વાદ અને બનાવટ',
      description: 'Recipes perfected over generations with hand-ground whole spices, fresh ajwain, black pepper, and balanced natural jaggery.',
    },
    {
      icon: Zap,
      title: 'Express Quick Service',
      gujarati: 'ઝડપી કાઉન્ટર સર્વિસ અને પેકિંગ',
      description: 'Streamlined counter workflow so you never wait long, even during peak Sunday morning rushes and festive occasions.',
    },
    {
      icon: Gift,
      title: 'Festival & Bulk Orders',
      gujarati: 'તહેવાર અને પ્રસંગના જથ્થાબંધ ઓર્ડર',
      description: 'Custom royal gift boxes, wedding shagun hampers, and NRI airtight vacuum packaging that stays fresh during international transit.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#faf7f2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e05a12] mb-3">
            <span>અમારી વિશેષતા</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Why Rajkot Trusts New Kailash</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Uncompromising Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3a080e] font-serif-luxury tracking-tight text-balance">
            Our 6 Pillars of Taste & Hygiene
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed font-light">
            Every bite is crafted with respect for time-honored Kathiyawadi culinary heritage and modern hygiene standards.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#e05a12] flex items-center justify-center shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-stone-400 font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="text-xs text-[#d4af37] font-royal font-semibold block mb-1">
                    {feat.gujarati}
                  </span>
                  <h3 className="text-lg font-bold text-[#3a080e] font-serif-luxury mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

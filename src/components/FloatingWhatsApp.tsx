import { MessageSquare } from 'lucide-react';

export function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/919016100004?text=${encodeURIComponent(
    'Namaste New Kailash Mart! I would like to order fresh farsan / sweet boxes from your Amin Marg store.'
  )}`;

  return (
    <aside
      aria-label="Direct WhatsApp Ordering Support"
      className="fixed bottom-5 right-5 z-40 group"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-emerald-400/50"
        aria-label="Chat on WhatsApp with New Kailash Mart at +91 90161 00004"
      >
        <span className="relative flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-200"></span>
        </span>
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline-block font-sans tracking-wide">
          WhatsApp Order (+91 90161 00004)
        </span>
      </a>
    </aside>
  );
}

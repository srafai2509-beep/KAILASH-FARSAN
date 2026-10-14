import { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Send, CheckCircle2, Navigation } from 'lucide-react';
import confetti from 'canvas-confetti';

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    occasion: 'Wedding & Reception Catering',
    estimatedGuests: '100',
    eventDate: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#d4af37', '#e05a12', '#58111a', '#f3e5ab'],
      });
    } catch {
      // safe fallback
    }

    // Optional direct WhatsApp redirect
    const message = `Namaste New Kailash Mart! New Inquiry:\nName: ${formData.fullName}\nPhone: ${formData.phone}\nOccasion: ${formData.occasion}\nGuests: ${formData.estimatedGuests}\nDate: ${formData.eventDate || 'Not specified'}\nNotes: ${formData.notes || 'None'}`;
    const whatsappUrl = `https://wa.me/919016100004?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e05a12] mb-3">
            <span>સંપર્ક અને મુલાકાત</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Visit Us on Amin Marg</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Open All 7 Days</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3a080e] font-serif-luxury tracking-tight text-balance">
            Visit Our Store or Send an Inquiry
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed font-light">
            Conveniently situated near Payal Medical on Amin Marg, Rajkot. Stop by for hot morning farsan or talk to us for bespoke festive orders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Store Details & Google Maps */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Store Information Card */}
            <div className="p-7 rounded-2xl bg-[#faf7f2] border border-stone-200/90 shadow-sm">
              <span className="text-xs uppercase tracking-widest text-[#e05a12] font-semibold block mb-1">
                Landmark Store Location
              </span>
              <h3 className="text-2xl font-bold font-serif-luxury text-[#3a080e] mb-4">
                New Kailash Farshan & Sweet Mart
              </h3>

              <div className="space-y-4 text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#e05a12] shrink-0 mt-0.5" />
                  <div>
                    <strong>Store Address:</strong>
                    <p className="text-stone-600 mt-0.5">
                      Near Payal Medical, Amin Marg, Rajkot, Gujarat – 360001
                    </p>
                    <span className="text-xs text-stone-500 font-light">
                      (Opposite prominent residential and business promenade)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#d4af37] shrink-0" />
                  <div>
                    <strong>Direct Hotline:</strong>{' '}
                    <a
                      href="tel:+919016100004"
                      className="text-[#3a080e] font-bold font-mono hover:underline ml-1"
                    >
                      +91 90161 00004
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <strong>Operating Hours:</strong>{' '}
                    <span className="text-stone-600 ml-1">
                      6:00 AM – 10:30 PM (Monday to Sunday)
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Direct Call & WhatsApp */}
              <div className="mt-6 pt-5 border-t border-stone-200 grid grid-cols-2 gap-3">
                <a
                  href="tel:+919016100004"
                  className="py-2.5 px-3 bg-[#3a080e] text-white hover:bg-[#58111a] text-xs font-semibold rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <span>Call Store</span>
                </a>

                <a
                  href="https://wa.me/919016100004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-emerald-600 text-white hover:bg-emerald-500 text-xs font-semibold rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed / Interactive Location Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-sm h-64 bg-stone-100 flex-1">
              <iframe
                title="Google Map location of New Kailash Farshan & Sweet Mart on Amin Marg Rajkot"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.828698188166!2d70.782012!3d22.284241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cba000000001%3A0x1!2sAmin%20Marg%2C%20Rajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-110"
              />

              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-md border border-stone-200 flex items-center gap-2">
                <Navigation className="w-3.5 h-3.5 text-[#e05a12]" />
                <span className="text-[11px] font-semibold text-[#3a080e]">
                  Amin Marg, Rajkot (Near Payal Medical)
                </span>
                <a
                  href="https://maps.google.com/?q=Amin+Marg+Rajkot+Near+Payal+Medical"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-blue-600 underline font-medium ml-1"
                >
                  Open in Maps
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#faf7f2] border border-stone-200/90 p-7 sm:p-9 shadow-sm">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block mb-1">
                Direct Communication
              </span>
              <h3 className="text-2xl font-bold font-serif-luxury text-[#3a080e] mb-2">
                Send an Inquiry or Order Request
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6 font-light">
                Fill out the details below. Our team will verify kitchen availability and reply right back via WhatsApp or phone.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900 font-serif-luxury">
                    Thank You, {formData.fullName}!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed font-light">
                    Your inquiry has been logged. We are also opening WhatsApp to connect you directly with our Amin Marg store desk.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2 text-xs font-semibold text-emerald-800 border border-emerald-300 rounded hover:bg-emerald-100 transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Patel"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-hidden focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 font-mono focus:outline-hidden focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">
                        Inquiry / Occasion Type
                      </label>
                      <select
                        value={formData.occasion}
                        onChange={(e) =>
                          setFormData({ ...formData, occasion: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-hidden focus:border-[#d4af37]"
                      >
                        <option>Wedding & Reception Catering</option>
                        <option>Festival Sweet Boxes (Diwali / Dussehra)</option>
                        <option>Corporate Gift Hampers</option>
                        <option>Sunday Breakfast Bulk Order</option>
                        <option>NRI Travel Vacuum Packing</option>
                        <option>General Menu Question</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">
                        Expected Date of Event
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) =>
                          setFormData({ ...formData, eventDate: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-hidden focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1">
                      Estimated Guests / Quantity
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 150 guests or 25 kg sweet boxes"
                      value={formData.estimatedGuests}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          estimatedGuests: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-hidden focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1">
                      Special Requests / Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention any specific sweets, Jain preparation requirements, or pickup timing..."
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-hidden focus:border-[#d4af37]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-[#3a080e] to-[#58111a] hover:from-[#58111a] hover:to-[#7a1b26] text-[#f3e5ab] font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#d4af37]" />
                    <span>Submit & Connect on WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-stone-500 text-center font-light">
                    Direct call assistance available 6:00 AM – 10:30 PM at <strong className="text-stone-800">+91 90161 00004</strong>
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

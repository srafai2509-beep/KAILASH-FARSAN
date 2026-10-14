import { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageSquare, Check, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, weight: string, delta: number) => void;
  onRemoveItem: (productId: string, weight: string) => void;
  onClearCart: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryMode, setDeliveryMode] = useState<'pickup' | 'delivery'>('pickup');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [extraSambharo, setExtraSambharo] = useState(true);
  const [extraChillies, setExtraChillies] = useState(true);
  const [vacuumPacking, setVacuumPacking] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const itemsSubtotal = items.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  );

  const packingCharge = vacuumPacking ? 40 : 0;
  const deliveryCharge = deliveryMode === 'delivery' ? (itemsSubtotal > 600 ? 0 : 40) : 0;
  const finalTotal = itemsSubtotal + packingCharge + deliveryCharge;

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;
    if (!customerName || !customerPhone) {
      alert('Please enter your name and phone number to complete the order.');
      return;
    }

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#e05a12', '#3a080e', '#ffffff'],
      });
    } catch {
      // safe
    }

    setIsOrderPlaced(true);

    const itemListText = items
      .map(
        (it, idx) =>
          `${idx + 1}. ${it.name} (${it.weight}) x ${it.quantity} = ₹${
            it.unitPrice * it.quantity
          }`
      )
      .join('\n');

    const whatsappMessage = `*NEW ORDER - NEW KAILASH FARSHAN & SWEET MART*\n------------------------------\n*Customer Details:*\n• Name: ${customerName}\n• Phone: ${customerPhone}\n• Mode: ${
      deliveryMode === 'pickup'
        ? 'Store Counter Pickup (Amin Marg)'
        : `Home Delivery: ${deliveryAddress}`
    }\n\n*Items Ordered:*\n${itemListText}\n\n*Preferences:*\n• Extra Papaya Sambharo: ${
      extraSambharo ? 'Yes (Included)' : 'Standard'
    }\n• Extra Fried Salted Chillies: ${
      extraChillies ? 'Yes' : 'No'
    }\n• NRI Vacuum Packing: ${vacuumPacking ? 'Yes (+₹40)' : 'No'}\n\n*Bill Summary:*\n• Items Subtotal: ₹${itemsSubtotal}\n• Packing: ₹${packingCharge}\n• Delivery: ${
      deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`
    }\n*TOTAL PAYABLE: ₹${finalTotal}*\n------------------------------\nPlease confirm my fresh batch order and send payment QR code.`;

    const url = `https://wa.me/919016100004?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setTimeout(() => {
      window.open(url, '_blank');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-md bg-[#faf7f2] h-full shadow-2xl flex flex-col justify-between overflow-hidden border-l border-[#d4af37]/30">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#3a080e] text-white flex items-center justify-between border-b border-[#d4af37]/30">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#d4af37]" />
            <h3 className="text-lg font-bold font-serif-luxury text-[#f3e5ab]">
              Your Sweet & Farsan Basket
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close cart drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content area: items list + order customizer */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
          {items.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center p-6 text-stone-500">
              <ShoppingBag className="w-12 h-12 text-stone-300 stroke-[1.5] mb-3" />
              <p className="text-base font-semibold text-stone-700">Your basket is empty</p>
              <p className="text-xs text-stone-500 mt-1 max-w-xs">
                Add some crispy Vanela Gathiya, hot Kesar Jalebi or pure Kaju Katli to experience authentic Rajkoti taste!
              </p>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-stone-500 pb-1 border-b border-stone-200">
                  <span>Selected Items ({items.length})</span>
                  <button
                    onClick={onClearCart}
                    className="text-red-700 hover:underline cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>

                {items.map((item) => (
                  <div
                    key={`${item.productId}-${item.weight}`}
                    className="p-3 bg-white rounded-xl border border-stone-200 shadow-xs flex items-center justify-between gap-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-lg object-cover shrink-0 bg-stone-100"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-[#3a080e] truncate">
                        {item.name}
                      </h4>
                      <div className="text-[11px] text-stone-500 flex items-center gap-1.5">
                        <span className="font-semibold text-stone-700">{item.weight}</span>
                        <span>·</span>
                        <span className="font-mono tabular-nums">₹{item.unitPrice} each</span>
                      </div>
                    </div>

                    {/* Steppers */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.productId, item.weight, -1)
                        }
                        className="w-6 h-6 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>

                      <span className="w-5 text-center text-xs font-bold font-mono tabular-nums">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          onUpdateQuantity(item.productId, item.weight, 1)
                        }
                        className="w-6 h-6 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>

                      <button
                        onClick={() => onRemoveItem(item.productId, item.weight)}
                        className="ml-1 text-stone-400 hover:text-red-600 cursor-pointer"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Accompaniments & Travel Packing Toggles */}
              <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/60 text-xs space-y-2">
                <span className="font-bold text-[#3a080e] block mb-1">
                  Complimentary Gujarati Accompaniments:
                </span>
                <label className="flex items-center gap-2 text-stone-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={extraSambharo}
                    onChange={(e) => setExtraSambharo(e.target.checked)}
                    className="accent-[#d4af37]"
                  />
                  <span>Generous Raw Papaya Sambharo & Besan Kadhi (Free)</span>
                </label>
                <label className="flex items-center gap-2 text-stone-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={extraChillies}
                    onChange={(e) => setExtraChillies(e.target.checked)}
                    className="accent-[#d4af37]"
                  />
                  <span>Salted Fried Green Chillies (Free)</span>
                </label>
                <label className="flex items-center gap-2 text-stone-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={vacuumPacking}
                    onChange={(e) => setVacuumPacking(e.target.checked)}
                    className="accent-[#d4af37]"
                  />
                  <span>Vacuum-Sealed Airtight NRI/Travel Packing (+₹40)</span>
                </label>
              </div>

              {/* Fulfillment Type */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                  Delivery Option:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setDeliveryMode('pickup')}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                      deliveryMode === 'pickup'
                        ? 'bg-[#3a080e] text-[#f3e5ab] border-[#3a080e]'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    Counter Pickup (Amin Marg)
                  </button>
                  <button
                    onClick={() => setDeliveryMode('delivery')}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                      deliveryMode === 'delivery'
                        ? 'bg-[#3a080e] text-[#f3e5ab] border-[#3a080e]'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    Rajkot Doorstep Delivery
                  </button>
                </div>
              </div>

              {/* Customer Details Form */}
              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] font-semibold text-stone-600 block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ketan Shah"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-2.5 py-1.5 text-xs bg-white border border-stone-300 rounded focus:border-[#d4af37] focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-stone-600 block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-2.5 py-1.5 text-xs bg-white border border-stone-300 rounded font-mono focus:border-[#d4af37] focus:outline-hidden"
                    />
                  </div>
                </div>

                {deliveryMode === 'delivery' && (
                  <div>
                    <label className="text-[11px] font-semibold text-stone-600 block mb-1">
                      Delivery Address in Rajkot *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Block B-402, Kalawad Road, Rajkot"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="w-full px-2.5 py-1.5 text-xs bg-white border border-stone-300 rounded focus:border-[#d4af37] focus:outline-hidden"
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Footer & Checkout Action */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 bg-white border-t border-stone-200 space-y-3 shadow-lg">
            <div className="space-y-1.5 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-mono font-medium text-stone-900 tabular-nums">
                  ₹{itemsSubtotal}
                </span>
              </div>

              {vacuumPacking && (
                <div className="flex justify-between">
                  <span>NRI Vacuum Travel Packing</span>
                  <span className="font-mono tabular-nums">₹{packingCharge}</span>
                </div>
              )}

              {deliveryMode === 'delivery' && (
                <div className="flex justify-between">
                  <span>Doorstep Delivery (Rajkot)</span>
                  <span className="font-mono tabular-nums">
                    {deliveryCharge === 0 ? 'FREE (Over ₹600)' : `₹${deliveryCharge}`}
                  </span>
                </div>
              )}

              <div className="pt-2 border-t border-stone-200 flex justify-between text-sm font-bold text-[#3a080e]">
                <span>Total Amount:</span>
                <span className="text-lg font-mono text-[#e05a12] tabular-nums">
                  ₹{finalTotal}
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckoutWhatsApp}
              className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Send Order to WhatsApp (+91 90161 00004)</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-stone-500">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direct Store Confirmation · No Hidden Platform Fees</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

import React, { useState } from "react";

// --- SAFE ICONS ---
const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
const TrashIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);
const PhoneIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);
const CardIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
    <line x1="1" y1="10" x2="23" y2="10"></line>
  </svg>
);
const BankIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="3" y1="21" x2="21" y2="21"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
    <path d="M5 21V10L12 3l7 7v11"></path>
  </svg>
);
const CheckIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="3"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

// NOW ACCEPTS 'items' and 'onRemove' FROM APP.JS
export default function Checkout({ onClose, items, onRemove }) {
  const [step, setStep] = useState(1);

  // Calculate Total
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FFFBF7] w-full max-w-2xl rounded-xl overflow-hidden relative shadow-2xl border-4 border-double border-[#D4A756]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-[#8C2F39] transition"
        >
          <CloseIcon />
        </button>

        <div className="p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl font-bold text-[#0F4C48]">
              {step === 4
                ? "Blessings & Confirmation"
                : "Finalize Your Tribute"}
            </h2>
            <div className="h-1 w-20 bg-[#D4A756] mx-auto mt-2 rounded-full"></div>
          </div>

          {/* STEP 1: SUMMARY */}
          {step === 1 && (
            <div className="animate-fade-in">
              {items.length === 0 ? (
                <div className="text-center py-10 text-gray-500">
                  <p>Your thali (cart) is empty.</p>
                  <button
                    onClick={onClose}
                    className="mt-4 text-[#0F4C48] font-bold underline"
                  >
                    Return to Shop
                  </button>
                </div>
              ) : (
                <div className="space-y-4 mb-8 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 bg-[#F2E9D8]/30 p-3 rounded-lg border border-[#D4A756]/20 group"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-[#0F4C48]">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-600">Qty: 1</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-[#8C2F39]">
                          ₹{item.price}
                        </div>
                        <button
                          onClick={() => onRemove(item.id)}
                          className="text-xs text-gray-400 hover:text-red-600 flex items-center justify-end gap-1 mt-1 cursor-pointer"
                        >
                          <TrashIcon /> Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {items.length > 0 && (
                <>
                  <div className="flex justify-between items-center border-t border-[#D4A756]/30 pt-4 mb-8">
                    <span className="font-bold text-xl text-[#0F4C48]">
                      Total Amount
                    </span>
                    <span className="font-bold text-2xl text-[#8C2F39]">
                      ₹{total}
                    </span>
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="w-full bg-[#0F4C48] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#8C2F39] transition-colors shadow-lg"
                  >
                    Proceed to Details →
                  </button>
                </>
              )}
            </div>
          )}

          {/* STEP 2: DETAILS */}
          {step === 2 && (
            <div className="animate-fade-in">
              <form className="space-y-4 mb-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-[#0F4C48] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#F2E9D8]/30 border border-[#D4A756]/50 rounded-lg p-3 focus:outline-none focus:border-[#0F4C48]"
                      placeholder="Enter name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#0F4C48] mb-1">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#F2E9D8]/30 border border-[#D4A756]/50 rounded-lg p-3 focus:outline-none focus:border-[#0F4C48]"
                      placeholder="+91..."
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0F4C48] mb-1">
                    Address
                  </label>
                  <textarea
                    className="w-full bg-[#F2E9D8]/30 border border-[#D4A756]/50 rounded-lg p-3 focus:outline-none focus:border-[#0F4C48]"
                    rows="3"
                    placeholder="Delivery Address"
                  ></textarea>
                </div>
              </form>
              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 border border-[#0F4C48] text-[#0F4C48] py-4 rounded-lg font-bold"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-[2] bg-[#0F4C48] text-white py-4 rounded-lg font-bold hover:bg-[#8C2F39] shadow-lg"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: PAYMENT */}
          {step === 3 && (
            <div className="animate-fade-in">
              <p className="text-center text-gray-600 mb-6">
                Select a secure payment method.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 border border-[#D4A756] rounded-xl bg-[#F2E9D8]/20 cursor-pointer hover:bg-[#D4A756]/10 transition">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0F4C48]">
                    <PhoneIcon />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#0F4C48]">UPI / GPay</h4>
                    <p className="text-xs text-gray-500">Instant Payment</p>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                    className="accent-[#0F4C48] w-5 h-5"
                  />
                </div>
                <div className="flex items-center gap-4 p-4 border border-[#D4A756]/30 rounded-xl bg-white cursor-pointer hover:bg-[#D4A756]/10 transition">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0F4C48] border border-gray-200">
                    <CardIcon />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#0F4C48]">Cards</h4>
                    <p className="text-xs text-gray-500">Visa, Mastercard</p>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    className="accent-[#0F4C48] w-5 h-5"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 border border-[#0F4C48] text-[#0F4C48] py-4 rounded-lg font-bold"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="flex-[2] bg-[#8C2F39] text-white py-4 rounded-lg font-bold hover:bg-[#0F4C48] shadow-lg"
                >
                  Pay ₹{total} & Confirm
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: SUCCESS */}
          {step === 4 && (
            <div className="text-center animate-fade-in py-8">
              <div className="w-24 h-24 bg-[#0F4C48] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_#D4A756]">
                <CheckIcon />
              </div>
              <h3 className="text-2xl font-bold text-[#0F4C48] mb-2">
                Order Placed Successfully
              </h3>
              <p className="text-gray-600 mb-8">
                Your order ID is{" "}
                <span className="font-bold text-[#8C2F39]">#ANT-8291</span>.
                <br />A confirmation email has been sent.
              </p>
              <button
                onClick={onClose}
                className="bg-[#0F4C48] text-white px-8 py-3 rounded-full font-bold hover:bg-[#8C2F39] transition-colors"
              >
                Return to Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

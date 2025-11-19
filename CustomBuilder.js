import React, { useState, useEffect } from "react";
// Removed all external icon imports to prevent ModuleNotFoundError

// =================================================================
// 🎨 SAFE ICONS (DEFINED INTERNALLY)
// =================================================================
const CloseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);
const TruckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2"></path>
    <path d="M5 17h10a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H9l-3 3H5z"></path>
    <circle cx="7" cy="17" r="2"></circle>
    <circle cx="17" cy="17" r="2"></circle>
  </svg>
);
const HomeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M10 20v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
    <path d="M12 2l-8 8v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10z" />
  </svg>
);
const BriefcaseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);
const ChevronLeftIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);
const DollarSignIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);
const FileTextIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <line x1="10" y1="21" x2="10" y2="17"></line>
  </svg>
);
const PlusIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

// =================================================================
// 💰 DATA FOUNDATION: UNIVERSAL A LA CARTE ITEMS
// =================================================================
const CUSTOM_ITEMS = [
  {
    id: "hearse",
    name: "Hearse Van (Standard)",
    price: 4000,
    category: "Logistics",
    desc: "Transport from hospital or home to the ground.",
  },
  {
    id: "freezer",
    name: "Freezer Box Rental (24h)",
    price: 3500,
    category: "Logistics",
    desc: "Keeps the deceased preserved until the ceremony.",
  },
  {
    id: "ambulancelux",
    name: "Luxury Ambulance",
    price: 8500,
    category: "Logistics",
    desc: "Premium vehicle for dignified final transfer.",
  },

  {
    id: "pandit",
    name: "Vedic Priest / Pundit",
    price: 6000,
    category: "Clergy & Officiants",
    desc: "Services for Antyesti, Shanti Path, etc.",
  },
  {
    id: "imam",
    name: "Imam / Mullah Officiant",
    price: 5000,
    category: "Clergy & Officiants",
    desc: "Leads Janazah prayers and guides burial rites.",
  },
  {
    id: "pastor",
    name: "Pastor / Clergy Coordination",
    price: 4500,
    category: "Clergy & Officiants",
    desc: "Coordinates Mass/Service at the chosen church.",
  },
  {
    id: "granthi",
    name: "Granthi Singh Officiant",
    price: 5500,
    category: "Clergy & Officiants",
    desc: "Leads the final Ardas and kirtan.",
  },

  {
    id: "shroud_i",
    name: "Kafan (Islamic Shroud)",
    price: 1500,
    category: "Ceremonial Items",
    desc: "Pure white cotton shroud, Sunnah compliant.",
  },
  {
    id: "samagri_h",
    name: "Complete Puja Samagri Kit",
    price: 3000,
    category: "Ceremonial Items",
    desc: "All necessary items for Hindu rites (ghee, wood, etc.).",
  },
  {
    id: "casket_c",
    name: "Simple Wood Casket",
    price: 10000,
    category: "Ceremonial Items",
    desc: "Standard wooden box for Christian burials.",
  },
  {
    id: "flowers_d",
    name: "Marigold/Rose Decoration",
    price: 2500,
    category: "Ceremonial Items",
    desc: "Basic floral decorations for the vehicle or site.",
  },
  {
    id: "obituary",
    name: "Obituary Drafting & Print",
    price: 4000,
    category: "Admin Support",
    desc: "Drafting and publishing the announcement in local media.",
  },
  {
    id: "certificate_aid",
    name: "Death Certificate Filing Aid",
    price: 3000,
    category: "Admin Support",
    desc: "Assistance with Form 4A and municipal registration.",
  },
];

export default function CustomBuilder({ setPage, addToCart, setShowCart }) {
  const [selectedItems, setSelectedItems] = useState([]);

  // --- LOGIC: Dynamic Total Calculation ---
  const total = selectedItems.reduce((sum, itemId) => {
    const item = CUSTOM_ITEMS.find((i) => i.id === itemId);
    return sum + (item ? item.price : 0);
  }, 0);

  // --- LOGIC: Item Toggling ---
  const handleToggle = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  // --- NEW: Handle Checkout Click ---
  const handleProceedToCheckout = () => {
    if (selectedItems.length === 0) {
      alert("Please select at least one component for your custom package.");
      return;
    }

    // 1. Format the selected items for the main cart memory
    const itemsToTransfer = selectedItems.map((itemId) => {
      const item = CUSTOM_ITEMS.find((i) => i.id === itemId);
      return {
        id: item.id,
        name: `Custom: ${item.name}`,
        price: item.price,
        img: "https://placehold.co/100x100/0F4C48/D4A756?text=CUST",
        isCustom: true,
      };
    });

    // 2. Add the items to the main application cart state
    addToCart(itemsToTransfer);

    // 3. Open the checkout modal
    setShowCart(true);
  };

  // Group items by category for the UI
  const groupedItems = CUSTOM_ITEMS.reduce((groups, item) => {
    const group = groups[item.category] || [];
    group.push(item);
    groups[item.category] = group;
    return groups;
  }, {});

  const getIcon = (category) => {
    if (category.includes("Logistics")) return <TruckIcon />;
    if (category.includes("Clergy")) return <HomeIcon />;
    if (category.includes("Ceremonial")) return <BriefcaseIcon />;
    if (category.includes("Admin")) return <FileTextIcon />;
    return <BriefcaseIcon />;
  };

  return (
    <div className="min-h-screen bg-[#F2E9D8] px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => setPage("services")}
            className="flex items-center gap-2 text-[#0F4C48] font-bold hover:text-[#D81B60] transition"
          >
            <ChevronLeftIcon /> Back to Packages
          </button>
          <h1 className="text-4xl font-cinzel text-[#0F4C48]">
            A La Carte Builder
          </h1>
          <div className="w-20" /> {/* Spacer */}
        </div>

        {/* --- DUAL COLUMN WORKBENCH --- */}
        <div className="grid lg:grid-cols-3 gap-8 relative">
          {/* LEFT COLUMN (COL-SPAN-2): SELECTION */}
          <div className="lg:col-span-2 bg-white rounded-xl p-8 border border-[#D4A756]/50 shadow-2xl space-y-8">
            <h2 className="text-2xl font-cinzel text-[#0F4C48] border-b border-gray-100 pb-4">
              Select Custom Components
            </h2>

            {Object.entries(groupedItems).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xl font-bold text-[#D81B60] mb-4 flex items-center gap-3">
                  <div className="text-[#0F4C48]">{getIcon(category)}</div>{" "}
                  {category}
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleToggle(item.id)}
                      // Card Style: Toggle visual feedback
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 
                        ${
                          selectedItems.includes(item.id)
                            ? "bg-[#0F4C48] text-white border-[#D4A756] shadow-diya transform scale-[1.01]"
                            : "bg-[#F2E9D8]/50 text-[#0F4C48] border-[#D4A756]/30 hover:border-[#D4A756] hover:-translate-y-px"
                        }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg font-cinzel">
                          {item.name}
                        </span>
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            selectedItems.includes(item.id)
                              ? "bg-[#D4A756] text-[#0F4C48]"
                              : "border-2 border-gray-400"
                          }`}
                        >
                          {selectedItems.includes(item.id) && <CheckIcon />}
                        </div>
                      </div>
                      <p
                        className={`text-xs mt-1 font-lora ${
                          selectedItems.includes(item.id)
                            ? "text-white/80"
                            : "text-gray-500"
                        }`}
                      >
                        {item.desc}
                      </p>
                      <p
                        className={`font-bold text-sm mt-2 ${
                          selectedItems.includes(item.id)
                            ? "text-amber-300"
                            : "text-[#8C2F39]"
                        }`}
                      >
                        ₹{item.price.toLocaleString("en-IN")}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN (COL-SPAN-1): STICKY SUMMARY/RECEIPT */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-[#0F4C48] text-white rounded-xl p-6 border-t-4 border-[#D4A756] shadow-2xl">
              <h3 className="text-2xl font-cinzel text-[#D4A756] mb-4 border-b border-white/20 pb-3 flex items-center gap-2">
                <DollarSignIcon /> Your Custom Estimate
              </h3>

              <div className="space-y-3 mb-6 max-h-60 overflow-y-auto pr-2">
                {selectedItems.length === 0 ? (
                  <p className="text-slate-400 italic text-sm font-lora">
                    Start adding items from the left...
                  </p>
                ) : (
                  selectedItems.map((itemId) => {
                    const item = CUSTOM_ITEMS.find((i) => i.id === itemId);
                    return (
                      <div
                        key={itemId}
                        className="flex justify-between items-center text-sm font-lora border-b border-white/10 pb-2"
                      >
                        <span className="font-medium">{item.name}</span>
                        <span className="font-bold text-amber-300">
                          ₹{item.price.toLocaleString("en-IN")}
                        </span>
                      </div>
                    );
                  })
                )}
              </div>

              <div className="border-t border-[#D4A756]/80 pt-4 mt-6">
                <div className="flex justify-between items-center text-xl font-bold font-cinzel">
                  <span>GRAND TOTAL:</span>
                  <span className="text-3xl text-[#FFB300]">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              <button
                onClick={handleProceedToCheckout}
                className="w-full mt-6 bg-[#D81B60] text-white py-3 rounded-lg font-bold hover:bg-[#8C2F39] transition-colors shadow-lg"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

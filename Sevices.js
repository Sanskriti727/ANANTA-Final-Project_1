import React, { useState } from "react";
// Removed external import for Plus

// --- SAFE ICONS (DEFINED INTERNALLY) ---
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

export default function Services({ setPage }) {
  // Receives setPage from App.js
  const [activeTab, setActiveTab] = useState("Hindu");

  // Replicating the existing content for structural integrity
  const content = {
    Hindu: {
      icon: "🕉️",
      desc: "Honor the journey of the Atman with Vedic rites and dignity.",
      packages: [
        {
          name: "Antyesti Classic",
          price: "₹25,000",
          items: [
            "Priest Service",
            "Puja Samagri",
            "Hearse Van",
            "Basic Garland",
          ],
        },
        {
          name: "Moksha Premium",
          price: "₹45,000",
          items: [
            "Ganga Water",
            "Gold Leaf Urn",
            "3 Priests",
            "Live Streaming",
          ],
        },
        {
          name: "Shanti Puja",
          price: "₹15,000",
          items: [
            "13th Day Ceremony",
            "Brahmin Bhoj",
            "Flower Decoration",
            "Invitation Cards",
          ],
        },
        {
          name: "Varanasi Journey",
          price: "₹65,000",
          items: [
            "Transport to Kashi",
            "Ghat Booking",
            "Asthi Visarjan",
            "Hotel Stay",
          ],
        },
        {
          name: "Simple Cremation",
          price: "₹12,000",
          items: [
            "Electric Crematorium",
            "Basic Wood",
            "Helper Assistance",
            "NOC Handling",
          ],
        },
      ],
    },
    Islam: {
      icon: "☪️",
      desc: "Dignified Janazah services in accordance with Sunnah.",
      packages: [
        {
          name: "Janazah Basic",
          price: "₹18,000",
          items: ["Ghusl Service", "Kafan (Shroud)", "Hearse", "Rose Water"],
        },
        {
          name: "Noor Premium",
          price: "₹35,000",
          items: [
            "Private Ambulance",
            "Cold Storage",
            "Community Alert System",
            "Video Recording",
          ],
        },
        {
          name: "Quran Khawani",
          price: "₹12,000",
          items: [
            "Hafiz Arrangement",
            "Food Distribution",
            "Digital Invite",
            "Tent Setup",
          ],
        },
        {
          name: "Tadfeen Complete",
          price: "₹28,000",
          items: [
            "Grave Digging",
            "Bamboo & Mats",
            "Transport Bus",
            "Tea Service",
          ],
        },
        {
          name: "Sadaqah Jariyah",
          price: "₹50,000",
          items: [
            "Well Construction",
            "Orphan Donation",
            "Memorial Tree",
            "Certificate",
          ],
        },
      ],
    },
    Christian: {
      icon: "✝️",
      desc: "A service of hope, remembrance, and resurrection.",
      packages: [
        {
          name: "Grace Memorial",
          price: "₹22,000",
          items: [
            "Casket Setup",
            "Choir Coordination",
            "Hearse",
            "Cross Stand",
          ],
        },
        {
          name: "Divine Farewell",
          price: "₹55,000",
          items: [
            "Oak Casket",
            "Floral Arrangements",
            "Cemetery Booking",
            "Live Music",
          ],
        },
        {
          name: "Mass Service",
          price: "₹10,000",
          items: [
            "Church Booking",
            "Priest Coordination",
            "Prayer Cards",
            "Candles",
          ],
        },
        {
          name: "Graveside Rite",
          price: "₹15,000",
          items: [
            "Tent & Chairs",
            "Lowering Device",
            "Sound System",
            "Water Service",
          ],
        },
        {
          name: "Candlelight Vigil",
          price: "₹8,000",
          items: [
            "100 Candles",
            "Framed Photo",
            "Evening Service",
            "Memory Book",
          ],
        },
      ],
    },
    Sikh: {
      icon: "🪯",
      desc: "Antam Sanskar services with humility and Sewa.",
      packages: [
        {
          name: "Waheguru Peace",
          price: "₹20,000",
          items: ["Kirtan Sohila", "White Romala", "Flower Decor", "Vehicle"],
        },
        {
          name: "Khalsa Tribute",
          price: "₹40,000",
          items: [
            "Granthi Singh",
            "Langarpura Service",
            "Luxury Van",
            "Video Coverage",
          ],
        },
        {
          name: "Akhand Path",
          price: "₹30,000",
          items: [
            "3-Day Reading",
            "Gurudwara Setup",
            "Langar Management",
            "Rumala Sahib",
          ],
        },
        {
          name: "Sehaj Path",
          price: "₹15,000",
          items: [
            "Intermittent Reading",
            "Home Setup",
            "Prasad Distribution",
            "Sewadar",
          ],
        },
        {
          name: "Kirtan Darbar",
          price: "₹25,000",
          items: ["Ragi Jatha", "Sound System", "Palki Sahib", "Flower Rain"],
        },
      ],
    },
    Jain: {
      icon: "✋",
      desc: "Ahimsa and simplicity in the final journey.",
      packages: [
        {
          name: "Nirvana Vidhi",
          price: "₹18,000",
          items: [
            "Simple Bier",
            "Navkar Mantra Chants",
            "Sandalwood",
            "Cotton Cloth",
          ],
        },
        {
          name: "Kayotsarga Rites",
          price: "₹32,000",
          items: [
            "Palanquin Setup",
            "Community Hall",
            "Donation Mgmt",
            "Live Bhakti",
          ],
        },
        {
          name: "Antim Yatra",
          price: "₹22,000",
          items: [
            "Decorated Chariot",
            "White Dress Code",
            "Water Service",
            "Helper",
          ],
        },
        {
          name: "Jeev Daya",
          price: "₹50,000",
          items: [
            "Animal Shelter Food",
            "Bird Feeding",
            "Charity Meal",
            "Memorial Plaque",
          ],
        },
        {
          name: "Samosaran Rite",
          price: "₹12,000",
          items: [
            "Prayer Hall",
            "Jain Monk Cord.",
            "Religious Books",
            "Incense",
          ],
        },
      ],
    },
    Buddhist: {
      icon: "☸️",
      desc: "Peaceful transition towards Nirvana.",
      packages: [
        {
          name: "Sutra Reading",
          price: "₹21,000",
          items: ["Monk Service", "Incense Rituals", "White Flowers", "Gong"],
        },
        {
          name: "Lotus Journey",
          price: "₹38,000",
          items: [
            "Meditation Hall",
            "Offering Tables",
            "Alms Giving",
            "Photo Frame",
          ],
        },
        {
          name: "49 Days Rite",
          price: "₹60,000",
          items: [
            "7 Weekly Prayers",
            "Food Offerings",
            "Temple Donation",
            "Scripture Reading",
          ],
        },
        {
          name: "Merit Transfer",
          price: "₹15,000",
          items: [
            "Dana Ceremony",
            "Water Pouring",
            "Chanting Group",
            "Robes Offering",
          ],
        },
        {
          name: "Stupa Offering",
          price: "₹10,000",
          items: [
            "Small Stupa Decor",
            "Butter Lamps",
            "Prayer Flags",
            "Bell Tolling",
          ],
        },
      ],
    },
    Parsi: {
      icon: "🔥",
      desc: "Traditional Dokhmenashini or modern alternatives.",
      packages: [
        {
          name: "Tower Prayers",
          price: "₹45,000",
          items: [
            "Dungli Setup",
            "Mobed Services",
            "Transportation",
            "White Flowers",
          ],
        },
        {
          name: "Eternal Fire",
          price: "₹28,000",
          items: [
            "Prayer Hall",
            "Sandalwood Offerings",
            "White Attire",
            "Oil Lamps",
          ],
        },
        {
          name: "Uthamna Rite",
          price: "₹20,000",
          items: [
            "Morning Prayers",
            "Flower Vase",
            "Priest Dakshina",
            "Hall Rent",
          ],
        },
        {
          name: "Muktad Days",
          price: "₹35,000",
          items: [
            "10-Day Prayers",
            "Vase Cleaning",
            "Fruit Offerings",
            "Special Meals",
          ],
        },
        {
          name: "Four Day Ritual",
          price: "₹50,000",
          items: ["Sarosh Prayer", "Paidast", "Uthamna", "Charum Meal"],
        },
      ],
    },
    Adivasi: {
      icon: "🌿",
      desc: "Connecting the spirit back to Nature and Ancestors.",
      packages: [
        {
          name: "Earth Return",
          price: "₹15,000",
          items: [
            "Traditional Drumming",
            "Nature Rites",
            "Community Feast",
            "Leaf Decor",
          ],
        },
        {
          name: "Ancestral Path",
          price: "₹25,000",
          items: [
            "Totem Decor",
            "Forest Site Prep",
            "Elder Guidance",
            "Rice Beer Offering",
          ],
        },
        {
          name: "Stone Memorial",
          price: "₹40,000",
          items: [
            "Stone Erection",
            "Engraving",
            "Village Feast",
            "Dance Ritual",
          ],
        },
        {
          name: "Forest Spirit",
          price: "₹10,000",
          items: [
            "River Offering",
            "Tree Planting",
            "Herbal Smudging",
            "Chants",
          ],
        },
        {
          name: "Clan Gathering",
          price: "₹30,000",
          items: [
            "Large Tent",
            "Cooking Utensils",
            "Firewood",
            "Guest Management",
          ],
        },
      ],
    },
  };

  const currentData = content[activeTab] || content["Hindu"];

  return (
    <section className="pt-10 px-4 min-h-screen bg-[#F2E9D8] animate-fade-in">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-cinzel text-[#0F4C48] mb-4">
            Our Services
          </h1>
          <div className="h-1 w-24 bg-[#D81B60] mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 text-lg font-lora">
            Select a tradition to view specialized funeral and remembrance
            packages.
          </p>
        </div>

        {/* --- MOBILE/TABLET HORIZONTAL NAV (The Visibility Fix) --- */}
        <div className="block lg:hidden overflow-x-auto whitespace-nowrap pb-4 mb-6">
          <div className="inline-flex gap-3">
            {Object.keys(content).map((religion) => (
              <button
                key={religion}
                onClick={() => setActiveTab(religion)}
                className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 border-2 
                            ${
                              activeTab === religion
                                ? "bg-[#0F4C48] text-white border-[#D4A756] shadow-md"
                                : "bg-white text-[#0F4C48] border-[#D4A756]/50"
                            }
                            font-lora flex items-center gap-2`}
              >
                <span className="text-lg">{content[religion].icon}</span>
                {religion}
              </button>
            ))}
          </div>
        </div>

        {/* --- STRUCTURAL OVERHAUL: VERTICAL ICON NAV AND CONTENT --- */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* LEFT COLUMN (COL-SPAN-3): VERTICAL ICON NAV (Only on large screens) */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-24 bg-white rounded-xl p-4 border border-[#D4A756]/30 shadow-lg">
              <h4 className="font-bold text-[#0F4C48] mb-4 text-sm uppercase tracking-widest">
                Select Tradition
              </h4>

              <div className="space-y-2">
                {Object.keys(content).map((religion) => (
                  <button
                    key={religion}
                    onClick={() => setActiveTab(religion)}
                    // Vertical Tab Styling: Lift effect, Diyā glow on active, Cinzel font
                    className={`w-full text-left p-3 rounded-lg flex items-center gap-4 transition-all duration-300 font-lora
                      ${
                        activeTab === religion
                          ? "bg-[#0F4C48] text-[#D4A756] shadow-diya transform scale-[1.02]"
                          : "text-[#0F4C48] hover:bg-[#F2E9D8] hover:text-[#8C2F39]"
                      }
                      font-medium`}
                  >
                    {/* Premium Icon Insignia */}
                    <span
                      className={`text-2xl w-8 h-8 flex items-center justify-center rounded-full ${
                        activeTab === religion
                          ? "bg-[#D4A756] text-[#0F4C48]"
                          : "bg-[#F2E9D8] text-[#8C2F39]"
                      }`}
                    >
                      {content[religion].icon}
                    </span>
                    {religion}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (COL-SPAN-12/9): PACKAGE DISPLAY */}
          <div className={`${"lg:col-span-9"} col-span-12`}>
            <div className="bg-white border-t-4 border-[#D81B60] rounded-xl p-6 md:p-10 shadow-2xl">
              <h3 className="text-3xl font-bold font-cinzel text-[#D81B60] mb-2 flex items-center gap-3 border-b border-gray-100 pb-4">
                <span className="text-4xl mr-2">{currentData.icon}</span>{" "}
                {activeTab} Packages
              </h3>
              <p className="text-gray-600 italic mb-8 mt-4 text-lg font-lora">
                {currentData.desc}
              </p>

              {/* Package Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentData.packages.map((pkg, index) => (
                  <div
                    key={index}
                    className="border border-[#D4A756]/30 rounded-xl p-6 hover:shadow-diya transition hover:-translate-y-1 bg-[#F2E9D8]/40"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold font-cinzel text-[#0F4C48]">
                        {pkg.name}
                      </h4>
                    </div>
                    <div className="text-2xl font-bold text-[#D81B60] mb-4">
                      {pkg.price}
                    </div>
                    <ul className="space-y-3 mb-6">
                      {pkg.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center text-sm text-gray-700 font-lora font-medium"
                        >
                          <span className="text-[#D4A756] mr-2">✦</span> {item}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-white border-2 border-[#0F4C48] text-[#0F4C48] font-bold py-2 rounded-lg hover:bg-[#0F4C48] hover:text-white transition">
                      Select Package
                    </button>
                  </div>
                ))}
              </div>

              {/* --- CUSTOM BUILDER CTA --- */}
              <div className="text-center mt-12 pt-6 border-t border-gray-100">
                <h4 className="font-bold text-xl font-cinzel text-[#0F4C48] mb-4">
                  Need Something Specific?
                </h4>
                <button
                  onClick={() => setPage("customize")} // Triggers the new Builder page
                  className="bg-[#D81B60] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#8C2F39] transition-colors flex items-center justify-center mx-auto gap-2"
                >
                  <PlusIcon /> Build Your Own Package
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

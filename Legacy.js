import React, { useState } from "react";

// --- SAFE MANUAL ICONS ---
const StarIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#D4A756"
    strokeWidth="2"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);
const GemIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#D4A756"
    strokeWidth="2"
  >
    <path d="M6 3h12l4 6-10 13L2 9z"></path>
    <path d="M11 3v6"></path>
    <path d="M13 3v6"></path>
  </svg>
);
const TreeIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#D4A756"
    strokeWidth="2"
  >
    <path d="M12 19V6M5 19h14M6 19c0-7 4-10 6-14 2 4 6 7 6 14"></path>
  </svg>
);
const FlameIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#D4A756"
    strokeWidth="2"
  >
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-2.072-2.204-2-5 0-2.923 2.686-5 6-5s6 2.077 6 5c.071 2.796-.928 2.857-2 5-.5 1-1 1.62-1 3a2.5 2.5 0 0 0 2.5 2.5c1.38 0 2-.5 3-1"></path>
  </svg>
);
const RocketIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#D4A756"
    strokeWidth="2"
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.48-.56.96-1.15 1.45-1.78"></path>
    <path d="M12 15l-3-3a5 5 0 1 1 7 0l-3 3"></path>
    <path d="M6 9l3 3"></path>
  </svg>
);
const SparkleIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#D4A756"
    strokeWidth="2"
  >
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
  </svg>
);
const SunIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#D4A756"
    strokeWidth="2"
  >
    <path d="M17 18a5 5 0 0 0-10 0"></path>
    <line x1="12" y1="2" x2="12" y2="9"></line>
    <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line>
    <line x1="1" y1="18" x2="3" y2="18"></line>
    <line x1="21" y1="18" x2="23" y2="18"></line>
    <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line>
    <line x1="23" y1="22" x2="1" y2="22"></line>
  </svg>
);

export default function Legacy() {
  const [selectedTribute, setSelectedTribute] = useState(null);

  const tributes = [
    {
      id: 1,
      title: "Starlight Symphony",
      icon: <StarIcon />,
      price: "₹1,50,000",
      tagline: "Write their name among the stars.",
      desc: "We launch a small portion of ashes into near-earth orbit. You can track the satellite location via an app.",
      image:
        "https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg?cs=srgb&dl=pexels-neale-lasalle-197020-631477.jpg&fm=jpg",
    },
    {
      id: 6,
      title: "Celestial Burst (Standard)",
      icon: <SparkleIcon />,
      price: "₹35,000",
      tagline: "A beautiful, heartfelt send-off.",
      desc: "A dignified release of ashes embedded in a professional-grade firework, culminating in a beautiful aerial burst of light and color.",
      image:
        "https://www.scienceinschool.org/wp-content/uploads/2021/10/Issue54_Fireworks_-1.jpg",
    },
    {
      id: 7,
      title: "Eternal Radiance (Premium)",
      icon: <RocketIcon />,
      price: "₹75,000",
      tagline: "A spectacular ascent to remembrance.",
      desc: "Experience a grander firework display with multiple bursts and intricate patterns, designed to carry ashes higher.",
      image: "https://cdn.hswstatic.com/gif/fireworks-shape.jpg",
    },
    {
      id: 8,
      title: "Dawn Ascension (Exclusive)",
      icon: <SunIcon />,
      price: "₹1,20,000",
      tagline: "A bespoke dawn spectacle.",
      desc: "A custom-designed firework show at dawn, synchronized with serene music and a poem reading, representing a new beginning.",
      image:
        "https://www.thoughtco.com/thmb/QZjds_MjL-yxkNAJN05AaRvBpaE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/low-angle-view-of-firework-display-over-river-during-sunset-604213021-57752e7b3df78cb62c11aba4.jpg",
    },

    {
      id: 4,
      title: "Tree of Memory",
      icon: <TreeIcon />,
      price: "₹15,000",
      tagline: "Life from life. Roots that run deep.",
      desc: "We mix the ashes with nutrient-rich soil and plant a Sacred Banyan or Peepal tree in our protected Memorial Forest. As the tree grows, their spirit provides shade to others.",
      image:
        "https://media.istockphoto.com/id/155908124/photo/small-green-bonsai-tree-in-a-brown-plant-pot.jpg?s=612x612&w=0&k=20&c=GSbcXz_yoIFSwk5QF0vOUCk-hq0ULkhFTRBTfpQ25Yk=",
    },
    {
      id: 5,
      title: "Ganga Lantern Release",
      icon: <FlameIcon />,
      price: "₹5,000",
      tagline: "A river of light guiding them home.",
      desc: "A community ceremony in Varanasi where 101 biodegradable sky lanterns are released over the Ganges at twilight, each carrying a message of love.",
      image:
        "https://media.istockphoto.com/id/467090392/photo/mass-sky-lantern-release.jpg?s=612x612&w=0&k=20&c=UDpM3LIAW9QLZvCGUqzq0Y-JnURnFKzT_8WRKLenO_U=",
    },
  ];

  return (
    <section className="min-h-screen bg-[#0F4C48] py-12 px-4 animate-fade-in text-white">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-gold tracking-[0.3em] uppercase text-sm font-bold">
            Premium Tributes
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 font-cinzel text-[#F2E9D8]">
            The Legacy Collection
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto font-lora">
            Beyond the traditional rites, we offer extraordinary ways to
            immortalize the memory of your loved one.
          </p>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-8"></div>
        </div>

        {/* TRIBUTE GRID - Implementation of Diyā Glow & 3D Tilt */}
        <div className="grid lg:grid-cols-2 gap-8">
          {tributes.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedTribute(item)}
              // --- DIYĀ GLOW + 3D TILT EFFECT ---
              className="group relative bg-[#0a3633] border border-white/10 rounded-2xl overflow-hidden cursor-pointer 
                         shadow-[0_0_10px_rgba(0,0,0,0.5)] 
                         hover:shadow-diya hover:scale-[1.02] transition-all duration-500 hover:z-10"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Side */}
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a3633] to-transparent md:bg-gradient-to-t"></div>
                </div>

                {/* Content Side */}
                <div className="p-8 md:w-3/5 flex flex-col justify-center relative">
                  <div className="text-gold mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold font-cinzel mb-2 text-[#F2E9D8]">
                    {item.title}
                  </h3>
                  <p className="text-gold/70 text-sm uppercase tracking-widest mb-4">
                    {item.tagline}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 font-lora">
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-gold">
                      {item.price}
                    </span>
                    <button className="text-xs border border-white/20 px-4 py-2 rounded-full group-hover:bg-gold group-hover:text-[#0F4C48] group-hover:border-gold transition-all font-bold">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- THE DETAIL MODAL --- */}
        {selectedTribute && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-[#F2E9D8] w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl relative animate-fade-in text-[#0F4C48]">
              {/* Close Button */}
              <button
                onClick={() => setSelectedTribute(null)}
                className="absolute top-4 right-4 z-10 bg-white/50 p-2 rounded-full hover:bg-white transition"
              >
                ✕
              </button>

              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img
                    src={selectedTribute.image}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-rani mb-4">{selectedTribute.icon}</div>
                  <h2 className="text-3xl font-bold font-cinzel mb-2">
                    {selectedTribute.title}
                  </h2>
                  <p className="text-gold font-bold text-xl mb-6">
                    {selectedTribute.price}
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-8 font-lora">
                    {selectedTribute.desc} <br />
                    <br />
                    This package includes a dedicated ceremonial manager, video
                    coverage of the event, and a framed certificate of
                    authentication.
                  </p>

                  <button className="w-full bg-[#0F4C48] text-white py-4 rounded-lg font-bold hover:bg-rani transition-colors shadow-lg">
                    Book Tribute
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

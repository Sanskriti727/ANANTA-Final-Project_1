import React from "react";

export default function Navbar({
  setPage,
  onCartClick,
  onHelpClick,
  cartCount = 0,
}) {
  return (
    <nav className="w-full bg-white border-b-2 border-gold sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          {/* LOGO */}
          <div
            onClick={() => setPage("home")}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition mb-4 md:mb-0"
          >
            <svg viewBox="0 0 100 60" className="w-10 h-10">
              <path
                d="M20 40 C 5 40, 5 20, 20 20 C 35 20, 45 35, 50 40 C 55 35, 65 20, 80 20 C 95 20, 95 40, 80 40 C 65 40, 55 25, 50 20 C 45 25, 35 40, 20 40 Z"
                stroke="#D4A756"
                strokeWidth="3"
                fill="none"
              />
              <path d="M50 20 Q 55 5, 50 0 Q 45 5, 50 20" fill="#D4A756" />
            </svg>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-peacock tracking-widest leading-none">
                ANANTA
              </span>
              <span className="text-[10px] text-gold uppercase tracking-[0.2em]">
                Eternal Journey
              </span>
            </div>
          </div>

          {/* LINKS (Cleaned Up) */}
          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => setPage("home")}
              className="text-peacock font-bold text-lg hover:text-rani hover:underline transition"
            >
              Home
            </button>
            <button
              onClick={() => setPage("services")}
              className="text-peacock font-bold text-lg hover:text-rani hover:underline transition"
            >
              Services
            </button>
            <button
              onClick={() => setPage("legacy")}
              className="text-peacock font-bold text-lg hover:text-rani hover:underline transition"
            >
              Legacy
            </button>
            <button
              onClick={() => setPage("shop")}
              className="text-peacock font-bold text-lg hover:text-rani hover:underline transition"
            >
              Shop
            </button>
            <button
              onClick={() => setPage("ai")}
              className="text-peacock font-bold text-lg hover:text-rani hover:underline transition"
            >
              AI Assistant
            </button>
          </div>

          {/* ICONS */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button
              className="text-peacock hover:text-rani relative"
              onClick={onCartClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#8C2F39] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={onHelpClick}
              className="flex items-center gap-2 border border-peacock rounded-full px-4 py-1 hover:bg-peacock hover:text-white transition"
            >
              <span className="text-sm font-bold">Care Team</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

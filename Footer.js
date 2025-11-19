import React from "react";

// --- SAFE ICONS ---
const FacebookIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);
const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
const TwitterIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);
const MapPinIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);
const MailIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);
const PhoneIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export default function Footer({ setPage }) {
  return (
    <footer className="bg-[#0F4C48] text-[#F2E9D8] pt-16 pb-8 border-t-4 border-[#D4A756]">
      <div className="max-w-6xl mx-auto px-4">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* COLUMN 1: BRAND */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* Tiny Logo */}
              <svg viewBox="0 0 100 60" className="w-8 h-8">
                <path
                  d="M20 40 C 5 40, 5 20, 20 20 C 35 20, 45 35, 50 40 C 55 35, 65 20, 80 20 C 95 20, 95 40, 80 40 C 65 40, 55 25, 50 20 C 45 25, 35 40, 20 40 Z"
                  stroke="#D4A756"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
              <span className="text-2xl font-serif font-bold tracking-widest">
                ANANTA
              </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Dignified farewells rooted in Bharatiya traditions. We support
              families through the most difficult journey with logistics, legal
              aid, and emotional care.
            </p>
            <div className="flex gap-4">
              <button className="hover:text-[#D4A756] transition">
                <FacebookIcon />
              </button>
              <button className="hover:text-[#D4A756] transition">
                <TwitterIcon />
              </button>
              <button className="hover:text-[#D4A756] transition">
                <InstagramIcon />
              </button>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h4 className="text-[#D4A756] font-bold uppercase tracking-widest text-sm mb-6">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => setPage("home")}
                  className="hover:text-[#D4A756] transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPage("services")}
                  className="hover:text-[#D4A756] transition"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPage("legacy")}
                  className="hover:text-[#D4A756] transition"
                >
                  Legacy Tributes
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPage("shop")}
                  className="hover:text-[#D4A756] transition"
                >
                  Marketplace
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPage("ai")}
                  className="hover:text-[#D4A756] transition"
                >
                  AI Counselor
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: CONTACT */}
          <div>
            <h4 className="text-[#D4A756] font-bold uppercase tracking-widest text-sm mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPinIcon />
                <span>
                  108, Vasant Vihar,
                  <br />
                  New Delhi, India 110057
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <span>+91 98100 98100</span>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon />
                <span>care@ananta.com</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: NEWSLETTER */}
          <div>
            <h4 className="text-[#D4A756] font-bold uppercase tracking-widest text-sm mb-6">
              Stay Connected
            </h4>
            <p className="text-xs text-gray-400 mb-4">
              Subscribe to receive guidance on grief healing and ritual updates.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#0a3633] border border-[#D4A756]/30 rounded p-2 text-sm text-white focus:outline-none focus:border-[#D4A756]"
              />
              <button className="bg-[#D4A756] text-[#0F4C48] font-bold py-2 rounded hover:bg-white transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-[#D4A756]/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; 2025 Ananta Funerals Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button className="hover:text-white transition">
              Privacy Policy
            </button>
            <button className="hover:text-white transition">
              Terms of Service
            </button>
            <button className="hover:text-white transition">
              Refund Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

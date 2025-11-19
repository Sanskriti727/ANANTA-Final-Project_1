import React from "react";
import {
  Phone,
  Heart,
  Shield,
  BookOpen,
  ArrowRight,
  Feather,
  Users,
  Sun,
} from "lucide-react";

// --- UNIVERSAL HERITAGE ICONS ---
const HeritagePattern = () => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    className="opacity-10 animate-spin-slow"
  >
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    <rect
      x="30"
      y="30"
      width="40"
      height="40"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      transform="rotate(45 50 50)"
    />
    <rect
      x="30"
      y="30"
      width="40"
      height="40"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
  </svg>
);

const EternalFlameIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="text-[#D4A756]"
  >
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-2.072-2.204-2-5 0-2.923 2.686-5 6-5s6 2.077 6 5c.071 2.796-.928 2.857-2 5-.5 1-1 1.62-1 3a2.5 2.5 0 0 0 2.5 2.5c1.38 0 2-.5 3-1"></path>
  </svg>
);

export default function Home({ setPage, onOpenHelp }) {
  return (
    <div className="w-full animate-fade-in">
      {/* ================= HERO SECTION (MAX IMPACT) ================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0F4C48] text-[#F2E9D8]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(30deg, #D4A756 1px, transparent 1px), linear-gradient(150deg, #D4A756 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0F4C48] via-transparent to-[#0F4C48]"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="flex justify-center mb-6 opacity-60">
            <HeritagePattern />
          </div>

          <h1 className="text-5xl md:text-7xl font-cinzel font-bold leading-tight mb-6 tracking-wide">
            Dignity, Ritual, and
            <br />
            <span className="text-[#D4A756]">Everlasting Remembrance.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-light mb-10 max-w-3xl mx-auto font-lora leading-relaxed">
            A dignified farewell for every faith and community, rooted in
            compassion and cultural authenticity.
            <span className="text-sm mt-4 block text-[#D4A756] uppercase tracking-[0.2em]">
              Hindu • Muslim • Christian • Sikh • Jain • Parsi • Buddhist
            </span>
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => setPage("services")}
              className="bg-[#D4A756] text-[#0F4C48] px-10 py-4 rounded-full font-bold text-lg shadow-diya hover:scale-105 transition-transform flex items-center gap-3"
            >
              View All Traditions <ArrowRight size={20} />
            </button>
            <button
              onClick={onOpenHelp}
              className="border-2 border-[#F2E9D8] text-[#F2E9D8] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#F2E9D8] hover:text-[#0F4C48] transition-colors flex items-center gap-3"
            >
              <Phone size={20} /> Care Team
            </button>
          </div>

          {/* Enhanced Light Counter (Silk-Morphism) */}
          <div className="mt-16 inline-flex items-center gap-4 bg-white/10 backdrop-blur-md px-8 py-3 rounded-full border border-white/20 shadow-diya">
            <EternalFlameIcon />
            <div className="text-left">
              <span className="block text-2xl font-bold text-white leading-none">
                1,204
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-300">
                Families Supported Today
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUE PROPS (The Ananta Promise) ================= */}
      <section className="py-24 px-4 bg-[#FFFBF7] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D81B60] font-bold tracking-widest uppercase text-xs">
              Core Values
            </span>
            <h2 className="text-4xl font-cinzel text-[#0F4C48] mt-2">
              The Ananta Promise
            </h2>
            <div className="h-1 w-20 bg-[#D4A756] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div className="text-center group card-premium hover:shadow-diya p-8">
              <div className="w-20 h-20 mx-auto bg-[#F2E9D8] rounded-full flex items-center justify-center text-[#0F4C48] mb-6 group-hover:bg-[#0F4C48] group-hover:text-[#D4A756] transition-colors duration-500">
                <BookOpen size={36} />
              </div>
              <h3 className="text-xl font-bold font-cinzel text-[#0F4C48] mb-3">
                Ritual Authenticity
              </h3>
              <p className="text-gray-600 leading-relaxed font-lora">
                Whether it is Vedic rites, the Sunnah, or Canon Law, our experts
                ensure every ceremony is respectful and scripturally accurate.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center group card-premium hover:shadow-diya p-8">
              <div className="w-20 h-20 mx-auto bg-[#F2E9D8] rounded-full flex items-center justify-center text-[#0F4C48] mb-6 group-hover:bg-[#0F4C48] group-hover:text-[#D4A756] transition-colors duration-500">
                <Users size={36} />
              </div>
              <h3 className="text-xl font-bold font-cinzel text-[#0F4C48] mb-3">
                Community & Dignity
              </h3>
              <p className="text-gray-600 leading-relaxed font-lora">
                We serve every community with equal respect. Our staff is
                trained in the nuances of cross-cultural grief and etiquette.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center group card-premium hover:shadow-diya p-8">
              <div className="w-20 h-20 mx-auto bg-[#F2E9D8] rounded-full flex items-center justify-center text-[#0F4C48] mb-6 group-hover:bg-[#0F4C48] group-hover:text-[#D4A756] transition-colors duration-500">
                <Heart size={36} />
              </div>
              <h3 className="text-xl font-bold font-cinzel text-[#0F4C48] mb-3">
                Emotional Support
              </h3>
              <p className="text-gray-600 leading-relaxed font-lora">
                Grief is a universal human experience. Our diverse Care Team
                includes specialists from various backgrounds to support you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE PROCESS (Timeline) ================= */}
      <section className="py-24 px-4 bg-[#F2E9D8] border-y border-[#D4A756]/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#0F4C48] font-bold tracking-widest uppercase text-xs">
                How It Works
              </span>
              <h2 className="text-4xl font-cinzel text-[#0F4C48] mt-2 mb-6">
                We Walk With You,
                <br />
                Step by Step.
              </h2>

              <div className="space-y-8">
                {[
                  {
                    title: "1. Immediate Assistance",
                    desc: "One call activates our team. We handle the hearse, doctor certification, and cold storage instantly.",
                  },
                  {
                    title: "2. The Ceremony",
                    desc: "We prepare the items (Coffin/Shroud/Samagri), book the ground, and arrange the Officiant/Priest.",
                  },
                  {
                    title: "3. Legal & Paperwork",
                    desc: "From obtaining the Death Certificate to Insurance Claims, our legal team guides you through the bureaucracy.",
                  },
                  {
                    title: "4. Healing & Legacy",
                    desc: "Preserve memories with our Tributes or seek counseling through our Sahayak program.",
                  },
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-[#0F4C48] text-[#D4A756] flex items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </div>
                      {idx !== 3 && (
                        <div className="w-px h-full bg-[#0F4C48]/20 my-2"></div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F4C48] text-lg">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed font-lora">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Image - Floating Testimonial Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4A756] rounded-2xl rotate-3 opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=800&q=80"
                alt="Peaceful Hands Holding Light"
                className="relative rounded-2xl shadow-2xl border-4 border-white"
              />

              {/* Floating Testimonial Card uses Diyā Glow and Animation */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-diya border-l-4 border-[#D81B60] max-w-xs hidden md:block animate-float">
                <div className="flex gap-1 text-[#D4A756] mb-2">
                  <Feather size={16} fill="currentColor" />
                  <Feather size={16} fill="currentColor" />
                  <Feather size={16} fill="currentColor" />
                  <Feather size={16} fill="currentColor" />
                  <Feather size={16} fill="currentColor" />
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-lora">
                  "They respected our customs perfectly. It was dignified,
                  quiet, and exactly what we wanted."
                </p>
                <p className="text-xs font-bold text-[#0F4C48] mt-2">
                  — The D'Souza Family
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="py-20 bg-[#0F4C48] text-center relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{
            backgroundImage:
              'url("https://www.transparenttextures.com/patterns/stardust.png")',
          }}
        ></div>

        <div className="relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-cinzel text-[#F2E9D8] mb-6">
            Honoring a life is the greatest act of love.
          </h2>
          <button
            onClick={() => setPage("legacy")}
            className="bg-transparent border-2 border-[#D4A756] text-[#D4A756] px-8 py-3 rounded-full font-bold hover:bg-[#D4A756] hover:text-[#0F4C48] transition-all shadow-diya"
          >
            View Legacy Tributes
          </button>
        </div>
      </section>
    </div>
  );
}

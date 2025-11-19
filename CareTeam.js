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
const PhoneIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);
const CalendarIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

export default function CareTeam({ onClose }) {
  const [connected, setConnected] = useState(null);

  // --- THE COUNSELOR DATABASE (UPDATED WITH STABLE IMAGES) ---
  const counselors = [
    {
      id: 1,
      name: "Dr. Anjali Sharma",
      role: "Trauma & Grief Specialist",
      lang: "English, Hindi",
      wait: "2 min",
      image:
        "https://img.freepik.com/free-photo/mid-shot-woman-therapist-with-clipboard_23-2148759113.jpg?semt=ais_incoming&w=740&q=80", // Professional female portrait
      status: "online",
    },
    {
      id: 2,
      name: "Raghav Iyer",
      role: "Emotional Wellness Coach",
      lang: "English, Tamil, Hindi",
      wait: "5 min",
      image:
        "https://media.istockphoto.com/id/1326420590/photo/portrait-of-happy-black-male-psychologist-looking-at-camera-and-taking-notes-during-therapy.jpg?s=612x612&w=0&k=20&c=sQIUcX108sC9tH4CG9Vh4RYjthJ5bJpUFfdcGcdKiM4=", // Professional male portrait
      status: "online",
    },
    {
      id: 3,
      name: "Sister Mariam",
      role: "Faith-Based Support",
      lang: "English, Malayalam",
      wait: "12 min",
      image:
        "https://www.shutterstock.com/image-photo/closeup-portrait-young-female-therapist-260nw-2083487134.jpg", // Kind woman, neutral
      status: "busy",
    },
    {
      id: 4,
      name: "Dr. Kibho Lepcha",
      role: "Cross-Cultural Support",
      lang: "English, Nepali, Hindi",
      wait: "Available Now",
      image:
        "https://t4.ftcdn.net/jpg/03/06/77/05/360_F_306770593_EqCJr8JksJZdLEbWt91KJJmWcK4vubqy.jpg", // Distinctive male professional look
      status: "available",
    },
    {
      id: 5,
      name: "Farah Khan",
      role: "Family Dynamics & Healing",
      lang: "Hindi, Urdu, English",
      wait: "Offline",
      image:
        "https://images.squarespace-cdn.com/content/v1/5f0f93ed4d2eb2049c586ae2/b03afaf5-730f-429d-9657-19920c620d68/Saumya+Dave-2-Hi-Res-Full.jpg", // Female professional portrait
      status: "offline",
    },
  ];

  // --- CONNECTING SCREEN ---
  if (connected) {
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
        <div className="bg-[#FFFBF7] w-full max-w-md rounded-2xl p-8 text-center border-2 border-[#D4A756] relative">
          <button
            onClick={() => setConnected(null)}
            className="absolute top-4 right-4"
          >
            <CloseIcon />
          </button>

          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-[#0F4C48] shadow-lg relative">
            <img
              src={connected.image}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0F4C48]/20 animate-pulse"></div>
          </div>

          <h3 className="text-2xl font-bold text-[#0F4C48] mb-2">
            Connecting...
          </h3>
          <p className="text-gray-600 mb-8">
            Please hold while we connect you to <br />
            <span className="font-bold">{connected.name}</span>.
          </p>

          <div className="flex justify-center gap-4">
            <button
              className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600"
              onClick={() => setConnected(null)}
            >
              <PhoneIcon size={20} className="rotate-[135deg]" />
            </button>
            <button className="w-12 h-12 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
              <CalendarIcon size={20} />
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Your conversation is private & encrypted.
          </p>
        </div>
      </div>
    );
  }

  // --- LOBBY SCREEN ---
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FFFBF7] w-full max-w-4xl rounded-xl overflow-hidden relative shadow-2xl border-4 border-[#D4A756]">
        {/* Header */}
        <div className="bg-[#0F4C48] p-6 text-white flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold font-serif">
              The ANANTA Care Circle
            </h2>
            <p className="text-[#D4A756] text-sm mt-1">
              Compassionate specialists ready to listen.
            </p>
          </div>
          <button
            onClick={onClose}
            className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {/* Urgent Banner */}
          <div className="bg-red-50 border border-red-100 p-4 rounded-lg flex items-start gap-3 mb-8">
            <div className="bg-red-100 p-2 rounded-full text-red-600">
              <PhoneIcon size={20} />
            </div>
            <div>
              <h4 className="font-bold text-red-800 text-sm">
                Emergency Crisis?
              </h4>
              <p className="text-red-600 text-xs">
                If you are feeling suicidal or unsafe, do not wait. Call the
                National Helpline directly:{" "}
                <span className="font-bold">14416</span>.
              </p>
            </div>
          </div>

          {/* Counselors Grid */}
          <h3 className="font-bold text-[#0F4C48] mb-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>{" "}
            Available Specialists
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {counselors.map((c) => (
              <div
                key={c.id}
                className="border border-gray-200 rounded-xl p-4 hover:border-[#D4A756] hover:shadow-lg transition-all bg-white group"
              >
                <div className="flex items-start justify-between mb-3">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#F2E9D8]"
                  />
                  <span
                    className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide 
                    ${
                      c.status === "available"
                        ? "bg-green-100 text-green-700"
                        : c.status === "busy"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {c.status === "available"
                      ? "Ready"
                      : c.status === "busy"
                      ? "In Call"
                      : "Offline"}
                  </span>
                </div>

                <h4 className="font-bold text-[#0F4C48]">{c.name}</h4>
                <p className="text-xs text-[#D4A756] font-bold mb-1">
                  {c.role}
                </p>
                <p className="text-xs text-gray-500 mb-4">🗣️ {c.lang}</p>

                <div className="flex gap-2">
                  <button
                    onClick={() => setConnected(c)}
                    disabled={c.status === "offline"}
                    className={`flex-1 py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-1 transition-colors
                    ${
                      c.status === "offline"
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-[#0F4C48] text-white hover:bg-[#D4A756]"
                    }`}
                  >
                    <PhoneIcon size={12} /> Call Now
                  </button>
                  <button className="bg-[#F2E9D8] text-[#0F4C48] p-2 rounded-lg hover:bg-[#D4A756]/20">
                    <CalendarIcon size={14} /> Schedule
                  </button>
                </div>
                {c.status !== "available" && c.status !== "offline" && (
                  <p className="text-[10px] text-center mt-2 text-gray-400">
                    Wait time: ~{c.wait}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Queue Option */}
          <div className="bg-[#F2E9D8]/50 rounded-xl p-6 text-center border border-[#D4A756]/30">
            <h4 className="font-bold text-[#0F4C48] mb-2">
              Can't find the right match?
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Our care coordinator will call you back within 10 minutes.
            </p>
            <form className="flex gap-2 max-w-sm mx-auto">
              <input
                type="text"
                placeholder="Enter your phone number"
                className="flex-1 p-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#0F4C48]"
              />
              <button className="bg-[#0F4C48] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#D4A756]">
                Request Call
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

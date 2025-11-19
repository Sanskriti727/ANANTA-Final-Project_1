import React, { useState, useEffect, useRef } from "react";
import {
  Upload,
  X,
  FileText,
  CheckCircle,
  Shield,
  MessageSquare,
  Heart,
  Phone,
} from "lucide-react";

// =============================================================================
// 🧠 THE MASTER BRAIN (Therapy Level 100 + Legal Level 100)
// =============================================================================
const BRAIN_DATA = [
  // ---------------------------------------------------------------------------
  // 🆘 CRISIS & SAFETY (Highest Priority)
  // ---------------------------------------------------------------------------
  {
    keywords: [
      "suicide",
      "kill myself",
      "end my life",
      "die",
      "want to die",
      "no point living",
    ],
    responses: [
      "I hear how much pain you are in, but please stay with us. You are not alone. Please call the iCall Helpline immediately: 9152987821.",
      "Your life has value, even in this dark moment. Please reach out to a human right now. Call 14416 (Tele-MANAS) for free support.",
      "Please do not make a permanent decision for a temporary (though very painful) feeling. Help is available. Please call +91-9820466726.",
    ],
  },
  {
    keywords: [
      "panic",
      "anxious",
      "can't breathe",
      "anxiety attack",
      "chest pain",
      "scared",
    ],
    responses: [
      "You might be having a panic attack. Let's ground ourselves together.\n\n1. Look around. Name 5 things you can see.\n2. Name 4 things you can touch.\n3. Name 3 things you can hear.\n\nBreathe in for 4 seconds... hold for 7... out for 8.",
      "This feeling is scary, but it will pass. You are safe. Focus on your feet touching the floor. Feel the ground supporting you. Just breathe.",
    ],
  },

  // ---------------------------------------------------------------------------
  // 🕯️ DEEP EMOTIONAL SUPPORT (The Therapist)
  // ---------------------------------------------------------------------------
  {
    keywords: [
      "guilt",
      "guilty",
      "regret",
      "mistake",
      "should have",
      "fault",
      "if only",
    ],
    responses: [
      "Guilt is the 'bargaining' stage of grief. Your mind is trying to rewrite the past to save them. But you did the best you could with what you knew then.",
      "Please forgive yourself. You are human. If love alone could have saved them, they would have lived forever.",
      " survivor's guilt is heavy. Try this: Write a letter to them explaining your regret, and then write a response from them. What would *they* say to you? They would say 'I forgive you'.",
    ],
  },
  {
    keywords: [
      "angry",
      "hate",
      "furious",
      "mad",
      "rage",
      "unfair",
      "why me",
      "why them",
    ],
    responses: [
      "Anger is a guardian of your grief. It feels unfair because it IS unfair. You have every right to feel this way. Scream into a pillow if you need to.",
      "Do not judge your anger. It is just love with nowhere to go. You are not a bad person for being angry at the doctors, God, or even them for leaving.",
      "Anger is the part of you that knows you deserved more time. It validates how much they meant to you.",
    ],
  },
  {
    keywords: [
      "numb",
      "feel nothing",
      "empty",
      "blank",
      "hollow",
      "shock",
      "robot",
    ],
    responses: [
      "Numbness is your mind's anesthesia. The pain is too big right now, so your brain has shut down to protect you. It is normal.",
      "You are not unfeeling; you are in survival mode. The feelings will return slowly, like the tide coming back in. Be patient with your heart.",
      "Do not force yourself to cry. Just existing is enough for today.",
    ],
  },
  {
    keywords: ["forget", "forgetting", "voice", "face", "memory fading"],
    responses: [
      "The fear of forgetting is very real. But the heart remembers what the mind might lose. Write down your memories, or record yourself talking about them.",
      "You will not forget them. Their impact is woven into your life. You might forget their voice tone, but you will never forget how they made you feel.",
    ],
  },
  {
    keywords: [
      "dream",
      "saw them",
      "hallucination",
      "heard voice",
      "presence",
      "ghost",
    ],
    responses: [
      "Seeing or hearing a loved one is extremely common. It is called a 'grief hallucination'. It is your brain searching for them.",
      "Many people find these moments comforting. It is not crazy; it is a sign of how deeply your brain is wired to their presence.",
    ],
  },
  {
    keywords: [
      "sleep",
      "insomnia",
      "awake",
      "tired",
      "exhausted",
      "nightmares",
    ],
    responses: [
      "Grief is physically exhausting. If you cannot sleep, try 'Non-Sleep Deep Rest'. Lie down, close your eyes, and listen to a fan or soft music. Rest is still valuable.",
      "Avoid looking at the clock. It increases anxiety. Just tell yourself: 'I am safe, I am resting'.",
    ],
  },
  {
    keywords: [
      "family",
      "fight",
      "argue",
      "dispute",
      "money",
      "property",
      "tension",
    ],
    responses: [
      "Grief rewires family dynamics. Everyone grieves differently—some cry, some work, some get angry. Try not to take their reactions personally right now.",
      "Old wounds often reopen during funerals. Try to set boundaries: 'Can we discuss this next month? I need space to mourn right now.'",
    ],
  },

  // ---------------------------------------------------------------------------
  // ⚖️ LEGAL & DOCUMENTATION (The Lawyer)
  // ---------------------------------------------------------------------------
  {
    keywords: [
      "death certificate",
      "form 4a",
      "mcd",
      "municipality",
      "birth and death",
    ],
    responses: [
      "To obtain a legal Death Certificate in India, you typically need:\n1. **Form 4A** (Medical Cause of Death) issued by the Hospital/Doctor.\n2. **Proof of Date & Time of Death** (Cremation/Burial Pass).\n3. **ID Proof of Deceased** (Aadhaar, Voter ID).\n4. **ID Proof of Applicant** (Relative).\n5. **NOC** if delayed >21 days.",
    ],
  },
  {
    keywords: [
      "insurance",
      "claim",
      "lic",
      "policy",
      "life insurance",
      "nominee claim",
    ],
    responses: [
      "For a Life Insurance Death Claim, keep these ready:\n1. **Original Policy Bond**.\n2. **Death Certificate** (Original).\n3. **Claimant's Statement Form**.\n4. **Bank Details** (Cancelled Cheque) of Nominee.\n5. **KYC of Nominee** (Aadhaar/PAN).\n*Note: If accidental, you need FIR & Post-Mortem Report.*",
    ],
  },
  {
    keywords: ["bank", "account", "money", "atm", "fixed deposit", "savings"],
    responses: [
      "**With Nominee:** Submit Death Certificate, Nominee's KYC, and 'Deceased Claim Form' at the home branch (~7-15 days).\n\n**No Nominee:** You need a 'Legal Heir Certificate' or 'Succession Certificate' from the court + Indemnity Bond.",
    ],
  },
  {
    keywords: ["vehicle", "car", "bike", "transfer", "rto", "rc transfer"],
    responses: [
      "To transfer a vehicle (RC) after death, submit to RTO:\n1. **Form 31** (Application for Transfer).\n2. **Death Certificate**.\n3. **Succession Certificate**.\n4. **Original RC** & Insurance.\n5. **PUC**.\n6. **Affidavit** from other heirs.",
    ],
  },

  // ---------------------------------------------------------------------------
  // 👋 GENERAL
  // ---------------------------------------------------------------------------
  {
    keywords: ["hello", "hi", "namaste"],
    responses: [
      "Namaste. I am Sahayak. I am here to hold space for you. You can talk to me about your pain, or ask about documents.",
    ],
  },
  {
    keywords: ["thank", "thanks"],
    responses: ["You are welcome. Be gentle with yourself today. 🙏"],
  },
];

// 💡 DYNAMIC SUGGESTED CHIPS (Emotional + Legal Mix)
const SUGGESTED_QUESTIONS = [
  "💔 I feel guilty",
  "😰 Panic Attack Help",
  "😡 I am angry",
  "📄 Docs for Death Cert",
  "💰 Claim Insurance",
  "😶 I feel numb",
];

// =============================================================================
// ⚙️ MAIN COMPONENT
// =============================================================================
export default function AIAssistant() {
  const [mode, setMode] = useState("sahayak");

  return (
    <section
      className={`min-h-screen transition-colors duration-700 ${
        mode === "nyaya" ? "bg-slate-50" : "bg-orange-50"
      }`}
    >
      <div className="max-w-5xl mx-auto pt-8 px-4 pb-20">
        {/* MODE TOGGLE */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-full shadow-md inline-flex relative">
            <button
              onClick={() => setMode("nyaya")}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 z-10 flex items-center gap-2 ${
                mode === "nyaya"
                  ? "bg-slate-800 text-white shadow-lg"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <Shield size={18} /> NYAYA (Legal)
            </button>
            <button
              onClick={() => setMode("sahayak")}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 z-10 flex items-center gap-2 ${
                mode === "sahayak"
                  ? "bg-orange-500 text-white shadow-lg"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <Heart size={18} /> SAHAYAK (Care)
            </button>
          </div>
        </div>

        <div className="animate-fade-in">
          {mode === "nyaya" ? <NyayaPanel /> : <SahayakPanel />}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// ⚖️ NYAYA PANEL (File Upload + Checklist)
// =============================================================================
function NyayaPanel() {
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [checklist, setChecklist] = useState([
    { id: 1, label: "Death Certificate (Form 4A)", checked: false },
    { id: 2, label: "Aadhar Card of Deceased", checked: false },
    { id: 3, label: "No Objection Certificate (Police)", checked: false },
    { id: 4, label: "Insurance Policy Bond", checked: false },
    { id: 5, label: "Bank Passbook / Cancelled Cheque", checked: false },
  ]);

  const toggleCheck = (id) => {
    setChecklist(
      checklist.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleSelectFiles = () => fileInputRef.current.click();
  const handleFileChange = (event) =>
    setFiles((prev) => [...prev, ...Array.from(event.target.files)]);
  const removeFile = (index) => setFiles(files.filter((_, i) => i !== index));

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
      <div className="bg-slate-800 p-6 text-white">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Shield className="text-yellow-400" /> Nyaya Legal Vault
        </h2>
        <p className="text-slate-300 text-sm mt-1">
          Securely organize documents for clearance & claims.
        </p>
      </div>
      <div className="p-8 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-bold text-slate-700 mb-4">1. Upload Documents</h3>
          <input
            type="file"
            multiple
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
          <div
            onClick={handleSelectFiles}
            className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 transition cursor-pointer group mb-4"
          >
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-200 text-slate-500 transition">
              <Upload size={24} />
            </div>
            <h3 className="font-bold text-slate-700 group-hover:text-peacock transition">
              Click to Upload
            </h3>
            <p className="text-xs text-slate-400 mt-2">
              Supports JPG, PDF, PNG
            </p>
          </div>
          {files.length > 0 && (
            <div className="space-y-2">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-slate-50 p-3 rounded border border-slate-200"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <FileText
                      size={16}
                      className="text-peacock flex-shrink-0"
                    />
                    <span className="text-sm text-slate-700 truncate">
                      {file.name}
                    </span>
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    className="text-red-400 hover:text-red-600"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
              <button className="w-full mt-2 bg-peacock text-white py-2 rounded font-bold text-sm hover:bg-rani transition">
                Submit to Legal Team
              </button>
            </div>
          )}
        </div>
        <div>
          <h3 className="font-bold text-slate-700 mb-4">
            2. Required Clearance
          </h3>
          <div className="space-y-3">
            {checklist.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition border ${
                  item.checked
                    ? "bg-green-50 border-green-200"
                    : "bg-gray-50 border-transparent hover:bg-gray-100"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    item.checked
                      ? "bg-green-500 border-green-500"
                      : "border-gray-300"
                  }`}
                >
                  {item.checked && (
                    <CheckCircle size={14} className="text-white" />
                  )}
                </div>
                <span
                  className={`text-sm font-medium ${
                    item.checked
                      ? "text-green-800 line-through"
                      : "text-slate-700"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// ❤️ SAHAYAK PANEL (Therapist + Suggestions)
// =============================================================================
function SahayakPanel() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Namaste. I am Sahayak. I am here to listen without judgment. You can share your pain, your guilt, or ask for help. How are you feeling right now?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (textOverride = null) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "user", text: textToSend },
    ]);
    setInput("");

    setTimeout(() => {
      const lowerText = textToSend.toLowerCase();
      let botReply =
        "I am listening. Please tell me more about how you are feeling. You can also ask me about rituals or documents.";

      const foundMatch = BRAIN_DATA.find((item) =>
        item.keywords.some((keyword) => lowerText.includes(keyword))
      );

      if (foundMatch) {
        const responses = foundMatch.responses;
        botReply = responses[Math.floor(Math.random() * responses.length)];
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: "bot", text: botReply },
      ]);
    }, 800);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100 h-[600px] flex flex-col">
      <div className="bg-gradient-to-r from-orange-400 to-pink-500 p-4 text-white flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">
            ❤️
          </div>
          <div>
            <h3 className="font-bold">Sahayak</h3>
            <p className="text-xs text-white/80">Therapeutic Companion</p>
          </div>
        </div>
        <button className="text-xs bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition font-bold flex items-center gap-1">
          <Phone size={12} /> Live Help
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-orange-50/30">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
                msg.sender === "user"
                  ? "bg-peacock text-white rounded-br-none"
                  : "bg-white border border-orange-100 text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* EMOTIONAL CHIPS */}
      <div className="px-4 py-2 bg-white border-t border-orange-50 overflow-x-auto whitespace-nowrap no-scrollbar">
        <div className="flex gap-2">
          {SUGGESTED_QUESTIONS.map((q, i) => (
            <button
              key={i}
              onClick={() => handleSend(q)}
              className="px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold border border-orange-100 hover:bg-orange-100 transition hover:scale-105"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 bg-white border-t border-orange-100">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Share your feelings here..."
            className="flex-1 bg-gray-100 rounded-full px-6 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
          />
          <button
            onClick={() => handleSend()}
            className="w-12 h-12 bg-peacock text-white rounded-full flex items-center justify-center hover:bg-rani transition shadow-lg"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}

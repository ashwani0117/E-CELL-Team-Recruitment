import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Palette, Video, Instagram, Megaphone, LayoutGrid, Code2, X } from "lucide-react";

interface DomainsStepProps {
  onNext: () => void;
  onBack: () => void;
  selectedDomain: string;
  onDomainSelect: (d: string) => void;
}

const domains = [
  {
    id: "creative",
    icon: <Palette className="w-6 h-6" />,
    title: "Creative",
    role: "The Architect",
    tagline: "Design the visual identity of entrepreneurship",
    workOn: "Brand design, event posters, visual campaigns, motion graphics, and the entire aesthetic language of E-Cell.",
    joinIf: "You think visually, sketch ideas in the margins, and believe design is how you say something without words.",
    youGain: "A real design portfolio, brand strategy skills, and the ability to shape how thousands perceive E-Cell.",
  },
  {
    id: "production",
    icon: <Video className="w-6 h-6" />,
    title: "Production",
    role: "The Storyteller",
    tagline: "Capture, edit, and tell our story through video",
    workOn: "Event films, Instagram reels, documentary-style coverage, photography, and cinematic storytelling.",
    joinIf: "You love storytelling through a lens, obsess over transitions, and think every moment deserves a great shot.",
    youGain: "Videography portfolio, production workflow experience, and content that reaches thousands.",
  },
  {
    id: "social-media",
    icon: <Instagram className="w-6 h-6" />,
    title: "Social Media",
    role: "The Signal",
    tagline: "Build the digital presence of E-Cell",
    workOn: "Content calendars, Instagram and LinkedIn strategy, reels planning, community engagement, and analytics.",
    joinIf: "You understand what makes people stop scrolling and know the difference between content and noise.",
    youGain: "Platform analytics, community building skills, and a track record of growing a real audience.",
  },
  {
    id: "pr",
    icon: <Megaphone className="w-6 h-6" />,
    title: "PR & Outreach",
    role: "The Negotiator",
    tagline: "Connect E-Cell with the world beyond campus",
    workOn: "Media relations, sponsorship pitches, external partnerships, press coverage, inter-college collaborations.",
    joinIf: "You're a natural communicator who loves networking, negotiating, and opening doors that seem closed.",
    youGain: "Industry connections, communication skills, and real institutional relationship-building experience.",
  },
  {
    id: "management",
    icon: <LayoutGrid className="w-6 h-6" />,
    title: "Management",
    role: "The Coordinator",
    tagline: "Organize the chaos that makes great events",
    workOn: "Event logistics, budget management, team coordination, scheduling, vendor management, and ops.",
    joinIf: "You already have a checklist made before the meeting starts. Detail-oriented and execution-obsessed.",
    youGain: "Operations skills, leadership experience, and the ability to run large-scale events from scratch.",
  },
  {
    id: "tech",
    icon: <Code2 className="w-6 h-6" />,
    title: "Tech",
    role: "The Engineer",
    tagline: "Build the tools that power the ecosystem",
    workOn: "Websites, registration systems, automation tools, internal dashboards, and digital infrastructure.",
    joinIf: "You build things that work. You see a problem and immediately think about what you could code to fix it.",
    youGain: "Real-world project experience, a deployable portfolio, and tools people actually use.",
  },
];

type Domain = typeof domains[0];

function DomainModal({ domain, onClose, onSelect }: { domain: Domain; onClose: () => void; onSelect: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative z-10 w-full max-w-lg bg-[#111] border border-primary/30 rounded-sm overflow-hidden"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="text-primary">{domain.icon}</div>
              <div>
                <h3 className="font-display text-3xl text-white uppercase tracking-wide">{domain.title}</h3>
                <p className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">{domain.role}</p>
              </div>
            </div>
            <button data-testid="modal-close" onClick={onClose} className="text-white/30 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-5">
            {[
              { label: "What You'll Work On", text: domain.workOn },
              { label: "Who Should Join", text: domain.joinIf },
              { label: "What You'll Gain", text: domain.youGain },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-[9px] font-mono text-primary uppercase tracking-[0.25em] mb-1.5">{item.label}</div>
                <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <button
            data-testid="modal-select-btn"
            onClick={onSelect}
            className="mt-6 w-full py-3 border border-primary text-white font-bold uppercase tracking-widest text-xs hover:bg-primary transition-colors duration-300"
          >
            Select {domain.title} as My Domain
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function DomainsStep({ onNext, onBack, selectedDomain, onDomainSelect }: DomainsStepProps) {
  const [preview, setPreview] = useState<Domain | null>(null);

  function handleSelect(domain: Domain) {
    onDomainSelect(domain.title);
    setPreview(null);
  }

  return (
    <div className="relative h-full w-full flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(179,18,23,0.06)_0%,transparent_70%)]" />

      {/* Classified bar */}
      <div className="relative z-10 border-b border-white/5 bg-[#0f0f0f]/80 px-6 py-3 flex items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em]">Role Assignment — Document 04</span>
        <div className="ml-auto font-mono text-[10px] text-white/20">Every heist has specialists</div>
      </div>

      <div className="relative z-10 flex-1 overflow-y-auto px-6 py-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] text-white uppercase tracking-wider mb-1">
              Choose Your <span className="text-primary">Role</span>
            </h2>
            <div className="h-[2px] w-16 bg-primary mb-3" />
            <p className="text-white/40 text-xs font-mono uppercase tracking-widest">
              {selectedDomain
                ? <span>Selected: <span className="text-primary">{selectedDomain}</span> — change anytime</span>
                : "Click a domain to view details, then select your role"}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {domains.map((domain, i) => (
              <motion.button
                key={domain.id}
                data-testid={`domain-card-${domain.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                onClick={() => setPreview(domain)}
                className={`text-left bg-[#111] border p-5 rounded-sm relative group overflow-hidden transition-all duration-300 ${
                  selectedDomain === domain.title
                    ? "border-primary"
                    : "border-white/5 hover:border-primary/40"
                }`}
              >
                {selectedDomain === domain.title && (
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary" />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className={`mb-3 transition-colors duration-300 ${selectedDomain === domain.title ? "text-primary" : "text-white/25 group-hover:text-primary"}`}>
                  {domain.icon}
                </div>
                <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-0.5">{domain.title}</h3>
                <p className="text-[9px] font-mono text-primary/50 uppercase tracking-widest mb-2">{domain.role}</p>
                <p className="text-[11px] text-white/40 leading-relaxed">{domain.tagline}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/5 bg-[#0b0b0b]/90 px-6 py-4 flex items-center justify-between">
        <button
          data-testid="domains-back-btn"
          onClick={onBack}
          className="flex items-center gap-2 text-white/40 hover:text-white text-xs font-mono uppercase tracking-widest transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>
        <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Step 4 of 6</span>
        <motion.button
          data-testid="domains-next-btn"
          onClick={onNext}
          disabled={!selectedDomain}
          whileHover={selectedDomain ? { scale: 1.04 } : {}}
          whileTap={selectedDomain ? { scale: 0.97 } : {}}
          className={`flex items-center gap-2 px-6 py-2.5 border font-bold text-xs uppercase tracking-widest transition-all duration-300 ${
            selectedDomain
              ? "border-primary text-white hover:bg-primary cursor-pointer"
              : "border-white/10 text-white/20 cursor-not-allowed"
          }`}
        >
          {selectedDomain ? "Confirmed, Next" : "Select a Domain"}
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>

      <AnimatePresence>
        {preview && <DomainModal domain={preview} onClose={() => setPreview(null)} onSelect={() => handleSelect(preview)} />}
      </AnimatePresence>
    </div>
  );
}

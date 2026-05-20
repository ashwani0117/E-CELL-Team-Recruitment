import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown, Building2, Trophy, Users, Target, Rocket, Zap, Swords, Globe, Award, BadgeCheck, Landmark } from "lucide-react";
import achievement1 from "@assets/WhatsApp_3.20.51_PM_1779270780103.jpeg";
import achievement2 from "@assets/WhatsApp_at_3.19.14_PM_1779270780103.jpeg";
import achievement3 from "@assets/WhatsApp_Image_220_at_3.19.14_PM_1779270780103.jpeg";
import achievement4 from "@assets/WhatsApp_Image_2026-05-20_at_3.19.10_PM_1779270780104.jpeg";
import achievement5 from "@assets/WhatsApp_Image_2026-05-20_at_3.19.14_PM_1779270780104.jpeg";
import achievement6 from "@assets/WhatsApp_Image9.15_PM_1779270780104.jpeg";

interface WhyStepProps {
  onNext: () => void;
  onBack: () => void;
}

const reasons = [
  { icon: <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Startup Ecosystem", desc: "Step inside real entrepreneurial environments" },
  { icon: <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />, title: "National Competitions", desc: "Represent IIST at stages that matter" },
  { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Founder Network", desc: "Build connections that outlast college" },
  { icon: <Target className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Leadership", desc: "Lead projects, not just join them" },
  { icon: <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Real Execution", desc: "Ship things that actually work" },
  { icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Skill Growth", desc: "Grow in ways your syllabus never planned" },
  { icon: <Swords className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Hackathons", desc: "Win, lose, and learn at scale" },
  { icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Community", desc: "Your tribe of builders starts here" },
];

const highlights = [
  { icon: <Award className="w-5 h-5" />, title: "Certificates", desc: "Proof of contribution and growth" },
  { icon: <BadgeCheck className="w-5 h-5" />, title: "IIT Visits", desc: "Exposure through visits and interactions" },
  { icon: <Landmark className="w-5 h-5" />, title: "Member Achievements", desc: "Real wins, roles, and recognition" },
];

const achievementImages = [
  { src: achievement1, label: "Achievement 01" },
  { src: achievement2, label: "Achievement 02" },
  { src: achievement3, label: "Achievement 03" },
  { src: achievement4, label: "Achievement 04" },
  { src: achievement5, label: "Achievement 05" },
  { src: achievement6, label: "Achievement 06" },
];

export default function WhyStep({ onNext, onBack }: WhyStepProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [showScrollHint, setShowScrollHint] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const check = () => setShowScrollHint(el.scrollHeight > el.clientHeight + 16 && el.scrollTop < el.scrollHeight - el.clientHeight - 16);
    check();
    el.addEventListener("scroll", check);
    window.addEventListener("resize", check);
    return () => { el.removeEventListener("scroll", check); window.removeEventListener("resize", check); };
  }, []);

  return (
    <div className="relative h-full w-full flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(179,18,23,0.08)_0%,transparent_60%)]" />

      <div className="relative z-10 border-b border-white/5 bg-[#0f0f0f]/80 px-4 sm:px-6 py-3 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
        <span className="font-mono text-[9px] sm:text-[10px] text-primary uppercase tracking-[0.25em] sm:tracking-[0.3em]">Mission Briefing — Document 02</span>
        <div className="ml-auto font-mono text-[9px] text-white/20 hidden sm:block uppercase tracking-widest">E-Cell IIST</div>
      </div>

      <div ref={contentRef} className="relative z-10 flex-1 overflow-y-auto min-h-0 px-4 sm:px-6 md:px-10 py-5 sm:py-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <h2 className="font-display text-[clamp(2.2rem,7vw,5rem)] text-white uppercase tracking-wider mb-1">
              Why Join <span className="text-primary">E-Cell?</span>
            </h2>
            <div className="h-[2px] w-12 bg-primary mb-3" />
            <p className="text-white/40 text-xs font-mono uppercase tracking-widest">The Professor's briefing — what you stand to gain</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8">
            {reasons.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.06 }} className="bg-[#111] border border-white/5 p-3 sm:p-4 rounded-sm relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
                <div className="text-white/25 group-hover:text-primary transition-colors duration-300 mb-2 sm:mb-3">{r.icon}</div>
                <h3 className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wide mb-0.5 sm:mb-1">{r.title}</h3>
                <p className="text-[10px] sm:text-[11px] text-white/40 leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="h-px flex-1 bg-white/10" />
              <p className="text-[9px] sm:text-[10px] font-mono text-primary uppercase tracking-[0.35em]">Highlights / Achievements</p>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
              {highlights.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }} className="border border-primary/20 bg-[#101010] p-4 sm:p-5 rounded-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(179,18,23,0.14)_0%,transparent_70%)]" />
                  <div className="relative z-10 flex items-start gap-3">
                    <div className="text-primary mt-0.5 shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-white uppercase tracking-wide text-xs sm:text-sm font-bold mb-1">{item.title}</h3>
                      <p className="text-white/40 text-[10px] sm:text-[11px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-8 sm:mb-10">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="h-px flex-1 bg-white/10" />
              <p className="text-[9px] sm:text-[10px] font-mono text-primary uppercase tracking-[0.35em]">Achievement Gallery</p>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {achievementImages.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                  className="aspect-square border border-white/5 rounded-sm overflow-hidden relative bg-[#111] group"
                >
                  <img src={item.src} alt={item.label} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute inset-0 flex items-end p-3">
                    <p className="text-white text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] drop-shadow">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }} className="border-l-2 border-primary/40 pl-4 mb-6">
            <p className="text-white/30 text-xs sm:text-sm italic">"In this world, there are two types of people — those who watch the clock, and those who build the future."</p>
            <p className="text-primary/50 text-[10px] font-mono uppercase tracking-widest mt-2">— The Plan</p>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showScrollHint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-[60px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 pointer-events-none"
          >
            <span className="text-[9px] font-mono text-white/25 uppercase tracking-widest">Scroll for more</span>
            <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
              <ChevronDown className="w-4 h-4 text-white/25" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 border-t border-white/5 bg-[#0b0b0b]/95 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2">
        <button data-testid="why-back-btn" onClick={onBack} className="flex items-center gap-1.5 text-white/40 hover:text-white text-xs font-mono uppercase tracking-widest transition-colors shrink-0">
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back</span>
        </button>
        <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Step 2 of 6</span>
        <motion.button data-testid="why-next-btn" onClick={onNext} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 border border-primary text-white font-bold text-xs uppercase tracking-widest hover:bg-primary active:scale-95 transition-all duration-300 shrink-0">
          I'm In<span className="hidden sm:inline">, Next</span>
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
}

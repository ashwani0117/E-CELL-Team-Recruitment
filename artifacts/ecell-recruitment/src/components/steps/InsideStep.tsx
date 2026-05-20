import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import inside1 from "@assets/20260504_82456AMByGPSMapCamera_1779271667315.jpg";
import inside2 from "@assets/20260504_82511AMByGPSMapCamera_1779271667317.jpg";
import inside3 from "@assets/WhatsApp_I6-05-20_at_3.36.26_PM_1779271667318.jpeg";
import inside4 from "@assets/WhatsApp_Image_2026-05-20_at_3.33.49_PM_1779271667319.jpeg";
import inside5 from "@assets/WhatsApp_Image_2026-05-20_at_3.36.26_PM_1779271667319.jpeg";
import inside6 from "@assets/WhatsApp_Image9.15_PM_1779271667319.jpeg";

interface InsideStepProps {
  onNext: () => void;
  onBack: () => void;
}

function Counter({ end, label, suffix = "+" }: { end: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center border border-white/5 bg-[#111] p-3 sm:p-5 rounded-sm">
      <div className="font-display text-3xl sm:text-4xl md:text-5xl text-primary leading-none mb-1">
        {count}{suffix}
      </div>
      <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/40">{label}</div>
    </div>
  );
}

const activities = [
  { label: "Startup Sessions", file: "03" },
  { label: "Workshops", file: "07" },
  { label: "Hackathons", file: "12" },
  { label: "Networking Events", file: "15" },
  { label: "Branding Campaigns", file: "19" },
  { label: "Competitions", file: "24" },
];

const missionImages = [
  { src: inside1, label: "Entrepreneurship talk" },
  { src: inside2, label: "Audience session" },
  { src: inside3, label: "Team discussion" },
  { src: inside4, label: "Hackathon winners" },
  { src: inside5, label: "Workshop group photo" },
  { src: inside6, label: "Conference meetup" },
];

export default function InsideStep({ onNext, onBack }: InsideStepProps) {
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
      <div className="absolute inset-0 bg-[#0d0d0d]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(179,18,23,0.07)_0%,transparent_60%)]" />

      <div className="relative z-10 border-b border-white/5 bg-[#0f0f0f]/80 px-4 sm:px-6 py-3 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
        <span className="font-mono text-[9px] sm:text-[10px] text-primary uppercase tracking-[0.25em] sm:tracking-[0.3em]">Operations File — Document 03</span>
        <div className="ml-auto font-mono text-[9px] text-white/20 hidden sm:block uppercase tracking-widest">Classified</div>
      </div>

      <div ref={contentRef} className="relative z-10 flex-1 overflow-y-auto min-h-0 px-4 sm:px-6 md:px-10 py-5 sm:py-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6 sm:mb-8">
            <h2 className="font-display text-[clamp(2.2rem,7vw,5rem)] text-white uppercase tracking-wider mb-1">
              Inside The <span className="text-primary">Mission</span>
            </h2>
            <div className="h-[2px] w-12 bg-primary mb-3" />
            <p className="text-white/40 text-xs font-mono uppercase tracking-[0.2em]">Execution. Innovation. Impact.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8">
            <Counter end={50} label="Events Conducted" />
            <Counter end={3000} label="Students Reached" />
            <Counter end={30} label="Workshops" />
            <Counter end={20} label="Collaborations" />
          </div>

          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="h-px flex-1 bg-white/10" />
              <p className="text-[9px] sm:text-[10px] font-mono text-primary uppercase tracking-[0.35em]">Inside The Mission</p>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {missionImages.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                  className="aspect-square border border-white/5 rounded-sm overflow-hidden relative bg-[#111] group"
                >
                  <img src={item.src} alt={item.label} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-0 flex items-end p-3">
                    <p className="text-white text-[9px] sm:text-[10px] uppercase tracking-[0.14em] sm:tracking-[0.18em] drop-shadow leading-tight">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 mb-6">
            {activities.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="aspect-video bg-[#141414] border border-white/5 flex items-end p-3 sm:p-4 rounded-sm relative overflow-hidden group"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at ${20 + i * 15}% 50%, rgba(179,18,23,0.12), transparent 70%)` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="relative z-10 flex items-center justify-between w-full">
                  <span className="font-mono text-[8px] sm:text-[9px] text-primary/60 uppercase">File {a.file}</span>
                  <span className="font-bold text-white text-[9px] sm:text-[10px] uppercase tracking-wide text-right">{a.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }} className="text-center pb-4">
            <p className="text-white/10 text-[10px] font-mono uppercase tracking-[0.5em]">bella ciao, bella ciao</p>
          </motion.div>
        </div>
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
        <button
          data-testid="inside-back-btn"
          onClick={onBack}
          className="flex items-center gap-1.5 text-white/40 hover:text-white text-xs font-mono uppercase tracking-widest transition-colors shrink-0"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back</span>
        </button>
        <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Step 3 of 6</span>
        <motion.button
          data-testid="inside-next-btn"
          onClick={onNext}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 border border-primary text-white font-bold text-xs uppercase tracking-widest hover:bg-primary active:scale-95 transition-all duration-300 shrink-0"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
}

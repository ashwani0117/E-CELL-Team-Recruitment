import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import ecellLogo from "@assets/image_1779218120017.png";

interface HeroStepProps {
  onNext: () => void;
}

function DaliMask({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 240" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="100" cy="110" rx="72" ry="88" />
      <ellipse cx="100" cy="108" rx="58" ry="74" fill="#0b0b0b" />
      <ellipse cx="74" cy="88" rx="14" ry="10" />
      <ellipse cx="126" cy="88" rx="14" ry="10" />
      <ellipse cx="74" cy="88" rx="8" ry="6" fill="#0b0b0b" />
      <ellipse cx="126" cy="88" rx="8" ry="6" fill="#0b0b0b" />
      <path d="M78 130 Q100 145 122 130" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      <rect x="85" y="195" width="30" height="6" rx="3" />
      <rect x="91" y="201" width="18" height="20" rx="2" />
    </svg>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function HeroStep({ onNext }: HeroStepProps) {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Layered dark atmospheric background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(179,18,23,0.18)_0%,rgba(11,11,11,1)_65%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,11,11,0.2)_0%,rgba(11,11,11,0.95)_100%)]" />

      {/* Large Dali mask in background — left */}
      <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none">
        <DaliMask className="w-[340px] h-[340px] text-white" />
      </div>
      {/* Large Dali mask in background — right */}
      <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none">
        <DaliMask className="w-[340px] h-[340px] text-white" />
      </div>

      {/* Horizontal red scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent pointer-events-none"
        animate={{ top: ["15%", "85%", "15%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <img src={ecellLogo} alt="E-Cell IIST" className="w-20 h-20 object-contain mx-auto" />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-block py-1 px-4 border border-primary/30 text-primary font-mono text-[10px] tracking-[0.3em] uppercase bg-primary/5">
            Classified — Recruitment 2026–27
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-display text-[clamp(3.5rem,12vw,8rem)] text-white uppercase tracking-wider leading-none mb-5"
        >
          THE SIGNAL<br />
          <span className="text-primary" style={{ textShadow: "0 0 40px rgba(179,18,23,0.6)" }}>
            IS OUT
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-white/50 text-sm md:text-base uppercase tracking-[0.2em] mb-3">
          E-Cell IIST officially opens
        </motion.p>

        <motion.p variants={itemVariants} className="text-white/30 text-xs md:text-sm italic mb-12 max-w-sm">
          "Not everyone watches opportunities. Some people build them."
        </motion.p>

        <motion.button
          variants={itemVariants}
          onClick={onNext}
          data-testid="hero-enter-btn"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="group inline-flex items-center gap-3 px-10 py-4 border border-primary text-white font-bold uppercase tracking-[0.25em] text-sm relative overflow-hidden"
          style={{ boxShadow: "0 0 20px rgba(179,18,23,0.3)" }}
        >
          <span className="absolute inset-0 bg-primary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-400 ease-out" />
          <span className="relative z-10">Enter The Mission</span>
          <ChevronRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>

        <motion.p variants={itemVariants} className="mt-8 text-[10px] font-mono text-white/15 uppercase tracking-widest">
          Step 1 of 6 — The Signal
        </motion.p>
      </motion.div>
    </div>
  );
}

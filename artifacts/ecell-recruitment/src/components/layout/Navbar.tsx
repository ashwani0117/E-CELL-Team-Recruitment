import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { Link } from "wouter";
import ecellLogo from "@assets/image_1779218120017.png";

interface NavbarProps {
  step: number;
  totalSteps: number;
  stepTitle: string;
  goToStep: (s: number) => void;
}

export default function Navbar({ step, totalSteps, stepTitle, goToStep }: NavbarProps) {
  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 bg-[#0b0b0b]/90 backdrop-blur-md border-b border-white/5"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto px-3 sm:px-4 md:px-8 h-[64px] sm:h-[72px] flex items-center justify-between gap-2">
        <button onClick={() => goToStep(0)} className="flex items-center gap-2 sm:gap-3 shrink-0" data-testid="nav-logo">
          <img src={ecellLogo} alt="E-Cell IIST" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
          <div>
            <div className="font-display text-base sm:text-lg text-white uppercase tracking-widest leading-none">E-Cell</div>
            <div className="text-[9px] sm:text-[10px] font-mono text-white/40 tracking-[0.2em] uppercase">IIST</div>
          </div>
        </button>

        <div className="flex items-center gap-2 sm:gap-3 flex-1 justify-center">
          <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest hidden md:block truncate max-w-[120px]">
            {stepTitle}
          </span>
          <div className="flex items-center gap-1 sm:gap-1.5">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <button
                key={i}
                data-testid={`nav-step-${i}`}
                onClick={() => i < step && goToStep(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === step
                    ? "w-5 sm:w-6 h-1 sm:h-1.5 bg-primary"
                    : i < step
                    ? "w-1 sm:w-1.5 h-1 sm:h-1.5 bg-primary/50 cursor-pointer hover:bg-primary/80"
                    : "w-1 sm:w-1.5 h-1 sm:h-1.5 bg-white/10 cursor-default"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            href="/faq"
            data-testid="nav-faq-link"
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full border border-primary bg-primary/15 text-primary text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.24em] shadow-[0_0_18px_rgba(179,18,23,0.45)]"
          >
            <HelpCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>FAQ</span>
          </Link>
          <div className="text-[10px] font-mono text-white/30 tracking-widest hidden sm:block">
            <span className="text-primary font-bold">{String(step + 1).padStart(2, "0")}</span>
            <span className="mx-1">/</span>
            {String(totalSteps).padStart(2, "0")}
          </div>
        </div>
      </div>
    </motion.header>
  );
}

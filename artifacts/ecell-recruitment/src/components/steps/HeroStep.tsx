import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import ecellLogo from "@assets/image_1779218120017.png";
import daliMask from "@assets/image_1779219329578.png";

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

      {/* Dali mask — left */}
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
      >
        <img
          src={daliMask}
          alt=""
          className="w-[260px] md:w-[340px] lg:w-[400px] object-contain"
          style={{ opacity: 0.18, filter: "grayscale(30%) brightness(0.7)" }}
        />
      </motion.div>
      {/* Dali mask — right (mirrored) */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
      >
        <img
          src={daliMask}
          alt=""
          className="w-[260px] md:w-[340px] lg:w-[400px] object-contain"
          style={{ opacity: 0.18, filter: "grayscale(30%) brightness(0.7) scaleX(-1)", transform: "scaleX(-1)" }}
        />
      </motion.div>

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

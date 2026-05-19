import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Building2, Trophy, Users, Target, Rocket, Zap, Swords, Globe } from "lucide-react";

interface WhyStepProps {
  onNext: () => void;
  onBack: () => void;
}

const reasons = [
  { icon: <Building2 className="w-5 h-5" />, title: "Startup Ecosystem", desc: "Step inside real entrepreneurial environments" },
  { icon: <Trophy className="w-5 h-5" />, title: "National Competitions", desc: "Represent IIST at stages that matter" },
  { icon: <Users className="w-5 h-5" />, title: "Founder Network", desc: "Build connections that outlast college" },
  { icon: <Target className="w-5 h-5" />, title: "Leadership", desc: "Lead projects, not just join them" },
  { icon: <Rocket className="w-5 h-5" />, title: "Real Execution", desc: "Ship things that actually work" },
  { icon: <Zap className="w-5 h-5" />, title: "Skill Growth", desc: "Grow in ways your syllabus never planned" },
  { icon: <Swords className="w-5 h-5" />, title: "Hackathons", desc: "Win, lose, and learn at scale" },
  { icon: <Globe className="w-5 h-5" />, title: "Community", desc: "Your tribe of builders starts here" },
];

export default function WhyStep({ onNext, onBack }: WhyStepProps) {
  return (
    <div className="relative h-full w-full flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(179,18,23,0.08)_0%,transparent_60%)]" />

      {/* Classified document top bar */}
      <div className="relative z-10 border-b border-white/5 bg-[#0f0f0f]/80 px-6 py-3 flex items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em]">Mission Briefing — Document 02</span>
        <div className="ml-auto font-mono text-[10px] text-white/20 uppercase tracking-widest">IIST Indore / E-Cell</div>
      </div>

      <div className="relative z-10 flex-1 overflow-y-auto px-6 py-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] text-white uppercase tracking-wider mb-1">
              Why Join <span className="text-primary">E-Cell?</span>
            </h2>
            <div className="h-[2px] w-16 bg-primary mb-3" />
            <p className="text-white/40 text-xs font-mono uppercase tracking-widest">
              The Professor's briefing — what you stand to gain
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-[#111] border border-white/5 p-4 rounded-sm relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
                <div className="text-white/25 group-hover:text-primary transition-colors duration-300 mb-3">
                  {r.icon}
                </div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wide mb-1">{r.title}</h3>
                <p className="text-[11px] text-white/40 leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Money Heist quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="border-l-2 border-primary/40 pl-4 mb-8"
          >
            <p className="text-white/30 text-sm italic">
              "In this world, there are two types of people — those who watch the clock, and those who build the future."
            </p>
            <p className="text-primary/50 text-[10px] font-mono uppercase tracking-widest mt-2">— The Plan</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="relative z-10 border-t border-white/5 bg-[#0b0b0b]/90 px-6 py-4 flex items-center justify-between">
        <button
          data-testid="why-back-btn"
          onClick={onBack}
          className="flex items-center gap-2 text-white/40 hover:text-white text-xs font-mono uppercase tracking-widest transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>
        <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Step 2 of 6</span>
        <motion.button
          data-testid="why-next-btn"
          onClick={onNext}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 px-6 py-2.5 border border-primary text-white font-bold text-xs uppercase tracking-widest hover:bg-primary transition-colors duration-300"
        >
          I'm In, Next
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
}

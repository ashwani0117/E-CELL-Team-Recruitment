import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Instagram, Check } from "lucide-react";

interface FollowStepProps {
  onNext: () => void;
  onBack: () => void;
}

const mockPosts = [
  { id: 1, label: "Startup Summit", tag: "#ecell #iist" },
  { id: 2, label: "Founder Talk", tag: "#ecell #founders" },
  { id: 3, label: "Hackathon", tag: "#ecell #build" },
  { id: 4, label: "Workshop", tag: "#ecell #learn" },
  { id: 5, label: "Team 2025", tag: "#ecell #team" },
  { id: 6, label: "Pitch Night", tag: "#ecell #pitch" },
];

export default function FollowStep({ onNext, onBack }: FollowStepProps) {
  const [followed, setFollowed] = useState(false);

  function handleFollow() {
    window.open("https://www.instagram.com/ecell_iist_indore", "_blank");
    setFollowed(true);
  }

  return (
    <div className="relative h-full w-full flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0d0d]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(179,18,23,0.08)_0%,transparent_60%)]" />

      {/* Classified bar */}
      <div className="relative z-10 border-b border-white/5 bg-[#0f0f0f]/80 px-6 py-3 flex items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em]">Network Signal — Document 05</span>
        <div className="ml-auto font-mono text-[10px] text-white/20">Join The Resistance</div>
      </div>

      <div className="relative z-10 flex-1 overflow-y-auto px-6 py-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] text-white uppercase tracking-wider mb-1">
              Follow The <span className="text-primary">Signal</span>
            </h2>
            <div className="h-[2px] w-16 bg-primary mb-3" />
            <p className="text-white/40 text-xs font-mono uppercase tracking-widest">
              The mission broadcasts here — stay connected
            </p>
          </motion.div>

          {/* Mock IG grid */}
          <div className="grid grid-cols-3 gap-2 mb-10 max-w-sm mx-auto md:max-w-none md:grid-cols-6">
            {mockPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="aspect-square bg-[#151515] border border-white/5 rounded-sm overflow-hidden relative group"
              >
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ background: `radial-gradient(circle, rgba(179,18,23,0.5), transparent 70%)` }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
                  <Instagram className="w-4 h-4 text-primary/30 mb-1" />
                  <p className="text-white/50 font-bold text-[8px] uppercase tracking-wider leading-tight">{post.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <AnimatePresence mode="wait">
              {!followed ? (
                <motion.div
                  key="btn"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center gap-4"
                >
                  <p className="text-white/30 text-xs font-mono uppercase tracking-widest">
                    Follow us to unlock the application vault
                  </p>
                  <motion.button
                    data-testid="follow-instagram-btn"
                    onClick={handleFollow}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-3 px-10 py-4 border border-primary text-white font-bold uppercase tracking-widest text-sm hover:bg-primary transition-all duration-300 group"
                    style={{ boxShadow: "0 0 20px rgba(179,18,23,0.3)" }}
                  >
                    <Instagram className="w-5 h-5" />
                    Follow @ecell_iist_indore
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="unlocked"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 16 }}
                  className="flex flex-col items-center gap-3"
                >
                  <motion.div
                    className="w-14 h-14 rounded-full bg-green-500/15 border border-green-500/40 flex items-center justify-center"
                    animate={{ boxShadow: ["0 0 0 rgba(34,197,94,0)", "0 0 30px rgba(34,197,94,0.4)", "0 0 0 rgba(34,197,94,0)"] }}
                    transition={{ duration: 1, repeat: 1 }}
                  >
                    <Check className="w-7 h-7 text-green-400" />
                  </motion.div>
                  <p className="text-green-400 font-mono text-xs uppercase tracking-widest">Signal Received — Vault Unlocked</p>
                  <p className="text-white/30 text-[10px] font-mono">Proceed to the final step</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/5 bg-[#0b0b0b]/90 px-6 py-4 flex items-center justify-between">
        <button
          data-testid="follow-back-btn"
          onClick={onBack}
          className="flex items-center gap-2 text-white/40 hover:text-white text-xs font-mono uppercase tracking-widest transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>
        <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Step 5 of 6</span>
        <motion.button
          data-testid="follow-next-btn"
          onClick={onNext}
          disabled={!followed}
          whileHover={followed ? { scale: 1.04 } : {}}
          whileTap={followed ? { scale: 0.97 } : {}}
          className={`flex items-center gap-2 px-6 py-2.5 border font-bold text-xs uppercase tracking-widest transition-all duration-300 ${
            followed
              ? "border-primary text-white hover:bg-primary cursor-pointer"
              : "border-white/10 text-white/20 cursor-not-allowed"
          }`}
        >
          Enter The Vault
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
}

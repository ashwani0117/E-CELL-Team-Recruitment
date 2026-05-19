import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Instagram, MessageCircle, Check } from "lucide-react";

interface FollowStepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function FollowStep({ onNext, onBack }: FollowStepProps) {
  const [followedIG, setFollowedIG] = useState(false);
  const [joinedWA, setJoinedWA] = useState(false);

  const bothDone = followedIG && joinedWA;

  function handleIG() {
    window.open("https://www.instagram.com/ecell_iist_indore", "_blank");
    setFollowedIG(true);
  }

  function handleWA() {
    window.open("https://chat.whatsapp.com/", "_blank");
    setJoinedWA(true);
  }

  return (
    <div className="relative h-full w-full flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0d0d]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(179,18,23,0.08)_0%,transparent_60%)]" />

      <div className="relative z-10 border-b border-white/5 bg-[#0f0f0f]/80 px-6 py-3 flex items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em]">Network Signal — Document 05</span>
        <div className="ml-auto font-mono text-[10px] text-white/20">Join The Resistance</div>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-8 md:px-10">
        <div className="w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-left"
          >
            <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] text-white uppercase tracking-wider leading-none mb-1">
              Follow The <span className="text-primary">Signal</span>
            </h2>
            <div className="h-[2px] w-16 bg-primary mb-3" />
            <p className="text-white/40 text-xs font-mono uppercase tracking-widest">
              Join our community before entering the vault
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Instagram block */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className={`relative border rounded-sm p-8 flex flex-col items-start gap-4 overflow-hidden transition-all duration-300 ${
                followedIG ? "border-primary/50 bg-primary/5" : "border-white/8 bg-[#111]"
              }`}
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <div className={`w-12 h-12 rounded-sm flex items-center justify-center ${followedIG ? "bg-primary/20" : "bg-white/5"}`}>
                {followedIG
                  ? <Check className="w-6 h-6 text-primary" />
                  : <Instagram className="w-6 h-6 text-white/60" />
                }
              </div>
              <div>
                <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-1">Instagram</h3>
                <p className="text-white/40 text-xs font-mono">@ecell_iist</p>
              </div>
              <p className="text-white/40 text-sm leading-relaxed flex-1">
                Follow our Instagram for updates, events, and behind-the-scenes content.
              </p>
              <button
                data-testid="follow-instagram-btn"
                onClick={handleIG}
                disabled={followedIG}
                className={`w-full py-3 font-bold text-xs uppercase tracking-widest border transition-all duration-300 ${
                  followedIG
                    ? "border-primary/40 text-primary/60 cursor-default"
                    : "border-primary text-white hover:bg-primary cursor-pointer"
                }`}
              >
                {followedIG ? "Followed" : "Follow on Instagram"}
              </button>
            </motion.div>

            {/* WhatsApp block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={`relative border rounded-sm p-8 flex flex-col items-start gap-4 overflow-hidden transition-all duration-300 ${
                joinedWA ? "border-green-500/40 bg-green-500/5" : "border-white/8 bg-[#111]"
              }`}
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
              <div className={`w-12 h-12 rounded-sm flex items-center justify-center ${joinedWA ? "bg-green-500/20" : "bg-white/5"}`}>
                {joinedWA
                  ? <Check className="w-6 h-6 text-green-400" />
                  : <MessageCircle className="w-6 h-6 text-white/60" />
                }
              </div>
              <div>
                <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-1">WhatsApp</h3>
                <p className="text-white/40 text-xs font-mono">E-Cell IIST Community</p>
              </div>
              <p className="text-white/40 text-sm leading-relaxed flex-1">
                Join our WhatsApp community for real-time announcements and coordination.
              </p>
              <button
                data-testid="join-whatsapp-btn"
                onClick={handleWA}
                disabled={joinedWA}
                className={`w-full py-3 font-bold text-xs uppercase tracking-widest border transition-all duration-300 ${
                  joinedWA
                    ? "border-green-500/40 text-green-500/60 cursor-default"
                    : "border-green-500/70 text-white hover:bg-green-500/20 cursor-pointer"
                }`}
              >
                {joinedWA ? "Joined" : "Join WhatsApp Community"}
              </button>
            </motion.div>
          </div>

          <AnimatePresence>
            {bothDone && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-center"
              >
                <p className="text-primary/70 font-mono text-xs uppercase tracking-widest">
                  Signal received — vault access granted
                </p>
              </motion.div>
            )}
          </AnimatePresence>
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
          disabled={!bothDone}
          whileHover={bothDone ? { scale: 1.04 } : {}}
          whileTap={bothDone ? { scale: 0.97 } : {}}
          className={`flex items-center gap-2 px-6 py-2.5 border font-bold text-xs uppercase tracking-widest transition-all duration-300 ${
            bothDone
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

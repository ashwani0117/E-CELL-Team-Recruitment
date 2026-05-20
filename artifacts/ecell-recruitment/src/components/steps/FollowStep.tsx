import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown, Instagram, MessageCircle, Check, Lock } from "lucide-react";

interface FollowStepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function FollowStep({ onNext, onBack }: FollowStepProps) {
  const [followedIG, setFollowedIG] = useState(false);
  const [joinedWA, setJoinedWA] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showScrollHint, setShowScrollHint] = useState(false);

  const completed = (followedIG ? 1 : 0) + (joinedWA ? 1 : 0);
  const bothDone = completed === 2;

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const check = () => {
      setShowScrollHint(el.scrollHeight > el.clientHeight + 16 && el.scrollTop < el.scrollHeight - el.clientHeight - 16);
    };
    check();
    el.addEventListener("scroll", check);
    window.addEventListener("resize", check);
    return () => { el.removeEventListener("scroll", check); window.removeEventListener("resize", check); };
  }, []);

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

      <div className="relative z-10 border-b border-white/5 bg-[#0f0f0f]/80 px-4 sm:px-6 py-3 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
        <span className="font-mono text-[9px] sm:text-[10px] text-primary uppercase tracking-[0.25em] sm:tracking-[0.3em]">Network Signal — Document 05</span>
        <div className="ml-auto font-mono text-[9px] text-white/20 hidden sm:block">Join The Resistance</div>
      </div>

      <div ref={contentRef} className="relative z-10 flex-1 overflow-y-auto min-h-0 px-4 sm:px-6 md:px-10 py-6">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
            <h2 className="font-display text-[clamp(2.2rem,7vw,4.5rem)] text-white uppercase tracking-wider leading-none mb-1">
              Follow The <span className="text-primary">Signal</span>
            </h2>
            <div className="h-[2px] w-12 bg-primary mb-3" />
            <p className="text-white/40 text-xs font-mono uppercase tracking-widest">
              Join our community before entering the vault
            </p>
          </motion.div>

          {/* Progress tracker */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-5 flex items-center gap-3"
          >
            <div className="flex gap-2">
              {[0, 1].map((i) => (
                <div key={i} className={`h-1.5 w-10 rounded-full transition-all duration-500 ${i < completed ? "bg-primary shadow-[0_0_8px_rgba(179,18,23,0.6)]" : "bg-white/10"}`} />
              ))}
            </div>
            <span className={`font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 ${bothDone ? "text-primary" : "text-white/30"}`}>
              {bothDone ? "✓ Both done — vault unlocked" : `${completed} of 2 completed`}
            </span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {/* Instagram */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className={`relative border rounded-sm p-5 sm:p-6 flex flex-col gap-4 overflow-hidden transition-all duration-300 ${
                followedIG ? "border-primary/50 bg-primary/5" : "border-white/8 bg-[#111]"
              }`}
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-sm flex items-center justify-center shrink-0 transition-all duration-300 ${followedIG ? "bg-primary/20" : "bg-white/5"}`}>
                  {followedIG ? <Check className="w-5 h-5 text-primary" /> : <Instagram className="w-5 h-5 text-white/60" />}
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl text-white uppercase tracking-wide leading-none">Instagram</h3>
                  <p className="text-white/40 text-[10px] font-mono mt-0.5">@ecell_iist</p>
                </div>
              </div>
              <p className="text-white/40 text-xs sm:text-sm leading-relaxed">
                Follow our Instagram for updates, events, and behind-the-scenes content.
              </p>
              <button
                data-testid="follow-instagram-btn"
                onClick={handleIG}
                disabled={followedIG}
                className={`w-full py-3 font-bold text-xs uppercase tracking-widest border transition-all duration-300 ${
                  followedIG
                    ? "border-primary/40 text-primary/60 cursor-default"
                    : "border-primary text-white hover:bg-primary active:scale-95 cursor-pointer"
                }`}
              >
                {followedIG ? "✓ Followed" : "Follow on Instagram"}
              </button>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={`relative border rounded-sm p-5 sm:p-6 flex flex-col gap-4 overflow-hidden transition-all duration-300 ${
                joinedWA ? "border-green-500/40 bg-green-500/5" : "border-white/8 bg-[#111]"
              }`}
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-sm flex items-center justify-center shrink-0 transition-all duration-300 ${joinedWA ? "bg-green-500/20" : "bg-white/5"}`}>
                  {joinedWA ? <Check className="w-5 h-5 text-green-400" /> : <MessageCircle className="w-5 h-5 text-white/60" />}
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl text-white uppercase tracking-wide leading-none">WhatsApp</h3>
                  <p className="text-white/40 text-[10px] font-mono mt-0.5">E-Cell IIST Community</p>
                </div>
              </div>
              <p className="text-white/40 text-xs sm:text-sm leading-relaxed">
                Join our WhatsApp community for real-time announcements and coordination.
              </p>
              <button
                data-testid="join-whatsapp-btn"
                onClick={handleWA}
                disabled={joinedWA}
                className={`w-full py-3 font-bold text-xs uppercase tracking-widest border transition-all duration-300 ${
                  joinedWA
                    ? "border-green-500/40 text-green-500/60 cursor-default"
                    : "border-green-500/70 text-white hover:bg-green-500/20 active:scale-95 cursor-pointer"
                }`}
              >
                {joinedWA ? "✓ Joined" : "Join WhatsApp Community"}
              </button>
            </motion.div>
          </div>

          <AnimatePresence>
            {bothDone && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="mt-5 text-center border border-primary/20 bg-primary/5 py-3 px-4 rounded-sm"
              >
                <p className="text-primary font-mono text-xs uppercase tracking-widest">
                  Signal received — vault access granted ↓
                </p>
              </motion.div>
            )}
            {!bothDone && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-5 flex items-center justify-center gap-2 text-white/20"
              >
                <Lock className="w-3 h-3" />
                <p className="font-mono text-[10px] uppercase tracking-widest">Complete both steps above to unlock Next</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="h-4" />
        </div>
      </div>

      {/* Scroll hint */}
      <AnimatePresence>
        {showScrollHint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-[60px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 pointer-events-none"
          >
            <span className="text-[9px] font-mono text-white/25 uppercase tracking-widest">Scroll down</span>
            <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
              <ChevronDown className="w-4 h-4 text-white/25" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 border-t border-white/5 bg-[#0b0b0b]/95 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2">
        <button
          data-testid="follow-back-btn"
          onClick={onBack}
          className="flex items-center gap-1.5 text-white/40 hover:text-white text-xs font-mono uppercase tracking-widest transition-colors shrink-0"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back</span>
        </button>
        <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Step 5 of 6</span>
        <motion.button
          data-testid="follow-next-btn"
          onClick={onNext}
          disabled={!bothDone}
          whileHover={bothDone ? { scale: 1.04 } : {}}
          whileTap={bothDone ? { scale: 0.97 } : {}}
          className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 border font-bold text-xs uppercase tracking-widest transition-all duration-300 shrink-0 ${
            bothDone
              ? "border-primary text-white hover:bg-primary cursor-pointer shadow-[0_0_16px_rgba(179,18,23,0.35)]"
              : "border-white/10 text-white/20 cursor-not-allowed"
          }`}
        >
          {bothDone ? "Enter The Vault" : <><Lock className="w-3 h-3" /> Locked</>}
          {bothDone && <ChevronRight className="w-4 h-4" />}
        </motion.button>
      </div>
    </div>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Check } from "lucide-react";

const mockPosts = [
  { id: 1, label: "STARTUP SUMMIT '25", tag: "#ecell #iist" },
  { id: 2, label: "FOUNDER TALK SERIES", tag: "#ecell #networking" },
  { id: 3, label: "HACKATHON WINNERS", tag: "#ecell #hackathon" },
  { id: 4, label: "WORKSHOP RECAP", tag: "#ecell #workshop" },
  { id: 5, label: "TEAM E-CELL 2025", tag: "#ecell #team" },
  { id: 6, label: "PITCH COMPETITION", tag: "#ecell #startup" },
];

export default function FollowSection({ onUnlock }: { onUnlock: () => void }) {
  const [followed, setFollowed] = useState(false);

  function handleFollow() {
    setFollowed(true);
    setTimeout(() => {
      onUnlock();
      const applyEl = document.getElementById("apply");
      if (applyEl) {
        applyEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 1200);
  }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0d0d]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(179,18,23,0.08)_0%,transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-wider mb-2">
            Follow The <span className="text-primary text-glow">Signal</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-6" />
          <p className="text-white/50 uppercase tracking-widest text-sm">
            Stay connected. The mission updates here.
          </p>
        </motion.div>

        {/* Mock Instagram grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto mb-14">
          {mockPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="aspect-square bg-[#151515] border border-white/5 rounded-sm relative overflow-hidden group"
            >
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity"
                style={{
                  background: `radial-gradient(circle at ${30 + idx * 15}% ${40 + idx * 10}%, rgba(179,18,23,0.5), transparent 70%)`
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
                <Instagram className="w-5 h-5 text-primary/40 mb-3" />
                <p className="text-white/60 font-bold text-xs uppercase tracking-wider leading-tight">
                  {post.label}
                </p>
                <p className="text-white/25 text-xs mt-1">{post.tag}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <AnimatePresence mode="wait">
            {!followed ? (
              <motion.div
                key="follow-btn"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <p className="text-white/40 text-sm uppercase tracking-widest mb-6">
                  Follow us to unlock the application
                </p>
                <motion.button
                  data-testid="follow-instagram-btn"
                  onClick={handleFollow}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 px-10 py-4 border border-primary text-white font-bold uppercase tracking-widest text-sm glow-red hover:bg-primary transition-all duration-300 group"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Follow @ecell_iist_indore
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="unlocked"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="flex flex-col items-center gap-4"
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center"
                  animate={{ boxShadow: ["0 0 0px rgba(34,197,94,0)", "0 0 30px rgba(34,197,94,0.5)", "0 0 0px rgba(34,197,94,0)"] }}
                  transition={{ duration: 1, repeat: 1 }}
                >
                  <Check className="w-8 h-8 text-green-400" />
                </motion.div>
                <p className="text-green-400 font-mono text-sm uppercase tracking-widest">
                  Signal Received — Vault Unlocking
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

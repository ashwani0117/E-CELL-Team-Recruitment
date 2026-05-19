import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const domainOptions = ["Creative", "Production", "Social Media", "PR & Outreach", "Management", "Tech"];

export default function ApplySection() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  return (
    <motion.section
      id="apply"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen relative flex items-center justify-center py-32 overflow-hidden"
    >
      {/* Deep dark background with strong red radial glow */}
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(179,18,23,0.18)_0%,transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(179,18,23,0.08)_0%,transparent_50%)]" />

      {/* Horizontal scan line effect */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        animate={{ top: ["10%", "90%", "10%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-6">
            <span className="inline-block py-1 px-4 border border-primary/40 text-primary font-mono text-xs uppercase tracking-[0.3em]">
              Final Vault — Access Granted
            </span>
          </div>

          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-white uppercase tracking-wider mb-6 leading-none">
            THE MISSION<br />
            <span className="text-primary text-glow">NEEDS BUILDERS.</span>
          </h2>

          <p className="text-white/50 text-lg uppercase tracking-widest mb-3">
            Creators. Strategists. Managers. Innovators.
          </p>

          <div className="h-px w-32 bg-primary mx-auto mb-14" />

          <div className="mb-3">
            <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-6">
              Select your domain
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {domainOptions.map((domain) => (
                <button
                  key={domain}
                  data-testid={`domain-chip-${domain.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setSelectedDomain(domain)}
                  className={`px-5 py-2 text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
                    selectedDomain === domain
                      ? "border-primary bg-primary text-white glow-red"
                      : "border-white/10 text-white/50 hover:border-primary/50 hover:text-white/80"
                  }`}
                >
                  {domain}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm font-mono uppercase tracking-widest text-primary mb-8">
              Applications Open Now
            </p>

            <motion.a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="apply-now-btn"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-14 py-5 bg-primary text-white font-bold uppercase tracking-widest text-base glow-red-strong hover:bg-primary/90 transition-all duration-300 group"
              style={{ boxShadow: "0 0 40px rgba(179,18,23,0.5), 0 0 80px rgba(179,18,23,0.2)" }}
            >
              Apply Now
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>

          {selectedDomain && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/30 text-xs font-mono mt-5 uppercase tracking-widest"
            >
              You selected: <span className="text-primary">{selectedDomain}</span> — mention it in the form
            </motion.p>
          )}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-24 pt-10 border-t border-white/5 text-center"
        >
          <p className="text-white/20 text-xs font-mono uppercase tracking-widest">
            E-Cell IIST Indore — Entrepreneurship Cell
          </p>
          <p className="text-white/10 text-xs mt-2">
            Building the next generation of builders.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

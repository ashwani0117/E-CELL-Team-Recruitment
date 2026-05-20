import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronDown, ExternalLink } from "lucide-react";

interface ApplyStepProps {
  onBack: () => void;
  selectedDomain: string;
}

const years = ["1st Year", "2nd Year"];

const GOOGLE_FORM_URL = "https://forms.gle/CAojQmnQaKfMzaXz7";

export default function ApplyStep({ onBack, selectedDomain }: ApplyStepProps) {
  const [form, setForm] = useState({ name: "", branch: "", year: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [ready, setReady] = useState(false);
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
  }, [ready]);

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  }

  function handleProceed(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: Partial<typeof form> = {};
    if (!form.name.trim()) newErrors.name = "Required";
    if (!form.branch.trim()) newErrors.branch = "Required";
    if (!form.year) newErrors.year = "Select your year";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setReady(true);
  }

  function openForm() {
    const params = new URLSearchParams({
      name: form.name,
      branch: form.branch,
      year: form.year,
      domain: selectedDomain,
    });
    window.open(`${GOOGLE_FORM_URL}?${params.toString()}`, "_blank");
  }

  const inputClass = (field: string) =>
    `w-full bg-[#0f0f0f] border ${
      errors[field as keyof typeof errors] ? "border-red-500/60" : "border-white/10 focus:border-primary/60"
    } text-white text-sm px-4 py-3 outline-none font-mono transition-colors duration-200 placeholder:text-white/20 rounded-none`;

  const labelClass = "block text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] mb-1.5";

  return (
    <div className="relative h-full w-full flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(179,18,23,0.15)_0%,transparent_65%)]" />

      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent pointer-events-none"
        animate={{ top: ["10%", "90%", "10%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 border-b border-primary/20 bg-[#0a0a0a]/90 px-4 sm:px-6 py-3 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
        <span className="font-mono text-[9px] sm:text-[10px] text-primary uppercase tracking-[0.25em] sm:tracking-[0.3em]">Final Vault — Document 06</span>
        <div className="ml-auto font-mono text-[9px] text-primary/40 hidden sm:block uppercase tracking-widest">Applications Open</div>
      </div>

      <div ref={contentRef} className="relative z-10 flex-1 overflow-y-auto min-h-0 px-4 sm:px-6 md:px-10 py-6">
        <div className="w-full max-w-md mx-auto">
          <AnimatePresence mode="wait">
            {!ready ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-6 sm:mb-8 text-left">
                  <h2 className="font-display text-[clamp(2rem,6vw,4rem)] text-white uppercase tracking-wider leading-none mb-1">
                    The Mission<br />
                    <span className="text-primary" style={{ textShadow: "0 0 30px rgba(179,18,23,0.5)" }}>
                      Needs You.
                    </span>
                  </h2>
                  <div className="h-[2px] w-12 bg-primary mb-3" />
                  <p className="text-white/30 text-xs font-mono uppercase tracking-widest">
                    Quick details before the application
                  </p>
                </div>

                <form onSubmit={handleProceed} className="space-y-4 sm:space-y-5">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input
                      data-testid="input-name"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className={inputClass("name")}
                    />
                    {errors.name && <p className="text-red-400 text-[10px] font-mono mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className={labelClass}>Branch / Department *</label>
                    <input
                      data-testid="input-branch"
                      type="text"
                      placeholder="e.g. Computer Science"
                      value={form.branch}
                      onChange={(e) => update("branch", e.target.value)}
                      className={inputClass("branch")}
                    />
                    {errors.branch && <p className="text-red-400 text-[10px] font-mono mt-1">{errors.branch}</p>}
                  </div>

                  <div>
                    <label className={labelClass}>Year of Study *</label>
                    <div className="flex gap-2 sm:gap-3">
                      {years.map((y) => (
                        <button
                          key={y}
                          type="button"
                          data-testid={`year-btn-${y.replace(/\s+/g, "-").toLowerCase()}`}
                          onClick={() => update("year", y)}
                          className={`flex-1 py-3 font-bold text-xs uppercase tracking-widest border transition-all duration-200 ${
                            form.year === y
                              ? "border-primary bg-primary text-white"
                              : "border-white/10 text-white/40 hover:border-primary/40 hover:text-white/70 active:scale-95"
                          }`}
                        >
                          {y}
                        </button>
                      ))}
                    </div>
                    {errors.year && <p className="text-red-400 text-[10px] font-mono mt-1">{errors.year}</p>}
                    <p className="text-white/20 text-[10px] font-mono mt-2">Only 1st and 2nd year students are eligible</p>
                  </div>

                  {selectedDomain && (
                    <div className="border border-white/5 bg-[#111] px-4 py-3 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Selected Domain</span>
                      <span className="text-primary font-bold text-xs uppercase tracking-widest">{selectedDomain}</span>
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    data-testid="proceed-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full flex items-center justify-center gap-3 py-4 bg-primary text-white font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-sm"
                    style={{ boxShadow: "0 0 25px rgba(179,18,23,0.4)" }}
                  >
                    Proceed to Application
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </form>

                <div className="h-4" />
              </motion.div>
            ) : (
              <motion.div
                key="ready"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="text-center"
              >
                <div className="mb-6 sm:mb-8">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-16 h-16 mx-auto mb-5 rounded-full border border-primary bg-primary/10 flex items-center justify-center"
                    style={{ boxShadow: "0 0 30px rgba(179,18,23,0.4)" }}
                  >
                    <span className="text-primary text-2xl font-display">✓</span>
                  </motion.div>
                  <h2 className="font-display text-[clamp(2rem,6vw,4rem)] text-white uppercase tracking-wider leading-none mb-1">
                    Vault <span className="text-primary">Unlocked.</span>
                  </h2>
                  <div className="h-[2px] w-12 bg-primary mx-auto mb-4" />
                  <p className="text-white/40 text-sm">Your details are ready. Open the application form to complete your submission.</p>
                </div>

                <div className="border border-white/5 bg-[#111] px-5 sm:px-6 py-4 sm:py-5 text-left space-y-3 rounded-sm mb-6 sm:mb-8">
                  <p className="text-[9px] font-mono text-white/25 uppercase tracking-widest mb-3">Your Details</p>
                  {[
                    { label: "Name", value: form.name },
                    { label: "Branch", value: form.branch },
                    { label: "Year", value: form.year },
                    ...(selectedDomain ? [{ label: "Domain", value: selectedDomain, highlight: true }] : []),
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center text-sm gap-4">
                      <span className="text-white/40 font-mono text-xs shrink-0">{row.label}</span>
                      <span className={(row as any).highlight ? "text-primary font-bold" : "text-white"}>{row.value}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  data-testid="open-form-btn"
                  onClick={openForm}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-primary text-white font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-sm mb-4"
                  style={{ boxShadow: "0 0 30px rgba(179,18,23,0.5)" }}
                >
                  Open Application Form
                  <ExternalLink className="w-4 h-4" />
                </motion.button>

                <button
                  onClick={() => setReady(false)}
                  className="text-white/25 text-[10px] font-mono uppercase tracking-widest hover:text-white/50 transition-colors"
                >
                  Edit details
                </button>

                <div className="h-6" />
              </motion.div>
            )}
          </AnimatePresence>
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
            <span className="text-[9px] font-mono text-white/25 uppercase tracking-widest">Scroll down</span>
            <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
              <ChevronDown className="w-4 h-4 text-white/25" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!ready && (
        <div className="relative z-10 border-t border-white/5 bg-[#0b0b0b]/95 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2">
          <button
            data-testid="apply-back-btn"
            onClick={onBack}
            className="flex items-center gap-1.5 text-white/40 hover:text-white text-xs font-mono uppercase tracking-widest transition-colors shrink-0"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back</span>
          </button>
          <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Step 6 of 6 — Final</span>
          <div className="w-[60px] sm:w-[80px]" />
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ExternalLink } from "lucide-react";

interface ApplyStepProps {
  onBack: () => void;
  selectedDomain: string;
}

const years = ["1st Year", "2nd Year"];

const GOOGLE_FORM_URL = "https://forms.google.com"; // Replace with actual form link

export default function ApplyStep({ onBack, selectedDomain }: ApplyStepProps) {
  const [form, setForm] = useState({ name: "", branch: "", year: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [ready, setReady] = useState(false);

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  }

  function handleProceed(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: Partial<typeof form> = {};
    if (!form.name.trim()) newErrors.name = "Required";
    if (!form.branch.trim()) newErrors.branch = "Required";
    if (!form.year) newErrors.year = "Required";
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
    } text-white text-sm px-4 py-3 outline-none font-mono transition-colors duration-200 placeholder:text-white/20`;

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

      <div className="relative z-10 border-b border-primary/20 bg-[#0a0a0a]/90 px-6 py-3 flex items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em]">Final Vault — Document 06</span>
        <div className="ml-auto font-mono text-[10px] text-primary/40 uppercase tracking-widest">Applications Open</div>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-8 md:px-10">
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait">
            {!ready ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-8 text-left">
                  <h2 className="font-display text-[clamp(2rem,6vw,4rem)] text-white uppercase tracking-wider leading-none mb-1">
                    The Mission<br />
                    <span className="text-primary" style={{ textShadow: "0 0 30px rgba(179,18,23,0.5)" }}>
                      Needs You.
                    </span>
                  </h2>
                  <div className="h-[2px] w-16 bg-primary mb-3" />
                  <p className="text-white/30 text-xs font-mono uppercase tracking-widest">
                    Quick details before the application
                  </p>
                </div>

                <form onSubmit={handleProceed} className="space-y-5">
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
                    <div className="flex gap-3">
                      {years.map((y) => (
                        <button
                          key={y}
                          type="button"
                          data-testid={`year-btn-${y.replace(/\s+/g, "-").toLowerCase()}`}
                          onClick={() => { update("year", y); }}
                          className={`flex-1 py-3 font-bold text-xs uppercase tracking-widest border transition-all duration-200 ${
                            form.year === y
                              ? "border-primary bg-primary text-white"
                              : "border-white/10 text-white/40 hover:border-primary/40 hover:text-white/70"
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
                    className="w-full flex items-center justify-center gap-3 py-4 bg-primary text-white font-bold uppercase tracking-[0.25em] text-sm"
                    style={{ boxShadow: "0 0 25px rgba(179,18,23,0.4)" }}
                  >
                    Proceed to Application
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </form>
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
                <div className="mb-8">
                  <h2 className="font-display text-[clamp(2rem,6vw,4rem)] text-white uppercase tracking-wider leading-none mb-1">
                    Vault <span className="text-primary">Unlocked.</span>
                  </h2>
                  <div className="h-[2px] w-16 bg-primary mx-auto mb-4" />
                  <p className="text-white/40 text-sm">Your details are ready. Open the application form to complete your submission.</p>
                </div>

                <div className="border border-white/5 bg-[#111] px-6 py-5 text-left space-y-3 rounded-sm mb-8">
                  <p className="text-[9px] font-mono text-white/25 uppercase tracking-widest mb-3">Your Details</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40 font-mono text-xs">Name</span>
                    <span className="text-white font-medium">{form.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40 font-mono text-xs">Branch</span>
                    <span className="text-white">{form.branch}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40 font-mono text-xs">Year</span>
                    <span className="text-white">{form.year}</span>
                  </div>
                  {selectedDomain && (
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40 font-mono text-xs">Domain</span>
                      <span className="text-primary font-bold">{selectedDomain}</span>
                    </div>
                  )}
                </div>

                <motion.button
                  data-testid="open-form-btn"
                  onClick={openForm}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-primary text-white font-bold uppercase tracking-[0.25em] text-sm mb-4"
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {!ready && (
        <div className="relative z-10 border-t border-white/5 bg-[#0b0b0b]/90 px-6 py-4 flex items-center justify-between">
          <button
            data-testid="apply-back-btn"
            onClick={onBack}
            className="flex items-center gap-2 text-white/40 hover:text-white text-xs font-mono uppercase tracking-widest transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
          <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Step 6 of 6 — Final</span>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Send, CheckCircle2 } from "lucide-react";

interface ApplyStepProps {
  onBack: () => void;
  selectedDomain: string;
}

const domains = ["Creative", "Production", "Social Media", "PR & Outreach", "Management", "Tech"];
const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

export default function ApplyStep({ onBack, selectedDomain }: ApplyStepProps) {
  const [domain, setDomain] = useState(selectedDomain || "");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    rollNumber: "",
    email: "",
    year: "",
    branch: "",
    whyJoin: "",
    keySkill: "",
  });
  const [errors, setErrors] = useState<Partial<typeof form & { domain: string }>>({});

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  }

  function validate() {
    const newErrors: Partial<typeof form & { domain: string }> = {};
    if (!form.name.trim()) newErrors.name = "Required";
    if (!form.rollNumber.trim()) newErrors.rollNumber = "Required";
    if (!form.email.trim() || !form.email.includes("@")) newErrors.email = "Valid email required";
    if (!form.year) newErrors.year = "Required";
    if (!form.branch.trim()) newErrors.branch = "Required";
    if (!domain) newErrors.domain = "Select a domain";
    if (form.whyJoin.trim().length < 20) newErrors.whyJoin = "Please write at least 20 characters";
    if (!form.keySkill.trim()) newErrors.keySkill = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  const inputClass = (field: string) =>
    `w-full bg-[#0f0f0f] border ${errors[field as keyof typeof errors] ? "border-red-500/60" : "border-white/10 focus:border-primary/60"} text-white text-sm px-4 py-3 outline-none font-mono transition-colors duration-200 placeholder:text-white/20`;

  const labelClass = "block text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] mb-1.5";

  return (
    <div className="relative h-full w-full flex flex-col overflow-hidden">
      {/* Deep dark atmosphere */}
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(179,18,23,0.15)_0%,transparent_65%)]" />

      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent pointer-events-none"
        animate={{ top: ["10%", "90%", "10%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Top bar */}
      <div className="relative z-10 border-b border-primary/20 bg-[#0a0a0a]/90 px-6 py-3 flex items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em]">Final Vault — Document 06</span>
        <div className="ml-auto font-mono text-[10px] text-primary/40 uppercase tracking-widest">Applications Open</div>
      </div>

      <div className="relative z-10 flex-1 overflow-y-auto px-6 py-6 md:px-10">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-2xl mx-auto"
            >
              <div className="mb-8">
                <h2 className="font-display text-[clamp(2rem,6vw,4.5rem)] text-white uppercase tracking-wider leading-none mb-1">
                  The Mission<br />
                  <span className="text-primary" style={{ textShadow: "0 0 30px rgba(179,18,23,0.5)" }}>
                    Needs You.
                  </span>
                </h2>
                <div className="h-[2px] w-16 bg-primary mb-3" />
                <p className="text-white/30 text-xs font-mono uppercase tracking-widest">
                  Fill out your application — every field matters
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row: Name + Roll */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <label className={labelClass}>Roll Number *</label>
                    <input
                      data-testid="input-roll"
                      type="text"
                      placeholder="e.g. 2023B1A12345H"
                      value={form.rollNumber}
                      onChange={(e) => update("rollNumber", e.target.value)}
                      className={inputClass("rollNumber")}
                    />
                    {errors.rollNumber && <p className="text-red-400 text-[10px] font-mono mt-1">{errors.rollNumber}</p>}
                  </div>
                </div>

                {/* Row: Email + Year */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input
                      data-testid="input-email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={inputClass("email")}
                    />
                    {errors.email && <p className="text-red-400 text-[10px] font-mono mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Year of Study *</label>
                    <select
                      data-testid="input-year"
                      value={form.year}
                      onChange={(e) => update("year", e.target.value)}
                      className={`${inputClass("year")} cursor-pointer`}
                    >
                      <option value="" disabled>Select year</option>
                      {years.map((y) => <option key={y} value={y}>{y}</option>)}
                    </select>
                    {errors.year && <p className="text-red-400 text-[10px] font-mono mt-1">{errors.year}</p>}
                  </div>
                </div>

                {/* Branch */}
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

                {/* Domain selection */}
                <div>
                  <label className={labelClass}>Domain *</label>
                  <div className="flex flex-wrap gap-2">
                    {domains.map((d) => (
                      <button
                        key={d}
                        type="button"
                        data-testid={`domain-select-${d.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={() => { setDomain(d); setErrors((e) => ({ ...e, domain: "" })); }}
                        className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all duration-200 ${
                          domain === d
                            ? "border-primary bg-primary text-white"
                            : "border-white/10 text-white/40 hover:border-primary/40 hover:text-white/70"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                  {errors.domain && <p className="text-red-400 text-[10px] font-mono mt-1">{errors.domain}</p>}
                </div>

                {/* Key skill */}
                <div>
                  <label className={labelClass}>Your Key Skill *</label>
                  <input
                    data-testid="input-skill"
                    type="text"
                    placeholder="e.g. Video editing, Figma, Public speaking..."
                    value={form.keySkill}
                    onChange={(e) => update("keySkill", e.target.value)}
                    className={inputClass("keySkill")}
                  />
                  {errors.keySkill && <p className="text-red-400 text-[10px] font-mono mt-1">{errors.keySkill}</p>}
                </div>

                {/* Why join */}
                <div>
                  <label className={labelClass}>Why Do You Want to Join E-Cell? *</label>
                  <textarea
                    data-testid="input-why"
                    placeholder="Tell us what drives you — be honest, be specific."
                    value={form.whyJoin}
                    onChange={(e) => update("whyJoin", e.target.value)}
                    rows={4}
                    className={`${inputClass("whyJoin")} resize-none`}
                  />
                  <div className="flex items-center justify-between mt-1">
                    {errors.whyJoin ? (
                      <p className="text-red-400 text-[10px] font-mono">{errors.whyJoin}</p>
                    ) : (
                      <span />
                    )}
                    <span className="text-white/20 text-[10px] font-mono">{form.whyJoin.length} chars</span>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  data-testid="submit-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-primary text-white font-bold uppercase tracking-[0.25em] text-sm mt-2"
                  style={{ boxShadow: "0 0 30px rgba(179,18,23,0.4)" }}
                >
                  <Send className="w-4 h-4" />
                  Submit Application
                </motion.button>

                <p className="text-center text-white/15 text-[10px] font-mono uppercase tracking-widest pb-4">
                  E-Cell IIST Indore — Recruitment 2026–27
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl mx-auto flex flex-col items-center justify-center min-h-[60vh] text-center"
            >
              <motion.div
                className="w-20 h-20 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center mb-8"
                animate={{ boxShadow: ["0 0 0 rgba(179,18,23,0)", "0 0 40px rgba(179,18,23,0.5)", "0 0 0 rgba(179,18,23,0)"] }}
                transition={{ duration: 1.5, repeat: 2 }}
              >
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </motion.div>
              <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-wider mb-4">
                Mission <span className="text-primary">Logged.</span>
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-3 max-w-sm">
                Your application has been received. The team will review it and reach out soon.
              </p>
              <p className="text-primary/60 font-mono text-xs uppercase tracking-widest mb-10">
                Welcome to the resistance, {form.name.split(" ")[0]}.
              </p>
              <div className="border border-white/5 bg-[#111] px-8 py-6 text-left space-y-2 rounded-sm w-full max-w-sm">
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-3">Application Summary</p>
                <div className="flex justify-between text-xs"><span className="text-white/40 font-mono">Name</span><span className="text-white">{form.name}</span></div>
                <div className="flex justify-between text-xs"><span className="text-white/40 font-mono">Domain</span><span className="text-primary font-bold">{domain}</span></div>
                <div className="flex justify-between text-xs"><span className="text-white/40 font-mono">Year</span><span className="text-white">{form.year}</span></div>
                <div className="flex justify-between text-xs"><span className="text-white/40 font-mono">Email</span><span className="text-white truncate max-w-[180px]">{form.email}</span></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!submitted && (
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

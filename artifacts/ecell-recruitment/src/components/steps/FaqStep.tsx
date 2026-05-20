import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, HelpCircle } from "lucide-react";

interface FaqStepProps {
  onNext: () => void;
  onBack: () => void;
}

const faqs = [
  { q: "What if I am not from a startup background?", a: "That is completely fine. We want curious builders, not only people with prior experience." },
  { q: "Can I apply for more than one domain?", a: "Yes, but choose one primary domain carefully so your form stays focused and clear." },
  { q: "What happens after I submit?", a: "Our team reviews your response and reaches out with further steps if shortlisted." },
  { q: "Is attendance important?", a: "Yes. We expect consistent involvement, reliability, and active contribution as a member." },
];

export default function FaqStep({ onNext, onBack }: FaqStepProps) {
  return (
    <div className="relative h-full w-full flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0d0d]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(179,18,23,0.06)_0%,transparent_65%)]" />

      <div className="relative z-10 border-b border-white/5 bg-[#0f0f0f]/80 px-6 py-3 flex items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em]">Support File — FAQ</span>
        <div className="ml-auto font-mono text-[10px] text-white/20 uppercase tracking-widest">Quick Answers</div>
      </div>

      <div className="relative z-10 flex-1 overflow-y-auto px-6 py-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-left">
            <h2 className="font-display text-[clamp(2.3rem,6vw,4.8rem)] text-white uppercase tracking-wider mb-1">
              Frequently <span className="text-primary">Asked</span>
            </h2>
            <div className="h-[2px] w-16 bg-primary mb-3" />
            <p className="text-white/40 text-xs font-mono uppercase tracking-widest">Simple answers for every step of the mission</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {faqs.map((item, i) => (
              <motion.div key={item.q} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }} className="bg-[#111] border border-white/5 p-5 rounded-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-white text-sm font-bold uppercase tracking-wide mb-2">{item.q}</h3>
                    <p className="text-white/40 text-[11px] leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/5 bg-[#0b0b0b]/90 px-6 py-4 flex items-center justify-between">
        <button data-testid="faq-back-btn" onClick={onBack} className="flex items-center gap-2 text-white/40 hover:text-white text-xs font-mono uppercase tracking-widest transition-colors">
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>
        <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">FAQ / Help</span>
        <motion.button data-testid="faq-next-btn" onClick={onNext} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 px-6 py-2.5 border border-primary text-white font-bold text-xs uppercase tracking-widest hover:bg-primary transition-colors duration-300">
          Continue
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
}

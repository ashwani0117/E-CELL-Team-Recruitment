import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft, HelpCircle } from "lucide-react";

const faqs = [
  { q: "What is E-Cell?", a: "E-Cell is the entrepreneurship cell at IIST focused on startup culture, events, and execution." },
  { q: "Who can apply?", a: "Primarily 1st and 2nd year students for this recruitment cycle." },
  { q: "Do I need prior experience?", a: "No. Curiosity, consistency, and willingness to learn matter more." },
  { q: "Can I choose more than one domain?", a: "Pick one primary domain. Mention secondary interests in your form if needed." },
  { q: "How do I pick a domain?", a: "Read the domain descriptions and choose the one that matches your skills and interest." },
  { q: "What if I am confused between domains?", a: "Choose the strongest fit. It is better to be clear than to list everything." },
  { q: "Will I get certificates?", a: "Yes, active and meaningful contributions can be recognized through certificates." },
  { q: "Do members get exposure outside campus?", a: "Yes, members may get opportunities for IIT visits, collaborations, and external exposure." },
  { q: "Is attendance important?", a: "Yes. Reliability and consistent participation are important for members." },
  { q: "What happens after form submission?", a: "Your application is reviewed and shortlisted candidates are contacted." },
  { q: "Can I apply if I am busy with academics?", a: "Yes, if you can commit responsibly and manage your time well." },
  { q: "What kind of work happens in E-Cell?", a: "Branding, design, outreach, management, production, tech, content, and event execution." },
  { q: "Are the roles only technical?", a: "No. There are creative, management, social, outreach, production, and tech roles." },
  { q: "How should I answer the form?", a: "Be honest, specific, and concise. Show interest and intent." },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white pt-24 pb-16 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8 gap-6 flex-wrap">
          <div>
            <p className="text-[10px] font-mono text-primary uppercase tracking-[0.35em] mb-3">FAQ</p>
            <h1 className="font-display text-[clamp(2.6rem,7vw,5rem)] uppercase tracking-wider leading-none">Questions <span className="text-primary">Answered</span></h1>
            <p className="text-white/40 text-xs font-mono uppercase tracking-widest mt-3">Everything you need before joining the mission</p>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 border border-primary/60 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.25em] rounded-full shadow-[0_0_18px_rgba(179,18,23,0.28)]">
            <ChevronLeft className="w-4 h-4" />
            Back Home
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {faqs.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="bg-[#111] border border-white/5 rounded-sm p-5 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-wide text-white mb-2">{item.q}</h2>
                  <p className="text-white/40 text-[11px] leading-relaxed">{item.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

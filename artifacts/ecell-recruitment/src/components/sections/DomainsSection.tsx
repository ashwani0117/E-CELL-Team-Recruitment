import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Video, Instagram, Megaphone, LayoutGrid, Code2, X } from "lucide-react";

const domains = [
  {
    id: "creative",
    icon: <Palette className="w-7 h-7" />,
    title: "Creative",
    tagline: "Design the visual identity of entrepreneurship",
    workOn: "Brand design, event posters, visual campaigns, motion graphics, and the entire aesthetic language of E-Cell.",
    joinIf: "You think visually, sketch ideas in the margins, and believe design is how you say something without words.",
    youGain: "A real design portfolio, brand strategy skills, and the ability to shape how thousands of students perceive E-Cell."
  },
  {
    id: "production",
    icon: <Video className="w-7 h-7" />,
    title: "Production",
    tagline: "Capture, edit, and tell our story through video",
    workOn: "Event films, Instagram reels, documentary-style coverage, photography, and cinematic storytelling for every initiative.",
    joinIf: "You love storytelling through a lens, obsess over transitions, and think every moment deserves a great shot.",
    youGain: "A videography and photography portfolio, production workflow experience, and content that reaches thousands."
  },
  {
    id: "social-media",
    icon: <Instagram className="w-7 h-7" />,
    title: "Social Media",
    tagline: "Build the digital presence of E-Cell",
    workOn: "Content calendars, Instagram and LinkedIn strategy, reels planning, community engagement, and analytics-driven growth.",
    joinIf: "You understand what makes people stop scrolling, and you know the difference between content and noise.",
    youGain: "Platform analytics experience, community building skills, and a track record of growing a real audience."
  },
  {
    id: "pr",
    icon: <Megaphone className="w-7 h-7" />,
    title: "PR & Outreach",
    tagline: "Connect E-Cell with the world beyond campus",
    workOn: "Media relations, sponsorship pitches, external partnerships, press coverage, and inter-college collaborations.",
    joinIf: "You're a natural communicator who loves networking, negotiating, and opening doors that seem closed.",
    youGain: "Industry connections, communication and negotiation skills, and experience building real institutional relationships."
  },
  {
    id: "management",
    icon: <LayoutGrid className="w-7 h-7" />,
    title: "Management",
    tagline: "Organize the chaos that makes great events",
    workOn: "Event logistics, budget management, team coordination, scheduling, vendor management, and operational excellence.",
    joinIf: "You're the person who already has a checklist made before the meeting starts. Detail-oriented and execution-obsessed.",
    youGain: "Operations and project management skills, leadership experience, and the ability to run large-scale events from scratch."
  },
  {
    id: "tech",
    icon: <Code2 className="w-7 h-7" />,
    title: "Tech",
    tagline: "Build the tools that power the ecosystem",
    workOn: "Websites, registration systems, automation tools, internal dashboards, and any digital infrastructure E-Cell needs.",
    joinIf: "You build things that work. You see a problem and immediately think about what you could code to fix it.",
    youGain: "Real-world project experience, a deployable portfolio, and the satisfaction of shipping tools people actually use."
  }
];

type Domain = typeof domains[0];

function DomainModal({ domain, onClose }: { domain: Domain; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        <motion.div
          className="relative z-10 w-full max-w-lg bg-[#111] border border-primary/30 rounded-sm overflow-hidden"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="text-primary">{domain.icon}</div>
                <h3 className="font-display text-4xl text-white uppercase tracking-wide">
                  {domain.title}
                </h3>
              </div>
              <button
                data-testid="modal-close"
                onClick={onClose}
                className="text-white/40 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-xs font-mono text-primary uppercase tracking-widest mb-2">What You'll Work On</div>
                <p className="text-white/70 leading-relaxed text-sm">{domain.workOn}</p>
              </div>
              <div className="h-px bg-white/5" />
              <div>
                <div className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Who Should Join</div>
                <p className="text-white/70 leading-relaxed text-sm">{domain.joinIf}</p>
              </div>
              <div className="h-px bg-white/5" />
              <div>
                <div className="text-xs font-mono text-primary uppercase tracking-widest mb-2">What You'll Gain</div>
                <p className="text-white/70 leading-relaxed text-sm">{domain.youGain}</p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#apply"
                onClick={onClose}
                data-testid="modal-apply-btn"
                className="block w-full text-center py-3 border border-primary text-white font-bold uppercase tracking-widest text-sm hover:bg-primary transition-colors duration-300"
              >
                Apply for {domain.title}
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function DomainsSection() {
  const [selected, setSelected] = useState<Domain | null>(null);

  return (
    <section id="domains" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(179,18,23,0.05)_0%,transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-wider mb-2">
            Choose Your <span className="text-primary text-glow">Domain</span>
          </h2>
          <div className="h-1 w-24 bg-primary mb-4" />
          <p className="text-white/50 uppercase tracking-widest text-sm">Every mission needs specialists. Click a domain to learn more.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {domains.map((domain, idx) => (
            <motion.button
              key={domain.id}
              data-testid={`domain-card-${domain.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ scale: 1.03, y: -4 }}
              onClick={() => setSelected(domain)}
              className="bg-[#111] border border-white/5 hover:border-primary/40 p-8 rounded-sm text-left relative group overflow-hidden transition-colors duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="text-white/30 group-hover:text-primary transition-colors duration-300 mb-6">
                  {domain.icon}
                </div>
                <h3 className="font-display text-3xl text-white uppercase tracking-wide mb-3">
                  {domain.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {domain.tagline}
                </p>
                <div className="mt-6 text-xs font-mono text-primary/60 group-hover:text-primary uppercase tracking-widest transition-colors duration-300">
                  View Details →
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {selected && (
        <DomainModal domain={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

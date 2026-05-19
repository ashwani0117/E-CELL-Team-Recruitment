import { motion } from "framer-motion";
import { 
  Building2, 
  Trophy, 
  Users, 
  Target, 
  Rocket, 
  Zap, 
  Swords, 
  Globe 
} from "lucide-react";

const reasons = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Startup Ecosystem Exposure",
    desc: "Step inside real entrepreneurial environments"
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "National-Level Opportunities",
    desc: "Represent IIST at competitions that matter"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Networking with Founders",
    desc: "Build connections that outlast college"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Leadership & Team Experience",
    desc: "Lead projects, not just join them"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Real Project Execution",
    desc: "Ship things that actually work"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Creative & Technical Growth",
    desc: "Grow in ways your syllabus never planned"
  },
  {
    icon: <Swords className="w-6 h-6" />,
    title: "Competitions & Hackathons",
    desc: "Win, lose, and learn at scale"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Community & Connections",
    desc: "Your tribe of builders starts here"
  }
];

export default function WhySection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-wider mb-2">
            Why Join <span className="text-primary">E-Cell?</span>
          </h2>
          <div className="h-1 w-24 bg-primary" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[#111] border border-white/5 p-8 rounded-xl relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="text-white/40 mb-6 group-hover:text-primary transition-colors duration-300">
                {reason.icon}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">
                {reason.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

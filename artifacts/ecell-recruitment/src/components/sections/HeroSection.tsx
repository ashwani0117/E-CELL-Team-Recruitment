import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(179,18,23,0.15)_0%,rgba(11,11,11,1)_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,11,11,0)_0%,rgba(11,11,11,1)_100%)]" />

      <div className="container relative z-10 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block py-1 px-3 border border-primary/30 rounded-full text-xs font-mono tracking-[0.2em] text-primary bg-primary/5 uppercase">
              Classified Briefing
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="font-display text-7xl md:text-9xl text-white uppercase tracking-wider mb-6 text-glow"
          >
            THE SIGNAL<br />IS OUT
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/90 font-medium mb-4 uppercase tracking-widest"
          >
            E-Cell IIST Indore officially opens
            <span className="block text-primary mt-2">TEAM RECRUITMENT 2026–27</span>
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="text-white/60 mb-12 max-w-lg mx-auto text-lg"
          >
            Not everyone watches opportunities. Some people build them.
          </motion.p>

          <motion.a
            href="#apply"
            variants={itemVariants}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-transparent border border-primary overflow-hidden transition-all duration-300 hover:glow-red-strong"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
            <span className="relative uppercase tracking-widest text-sm z-10">Enter The Mission</span>
            <span className="absolute inset-0 bg-primary translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </motion.a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-white/30" />
      </motion.div>
    </section>
  );
}

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ end, label }: { end: number; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-6xl md:text-7xl text-primary mb-2">
        {count}+
      </div>
      <div className="text-sm uppercase tracking-widest text-white/60 font-medium">
        {label}
      </div>
    </div>
  );
}

const activities = [
  "Startup Sessions",
  "Workshops",
  "Hackathons",
  "Networking Events",
  "Branding Campaigns",
  "Competitions"
];

export default function InsideSection() {
  return (
    <section id="mission" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#111] -skew-y-3 origin-top-left z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-wider mb-4">
            Inside The <span className="text-primary text-glow">Mission</span>
          </h2>
          <p className="text-xl text-white/60 uppercase tracking-widest">
            Execution. Innovation. Impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          <Counter end={50} label="Events Conducted" />
          <Counter end={3000} label="Students Reached" />
          <Counter end={30} label="Workshops" />
          <Counter end={20} label="Collaborations" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {activities.map((activity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="aspect-video bg-[#1a1a1a] border border-white/5 flex items-end p-6 rounded-sm relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay grayscale group-hover:opacity-20 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="relative z-10 flex items-center justify-between w-full">
                <span className="font-mono text-xs text-primary uppercase">File {idx + 1}</span>
                <h4 className="font-bold text-white tracking-wide uppercase text-right w-2/3">
                  {activity}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

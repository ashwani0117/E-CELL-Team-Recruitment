import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setPercent(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <div className="fixed top-20 left-0 w-full z-40 hidden md:block">
      <div className="container mx-auto px-6 relative h-1 bg-white/5">
        <motion.div
          className="absolute top-0 left-0 h-full bg-primary origin-left"
          style={{ scaleX, width: "100%" }}
        />
        <div className="absolute -top-6 right-6 text-[10px] font-mono tracking-widest text-primary font-bold">
          MISSION PROGRESS: {percent}%
        </div>
      </div>
    </div>
  );
}

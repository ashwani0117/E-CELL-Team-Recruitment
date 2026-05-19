import { motion } from "framer-motion";

interface StepProgressProps {
  current: number;
  total: number;
}

export default function StepProgress({ current, total }: StepProgressProps) {
  const percent = Math.round(((current + 1) / total) * 100);

  return (
    <div className="fixed top-[72px] left-0 w-full z-50 h-[3px] bg-white/5">
      <motion.div
        className="h-full bg-primary"
        style={{ boxShadow: "0 0 8px rgba(179,18,23,0.8)" }}
        animate={{ width: `${percent}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
}

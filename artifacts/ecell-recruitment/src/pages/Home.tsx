import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import StepProgress from "@/components/layout/StepProgress";
import HeroStep from "@/components/steps/HeroStep";
import WhyStep from "@/components/steps/WhyStep";
import InsideStep from "@/components/steps/InsideStep";
import DomainsStep from "@/components/steps/DomainsStep";
import FollowStep from "@/components/steps/FollowStep";
import FaqStep from "@/components/steps/FaqStep";
import ApplyStep from "@/components/steps/ApplyStep";

const TOTAL_STEPS = 7;

const stepTitles = ["The Signal", "The Briefing", "The Operation", "Choose Your Role", "Join The Network", "FAQ", "Enter The Vault"];

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction < 0 ? "100%" : "-100%", opacity: 0 }),
};

export default function Home() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selectedDomain, setSelectedDomain] = useState("");

  function goNext() {
    setDirection(1);
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  }

  function goBack() {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  }

  const steps = [
    <HeroStep onNext={goNext} />,
    <WhyStep onNext={goNext} onBack={goBack} />,
    <InsideStep onNext={goNext} onBack={goBack} />,
    <DomainsStep onNext={goNext} onBack={goBack} selectedDomain={selectedDomain} onDomainSelect={setSelectedDomain} />,
    <FollowStep onNext={goNext} onBack={goBack} />,
    <FaqStep onNext={goNext} onBack={goBack} />,
    <ApplyStep onBack={goBack} selectedDomain={selectedDomain} />,
  ];

  return (
    <div className="relative h-[100dvh] w-full bg-[#0b0b0b] overflow-hidden text-white selection:bg-primary selection:text-white">
      <div className="noise-overlay" />
      <Navbar step={step} totalSteps={TOTAL_STEPS} stepTitle={stepTitles[step]} goToStep={(s) => { setDirection(s > step ? 1 : -1); setStep(s); }} />
      <StepProgress current={step} total={TOTAL_STEPS} />
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div key={step} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }} className="absolute inset-0 pt-[72px]">
          {steps[step]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

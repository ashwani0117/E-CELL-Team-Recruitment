import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import StepProgress from "@/components/layout/StepProgress";
import HeroStep from "@/components/steps/HeroStep";
import WhyStep from "@/components/steps/WhyStep";
import InsideStep from "@/components/steps/InsideStep";
import DomainsStep from "@/components/steps/DomainsStep";
import FollowStep from "@/components/steps/FollowStep";
import ApplyStep from "@/components/steps/ApplyStep";

const TOTAL_STEPS = 6;
const stepTitles = ["The Signal", "The Briefing", "The Operation", "Choose Your Role", "Join The Network", "Enter The Vault"];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
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

  function goToStep(s: number) {
    setDirection(s > step ? 1 : -1);
    setStep(s);
  }

  const steps = [
    <HeroStep onNext={goNext} />,
    <WhyStep onNext={goNext} onBack={goBack} />,
    <InsideStep onNext={goNext} onBack={goBack} />,
    <DomainsStep onNext={goNext} onBack={goBack} selectedDomain={selectedDomain} onDomainSelect={setSelectedDomain} />,
    <FollowStep onNext={goNext} onBack={goBack} />,
    <ApplyStep onBack={goBack} selectedDomain={selectedDomain} />,
  ];

  const navbarHeight = "64px";

  return (
    <div
      className="relative w-full bg-[#0b0b0b] overflow-hidden text-white selection:bg-primary selection:text-white"
      style={{ height: "100dvh" }}
    >
      <div className="noise-overlay" />
      <Navbar step={step} totalSteps={TOTAL_STEPS} stepTitle={stepTitles[step]} goToStep={goToStep} />
      <StepProgress current={step} total={TOTAL_STEPS} />
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={step}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
          className="absolute left-0 right-0 bottom-0"
          style={{ top: navbarHeight }}
        >
          {steps[step]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

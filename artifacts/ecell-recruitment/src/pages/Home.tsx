import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import ProgressBar from "@/components/layout/ProgressBar";
import HeroSection from "@/components/sections/HeroSection";
import WhySection from "@/components/sections/WhySection";
import InsideSection from "@/components/sections/InsideSection";
import DomainsSection from "@/components/sections/DomainsSection";
import FollowSection from "@/components/sections/FollowSection";
import ApplySection from "@/components/sections/ApplySection";

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      <ProgressBar />
      <Navbar />
      
      <main>
        <HeroSection />
        <WhySection />
        <InsideSection />
        <DomainsSection />
        <FollowSection onUnlock={() => setUnlocked(true)} />
        {unlocked && <ApplySection />}
      </main>
    </div>
  );
}

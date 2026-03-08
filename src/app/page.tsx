"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import HeroLanding from "@/components/HeroLanding";
import ScholarshipSection from "@/components/ScholarshipSection";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import MobileBottomNav from "@/components/MobileBottomNav";

// Dynamically import heavy components
const CollegeBookExperience = dynamic(() => import("@/components/CollegeBookExperience"), { ssr: false });
const ExploreUniverse = dynamic(() => import("@/components/ExploreUniverse"), { ssr: false });

export default function Home() {
  const [openBookId, setOpenBookId] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroLanding />
      
      <Reveal>
        <ScholarshipSection onCardClick={(id) => setOpenBookId(id)} />
      </Reveal>
      
      <Reveal>
        <ContactForm />
      </Reveal>

      <CollegeBookExperience collegeId={openBookId} onClose={() => setOpenBookId(null)} />
      
      <MobileBottomNav />
    </div>
  );
}

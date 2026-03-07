"use client";

import { motion } from "framer-motion";
import PinCluster from "./PinCluster";

export default function HeroLanding({ onExplore }: { onExplore?: () => void }) {
  return (
    <section id="home" className="relative min-h-screen pt-40 pb-20 flex flex-col lg:flex-row items-center justify-between container mx-auto px-10 max-w-7xl z-10 w-full overflow-hidden">
      
      {/* Ambient background objects */}
      <div className="ambient-orb w-[600px] h-[600px] top-[-100px] left-[-200px] opacity-10"></div>
      <div className="ambient-orb w-[500px] h-[500px] bottom-0 right-[-100px] opacity-10" style={{ animationDelay: '2s' }}></div>

      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-6 md:gap-8 pr-0 lg:pr-12 mb-12 lg:mb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-4 md:px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] mb-2 md:mb-4"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Admissions cycle 2026
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter text-high-contrast"
        >
          Curating your <br />
          <span className="text-elite text-primary">academic legacy.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-base md:text-xl text-foreground/80 max-w-lg leading-relaxed font-medium"
        >
          Veda provides bespoke guidance for students seeking scholarships and enrollment in India's most prestigious institutions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mt-4 md:mt-8 w-full sm:w-auto"
        >
          <button 
            onClick={onExplore} 
            className="w-full sm:w-auto px-10 py-4 bg-foreground text-background dark:bg-primary dark:text-white rounded-full font-bold text-xs md:text-sm uppercase tracking-widest hover:translate-y-[-2px] active:translate-y-[1px] transition-all shadow-elite"
          >
            Explore Universe
          </button>
          <a 
            href="#scholarships" 
            className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest border border-border hover:bg-accent/30 active:bg-accent/50 transition-all text-center"
          >
            Scholarships
          </a>
        </motion.div>

        {/* Floating statistics - Adjusted for mobile */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-8 md:gap-12 mt-12 md:mt-16 pt-8 md:pt-10 border-t border-border w-full max-w-md"
        >
          <div>
            <div className="text-xl md:text-2xl font-bold text-high-contrast tracking-tight">500+</div>
            <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/60 mt-1">Institutions</div>
          </div>
          <div className="h-10 w-[1px] bg-border"></div>
          <div>
            <div className="text-xl md:text-2xl font-bold text-high-contrast tracking-tight">10k+</div>
            <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/60 mt-1">Elite Alumni</div>
          </div>
        </motion.div>
      </div>

      <div className="w-full lg:w-1/2 relative h-full flex justify-center lg:justify-end">
        {/* Parallax Map Pins */}
        <PinCluster />
      </div>
    </section>
  );
}

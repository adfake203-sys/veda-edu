"use client";

import { motion } from "framer-motion";

export default function HeroLanding() {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen pt-32 pb-20 flex flex-col lg:flex-row items-center justify-between container mx-auto px-6 md:px-10 max-w-7xl z-10 w-full overflow-hidden">
      
      {/* Ambient background objects */}
      <div className="ambient-orb w-[600px] h-[600px] top-[-100px] left-[-200px] opacity-10"></div>
      <div className="ambient-orb w-[500px] h-[500px] bottom-0 right-[-100px] opacity-10" style={{ animationDelay: '2s' }}></div>

      <div className="w-full lg:w-3/5 flex flex-col items-start justify-center gap-6 md:gap-8 pr-0 lg:pr-12 mb-12 lg:mb-0 relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
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
          Veda <br />
          <span className="text-elite text-primary italic">Educational Services</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-base md:text-xl text-foreground max-w-xl leading-relaxed font-bold opacity-80"
        >
          Helping students access scholarships and top colleges across India.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mt-4 md:mt-8 w-full sm:w-auto"
        >
          <a 
            href="#scholarships" 
            className="w-full sm:w-auto px-12 py-5 bg-primary text-white rounded-full font-bold text-xs md:text-sm uppercase tracking-widest hover:translate-y-[-2px] active:translate-y-[1px] transition-all shadow-elite text-center"
          >
            Explore Scholarships
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-12 py-5 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest border border-border bg-white/10 backdrop-blur-md hover:bg-accent/30 active:bg-accent/50 transition-all text-center"
          >
            Book Consultation
          </a>
        </motion.div>
      </div>

      {/* Hero Visual: Premium Image Adjacent to Text */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        className="hidden lg:flex w-full lg:w-2/5 aspect-[4/5] lg:aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/20 shadow-[-20px_40px_80px_rgba(0,0,0,0.1)] relative group"
      >
        <img 
          src="/images/hero-bg.png" 
          alt="Premium Architecture" 
          className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
        
        {/* Subtle glass accent */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 px-4 py-2 glass rounded-full border-white/10">
           <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-white">Excellence in Education</span>
        </div>
      </motion.div>
    </section>
  );
}

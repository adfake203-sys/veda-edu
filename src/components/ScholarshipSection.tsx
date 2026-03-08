import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { GraduationCap, Laptop, Award } from "lucide-react";
import { useDeviceOrientation } from "@/hooks/useDeviceOrientation";

import { colleges } from "@/data/colleges";

import Folder from "./Folder";

export default function ScholarshipSection({ onCardClick }: { onCardClick: (id: number) => void }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const orientation = useDeviceOrientation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024); // Switch at lg breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section 
      id="scholarships" 
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className={`relative py-20 md:py-40 container mx-auto px-6 md:px-10 max-w-7xl z-20 overflow-hidden ${isMobile ? "touch-auto" : "touch-none"}`}
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Sidebar Info (40%) */}
        <div className="w-full lg:w-5/12 flex flex-col gap-8 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 lg:gap-6"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-high-contrast">
              Elite <span className="text-elite text-primary italic">Benefices</span> & <br className="hidden md:block" />Scholarships
            </h2>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed font-semibold">
              Veda ensures that brilliance is never hindered by circumstance. We provide comprehensive support for the nation's future leaders.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6 md:gap-8">
            {[
              { 
                icon: <Award className="text-primary" size={20} />, 
                title: "Upto 50% Scholarship", 
                desc: "Significant tuition coverage for scholars in the top 1% of entrance examinations." 
              },
              { 
                icon: <Laptop className="text-primary" size={20} />, 
                title: "Laptop Provision", 
                desc: "A complimentary laptop for the first 150 students who register early." 
              },
              { 
                icon: <GraduationCap className="text-primary" size={20} />, 
                title: "Executive Mentorship", 
                desc: "Connect directly with prominent alumni from India's elite institutions." 
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 mt-1 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-base uppercase tracking-widest text-high-contrast mb-1">{item.title}</h4>
                  <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-bold">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Visual Interaction (60%) */}
        <div className="w-full lg:w-7/12 relative min-h-[400px] md:min-h-[600px] flex items-center justify-center mt-12 lg:mt-0">
          {isMobile ? (
            <div className="w-full h-[350px] flex items-center justify-center overflow-visible">
               <Folder 
                 items={colleges} 
                 onCardClick={onCardClick} 
                 size={1.8} 
                 color="var(--color-primary)"
               />
            </div>
          ) : (
            <div className="relative w-full h-[500px] md:h-[600px]">
              {colleges.map((college, i) => {
                const basePositions = [
                  { x: 50, y: 20 },  // Front pin (Head)
                  { x: 38, y: 40 }, { x: 62, y: 40 }, // Row 2
                  { x: 25, y: 60 }, { x: 50, y: 60 }, { x: 75, y: 60 }, // Row 3
                ];
                
                const pos = basePositions[i] || { x: 50, y: 50 };

                return (
                  <BowlingPinCard 
                    key={college.id}
                    college={college}
                    baseX={pos.x}
                    baseY={pos.y}
                    mouseX={mouseX}
                    mouseY={mouseY}
                    orientation={orientation}
                    isMobile={isMobile}
                    onClick={() => onCardClick(college.id)}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Sub-component for the "Bowling Pin" effect
function BowlingPinCard({ college, baseX, baseY, mouseX, mouseY, orientation, isMobile, onClick }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Create motion values that derive from mouse motion values
  const displacementX = useTransform([mouseX, mouseY], ([latestX, latestY]: any) => {
    if (!cardRef.current) return 0;
    const parent = cardRef.current.parentElement;
    if (!parent) return 0;
    const rect = parent.getBoundingClientRect();

    const cardX = (baseX / 100) * rect.width;
    const cardY = (baseY / 100) * rect.height;

    const dx = latestX - cardX;
    const dy = latestY - cardY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    const MAX_DIST = isMobile ? 150 : 250;
    
    let targetX = 0;
    if (distance < MAX_DIST) {
      const power = (MAX_DIST - distance) / MAX_DIST;
      const angle = Math.atan2(dy, dx);
      targetX = Math.cos(angle) * power * -30;
    }

    // Add subtle tilt from device orientation
    if (orientation?.gamma !== null) {
      targetX += orientation.gamma * 0.2;
    }

    return targetX;
  });

  const displacementY = useTransform([mouseX, mouseY], ([latestX, latestY]: any) => {
    if (!cardRef.current) return 0;
    const parent = cardRef.current.parentElement;
    if (!parent) return 0;
    const rect = parent.getBoundingClientRect();

    const cardX = (baseX / 100) * rect.width;
    const cardY = (baseY / 100) * rect.height;

    const dx = latestX - cardX;
    const dy = latestY - cardY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    const MAX_DIST = isMobile ? 150 : 250;
    
    let targetY = 0;
    if (distance < MAX_DIST) {
      const power = (MAX_DIST - distance) / MAX_DIST;
      const angle = Math.atan2(dy, dx);
      targetY = Math.sin(angle) * power * -30;
    }

    // Add subtle tilt from device orientation
    if (orientation?.beta !== null) {
      targetY += (orientation.beta - 45) * 0.2;
    }

    return targetY;
  });

  const rotate = useTransform([mouseX, mouseY], ([latestX, latestY]: any) => {
    if (!cardRef.current) return 0;
    const parent = cardRef.current.parentElement;
    if (!parent) return 0;
    const rect = parent.getBoundingClientRect();

    const cardX = (baseX / 100) * rect.width;
    const dx = latestX - cardX;
    
    const MAX_DIST = isMobile ? 150 : 250;
    const distance = Math.abs(dx);

    if (distance < MAX_DIST) {
      return (dx / MAX_DIST) * 15;
    }
    return 0;
  });

  // Animated spring values for smoother motion
  const springX = useSpring(displacementX, { stiffness: 150, damping: 20 });
  const springY = useSpring(displacementY, { stiffness: 150, damping: 20 });
  const springRotate = useSpring(rotate, { stiffness: 150, damping: 20 });

  return (
    <motion.div
      ref={cardRef}
      style={{ 
        top: `${baseY}%`, 
        left: `${baseX}%`, 
        transform: 'translate(-50%, -50%)',
        x: springX,
        y: springY,
        rotate: springRotate,
      }}
      className="absolute w-[160px] md:w-[240px] cursor-pointer z-10 hover:z-40"
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <Tilt 
        tiltMaxAngleX={isMobile ? 4 : 8} 
        tiltMaxAngleY={isMobile ? 4 : 8} 
        perspective={1000} 
        scale={isMobile ? 1.02 : 1.05}
        glareEnable={!isMobile}
        glareMaxOpacity={0.1}
        className="overflow-hidden bg-white/80 backdrop-blur-md rounded-2xl border border-primary/20 shadow-elite group"
      >
        <div className="h-24 md:h-32 w-full overflow-hidden relative">
          <img src={college.img} alt={college.name} className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700" loading="lazy" />
          <div className="absolute top-2 right-2 z-20">
            <div className="px-2 py-0.5 rounded-full text-[7px] md:text-[8px] font-extrabold uppercase tracking-widest bg-primary text-white">
              {college.ranking}
            </div>
          </div>
        </div>
        <div className="p-3 md:p-4 flex flex-col gap-0.5 md:gap-1">
          <h3 className="text-xs md:text-sm font-bold tracking-tight text-high-contrast font-serif leading-tight">{college.name}</h3>
          <p className="text-[8px] md:text-[9px] uppercase tracking-[0.1em] text-primary font-extrabold">{college.tagline}</p>
        </div>
      </Tilt>
    </motion.div>
  );
}

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { GraduationCap, Laptop, Award } from "lucide-react";
import { useDeviceOrientation } from "@/hooks/useDeviceOrientation";

// Actual data for colleges
export const colleges = [
  { id: 1, name: "Akash Group of Institutions", ranking: "Bangalore", tagline: "Excellence in Medical & Tech", img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, name: "Aditya Engineering College", ranking: "Bangalore", tagline: "Shaping Future Innovators", img: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&auto=format&fit=crop" },
  { id: 3, name: "Atmiya University", ranking: "Rajkot", tagline: "Value-based Education", img: "https://images.unsplash.com/photo-1523050853051-f75000490079?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, name: "S-VYASA Deemed to be University", ranking: "Bangalore", tagline: "Yoga & Life Sciences", img: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=1200&auto=format&fit=crop" }
];

export default function ScholarshipSection({ onCardClick }: { onCardClick: (id: number) => void }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const orientation = useDeviceOrientation();

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      id="scholarships" 
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative py-40 container mx-auto px-10 max-w-7xl z-20 overflow-hidden touch-none"
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
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-medium">
              Veda ensures that brilliance is never hindered by circumstance. We provide comprehensive support for the nation's future leaders.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6 md:gap-8">
            {[
              { 
                icon: <Award className="text-primary" size={20} />, 
                title: "100% Academic Endowment", 
                desc: "Full tuition coverage for scholars in the top 1% of entrance examinations." 
              },
              { 
                icon: <Laptop className="text-primary" size={20} />, 
                title: "Premium Hardware Provision", 
                desc: "Recipients receive a complimentary MacBook or high-end workstation." 
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
                <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 mt-1 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-xs md:text-sm uppercase tracking-widest text-high-contrast mb-1">{item.title}</h4>
                  <p className="text-[10px] md:text-xs text-foreground/60 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Bowling Pin Cluster (60%) */}
        <div className="w-full lg:w-7/12 relative min-h-[500px] md:min-h-[600px] flex items-center justify-center mt-12 lg:mt-0">
          <div className="relative w-full h-[500px] md:h-[600px]">
            {colleges.map((college, i) => {
              // Bowling pin cluster arrangement (slightly narrower for mobile)
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
                  mouse={mousePos}
                  orientation={orientation}
                  onClick={() => onCardClick(college.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component for the "Bowling Pin" effect
function BowlingPinCard({ college, baseX, baseY, mouse, orientation, onClick }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Calculate displacement based on mouse/touch proximity (Bowling ball effect)
  const [displacement, setDisplacement] = useState({ x: 0, y: 0, rotate: 0 });

  useEffect(() => {
    if (!cardRef.current) return;
    const parent = cardRef.current.parentElement;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();

    // Convert percentage base positions to pixels relative to the container
    const cardX = (baseX / 100) * rect.width;
    const cardY = (baseY / 100) * rect.height;

    // Distance between mouse/touch and card center
    const dx = mouse.x - cardX;
    const dy = mouse.y - cardY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Ripple/Displacement effect (Bowling ball pushing pins)
    const MAX_DIST = window.innerWidth < 768 ? 150 : 250;
    
    let targetX = 0;
    let targetY = 0;
    let targetRotate = 0;

    if (distance < MAX_DIST) {
      const power = (MAX_DIST - distance) / MAX_DIST;
      const angle = Math.atan2(dy, dx);
      targetX = Math.cos(angle) * power * -30;
      targetY = Math.sin(angle) * power * -30;
      targetRotate = (dx / MAX_DIST) * 15;
    }

    // Add subtle tilt from device orientation (gyroscope)
    if (orientation?.gamma !== null && orientation?.beta !== null) {
      // Very subtle sway based on tilt
      targetX += orientation.gamma * 0.2;
      targetY += (orientation.beta - 45) * 0.2;
    }

    setDisplacement({ x: targetX, y: targetY, rotate: targetRotate });
  }, [mouse, baseX, baseY, orientation]);

  return (
    <motion.div
      ref={cardRef}
      animate={{ 
        x: displacement.x, 
        y: displacement.y,
        rotate: displacement.rotate,
        transition: { type: "spring", stiffness: 150, damping: 20 }
      }}
      className="absolute w-[160px] md:w-[240px] cursor-pointer z-10 hover:z-40"
      style={{ top: `${baseY}%`, left: `${baseX}%`, transform: 'translate(-50%, -50%)' }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <Tilt 
        tiltMaxAngleX={8} 
        tiltMaxAngleY={8} 
        perspective={1000} 
        scale={1.05}
        glareEnable={true}
        glareMaxOpacity={0.1}
        className="overflow-hidden bg-white/60 backdrop-blur-md rounded-2xl border border-primary/10 shadow-elite group"
      >
        <div className="h-24 md:h-32 w-full overflow-hidden relative">
          <img src={college.img} alt={college.name} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" />
          <div className="absolute top-2 right-2 z-20">
            <div className="px-2 py-0.5 rounded-full text-[7px] md:text-[8px] font-bold uppercase tracking-widest bg-white/80 text-primary">
              {college.ranking}
            </div>
          </div>
        </div>
        <div className="p-3 md:p-4 flex flex-col gap-0.5 md:gap-1">
          <h3 className="text-xs md:text-sm font-bold tracking-tight text-high-contrast font-serif leading-tight">{college.name}</h3>
          <p className="text-[8px] md:text-[9px] uppercase tracking-[0.1em] text-foreground/60 font-bold">{college.tagline}</p>
        </div>
      </Tilt>
    </motion.div>
  );
}

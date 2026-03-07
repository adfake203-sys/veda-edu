"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { MapPin } from "lucide-react";
import { useDeviceOrientation } from "@/hooks/useDeviceOrientation";

const pinsData = [
  { id: 1, name: "IIT Madras", x: "15%", y: "25%", delay: 0.1, color: "bg-[#B08D57]" }, // Gold
  { id: 2, name: "BITS Pilani", x: "75%", y: "20%", delay: 0.3, color: "bg-[#2D3142]" }, // Charcoal
  { id: 3, name: "IIM Ahmedabad", x: "35%", y: "50%", delay: 0.2, color: "bg-[#4F5D75]" }, // Slate
  { id: 4, name: "NIT Trichy", x: "85%", y: "60%", delay: 0.4, color: "bg-[#B08D57]" }, // Gold
  { id: 5, name: "VIT Vellore", x: "20%", y: "80%", delay: 0.5, color: "bg-[#2D3142]" }, // Charcoal
  { id: 6, name: "SRM University", x: "70%", y: "85%", delay: 0.6, color: "bg-[#B08D57]" }, // Gold
  { id: 7, name: "Delhi University", x: "55%", y: "30%", delay: 0.35, color: "bg-[#4F5D75]" }, // Slate
];

export default function PinCluster() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const orientation = useDeviceOrientation();
  
  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Device orientation tracking
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const smoothTiltX = useSpring(tiltX, springConfig);
  const smoothTiltY = useSpring(tiltY, springConfig);

  // Scroll tracking to transition pins into the grid
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const zoomOut = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      
      const intensity = window.innerWidth < 768 ? 20 : 50;
      mouseX.set(x * intensity);
      mouseY.set(y * intensity);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    // Update tilt values based on orientation
    if (orientation.gamma !== null && orientation.beta !== null) {
      // Gamma is tilt left/right (-90 to 90), Beta is tilt front/back (-180 to 180)
      // We'll normalize these for a subtle effect
      tiltX.set(orientation.gamma * 0.5); 
      tiltY.set((orientation.beta - 45) * 0.5); // Assuming 45 deg as neutral holding angle
    }
  }, [orientation, tiltX, tiltY]);

  return (
    <motion.div 
      ref={containerRef}
      className="relative w-full h-[450px] md:h-[600px] lg:h-[700px] flex items-center justify-center rounded-3xl overflow-hidden glass border-none shadow-elite"
      style={{ scale: zoomOut, opacity: fadeOut }}
    >
      {/* Background ambient gradient map-like */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-transparent"></div>
      
      {pinsData.map((pin, i) => {
        // Combined parallax from both touch/mouse and device orientation
        const parallaxX = useTransform(smoothX, (v) => v * (1 + i * 0.15));
        const parallaxY = useTransform(smoothY, (v) => v * (1 + i * 0.15));
        
        const gParallaxX = useTransform(smoothTiltX, (v) => v * (1 + i * 0.2));
        const gParallaxY = useTransform(smoothTiltY, (v) => v * (1 + i * 0.2));

        return (
          <motion.div
            key={pin.id}
            initial={{ scale: 0, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", delay: 0.5 + pin.delay, bounce: 0.4 }}
            className="absolute flex flex-col items-center gap-2 group cursor-pointer"
            style={{ 
              left: pin.x, 
              top: pin.y,
              x: parallaxX,
              y: parallaxY,
              translateX: gParallaxX,
              translateY: gParallaxY
            }}
          >
            {/* The Pin */}
            <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full ${pin.color} text-white flex items-center justify-center shadow-elite relative group-hover:scale-110 transition-transform`}>
              <MapPin size={isMobile ? 16 : 24} strokeWidth={2.5} />
              
              {/* Radar pulse effect */}
              <div className="absolute inset-0 rounded-full border border-white/30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
            </div>

            {/* Label - Higher contrast */}
            <div className="glass px-3 py-1.5 rounded-full text-[9px] md:text-xs font-bold text-high-contrast whitespace-nowrap opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity translate-y-1 md:translate-y-2 group-hover:translate-y-0 shadow-sm">
              {pin.name}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

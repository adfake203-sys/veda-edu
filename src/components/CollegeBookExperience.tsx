"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HTMLFlipBook from "react-pageflip";
import { X } from "lucide-react";
import { colleges } from "./ScholarshipSection";

// To avoid TS errors since react-pageflip lacks modern type definitions
const FlipBook = HTMLFlipBook as any;

export default function CollegeBookExperience({ 
  collegeId, 
  onClose 
}: { 
  collegeId: number | null, 
  onClose: () => void 
}) {
  const bookRef = useRef<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setIsTablet(window.innerWidth < 1024);
  }, []);
  
  const college = colleges.find(c => c.id === collegeId) || colleges[0];

  return (
    <AnimatePresence>
      {collegeId && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-background/80 overflow-hidden"
        >
          {/* Close button - more elegant */}
          <button 
            onClick={onClose}
            className="absolute top-10 right-10 w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/5 transition-colors z-[130] shadow-elite"
          >
            <X size={28} strokeWidth={1} />
          </button>

          <motion.div
            initial={{ scale: 0.8, y: 100, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 100 }}
            className="relative flex items-center justify-center w-full max-w-6xl px-4 md:px-10 h-[70vh] md:h-[80vh]"
          >
            <FlipBook
              width={isMobile ? 320 : 500}
              height={isMobile ? 500 : 700}
              size="stretch"
              minWidth={isMobile ? 280 : 400}
              maxWidth={600}
              minHeight={500}
              maxHeight={800}
              maxShadowOpacity={0.3}
              showCover={false} // Showing spread immediately
              mobileScrollSupport={true}
              usePortrait={isTablet}
              className="elite-book shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]"
              ref={bookRef}
            >
              {/* Page 1: Left - Institution Intro */}
              <div className="bg-[#fdfaf6] p-8 md:p-16 flex flex-col justify-between border-r border-[#e8e2d6] shadow-[inset_-20px_0_40px_rgba(0,0,0,0.03)] h-full">
                <div className="flex flex-col gap-4 md:gap-8">
                  <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Institution Profile</div>
                  <h1 className="text-3xl md:text-5xl font-serif italic text-primary leading-tight">{college.name}</h1>
                  <div className="w-full h-[1px] bg-primary/20"></div>
                  <p className="text-xs md:text-sm font-medium leading-loose text-foreground/80 max-w-[320px]">
                    Founded on the principles of academic excellence and visionary leadership, {college.name} stands as a beacon of distinguished education in {college.ranking}.
                  </p>
                </div>
                <div className="flex items-center gap-4 py-4 md:py-8">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary font-serif italic">V</div>
                   <div className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest opacity-40">Official Selection 2026</div>
                </div>
              </div>

              {/* Page 2: Right - Visual Feature */}
              <div className="bg-[#fcf8f2] p-8 md:p-12 flex flex-col justify-center items-center border-l border-white/50 shadow-[inset_20px_0_40px_rgba(0,0,0,0.02)] h-full">
                <div className="w-full h-full rounded-sm overflow-hidden shadow-elite border-[8px] md:border-[12px] border-white relative group">
                  <img src={college.img} className="w-full h-full object-cover grayscale-[0.3] transition-all duration-1000" alt="campus" />
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>

              {/* Page 3: Left - Accolades & Statistics */}
              <div className="bg-[#fdfaf6] p-8 md:p-16 flex flex-col border-r border-[#e8e2d6] shadow-[inset_-20px_0_40px_rgba(0,0,0,0.03)] h-full">
                <h2 className="text-xl md:text-2xl font-serif text-primary mb-8 md:mb-12">Academic Excellence</h2>
                <div className="space-y-8 md:space-y-12">
                  <div className="group">
                    <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-foreground/75 mb-2 md:mb-3 block text-primary/70">Premier Placement</div>
                    <div className="text-3xl md:text-4xl font-light tracking-tighter text-high-contrast group-hover:text-primary transition-colors">₹48.0 <span className="text-xs md:text-sm uppercase tracking-widest opacity-40 ml-1 font-bold">LPA Max</span></div>
                  </div>
                  <div className="group">
                    <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-foreground/75 mb-2 md:mb-3 block text-primary/70">Average Remuneration</div>
                    <div className="text-3xl md:text-4xl font-light tracking-tighter text-high-contrast group-hover:text-primary transition-colors">₹16.5 <span className="text-xs md:text-sm uppercase tracking-widest opacity-40 ml-1 font-bold">LPA Avg</span></div>
                  </div>
                </div>
              </div>

              {/* Page 4: Right - Endorsements & Scholarships */}
              <div className="bg-[#fdfaf6] p-8 md:p-16 flex flex-col justify-between border-l border-white/50 shadow-[inset_20px_0_40px_rgba(0,0,0,0.02)] h-full">
                 <div>
                    <h2 className="text-xl md:text-2xl font-serif text-primary mb-6 md:mb-10">Distinguished Grants</h2>
                    <div className="space-y-6 md:space-y-10">
                      <div className="flex gap-4 md:gap-6 items-start">
                        <div className="w-6 md:w-8 h-[1px] bg-primary/60 mt-3 Shrink-0"></div>
                        <p className="text-[10px] md:text-xs font-medium leading-relaxed text-foreground/80 italic">
                          "Full endowment for scholars ranking in the upper decile of their respective departments."
                        </p>
                      </div>
                      <div className="flex gap-4 md:gap-6 items-start">
                        <div className="w-6 md:w-8 h-[1px] bg-primary/60 mt-3 Shrink-0"></div>
                        <p className="text-[10px] md:text-xs font-medium leading-relaxed text-foreground/80 italic">
                          "Exclusive Veda Excellence Grant providing state-of-the-art computational infrastructure."
                        </p>
                      </div>
                    </div>
                 </div>
                 
                 <button onClick={onClose} className="w-full py-4 md:py-5 border-[1px] border-primary/30 text-primary uppercase text-[9px] md:text-[10px] font-bold tracking-[0.3em] hover:bg-primary hover:text-white transition-all duration-500 shadow-elite mt-8 md:mt-12 bg-transparent">
                   Request Information
                 </button>
              </div>
            </FlipBook>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}

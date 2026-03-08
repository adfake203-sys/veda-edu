"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HTMLFlipBook from "react-pageflip";
import { X, Award, BarChart3, GraduationCap, MapPin } from "lucide-react";
import { colleges, College } from "@/data/colleges";

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
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 md:w-14 md:h-14 rounded-full border border-primary/20 flex items-center justify-center text-primary bg-white/10 hover:bg-primary/5 transition-colors z-[130] shadow-elite"
          >
            <X className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1} />
          </button>

          <motion.div
            initial={{ scale: 0.8, y: 100, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 100 }}
            className="relative flex items-center justify-center w-full max-w-6xl px-4 md:px-10 h-[80vh] md:h-[85vh]"
          >
            <FlipBook
              width={isMobile ? 320 : 500}
              height={isMobile ? 520 : 700}
              size="stretch"
              minWidth={isMobile ? 280 : 400}
              maxWidth={600}
              minHeight={500}
              maxHeight={800}
              maxShadowOpacity={0.3}
              showCover={false}
              mobileScrollSupport={true}
              usePortrait={isTablet}
              className="elite-book shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]"
              ref={bookRef}
            >
              {college.bookPages.map((page, index) => (
                <div key={index} className={`h-full overflow-hidden ${index % 2 === 0 ? "bg-[#fcf8f2] border-r border-[#e8e2d6] shadow-[inset_-20px_0_40px_rgba(0,0,0,0.03)]" : "bg-[#f9f5f0] border-l border-white/50 shadow-[inset_20px_0_40px_rgba(0,0,0,0.02)]"} p-8 md:p-12 lg:p-16 flex flex-col`}>
                  
                  {/* Page Header */}
                  <div className="flex items-center gap-2 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-primary mb-6 md:mb-10">
                    <Award size={14} /> {page.title}
                  </div>

                  {/* Page Title & Subtitle */}
                  {page.subtitle && (
                    <h2 className="text-xl md:text-2xl font-serif italic text-primary/80 mb-2 font-bold">{page.subtitle}</h2>
                  )}
                  
                  {/* Specialized Layouts based on type */}
                  <div className="flex-grow">
                    {page.type === 'intro' && (
                      <div className="flex flex-col gap-6 md:gap-8">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-primary leading-tight font-black">{college.name}</h1>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <span className="text-xs md:text-sm font-bold text-black/70">{page.content.establishment || page.content.diversity}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <span className="text-xs md:text-sm font-bold text-black/70">{page.content.facultyScale || page.content.infrastructure}</span>
                          </div>
                        </div>
                        <p className="text-sm md:text-base font-bold leading-relaxed text-black/90">
                          {page.content.description}
                        </p>
                      </div>
                    )}

                    {page.type === 'partners' && (
                      <div className="flex flex-col gap-6">
                        <div className="grid grid-cols-2 gap-4">
                          {page.content.partners.map((partner: string, i: number) => (
                            <div key={i} className="p-3 bg-white/40 border border-primary/10 rounded-lg flex items-center justify-center text-center">
                              <span className="text-[10px] md:text-xs font-black text-primary/80 uppercase tracking-tight">{partner}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-[10px] md:text-xs font-bold text-black/60 italic mt-4">
                          {page.content.training || page.content.placement || page.content.reach}
                        </p>
                      </div>
                    )}

                    {page.type === 'stats' && (
                      <div className="space-y-8 md:space-y-12 py-4">
                        <div className="group">
                          <div className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-primary mb-2 md:mb-3 block">Highest Placement</div>
                          <div className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-black group-hover:text-primary transition-colors">
                            {page.content.highest} <span className="text-xs md:text-sm uppercase tracking-widest opacity-60 ml-1 font-black">LPA</span>
                          </div>
                        </div>
                        <div className="group">
                          <div className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-primary mb-2 md:mb-3 block">Average Remuneration</div>
                          <div className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-black group-hover:text-primary transition-colors">
                            {page.content.average} <span className="text-xs md:text-sm uppercase tracking-widest opacity-60 ml-1 font-black">LPA</span>
                          </div>
                        </div>
                        <div className="group">
                          <div className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-primary mb-2 md:mb-3 block">Success Factor</div>
                          <div className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-black group-hover:text-primary transition-colors">
                            {page.content.rate}
                          </div>
                        </div>
                      </div>
                    )}

                    {page.type === 'infrastructure' && (
                      <div className="space-y-5 md:space-y-6 py-4">
                        {page.content.map((item: string, i: number) => (
                          <div key={i} className="flex gap-4 items-center group">
                            <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:scale-150 group-hover:bg-primary transition-all"></div>
                            <span className="text-xs md:text-sm font-bold text-black/80">{item}</span>
                          </div>
                        ))}
                        <div className="mt-8 p-4 bg-white/50 border border-primary/5 rounded-xl italic text-[10px] md:text-xs text-primary/70 font-bold">
                          "Premium campus life with state-of-the-art facilities designed for student success."
                        </div>
                      </div>
                    )}

                    {page.type === 'faculty' && (
                      <div className="space-y-6 md:space-y-8 py-4">
                        {page.content.map((item: string, i: number) => (
                          <div key={i} className="flex flex-col gap-1 border-b border-primary/5 pb-4">
                            <span className="text-xs md:text-sm font-black text-black">{item}</span>
                            <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-primary font-bold">Academic Excellence</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {page.type === 'achievements' && (
                      <div className="grid grid-cols-1 gap-4 py-4">
                        {page.content.map((item: string, i: number) => (
                          <div key={i} className="p-4 bg-primary/5 border border-primary/10 rounded-xl hover:bg-primary/10 transition-colors cursor-default">
                            <p className="text-xs md:text-sm font-bold text-black leading-tight">{item}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {page.type === 'testimonials' && (
                      <div className="space-y-6 md:space-y-8 py-4">
                        {page.content.map((item: string, i: number) => (
                          <div key={i} className="relative p-5 bg-white/60 border border-primary/10 rounded-2xl">
                            <div className="absolute -top-3 -left-2 text-4xl text-primary/20 font-serif">"</div>
                            <p className="text-xs md:text-sm font-bold text-black/80 italic leading-relaxed">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {page.type === 'highlights' && (
                      <div className="space-y-6 md:space-y-8 py-4">
                        {page.content.map((item: string, i: number) => (
                          <div key={i} className="flex gap-4 items-start group">
                            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                              <span className="text-[10px] font-black">{i + 1}</span>
                            </div>
                            <p className="text-xs md:text-sm font-bold leading-relaxed text-black/80 pt-1.5">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer Branding */}
                  <div className="mt-auto pt-8 flex items-center justify-between border-t border-primary/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full border-2 border-primary/40 flex items-center justify-center text-primary font-serif italic font-black text-sm">V</div>
                      <div className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-primary/60">VEDA Selection 2026</div>
                    </div>
                    {index % 2 !== 0 && (
                      <button className="px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-all text-[9px] font-black uppercase tracking-widest rounded-full">
                        Inquire
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </FlipBook>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}

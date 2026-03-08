"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Home", "Colleges", "Scholarships", "Contact"];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 border-b ${
          scrolled ? "glass border-border py-4" : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-10 max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary flex items-center justify-center text-white font-serif italic text-xl md:text-2xl group-hover:scale-105 transition-transform shadow-elite">
              V
            </div>
            <span className="font-bold text-lg md:text-xl tracking-tight text-high-contrast">
              VEDA <span className="font-light text-primary/80 uppercase text-[10px] tracking-[0.2em] ml-2 hidden sm:inline">Services</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-bold uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button 
              suppressHydrationWarning
              className="hidden sm:block bg-primary text-white px-8 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-wider hover:bg-primary/90 transition-all shadow-elite"
            >
              Consultation
            </button>
            
            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[55] lg:hidden bg-background glass backdrop-blur-3xl pt-32 px-10"
          >
            <nav className="flex flex-col gap-10">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-serif italic text-high-contrast hover:text-primary transition-colors block"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                suppressHydrationWarning
                className="mt-10 bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-xs shadow-elite"
              >
                Book Consultation
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

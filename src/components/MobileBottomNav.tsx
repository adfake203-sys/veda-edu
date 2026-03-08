"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, GraduationCap, Globe, Mail } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "scholarships", label: "Colleges", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function MobileBottomNav() {
  const [activeTab, setActiveTab] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    if (false) {
      // reserved for future use
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md lg:hidden"
        >
          <div className="glass border border-white/20 rounded-2xl h-16 flex items-center justify-around px-4 shadow-elite backdrop-blur-2xl bg-white/40">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  suppressHydrationWarning
                  className="relative flex flex-col items-center justify-center gap-1 w-12"
                >
                  <motion.div
                    animate={{ 
                      scale: isActive ? 1.2 : 1,
                      y: isActive ? -4 : 0,
                      color: isActive ? "var(--color-primary)" : "rgba(var(--color-foreground), 0.6)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Icon size={20} />
                  </motion.div>
                  <span className={`text-[8px] font-bold uppercase tracking-widest transition-opacity duration-300 ${isActive ? "opacity-100 text-primary" : "opacity-40"}`}>
                    {item.label}
                  </span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 w-1 h-1 rounded-full bg-primary"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

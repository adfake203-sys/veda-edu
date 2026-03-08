import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border pt-20 pb-10 z-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-30"></div>
      
      <div className="container mx-auto px-6 md:px-10 max-w-7xl relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6 col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-serif italic text-2xl shadow-elite">
                V
              </div>
              <span className="font-bold text-xl tracking-tight text-high-contrast">
                VEDA
              </span>
            </Link>
            <p className="text-sm text-foreground/60 leading-relaxed font-medium">
              Veda Educational Services is India's premier consultancy for elite college admissions and scholarship procurement. We bridge the gap between ambition and opportunity.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {[
                { icon: <Linkedin size={18} />, href: "#" },
                { icon: <Instagram size={18} />, href: "#" },
                { icon: <Twitter size={18} />, href: "#" },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-high-contrast mb-8">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {["Home", "Colleges", "Scholarships", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                    className="text-sm text-foreground/60 hover:text-primary transition-colors font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-high-contrast mb-8">Legal</h4>
            <ul className="flex flex-col gap-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-sm text-foreground/60 hover:text-primary transition-colors font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-high-contrast mb-8">Contact Us</h4>
            <div className="flex flex-col gap-5">
              <a href="mailto:veda.edu.services01@gmail.com" className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                  <Mail size={16} />
                </div>
                veda.edu.services01@gmail.com
              </a>
              <a href="tel:+9181066884488" className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                  <Phone size={16} />
                </div>
                +91 81066 884488
              </a>
              <div className="flex items-start gap-3 text-sm text-foreground/60 group">
                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary mt-1 shrink-0">
                  <MapPin size={16} />
                </div>
                <span>Anjaiah Road, Ongole, <br />Prakasam, Andhra Pradesh</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">
            © {currentYear} Veda Educational Services. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
             <span className="text-[9px] uppercase tracking-widest text-foreground/30 font-bold">Designed for Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

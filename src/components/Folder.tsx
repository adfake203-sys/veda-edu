"use client";

import React, { useState } from 'react';
import './Folder.css';
import { College } from '@/data/colleges';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const triggerHaptic = (intensity: number = 10) => {
  if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
    window.navigator.vibrate(intensity);
  }
};

const darkenColor = (hex: string, percent: number) => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split('')
      .map(c => c + c)
      .join('');
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

interface FolderProps {
  color?: string;
  size?: number;
  items: College[];
  onCardClick: (id: number) => void;
  className?: string;
}

const Folder: React.FC<FolderProps> = ({ color = '#5227FF', size = 1, items = [], onCardClick, className = '' }) => {
  const maxItems = 4;
  const papers = items.slice(0, maxItems);
  
  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor('#ffffff', 0.1);
  const paper2 = darkenColor('#ffffff', 0.05);
  const paper3 = '#ffffff';

  const handleClick = (e: React.MouseEvent) => {
    // Avoid opening if a paper (college) was clicked
    if ((e.target as HTMLElement).closest('.paper-content')) return;
    triggerHaptic(15);
    setOpen(prev => !prev);
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const folderStyle: any = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor,
    '--paper-1': paper1,
    '--paper-2': paper2,
    '--paper-3': paper3
  };

  const folderClassName = `folder ${open ? 'open' : ''}`.trim();
  const scaleStyle = { transform: `scale(${size})` };

  return (
    <div style={scaleStyle} className={`${className} folderContainer flex items-center justify-center py-20`}>
      <div className={folderClassName} style={folderStyle} onClick={handleClick}>
        <div className="folder__back">
          {papers.map((college, i) => (
            <motion.div
              key={college.id}
              className={`paper paper-${i + 1}`}
              drag={open}
              dragConstraints={{ left: -300, right: 300, top: -500, bottom: 200 }}
              onDragStart={() => triggerHaptic(8)}
              onPointerDown={() => triggerHaptic(5)}
              onClick={(e) => {
                if(open) {
                   e.stopPropagation();
                   triggerHaptic(20);
                   onCardClick(college.id);
                }
              }}
              animate={open ? {
                x: i === 0 || i === 2 ? -90 : 30, // Tighter horizontal dispersion
                y: i < 2 ? -130 : -40,
                rotate: i === 0 ? -5 : i === 1 ? 5 : i === 2 ? -2 : 2,
                scale: 1.1,
                opacity: 1,
              } : {
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
                opacity: 1,
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 30,
              }}
              style={{
                zIndex: open ? 20 + i : 2 + i,
              }}
            >
              <div className="paper-content w-full h-full relative cursor-pointer group pointer-events-auto">
                  <img src={college.img} alt={college.name} className="w-full h-2/3 object-cover pointer-events-none" />
                  <div className="p-2 bg-white flex flex-col h-1/3">
                      <span className="text-[6px] font-black uppercase text-primary leading-none mb-1">{college.ranking}</span>
                      <h4 className="text-[8px] font-bold text-black leading-tight truncate">{college.name}</h4>
                  </div>
                  {/* Hover overlay hint */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-[8px] font-bold text-white uppercase tracking-tighter">View Book</span>
                  </div>
              </div>
            </motion.div>
          ))}
          <div className="folder__front"></div>
          <div className="folder__front right"></div>
        </div>

        {/* Hint Label */}
        <div className="absolute -bottom-10 left-0 right-0 text-center whitespace-nowrap">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">
                {open ? "Select Category" : "Colleges"}
            </span>
        </div>
      </div>
    </div>
  );
};

export default Folder;

"use client";

import React, { useState } from 'react';
import './Folder.css';
import { College } from '@/data/colleges';

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
    setOpen(prev => !prev);
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperMouseMove = (e: React.MouseEvent, index: number) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (index: number) => {
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
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
            <div
              key={college.id}
              className={`paper paper-${i + 1}`}
              onMouseMove={e => handlePaperMouseMove(e, i)}
              onMouseLeave={() => handlePaperMouseLeave(i)}
              onClick={(e) => {
                if(open) {
                   e.stopPropagation();
                   onCardClick(college.id);
                }
              }}
              style={
                open
                  ? {
                      transform: `translate(${
                        i === 0 || i === 2 ? '-110%' : '10%'
                      }, ${
                        i < 2 ? '-130%' : '-40%'
                      }) rotate(${
                        i === 0 ? '-5deg' : i === 1 ? '5deg' : i === 2 ? '-2deg' : '2deg'
                      }) scale(1.1)`,
                      left: '50%',
                      zIndex: 10 + i,
                      '--magnet-x': `${paperOffsets[i]?.x || 0}px`,
                      '--magnet-y': `${paperOffsets[i]?.y || 0}px`
                    } as any
                  : {}
              }
            >
              <div className="paper-content w-full h-full relative cursor-pointer group">
                  <img src={college.img} alt={college.name} className="w-full h-2/3 object-cover" />
                  <div className="p-2 bg-white flex flex-col h-1/3">
                      <span className="text-[6px] font-black uppercase text-primary leading-none mb-1">{college.ranking}</span>
                      <h4 className="text-[8px] font-bold text-black leading-tight truncate">{college.name}</h4>
                  </div>
                  {/* Hover overlay hint */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-[8px] font-bold text-white uppercase tracking-tighter">View Book</span>
                  </div>
              </div>
            </div>
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

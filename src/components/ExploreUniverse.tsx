"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Text, Image as DreiImage, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import { X, MousePointerClick } from "lucide-react";
import * as THREE from "three";
import { colleges } from "./ScholarshipSection";

function CollegeCard3D({ college, position, onClick }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useFrame(() => {
    if (meshRef.current && !hovered) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5} position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => {
          setHover(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHover(false);
          document.body.style.cursor = 'auto';
        }}
        onClick={() => onClick(college.id)}
      >
        <planeGeometry args={[3.4, 4.6]} />
        <meshStandardMaterial 
          color={hovered ? "#fdfaf6" : "#f5f2ed"} 
          roughness={0.1} 
          metalness={0.1}
          transparent
          opacity={0.95}
        />
        
        {/* Render Image onto the card using Drei Image */}
        <DreiImage url={college.img} position={[0, 0, 0.05]} scale={[3.1, 4.3]} grayscale={0.2} />

        {/* Text Label - Serif for Elite feel */}
        <Text 
          position={[0, -2.8, 0.1]} 
          fontSize={isMobile ? 0.45 : 0.35} 
          color="#fbf8f2" 
          anchorX="center"
          font="https://fonts.gstatic.com/s/playfairdisplay/v30/6NU68F6fe026hH8FCzxO37vycXdw6o8qHCHwdk_v7mOYaDyf.ttf"
        >
          {college.name}
        </Text>
      </mesh>
    </Float>
  );
}

export default function ExploreUniverse({ 
  onClose, 
  onOpenBook 
}: { 
  onClose: () => void, 
  onOpenBook: (id: number) => void 
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [cameraZ, setCameraZ] = useState(20);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    setCameraZ(mobile ? 30 : 20);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[100] bg-[#121212] overflow-hidden"
    >
      <button 
        onClick={onClose}
        className="absolute top-6 left-6 md:top-10 md:left-10 w-12 h-12 md:w-16 md:h-16 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-white/5 transition-colors z-[110] shadow-elite"
      >
        <X size={isMobile ? 24 : 32} strokeWidth={1} />
      </button>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[110] text-primary/80 text-[10px] font-bold uppercase tracking-[0.3em] pointer-events-none px-6 md:px-10 py-3 md:py-4 rounded-full border border-primary/10 bg-white/5 backdrop-blur-md flex items-center gap-3 md:gap-4 w-[85%] md:w-auto justify-center">
        <span className="animate-pulse">Explore the Future</span>
        <span className="opacity-30 hidden md:inline">•</span>
        <span className="hidden md:inline">Click to open digital book</span>
      </div>

      <Canvas camera={{ position: [0, 0, cameraZ], fov: isMobile ? 65 : 55 }}>
        {/* Space Environment - Warmer/Elite space */}
        <color attach="background" args={['#0c0c0c']} />
        <fog attach="fog" args={['#0c0c0c', 10, 60]} />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#8c7851" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#d4cdc3" />

        <OrbitControls 
          enablePan={false} 
          enableZoom={true} 
          maxDistance={isMobile ? 50 : 40} 
          minDistance={10} 
          autoRotate 
          autoRotateSpeed={0.5}
          dampingFactor={0.03}
          rotateSpeed={isMobile ? 0.5 : 1}
        />

        {colleges.map((college, i) => {
          const phi = Math.acos(-1 + (2 * i) / colleges.length);
          const theta = Math.sqrt(colleges.length * Math.PI) * phi;
          const r = isMobile ? 10 + Math.random() * 3 : 12 + Math.random() * 2;
          
          const x = r * Math.cos(theta) * Math.sin(phi);
          const y = r * Math.sin(theta) * Math.sin(phi);
          const z = r * Math.cos(phi);

          return (
            <CollegeCard3D 
              key={college.id} 
              college={college} 
              position={[x, y, z]} 
              onClick={(id: number) => {
                document.body.style.cursor = 'auto';
                onOpenBook(id);
              }} 
            />
          );
        })}
      </Canvas>
    </motion.div>
  );
}

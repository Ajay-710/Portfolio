"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Background() {
  const { scrollYProgress } = useScroll();
  
  // Create parallax effects based on scroll progress
  // Moving at different speeds for depth
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
      {/* Accent 1 Blob */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-accent/15 blur-[120px] opacity-60"
      />
      
      {/* Accent 2 Blob */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-accent-2/15 blur-[100px] opacity-50"
      />
      
      {/* Gradient Blob */}
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full bg-gradient-to-tr from-accent/10 to-accent-2/15 blur-[130px] opacity-70"
      />
      
      {/* Subtle Grid Pattern for texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}

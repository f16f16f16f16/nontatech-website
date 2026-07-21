import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, 100]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.8]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.section 
      style={{ opacity, y, scale }}
      className="min-h-screen flex flex-col items-center justify-center relative px-4"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2338bdf8' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Logo Mark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={mounted ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8"
      >
        <svg width="80" height="100" viewBox="0 0 80 100" className="text-sky-400">
          <g stroke="currentColor" strokeWidth="2" fill="none">
            <line x1="10" y1="20" x2="10" y2="80" />
            <line x1="25" y1="10" x2="25" y2="90" />
            <line x1="40" y1="15" x2="40" y2="85" />
            <line x1="55" y1="5" x2="55" y2="95" />
            <line x1="70" y1="25" x2="70" y2="75" />
          </g>
        </svg>
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={mounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center"
      >
        <h2 className="text-xs md:text-sm tracking-[0.4em] text-sky-500 mb-4 uppercase">
          A Software Engineering Journey
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.2em] text-slate-800 mb-6">
          MY STORY
        </h1>
        <p className="text-slate-500 text-sm md:text-base max-w-md mx-auto leading-relaxed tracking-wide">
          Nontaphat Pongpis
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-12"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-[0.3em] text-slate-400 uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-sky-400 to-transparent" />
          <ChevronDown className="w-4 h-4 text-sky-400" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default HeroSection;
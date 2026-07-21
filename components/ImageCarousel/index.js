import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MIN_RATIO = 1 / 2;   // tallest allowed (portrait)
const MAX_RATIO = 21 / 9;  // widest allowed (landscape)
const DEFAULT_RATIO = 4 / 5;

export default function ImageCarousel({ images, alt, className = "", fillParent = false }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [ratios, setRatios] = useState({});

  const prev = (e) => {
    e.stopPropagation();
    setDirection(-1);
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };

  const next = (e) => {
    e.stopPropagation();
    setDirection(1);
    setCurrent((c) => (c + 1) % images.length);
  };

  const measure = useCallback((index, img) => {
    const { naturalWidth, naturalHeight } = img;
    if (!naturalWidth || !naturalHeight) return;
    const ratio = Math.min(MAX_RATIO, Math.max(MIN_RATIO, naturalWidth / naturalHeight));
    setRatios((prev) => (prev[index] === ratio ? prev : { ...prev, [index]: ratio }));
  }, []);

  const handleLoad = (index) => (e) => measure(index, e.target);

  // Covers images already cached/decoded by the time the ref attaches,
  // since the browser can skip firing "load" for those.
  const measureIfComplete = (index) => (img) => {
    if (img && img.complete) measure(index, img);
  };

  const aspectRatio = ratios[current] ?? DEFAULT_RATIO;

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <motion.div
      layout={!fillParent}
      style={fillParent ? undefined : { aspectRatio }}
      transition={{ layout: { duration: 0.4, ease: 'easeInOut' } }}
      className={`relative overflow-hidden ${fillParent ? 'absolute inset-0 w-full h-full' : 'w-full'} ${className}`}
    >
      <AnimatePresence custom={direction} initial={false}>
        <motion.img
          key={current}
          ref={measureIfComplete(current)}
          src={images[current]}
          alt={`${alt} ${current + 1}`}
          onLoad={handleLoad(current)}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-slate-700" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-slate-700" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? 'bg-white scale-125' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
}
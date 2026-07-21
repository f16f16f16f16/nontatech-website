import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import ImageCarousel from '../ImageCarousel';

export default function WideStoryCard({ story }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="min-h-screen flex items-center py-20 md:py-32"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Wide Media Container */}
        <motion.div
          style={{ y }}
          className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl mb-8"
        >
          {story.videoUrl ? (
            <video
              src={story.videoUrl}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <ImageCarousel
              images={story.images?.length ? story.images : [story.image]}
              alt={story.title}
              fillParent
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
          
          {/* Year Badge - Positioned on image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white/90 backdrop-blur-sm border border-slate-200 shadow-lg px-6 py-3"
          >
            <span className="text-2xl md:text-4xl font-light tracking-wider text-slate-800">
              {story.year}
            </span>
            {story.month && (
              <span className="text-sky-400 text-sm md:text-base ml-2">.{story.month}</span>
            )}
          </motion.div>
        </motion.div>

        {/* Content Below */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-sky-500 text-xs tracking-[0.3em] uppercase mb-4"
          >
            {story.category}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-light text-slate-800 mb-6 leading-tight"
          >
            {story.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            {story.description}
          </motion.p>

          {(story.link || story.links?.length > 0) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-6 flex flex-wrap justify-center gap-3"
            >
              {(story.links || [{ url: story.link, label: story.linkLabel }]).map((l, i) => (
                <a
                  key={i}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-sky-500 hover:text-sky-700 border border-sky-200 hover:border-sky-400 px-4 py-2 rounded-full transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {l.label || "View Project"}
                </a>
              ))}
            </motion.div>
          )}

          {story.highlights && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {story.highlights.map((highlight, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-sky-50 border border-sky-200 text-sky-600 text-xs tracking-wider rounded-full"
                >
                  {highlight}
                </span>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
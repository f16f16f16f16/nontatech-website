import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import ImageCarousel from '../ImageCarousel';


export default function StoryCard({ story, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="min-h-screen flex items-center py-20 md:py-32"
    >
      <div className={`w-full max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
        isEven ? '' : 'md:flex-row-reverse'
      }`}>
        {/* Image */}
        <motion.div
          style={{ y: imageY }}
          className={`relative ${isEven ? 'md:order-1' : 'md:order-2'}`}
        >
          <div className="relative rounded-lg overflow-hidden">
            <ImageCarousel
              images={story.images?.length ? story.images : [story.image]}
              alt={story.title}
            />
          </div>
          
          {/* Year Badge */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`absolute -bottom-4 ${isEven ? '-left-4' : '-right-4'} bg-white border border-slate-200 shadow-lg px-6 py-3`}
          >
            <span className="text-2xl md:text-3xl font-light tracking-wider text-slate-800">
              {story.year}
            </span>
            {story.month && (
              <span className="text-sky-400 text-sm ml-2">.{story.month}</span>
            )}
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ y }}
          className={`${isEven ? 'md:order-2' : 'md:order-1'}`}
        >
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
            className="text-2xl md:text-4xl lg:text-5xl font-light text-slate-800 mb-6 leading-tight"
          >
            {story.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 text-sm md:text-base leading-relaxed mb-8"
          >
            {story.description}
          </motion.p>

          {(story.link || story.links?.length > 0) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-6 flex flex-wrap gap-3"
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
              className="flex flex-wrap gap-3"
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
        </motion.div>
      </div>
    </motion.div>
  );
}
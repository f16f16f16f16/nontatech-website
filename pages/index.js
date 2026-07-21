import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TimelineSection, { stories } from "@/components/Timeline";
import YearNav from "@/components/YearNav";
import HeroSection from "@/components/HeroSection";
import FooterSection from "@/components/FooterSection";

const Home = () => {
  const [activeYear, setActiveYear] = useState("2020");
  const [showNav, setShowNav] = useState(false);

  const years = [...new Set(stories.map((s) => s.year))];

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToYear = (year) => {
    const storyIndex = stories.findIndex((s) => s.year === year);
    if (storyIndex !== -1) {
      const element = document.getElementById(`story-${storyIndex}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 overflow-x-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl" />
      </div>

      {/* Year Navigation */}
      <AnimatePresence>
        {showNav && <YearNav years={years} activeYear={activeYear} onYearClick={scrollToYear} />}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-sky-400 origin-left z-50"
        style={{
          scaleX: 0,
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
      />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />

        <div className="relative">
          <TimelineSection onYearChange={setActiveYear} />
        </div>

        <FooterSection />
      </main>

      {/* Noise Texture Overlay */}
      {/* <div
        className="fixed inset-0 pointer-events-none opacity-[0.015] z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      /> */}
    </div>
  );
};

export default Home;

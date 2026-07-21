import React from "react";
import { motion } from "framer-motion";

const YearNav = ({ years, activeYear, onYearClick }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.6 }}
      className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 z-40 hidden md:block"
    >
      <div className="flex flex-col items-end gap-3">
        {years.map((year) => (
          <button key={year} onClick={() => onYearClick(year)} className="group flex items-center gap-3">
            <span
              className={`text-xs tracking-[0.2em] transition-all duration-300 ${
                activeYear === year ? "text-slate-800 font-medium" : "text-slate-400 group-hover:text-slate-600"
              }`}
            >
              {year}
            </span>
            <div className="relative">
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeYear === year ? "bg-sky-400 scale-125" : "bg-slate-300 group-hover:bg-slate-400"
                }`}
              />
              {activeYear === year && (
                <motion.div
                  layoutId="activeYear"
                  className="absolute inset-0 w-2 h-2 rounded-full bg-sky-400/30 scale-[2.5]"
                />
              )}
            </div>
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default YearNav;

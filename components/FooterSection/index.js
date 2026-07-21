import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Mail, Linkedin, Github } from "lucide-react";

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-32 px-4">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-sky-100/50 to-transparent" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Call to Action */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
            Let's
            <span className="block text-sky-400">Connect</span>
          </h2>
          <p className="text-slate-500 max-w-md mx-auto mb-12">
            I'm endlessly curious about building things — mobile apps, web platforms, whatever the problem calls for.
            Always happy to connect, collaborate, or hear what you're working on.
          </p>

          {/* Contact Button */}
          <motion.a
            href="mailto:nontaphat.pongpis@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-sky-400 text-white font-medium tracking-wider text-sm rounded-full hover:bg-sky-500 transition-colors shadow-lg shadow-sky-400/25"
          >
            <Mail className="w-4 h-4" />
            GET IN TOUCH
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center gap-6 mt-16 mb-16"
        >
          {[
            { icon: Github, href: "https://github.com/f16f16f16f16", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/nontaphat-pongpis", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 hover:text-sky-500 hover:border-sky-400 transition-colors"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        {/* Back to Top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -4 }}
          className="flex flex-col items-center gap-2 mx-auto text-slate-400 hover:text-sky-500 transition-colors"
        >
          <ArrowUp className="w-5 h-5" />
          <span className="text-xs tracking-[0.3em] uppercase">Back to Top</span>
        </motion.button>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-slate-400 text-xs tracking-wider">© {new Date().getFullYear()} — Crafted with passion</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

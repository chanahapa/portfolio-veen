"use client";

import { motion } from "framer-motion";

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Nom */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-slate-800 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            LK
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-600 hover:text-slate-800 transition-colors"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-slate-600 hover:text-slate-800 transition-colors"
            >
              Projets
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-slate-600 hover:text-slate-800 transition-colors"
            >
              Compétences
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-slate-600 hover:text-slate-800 transition-colors"
            >
              Expérience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-600 hover:text-slate-800 transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}

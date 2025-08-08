"use client";

import { motion } from "framer-motion";
import { MapPin, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar avec initiales */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl">
            <span className="text-4xl font-bold text-white">LK</span>
          </div>
        </motion.div>

        {/* Nom et titre */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
            Loïck Keveen Niongolo
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-600 mb-4">
            Développeur Full Stack & Créatif Numérique
          </h2>

          {/* Localisation */}
          <div className="flex items-center justify-center gap-2 text-slate-500">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">Pointe-Noire, Congo</span>
          </div>
        </motion.div>

        {/* Boutons sociaux */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="gradient" size="lg" className="group" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              GitHub
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group border-slate-300 hover:border-slate-400"
            asChild
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              LinkedIn
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group border-slate-300 hover:border-slate-400"
            asChild
          >
            <a href="#contact">
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Contact
            </a>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-slate-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

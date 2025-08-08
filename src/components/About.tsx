"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
            À propos
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
          >
            <p className="mb-6">
              Passionné par la technologie et la créativité numérique, je
              développe des solutions web et mobiles innovantes depuis plus de 3
              ans.
            </p>
            <p className="mb-6">
              Quand je ne code pas, vous me trouverez en train de composer de la
              musique ou de travailler sur des projets à impact social.
            </p>
            <p>
              Mon objectif est de créer des expériences digitales qui font la
              différence dans la vie des utilisateurs, tout en contribuant au
              développement technologique de l'Afrique centrale.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

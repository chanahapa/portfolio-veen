"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    period: "Mars 2025 - Présent",
    title: "Fontech Industrie",
    position: "Développeur Full Stack",
    description:
      "Développement d'une application de Gestion Electronique de Documents (GED) pour la société Fontech Industrie",
    location: "Pointe-Noire, Congo",
  },
  {
    id: 2,
    period: "Septembre 2024 - Février 2025",
    title: "Wilkaï",
    position: "Développeur Full Stack",
    description: "TMA, Développement web et Modélisation 3D",
    location: "Pointe-Noire, Congo",
  },
  {
    id: 3,
    period: "2023",
    title: "Ecole Supérieure de Commerce et d'Industrie du Congo",
    position: "Développeur Junior",
    description:
      "Participation au développement de solutions digitales pour le secteur éducatif",
    location: "Pointe-Noire, Congo",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Expérience Professionnelle
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mon parcours professionnel dans le développement web et mobile
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className="relative mb-8 ml-16"
            >
              {/* Timeline dot */}
              <div className="absolute -left-8 top-2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>

              <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center gap-2 text-blue-600 mb-2 md:mb-0">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {experience.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{experience.location}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-1">
                  {experience.title}
                </h3>
                <h4 className="text-lg font-semibold text-slate-600 mb-3">
                  {experience.position}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

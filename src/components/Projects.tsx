"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Gestion de stocks événementiels",
    description:
      "Système complet de gestion d'inventaire pour événements corporatifs avec suivi en temps réel et rapports automatisés.",
    technologies: ["Express.js", "React", "PostgreSQL"],
    link: "#",
  },
  {
    id: 2,
    title: "Biblioth'école",
    description:
      "Plateforme de gestion de bibliothèque scolaire avec système de prêts, catalogage et gestion des utilisateurs.",
    technologies: ["React", "Express.js", "PostgreSQL"],
    link: "#",
  },
  {
    id: 3,
    title: "Projet agrobusiness",
    description:
      "Solution digitale pour la gestion de chaînes d'approvisionnement agricole avec suivi des récoltes et optimisation logistique.",
    technologies: ["Odoo"],
    link: "#",
  },
  {
    id: 4,
    title: "Refonte site Green Services",
    description:
      "Modernisation complète du site web avec focus sur l'éco-responsabilité et l'expérience utilisateur optimisée.",
    technologies: ["WordPress", "Elementor"],
    link: "https://greenservices-congo.net/",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Projets Récents
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Découvrez mes derniers projets de développement web et mobile
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-slate-300">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button variant="outline" size="sm" className="group" asChild>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir plus
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

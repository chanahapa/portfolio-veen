"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Settings, Database, Palette } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Code,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    items: [
      "React",
      "Vue.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "Blazor",
    ],
  },
  {
    category: "Backend",
    icon: Settings,
    color: "text-green-600",
    bgColor: "bg-green-50",
    items: [
      "Node.js",
      "Laravel",
      "Express.js",
      "Python",
      "PHP",
      "ASP.NET Core",
    ],
  },
  {
    category: "Base de données",
    icon: Database,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    items: ["MongoDB", "PostgreSQL", "MySQL", "SQL Server"],
  },
  {
    category: "Outils",
    icon: Palette,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    items: ["Git", "Docker", "Figma", "Canva", "Odoo", "WordPress", "Blender"],
  },
];

export default function Skills() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Compétences Techniques
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Technologies et outils que j'utilise pour créer des solutions
            digitales
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              className="group"
            >
              <div
                className={`p-6 rounded-lg border border-slate-200 hover:border-slate-300 transition-all duration-300 ${skill.bgColor} hover:shadow-lg`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${skill.bgColor} mr-3`}>
                    <skill.icon className={`w-6 h-6 ${skill.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    {skill.category}
                  </h3>
                </div>

                <div className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="text-sm text-slate-600 hover:text-slate-800 transition-colors cursor-default"
                    >
                      • {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

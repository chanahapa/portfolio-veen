"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DownloadCV() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Télécharger mon CV
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Consultez mon CV complet pour en savoir plus sur mon parcours et mes
            compétences
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="gradient"
              size="lg"
              className="group text-lg px-8 py-4"
              asChild
            >
              <a href="/cv-loick-keveen-niongolo.pdf" download>
                <Download className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Télécharger CV
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

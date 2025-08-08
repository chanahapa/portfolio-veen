import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loïck Keveen Niongolo - Développeur Full Stack",
  description:
    "Portfolio de Loïck Keveen Niongolo, développeur full-stack basé à Pointe-Noire, Congo. Spécialisé dans le développement web et mobile avec des technologies modernes.",
  keywords: [
    "développeur",
    "full-stack",
    "web",
    "mobile",
    "Congo",
    "Pointe-Noire",
    "React",
    "Vue.js",
    "Node.js",
  ],
  authors: [{ name: "Loïck Keveen Niongolo" }],
  creator: "Loïck Keveen Niongolo",
  openGraph: {
    title: "Loïck Keveen Niongolo - Développeur Full Stack",
    description:
      "Portfolio de Loïck Keveen Niongolo, développeur full-stack basé à Pointe-Noire, Congo.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

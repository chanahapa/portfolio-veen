import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import DownloadCV from "@/components/DownloadCV";
import Contact from "@/components/Contact";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <DownloadCV />
        <Contact />
      </main>
    </>
  );
}

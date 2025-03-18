import About from "@components/About";
import Intro from "@components/Intro";
import Projects from "@components/Projects";
import SectionDivider from "@components/section-divider";
import Skills from "@components/Skills";
import Contact from "@components/Contact";
import Experiences from "@/app/components/Experiences";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experiences />
      <Contact />
    </main>
  );
}

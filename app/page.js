import Nav from "@/components/Nav";
import ComingSoonBanner from "@/components/ComingSoonBanner";
import Hero from "@/components/Hero";
import CompanyMarquee from "@/components/CompanyMarquee";
import WhatIDo from "@/components/WhatIDo";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <ComingSoonBanner />
      <main>
        <Hero />
        <CompanyMarquee />
        <Reveal>
          <WhatIDo />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Tools />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}

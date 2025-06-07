import { HeroSection } from "./components/pages/hero-section";
import { KnownSkills } from "./components/pages/known-skills";
import { AboutSection } from "./components/pages/about-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <KnownSkills />
      {/* 
      <HighlightedProjects/>
      <WorkExperience/> */}
    </>
  );
}

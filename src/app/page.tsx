import { AboutMe } from "@/components/pages/home/about-me";
import { HeroSection } from "@/components/pages/home/hero-section";
import { ProjectsSection } from "@/components/pages/Projects/projects-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <AboutMe />
    </>
  )
}

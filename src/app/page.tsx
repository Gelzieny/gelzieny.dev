import { AboutMe } from "@/components/pages/home/about-me";
import { HeroSection } from "@/components/pages/home/hero-section";
import { ProjectsSection } from "@/components/pages/home/projects-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <ProjectsSection />
    </>
  )
}

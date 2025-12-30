import { AboutMe } from "@/components/pages/home/about-me";
import { HeroSection } from "@/components/pages/home/hero-section";
import { WorkExperience } from "@/components/pages/home/work-experience";
import { ProjectsSection } from "@/components/pages/home/projects-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <ProjectsSection />
      <WorkExperience />
    </>
  )
}

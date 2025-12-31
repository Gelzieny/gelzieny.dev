import { getHomePage } from "@/lib/services/getHomePage";
import { AboutMe } from "@/components/pages/home/about-me";
import { HeroSection } from "@/components/pages/home/hero-section";
import { WorkExperience } from "@/components/pages/home/work-experience";
import { ProjectsSection } from "@/components/pages/home/projects-section";

export default async function Home() {
  const { page } = await getHomePage()

  // console.log(page)

  return (
    <>
      <HeroSection
        data={{
          functions: page.functions,
          introduction: page.introduction,
          profilePicture: page.profilePicture,
        }}
      />
      <AboutMe data={page.aboutMe} />
      <ProjectsSection />
      <WorkExperience />
    </>
  )
}

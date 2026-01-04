import { getHomePage } from "@/lib/services/getHomePage";
import { AboutMe } from "@/components/pages/home/about-me";
import { HeroSection } from "@/components/pages/home/hero-section";
import { WorkExperience } from "@/components/pages/home/work-experience";
import { ProjectsSection } from "@/components/pages/home/projects-section";
import { locales } from "@/lib/i18n/config";

type HomeProps = {
  params: Promise<{
    locale: (typeof locales)[number];
  }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  const { page } = await getHomePage(locale);

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
      <ProjectsSection data={page.highlightProjects} />
      <WorkExperience data={page.workExperiences} />
    </>
  );
}

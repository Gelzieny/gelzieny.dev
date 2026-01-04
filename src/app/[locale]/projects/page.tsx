import { getProjectPage } from "@/lib/services/getProjectPage";
import { ProjectsList } from "@/components/pages/Projects/projects-list";
import { PageIntroduction } from "@/components/pages/Projects/page-introduction";
import { locales } from "@/lib/i18n/config";

export const metadata = {
  title: 'Projetos',
}

type ProjectsPageProps = {
  params: Promise<{
    locale: (typeof locales)[number];
  }>;
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;
  const { projects } = await getProjectPage(locale);

  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={projects}/>    
    </>
  );
}

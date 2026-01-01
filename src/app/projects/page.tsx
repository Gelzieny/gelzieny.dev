import { getProjectPage } from "@/lib/services/getProjectPage";
import { ProjectsList } from "@/components/pages/Projects/projects-list";
import { PageIntroduction } from "@/components/pages/Projects/page-introduction";

export const metadata = {
  title: 'Projetos',
}


export default async function ProjectsPage() {
  const { projects } = await getProjectPage()


  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={projects}/>    
    </>
  );
}

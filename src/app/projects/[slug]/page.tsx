import { notFound } from "next/navigation";
import { ProjectDetails } from "@/components/pages/project/project-details";
import { ProjectSections } from "@/components/pages/project/project-sections";
import { getProjectBySlug } from "@/lib/services/getProjectBySlug";

type ProjectProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectProps) {
  const { slug } = await params;

  const { project } = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} /> 
    </>
  );
}

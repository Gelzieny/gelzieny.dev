import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProjectDetails } from "@/components/pages/project/project-details";
import { ProjectSections } from "@/components/pages/project/project-sections";
import { getProjectBySlug } from "@/lib/services/getProjectBySlug";
import { getProjectPage } from "@/lib/services/getProjectPage";

type ProjectProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const { projects } = await getProjectPage();
  
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectProps): Promise<Metadata> {
  const { slug } = await params;
  const { project } = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projeto não encontrado",
    };
  }

  return {
    title: `${project.title}`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [
        {
          url: project.pageThumbnail?.url || project.thumbnail.url,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

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

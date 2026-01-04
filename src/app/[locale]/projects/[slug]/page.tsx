import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProjectDetails } from "@/components/pages/project/project-details";
import { ProjectSections } from "@/components/pages/project/project-sections";
import { getProjectBySlug } from "@/lib/services/getProjectBySlug";
import { getProjectPage } from "@/lib/services/getProjectPage";
import { locales } from "@/lib/i18n/config";

type ProjectProps = {
  params: Promise<{
    slug: string;
    locale: (typeof locales)[number];
  }>;
};

export async function generateStaticParams() {
  const allParams = [];
  
  for (const locale of locales) {
    const { projects } = await getProjectPage(locale);
    const params = projects.map((project) => ({
      locale,
      slug: project.slug,
    }));
    allParams.push(...params);
  }
  
  return allParams;
}

export async function generateMetadata({ params }: ProjectProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const { project } = await getProjectBySlug(slug, locale);

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
  const { slug, locale } = await params;

  const { project } = await getProjectBySlug(slug, locale);

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

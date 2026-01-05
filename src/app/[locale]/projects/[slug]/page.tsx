import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProjectDetails } from "@/components/pages/project/project-details";
import { ProjectSections } from "@/components/pages/project/project-sections";
import { getProjectBySlug } from "@/lib/services/getProjectBySlug";
import { toLocale, type Locale } from "@/lib/i18n/config";

/**
 * Usa ISR para evitar rate limit do Hygraph
 * Página é gerada sob demanda e cacheada
 */
export const revalidate = 3600; // 1 hora

type ProjectProps = {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
};

/**
 * ❌ NÃO gerar páginas no build
 * Evita "Too Many Requests" no Hygraph
 */
export async function generateStaticParams() {
  return [];
}

/**
 * Metadata dinâmica com segurança
 */
export async function generateMetadata(
  { params }: ProjectProps
): Promise<Metadata> {
  const { slug, locale } = await params;
  const safeLocale: Locale = toLocale(locale);

  const { project } = await getProjectBySlug(slug, safeLocale);

  if (!project) {
    return {
      title: "Projeto não encontrado",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [
        {
          url: project.pageThumbnail?.url ?? project.thumbnail.url,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

/**
 * Página do projeto (ISR)
 */
export default async function ProjectPage({ params }: ProjectProps) {
  const { slug, locale } = await params;
  const safeLocale: Locale = toLocale(locale);

  const { project } = await getProjectBySlug(slug, safeLocale);

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

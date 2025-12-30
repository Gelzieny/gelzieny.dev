"use client";

import { useParams } from "next/navigation";
import { projects } from "@/lib/projects";
import { ProjectDetails } from "@/components/pages/project/project-details";
import { ProjectSections } from "@/components/pages/project/project-sections";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="container py-32 text-center">
        <h1 className="text-2xl font-semibold">Projeto não encontrado</h1>
      </section>
    );
  }

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections title={project.title} images={project.images?.[0]} />
    </>
  );
}

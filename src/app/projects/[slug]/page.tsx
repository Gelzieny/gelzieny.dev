"use client";

import { useMemo } from "react";
import { projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { getSkillIconUrl } from "@/components/ui/tool-icons-grid/skills";
import { useParams } from "next/navigation";

export default function ProjectDetail() {
  const params = useParams();
  const slug = params?.slug as string | undefined;

  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);

  if (!project) {
    return (
      <div className="container py-16">
        <h2 className="text-2xl font-semibold">Projeto não encontrado</h2>
        <Link href="/projects" className="text-purple-500 hover:underline">
          Voltar aos projetos
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-16">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-4xl font-extrabold">{project.title}</h1>
          <p className="mt-4 text-gray-300">{project.description}</p>

          <div className="mt-6 flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-100 rounded-md hover:opacity-90"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-100 rounded-md hover:opacity-90"
              >
                <ExternalLink size={16} />
                <span>Ver no ar</span>
              </a>
            )}
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-medium text-gray-400">Tecnologias</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.techs.map((t) => (
                <div key={t} className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-md">
                  <img src={getSkillIconUrl(t)} alt={t} width={28} height={28} className="rounded bg-white p-1" />
                  <span className="text-gray-200 text-sm">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.images && project.images.length > 0 ? (
              project.images.map((img) => (
                <div key={img} className="w-full h-48 relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <Image src={img} alt={project.title} fill className="object-cover" />
                </div>
              ))
            ) : (
              <div className="w-full h-64 bg-gray-100 dark:bg-gray-800 rounded-lg" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

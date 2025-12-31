
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import type { Project } from "@/lib/types/project";
import { RichText } from "@/components/ui/rich-text";
import { SectionTitle } from "@/components/ui/section-title";
import { techDisplayNameMap, techIconMap } from "@/lib/iconMap";
import { getSkillIconUrl } from "@/components/ui/tool-icons-grid/skills";

type ProjectDetailsProps = {
  project: Project
}

export function ProjectDetails({ project }: ProjectDetailsProps) {

  const {title, technologies,  githubUrl, liveProjectUrl, description} = project;

  return (
    <section className="w-full sm:min-h-[450px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <SectionTitle
        subtitle="projetos"
        title={title}
        className="text-center items-center sm:[&>h3]:text-4xl"
      />
      <div className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        <RichText content={description.raw} />

      </div>
      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        {technologies.map((t, idx) => {
          const iconKey = techIconMap[t.name] || t.name.toLowerCase();
          const displayName = techDisplayNameMap[t.name] || t.name;

          return (
            <img
              key={iconKey}
              src={getSkillIconUrl(iconKey)}
              alt={displayName}
              width={32}
              height={32}
              style={{ animationDelay: `${idx * 0.06}s` }}
              className="rounded p-0.5 transform transition-all duration-300 hover:scale-110 animate-fade-up"
              title={displayName}
            />
          );
        })}
      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-100 rounded-md hover:opacity-90"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        )}
        {liveProjectUrl && (
          <a href={liveProjectUrl} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-100 rounded-md hover:opacity-90"
          >
            <ExternalLink size={16} />
            <span>Projeto Online</span>
          </a>
        )}
      </div>
      <Link href="/projects" className="group inline-flex items-center gap-2">
        <ArrowLeft
          size={16}
          className="transition-transform group-hover:-translate-x-1"
        />
        <span>Voltar para projetos</span>
      </Link>

    </section>
  );
}

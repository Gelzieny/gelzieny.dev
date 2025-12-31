
import Link from "next/link";
import { Project } from "@/lib/projects";
import { SectionTitle } from "@/components/ui/section-title";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getSkillIconUrl } from "@/components/ui/tool-icons-grid/skills";

export function ProjectDetails({ project }: { project: Project }) {
  const backgroundImage = project.images?.[0] ?? project.thumbnail;

  return (
    <section className="w-full sm:min-h-[450px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <SectionTitle
        subtitle="projetos"
        title={project.title}
        className="text-center items-center sm:[&>h3]:text-4xl"
      />
      <div className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        {/* <RichText content={project.description} /> */}
        {project.description}
      </div>
      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        {project.techs.map((tech, idx) => (
          <img
            key={tech}
            src={getSkillIconUrl(tech)}
            alt={tech}
            width={32}
            height={32}
            style={{ animationDelay: `${idx * 0.06}s` }}
            className=" rounded p-0.5 transform transition-all duration-300 hover:scale-110 animate-fade-up"
          />
        ))}
      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        {project?.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-100 rounded-md hover:opacity-90"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        )}
        {project?.liveProjectUrl && (
          <a href={project.liveProjectUrl} target="_blank" rel="noreferrer"
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

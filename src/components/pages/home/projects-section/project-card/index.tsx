"use client";

import Image from "next/image";
import Link from "next/link";
import { getSkillIconUrl } from "@/components/ui/tool-icons-grid/skills";

import { Project } from "@/lib/projects";
import { ArrowRight } from "lucide-react";

type Props = { project: Project };

export function HomeProjectCard({ project }: Props) {
  return (
    <article className="flex gap-6 lg:gap-10 flex-col lg:flex-row items-start">
      <div className="w-full h-[180px] sm:h-[240px] lg:w-[420px] lg:min-h-full rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={project.thumbnail}
          alt={`Thumbnail do projeto ${project.title}`}
          width={420}
          height={304}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 lg:py-4">
        <div className="flex items-center gap-3">
          <Image width={20} height={20} alt="" src="/icons/project-title-icons.svg" />
          <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{project.title}</h3>
        </div>

        <p className="text-gray-600 dark:text-gray-300 my-4 max-w-xl">{project.description}</p>

        <div className="mt-3 flex items-center gap-3 flex-wrap">
          {project.techs.map((tech, idx) => (
            <img
              key={tech}
              src={getSkillIconUrl(tech)}
              alt={tech}
              width={28}
              height={28}
              style={{ animationDelay: `${idx * 0.06}s` }}
              className="bg-white dark:bg-gray-900 rounded p-0.5 transform transition-all duration-300 hover:scale-110 animate-fade-up"
            />
          ))}
        </div>

        <div className="mt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-purple-500 transition-colors duration-300 font-medium"
          >
            Ver projeto
            <ArrowRight />
          </Link>
        </div>
      </div>
    </article>
  );
}

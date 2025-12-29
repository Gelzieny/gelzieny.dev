"use client";

import Link from "next/link";
import Image from "next/image";

import { Project } from "@/lib/projects";
import { getSkillIconUrl } from "@/components/ui/tool-icons-grid/skills";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <div className="w-full">
      <div className="p-0.5 rounded-2xl bg-purple-500 animate-gradient-xy">
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl overflow-hidden">
          <div className="w-full h-56 relative">
            <Image src={project.thumbnail} alt={project.title} fill className="object-cover" />
          </div>

          <div className="p-6">
            <h4 className="text-2xl font-semibold text-gray-600 dark:text-gray-400">{project.title}</h4>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{project.description}</p>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {project.techs.map((t) => (
                  <img
                    key={t}
                    src={getSkillIconUrl(t)}
                    alt={t}
                    width={28}
                    height={28}
                    className="bg-white dark:bg-gray-900 rounded p-0.5 rounded-1xl transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1"
                  />
                ))}
              </div>

              <Link href={`/projects/${project.slug}`} className="text-sm font-semibold text-purple-500 hover:underline">
                Ver detalhes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";


import { getSkillIconUrl } from "@/components/ui/tool-icons-grid/skills";
import type { Project } from "@/lib/types/project";
import { techDisplayNameMap, techIconMap } from "@/lib/iconMap";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const {thumbnail, title, shortDescription, technologies, slug} = project;

  return (
    <div className="w-full">
      <div className="p-0.5 rounded-2xl bg-purple-500 animate-gradient-xy">
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl overflow-hidden">
          <div className="w-full h-56 relative">
            <Image 
              src={thumbnail.url} 
              alt={title} 
              fill className="object-cover" 
            />
          </div>

          <div className="p-6">
            <h4 className="text-2xl font-semibold text-gray-600 dark:text-gray-400">{title}</h4>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{shortDescription}</p>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {technologies.map((t) => {
                  const iconKey = techIconMap[t.name] || t.name.toLowerCase();
                  const displayName = techDisplayNameMap[t.name] || t.name;

                  return (
                    <img
                      key={t.name}
                      src={getSkillIconUrl(iconKey)}
                      alt={displayName}
                      width={28}
                      height={28}
                      className="bg-white dark:bg-gray-900 rounded p-0.5 transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1"
                      title={displayName}
                    />
                  );
                })}
              </div>


              <Link href={`/projects/${slug}`} className="text-sm font-semibold text-purple-500 hover:underline">
                Ver detalhes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

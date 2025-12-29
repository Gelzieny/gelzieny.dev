"use client";

import Image from "next/image";
import Link from "next/link";
import { getSkillIconUrl } from "@/components/ui/tool-icons-grid/skills";
import { Project } from "@/lib/projects";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <div className="w-full">
      <div className="p-1 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500">
        <div className="bg-[#0b1220] dark:bg-gray-900 rounded-xl overflow-hidden">
          <div className="w-full h-56 relative">
            <Image src={project.thumbnail} alt={project.title} fill className="object-cover" />
          </div>

          <div className="p-6">
            <h4 className="text-2xl font-semibold text-white">{project.title}</h4>
            <p className="mt-3 text-sm text-gray-300">{project.description}</p>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {project.techs.map((t) => (
                  <img
                    key={t}
                    src={getSkillIconUrl(t)}
                    alt={t}
                    width={28}
                    height={28}
                    className="bg-white rounded p-1"
                  />
                ))}
              </div>

              <Link href={`/projects/${project.slug}`} className="text-sm text-purple-300 hover:underline">
                Ver detalhes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

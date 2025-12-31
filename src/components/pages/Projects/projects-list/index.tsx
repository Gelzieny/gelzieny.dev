"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/pages/Projects/projects-list/project-card";
import type { Project } from "@/lib/types/project";


export type ProjectsListProps = {
  projects: Project[];
};


export function ProjectsList({ projects }: ProjectsListProps){
  const [filter, setFilter] = useState<"all" | "frontend" | "backend">("all");

  const filtered = projects.filter((p) => {
    if (filter === "all") return true;
    return p.type === filter;
  });

  return (
    <section className="container ">
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full ${
            filter === "all"
              ? "bg-purple-500 text-white"
              : "border border-gray-700 text-gray-200"
          }`}
        >
          Todos
        </button>

        <button
          onClick={() => setFilter("frontend")}
          className={`px-4 py-2 rounded-full ${
            filter === "frontend"
              ? "bg-purple-500 text-white"
              : "border border-gray-700 text-gray-200"
          }`}
        >
          FrontEnd
        </button>

        <button
          onClick={() => setFilter("backend")}
          className={`px-4 py-2 rounded-full ${
            filter === "backend"
              ? "bg-purple-500 text-white"
              : "border border-gray-700 text-gray-200"
          }`}
        >
          BackEnd
        </button>
      </div>

      <div className="my-12 h-px w-full" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>

  )
}
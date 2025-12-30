"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/pages/Projects/project-card";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | "frontend" | "backend">("all");

  const filtered = projects.filter((p) => {
    if (filter === "all") return true;
    return p.type === filter;
  });

  return (
    <div className="container pt-30 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
          Projetos <span className="text-blue-400">Rocketseat</span>
        </h1>
        <p className="mt-4 text-gray-300">
          Esta página apresenta uma coleção de aplicações desenvolvidas em trilhas, eventos e desafios da
          Rocketseat, com foco em aprendizado contínuo, boas práticas de desenvolvimento e evolução constante.
        </p>
      </div>

      <div className="mt-12 flex items-center justify-center gap-3">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full ${filter === "all" ? "bg-purple-500 text-white" : "border border-gray-700 text-gray-200"}`}
        >
          Todos
        </button>
        <button
          onClick={() => setFilter("frontend")}
          className={`px-4 py-2 rounded-full ${filter === "frontend" ? "bg-purple-500 text-white" : "border border-gray-700 text-gray-200"}`}
        >
          FrontEnd
        </button>
        <button
          onClick={() => setFilter("backend")}
          className={`px-4 py-2 rounded-full ${filter === "backend" ? "bg-purple-500 text-white" : "border border-gray-700 text-gray-200"}`}
        >
          BackEnd
        </button>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}

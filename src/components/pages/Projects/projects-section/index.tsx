import Link from "next/link";
import { SectionTitle } from "@/components/ui/section-title";
import { featuredProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/pages/Projects/project-card";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <div className="container">
        <div className="flex items-center justify-between">
          <SectionTitle subtitle="projects" title="Projetos em destaque" />

          <Link href="/projects" className="text-sm text-purple-500 hover:underline">
            Ver todos os projetos
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

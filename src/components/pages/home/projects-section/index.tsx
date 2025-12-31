import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { HomeProjectCard } from "./project-card";
import { SectionTitle } from "@/components/ui/section-title";
import type { HighlightProject } from "@/lib/types/page-home";
import { HorizontalDivider } from "@/components/ui/horizontal-diver";


export type ProjectsSectionProps = {
  data: HighlightProject[]
}


export function ProjectsSection({ data }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-12">
      <div className="container">
        <div className="flex items-center justify-between">
          <SectionTitle subtitle="destaques" title="Projetos em destaque" />
        </div>

        <HorizontalDivider className="mb-10" />    
        <div className="mt-6 flex flex-col gap-8">
          {data?.map((project) => (
            <div key={project.slug}>
              <HomeProjectCard project={project} />
              <HorizontalDivider className="mb-14" />
            </div>
          ))}
        </div>        

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link href="/projects" className="inline-flex hover:text-purple-500 transition-colors duration-300 font-medium">
            Ver todos os projetos
            <ArrowRight className="ml-1 "/>
          </Link>
        </p>
      </div>
    </section>
  );
}

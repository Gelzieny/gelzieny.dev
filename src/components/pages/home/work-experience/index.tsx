import { ExperienceItem } from "./experience-item";
import { SectionTitle } from "@/components/ui/section-title";


import type { WorkExperience as WorkExperienceType } from "@/lib/types/page-home";

export type WorkExperienceProps = {
  data: WorkExperienceType[];
};


export function WorkExperience({ data }: WorkExperienceProps) {
  return (
    <section id="experiencias" className="py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <SectionTitle subtitle="experiências" title="Experiência Profissional" />
            <p className="mt-6 text-gray-600 dark:text-gray-400">
              Estou sempre aberto a novos desafios e projetos emocionantes. Vamos trabalhar juntos para criar soluções
              incríveis para sua empresa!
            </p>
          </div>

          <div className="md:col-span-8 relative">
            <div className="relative pl-8">
              <div className="absolute left-14 top-0 bottom-0 w-px bg-gray-800/30" />

              <div className="flex flex-col gap-10">
                {data.map((exp, idx) => (
                  <ExperienceItem key={`${exp.company}-${idx}`} exp={exp} idx={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
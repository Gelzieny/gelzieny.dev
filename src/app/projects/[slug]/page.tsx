import { projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export default function ProjectDetail({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="container py-16">
        <h2 className="text-2xl font-semibold">Projeto não encontrado</h2>
        <Link href="/projects" className="text-purple-500 hover:underline">
          Voltar aos projetos
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-16">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold">{project.title}</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">{project.description}</p>

          <div className="mt-6 flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-purple-500 hover:underline">
                Código no GitHub
              </a>
            )}

            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="text-purple-500 hover:underline">
                Ver projeto
              </a>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.techs.map((t) => (
              <div key={t} className="px-3 py-2 rounded-lg border">{t}</div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-1 gap-4">
            {project.images && project.images.length > 0 ? (
              project.images.map((img) => (
                <div key={img} className="w-full h-64 relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <Image src={img} alt={project.title} fill className="object-cover" />
                </div>
              ))
            ) : (
              <div className="w-full h-64 bg-gray-100 dark:bg-gray-800 rounded-lg" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

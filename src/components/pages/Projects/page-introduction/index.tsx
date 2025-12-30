import { SectionTitle } from "@/components/ui/section-title";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function PageIntroduction() {
  return (
    <section className="w-full h-[450px] lg:h-[530px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />
      <div className="flex flex-col items-center">
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à
          vontade e explore os projetos para ver como foram criados, as
          tecnologias utilizadas e as funcionalidades implementadas.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 hover:text-purple-500 transition-colors duration-300 font-medium"
        >
          <ArrowLeft size={16} />
          <span>Voltar para Home</span>
        </Link>

      </div>
    </section>
  )
}
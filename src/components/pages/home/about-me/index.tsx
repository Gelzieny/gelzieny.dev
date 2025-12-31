import Image from "next/image";
import { SectionTitle } from "@/components/ui/section-title";
import { ToolIconsGrid } from "@/components/ui/tool-icons-grid";
import type { AboutMeData } from "@/lib/types/about-me";
import { RichText } from "@/components/ui/rich-text";


type AboutMeProps = {
  data: AboutMeData
}


export function AboutMe({ data }: AboutMeProps) {
  console.log(data);
  return (
    <section id="sobre" className="container snap-start scroll-mt-20 sm:scroll-mt-24 lg:scroll-mt-28 py-12 sm:py-16">
      <SectionTitle subtitle="sobre" title="Sobre mim" />

      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-6 mt-12">
        <div className="flex justify-center lg:justify-start">
          <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[360px] lg:h-[360px] rounded-xl overflow-hidden shadow-xl bg-neutral-800/30 dark:bg-neutral-700/30">
            <Image
              src={data.profileAboutMe.url}
              alt="Foto de Perfil"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center text-center lg:text-left">
          <RichText content={data.description.raw} />

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Ferramentas que eu uso
            </h3>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {data.aboutTechnologies.map(({ name }, index) => (
                <ToolIconsGrid
                  key={name}
                  name={name}
                  index={index}
                  iconWidth={50}
                  iconHeight={50}
                  animationDelay={0.15}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

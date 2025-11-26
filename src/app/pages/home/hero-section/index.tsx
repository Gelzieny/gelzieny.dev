import { AnimatedText } from "@/components/animatedText";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen lg:min-h-[650px] flex items-center py-16 sm:py-20 lg:py-28">
      <div className="container flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

        <div className="flex-1 text-center lg:text-left">

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Hello, I'm
            </span>
          </h1>

          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-extrabold leading-tight">
            <AnimatedText />
          </h2>

          <p className="mt-5 text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            Desenvolvedora Full Stack especializada em React, Next.js, Python,  
            APIs e soluções modernas para o setor público.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm sm:text-base">
              Hire Me
            </button>

            <button className="px-6 py-3 rounded-full border border-pink-500 text-pink-500 font-semibold text-sm sm:text-base">
              Download CV
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">

          <div className="
            w-[220px] h-[220px]
            lg:w-[350px] lg:h-[350px]
            rounded-full overflow-hidden bg-neutral-800/40 flex items-center justify-center
          ">
            <Image
              src="https://avatars.githubusercontent.com/u/19843798?size=500"
              alt="Foto de Perfil"
              width={350}
              height={350}
              quality={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

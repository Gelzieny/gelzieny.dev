import { AnimatedText } from "@/components/animated-text";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="snap-start scroll-mt-20 sm:scroll-mt-24 lg:scroll-mt-28 relative w-full min-h-screen lg:min-h-[670px] flex items-center pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-28"
    >
      <div className="container flex flex-col-reverse lg:flex-row items-center justify-between gap-20">
        <div className="flex-1 text-center lg:text-left">
          <h2 className=" text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-extrabold leading-tight">
            <AnimatedText />
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Hello, I'm
            </span>
          </h1>

          <h1 className="whitespace-nowrap text-3xl sm:text-5xl md:text-6xl lg:text-[60px] font-extrabold text-gray-900 dark:text-white">
            <span>Gelzieny R. Martins</span>
          </h1>

          <p className="mt-5 text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            Desenvolvedora Full Stack especializada em React, Next.js, Python,
            APIs e soluções modernas para o setor público.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm sm:text-base hover:opacity-90 hover:shadow-lg transition-all duration-300">
              Hire Me
            </Button>

            <Button className="border border-pink-500 text-pink-500 text-sm sm:text-base hover:bg-pink-500 hover:text-white transition-all duration-300">
              Download CV
            </Button>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="w-[220px] h-[220px] lg:w-[350px] lg:h-[350px] rounded-4xl overflow-hidden bg-neutral-800/40 flex items-center justify-center">
            <Image
              src="/images/user.jpg"
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

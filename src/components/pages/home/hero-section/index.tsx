import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { RichText } from "@/components/ui/rich-text";
import { AnimatedText } from "@/components/animated-text";
import type { HeroSectionData } from "@/lib/types/hero-section";


type HeroSectionProps = {
  data: HeroSectionData
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="snap-start scroll-mt-20 sm:scroll-mt-24 lg:scroll-mt-28 relative w-full min-h-[640px] flex items-center pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-20 lg:pb-20"
    >
      <div className="container flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h2 className=" text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-tight">
            <AnimatedText functions={data.functions} />
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Hello, I'm
            </span>
          </h1>

          <h1 className="whitespace-nowrap text-2xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold text-gray-900 dark:text-white">
            <span>Gelzieny R. Martins</span>
          </h1>

          <div className="mt-4 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
            <RichText content={data.introduction.raw} />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Link href="#contato">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm sm:text-base hover:opacity-90 hover:shadow-lg transition-all duration-300">
                Entre em contato
              </Button>
            </Link>

            <a
              href="/docs/doc.pdf"
              download
              className="inline-block text-center border border-pink-500 text-pink-500 text-sm sm:text-base hover:bg-pink-500 hover:text-white transition-all duration-300 px-6 py-3 rounded-full font-semibold"
              aria-label="Download CV"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] lg:w-[320px] lg:h-[320px] rounded-3xl overflow-hidden bg-neutral-800/20 flex items-center justify-center">
            <Image
              src={data.profilePicture.url}
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

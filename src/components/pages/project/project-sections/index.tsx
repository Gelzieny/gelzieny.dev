import Image from "next/image";

type ProjectSectionsProps = {
  title?: string;
  images?: string;
};

export function ProjectSections({ title, images }: ProjectSectionsProps){
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {/* {sections.map((section) => ( */}
        <div
          key={title}
          className="flex flex-col items-center gap-6 md:gap-12"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
            {title}
          </h2>
          <Image
            width={1080}
            height={672}
            className="w-full aspect-auto rounded-lg object-cover"
            alt={`Imagem da sessão ${title}`}
            src={`${images}`}
            unoptimized
          />
        </div>
      {/* ))} */}
    </section>
  );
}
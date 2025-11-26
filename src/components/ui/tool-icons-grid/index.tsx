import Image from "next/image";

type Tool = {
  src: string;
  alt: string;
};

type ToolIconsGridProps = {
  tools: Tool[];
  size?: number; // tamanho do ícone
  animationDelay?: number; // delay entre os cards
};

export function ToolIconsGrid({
  tools,
  size = 40,
  animationDelay = 0.15,
}: ToolIconsGridProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
      {tools.map((tool, index) => (
        <div
          key={tool.alt}
          style={{ animationDelay: `${index * animationDelay}s` }}
          className="
            w-16 h-16 rounded-xl border border-gray-300 dark:border-gray-700 
            flex items-center justify-center bg-white dark:bg-gray-900
            transition-all duration-300 ease-out cursor-pointer
            hover:scale-110 hover:-translate-y-1 hover:shadow-lg
            hover:shadow-purple-400/40
            animate-fade-up
          "
        >
          <Image
            src={tool.src}
            alt={tool.alt}
            width={size}
            height={size}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}

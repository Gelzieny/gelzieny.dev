import { iconMap } from "@/lib/iconMap";
import { getSkillIconUrl } from "./skills";

type ToolIconsGridProps = {
  name: string;
  index: number;
  animationDelay?: number;
};

export function ToolIconsGrid({
  name,
  index,
  animationDelay = 0.15,
}: ToolIconsGridProps) {

  const slug = iconMap[name.toLowerCase()];

  return (
    <div
      style={{ animationDelay: `${index * animationDelay}s` }}
      className="w-16 h-16 rounded-xl border border-gray-300 dark:border-gray-700  
        flex items-center justify-center bg-white dark:bg-gray-900 
        transition-all duration-300 ease-out cursor-pointer hover:scale-110 
        hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-400/40 animate-fade-up"
    >
      <img
        src={getSkillIconUrl(slug)}
        alt={name}
        className="object-contain w-12 h-12"
      />
    </div>
  );
}

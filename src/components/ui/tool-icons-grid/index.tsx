"use client";

import { techDisplayNameMap, techIconMap } from "@/lib/iconMap";
import Image from "next/image";
import { ComponentProps } from "react";
import { getSkillIconUrl } from "./skills";

type TechBadgeProps = ComponentProps<"div"> & {
  name: string;
  index: number;
  animationDelay?: number;
};

export function ToolIconsGrid({
  name,
  index,
  animationDelay = 0.15,
  ...props
}: TechBadgeProps) {
  const iconKey = techIconMap[name] || name.toLowerCase();
  const displayName = techDisplayNameMap[name] || name;

  return (
    <div
      style={{ animationDelay: `${index * animationDelay}s` }}
      className="w-16 h-16 rounded-xl border border-gray-300 dark:border-gray-700 flex items-center justify-center bg-white dark:bg-gray-900
        transition-all duration-300 ease-out cursor-pointer hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-400/40 animate-fade-up"
    >
      <span key={name}>
        <Image
          src={getSkillIconUrl(iconKey)}
          alt={displayName}
          width={50}
          height={50}
          className="object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </span>
    </div>
  );
}

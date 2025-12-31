"use client";

import Image from "next/image";
import { ComponentProps, useEffect, useState } from "react";

import { getSkillIconUrl } from "./skills";
import { techDisplayNameMap, techIconMap } from "@/lib/iconMap";

type TechBadgeProps = ComponentProps<"div"> & {
  name: string;
  index: number;
  animationDelay?: number;
  iconWidth?: number;
  iconHeight?: number;
};

export function ToolIconsGrid({
  name,
  index,
  animationDelay = 0.15,
  iconWidth,
  iconHeight,
  ...props
}: TechBadgeProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const iconKey = techIconMap[name] || name.toLowerCase();
  const displayName = techDisplayNameMap[name] || name;

  return (
    <div
      {...props}
      style={{ animationDelay: `${index * animationDelay}s` }}
      className="
        w-16 h-16 rounded-xl border border-gray-300 dark:border-gray-700
        flex items-center justify-center
        bg-white dark:bg-gray-900
        transition-all duration-300 ease-out cursor-pointer
        hover:scale-110 hover:-translate-y-1
        hover:shadow-lg hover:shadow-purple-400/40
        animate-fade-up
      "
    >
      <Image
        src={getSkillIconUrl(iconKey)}
        alt={displayName}
        width={iconWidth}
        height={iconHeight}
        className="object-contain"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
  );
}

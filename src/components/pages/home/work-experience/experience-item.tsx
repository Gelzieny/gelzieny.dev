import { RichText } from "@/components/ui/rich-text";
import type { WorkExperience } from "@/lib/types/page-home";
import { techDisplayNameMap, techIconMap } from "@/lib/iconMap";
import { getSkillIconUrl } from "@/components/ui/tool-icons-grid/skills";


type Props = {
  exp: WorkExperience;
  idx: number;
};

export function ExperienceItem({ exp, idx }: Props) {
  return (
    <div className="relative flex gap-6">
      <div className="z-10 flex-shrink-0">
        <div 
          className=" w-14 h-14 rounded-full  flex items-center justify-center text-sm font-medium shadow-md border border-gray-700">
          <img
            src={exp.companyLogo?.url}
            alt={exp.company}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-3 ">
          <a 
            href={exp.companyUrl} 
            target="_blank" 
            className="font-semibold  text-purple-500">
            {exp.company}
          </a>
        </div>

        <h4 className="mt-1 text-lg font-medium text-gray-500 dark:text-gray-400">{exp.role}</h4>

        {exp.description && <RichText content={exp.description.raw} />}

        

        {exp.skillsTechnologies && exp.skillsTechnologies.length > 0 && (
          <div className="mt-3">
            <div className="mt-5 text-bold text-gray-500">Competência</div>

            <div className="mt-5 flex flex-wrap gap-2">
              {exp.skillsTechnologies.map((s) => {
                const iconKey = techIconMap[s.name] || s.name.toLowerCase();
                const displayName = techDisplayNameMap[s.name] || s.name;

                return (
                  <img
                    key={iconKey}
                    src={getSkillIconUrl(iconKey)}
                    alt={displayName}
                    width={28}
                    height={28}
                    style={{ animationDelay: `${idx * 0.06}s` }}
                    className="rounded p-0.5 transform transition-all duration-300 hover:scale-110 animate-fade-up"
                  />
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
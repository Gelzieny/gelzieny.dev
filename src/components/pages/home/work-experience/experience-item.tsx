import { techIconMap } from "@/lib/iconMap";
import type { Experience } from "@/lib/experiences";
import { getSkillIconUrl } from "@/components/ui/tool-icons-grid/skills";

export function ExperienceItem({ exp, idx }: { exp: Experience; idx: number }) {
  return (
    <div className="relative flex gap-6">
      <div className="z-10 flex-shrink-0">
        <div 
          className=" w-12 h-12 rounded-full  flex items-center justify-center text-sm font-medium shadow-md border border-gray-700">
          {exp.company.charAt(0)}
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-3 ">
          <a 
            href="#" 
            target="_blank" 
            className="font-semibold  text-purple-500">
            {exp.company}
          </a>
        </div>

        <h4 className="mt-1 text-lg font-medium text-gray-500 dark:text-gray-400">{exp.role}</h4>

        {exp.description && <p className="mt-2 text-sm text-gray-900 dark:text-gray-400">{exp.description}</p>}

        {exp.points && (
          <ul className="mt-3 list-disc ml-5 text-gray-600 dark:text-gray-500 text-sm space-y-1">
            {exp.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        )}

        {exp.skills && exp.skills.length > 0 && (
          <div className="mt-3">
            <div className="text-bold text-gray-400">Competência</div>

            <div className="mt-2 flex flex-wrap gap-2">
              {exp.skills.map((s) => {
                const iconKey = techIconMap[s] || s.toLowerCase();

                return (
                  <img
                    key={iconKey}
                    src={getSkillIconUrl(iconKey)}
                    alt={s}
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
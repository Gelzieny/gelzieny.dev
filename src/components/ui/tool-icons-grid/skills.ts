const DEVICON_VERSION = "v2.17.0";
const SIMPLE_ICONS_VERSION = "16.3.0";

const ICON_OVERRIDES: Record<string, string> = {
  django: `https://cdn.jsdelivr.net/npm/simple-icons@${SIMPLE_ICONS_VERSION}/icons/django.svg`,
};

export function getSkillIconUrl(slug: string): string {
  // prioridade: overrides
  if (ICON_OVERRIDES[slug]) {
    return ICON_OVERRIDES[slug];
  }

  // padrão: Devicon com versão fixa
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@${DEVICON_VERSION}/icons/${slug}/${slug}-original.svg`;
}

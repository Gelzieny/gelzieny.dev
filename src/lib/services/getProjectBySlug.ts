import { hygraphRequest } from "../hygraph";
import type { Project } from "../types/project";
import type { Locale } from "../i18n/config";
import { hygraphLocaleMap } from "../i18n/hygraph-locale-map";

type ProjectBySlugResponse = {
  project: Project | null;
};


export async function getProjectBySlug(slug: string, locale: Locale) {
  const hygraphLocale = hygraphLocaleMap[locale];

  const query = `
    query MyQuery($slug: String!) {
      project(where: { slug: $slug }, locales: [${hygraphLocale}]) {
        githubUrl
        liveProjectUrl
        pageThumbnail {
          url
        }
        thumbnail {
          url
        }
        title
        description {
          raw
        }
        sections {
          title
          image {
            url
          }
        }
        shortDescription
        technologies {
          name
        }
      }
    }
  `;

  return hygraphRequest<ProjectBySlugResponse>(query, { slug });
}

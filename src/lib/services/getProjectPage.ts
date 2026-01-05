import { hygraphRequest } from "../hygraph"
import type { ProjectsResponse } from "../types/project"
import type { Locale } from "../i18n/config"
import { hygraphLocaleMap } from "../i18n/hygraph-locale-map";


export async function getProjectPage(locale: Locale) {

  const hygraphLocale = hygraphLocaleMap[locale];

  const query = `
    query ProjectsQuery {
      projects(locales: [${hygraphLocale}]) {
        slug
        title
        shortDescription
        description {
          raw
        }
        type
        githubUrl
        liveProjectUrl
        technologies {
          name
        }
        thumbnail {
          url
        }
        pageThumbnail {
          url
        }
        sections {
          title
          image {
            url
          }
        }
      }
    }
  `

  return hygraphRequest<ProjectsResponse>(query, {}, ['projects', `projects-${locale}`])
}    
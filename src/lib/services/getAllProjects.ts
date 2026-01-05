import { hygraphRequest } from "../hygraph";
import type { ProjectsResponse } from "../types/project";

export async function getAllProjects() {
  const query = `
    query AllProjects($locales: [Locale!]!) {
      projects(locales: $locales) {
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
  `;

  return hygraphRequest<ProjectsResponse>(
    query,
    {
      locales: ["pr_BR", "en"], // enums corretos do Hygraph
    },
    ["all-projects"]
  );
}

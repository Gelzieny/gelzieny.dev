import { hygraphRequest } from "../hygraph";
import type { Project } from "../types/project";

type ProjectBySlugResponse = {
  project: Project | null;
};


export async function getProjectBySlug(slug: string) {
  const query = `
    query MyQuery($slug: String!) {
      project(where: { slug: $slug }) {
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

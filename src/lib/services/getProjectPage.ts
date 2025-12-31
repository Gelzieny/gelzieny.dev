import { hygraphRequest } from "../hygraph"
import type { ProjectsResponse } from "../types/project"


export async function getProjectPage() {
  const query = `
    query ProjectsQuery {
      projects {
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

  return hygraphRequest<ProjectsResponse>(query)
}    
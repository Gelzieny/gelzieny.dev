import { hygraphRequest } from "../hygraph"
import type { HomePageResponse } from "../types/page-home"


export async function getHomePage() {
  const query = `
    query MyQuery {
      page(where: { slug: "home" }) {
        functions {
          name
        }
        introduction {
          raw
        }
        profilePicture {
          url
        }
        aboutMe {
          profileAboutMe {
            url
          }
          description {
            html
          }
          aboutTechnologies {
            name
          }
        }
      }
    }
  `

  return hygraphRequest<HomePageResponse>(query)
}

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
            raw
          }
          aboutTechnologies {
            name
          }
        }
        socialMedias {
          name
          url
          iconSvg
        }
        highlightProjects {
          slug
          thumbnail {
            url
          }
          title
          description {
            raw
          }
          shortDescription
          technologies {
            name
          }
        } 
        workExperiences {
          company
          companyUrl
          companyLogo {
            url
          }
          role
          description {
            raw
          }
          skillsTechnologies {
            name
          }
          startDate
          endDate
          location
        }   
      }
    }
  `

  return hygraphRequest<HomePageResponse>(query)
}

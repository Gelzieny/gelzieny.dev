import { hygraphRequest } from "../hygraph"
import type { HomePageResponse } from "../types/page-home"
import type { Locale } from "../i18n/config"
import { hygraphLocaleMap } from "../i18n/hygraph-locale-map";


export async function getHomePage(locale: Locale) {
  const hygraphLocale = hygraphLocaleMap[locale];

  const query = `
    query MyQuery {
      page(where: { slug: "home" }, locales: [${hygraphLocale}]) {
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

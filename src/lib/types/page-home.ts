export type RichTextContent = {
  raw: {
    children: any[]
  }
}

export type ImageAsset = {
  url: string
}


export type HomeFunction = {
  name: string
}

export type AboutTechnology = {
  name: string
}

export type ProjectTechnology = {
  name: string
}

export type SocialMedia = {
  name: string
  url: string
  iconSvg: string
}

export type HighlightProject = {
  slug: string
  thumbnail: ImageAsset
  title: string
  description: RichTextContent
  shortDescription: string
  technologies: ProjectTechnology[]
}

export type HomeAboutMe = {
  profileAboutMe: ImageAsset
  description: RichTextContent
  aboutTechnologies: AboutTechnology[]
}

export type WorkSkillTechnology = {
  name: string
}

export type WorkExperience = {
  company: string
  companyUrl: string
  companyLogo: {
    url: string
  } | null
  role: string
  description: RichTextContent
  skillsTechnologies: { name: string }[]
  startDate: string
  endDate: string | null
  location: string
}


export type HomePage = {
  functions: HomeFunction[]
  introduction: RichTextContent
  profilePicture: ImageAsset
  aboutMe: HomeAboutMe
  socialMedias: SocialMedia[]
  highlightProjects: HighlightProject[]
  workExperiences: WorkExperience[]
}

export type HomePageResponse = {
  page: HomePage
}

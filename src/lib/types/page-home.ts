// ==============================
// Tipos auxiliares
// ==============================

export type RichTextContent = {
  raw: {
    children: any[]
  }
}

export type ImageAsset = {
  url: string
}

// ==============================
// Tipagem da Query MyQuery
// ==============================

export type HomeFunction = {
  name: string
}

export type AboutTechnology = {
  name: string
}

export type SocialMedia = {
  name: string
  url: string
  iconSvg: string
}


export type HomeAboutMe = {
  profileAboutMe: ImageAsset
  description: RichTextContent
  aboutTechnologies: AboutTechnology[]
}

export type HomePage = {
  functions: HomeFunction[]
  introduction: RichTextContent
  profilePicture: ImageAsset
  aboutMe: HomeAboutMe
  socialMedias: SocialMedia[]
}


export type HomePageResponse = {
  page: HomePage
}

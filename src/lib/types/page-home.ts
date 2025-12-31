// Tipos auxiliares
export type RichTextRaw = {
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

export type HomeIntroduction = {
  raw: any
}

export type AboutTechnology = {
  name: string
}

export type ProfileAboutMeImage = {
  url: string
}

export type HomeAboutMe = {
  profileAboutMe: ProfileAboutMeImage
  description: {
    html: string
  }
  aboutTechnologies: AboutTechnology[]
}

export type HomePage = {
  functions: HomeFunction[]
  introduction: HomeIntroduction
  profilePicture: ImageAsset
  aboutMe: HomeAboutMe
}

export type HomePageResponse = {
  page: HomePage
}

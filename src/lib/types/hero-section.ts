export type HeroFunction = {
  name: string
}

export type HeroIntroduction = {
  raw: any
}

export type HeroProfilePicture = {
  url: string
}

export type HeroSectionData = {
  functions: HeroFunction[]
  introduction: HeroIntroduction
  profilePicture: HeroProfilePicture
}

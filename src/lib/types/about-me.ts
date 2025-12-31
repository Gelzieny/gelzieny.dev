export type AboutTechnology = {
  name: string
}

export type RichTextContent = {
  raw: {
    children: any[]
  }
}

export type AboutMeData = {
  profileAboutMe: {
    url: string
  }
  description: RichTextContent
  aboutTechnologies: AboutTechnology[]
}

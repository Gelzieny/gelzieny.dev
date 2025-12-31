export type RichTextContent = {
  raw: {
    children: unknown[]
  }
}

export type ImageAsset = {
  url: string
}

export type ProjectTechnology = {
  name: string
}

export type ProjectSection = {
  title: string
  image: ImageAsset
}

export type ProjectType = "frontend" | "backend"

export type Project = {
  slug: string
  title: string
  shortDescription: string
  description: RichTextContent
  type: ProjectType
  githubUrl: string | null
  liveProjectUrl: string | null
  technologies: ProjectTechnology[]
  thumbnail: ImageAsset
  pageThumbnail: ImageAsset | null
  sections: ProjectSection[]
}

export type ProjectsResponse = {
  projects: Project[]
}

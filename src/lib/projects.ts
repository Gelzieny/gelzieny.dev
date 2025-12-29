export type ProjectType = "frontend" | "backend";

export type Project = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  images?: string[];
  techs: string[];
  type: ProjectType;
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "portfolio-site",
    title: "Portfolio Site",
    description: "Site pessoal construído com Next.js e Tailwind CSS.",
    thumbnail: "/projects/portfolio.jpg",
    images: ["/projects/portfolio-1.jpg", "/projects/portfolio-2.jpg"],
    techs: ["nextjs", "react", "tailwindcss", "typescript"],
    type: "frontend",
    github: "https://github.com/username/portfolio-site",
    live: "https://example.com",
  },
  {
    slug: "api-servicos",
    title: "API de Serviços",
    description: "API REST construída em Python com FastAPI e PostgreSQL.",
    thumbnail: "/projects/api.jpg",
    images: ["/projects/api-1.jpg"],
    techs: ["python", "fastapi", "postgresql"],
    type: "backend",
    github: "https://github.com/username/api-servicos",
  },
  {
    slug: "ecommerce-frontend",
    title: "E-commerce (Front)",
    description: "Front-end de um e-commerce usando React e Zustand.",
    thumbnail: "/projects/shop.jpg",
    images: ["/projects/shop-1.jpg"],
    techs: ["react", "zustand", "tailwindcss"],
    type: "frontend",
    github: "https://github.com/username/ecommerce-frontend",
    live: "https://shop.example.com",
  },
];

export const featuredProjects = projects.slice(0, 3);

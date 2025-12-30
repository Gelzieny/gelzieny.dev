export type Experience = {
  company: string;
  imgUrl?: string;
  location?: string;
  url?: string;
  role: string;
  period: string;
  description?: string[];
  points?: string[];
  skills: string[];
};

export const experiences: Experience[] = [
  {
    company: "Governo de Goiás",
    url: "https://www.linkedin.com/company/governo-de-goias/",
    imgUrl: "/images/sgg.png",
    role: "Especialista em Desenvolvimento de Software - Pleno",
    period: "05/02/2025",
    location: "Goiânia, Goiás, Brasil",
    description:[
      "Atuo como Desenvolvedora Full Stack no LIGO (Laboratório de Inovação em Governo), uma iniciativa da Superintendência de Dados e Inteligência Analítica (SUPADIA), vinculada à Subsecretaria de Tecnologia e Informação (STI) da Secretaria-Geral de Governo (SGG).",
      "Desenvolvo soluções tecnológicas com foco em transformação digital no setor público, integrando engenharia de software, ciência de dados e inteligência artificial. Minha atuação envolve desde a concepção até a entrega de produtos digitais inovadores, priorizando eficiência, escalabilidade e impacto social."
    ],
    points: [
      "✔️ Desenvolvimento full stack de aplicações web e APIs;",
      "✔️ Integração com bancos de dados relacionais e não relacionais;",
      "✔️ Colaboração em projetos multidisciplinares com foco em dados e IA;",
      "✔️ Adoção de metodologias ágeis (Scrum, Kanban);",
      "✔️ Participação em iniciativas de inovação aberta e intraempreendedoríssimo no setor público.",
    ],
    skills: ["Python", "Fastapi", "TailwindCss", "Angular", "Javascript", "Css", "Html", "GitLab"],
  },
  {
    company: "Vólus",
    url: "https://www.linkedin.com/company/volusbeneficios/posts/?feedView=all",
    imgUrl: "/images/volus.png",
    role: "Desenvolvedora Front-end",
    period: "fev de 2019 - set de 2024",
    location: "Rio Verde, Goiás, Brasil",
    description: [
      "Atuação no desenvolvimento e manutenção de aplicações web corporativas, com foco em integração de sistemas, APIs e soluções escaláveis."
    ],
    points: [
      "✔️ Gestão de benefícios",
      "✔️ Orçamentação eletrônica",
      "✔️ Integração com APIs externas (Paysmart, Cellcard, Celcoin, Unipix, Zenvia, Banco Arbi, Redecompras, Greenpass)",
      "✔️ Desenvolvimento e manutenção de WebServices RESTful",
      "✔️ Atuação com microsserviços utilizando Docker, Kubernetes, Git e Jenkins",
      "✔️ Criação de relatórios e procedimentos em PL/SQL com banco de dados Oracle",
      "✔️ Refatoração, documentação de código e suporte aos sistemas desenvolvidos",
      "✔️ Desenvolvimento de novas soluções utilizando Django e Python (Flask)"
    ],
    skills: [
      "Python",
      "Django",
      "Flask",
      "BancoOracle",
      "Docker",
      "Kubernetes",
      "Git",
      "Jenkins",
      "JavaScript",
      "HTML5",
      "Css"
    ],
  },

  {
    company: "SESI - Serviço Social da Indústria",
    url: "https://www.linkedin.com/company/sesi-nacional/posts/?feedView=all",
    imgUrl: "/images/sesi.png",
    role: "Estagiária",
    period: "mar de 2017 - fev de 2019 · 2 anos",
    location: "Rio Verde, Goiás, Brasil",
    description: [
      "Atuação como estagiária na área de tecnologia e suporte a sistemas, contribuindo para atividades administrativas e de apoio técnico."
    ],
    points: [
      "✔️ Apoio no suporte a sistemas internos",
      "✔️ Auxílio na organização e manutenção de dados",
      "✔️ Suporte a usuários e rotinas administrativas",
      "✔️ Apoio em demandas relacionadas à tecnologia da informação"
    ],
    skills: [],
  },

];

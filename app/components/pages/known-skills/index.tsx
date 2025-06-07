import { SkillBox } from "./skill-box";

const skillsData = [
  {
    id: 1,
    image: "skills/django.svg",
    title: "Django",
    description:
      "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
  },
  {
    id: 2,
    image: "skills/fastapi.svg",
    title: "FastAPI",
    description:
      "A modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints.",
  },
  {
    id: 3,
    image: "skills/flask.svg",
    title: "Flask",
    description:
      "A micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries.",
  },
  {
    id: 4,
    image: "skills/python.svg",
    title: "Python",
    description:
      "A high-level programming language for general-purpose programming. Python's design philosophy emphasizes code readability and a syntax that allows programmers to express concepts in fewer lines of code.",
  },
  {
    id: 5,
    image: "skills/tailwindcss.svg",
    title: "Tailwind CSS",
    description:
      "A utility-first CSS framework for rapidly building custom user interfaces.",
  },
  {
    id: 6,
    image: "skills/next.svg",
    title: "Next.js",
    description:
      "A React framework for building production-ready web applications.",
  },
];

export function KnownSkills() {
  return (
    <section className="container relative py-12 overflow-hidden flex flex-col items-center justify-center text-white px-8">
      <div
        className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28
    left-1/2 transform -translate-x-1/2"
      />

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative z-20 text-center space-y-6 sm:space-y-10"
      >
        <header>
          <h1 className="text-gray-800 dark:text-gray-200 text-3xl sm:text-4xl font-bold">
            Minha Experiência <br /> e{" "}
            <span className="text-purple-900 dark:text-purple-500">
              Habilidades
            </span>
          </h1>
          <p className="text-gray-900 dark:text-gray-200 mt-2 sm:mt-4 text-2xl sm:text-base font-sans">
            Sou desenvolvedora full stack com experiência no desenvolvimento de
            aplicações web modernas. Trabalho com tecnologias como React,
            Next.js, Tailwind CSS, Python e Django, criando interfaces
            responsivas e APIs eficientes. Tenho conhecimento em bancos de
            dados, Docker e metodologias ágeis. Gosto de escrever código limpo e
            criar soluções práticas, acessíveis e com boa performance.
          </p>
        </header>
        <section
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4"
        >
          {skillsData.map((skill) => (
            <SkillBox
              key={skill.id}
              image={skill.image}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </section>
      </div>
    </section>
  );
}

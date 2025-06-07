export function AboutSection() {
  return (
    <section
      id="about"
      className="container py-12 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex justify-center"
        >
          <img
            src="/user_sobre.jpg"
            alt="Foto de perfil da Gelzieny R. Martins"
            className="w-[320px] h-[320px] lg:w-[404px] lg:h-[404px] rounded-[10%] shadow-[0px_0px_68px_7px_rgba(75,45,187,0.4)] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </figure>

        <article
          data-aos="fade-left"
          data-aos-delay="500"
          className="text-center lg:text-left relative"
        >
          <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-40 top-10 sm:top-28 left-1/2 transform -translate-x-1/2" />

          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Sobre mim
            </h1>
          </header>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-100 mb-4">
            Desenvolvedora Full Stack apaixonada por tecnologia, com mais de 5
            anos de experiência no desenvolvimento de soluções completas — desde
            o backend eficiente até interfaces atraentes e funcionais. Tenho
            como missão liderar equipes técnicas em projetos desafiadores,
            entregando software de alta qualidade. Estou sempre aberta a
            oportunidades que me permitam inovar e crescer profissionalmente.
          </p>

          <footer>
            <button
              className="inline-flex items-center justify-center rounded-full text-sm sm:text-lg
            text-gray-800 dark:text-white border border-purple-700 dark:border-purple-400 bg-white dark:bg-gray-900
            py-2 px-6 transition-all duration-300 hover:bg-purple-700 hover:text-white
            dark:hover:bg-purple-400 dark:hover:text-gray-900 shadow-md hover:shadow-lg"
            >
              Saiba mais
            </button>
          </footer>
        </article>
      </div>
    </section>
  );
}

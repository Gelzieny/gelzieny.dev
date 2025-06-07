export function HeroSection() {
  return (
    <div
      id="home"
      className="container flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-24 md:pt-32 pt-24
      mt-14 md:mt-0 
    "
    >
      <section
        className="container flex-1 mr-28 md:text-left mt-10 md:mt-0 relative"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <header>
          <p className="text-2xl font-medium">Olá 👋, eu sou</p>
          <h1 className="text-5xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mt-3  mb-5">
            Gelzieny R. Martins
          </h1>
          <h2 className="text-xl sm:text-4xl md:text-2xl font-bold  text-gray-800 dark:text-gray-100 mb-2">
            Desenvolvedora Full-Stack
          </h2>
        </header>
        <p className="text-base sm:text-lg md:text-lg text-justify text-gray-800 dark:text-gray-100 mt-8 mb-6">
          Desenvolvedora Fullstack apaixonado por tecnologia, com mais de 5 anos
          de experiência no desenvolvimento de soluções completas, desde o
          backend eficiente até interfaces de usuário atraentes e funcionais.
          Tenho como missão liderar equipes técnicas em projetos desafiadores,
          entregando software de alta qualidade. Estou sempre aberta a novas
          oportunidades que me permitam inovar e crescer profissionalmente.
        </p>
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-14 h-14 flex items-center justify-center rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:animate-wiggle">
            <img
              src="icons/github.svg"
              alt="Ícone temporário"
              className="w-11 h-11 "
            />
          </div>
          <div className="w-14 h-14 flex items-center justify-center rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:animate-wiggle">
            <img
              src="icons/linkedin.svg"
              alt="Ícone temporário"
              className="w-11 h-11 "
            />
          </div>
          <div className="w-14 h-14 flex items-center justify-center rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:animate-wiggle">
            <img
              src="icons/instagram.svg"
              alt="Ícone temporário"
              className="w-11 h-11"
            />
          </div>
        </div>
      </section>

      <figure
        data-aos="fade-up"
        data-aos-delay="500"
        className="container flex-1 flex justify-center md:justify-end mt-0"
      >
        <img
          src="user.png"
          alt="Foto de perfil da Gelzieny R. Martins"
          className="w-[420px] h-[404px] rounded-[10%] lg:w-[404px] mb-6 lg:mb-0 shadow-[0px_0px_68px_7px_rgba(75,45,187,0.4)] object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:animate-wiggle"
        />
      </figure>
    </div>
  );
}

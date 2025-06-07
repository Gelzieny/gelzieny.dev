export function HeroSection() {
  return (
    <div
      id="home"
      className="container flex flex-col md:flex-row items-center justify-center w-full px-8 md:px-56 pb-4 md:pb-6 pt-12 md:pt-20 mt-6 md:mt-0"
    >
      <section
        className="container flex-1 mr-0 md:mr-28 md:text-left mt-10 md:mt-0 relative"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <header>
          <p className="text-2xl font-medium">Olá 👋, eu sou</p>
          <h1 className="text-5xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mt-3 mb-5">
            Gelzieny R. Martins
          </h1>
          <h2 className="text-xl sm:text-4xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            Desenvolvedora Full-Stack
          </h2>
        </header>

        <p className="text-base sm:text-lg md:text-lg text-justify text-gray-800 dark:text-gray-100 mt-8 mb-6">
          Sou apaixonada por tecnologia e desenvolvimento de software. Tenho
          experiência em aplicações web modernas, tanto no backend quanto no
          frontend, com foco em boas práticas e soluções escaláveis.
        </p>

        <div className="flex items-center space-x-4 mb-4">
          {["github", "linkedin", "instagram"].map((icon) => (
            <div
              key={icon}
              className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <img
                src={`icons/${icon}.svg`}
                alt={`Ícone ${icon}`}
                className="w-11 h-11 text-gray-800 dark:text-gray-100"
              />
            </div>
          ))}
        </div>
      </section>

      <figure
        data-aos="fade-up"
        data-aos-delay="500"
        className="flex-1 flex justify-center md:justify-end mt-0"
      >
        <img
          src="/user.png"
          alt="Foto de perfil da Gelzieny R. Martins"
          className="w-[320px] h-[320px] lg:w-[404px] lg:h-[404px] rounded-[10%] mb-2 lg:mb-0 shadow-[0px_0px_68px_7px_rgba(75,45,187,0.4)] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </figure>
    </div>
  );
}

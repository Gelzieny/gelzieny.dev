import "@/styles/sobre.css";
import { InfoSobre } from "../info";
import { ImageCsv } from "./imag_csv";

export function Sobre() {
	return (
		// <section  id="about">
		<section className="about section" id="about">
			<h2 className="section__title">Sobre</h2>
			<span className="section__subtitle">Me conheça mais</span>

			<div className="about__container container grid">
				<img src="/images/profile2.jpeg" alt="" className="about__img" />

				<div className="about__data">
					<InfoSobre />

					<p className="about__description">
						Oi! Sou desenvolvedora full stack e gosto de transformar ideias em
						soluções práticas e eficientes. Trabalho tanto no front quanto no
						back-end, sempre buscando criar aplicações completas e bem-feitas.
						<br />
						<br />
						Já atuei com tecnologias como JavaScript, TypeScript, Python,
						Node.js, Django, React, FastAPI e Docker, com foco em entregar valor
						e boa experiência para quem usa.
						<br />
						<br />
						Acredito que a melhor tecnologia é aquela que resolve problemas de
						forma simples. É isso que você vai encontrar nos meus projetos:
						dedicação, aprendizado constante e criatividade.
					</p>

					<a
						download=""
						href="/doc/curriculo.pdf"
						className="button button--flex"
					>
						Download CV
						<ImageCsv />
					</a>
				</div>
			</div>
		</section>
	);
}

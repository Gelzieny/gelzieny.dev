"use client";

import { FiAward } from "react-icons/fi";
import { useEffect, useState } from "react";
import { FaLaptopCode } from "react-icons/fa6";
import { FaRegFileCode } from "react-icons/fa";

import "@/styles/sobre.css";

export function InfoSobre() {
	const [repos, setRepos] = useState<number | null>(null);

	useEffect(() => {
		fetch("https://api.github.com/users/gelzieny")
			.then((res) => res.json())
			.then((data) => setRepos(data.public_repos))
			.catch((err) => {
				console.error("Erro ao buscar repositórios:", err);
				setRepos(null);
			});
	}, []);

	return (
		<div className="about__info grid">
			<div className="about__box">
				<FiAward className="about__icon" />
				<h3 className="about__title">Experiência</h3>
				<span className="about__subtitle">5+ anos</span>
			</div>
			<div className="about__box">
				<FaRegFileCode className="about__icon" />
				<h3 className="about__title">Projetos</h3>
				<span className="about__subtitle">
					{repos !== null ? `${repos} públicos` : "Carregando..."}
				</span>
			</div>
			<div className="about__box">
				<FaLaptopCode className="about__icon" />
				<h3 className="about__title">Tecnologias</h3>
				<span className="about__subtitle">Full Stack</span>
			</div>
		</div>
	);
}

import "@/styles/skills.css";
import { FrontEnd } from "./frontend";
import { Backend } from "./backend";

export function Skills() {
	return (
		<section className="skills section" id="skills">
			<h2 className="section__title">Skills</h2>
			<span className="section__subtitle">Meu nível técnico</span>

			<div className="skills__container container grid">
				<FrontEnd />
				<Backend />
			</div>
		</section>
	);
}

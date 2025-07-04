import { LuBadgeCheck } from "react-icons/lu";

import "@/styles/skills.css";
import { IconcSS, IconHtml } from "../icons";

const skillsFrontEnd = [
	{ name: "CSS", level: "Intermediário", icon: <IconcSS /> },
	{ name: "HTML", level: "Avançado", icon: <IconHtml /> },
];

export function FrontEnd() {
	return (
		<div className="skills__content">
			<h3 className="skill__title">Frontend developer</h3>

			<div className="skills__box">
				<div className="skills__group">
					{skillsFrontEnd.map((skill, index) => (
						<div className="skills__data" key={index}>
							<LuBadgeCheck className="bx-badge-check" />
							<div className="skills__icon">{skill.icon}</div>
							<div>
								<h3 className="skills__name">{skill.name}</h3>
								<span className="skills__level">{skill.level}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

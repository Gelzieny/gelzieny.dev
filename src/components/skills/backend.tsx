import { LuBadgeCheck } from "react-icons/lu";

import "@/styles/skills.css";
import { IconFastApi, IconFlask, IconPython } from "../icons";

const skillsBackend = [
	{ name: "Python", level: "Avançado", icon: <IconPython /> },
	{ name: "FastApi", level: "Avançado", icon: <IconFastApi /> },
	{ name: "Flask", level: "Intermediário", icon: <IconFlask /> },
];

export function Backend() {
	return (
		<div className="skills__content">
			<h3 className="skill__title">Backend Developer</h3>

			<div className="skills__box">
				<div className="skills__group">
					{skillsBackend.map((skill, index) => (
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

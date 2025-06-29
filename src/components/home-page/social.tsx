import "@/styles/home.css";

export function Social() {
	return (
		<div className="home__social">
			<a
				href="https://www.instagram.com/gelzieny/"
				className="home__social-icon"
				target="_blank"
			>
				<img
					src="/icons/instagram.svg"
					alt="Instagram"
					width="38"
					height="38"
				/>
			</a>
			<a
				href="www.linkedin.com/in/gelzieny"
				className="home__social-icon"
				target="_blank"
			>
				<img src="/icons/linkedin.svg" alt="Linkedin " width="38" height="38" />
			</a>
			<a
				href="https://github.com/Gelzieny"
				className="home__social-icon"
				target="_blank"
			>
				<img src="/icons/github.svg" alt="Github " width="38" height="38" />
			</a>
		</div>
	);
}

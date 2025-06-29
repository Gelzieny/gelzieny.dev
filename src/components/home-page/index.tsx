import "@/styles/home.css";

import { Data } from "./data";
import { Social } from "./social";
import { ScrollDown } from "../scrollDown";

export function HomePage() {
	return (
		<section className="home section" id="home">
			<div className="home__container container grid">
				<div className="home__content grid">
					<Social />

					<Data />

					<div className="home__img" />
				</div>
				<ScrollDown />
			</div>
		</section>
	);
}

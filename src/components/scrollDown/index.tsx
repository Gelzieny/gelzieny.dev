import { IoMdArrowDown } from "react-icons/io";

import "@/styles/home.css";
import { IconScrollDown } from "./icon";

export function ScrollDown() {
	return (
		<div className="home__scroll">
			<div className="well">
				<a href="#about" className="home__scroll-button button--flex">
					<IconScrollDown />
					<span className="home__scroll-name">Scroll Down</span>
					<IoMdArrowDown className="home__scroll-arrow" />
				</a>
			</div>
		</div>
	);
}

import { Sobre } from "@/components/sobre";
import { HomePage } from "@/components/home-page";
import { Skills } from "@/components/skills";

export default function Home() {
	return (
		<main className="main">
			<HomePage />
			<Sobre />
			<Skills />
		</main>
	);
}

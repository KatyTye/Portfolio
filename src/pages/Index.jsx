import RecentSection from "../components/RecentSection"
import { useOutletContext } from "react-router"
import Articles from "../components/Articles"
import Languages from "../components/Languages"

export default function Index() {
	const { language } = useOutletContext()

	return (
		<main className="main-content index">
			<Articles language={language} />

			<Languages />

			<RecentSection language={language} />

			<div className="main-content__old-portfolio">
				<a href="/old/index.html" className="main-content__old-portfolio-link" target="_blank">{
					language === "english" ? "Visit Old Portfolio Site ➚" : "Besøg Gammel Portfolio Side ➚"
				}</a>
			</div>
		</main>
	)
}
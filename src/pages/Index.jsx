import RecentSection from "../components/RecentSection"
import { useOutletContext } from "react-router"
import Articles from "../components/Articles"
import Languages from "../components/Languages"

export default function Index() {
	const { language } = useOutletContext()

	return (
		<main className="main-content index">
			<Articles language={language} page="intro" />

			<Languages />

			<RecentSection language={language} />
		</main>
	)
}
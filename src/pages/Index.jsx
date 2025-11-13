import RecentSection from "../components/RecentSection"
import { useOutletContext } from "react-router"
import Articles from "../components/Articles"

export default function Index() {
	const { language } = useOutletContext()

	return (
		<main className="main-content index">
			<Articles language={language} />
			<RecentSection language={language} />
		</main>
	)
}
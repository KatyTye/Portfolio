import { useOutletContext } from "react-router"
import NotFoundImage from "../assets/404.svg?react"

export default function Error() {
	const { language } = useOutletContext()

	return (
		<main className="main-content error">
			<NotFoundImage className="error-image" />
			{language === "english" ? (
				<>
					<p className="error-message">Page Not Found</p>
				</>) : (
				<>
					<p className="error-message">Siden Blev Ikke Fundet</p>
				</>
			)}
		</main>
	)
}
import EnFlag from "../assets/icons/en.svg?react"
import DaFlag from "../assets/icons/da.svg?react"

export default function Footer({ language, change }) {

	function changeLanguage() {
		if (language == "en") {
			change("da")
		} else {
			change("en")
		}
	}

	return (
		<footer className="bottom-content">
			<select name="version" className="bottom-content__version"
				id="version" defaultValue={""} onChange={(val) => location.pathname = val.target.value}>
				<option value="">Latest website</option>
				<option value="old/index.html">Old website</option>
			</select>

			<button className="bottom-content__language"
				onClick={() => changeLanguage()}>
				{(language == "en" &&
					<EnFlag /> || <DaFlag />
				)}
			</button>
		</footer>
	)
}
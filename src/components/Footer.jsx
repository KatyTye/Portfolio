export default function Footer({ language, change }) {

	return (
		<footer className="bottom-content">
			<select name="version" className="bottom-content__version"
				id="version" defaultValue={""} onChange={(val) => location.pathname = val.target.value}>
				<option value="">Latest website</option>
				<option value="old/index.html">Old website</option>
			</select>

			<button className="bottom-content__language"
				onClick={() => change("en")}>
			</button>
		</footer>
	)
}
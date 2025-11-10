import { useState } from "react"
import IndexJSON from "../data/index.json"

export default function Index() {
	const [language, setLanguage] = useState("english")

	return (
		<main className="main-content index">
			{IndexJSON[language].map((selected) => {

				return <article className={`${selected.article}-article`} key={`${selected.textID}-${selected.title}`}>
					<h1 className={`${selected.article}-article__title`}>{selected.title}</h1>
					<h2 className={`${selected.article}-article__subtitle`}>
						{selected.subtitle.colored && <span title={selected.subtitle.hover}
							className={`intro-article__subtitle-status ${selected.subtitle.color}`}></span>}
						{selected.subtitle.text}
					</h2>
					<p className={`${selected.article}-article__content`}>
						{selected.content["section 1"]}
						<span className="next">
							{selected.content["section 2"]}
						</span>
					</p>
				</article>
			})}
		</main>
	)
}
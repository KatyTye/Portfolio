import { BsFillMortarboardFill } from "react-icons/bs"
import IndexJSON from "../data/language.json"

export default function Articles({ language }) {

	return (
		<>
			{IndexJSON?.[language]?.map((selected) => {
				if (selected.type !== "article") return
				if (selected.textID !== 1) return

				return <article className={`content-article ${selected.article}-article`} key={`${selected.textID}-${selected.title}`}>
					<h1 className="content-article__title">
						<span className="content-article__title-text">
							{selected.title}
						</span>

						<span className="content-article__title-status">
							{(language == "english" && "Expect delayed response" || "Forvent forsinket svar")}
						</span>
					</h1>
					<h2 className="content-article__subtitle">
						<BsFillMortarboardFill className="content-article__subtitle-status" />
						{selected.subtitle.text}
					</h2>
					<p className="content-article__content">
						{selected.content["section 1"]}
						<span className="next">
							{selected.content["section 2"]}
						</span>
					</p>
				</article>
			})}
		</>
	)
}
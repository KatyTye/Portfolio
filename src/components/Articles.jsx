import LinkedinIcon from "../assets/icons/linkedin.svg?react"
import GithubIcon from "../assets/icons/github.svg?react"
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
						<span className="content-article__subtitle-text">
							<BsFillMortarboardFill className="content-article__subtitle-status" />
							{selected.subtitle.text}
						</span>
						<span className="content-article__links">
							<a href="https://github.com/KatyTye"
								target="_blank"
								rel="noopener noreferrer"
								className="content-article__links-button content-article__github"
								title="GitHub">
								<GithubIcon />
							</a>

							<a href="https://www.linkedin.com/in/david-kirk-bilsted-majholt"
								target="_blank"
								rel="noopener noreferrer"
								className="content-article__links-button content-article__linkedin"
								title="LinkedIn">
								<LinkedinIcon />
							</a>
						</span>
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
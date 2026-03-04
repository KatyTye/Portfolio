import LinkedinIcon from "../assets/icons/linkedin.svg?react"
import GithubIcon from "../assets/icons/github.svg?react"
import { BsFillMortarboardFill } from "react-icons/bs"

export default function Articles({ language, page = "" }) {

	return (
		<article className={`content-article ${page}-article`}>
			<h1 className="content-article__title">
				<span className="content-article__title-text">
					{language(`${page}.title`)}
				</span>

				{(language(`${page}.field`) != "" &&
					<span className="content-article__title-status">
						{language(`${page}.field`)}
					</span>
				)}
			</h1>
			<h2 className="content-article__subtitle">
				<span className="content-article__subtitle-text">
					<BsFillMortarboardFill className="content-article__subtitle-status" />
					{language(`${page}.subtitle.text`)}
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
				{language(`${page}.content.section1`)}
				<span className="next">
					{language(`${page}.content.section2`)}
				</span>
			</p>
		</article>
	)
}
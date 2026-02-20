import { useOutletContext } from "react-router"
import IndexJSON from "../data/language.json"

export default function Games() {
	const { language } = useOutletContext()
	const selected = IndexJSON[language][7]

	return (
		<main className="main-content games">
			<article className="content-section games-content">
				<h2 className="content-section__title">
					{selected.title}
				</h2>
				<h3 className="content-section__subtitle">
					{selected.subtitle}
				</h3>

				{
					selected.list?.forEach(sect => {
						return (
							<section className="games-content__sections">
								<figure className="games-content__sections-image-holder">
									<img src={sect.image}
										className="games-content__sections-image"
										alt="image of game" />
								</figure>
								<h4 className="games-content__sections-title">
									{sect.title}
								</h4>
								<p className="games-content__sections-text">
									{sect.desc}
								</p>
							</section>
						)
					})
				}
			</article>
		</main>
	)
}
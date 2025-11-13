import { useOutletContext } from "react-router"
import IndexJSON from "../data/language.json"

export default function About() {
	const { language } = useOutletContext()
	const selected = IndexJSON[language][2]
	const articled = IndexJSON[language][4]
	const secondselected = IndexJSON[language][3]

	return (
		<main className="main-content about">
			<article className="content-article about-article">
				<h1 className="content-article__title">{articled.title}</h1>
				<p className="content-article__content special-content">
					<span>{articled.places[0]} <span>{articled.list[0]}</span></span>
					<span className="next">{articled.places[1]} <span>{articled.list[1]}</span></span>
					<span className="next">{articled.places[2]} <span>{articled.list[2]}</span></span>
				</p>
			</article>

			<section className="content-section latest-resumes">
				<div className="content-section__content">
					<h2 className="content-section__title">{selected.title}</h2>
					<h3 className="content-section__subtitle">{selected.subtitle}</h3>
				</div>

				<div className="content-section__projects-list">
					{selected.list.map((project) => {
						return <figure className="content-section__project" key={`project-${project.title}`}>
							<img src={project.image} alt="image of project" className={project.icon && "background" || "no-background"}></img>

							<figcaption className="content-section__project-content">
								<h4 className="content-section__project-title" title={`${project.hover} ${project.title}`}>
									<a href={project.href} target="_blank"
										className="content-section__link">{project.title} &#10138;</a>
								</h4>
								<p className="content-section__project-type">
									Version: <span>{project.type}</span>
								</p>
								<p className="content-section__project-created">
									Created: <span>{project.created}</span>
								</p>
							</figcaption>
						</figure>
					})}
				</div>
			</section>

			<section className="content-section latest-portfolios">
				<div className="content-section__content">
					<h2 className="content-section__title">{secondselected.title}</h2>
					<h3 className="content-section__subtitle">{secondselected.subtitle}</h3>
				</div>

				<div className="content-section__projects-list">
					{secondselected.list.map((project) => {
						return <figure className="content-section__project" key={`project-${project.title}`}>
							<img src={project.image} alt="image of project" className={project.icon && "background" || "no-background"}></img>

							<figcaption className="content-section__project-content">
								<h4 className="content-section__project-title" title={`${project.hover} ${project.title}`}>
									<a href={project.href} target="_blank"
										className="content-section__link">{project.title} &#10138;</a>
								</h4>
								<p className="content-section__project-type">
									Version: <span>{project.type}</span>
								</p>
								<p className="content-section__project-created">
									Created: <span>{project.created}</span>
								</p>
							</figcaption>
						</figure>
					})}
				</div>
			</section>
		</main>
	)
}
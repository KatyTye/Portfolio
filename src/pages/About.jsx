import { useOutletContext } from "react-router"
import IndexJSON from "../data/index.json"

export default function About() {
	const { language } = useOutletContext()
	const selected = IndexJSON[language][2]

	return (
		<main className="main-content about">
			<section className="content-section latest-projects">
				<div className="content-section__content">
					<h2 className="content-section__title">{selected.title}</h2>
					<h3 className="content-section__subtitle">{selected.subtitle}</h3>
				</div>

				<div className="content-section__projects-list">
					{selected.list.map((project) => {
						return <figure className="content-section__project" key={`project-${project.title}`}>
							<img src={project.image} alt="image of project" className={project.icon && "background" || ""}></img>

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
import { useOutletContext } from "react-router"
import IndexJSON from "../data/language.json"

export default function Projects() {
	const { language } = useOutletContext()
	const selected = IndexJSON[language][5]
	const secondselected = IndexJSON[language][6]

	return (
		<main className="main-content projects">
			<section className="content-section react-projects">
				<h2 className="content-section__title">{selected.title}</h2>
				<h3 className="content-section__subtitle">{selected.subtitle}</h3>

				<div className="content-section__projects-list">
					{selected.projects.map((project) => {
						return <figure className="content-section__project" key={`project-${project.title}`}>
							<img src={project.image} alt="image of project" className={project.icon && "background" || "no-background"}></img>

							<figcaption className="content-section__project-content">
								<h4 className="content-section__project-title" title={`${project.hover} ${project.title}`}>
									<a href={project.href} target="_blank"
										className="content-section__link">{project.title} &#10138;</a>
								</h4>
								<div className="tags_list">
									{project.tags.map((tagName) => {
										return <p key={`project-tags-${project.title}-${tagName}`}
											className={`content-section__project-tag colored-tag ${tagName}`}>
											{tagName}</p>
									})}
								</div>
								<p className="content-section__project-created">
									<span>{project.created}</span>
								</p>
							</figcaption>
						</figure>
					})}
				</div>
			</section>

			<section className="content-section api-projects">
				<h2 className="content-section__title">{secondselected.title}</h2>
				<h3 className="content-section__subtitle">{secondselected.subtitle}</h3>

				<div className="content-section__projects-list">
					{secondselected.projects.map((project) => {
						return <figure className="content-section__project" key={`project-${project.title}`}>
							<img src={project.image} alt="image of project" className={project.icon && "background" || "no-background"}></img>

							<figcaption className="content-section__project-content">
								<h4 className="content-section__project-title" title={`${project.hover} ${project.title}`}>
									<a href={project.href} target="_blank"
										className="content-section__link">{project.title} &#10138;</a>
								</h4>
								<div className="tags_list">
									{project.tags.map((tagName) => {
										return <p key={`project-tags-${project.title}-${tagName}`}
											className={`content-section__project-tag colored-tag ${tagName}`}>
											{tagName}</p>
									})}
								</div>
								<p className="content-section__project-created">
									<span>{project.created}</span>
								</p>
							</figcaption>
						</figure>
					})}
				</div>
			</section>
		</main>
	)
}
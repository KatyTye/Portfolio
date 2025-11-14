import IndexJSON from "../data/language.json"
import { Link } from "react-router"

export default function RecentSection({ language }) {

	function ReturnTags(project) {
		return project.tags.map((tagName) => {
			return <p key={`project-tags-${project.title}-${tagName}`}
				className={`content-section__project-tag colored-tag ${tagName}`}>
				{tagName}</p>
		})
	}

	function ReturnProjects(selected) {
		return selected.projects.map((project) => {
			return <figure className="content-section__project" key={`project-${project.title}`}>
				<img src={project.image} alt="image of project" className={project.icon && "background" || ""}></img>

				<figcaption className="content-section__project-content">
					<h4 className="content-section__project-title" title={`${project.hover} ${project.title}`}>
						<a href={project.href} target="_blank"
							className="content-section__link">{project.title} &#10138;</a>
					</h4>
					<div className="content-section__project-tags">
						{ReturnTags(project)}
					</div>
					<p className="content-section__project-description">
						{project.description}
					</p>
					<p className="content-section__project-version">
						Version: <span>{project.version}</span>
					</p>
					<p className="content-section__project-created">
						Created: <span>{project.created}</span>
					</p>
				</figcaption>
			</figure>
		})
	}

	return (
		<>
			{IndexJSON[language].map((selected) => {
				if (selected.type !== "section") return
				if (selected.textID !== 2) return

				return <section className="content-section latest-projects" key={`${selected.textID}-${selected.title}`}>
					<div className="content-section__content">
						<h2 className="content-section__title">{selected.title}</h2>
						<h3 className="content-section__subtitle">{selected.subtitle}</h3>
						{selected.button.showing && <Link className="content-section__button"
							title={selected.button.title} to={selected.target}>
							{selected.button.text} &#10137;
						</Link>}
					</div>

					<div className="content-section__projects-list">
						{ReturnProjects(selected)}
					</div>
				</section>
			})}
		</>
	)
}
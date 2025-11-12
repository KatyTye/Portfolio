import { Link, useOutletContext } from "react-router"
import IndexJSON from "../data/index.json"

export default function Index() {
	const { language } = useOutletContext()

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
		<main className="main-content index">
			{IndexJSON[language].map((selected) => {
				if (selected.type !== "article") return

				return <article className={`content-article ${selected.article}-article`} key={`${selected.textID}-${selected.title}`}>
					<h1 className="content-article__title">{selected.title}</h1>
					<h2 className="content-article__subtitle">
						<span title={selected.subtitle.hover}
							className={`content-article__subtitle-status ${selected.subtitle.colored && selected.subtitle.color}`}></span>
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

			{IndexJSON[language].map((selected) => {
				if (selected.type !== "section") return

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
		</main>
	)
}
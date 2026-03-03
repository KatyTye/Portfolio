import { useOutletContext } from "react-router"

export default function Projects() {
	const { language } = useOutletContext()

	function returnTags(title, tags) {
		return tags.split(" ").map((tagName) => {
			return <p key={`project-tags-${title}-${tagName}`}
				className={`content-section__project-tag colored-tag ${tagName}`}>
				{tagName}</p>
		})
	}

	function returnSection(name) {
		const projects = [];
		const amount = language(`projects.${name}.amount`) + 1;

		for (let i = 1; i < amount; i++) {
			const hasIcon = language(`projects.${name}.items.${i}.icon`);

			projects.push(
				<figure className="content-section__project" key={`project-${name}-${language(`projects.${name}.items.${i}.title`)}`}>
					<img src={language(`projects.${name}.items.${i}.image`)} alt="image of project"
						className={hasIcon ? "background" : "no-background"}></img>

					<figcaption className="content-section__project-content">
						<h4 className="content-section__project-title"
							title={language(`projects.${name}.items.${i}.hover`)}>
							<a href={language(`projects.${name}.items.${i}.href`)} target="_blank"
								className="content-section__link">{language(`projects.${name}.items.${i}.title`)} &#10138;</a>
						</h4>
						<div className="tags_list">
							{returnTags(
								language(`projects.${name}.items.${i}.title`),
								language(`projects.${name}.items.${i}.tags`)
							)}
						</div>
						<p className="content-section__project-created">
							<span>{language(`projects.${name}.items.${i}.created`)}</span>
						</p>
					</figcaption>
				</figure>)
		}

		return projects;
	}

	return (
		<main className="main-content projects">
			<section className="content-section react-projects">
				<h2 className="content-section__title">{language(`projects.react.title`)}</h2>
				<h3 className="content-section__subtitle">{language(`projects.react.subtitle`)}</h3>

				<div className="content-section__projects-list">
					{returnSection("react")}
				</div>
			</section>

			<section className="content-section api-projects">
				<h2 className="content-section__title">{language(`projects.api.title`)}</h2>
				<h3 className="content-section__subtitle">{language(`projects.api.subtitle`)}</h3>

				<div className="content-section__projects-list">
					{returnSection("api")}
				</div>
			</section>
		</main>
	)
}
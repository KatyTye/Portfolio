import { Link } from "react-router"

export default function RecentSection({ language }) {

	function ReturnTags(title, tags) {
		return tags.split(" ").map((tagName) => {
			return <p key={`project-tags-${title}-${tagName}`}
				className={`content-section__project-tag colored-tag ${tagName}`}>
				{tagName}</p>
		})
	}

	function ReturnProjects() {
		const projects = [];
		const amount = language("projects.recent.amount");

		for (let i = 1; i < amount; i++) {
			const hasIcon = language(`projects.recent.list.${i}.icon`);

			projects.push(
				<figure className="content-section__project" key={i}>
					<img
						src={language(`projects.recent.list.${i}.image`)}
						alt="image of project"
						className={hasIcon ? "background" : ""}
					/>

					<figcaption className="content-section__project-content">
						<h4
							className="content-section__project-title"
							title={language(`projects.recent.list.${i}.hover`)}
						>
							<a
								href={language(`projects.recent.list.${i}.href`)}
								target="_blank"
								rel="noopener noreferrer"
								className="content-section__link"
							>
								{language(`projects.recent.list.${i}.title`)} &#10138;
							</a>
						</h4>

						<div className="content-section__project-tags">
							{ReturnTags(
								language(`projects.recent.list.${i}.title`),
								language(`projects.recent.list.${i}.tags`))
							}
						</div>

						<p className="content-section__project-description">
							{language(`projects.recent.list.${i}.description`)}
						</p>

						<p className="content-section__project-version">
							Version:{" "}
							<span>{language(`projects.recent.list.${i}.version`)}</span>
						</p>

						<p className="content-section__project-created">
							Created:{" "}
							<span>{language(`projects.recent.list.${i}.created`)}</span>
						</p>
					</figcaption>
				</figure>
			);
		}

		return projects;
	}

	return (
		<section className="content-section latest-projects">
			<div className="content-section__content">
				<h2 className="content-section__title">{language("projects.recent.title")}</h2>
				<h3 className="content-section__subtitle">{language("projects.recent.subtitle")}</h3>
				{language("projects.recent.button.showing") && <Link className="content-section__button"
					title={language("projects.recent.button.title")} to={language("projects.recent.button.link")}>
					{language("projects.recent.button.text")} &#10137;
				</Link>}
			</div>

			<div className="content-section__projects-list">
				{ReturnProjects()}
			</div>
		</section>
	)
}
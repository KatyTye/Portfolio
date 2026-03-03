import { useOutletContext } from "react-router"
import Articles from "../components/Articles"

export default function About() {
	const { language } = useOutletContext()

	function returnProjects(name) {
		const projects = [];
		const amount = language(`${name}.amount`);

		for (let i = 1; i < amount + 1; i++) {
			const hasIcon = language(`${name}.items.${i}.icon`);

			projects.push(
				<figure className="content-section__project" key={`project-${language(`${name}.items.${i}.title`)}`}>
					<img src={language(`${name}.items.${i}.image`)} alt="image of project"
						className={language(`${name}.items.${i}.icon`) && "background" || "no-background"}></img>

					<figcaption className="content-section__project-content">
						<h4 className="content-section__project-title" title={language(`${name}.items.${i}.hover`)}>
							<a href={language(`${name}.items.${i}.href`)} target="_blank"
								className="content-section__link">{language(`${name}.items.${i}.title`)} &#10138;</a>
						</h4>
						<p className="content-section__project-type">
							Version: <span>{language(`${name}.items.${i}.type`)}</span>
						</p>
						<p className="content-section__project-created">
							Created: <span>{language(`${name}.items.${i}.created`)}</span>
						</p>
					</figcaption>
				</figure>
			);
		}

		return projects;
	}

	return (
		<main className="main-content about">
			<Articles language={language} page="about" />

			<section className="content-section latest-resumes">
				<div className="content-section__content">
					<h2 className="content-section__title">{language("resumes.title")}</h2>
					<h3 className="content-section__subtitle">{language("resumes.subtitle")}</h3>
				</div>

				<div className="content-section__projects-items">
					{returnProjects("resumes")}
				</div>
			</section>

			<section className="content-section latest-portfolios">
				<div className="content-section__content">
					<h2 className="content-section__title">{language("portfolios.title")}</h2>
					<h3 className="content-section__subtitle">{language("portfolios.subtitle")}</h3>
				</div>

				<div className="content-section__projects-items">
					{returnProjects("portfolios")}
				</div>
			</section>
		</main>
	)
}
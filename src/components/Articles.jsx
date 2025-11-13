import IndexJSON from "../data/index.json"

export default function Articles({ language }) {

	return (
		<>
			{IndexJSON?.[language]?.map((selected) => {
				if (selected.type !== "article") return
				if (selected.textID !== 1) return

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
		</>
	)
}
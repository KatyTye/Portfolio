export default function SwitchLanguage({ sprog, func }) {
	return (
		<div className="overlay-content">
			<button onClick={() => func()}
				className="overlay-content__button overlay-content__button-language">
				{sprog === "english" ? "Change to Danish" : "Skift til engelsk"}
			</button>
		</div>
	)
}

export { SwitchLanguage };

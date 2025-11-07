import LinkedinIcon from "../assets/icons/linkedin.svg?react"
import DiscordIcon from "../assets/icons/discord.svg?react"
import GithubIcon from "../assets/icons/github.svg?react"
import MailIcon from "../assets/icons/mail.svg?react"

export default function Footer() {
	return (
		<footer className="bottom-content">
			<a href="mailto:d.boy.dragoz@gmail.com"
				target="_blank"
				rel="noopener noreferrer"
				className="bottom-content__button bottom-content__email"
				title="Email">
				<MailIcon />
			</a>

			<a href="https://github.com/KatyTye"
				target="_blank"
				rel="noopener noreferrer"
				className="bottom-content__button bottom-content__github"
				title="GitHub">
				<GithubIcon />
			</a>

			<a href="https://www.linkedin.com"
				target="_blank"
				rel="noopener noreferrer"
				className="bottom-content__button bottom-content__linkedin"
				title="LinkedIn">
				<LinkedinIcon />
			</a>

			<a href="https://discord.gg/MhtgFEYeMA"
				target="_blank"
				rel="noopener noreferrer"
				className="bottom-content__button bottom-content__discord"
				title="Discord">
				<DiscordIcon />
			</a>
		</footer>
	)
}
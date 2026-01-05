import { FaSass, FaCss3Alt, FaHtml5, FaNodeJs, FaGitAlt } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { useOutletContext } from "react-router";

export default function Languages() {
	const { language } = useOutletContext()

	return (<section className="main-content__skills">
		<h2 className="main-content__skills-title">
			{(language === "english" && "Skills"
				|| "Færdigheder")}
		</h2>

		<ul className="main-content__skills-wrapper">
			<li className="main-content__skills-holder colored-tag GIT">
				<FaGitAlt className="main-content__skills-icon" />
				<p className="main-content__skills-text">Git</p>
			</li>
			<li className="main-content__skills-holder colored-tag SASS">
				<FaSass className="main-content__skills-icon" />
				<p className="main-content__skills-text">SASS</p>
			</li>
			<li className="main-content__skills-holder colored-tag CSS">
				<FaCss3Alt className="main-content__skills-icon" />
				<p className="main-content__skills-text">CSS</p>
			</li>
			<li className="main-content__skills-holder colored-tag HTML">
				<FaHtml5 className="main-content__skills-icon" />
				<p className="main-content__skills-text">HTML</p>
			</li>
			<li className="main-content__skills-holder colored-tag NODEJS">
				<FaNodeJs className="main-content__skills-icon" />
				<p className="main-content__skills-text">Node.JS</p>
			</li>
			<li className="main-content__skills-holder colored-tag REACT">
				<IoLogoReact className="main-content__skills-icon" />
				<p className="main-content__skills-text">React</p>
			</li>
			<li className="main-content__skills-holder colored-tag JAVASCRIPT">
				<IoLogoJavascript className="main-content__skills-icon" />
				<p className="main-content__skills-text">JavaScript</p>
			</li>
			<li className="main-content__skills-holder colored-tag SKRIPT">
				<img className="main-content__skills-icon" src="./mcskript.png" alt="minecraft skripting"></img>
				<p className="main-content__skills-text">Skript Plugin</p>
			</li>

			<li className="main-content__skills-holder colored-tag LUA">
				<img className="main-content__skills-icon" src="./Lua_logo.png" alt="lua skripting"></img>
				<p className="main-content__skills-text">Roblox Lua</p>
			</li>
		</ul>
	</section>)
}
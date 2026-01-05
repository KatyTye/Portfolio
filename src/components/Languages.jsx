import { FaSass, FaCss3Alt, FaHtml5, FaNodeJs, FaGitAlt } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";

export default function Languages() {

	return (<div className="main-content__langs">
		<div className="main-content__langs-holder colored-tag GIT">
			<FaGitAlt className="main-content__langs-icon" />
			<p className="main-content__langs-text">Git</p>
		</div>
		<div className="main-content__langs-holder colored-tag SASS">
			<FaSass className="main-content__langs-icon" />
			<p className="main-content__langs-text">SASS</p>
		</div>
		<div className="main-content__langs-holder colored-tag CSS">
			<FaCss3Alt className="main-content__langs-icon" />
			<p className="main-content__langs-text">CSS</p>
		</div>
		<div className="main-content__langs-holder colored-tag HTML">
			<FaHtml5 className="main-content__langs-icon" />
			<p className="main-content__langs-text">HTML</p>
		</div>
		<div className="main-content__langs-holder colored-tag NODEJS">
			<FaNodeJs className="main-content__langs-icon" />
			<p className="main-content__langs-text">Node JS</p>
		</div>
		<div className="main-content__langs-holder colored-tag REACT">
			<IoLogoReact className="main-content__langs-icon" />
			<p className="main-content__langs-text">React</p>
		</div>
		<div className="main-content__langs-holder colored-tag JAVASCRIPT">
			<IoLogoJavascript className="main-content__langs-icon" />
			<p className="main-content__langs-text">JavaScript</p>
		</div>
		<div className="main-content__langs-holder colored-tag SKRIPT">
			<img className="main-content__langs-icon" src="./mcskript.png" alt="minecraft skripting"></img>
			<p className="main-content__langs-text">Skript Plugin</p>
		</div>

		<div className="main-content__langs-holder colored-tag LUA">
			<img className="main-content__langs-icon" src="./Lua_logo.png" alt="lua skripting"></img>
			<p className="main-content__langs-text">Roblox Lua</p>
		</div>
	</div>)
}
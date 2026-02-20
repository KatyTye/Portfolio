import { useOutletContext } from "react-router";

import GitSVG from "../assets/icons/git.svg?react";
import PhpSVG from "../assets/icons/php.svg?react";
import SassSVG from "../assets/icons/sass.svg?react";
import CssSVG from "../assets/icons/css.svg?react";
import HtmlSVG from "../assets/icons/html.svg?react";
import NodeJsSVG from "../assets/icons/nodejs.svg?react";
import ReactSVG from "../assets/icons/react.svg?react";
import ViteSVG from "../assets/icons/vite.svg?react";
import JavaScriptSVG from "../assets/icons/javascript.svg?react";
import MySqlSVG from "../assets/icons/mysql.svg?react";
import RobloxLuaSVG from "../assets/icons/lua.svg?react";

export default function Languages() {
	const { language } = useOutletContext()

	return (<section className="main-content__skills">
		<h2 className="main-content__skills-title">
			{(language === "english" && "Skills"
				|| "Færdigheder")}
		</h2>

		<ul className="main-content__skills-wrapper">
			<li className="main-content__skills-holder colored-tag GIT">
				<GitSVG className="main-content__skills-icon" />
				<p className="main-content__skills-text">Git</p>
			</li>
			<li className="main-content__skills-holder colored-tag PHP">
				<PhpSVG className="main-content__skills-icon" />
				<p className="main-content__skills-text">PHP</p>
			</li>
			<li className="main-content__skills-holder colored-tag SASS">
				<SassSVG className="main-content__skills-icon" />
				<p className="main-content__skills-text">SASS</p>
			</li>
			<li className="main-content__skills-holder colored-tag CSS">
				<CssSVG className="main-content__skills-icon" />
				<p className="main-content__skills-text">CSS</p>
			</li>
			<li className="main-content__skills-holder colored-tag HTML">
				<HtmlSVG className="main-content__skills-icon" />
				<p className="main-content__skills-text">HTML</p>
			</li>
			<li className="main-content__skills-holder colored-tag NODEJS">
				<NodeJsSVG className="main-content__skills-icon" />
				<p className="main-content__skills-text">Node.JS</p>
			</li>
			<li className="main-content__skills-holder colored-tag REACT">
				<ReactSVG className="main-content__skills-icon" />
				<p className="main-content__skills-text">React</p>
			</li>
			<li className="main-content__skills-holder colored-tag VITE">
				<ViteSVG className="main-content__skills-icon" />
				<p className="main-content__skills-text">Vite</p>
			</li>
			<li className="main-content__skills-holder colored-tag JAVASCRIPT">
				<JavaScriptSVG className="main-content__skills-icon" />
				<p className="main-content__skills-text">JavaScript</p>
			</li>
			<li className="main-content__skills-holder colored-tag MYSQL">
				<MySqlSVG className="main-content__skills-icon" />
				<p className="main-content__skills-text">MySQL</p>
			</li>
			<li className="main-content__skills-holder colored-tag SKRIPT">
				<img className="main-content__skills-icon" src="./mcskript.png" alt="minecraft skripting"></img>
				<p className="main-content__skills-text">Skript Plugin</p>
			</li>
			<li className="main-content__skills-holder colored-tag LUA">
				<RobloxLuaSVG className="main-content__skills-icon" />
				<p className="main-content__skills-text">Roblox Lua</p>
			</li>
		</ul>
	</section>)
}
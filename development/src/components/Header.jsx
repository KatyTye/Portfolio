import { useEffect } from "react"
import Logo from "../assets/icons/logo.svg?react"
import Sun from "../assets/icons/sun.svg?react"
import { Link, NavLink } from "react-router"

export default function Header() {

	useEffect(() => {
		checkDarkMode()
	}, [])

	function checkDarkMode() {
		if (localStorage.getItem("darkMode") == "enabled") {
			document.querySelector("#root").classList.add("dark")
		}
	}

	function toggleDarkMode(target) {
		const CURRENT = localStorage.getItem("darkMode") || "enabled"
		const TEMP_TARGET = target.parentElement.parentElement.parentElement
		const NEW_TARGET = (TEMP_TARGET.id == "root") ? TEMP_TARGET : TEMP_TARGET.parentElement;

		if (CURRENT == "enabled") {
			localStorage.setItem("darkMode", "disabled")
			NEW_TARGET.classList.remove("dark")
		} else {
			localStorage.setItem("darkMode", "enabled")
			NEW_TARGET.classList.add("dark")
		}
	}

	return (
		<header className="top-content">
			<Link to={"/"} className="top-content__logo">
				<Logo className={"top-content__logo-icon"} />
				<h2 className="top-content__logo-title">Davids Portfolio</h2>
			</Link>

			<nav className="top-content__navigation">
				<NavLink className="top-content__navigation-link" to={"/"}>Home</NavLink>
				<NavLink className="top-content__navigation-link" to={"/projects"}>Projects</NavLink>
				<NavLink className="top-content__navigation-link" to={"/about"}>About Me</NavLink>
			</nav>

			<figure className="top-content__mode" title="Toggle dark mode" onClick={event => toggleDarkMode(event.target)}>
				<Sun className="top-content__mode-icon" />
			</figure>
		</header>
	)
}
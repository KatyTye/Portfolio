import Logo from "../assets/icons/logo.svg?react"
import Sun from "../assets/icons/sun.svg?react"
import { Link, NavLink } from "react-router"
import { useEffect } from "react"

export default function Header() {

	useEffect(() => {
		checkDarkMode()
	}, [])

	function checkDarkMode() {
		var darkmode = localStorage.getItem("darkMode");

		if (!darkmode || window.matchMedia("(prefers-color-scheme: dark)").matches) { localStorage.setItem("darkMode", "enabled") }
		else { localStorage.setItem("darkMode", "disabled") }


		darkmode = localStorage.getItem("darkMode");

		if (darkmode === "enabled") {
			localStorage.setItem("darkMode", "enabled")
			document.querySelector("#root").classList.add("dark")
		}
	}

	function returnUpdatedTarget(oldTarget) {
		const TEMP_TARGET = oldTarget.parentElement.parentElement.parentElement

		if (TEMP_TARGET.id == "root") {
			return TEMP_TARGET

		} else if (TEMP_TARGET.className.includes("navigation")) {
			return TEMP_TARGET.parentElement.parentElement
		}

		return TEMP_TARGET.parentElement
	}

	function toggleDarkMode(target) {
		const CURRENT = localStorage.getItem("darkMode") || "enabled"
		const NEW_TARGET = returnUpdatedTarget(target)

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
			<Link to={"/"} className="top-content__logo" tabIndex={1} rel="alternate">
				<Logo className={"top-content__logo-icon"} />
				<h2 className="top-content__logo-title">Davids Portfolio</h2>
			</Link>

			<nav className="top-content__navigation">
				<NavLink className="top-content__navigation-link" tabIndex={2} to={"/"} rel="alternate">Home</NavLink>
				{/* <NavLink className="top-content__navigation-link" tabIndex={3} to={"/games"} rel="alternate">Games</NavLink> */}
				<NavLink className="top-content__navigation-link" tabIndex={4} to={"/projects"} rel="alternate">Projects</NavLink>
				<NavLink className="top-content__navigation-link" tabIndex={5} to={"/about"} rel="alternate">About Me</NavLink>
				<figure className="top-content__navigation-mode" tabIndex={6} title="Toggle dark mode" onClick={event => toggleDarkMode(event.target)}>
					<Sun className="top-content__mode-icon" />
				</figure>
			</nav>
		</header>
	)
}
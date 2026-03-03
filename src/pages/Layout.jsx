import { SwitchLanguage } from "../components/SwitchLanguage";
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router"
import { useState } from "react"

export default function Layout() {
	const [language, setLanguage] = useState("english")

	function toggleLanguage() {
		setLanguage(language === "english" ? "danish" : "english")
		localStorage.setItem("language", language === "english" ? "danish" : "english")
	}

	return (
		<>
			<Header />
			<Outlet context={{ language, setLanguage }} />
			<Footer context={{ language, setLanguage }} />
		</>
	)
}
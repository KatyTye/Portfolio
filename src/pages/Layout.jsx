import { useTranslation } from "react-i18next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router"
import { Suspense } from "react"



export default function Layout() {
	const { t, i18n } = useTranslation()
	const language = t

	function changeLanguage(lng) {
		i18n.changeLanguage(lng)
	}

	return (
		<Suspense fallback="loading">
			<Header />
			<Outlet context={{ language }} />
			<Footer language={t("type")} change={changeLanguage} />
		</Suspense>
	)
}
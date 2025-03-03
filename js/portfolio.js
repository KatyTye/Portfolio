let mainSection = document.getElementById("main-section")
let portSection = document.getElementById("port-section")
let cvSection = document.getElementById("cv-section")
let SearchString = new URL(window.location.href)
let Search = SearchString.searchParams.get("type")

if (Search == "cv") {
	cvSection.classList.remove("closed-section")
} else if (Search == "portfolio") {
	portSection.classList.remove("closed-section")
} else {
	mainSection.classList.remove("closed-section")
}
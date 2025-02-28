let DomElement = document.getElementById("kontakt-form")
let TakElement = document.getElementById("form-output")
let SearchString = new URL(window.location.href)
let Search = SearchString.searchParams.get("submitted")

if (Search == "tak") {
	DomElement.style.display = "none"
	TakElement.innerHTML = "<h1>Tak fordi du kontakter mig via kontaktformularen.</h1>"
}
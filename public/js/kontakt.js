let DomElement = document.getElementById("form-section")
let SecondDomElement = document.getElementById("kontakt-info")
let TakElement = document.getElementById("form-output")
let SearchString = new URL(window.location.href)
let Search = SearchString.searchParams.get("submitted")

if (Search == "tak") {
	DomElement.style.display = "none"
	SecondDomElement.style.display = "none"
} else {
	TakElement.remove()
}
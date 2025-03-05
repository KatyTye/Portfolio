let mainSection = document.getElementById("main-section")
let portSection = document.getElementById("port-section")
let cvSection = document.getElementById("cv-section")
let SearchString = new URL(window.location.href)
let Search = SearchString.searchParams.get("type")

if (Search) {
	if (Search == "cv") {
		let DomElement = document.querySelector(".main-cv .main-article")
		DomElement.classList.toggle("hidden-article")
		document.querySelector(".main-cv .checkout").innerHTML = "&#x22C0"
	} else if (Search == "portfolio") {
		let DomElement = document.querySelector(".main-port .main-article")
		DomElement.classList.toggle("hidden-article")
		document.querySelector(".main-port .checkout").innerHTML = "&#x22C0"
	}
}

function toggleMenu(input, cElm) {
	let DomElement = document.querySelector("." + input + " .main-article")
	let Elements = document.querySelectorAll(".article-section .main-article")

	Elements.forEach(function (elm) {
		if (elm.classList.contains("hidden-article")) {

		} else {
			if (elm != DomElement) {
				elm.classList.add("hidden-article")
			}
		}
	})

	DomElement.classList.toggle("hidden-article")

	document.querySelectorAll(".checkout").forEach(function (elm) {
		elm.innerHTML = "&#x22C1"
	})

	if (DomElement.classList.contains("hidden-article")) {
		cElm.querySelector(".checkout").innerHTML = "&#x22C1"
	} else {
		cElm.querySelector(".checkout").innerHTML = "&#x22C0"
	}
}
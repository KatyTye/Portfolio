function changePage(input) {
	window.location = input + ".html"
}

function toggleBurger() {
	let burger = document.getElementById("burger-menu")
	burger.classList.toggle("burger-show")
}
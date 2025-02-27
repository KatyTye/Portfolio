function changePage(input, extra) {
	if (extra) {
		window.location = input + ".html#" + extra
	} else {
		window.location = input + ".html"
	}
}

function toggleBurger() {
	let burger = document.getElementById("burger-menu")
	burger.classList.toggle("burger-show")
}
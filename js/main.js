function changePage(input, extra) {
	if (extra) {
		window.location = input + "?type=" + extra
	} else {
		window.location = input
	}
}

function toggleBurger() {
	let burger = document.getElementById("burger-menu")
	burger.classList.toggle("burger-show")
}
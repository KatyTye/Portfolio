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

fetch("/import/header.html")
.then(res => res.text())
.then(data => {
	document.querySelector("#header").innerHTML = data;
});

fetch("/import/footer.html")
.then(res => res.text())
.then(data => {
	document.querySelector("#footer").innerHTML = data;
});
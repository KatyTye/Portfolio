// -------------------------- SLIDER CODE --------------------------

let slideElement = document.getElementById("slider-section")
let dots = document.querySelectorAll(".dot")
let currentSlideImage = 1
let cooldown = false

// LOOP

window.setInterval(function () {
	currentSlideImage += 1
	if (currentSlideImage > 3) {
		currentSlideImage = 1
	}
	currentSlide(currentSlideImage)
}, 25000)


// FUNCTIONS


function setSlide (index) {
	if (cooldown == false) {
		cooldown = true

		currentSlide(index)

		setTimeout(() => {
			cooldown = false
		}, 2000)
	}
}

function currentSlide (index) {

	currentSlideImage = index

	dots.forEach(function (element) {

		if (element.classList.contains("slide-active")) {

			element.classList.remove("slide-active")

		}

		dots[currentSlideImage - 1].classList.add("slide-active")
	})

	slideElement.style.animation = "slide_from 0.4s"

	slideElement.style.opacity = 0

	setTimeout(() => {
		slideElement.style.backgroundImage = "url('./imgs/slide-billede-" + currentSlideImage +".jpg')"
		slideElement.style.animation = "slide_to 0.4s"
		slideElement.style.opacity = 1
	}, 800);
}
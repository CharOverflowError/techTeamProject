var welcome;

document.addEventListener("turbolinks:load", function () {
	welcome = document.getElementById("welcome");
})

function changeWelcomeText () {
	fadeOut(welcome);
	setTimeout(function () {
		switch (welcome.innerHTML) {
			case "Welcome to a programming tutorial!":
				welcome.innerHTML = "It's nice to see you here";
				break;
			case "It's nice to see you here":
				welcome.innerHTML = "Let's get started";
				break;
			case "Let's get started":
				window.location.href = "tutorials/1";
				break;
		};
		fadeIn(welcome);
	}, 500);
}

function fadeOut (element) {
	element.classList.remove("fadeIn");
	element.classList.add("fadeOut");
}

function fadeIn (element) {
	element.classList.remove("fadeOut");
	element.classList.add("fadeIn");
}
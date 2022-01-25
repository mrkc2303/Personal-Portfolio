var darkBtn = document.querySelector(".dark_mode");
var lightBtn = document.querySelector(".light_mode");

darkBtn.addEventListener("click", function() {
	lightBtn.classList.remove("hide");
	darkBtn.classList.add("hide");
});

lightBtn.addEventListener("click", function() {
	darkBtn.classList.remove("hide");
	lightBtn.classList.add("hide");
});
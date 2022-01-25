var darkBtn = document.querySelector(".dark_mode");
var lightBtn = document.querySelector(".light_mode");

darkBtn.addEventListener("click", function() {
	lightBtn.classList.remove("hide");
	darkBtn.classList.add("hide");
	// Changing the theme
	document.documentElement.setAttribute('data-theme', 'dark');
});

lightBtn.addEventListener("click", function() {
	darkBtn.classList.remove("hide");
	lightBtn.classList.add("hide");
	// Changing the theme
	document.documentElement.setAttribute('data-theme', 'light');
});

var homeBtn = document.querySelector(".home");
var aboutBtn = document.querySelector(".about");
var skillsBtn = document.querySelector(".skills");
var qualificationsBtn = document.querySelector(".qualifications");
var certificatesBtn = document.querySelector(".certificates");
var projectsBtn = document.querySelector(".projects");
var contactMeBtn = document.querySelector(".contactme");

var currSelected = homeBtn;

homeBtn.addEventListener("click", function() {
	currSelected.classList.remove("selected");
	homeBtn.classList.add("selected");
	currSelected = homeBtn;
});

aboutBtn.addEventListener("click", function() {
	currSelected.classList.remove("selected");
	aboutBtn.classList.add("selected");
	currSelected = aboutBtn;
});

skillsBtn.addEventListener("click", function() {
	currSelected.classList.remove("selected");
	skillsBtn.classList.add("selected");
	currSelected = skillsBtn;
});

qualificationsBtn.addEventListener("click", function() {
	currSelected.classList.remove("selected");
	qualificationsBtn.classList.add("selected");
	currSelected = qualificationsBtn;
});

projectsBtn.addEventListener("click", function() {
	currSelected.classList.remove("selected");
	projectsBtn.classList.add("selected");
	currSelected = projectsBtn;
});

contactMeBtn.addEventListener("click", function() {
	currSelected.classList.remove("selected");
	contactMeBtn.classList.add("selected");
	currSelected = contactMeBtn;
});
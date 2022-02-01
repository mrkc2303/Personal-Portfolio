var darkBtn = document.querySelector(".dark_mode");
var lightBtn = document.querySelector(".light_mode");

//Dark Theme Switch

darkBtn.addEventListener("click", function() {
	lightBtn.classList.remove("hide");
	darkBtn.classList.add("hide");
	// Changing the theme
	document.documentElement.setAttribute('data-theme', 'dark');
	localStorage.setItem('theme', 'dark');
});

//Light Theme Switch

lightBtn.addEventListener("click", function() {
	darkBtn.classList.remove("hide");
	lightBtn.classList.add("hide");
	// Changing the theme
	document.documentElement.setAttribute('data-theme', 'light');
	localStorage.setItem('theme', 'light');
});

// CODE STARTED FOR CHECKING PREFERENCES SAVED TO LOCAL STORAGE

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        lightBtn.classList.remove("hide");
		darkBtn.classList.add("hide");
    }
}

// CODE ENDED FOR CHECKING PREFERENCES SAVED TO LOCAL STORAGE

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

var typed = new Typed('.type', {
	strings: ['a Web Developer.', 'an Android Developer.', 'a Space Enthusiast.', 'a Speed Cuber.', 'a Gamer.'],
  	smartBackspace: true,
  	startDelay: 1000,
  	typeSpeed: 50,
  	backDelay: 1000,
  	backSpeed: 40,
  	loop: true,
  });


//SCROLL SECTIONS (TODO)

const sections = document.querySelectorAll(".section");
// console.log(sections); 

window.addEventListener("scroll", function() {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop-50;
		let sectionId = current.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector(".menu a[href*=" + sectionId + "]").classList.add("selected");

			if(scrollY <= 300) {
				document.querySelector(".back-to-top").classList.add("hide");
			} else {
				document.querySelector(".back-to-top").classList.remove("hide");
			}

			console.log(scrollY);

			if(sectionId != "home") {
				document.querySelector(".social-home").classList.add("fixed-social");
			} else {
				document.querySelector(".social-home").classList.remove("fixed-social");
			}
		} else {
			document.querySelector(".menu a[href*=" + sectionId + "]").classList.remove("selected");
		}
	});
});
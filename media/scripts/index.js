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

const homeBtn = document.querySelector(".home");
const aboutBtn = document.querySelector(".about");
const skillsBtn = document.querySelector(".skills");
const qualificationsBtn = document.querySelector(".qualifications");
const certificatesBtn = document.querySelector(".certificates");
const projectsBtn = document.querySelector(".projects");
const contactMeBtn = document.querySelector(".contactme");

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

const typed = new Typed('.type', {
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
			document.querySelector(".menu a[href*=" + sectionId + "]").classList.add("selected")

			if(sectionId != "home") {
				document.querySelector(".fixed-social").classList.add("fixed-social-show");
				document.querySelector(".back-to-top").classList.add("back-to-top-show");
			} else {
				document.querySelector(".fixed-social").classList.remove("fixed-social-show");
				document.querySelector(".back-to-top").classList.remove("back-to-top-show");
			}
		} else {
			document.querySelector(".menu a[href*=" + sectionId + "]").classList.remove("selected");
		}
	});
});

const languagesHead = document.querySelector(".languages");
const libAndFrameHead = document.querySelector(".libAndFrame");
const toolsHead = document.querySelector(".tools");
const cardHead = document.querySelectorAll(".cardHead");
const sectionContent = document.querySelectorAll(".section-content");
var flipped = [false, false, false];


cardHead[0].addEventListener("click", function() {
	if(flipped[0] == false) {
		cardHead[0].classList.add("flip");
		flipped[0] = true;
		sectionContent[0].classList.add("section-show");
		sectionContent[0].classList.remove("section-hide");
	} else {
		cardHead[0].classList.remove("flip");
		flipped[0] = false;
		sectionContent[0].classList.add("section-hide");
		sectionContent[0].classList.remove("section-show");
	}
});

cardHead[1].addEventListener("click", function() {
	if(flipped[1] == false) {
		cardHead[1].classList.add("flip");
		flipped[1] = true;
		sectionContent[1].classList.add("section-show");
		sectionContent[1].classList.remove("section-hide");
	} else {
		cardHead[1].classList.remove("flip");
		flipped[1] = false;
		sectionContent[1].classList.add("section-hide");
		sectionContent[1].classList.remove("section-show");
	}
});

cardHead[2].addEventListener("click", function() {
	if(flipped[2] == false) {
		cardHead[2].classList.add("flip");
		flipped[2] = true;
		sectionContent[2].classList.add("section-show");
		sectionContent[2].classList.remove("section-hide");
	} else {
		cardHead[2].classList.remove("flip");
		flipped[2] = false;
		sectionContent[2].classList.add("section-hide");
		sectionContent[2].classList.remove("section-show");
	}
});


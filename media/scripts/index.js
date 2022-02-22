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
const headOption = document.querySelectorAll(".head-option");

var currSelected = homeBtn;

for(var i=0; i < headOption.length; i++) {
	headOption[i].addEventListener("click", function() {
		currSelected.classList.remove("selected");
		this.classList.add("selected");
		currSelected = this;
	});
}

//SCROLL SECTIONS

const sections = Array.prototype.slice.call(document.querySelectorAll(".section"));
const footer = document.querySelector("#footer");

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


if(window.location.pathname == "/certificates.html") {
	document.querySelector(".fixed-social").classList.add("fixed-social-show");
} 

//CODE SPECIFIC FOR INDEX.HTML

const typed = new Typed('.type', {
	strings: ['a Web Developer.', 'an Android Developer.', 'a C++ Programmer.', 'a Space Enthusiast.', 'a Speed Cuber.', 'a Gamer.'],
  	smartBackspace: true,
  	startDelay: 1000,
  	typeSpeed: 50,
  	backDelay: 1000,
  	backSpeed: 40,
  	loop: true,
  });

const cardHead = document.querySelectorAll(".cardHead");

for (var i = 0; i < cardHead.length; i++) {	

	cardHead[i].addEventListener("click", function() {
		console.log(this);
		var content = this.nextElementSibling;
		if (content.style.maxHeight){
	      content.style.maxHeight = null;
	      content.style.paddingBottom = 0 + "rem";
	      this.classList.remove("flip");
	    } else {
	      content.style.maxHeight = content.scrollHeight + "px";
	      content.style.paddingBottom = 2 + "rem";
	      this.classList.add("flip");
	    } 
	});
}

const qualificationToggle = document.querySelectorAll(".toggle-qual");
const educationSection = document.getElementById("education");
const workSection = document.getElementById("work");
const achivementsSection = document.getElementById("achivements");
const publicationSection = document.getElementById("publications");
// var qualificationContent = new Array(educationSection, workSection, achivementsSection);
var qualSelector=document.querySelector(".toggle-qual");
var qualContent=educationSection;

qualificationToggle[0].addEventListener("click", function() {
	qualSelector.classList.remove("selected");
	this.classList.add("selected");
	qualSelector=this;
	qualContent.classList.add("hide");
	educationSection.classList.remove("hide");
	qualContent = educationSection;
});

qualificationToggle[1].addEventListener("click", function() {
	qualSelector.classList.remove("selected");
	this.classList.add("selected");
	qualSelector=this;
	qualContent.classList.add("hide");
	workSection.classList.remove("hide");
	qualContent = workSection;
});

qualificationToggle[2].addEventListener("click", function() {
	qualSelector.classList.remove("selected");
	this.classList.add("selected");
	qualSelector=this;
	qualContent.classList.add("hide");
	achivementsSection.classList.remove("hide");
	qualContent = achivementsSection;
});

qualificationToggle[3].addEventListener("click", function() {
	qualSelector.classList.remove("selected");
	this.classList.add("selected");
	qualSelector=this;
	qualContent.classList.add("hide");
	publicationSection.classList.remove("hide");
	qualContent = publicationSection;
});


const projectsToggle = document.querySelectorAll(".toggle-projects");
var projectSelect = projectsToggle[0];

for(var i=0; i < projectsToggle.length; i++) {
	projectsToggle[i].addEventListener("click", function() {
		projectSelect.classList.remove("selected");
		this.classList.add("selected");
		projectSelect=this;
		console.log(projectSelect);
	});
}


var numberText = document.querySelectorAll(".numbertext");
var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");

for(var i=0; i < numberText.length; i++) {
	numberText[i].innerHTML = i+1 + " / " + numberText.length;
}

document.querySelector(".prev").addEventListener("click", function() {
	plusSlides(-1);
});

document.querySelector(".next").addEventListener("click", function() {
	plusSlides(1);
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	if (n > slides.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
	    slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
	    dots[i].className = dots[i].className.replace(" active-dot", "");
	}
	slides[slideIndex-1].style.display = "flex";  
	dots[slideIndex-1].className += " active-dot";
}



const form = document.getElementById("contact-form");

async function handleSubmit(event) {
	event.preventDefault();
	var message = document.getElementById("text-message");
	var data = new FormData(event.target);
	fetch(event.target.action, {
	    method: form.method,
	    body: data,
	    headers: {
	      Accept: "application/json",
	    },
    })

    .then((response) => {
	    message.innerHTML = "Your message has been sent.";
	    document.querySelector(".msg_style").style.display = "block";
	    document.querySelector(".msg_style").style.color = "green";

	    setTimeout(function () {
	      document.querySelector(".msg_style").style.display = "none";
	    }, 4000);
	    form.reset();
    })
    .catch((error) => {
        message.innerHTML =
          "Oops! There was a problem delivering your message, please contact via other means.";
        document.querySelector(".msg_style").style.display = "block";
        document.querySelector(".msg_style").style.color = "red";

        setTimeout(function () {
          document.querySelector(".msg_style").style.display = "none";
        }, 4000);
    });
}

form.addEventListener("submit", handleSubmit);
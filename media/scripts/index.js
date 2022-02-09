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

console.log(homeBtn);

const headBtns = (this) => {
	currSelected.classList.remove("selected");
	this.classList.add("selected");
	currSelected = this;
}

// homeBtn.addEventListener("click", function() {
// 	console.log(this);
// 	currSelected.classList.remove("selected");
// 	homeBtn.classList.add("selected");
// 	currSelected = homeBtn;
// });

// aboutBtn.addEventListener("click", function() {
// 	currSelected.classList.remove("selected");
// 	aboutBtn.classList.add("selected");
// 	currSelected = aboutBtn;
// });

// skillsBtn.addEventListener("click", function() {
// 	currSelected.classList.remove("selected");
// 	skillsBtn.classList.add("selected");
// 	currSelected = skillsBtn;
// });

// qualificationsBtn.addEventListener("click", function() {
// 	currSelected.classList.remove("selected");
// 	qualificationsBtn.classList.add("selected");
// 	currSelected = qualificationsBtn;
// });

// projectsBtn.addEventListener("click", function() {
// 	currSelected.classList.remove("selected");
// 	projectsBtn.classList.add("selected");
// 	currSelected = projectsBtn;
// });

// contactMeBtn.addEventListener("click", function() {
// 	currSelected.classList.remove("selected");
// 	contactMeBtn.classList.add("selected");
// 	currSelected = contactMeBtn;
// });

const typed = new Typed('.type', {
	strings: ['a Web Developer.', 'an Android Developer.', 'a C++ Programmer.', 'a Space Enthusiast.', 'a Speed Cuber.', 'a Gamer.'],
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


const form = document.getElementById("contact-form");

async function handleSubmit(event) {
	event.preventDefault();
	var message = document.getElementById("message");
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

	    setTimeout(function () {
	      document.querySelector(".msg_style").style.display = "none";
	    }, 4000);
	    form.reset();
    })
    .catch((error) => {
        message.innerHTML =
          "Oops! There was a problem delivering your message, please contact via other means.";
        document.querySelector(".msg_style").style.display = "block";

        setTimeout(function () {
          document.querySelector(".msg_style").style.display = "none";
        }, 4000);
    });
}

form.addEventListener("submit", handleSubmit);
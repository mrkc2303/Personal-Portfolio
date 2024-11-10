var darkBtn = document.querySelectorAll(".dark_mode");
var lightBtn = document.querySelectorAll(".light_mode");

//Dark Theme Switch

for (var i = 0; i < 2; i++) {
  darkBtn[i].addEventListener("click", function () {
    lightBtn[0].classList.remove("hide");
    darkBtn[0].classList.add("hide");
    lightBtn[1].classList.remove("hide");
    darkBtn[1].classList.add("hide");
    // Changing the theme
    document.documentElement.setAttribute("data-theme", "dark");
    // localStorage.setItem('theme', 'dark');
  });

  lightBtn[i].addEventListener("click", function () {
    darkBtn[0].classList.remove("hide");
    lightBtn[0].classList.add("hide");
    darkBtn[1].classList.remove("hide");
    lightBtn[1].classList.add("hide");
    // Changing the theme
    document.documentElement.setAttribute("data-theme", "light");
    // localStorage.setItem('theme', 'light');
  });
}

// CODE STARTED FOR CHECKING PREFERENCES SAVED TO LOCAL STORAGE

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

/*
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        lightBtn.classList.remove("hide");
		darkBtn.classList.add("hide");
    }
}

*/

document.querySelector(".grid-menu-btn").addEventListener("click", function () {
  document.querySelector(".head-menu").classList.remove("hide-menu");
});

document
  .querySelector(".close-menu-btn")
  .addEventListener("click", function () {
    document.querySelector(".head-menu").classList.add("hide-menu");
  });

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

for (var i = 0; i < headOption.length; i++) {
  headOption[i].addEventListener("click", function () {
    currSelected.classList.remove("selected");
    this.classList.add("selected");
    currSelected = this;
  });
}

//SCROLL SECTIONS

const sections = Array.prototype.slice.call(
  document.querySelectorAll(".section")
);
const footer = document.querySelector("#footer");

window.addEventListener("scroll", function () {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".menu a[href*=" + sectionId + "]")
        .classList.add("selected");

      document
        .querySelector(".bottom-menu a[href*=" + sectionId + "]")
        .classList.add("selected");

      if (sectionId != "home") {
        document
          .querySelector(".fixed-social")
          .classList.add("fixed-social-show");
        document
          .querySelector(".back-to-top")
          .classList.add("back-to-top-show");
      } else {
        document
          .querySelector(".fixed-social")
          .classList.remove("fixed-social-show");
        document
          .querySelector(".back-to-top")
          .classList.remove("back-to-top-show");
      }
    } else {
      document
        .querySelector(".menu a[href*=" + sectionId + "]")
        .classList.remove("selected");

      document
        .querySelector(".bottom-menu a[href*=" + sectionId + "]")
        .classList.remove("selected");
    }
  });
});

if (window.location.pathname == "/certificates.html") {
  document.querySelector(".fixed-social").classList.add("fixed-social-show");
}

//CODE SPECIFIC FOR INDEX.HTML

const typed = new Typed(".type", {
  strings: [
    "a Software Engineer",
    "a Full-Stack Developer.",
    "a Blockchain Lover.",
    "an Android Developer.",
    "a Space Enthusiast.",
  ],
  smartBackspace: true,
  startDelay: 1000,
  typeSpeed: 50,
  backDelay: 1000,
  backSpeed: 40,
  loop: true,
});

const cardHead = document.querySelectorAll(".cardHead");

for (var i = 0; i < cardHead.length; i++) {
  cardHead[i].addEventListener("click", function () {
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
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
var qualSelector = document.querySelector(".toggle-qual");
var qualContent = educationSection;

qualificationToggle[0].addEventListener("click", function () {
  qualSelector.classList.remove("selected");
  this.classList.add("selected");
  qualSelector = this;
  qualContent.classList.add("hide");
  educationSection.classList.remove("hide");
  qualContent = educationSection;
});

qualificationToggle[1].addEventListener("click", function () {
  qualSelector.classList.remove("selected");
  this.classList.add("selected");
  qualSelector = this;
  qualContent.classList.add("hide");
  workSection.classList.remove("hide");
  qualContent = workSection;
});

qualificationToggle[2].addEventListener("click", function () {
  qualSelector.classList.remove("selected");
  this.classList.add("selected");
  qualSelector = this;
  qualContent.classList.add("hide");
  achivementsSection.classList.remove("hide");
  qualContent = achivementsSection;
});

qualificationToggle[3].addEventListener("click", function () {
  qualSelector.classList.remove("selected");
  this.classList.add("selected");
  qualSelector = this;
  qualContent.classList.add("hide");
  publicationSection.classList.remove("hide");
  qualContent = publicationSection;
});

const projectsToggle = document.querySelectorAll(".toggle-projects");
var projectSelect = projectsToggle[0];
var skip = [];

for (var i = 0; i < projectsToggle.length; i++) {
  projectsToggle[i].addEventListener("click", function () {
    projectSelect.classList.remove("selected");
    this.classList.add("selected");
    projectSelect = this;
    if (this.getAttribute("id") == "android-apps") {
      skip = [0, 1, 2, 3, 4, 5, 6, 11, 12];
      currentSlide(8);
    } else if (this.getAttribute("id") == "web-apps") {
      skip = [7, 8, 9, 10, 11, 12];
      currentSlide(1);
    } else if (this.getAttribute("id") == "electronics") {
      skip = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      currentSlide(12);
    } else {
      skip = [];
      currentSlide(1);
    }
    executeHide();
  });
}

var numberText = document.querySelectorAll(".numbertext");
var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");

const executeHide = () => {
  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove("hide-dot");
  }
  for (var i = 0; i < skip.length; i++) {
    dots[skip[i]].classList.add("hide-dot");
  }
};

for (var i = 0; i < numberText.length - skip.length; i++) {
  numberText[i].innerHTML = i + 1 + " / " + numberText.length;
}

document.querySelector(".prev").addEventListener("click", function () {
  plusSlides(-1);
});

document.querySelector(".next").addEventListener("click", function () {
  plusSlides(1);
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  if (projectSelect != projectsToggle[0]) {
    if (n + slideIndex > slides.length) {
      slideIndex = 0;
    }
    if (slideIndex + n >= 1 && slideIndex + n <= 7) {
      skip = [7, 8, 9, 10, 11, 12];
      projectSelect.classList.remove("selected");
      projectsToggle[1].classList.add("selected");
      projectSelect = projectsToggle[1];
    } else if (slideIndex + n >= 8 && slideIndex + n <= 11) {
      skip = [0, 1, 2, 3, 4, 5, 6, 11, 12];
      projectSelect.classList.remove("selected");
      projectsToggle[2].classList.add("selected");
      projectSelect = projectsToggle[2];
    } else {
      skip = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      projectSelect.classList.remove("selected");
      projectsToggle[3].classList.add("selected");
      projectSelect = projectsToggle[3];
    }
    executeHide();
  }

  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  /*for (i = 0; i < slides.length; i++) {
	    slides[i].style.display = "none";  
	}*/
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active-dot";
}

setInterval(changeimg, 5000);

var currImg = 1;
function changeimg() {
  if (currImg == 1) {
    document
      .querySelector(".echallan-img")
      .setAttribute("src", "./media/files/echallan1.jpeg");
    currImg = 2;
  } else {
    document
      .querySelector(".echallan-img")
      .setAttribute("src", "./media/files/echallan_img.jpeg");
    currImg = 1;
  }
}

const learnMore = document.querySelectorAll(".learn-more");
const info = document.querySelectorAll(".slide-info p");

for (var i = 0; i < learnMore.length; i++) {
  learnMore[i].addEventListener("click", function () {
    if (this.innerHTML == "Show Less") {
      this.nextElementSibling.style.display = "none";
      this.innerHTML = "Learn More";
    } else {
      this.nextElementSibling.style.display = "block";
      this.innerHTML = "Show Less";
    }
  });
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

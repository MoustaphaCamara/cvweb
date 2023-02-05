// --------------------- NAVBAR
let lastScroll = 0;
navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-50px";
  }
  lastScroll = window.scrollY;
});
// --------------------- Aos Library
AOS.init();
// --------------------- TYPED library
var typed = new Typed(".typed", {
  strings: [
    "-- Développeur full stack --",
    `Je suis en formation développeur web/mobile chez OnlineFormaPro. C'est un cursus fullstack, dans lequel j'ai choisi après divers projets de m'orienter sur les frameworks front-end, principalement. \n Initié à React (puis NextJs), je pratique actuellement VueJs et Nuxt, en stage chez bsOft.fr. \n`,
  ],
  typeSpeed: 15,
  backSpeed: 40,
  smartBackspace: true,
  //     loop: true,
});
// BURGER MENU NEW - modal
let burger = document.querySelector(".burger");
let nav = document.querySelector(".burger-container");

burger.addEventListener("click", () => {
  nav.style.display = "flex";
});

nav.addEventListener("click", () => {
  nav.style.display = "none";
});
// MOUSEMOVE EVENT
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");
document.addEventListener("mousemove", (e) => {
  innerCursor.style.top = e.pageY + "px";
  innerCursor.style.left = e.pageX + "px";
  outerCursor.style.top = e.pageY + "px";
  outerCursor.style.left = e.pageX + "px";
});

// DISPLAY WEBSITE LINK
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const websites = document.querySelectorAll(".company-website");
console.log(checkboxes);
checkboxes.forEach((checkbox) => {
  console.log(checkbox.nextElementSibling);
  checkbox.addEventListener("click", () => {
    if (checkbox.checked == true) {
      checkbox.nextElementSibling.style.opacity = 1;
      console.log("actif");
    } else {
      checkbox.nextElementSibling.style.opacity = 0;
      console.log("inactif");
      x;
    }
  });
});

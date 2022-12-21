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
    "Bonjour, je m'appelle Moustapha.",

    "Je suis en formation développeur web/mobile chez OnlineFormaPro. Dans le cadre de ma reconversion, j'y étudie les langages de base du développement web et m'oriente sur les frameworks front-end principalement. \n Initié à React (puis NextJs et Redux), je pratique actuellement VueJs afin de préparer mon stage chez bsOft.fr qui commencera en janvier 2023. \n Je pense par la suite étudier Symfony ou Laravel afin de compléter ma stack et être polyvalent sur les missions en entreprise.",
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

// ANCIEN: burger menu toggle

// --------------------- BURGER MENU
/*
let burger = document.querySelector(".burger");
let menu = document.querySelector(".burger-menu");
burger.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  burger.classList.toggle("burger-close");
});
menu.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  burger.classList.toggle("burger-close");
});
*/

// MOUSEMOVE EVENT

let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");
document.addEventListener("mousemove", (e) => {
  innerCursor.style.top = e.pageY + "px";
  innerCursor.style.left = e.pageX + "px";
  outerCursor.style.top = e.pageY + "px";
  outerCursor.style.left = e.pageX + "px";
});

// DISPLAY HOBBIE DESCRIPTION

// function displayDesc(categorie, bouton) {
//   document.getElementById(categorie, bouton);

//   if (categorie.style.display === "none") {
//     categorie.style.display = "block";

//     bouton.innerHTML = "Cacher";
//   } else {
//     categorie.style.display = "none";

//     bouton.innerHTML = "Lire plus...";
//   }
// }

// replaced by arrow with hover, less heavy on both mobile and desktop

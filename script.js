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

// --------------------- Appear On Scroll AOS

AOS.init();

// --------------------- TYPED

var typed = new Typed(".typed", {
  strings: [
    "Bonjour, je m'appelle Moustapha.",

    "Je suis un développeur web en formation chez nlineFormaPro. Je suis en recherche de stage en entreprise (7 semaines) afin d'acquérir de l'expérience sur les technologies front et back-end, notamment ReactJs et NodeJS. Je suis tout de même ouvert à de nouvelles technologies et serai ravi d'apprendre à les manier. Mes connaissances en HTML, CSS( & SCSS), JS et React me permettent de faire preuve de flexibilité dans mes projets et mes propositions. Je suis ouvert à toute opportunité, au plaisir de travailler avec vous.",
  ],

  typeSpeed: 20,

  backSpeed: 60,

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

// NEW TAB

function NewTab() {
  window.open("./mail.html", "Contactez-moi", "width=700, height=660");
}

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

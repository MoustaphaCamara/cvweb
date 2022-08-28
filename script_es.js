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
    "Hola, me llamo Moustapha.",
    "Soy un developer web aprendiendo, actualmente estudiando con OnlineFormaPro.",
  ],
  typeSpeed: 20,
  backSpeed: 60,
  smartBackspace: true,
});

// --------------------- BURGER MENU
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

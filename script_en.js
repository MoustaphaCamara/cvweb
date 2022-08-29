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
    "Hello, my name is Moustapha.",
    "I'm a learning web developer, actually taking courses at OnlineFormaPro. I am planning to specialize in front-end development, notably while mastering HTML, CSS, JavaScript and its frameworks, focusing on ReactJS. I will then learn how to handle back-end in order to become Full Stack and provide much more flexibility in my projects and services. Looking forward to working with you.",
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

// MOUSEMOVE EVENT

let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", (e) => {
  innerCursor.style.top = e.pageY + "px";
  innerCursor.style.left = e.pageX + "px";
  outerCursor.style.top = e.pageY + "px";
  outerCursor.style.left = e.pageX + "px";
});

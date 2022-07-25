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

// --------------------- Appear On Scroll AOS
AOS.init();

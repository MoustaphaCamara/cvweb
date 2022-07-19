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
    "Bonjour, je m'appelle Moustapha.",
    "Je suis un développeur web en formation, dans un organisme intégré suite à une période en autodidacte. Je cherche à me spécialiser dans le front-end, notamment via la maîtrise des langages HTML, CSS, JavaScript et ses frameworks, plus particulièrement React. J'apprendrai par la suite à manier le back-end afin de devenir Full Stack et pouvoir faire preuve de flexibilité dans mes projets et mes propositions. Au plaisir de travailler avec vous.",
  ],
  typeSpeed: 20,
  backSpeed: 60,
  smartBackspace: true,
  //     loop: true,
});
// --------------------- DATE OF THE DAY
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
// document.getElementById("current_date").innerHTML =
//   "En date du : " + day + "/" + month + "/" + year;

// --------------------- COMPTEUR LIVE
// let compteur = 0;
// $(window).scroll(function () {
//   const top = $(".counter").offset().top - window.innerHeight;

//   if (compteur == 0 && $(window).scrollTop() > top) {
//     $(".counter-value").each(function () {
//       let $this = $(this),
//         countTo = $this.attr("data-count");
//       $({
//         countNum: $this.text(),
//       }).animate(
//         {
//           countNum: countTo,
//         },
//         {
//           duration: 5000,
//           easing: "swing",
//           step: function () {
//             $this.text(Math.floor(this.countNum));
//           },
//           complete: function () {
//             $this.text(this.countNum);
//           },
//         }
//       );
//     });
//     compteur = 1;
//   }
// });

// --------------------- Appear On Scroll AOS
AOS.init();

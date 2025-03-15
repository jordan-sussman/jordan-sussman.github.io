/* SCROLL REVEAL ANIMATIONS */
const sr = ScrollReveal({
  distance: "30px",
  duration: 800,
  reset: false,
});

sr.reveal(".about__main", { delay: 500, origin: "bottom" });
sr.reveal(".header__container", { delay: 400, origin: "bottom" });

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

/* SCROLL REVEAL ANIMATIONS */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1400,
  reset: false,
});

sr.reveal(".header__section",{delay: 200});
sr.reveal(".about__img",{delay: 600, origin: "left"});
sr.reveal(".about__main",{delay: 400, origin: "right"});
sr.reveal(".about__subtitle",{delay: 400});
sr.reveal(".about__text",{delay: 400, origin: "right"});
sr.reveal(".home__social-icon",{interval: 100, delay: 400, distance: "30px", origin: "bottom"});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

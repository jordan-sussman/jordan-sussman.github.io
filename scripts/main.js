/* SCROLL REVEAL ANIMATIONS */
const sr = ScrollReveal({
  distance: "80px",
  duration: 800,
  reset: false,
});

sr.reveal(".about__main", { delay: 400, origin: "bottom" });
sr.reveal(".header", { delay: 500, origin: "top" });

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

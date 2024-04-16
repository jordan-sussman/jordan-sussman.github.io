/* SCROLL REVEAL ANIMATIONS */
const sr = ScrollReveal({
  distance: "100px",
  duration: 800,
  reset: false,
});

sr.reveal(".about__main", { delay: 400, origin: "bottom" });

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

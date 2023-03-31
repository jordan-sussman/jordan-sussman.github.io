/* SCROLL REVEAL ANIMATIONS */
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1500,
    reset: true,
});

sr.reveal(".header__section",{delay: 600, origin: "bottom"})
sr.reveal(".home__social-icon",{interval: 100, delay: 400, origin: "bottom"}); 
sr.reveal(".about__img",{delay: 200, origin: "left"}); 
sr.reveal(".about__subtitle",{delay: 400,}); 
sr.reveal(".about__text",{delay: 200, origin: "right"});

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    delay: 400,
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/* SCROLL HOME SOCIAL */
sr.reveal('.home__social-icon',{interval: 100}); 
/*SCROLL ABOUT*/
sr.reveal('.about__img',{delay: 400}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400});

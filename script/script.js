// NAVIGATION SLIDE MENU

function toggleMenu () {
    const navbar = document.querySelector('.navbar')
    const menuburger = document.querySelector('.burger')

    menuburger.addEventListener('click', () => {
        navbar.classList.toggle('showNav')
    }) 
};

toggleMenu();




// GSAP INIT 

gsap.registerPlugin(ScrollTrigger);

gsap.to('.card', {
    ScrollTrigger:  {
        trigger: 'trigger1',
        start: "top top",
        end: "bottom bottom",
        toggleActions: "restart pause pause reverse"
    },
    opacity: 1,
    duration: 5,
    x: 0.5,
});


gsap.to('.cardSimple', {
    yPercent: 15,
    ScrollTrigger: {
        trigger: '.cardSimple',
        start: "top -100",
        end: "bottom bottom",
        toggleActions: "restart pause pause reverse"
    },
    opacity: 1,
    duration: 2,
    x: 0.5,
})

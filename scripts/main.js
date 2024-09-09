
const menuBtn = document.getElementById('menu-btn')
const menuBtnIcon = menuBtn.querySelector('i')
const navLinks = document.getElementById('nav-link')
// close and open nav menu
menuBtn.addEventListener('click', e => {
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains('open')
    menuBtnIcon.className = isOpen ? 'ri-close-line' : 'ri-menu-line'
})
// close and open nav menu
navLinks.addEventListener('click', e =>{
    navLinks.classList.remove('open');
    menuBtnIcon.className = 'ri-menu-line'
})

const scrollRevealOption = {
    distance:"50px",
    origin:"bottom",
    duration:1000,
}

ScrollReveal().reveal('.header__image img', {
    ...scrollRevealOption,
    origin:"right",
})
ScrollReveal().reveal('.header__content h1', {
    ...scrollRevealOption,
    delay:500,
})
ScrollReveal().reveal('.header__content p', {
    ...scrollRevealOption,
    delay:1000,
})
ScrollReveal().reveal('.header__links', {
    ...scrollRevealOption,
    delay:1500,
})

ScrollReveal().reveal('.steps__card', {
    ...scrollRevealOption,
    interval:500,
})

ScrollReveal().reveal('.service__image img', {
    ...scrollRevealOption,
    origin:"left",
})
ScrollReveal().reveal('.service__content .section__subheader', {
    ...scrollRevealOption,
    delay:500,
})
ScrollReveal().reveal('.service__content .section__header', {
    ...scrollRevealOption,
    delay:1000,
})
ScrollReveal().reveal('.service__list li', {
    ...scrollRevealOption,
    delay:1500,
    interval:500,
})

ScrollReveal().reveal('.experience__card', {
    duration:1000,
    interval:500,
})
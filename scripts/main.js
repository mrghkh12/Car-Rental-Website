
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
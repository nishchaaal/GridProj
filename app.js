
const navOpen = document.querySelector('.open-nav');
const navClose = document.querySelector('.close-nav');
const nav = document.querySelector('.nav');

navOpen.addEventListener('click', () => {
    nav.classList.add('navigation-open');
});

navClose.addEventListener('click', () => { 
    nav.classList.remove('navigation-open');
});
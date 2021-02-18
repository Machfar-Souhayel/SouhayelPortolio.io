// Handling Burger menu event
const menuBtn = document.querySelector('#home > header div.burger');
const rootElement = document.querySelector('header nav');
const menuItem = document.querySelector('#home > header > nav');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuItem.classList.add('open');
        menuOpen = !menuOpen;
    } else {
        menuBtn.classList.remove('open');
        menuItem.classList.remove('open');
        menuOpen = !menuOpen;
    }
});

rootElement.addEventListener('click', () => {
    if (menuOpen === true) {
        menuBtn.classList.remove('open');
        menuItem.classList.remove('open');
        menuOpen = false;
    }
});


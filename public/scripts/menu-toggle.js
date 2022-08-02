const menuSection = document.querySelector('.menu-nav');
const menuToggle = document.querySelector('.menu-toggle');
const main = document.querySelector('main');

let show = true;

menuToggle.addEventListener('click', () => {
    document.body.style.position = show ? "fixed" : "initial";

    menuSection.classList.toggle('toggle-on', show);
    show = !show;
});
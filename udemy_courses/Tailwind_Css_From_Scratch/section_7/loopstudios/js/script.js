const menuBtn =  document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');

menuBtn.addEventListener('click', navToggle);

function navToggle() {
    menuBtn.classList.toggle('hamburger-open');
    menu.classList.toggle('-translate-y-[100%]');
    menu.classList.toggle('-translate-y-[s0%]');

}
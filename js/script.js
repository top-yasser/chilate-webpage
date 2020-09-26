'use strict';

const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelectorAll(
  '.navigation nav li:not(:first-child)'
);
console.log(navBar);
let menuExpand = false;

menuBtn.addEventListener('click', () => {
  if (!menuExpand) {
    menuBtn.classList.add('expand');
    navBar[0].classList.add('expand');
    navBar[1].classList.add('expand');
    navBar[2].classList.add('expand');
    navBar[3].classList.add('expand');
    navBar[4].classList.add('expand');
    navBar[5].classList.add('expand');
    navBar[6].classList.add('expand');

    menuExpand = true;
  } else {
    menuBtn.classList.remove('expand');
    navBar[0].classList.remove('expand');
    navBar[1].classList.remove('expand');
    navBar[2].classList.remove('expand');
    navBar[3].classList.remove('expand');
    navBar[4].classList.remove('expand');
    navBar[5].classList.remove('expand');
    navBar[6].classList.remove('expand');

    menuExpand = false;
  }
});

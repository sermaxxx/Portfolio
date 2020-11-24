$(function () {




});


var wow = new WOW(
    {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'anim', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
    }
);
wow.init();






const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const menuLinks = document.querySelectorAll('.header__link');
const grayWrapper = document.querySelector('.gray-wrapper');
const orderBtn = document.querySelector('.order__btn');

burger.addEventListener('click', showMenu);
menuLinks.forEach(link => { link.addEventListener('click', hideMenu); })
grayWrapper.addEventListener('click', hideMenu);
orderBtn.addEventListener('click', ()=> {alert('Заявка принята')})


function showMenu() {
    menu.classList.toggle('header__menu--active');
    grayWrapper.classList.toggle('gray-wrapper--active');
    burger.classList.toggle('header__burger--open');
}

function hideMenu() {
    menu.classList.remove('header__menu--active');
    grayWrapper.classList.remove('gray-wrapper--active');
    burger.classList.toggle('header__burger--open');
}
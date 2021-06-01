$(function () {

    $('.header-slider__inner').slick({
        nextArrow: '<button class="home__right"><img src="images/home-right.svg"></button>',
        prevArrow: '<button class="home__left"><img src="images/home-left.svg"></button>',
        infinite: false,
    })

    $('.works__slider').slick({
        nextArrow: '<button class="works__right"><img src="images/home-right.svg"></button>',
        prevArrow: '<button class="works__left"><img src="images/home-left.svg"></button>',
        infinite: false,
    })



    $('.faq__inner').click(function () {
        if ($(this).next().is(":hidden")) {
            $('.faq__content').slideUp('selected');
            $(this).next().slideDown('selected');
            $('.faq__inner').removeClass('faq__inner--active');
            $(this).addClass('faq__inner--active');
        } else {
            $(this).next().slideUp('selected');
            $(this).removeClass('faq__inner--active');

        };
    });



    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        sectionSelector: '.page-section',
        menu: '.header__menu',
        paddingTop: '150px',
        scrollOverflow: true,
        dragAndMove: true,
    });




    $('.header__menu--open .header__item').on('click', function () {
        $('.header__menu').removeClass('header__menu--open');
        $('.header__burger').removeClass('header__burger--open');

    })
});


let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');
let headerMenuLinks = document.querySelectorAll('.header__link')

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('header__burger--open');
    headerMenu.classList.toggle('header__menu--open')
})

headerMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        headerBurger.classList.remove('header__burger--open');
        headerMenu.classList.remove('header__menu--open')
    })
})




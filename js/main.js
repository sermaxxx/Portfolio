





$(function(){

  setTimeout(function() {
    $('select').styler();
  }, 50)

  $('.header__burger').on('click', function(){
    $('.menu ul').slideToggle();
    $(this).toggleClass('header__burger--open');
  });

  $('input[type="date"]').pickadate({
    min: true,
    
  });

  $('.advantages-transfer__input-time').timepicker({
    timeFormat: 'H:mm ',
    interval: 15,
    defaultTime: '11',
    dynamic: false,
    dropdown: true,
    scrollbar: true,
    zindex: 100,
});

});


jQuery.extend( jQuery.fn.pickadate.defaults, {
  monthsFull: [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябр', 'Октябрь', 'Ноябрь', 'Декабрь' ],
  monthsShort: [ 'янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек' ],
  weekdaysFull: [ 'воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота' ],
  weekdaysShort: [ 'вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб' ],
  today: 'Сегодня',
  clear: 'Удалить',
  close: 'Закрыть',
  firstDay: 1,
  format: 'd mmmm yyyy г.',
  formatSubmit: 'yyyy/mm/dd'
});





const swipercatalog = new Swiper('.catalog__slider', {
  lazy: true,
  navigation: {
    nextEl: ".catalog__next",
    prevEl: ".catalog__prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});



var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  //autoHeight: true, //enable auto height
  // Enable lazy loading
  preloadImages: false,
  lazy: true,
  lazy: {
    loadPrevNext: true,
  },
});


var swiper = new Swiper('.swiper-container-main', {
  autoHeight: true, //enable auto height

  //runCallbacksOnInit: true,
  observer: true,
  observeParents: true,
  observeChildren: true,
  spaceBetween: 0,

  navigation: {
    nextEl: '.flatpage__next',
    prevEl: '.flatpage__prev',
  },
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  lazy: {
    loadPrevNext: true,
  },

  keyboard: {
    enabled: true,
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  thumbs: {
    swiper: galleryThumbs
  }

});

// swiper - modal
var swiperModal = new Swiper('.swiper-container-modal', {
  observer: true,
  observeParents: true,
  observeChildren: true,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  zoom: {
    maxRatio: 2,
    toggle: true,  // enable zoom-in by double tapping slide
  },
  loop: true,
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  lazy: {
    loadPrevNext: true,
    //loadOnTransitionStart: true,
  },


  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  loop: true,


});



// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.querySelectorAll('.swiper-slide-img'); // select all swiper-slides (outside modal)
// close button
var closeBtn = document.getElementsByClassName('closeBtn')[0]; // returns an array... just get first one (only one element with this class)


modalBtn.forEach(element => { 
  element.addEventListener('click', openModal); // add an click event listener for each swiper-slide (outside the modal)
})

// Listen for close click
closeBtn.addEventListener('click', closeModal);

function openModal() {
  // prevent page scrolling when modal open: https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/
  // When the modal is shown, we want a fixed body
  document.body.style.position = 'fixed'; // prevents scrolling
  document.body.style.top = `-${window.scrollY}px`; // subtract scroll top, add to body styles

  let swiperIndexPos = swiper.activeIndex;
  swiperModal.slideTo(swiperIndexPos);
  swiperModal.lazy.load(); // need to initailize lazy load if modal opened
  modal.style.display ='block';
  swiper.keyboard.disable();
  swiperModal.keyboard.enable();
}


function closeModal() {          
  // prevent page scrolling when modal open: https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/
  // When the modal is hidden...
  const scrollY = document.body.style.top; // retrieve scroll location
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);

  let swiperModalIndexPos = swiperModal.activeIndex;
  swiper.slideTo(swiperModalIndexPos);
  modal.style.display = 'none';
  swiperModal.keyboard.disable();
  swiper.keyboard.enable();
}

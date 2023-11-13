"use strict";
document.addEventListener('DOMContentLoaded', () => {
  var swiper = new Swiper(".swiper", {
    cssMode: true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
          // when window width is >= 320px
          320: {
              slidesPerView: 1,
              spaceBetween: 0,
              slideToClickedSlide: true,
          }
      }
    });
});

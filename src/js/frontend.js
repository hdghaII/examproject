"use strict";
document.addEventListener('DOMContentLoaded', () => {
  var swiper = new Swiper(".swiper", {
    effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
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
$('.header__burger--wrapper').on('click', function() {
  if( !$('.header__burger').hasClass('active') ) {
     $('.header__burger').addClass('active');
     $('html').addClass('no-scroll');
     $('body').addClass('no-scroll')
     $('.header__menu').addClass('active');
  } else {
    $('.header__burger' ).removeClass('active');
    $('html').removeClass('no-scroll');
    $('body').removeClass('no-scroll')
    $('.header__menu').removeClass('active');
  }
});
document.addEventListener('DOMContentLoaded', function() {
  var newsletterForm = document.querySelector('.footer__newsletter--form');

  newsletterForm.addEventListener('submit', function(event) {
      var emailInput = document.querySelector('.footer__newsletter--text');
      var emailValue = emailInput.value.trim();

      if (!isValidEmail(emailValue)) {
          alert('Please enter a valid email address.');
          event.preventDefault(); // Prevent the form submission
      }
  });

  function isValidEmail(email) {
      // Use a regular expression to validate the email format
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
});
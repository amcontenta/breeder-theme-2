$(document).ready(function () {
  $('.js-hamburger').on('click', function () {
    if ($(this).hasClass('is-active')) {
      $('.js-mobile-nav-overlay').removeClass('visible');
      $('body').removeClass('overflow-hidden');
    }
    else {
      $('.js-mobile-nav-overlay').addClass('visible');
      $('body').addClass('overflow-hidden');
    }
  });

  $('.js-hamburger').on('click', function () {
    $(this).toggleClass('is-active');
  });

  ScrollReveal().reveal('.fade-in, h1, h3', {
    duration: 1500,
  });
  
  ScrollReveal().reveal('.fade-up', {
    distance: '40px',
    duration: 1500,
  });
  
  ScrollReveal().reveal('.fade-up-in', {
    distance: '20px',
    duration: 1500,
  });
  

  $('.hide-til-load').removeClass('hide-til-load');
});


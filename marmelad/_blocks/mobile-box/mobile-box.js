$('.app-header__burger').on('click', function(e) {
  e.preventDefault();

  $('html').toggleClass('is-locked');
  $('.mobile-box, .app-header__burger').toggleClass('opened');
  // $('.app-header__top-pannel.fixed').removeClass('fixed');
  // $('.app-header').css('paddingTop', '');
});

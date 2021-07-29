$('.navigation-link').on('click', function(e){
  e.preventDefault();

  var $this = $(this),
      id = $this.attr('href');

  if (!$(id).length) {
    return;
  }

  var offsetTop = $(id).offset().top;

  $('html, body').animate({
      scrollTop: offsetTop
    }, 600);
  $('.mobile-box').removeClass('opened');
});

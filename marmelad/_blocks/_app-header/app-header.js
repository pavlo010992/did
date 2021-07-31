$('.navigation-link').on('click', function(e){
  e.preventDefault();

  var $this = $(this),
      id = $this.attr('href');

  if (!$(id).length) {
    return false;
  }

  var offsetTop = $(id).offset().top +1;

  $('html').removeClass('is-locked');
  $('.mobile-box, .app-header__burger').removeClass('opened');
  $('html, body').animate({
      scrollTop: offsetTop
    }, 600);
});

$('.app-header__language-title').on('click', function(e){
  e.preventDefault();

  $(this).closest('.app-header__language').find('.app-header__language-body').slideToggle(400);
});
$('.app-header__language-item').on('click', function(e){
  var name = $(this).text(),
      parrent = $(this).closest('.app-header__language');

  parrent.find('.app-header__language-item').removeClass('active');
  parrent.find('.app-header__language-title').text(name);
  $(this).addClass('active');
  parrent.find('.app-header__language-body').slideToggle(400);
});

$('.faq-block__item-title, .faq-block__item-icon').on('click', function(e){
  e.preventDefault();

  $(this).closest('.faq-block__item').toggleClass('opened');
  if ($(this).closest('.faq-block__item').hasClass('opened')) {
    $(this).closest('.faq-block__item').find('.faq-block__item-body').slideToggle(400);
  } else {
    $(this).closest('.faq-block__item').find('.faq-block__item-body').css('display', 'none');
  }
});

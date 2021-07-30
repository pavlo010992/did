function submitForm() {
    $('.popup-form__form').on('submit', function (event) {
        event.preventDefault();
        var $this = $(this);
        var $thisInputVal = $this.find('input').val()
        if ($thisInputVal != '') {
            $this.closest('.popup-form__section').addClass('success');
            $this.closest('.popup-form').addClass('success-form').find('.popup-success').fadeIn();
            setTimeout(function () {
                $this.closest('.app').find('.remodal-overlay').css('display', 'none');
                $this.closest('.app').find('.remodal-wrapper').css('display', 'none');
                $this.closest('.popup-form__section').removeClass('success');
                $this.closest('.popup-form').removeClass('success-form').find('.popup-success').fadeOut();
                $('html').removeClass('remodal-is-locked');
                $('body').css('padding-right', 0);
            }, 3000);
        } else {
            $this.find('input').addClass('is-error');
            $this.find('.popup-form__warning').addClass('is-warning');
        }
    });
}

submitForm();
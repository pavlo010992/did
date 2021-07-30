// http://hilios.github.io/jQuery.countdown/
;(function(){
    if(!$(".site-countdown").length) {
        return;
    }
    $(".site-countdown").each(function(){
        var self = $(this);
        self.countdown(self.data('end-time'), function(event) {
            var format = ' %H:%M:%S';
            if(event.offset.totalDays == 0) {
                $(this).parent().addClass('warning');
            }
            if(event.offset.totalDays > 0) {
                format =  ' %-d ' + plural(event.offset.days, ['день', 'дня', 'дней']) + format;
            }
            // if(event.offset.weeks > 0) {
            //     format = ' %-w ' + plural(event.offset.days, ['неделя', 'недель', 'недели'])  + format;
            // }
            // $(this).html(event.strftime(format));
            var day    = (event.offset.totalDays < 10) ? '0' + event.offset.totalDays : event.offset.totalDays,
                hourts = (event.offset.hours < 10) ? '0' + event.offset.hours : event.offset.hours,
                minutes = (event.offset.minutes < 10) ? '0' + event.offset.minutes : event.offset.minutes,
                seconds = (event.offset.seconds < 10) ? '0' + event.offset.seconds : event.offset.seconds;

            $(this).find('.day > .time-body').html(day);
            $(this).find('.hourts > .time-body').html(hourts);
            $(this).find('.minutes > .time-body').html(minutes);
            $(this).find('.seconds > .time-body').html(seconds);
        })
         $(".site-countdown").on('finish.countdown', function(event) {
          $(this).html('Акция завершена!').parent().addClass('disabled');
        });
    });
    function plural(number, variants) {
        var idx = 2;
        if (number % 10 === 1 && number % 100 !== 11) {
            idx = 0;
        } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
            idx = 1;
        }
        return variants[idx];
    };
})();

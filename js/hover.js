(function ($) {
    $(document).ready(function() {
        $('.note__icon').mouseenter( function () {
            $(this).attr('src', function () {
                return $(this).attr('src').slice(0,-4) + '_red.png'
            });
        });
        $('.note__icon').mouseleave( function () {
            $(this).attr('src', function () {
                return $(this).attr('src').slice(0,-8) + '.png'
            });
        });
    });
})(jQuery);
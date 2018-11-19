(function ($) {
    $(document).ready(function() {
        $('.mobileMenu__burger').on('click', function () {
            if($('.nav').css('display') === 'none') {
                $(window).scrollTop(0);
                $('.nav').css('height', $(document).height()).addClass('nav__active');
                $('.mobileMenu__burger i').removeClass().addClass('fa fa-times');
            } else {
                $('.nav').removeClass('nav__active');
                $('.mobileMenu__burger i').removeClass().addClass('fa fa-bars');
            }
        });
    });
})(jQuery);
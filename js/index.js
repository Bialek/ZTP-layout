$(document).ready(function() {
    var counter = 0;
    var interval = null;
    function changeSlider(value) {
        var sliders = $('.header__background').toArray();
        var i;
        counter += value;
        if (counter === sliders.length) counter = 0;
        if (counter === -1) counter = sliders.length -1;
        for (i=0; i < sliders.length; i++) {
            $('.header__background').eq(i).css('opacity', '0')
        }
            $('.header__background').eq(counter).css('opacity', '1')    
    }
    function startInterval() {
        interval = setInterval(() => {changeSlider(1);
        }, 2000);
    }
    startInterval();
    $('.btn__arrow').on({
        'click': function () {
            var value;
            $.when( value = parseInt($(this).attr('value'))).then(function() {
                changeSlider(value);
              });
            clearInterval(interval);
            startInterval();
        }
    })

});


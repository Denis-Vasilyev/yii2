jQuery(document).ready(function ($) {
    // подсветка инпутов
    $('.bth__inp').on('focus', function () {
        $(this).closest('.bth__inp-block').addClass('focus');
    });

    $('.bth__inp').on('blur', function () {
        $(this).closest('.bth__inp-block').removeClass('focus');
    });

});


// пропадает placeholder при фокусе в поле
$('.auth__input, .bth__inp, .bth__ta, .filter__inp').focus(function () {
    $(this).data('placeholder', $(this).attr('placeholder'));
    $(this).attr('placeholder', '');
});
$('.auth__input, .bth__inp, .bth__ta, .club__ta, .filter__inp').blur(function () {
    $(this).attr('placeholder', $(this).data('placeholder'));
});



// табы плавающая линия
var line = function (obj) {
    var w = obj.width();
    var p = obj.position().left;
    var el = $('.line');
    $('.tab').removeClass('active');
    obj.addClass('active');
    el.clearQueue().animate({
        left: p,
        width: w
    }, 300);
};
var _hashState = function(_hash) {
    if(history.pushState) {
        history.pushState(null, null, _hash);
    }
    else {
        location.hash = _hash;
    }
};
if(!window.location.hash)
    $('.tab.active').first().click();
else
    $(window.location.hash).click();
$(window).bind('hashchange',function(){
    $(window.location.hash).click();
});

$('.js-rate-block-toggle').on("click", function () {
    $('#RateBlock').toggle();
    $('#nullRateBlock').toggle();
});

jQuery(document).ready(function ($) {


    $(function () {
        $('.rewiews-pp-open').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });

        $(document).on('click', '.reviews-pp-close', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });

});
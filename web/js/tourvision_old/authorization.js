
jQuery(document).ready(function($){
    $('#authorization').click(function () {
        line($(this));
        _hashState('#authorization');
        $('#authorizationPanel').show();
        $('#regustrationPanel').hide();
        $('#forgotPassPanel').hide();
    });

    $('#regustration').click(function () {
        line($(this));
        _hashState('#regustration');
        $('#authorizationPanel').hide();
        $('#regustrationPanel').show();
        $('#forgotPassPanel').hide();
    });

    $('#forgotPass').click(function () {
        line($(this));
        _hashState('#forgotPass');
        $('#authorizationPanel').hide();
        $('#regustrationPanel').hide();
        $('#forgotPassPanel').show();
    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.auth-line');
        $('.auth-tab').removeClass('active');
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
        $('.auth-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange',function(){
        $(window.location.hash).click();
    });

    $('.js-input-label').on('focus', function () {
        $(this).addClass('focus');
        $(this).next('.auth-form__label').addClass('active');
    });

    $('.js-input-label').on('blur', function () {
        if ($(this).val().trim() === '') {
            $(this).next('.auth-form__label').removeClass('active');
        }
        $(this).removeClass('focus');
    });

    $('.js-open-eye').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.js-validate').on('click', function () {
        if ($('input[id=email]').val().trim() === '') {
            $('#emuMessage').show();
            $('input[id=email]').addClass('error');
        }
        if ($('input[id=pwd]').val().trim() === '') {
            $('#epMessage').show();
            $('input[id=pwd]').addClass('error');
        }

    });

    $('.js-auth-form__input').on('change', function () {
        $('.js-auth-form__input').each(function () {
            if ($(this).val().length) {
                $(this).next('.auth-form__label').addClass('active');
            }
        });
    });

    $('.js-auth-form__input').change();

});


jQuery(window).load(function ($) {
    $('.js-auth-form__input').each(function () {
        if ($(this).val().length) {
            $(this).next('.auth-form__label').addClass('active');
        }
    });
});

jQuery(document).ready(function($){


});

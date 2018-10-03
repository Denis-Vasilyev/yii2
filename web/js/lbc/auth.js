$(document).ready(function () {

    $('#authorization').click(function () {
        line($(this));
        _hashState('#authorization');
        $('#authorizationPanel').show();
        $('#registrationPanel').hide();
        $('#remindPassPanel').hide();
        $('#reqLastPanel').hide();
    });

    $('#registration').click(function () {
        line($(this));
        _hashState('#registration');
        $('#authorizationPanel').hide();
        $('#registrationPanel').show();
        $('#remindPassPanel').hide();
        $('#reqLastPanel').hide();
    });

    $('#remindPass').click(function () {
        line($(this));
        _hashState('#remindPass');
        $('#authorizationPanel').hide();
        $('#registrationPanel').hide();
        $('#remindPassPanel').show();
        $('#reqLastPanel').hide();
    });

    $('#reqLast').click(function () {
        line($(this));
        _hashState('#reqLast');
        $('#authorizationPanel').hide();
        $('#registrationPanel').hide();
        $('#remindPassPanel').hide();
        $('#reqLastPanel').show();
    });

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

    var _hashState = function (_hash) {
        if (history.pushState) {
            history.pushState(null, null, _hash);
        }
        else {
            location.hash = _hash;
        }
    };

    if (!window.location.hash)
        $('.tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange', function () {
        $(window.location.hash).click();
    });


    $('.js-input-label').on('focus', function () {
        $(this).addClass('focus');
        $(this).next('.auth__label').addClass('active');
    });

    $('.js-input-label').on('blur', function () {
        if ($(this).val().trim() === '') {
            $(this).next('.auth__label').removeClass('active');
        }
        $(this).removeClass('focus');
    });

    $('#js-open-eye').on('click', function () {
        $(this).toggleClass('active');
    });


    $('.js-auth-form__input').on('change', function () {
        $('.js-auth-form__input').each(function () {
            if ($(this).val().length) {
                $(this).next('.auth-form__label').addClass('active');
            }
        });
    });

    $('.js-auth-form__input').change();


    $('.js-open-eye').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.jsPassStep2').on('click', function () {
        $(this).closest('.pass-step1').hide();
        $(this).closest('.pass-step1').next('.pass-step2').show();
    });

    $('.js-label').on('focus', function () {
        $(this).next('.bth__inp-lbl').addClass('active');
    });

    $('.js-label').on('blur', function () {
        if ($(this).val().trim() === '') {
            $(this).next('.bth__inp-lbl').removeClass('active');
        }
    });

    $('.js-label').on('change', function () {
        $('.js-label').each(function () {
            if ($(this).val().length) {
                $(this).next('.bth__inp-lbl').addClass('active');
            }
        });
    });

    $('.js-label').change();

    $('.js-validate').on('click', function () {
        $(this).closest('.auth__body-new').find('.auth__message').show()
    });


});


jQuery(window).load(function ($) {
    $('.js-auth-form__input').each(function () {
        if ($(this).val().length) {
            $(this).next('.auth-form__label').addClass('active');
        }
    });
});

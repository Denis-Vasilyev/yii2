$(document).ready(function () {

    $('#product').click(function () {
        line($(this));
        _hashState('#product');
        $('#productPanel').show();
        $('#type-payPanel').hide();
        $('#confPanel').hide();
        $('#contactPanel').hide();
    });
    $('#type-pay').click(function () {
        line($(this));
        _hashState('#type-pay');
        $('#productPanel').hide();
        $('#type-payPanel').show();
        $('#confPanel').hide();
        $('#contactPanel').hide();
    });

    $('#conf').click(function () {
        line($(this));
        _hashState('#conf');
        $('#productPanel').hide();
        $('#type-payPanel').hide();
        $('#confPanel').show();
        $('#contactPanel').hide();
    });
    $('#contact').click(function () {
        line($(this));
        _hashState('#contact');
        $('#productPanel').hide();
        $('#type-payPanel').hide();
        $('#confPanel').hide();
        $('#contactPanel').show();
    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.lsfw-line');
        $('.lsfw-tab').removeClass('active');
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
        $('.periodic-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange', function () {
        $(window.location.hash).click();
    });

    $('.auth-form__user-id-num').click(function () {
        var userId = $(this).text();
        $('.auth-form__label').addClass('up');
        $('.auth-form__input').val(userId)
    });


});
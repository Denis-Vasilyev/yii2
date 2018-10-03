$(document).ready(function () {
    $('#calendar').click(function () {
        line($(this));
        _hashState('#calendar');
        $('#calendarPanel').show();
        $('#calendarMonthPanel').hide();
        $('#sellPanel').hide();
        $('#buy-promoCodePanel').hide();

    });
    $('#calendarMonth').click(function () {
        line($(this));
        _hashState('#calendarMonth');
        $('#calendarPanel').hide();
        $('#calendarMonthPanel').show();
        $('#sellPanel').hide();
        $('#buy-promoCodePanel').hide();

    });
    $('#sell').click(function () {
        line($(this));
        _hashState('#sell');
        $('#calendarPanel').hide();
        $('#calendarMonthPanel').hide();
        $('#sellPanel').show();
        $('#buy-promoCodePanel').hide();

    });    $('#buy-promoCode').click(function () {
        line($(this));
        _hashState('#sell');
        $('#calendarPanel').hide();
        $('#calendarMonthPanel').hide();
        $('#sellPanel').hide();
        $('#buy-promoCodePanel').show();

    });

    $('select[name="priceCalendar-sumo1"]').SumoSelect();
    $('select[name="priceCalendar-sumo2"]').SumoSelect();


    $('.book-request__room-block .bth__ta').on('focus', function () {
        $(this).closest('.bth__ta-block').addClass('active')
    });
    $('.book-request__room-block .bth__ta').on('blur', function () {
        $(this).closest('.bth__ta-block').removeClass('active')
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
});

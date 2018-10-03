$(document).ready(function () {
    $('#subs-hotel-news').click(function () {
        line($(this));
        _hashState('#subs-hotel-news');
        $('#subs-hotel-newsPanel').show();
        $('#subs-statPanel').hide();

    });
    $('#subs-stat').click(function () {
        line($(this));
        _hashState('#subs-stat');
        $('#subs-hotel-newsPanel').hide();
        $('#subs-statPanel').show();
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

    $('input[name="period"]').on('change', function () {
        if ($('#periodDay').prop('checked')) {
            $('.js-period-day').show();
            $('.js-period-week').hide()

        }
        if ($('#periodWeek').prop('checked')) {
            $('.js-period-day').hide();
            $('.js-period-week').show()
        }


    });


    $('.subs-hotelNews-tbl tr ').hover(
        function () {
            $(this).find('.subs-hotelNews-tbl__act').fadeIn(100)

        }, function () {

            $(this).find('.subs-hotelNews-tbl__act').fadeOut(100)

        }
    );

    $('.subs-hotelNews-tbl  .gual-hotels-loc-icon').on('click', function () {
        var hint = $(this).next().text();

        $(this).next().text('Закрыто для других возможность взять в работу заявку в течении 2-х дней');


        $(this).addClass('active');
    })

});
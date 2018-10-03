$(document).ready(function () {
    $('#log').click(function () {
        line($(this));
        _hashState('#log');
        $('#logPanel').show();
        $('#summaryPanel').hide();
        $('#by-daysPanel').hide();
    });

    $('#summary').click(function () {
        line($(this));
        _hashState('#summary');
        $('#logPanel').hide();
        $('#summaryPanel').show();
        $('#by-daysPanel').hide();

    });
    $('#by-days').click(function () {
        line($(this));
        _hashState('#by-days');
        $('#logPanel').hide();
        $('#summaryPanel').hide();
        $('#by-daysPanel').show();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.line ');
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
        $('.periodic-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange', function () {
        $(window.location.hash).click();
    });


    // открытие taba сообщения по дням
    var tabMessagehide = $('#by-days');

    $('.table-by-message td a').on("click", function () {
        var error = $(this).text();
        $(tabMessagehide).show().text(error + ' ' + 'по дням').click();

    });
    // end_открытие taba сообщения по дням


    // всплывашка
    $('.log').on('mouseenter mouseleave', 'td.tooltip', function () {
        $(this).find('.tooltip__box').toggleClass('show-tooltip')
    });


});
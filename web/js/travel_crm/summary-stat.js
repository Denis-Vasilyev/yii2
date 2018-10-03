$(function () {

    $('#summary').click(function () {
        line($(this));
        _hashState('#summary');
        $('#summaryPanel').show();
        $('#summary-by-weekPanel').hide();
        $('#summary-by-yearPanel').hide();

    });
    $('#summary-by-week').click(function () {
        line($(this));
        _hashState('#summary-by-week');
        $('#summaryPanel').hide();
        $('#summary-by-weekPanel').show();
        $('#summary-by-yearPanel').hide();

    });
    $('#summary-by-year').click(function () {
        line($(this));
        _hashState('#summary-by-week');
        $('#summaryPanel').hide();
        $('#summary-by-weekPanel').hide();
        $('#summary-by-yearPanel').show();

    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.lsfw-line ');
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


});



$(document).ready(function () {
    $('#statistic').click(function () {
        line($(this));
        _hashState('#statistic');
        $('#statisticPanel').show();
        $('#initiatorsPanel').hide();
        $('#classificationPanel').hide();
        $('#classification-by-monthPanel').hide();
    });
    $('#initiators').click(function () {
        line($(this));
        _hashState('#initiators');
        $('#statisticPanel').hide();
        $('#initiatorsPanel').show();
        $('#classificationPanel').hide();
        $('#classification-by-monthPanel').hide();
    });

    $('#classification').click(function () {
        line($(this));
        _hashState('#classification');
        $('#statisticPanel').hide();
        $('#initiatorsPanel').hide();
        $('#classificationPanel').show();
        $('#classification-by-monthPanel').hide();
    });
    $('#classification-by-month').click(function () {
        line($(this));
        _hashState('#classification-by-month');
        $('#statisticPanel').hide();
        $('#initiatorsPanel').hide();
        $('#classificationPanel').hide();
        $('#classification-by-monthPanel').show();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.msg-analysis-line ');
        $('.msg-analysis-tab').removeClass('active');
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
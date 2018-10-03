$(document).ready(function () {
    $('#by-days').click(function () {
        line($(this));
        _hashState('#by-days');
        $('#by-daysPanel').show();
        $('#by-weeksPanel').hide();
        $('#by-monthPanel').hide();
        $('#by-cityPanel').hide();
        $('#by-reasonsPanel').hide();
    });

    $('#by-weeks').click(function () {
        line($(this));
        _hashState('#by-weeks');
        $('#by-daysPanel').hide();
        $('#by-weeksPanel').show();
        $('#by-monthPanel').hide();
        $('#by-cityPanel').hide();
        $('#by-reasonsPanel').hide();
    });
    $('#by-month').click(function () {
        line($(this));
        _hashState('#');
        $('#by-daysPanel').hide();
        $('#by-weeksPanel').hide();
        $('#by-monthPanel').show();
        $('#by-cityPanel').hide();
        $('#by-reasonsPanel').hide();
    });
    $('#by-city').click(function () {
        line($(this));
        _hashState('#by-city');
        $('#by-daysPanel').hide();
        $('#by-weeksPanel').hide();
        $('#by-monthPanel').hide();
        $('#by-cityPanel').show();
        $('#by-reasonsPanel').hide();
    });
    $('#by-reasons').click(function () {
        line($(this));
        _hashState('#by-reasons');
        $('#by-daysPanel').hide();
        $('#by-weeksPanel').hide();
        $('#by-monthPanel').hide();
        $('#by-cityPanel').hide();
        $('#by-reasonsPanel').show();
    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.trash-appl-line ');
        $('.trash-appl-tab').removeClass('active');
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
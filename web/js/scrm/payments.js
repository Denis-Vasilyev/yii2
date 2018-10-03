$(document).ready(function () {
    $('#log').click(function () {
        line($(this));
        _hashState('#log');
        $('#logPanel').show();
        $('#by-daysPanel').hide();
        $('#by-managersPanel').hide();

    });
    $('#by-days').click(function () {
        line($(this));
        _hashState('#by-days');
        $('#logPanel').hide();
        $('#by-daysPanel').show();
        $('#by-managersPanel').hide();
    });
    $('#by-managers').click(function () {
        line($(this));
        _hashState('#by-managers');
        $('#logPanel').hide();
        $('#by-daysPanel').hide();
        $('#by-managersPanel').show();
    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.payments-line ');
        $('.payments-tab').removeClass('active');
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
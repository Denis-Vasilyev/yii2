$(document).ready(function () {
    $('#mail-msg').click(function () {
        line($(this));
        _hashState('#mail-msg');
        $('#mail-msgPanel').show();
        $('#by-projectPanel').hide();
        $('#by-daysPanel').hide();
    });
    $('#by-project').click(function () {
        line($(this));
        _hashState('#by-project');
        $('#mail-msgPanel').hide();
        $('#by-projectPanel').show();
        $('#by-daysPanel').hide();
    });
    $('#by-days').click(function () {
        line($(this));
        _hashState('#by-days');
        $('#mail-msgPanel').hide();
        $('#by-projectPanel').hide();
        $('#by-daysPanel').show();
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
});
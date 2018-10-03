$(document).ready(function () {
    $('#general-inform').click(function () {
        line($(this));
        _hashState('#');
        $('#general-informPanel').show();
        $('#card-clientPanel').hide();
    });
   $('#card-client').click(function () {
        line($(this));
        _hashState('#card-client');
        $('#general-informPanel').hide();
        $('#card-clientPanel').show();
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
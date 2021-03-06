$(document).ready(function () {
    $('#questAuth').click(function () {
        line($(this));
        _hashState('#questAuth');
        $('#questAuthPanel').show();
        $('#questHaveAuthPanel').hide();
    });

    $('#questHaveAuth').click(function () {
        line($(this));
        _hashState('#questHaveAuth');
        $('#questAuthPanel').hide();
        $('#questHaveAuthPanel').show();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.tabs-bar--question .line');
        $('.tabs-bar--question .tab').removeClass('active');
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
        $('.tabs-bar--question  .tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange', function () {
        $(window.location.hash).click();
    });


});



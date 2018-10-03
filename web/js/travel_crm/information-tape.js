$(function () {
    $('#ribbon').click(function () {
        line($(this));
        _hashState('#ribbon');
        $('#ribbonPanel').show();
        $('#consultationPanel').hide();

    });
    $('#consultation').click(function () {
        line($(this));
        _hashState('#consultation');
        $('#ribbonPanel').hide();
        $('#consultationPanel').show();

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

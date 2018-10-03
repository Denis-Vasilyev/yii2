$(function () {
    $('#list').click(function () {
        line($(this));
        _hashState('#list');
        $('#listPanel').show();
        $('#projectPanel').hide();
    });
    $('#project').click(function () {
        line($(this));
        _hashState('#project');
        $('#listPanel').hide();
        $('#projectPanel').show();
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
        $('.tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange', function () {
        $(window.location.hash).click();
    });
});
$(document).ready(function () {
    $('#hotels').click(function () {
        line($(this));
        _hashState('#hotels');
        $('#hotelsPanel').show();
        $('#addPanel').hide();
        $('#legendPanel').hide();

    });
    $('#add').click(function () {
        line($(this));
        _hashState('#add');
        $('#hotelsPanel').hide();
        $('#addPanel').show();
        $('#legendPanel').hide();
    });
    $('#legend').click(function () {
        line($(this));
        _hashState('#legend');
        $('#hotelsPanel').hide();
        $('#addPanel').hide();
        $('#legendPanel').show();
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
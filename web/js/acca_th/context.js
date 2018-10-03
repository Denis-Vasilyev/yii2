$(document).ready(function () {
    $('#allowable').click(function () {
        line($(this));
        _hashState('#allowable');
        $('#allowablePanel').show();
        $('#addPanel').hide();
        $('#forbiddenPanel').hide();
    });
    $('#add').click(function () {
        line($(this));
        _hashState('#add');
        $('#allowablePanel').hide();
        $('#addPanel').show();
        $('#forbiddenPanel').hide();
    });
    $('#forbidden').click(function () {
        line($(this));
        _hashState('#forbidden');
        $('#allowablePanel').hide();
        $('#addPanel').hide();
        $('#forbiddenPanel').show();
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
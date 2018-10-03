$(document).ready(function () {
    $('#my-department').click(function () {
        line($(this));
        _hashState('#my-department');
        $('#my-departmentPanel').show();
        $('#addPanel').hide();
    });
    $('#add').click(function () {
        line($(this));
        _hashState('#add');
        $('#my-departmentPanel').hide();
        $('#addPanel').show();

    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.head-line');
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
        $('.periodic-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange', function () {
        $(window.location.hash).click();
    });
});
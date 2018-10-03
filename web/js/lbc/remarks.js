$(document).ready(function () {
    $('#remarks').click(function () {
        line($(this));
        _hashState('#remarks');
        $('#remarksPanel').show();
        $('#add-remarkPanel').hide();
    });

    $('#add-remark').click(function () {
        line($(this));
        _hashState('#add-remark');
        $('#remarksPanel').hide();
        $('#add-remarkPanel').show();
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
        $('.periodic-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange', function () {
        $(window.location.hash).click();
    });

});
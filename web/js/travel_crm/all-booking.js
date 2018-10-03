$(document).ready(function () {
    $('#notProccesing').click(function () {
        line($(this));
        _hashState('#notProccesing');
        $('#notProccesingPanel').show();
        $('#allPanel').hide();
        $('#statPanel').hide();

    });
    $('#all').click(function () {
        line($(this));
        _hashState('#all');
        $('#notProccesingPanel').hide();
        $('#allPanel').show();
        $('#statPanel').hide();

    });
    $('#stat').click(function () {
        line($(this));
        _hashState('#stat');
        $('#notProccesingPanel').hide();
        $('#allPanel').hide();
        $('#statPanel').show();

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

    $('select[name="country"]').SumoSelect();
    $('select[name="manager"]').SumoSelect();
});
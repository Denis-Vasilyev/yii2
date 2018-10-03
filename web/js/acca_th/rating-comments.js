$(document).ready(function () {
    $('#answers').click(function () {
        line($(this));
        _hashState('#answers');
        $('#answersPanel').show();
        $('#commentsPanel').hide();
        $('#statPanel').hide();
    });
    $('#comments').click(function () {
        line($(this));
        _hashState('#comments');
        $('#answersPanel').hide();
        $('#commentsPanel').show();
        $('#statPanel').hide();
    });
    $('#stat').click(function () {
        line($(this));
        _hashState('#stat');
        $('#answersPanel').hide();
        $('#commentsPanel').hide();
        $('#statPanel').show();
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


    $('input[name="view"]').on('change', function () {
        if ($('#byWeek').prop('checked')) {
            $('.rating-stat-tbl.byWeek').show();
            $('.rating-stat-tbl.byDay').hide();
            $('.rating-stat-tbl.byMonth').hide();
        }
        if ($('#byDay').prop('checked')) {
            $('.rating-stat-tbl.byWeek').hide();
            $('.rating-stat-tbl.byDay').show();
            $('.rating-stat-tbl.byMonth').hide();
        }
        if ($('#byMonth').prop('checked')) {
            $('.rating-stat-tbl.byWeek').hide();
            $('.rating-stat-tbl.byDay').hide();
            $('.rating-stat-tbl.byMonth').show();
        }
    });
});

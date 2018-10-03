$(document).ready(function () {
    $('#bid-reportByDays').click(function () {
        line($(this));
        _hashState('#bid-reportByDays');
        $('#bid-reportByDaysPanel').show();
        $('#bid-reportByWeeksPanel').hide();
        $('#bid-reportByMonthPanel').hide();
    });
    $('#bid-reportByWeeks').click(function () {
        line($(this));
        _hashState('#bid-reportByWeeks');
        $('#bid-reportByDaysPanel').hide();
        $('#bid-reportByWeeksPanel').show();
        $('#bid-reportByMonthPanel').hide();
    });
    $('#bid-reportByMonth').click(function () {
        line($(this));
        _hashState('#bid-reportByMonth');
        $('#bid-reportByDaysPanel').hide();
        $('#bid-reportByWeeksPanel').hide();
        $('#bid-reportByMonthPanel').show();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.bid-report-line');
        $('.bid-report-tab').removeClass('active');
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
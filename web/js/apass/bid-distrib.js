$(document).ready(function () {
    $('#report-agency').click(function () {
        line($(this));
        _hashState('#report-agency');
        $('#report-agencyPanel').show();
        $('#agent-ratingPanel').hide();
        $('#statistic-distribPanel').hide();
        $('#statistic-distrib2Panel').hide();
    });
    $('#agent-rating').click(function () {
        line($(this));
        _hashState('#agent-rating');
        $('#report-agencyPanel').hide();
        $('#agent-ratingPanel').show();
        $('#statistic-distribPanel').hide();
        $('#statistic-distrib2Panel').hide();
    });
    $('#statistic-distrib').click(function () {
        line($(this));
        _hashState('#statistic-distrib');
        $('#report-agencyPanel').hide();
        $('#agent-ratingPanel').hide();
        $('#statistic-distribPanel').show();
        $('#statistic-distrib2Panel').hide();
    });
    $('#statistic-distrib2').click(function () {
        line($(this));
        _hashState('#byUsers');
        $('#report-agencyPanel').hide();
        $('#agent-ratingPanel').hide();
        $('#statistic-distribPanel').hide();
        $('#statistic-distrib2Panel').show();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.bid-distrib-line ');
        $('.bid-distrib-tab').removeClass('active');
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
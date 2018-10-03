$(document).ready(function () {
    $('#balances').click(function () {
        line($(this));
        _hashState('#balances');
        $('#balancesPanel').show();
        $('#oldPanel').hide();
        $('#balances-weeksPanel').hide();
        $('#balances-monthPanel').hide();
    });
    $('#old').click(function () {
        line($(this));
        _hashState('#old');
        $('#balancesPanel').hide();
        $('#oldPanel').show();
        $('#balances-weeksPanel').hide();
        $('#balances-monthPanel').hide();
    });
    $('#balances-weeks').click(function () {
        line($(this));
        _hashState('#balances-weeks');
        $('#balancesPanel').hide();
        $('#oldPanel').hide();
        $('#balances-weeksPanel').show();
        $('#balances-monthPanel').hide();
    });
    $('#balances-month').click(function () {
        line($(this));
        _hashState('#balances-month');
        $('#balancesPanel').hide();
        $('#oldPanel').hide();
        $('#balances-weeksPanel').hide();
        $('#balances-monthPanel').show();
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
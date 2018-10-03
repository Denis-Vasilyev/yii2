$(function () {
    $('#payment-by-days').click(function () {
        line($(this));
        _hashState('#payment-by-days');
        $('#payment-by-daysPanel').show();
        $('#fillPanel').hide();
        $('#detailPanel').hide();

    });

    $('#fill').click(function () {
        line($(this));
        _hashState('#fill');
        $('#payment-by-daysPanel').hide();
        $('#fillPanel').show();
        $('#detailPanel').hide();
    });
    $('#detail').click(function () {
        line($(this));
        _hashState('#detail');
        $('#payment-by-daysPanel').hide();
        $('#fillPanel').hide();
        $('#detailPanel').show();
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

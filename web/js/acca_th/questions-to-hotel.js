$(document).ready(function () {
    $('#new').click(function () {
        line($(this));
        _hashState('#new');
        $('#newPanel').show();
        $('#closedPanel').hide();
        $('#countrysPanel').hide();
        $('#starsPanel').hide();
        $('#handlersPanel').hide();
    });
    $('#closed').click(function () {
        line($(this));
        _hashState('#closed');
        $('#newPanel').hide();
        $('#closedPanel').show();
        $('#countrysPanel').hide();
        $('#starsPanel').hide();
        $('#handlersPanel').hide();
    });
    $('#countrys').click(function () {
        line($(this));
        _hashState('#countrys');
        $('#newPanel').hide();
        $('#closedPanel').hide();
        $('#countrysPanel').show();
        $('#starsPanel').hide();
        $('#handlersPanel').hide();
    });
    $('#stars').click(function () {
        line($(this));
        _hashState('#stars');
        $('#newPanel').hide();
        $('#closedPanel').hide();
        $('#countrysPanel').hide();
        $('#starsPanel').show();
        $('#handlersPanel').hide();
    });
    $('#handlers').click(function () {
        line($(this));
        _hashState('#handlers');
        $('#newPanel').hide();
        $('#closedPanel').hide();
        $('#countrysPanel').hide();
        $('#starsPanel').hide();
        $('#handlersPanel').show();
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
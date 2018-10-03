$(document).ready(function () {
    $('#all').click(function () {
        line($(this));
        _hashState('#all');
        $('#allPanel').show();
        $('#incomingPanel').hide();
        $('#outgoingPanel').hide();
        $('#sendPanel').hide();
    });
    $('#incoming').click(function () {
        line($(this));
        _hashState('#incoming');
        $('#allPanel').hide();
        $('#incomingPanel').show();
        $('#outgoingPanel').hide();
        $('#sendPanel').hide();
    });
    $('#outgoing').click(function () {
        line($(this));
        _hashState('#outgoing');
        $('#allPanel').hide();
        $('#incomingPanel').hide();
        $('#outgoingPanel').show();
        $('#sendPanel').hide();
    });
    $('#send').click(function () {
        line($(this));
        _hashState('#send');
        $('#allPanel').hide();
        $('#incomingPanel').hide();
        $('#outgoingPanel').hide();
        $('#sendPanel').show();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.email-messages-line');
        $('.email-messages-tab').removeClass('active');
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
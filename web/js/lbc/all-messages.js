$(document).ready(function () {
    $('#all-msg').click(function () {
        line($(this));
        _hashState('#all-msg');
        $('#all-msgPanel').show();
        $('#incomingPanel').hide();
        $('#outboxPanel').hide();
        $('#sendPanel').hide();
    });
    $('#incoming').click(function () {
        line($(this));
        _hashState('#incoming');
        $('#all-msgPanel').hide();
        $('#incomingPanel').show();
        $('#outboxPanel').hide();
        $('#sendPanel').hide();
    });
    $('#outbox').click(function () {
        line($(this));
        _hashState('#outbox');
        $('#all-msgPanel').hide();
        $('#incomingPanel').hide();
        $('#outboxPanel').show();
        $('#sendPanel').hide();
    });
    $('#send').click(function () {
        line($(this));
        _hashState('#send');
        $('#all-msgPanel').hide();
        $('#incomingPanel').hide();
        $('#outboxPanel').hide();
        $('#sendPanel').show();
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

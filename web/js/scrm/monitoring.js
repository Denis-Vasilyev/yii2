$(document).ready(function () {
    $('#call').click(function () {
        line($(this));
        _hashState('#call');
        $('#callPanel').show();
        $('#recommendPanel').hide();
        $('#logPanel').hide();
        $('#byUsersPanel').hide();
    });
    $('#recommend').click(function () {
        line($(this));
        _hashState('#recommend');
        $('#callPanel').hide();
        $('#recommendPanel').show();
        $('#logPanel').hide();
        $('#byUsersPanel').hide();
    });
    $('#log').click(function () {
        line($(this));
        _hashState('#log');
        $('#callPanel').hide();
        $('#recommendPanel').hide();
        $('#logPanel').show();
        $('#byUsersPanel').hide();
    });
    $('#byUsers').click(function () {
        line($(this));
        _hashState('#byUsers');
        $('#callPanel').hide();
        $('#recommendPanel').hide();
        $('#logPanel').hide();
        $('#byUsersPanel').show();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.monitoring-line ');
        $('.monitoring-tab').removeClass('active');
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
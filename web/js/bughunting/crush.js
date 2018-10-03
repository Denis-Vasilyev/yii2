$(document).ready(function () {
    $('#alarm-log').click(function () {
        line($(this));
        _hashState('#alarm-log');
        $('#alarm-logPanel').show();
        $('#alarm-calendarPanel').hide();
        $('#alarm-projectsPanel').hide();
    });

    $('#alarm-calendar').click(function () {
        line($(this));
        _hashState('#alarm-calendar');
        $('#alarm-logPanel').hide();
        $('#alarm-calendarPanel').show();
        $('#alarm-projectsPanel').hide();
    });
    $('#alarm-projects').click(function () {
        line($(this));
        _hashState('#alarm-projects');
        $('#alarm-logPanel').hide();
        $('#alarm-calendarPanel').hide();
        $('#alarm-projectsPanel').show();
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
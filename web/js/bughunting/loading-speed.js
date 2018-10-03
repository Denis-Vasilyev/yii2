$(document).ready(function () {
    $('#summary-by-projects').click(function () {
        line($(this));
        _hashState('#summary-by-projects');
        $('#summary-by-projectsPanel').show();
        $('#parsing-logPanel').hide();
        $('#addPanel').hide();
    });

    $('#parsing-log').click(function () {
        line($(this));
        _hashState('#parsing-log');
        $('#summary-by-projectsPanel').hide();
        $('#parsing-logPanel').show();
        $('#addPanel').hide();
    });
    $('#add').click(function () {
        line($(this));
        _hashState('#add');
        $('#summary-by-projectsPanel').hide();
        $('#parsing-logPanel').hide();
        $('#addPanel').show();
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

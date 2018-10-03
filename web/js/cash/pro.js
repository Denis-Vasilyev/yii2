$(document).ready(function () {
    $('#by-days').click(function () {
        line($(this));
        _hashState('#by-days');
        $('#by-daysPanel').show();
        $('#by-monthPanel').hide();
        $('#addPanel').hide();
        $('#templatesPanel').hide();
    });
    $('#by-month').click(function () {
        line($(this));
        _hashState('#by-month');
        $('#by-daysPanel').hide();
        $('#by-monthPanel').show();
        $('#addPanel').hide();
        $('#templatesPanel').hide();
    });
    $('#add').click(function () {
        line($(this));
        _hashState('#add');
        $('#by-daysPanel').hide();
        $('#by-monthPanel').hide();
        $('#addPanel').show();
        $('#templatesPanel').hide();
    });
    $('#templates').click(function () {
        line($(this));
        _hashState('#templates');
        $('#by-daysPanel').hide();
        $('#by-monthPanel').hide();
        $('#addPanel').hide();
        $('#templatesPanel').show();
    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.lsfw-line ');
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
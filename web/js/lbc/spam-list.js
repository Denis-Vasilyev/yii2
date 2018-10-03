$(document).ready(function () {
    $('#grey-list').click(function () {
        line($(this));
        _hashState('#grey-list');
        $('#grey-listPanel').show();
        $('#black-listPanel').hide();
        $('#white-listPanel').hide();
        $('#basketPanel').hide();
        $('#addPanel').hide();

    });

    $('#black-list').click(function () {
        line($(this));
        _hashState('#black-list');
        $('#grey-listPanel').hide();
        $('#black-listPanel').show();
        $('#white-listPanel').hide();
        $('#basketPanel').hide();
        $('#addPanel').hide();
    });
    $('#white-list').click(function () {
        line($(this));
        _hashState('#white-list');
        $('#grey-listPanel').hide();
        $('#black-listPanel').hide();
        $('#white-listPanel').show();
        $('#basketPanel').hide();
        $('#addPanel').hide();
    });
    $('#basket').click(function () {
        line($(this));
        _hashState('#basket');
        $('#grey-listPanel').hide();
        $('#black-listPanel').hide();
        $('#white-listPanel').hide();
        $('#basketPanel').show();
        $('#addPanel').hide();
    });
    $('#add').click(function () {
        line($(this));
        _hashState('#add');
        $('#grey-listPanel').hide();
        $('#black-listPanel').hide();
        $('#white-listPanel').hide();
        $('#basketPanel').hide();
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
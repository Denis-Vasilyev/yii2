$(document).ready(function () {
    $('#new').click(function () {
        line($(this));
        _hashState('#new');
        $('#newPanel').show();
        $('#closedPanel').hide();
        $('#statisticsPanel').hide();
    });
    $('#closed').click(function () {
        line($(this));
        _hashState('#closed');
        $('#newPanel').hide();
        $('#closedPanel').show();
        $('#statisticsPanel').hide();
    });
    $('#statistics').click(function () {
        line($(this));
        _hashState('#statistics');
        $('#newPanel').hide();
        $('#closedPanel').hide();
        $('#statisticsPanel').show();
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

jQuery(document).ready(function($) {
    $(function () {
        $('.translate-pp').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
    });

    $(document).on('click', '.close-modal, .filter-pp__btn', function () {
        $.magnificPopup.close();
    });
});
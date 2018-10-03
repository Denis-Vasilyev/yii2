$(document).ready(function () {
    $('#log').click(function () {
        line($(this));
        _hashState('#log');
        $('#logPanel').show();
        $('#by-sendlerPanel').hide();
        $('#by-dataPanel').hide();
    });

    $('#by-data').click(function () {
        line($(this));
        _hashState('#by-data');
        $('#logPanel').hide();
        $('#by-sendlerPanel').hide();
        $('#by-dataPanel').show();
    });
    $('#by-sendler').click(function () {
        line($(this));
        _hashState('#by-sendler');
        $('#logPanel').hide();
        $('#by-sendlerPanel').show();
        $('#by-dataPanel').hide();

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
        $('.distribution-log-pp').magnificPopup({
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
$(document).ready(function () {
    $('#number-by-hours').click(function () {
        line($(this));
        _hashState('#number-by-hours');
        $('#number-by-hoursPanel').show();
        $('#analysis-for-reasonsPanel').hide();
        $('#log-applPanel').hide();
    });
    $('#analysis-for-reasons').click(function () {
        line($(this));
        _hashState('#analysis-for-reasons');
        $('#number-by-hoursPanel').hide();
        $('#analysis-for-reasonsPanel').show();
        $('#log-applPanel').hide();
    });
    $('#log-appl').click(function () {
        line($(this));
        _hashState('#log-appl');
        $('#number-by-hoursPanel').hide();
        $('#analysis-for-reasonsPanel').hide();
        $('#log-applPanel').show();

    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.stop-appl-line ');
        $('.stop-appl-tab').removeClass('active');
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


    jQuery(document).ready(function ($) {
        $(function () {
            $('.stop-appl-pp').magnificPopup({
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


});
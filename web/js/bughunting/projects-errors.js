$(document).ready(function () {
    $('#list-errors').click(function () {
        line($(this));
        _hashState('#list-errors');
        $('#list-errorsPanel').show();
        $('#project-statisticsPanel').hide();
    });

    $('#project-statistics').click(function () {
        line($(this));
        _hashState('#project-statistics');
        $('#list-errorsPanel').hide();
        $('#project-statisticsPanel').show();
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

    $(function () {
        $('.projects-errors-pp').magnificPopup({
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

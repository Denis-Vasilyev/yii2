$(document).ready(function () {
    $('#statistics').click(function () {
        line($(this));
        _hashState('#statistics');
        $('#statisticsPanel').show();
        $('#statistics-by-developPanel').hide();
    });

    $('#statistics-by-develop').click(function () {
        line($(this));
        _hashState('#statistics-by-develop');
        $('#statisticsPanel').hide();
        $('#statistics-by-developPanel').show();

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

    var tabHide = $('#statistics-by-develop');

    $('.log td a').on('click', function () {
        var name = $(this).text();
        $(tabHide).text(name);

        $(tabHide).show()
            .click();
        return false
    });

    $('#statistics')
        .on("click", function () {
            $(tabHide).hide()
        });

});
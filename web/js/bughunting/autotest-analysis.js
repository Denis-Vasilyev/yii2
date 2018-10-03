$(document).ready(function () {
    $('#indicators').click(function () {
        line($(this));
        _hashState('#indicators');
        $('#indicatorsPanel').show();
        $('#rankingPanel').hide();
    });

    $('#ranking').click(function () {
        line($(this));
        _hashState('#ranking');
        $('#indicatorsPanel').hide();
        $('#rankingPanel').show();

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

    // открытие taba Рейтинг страницы
    var tabHide = $('#ranking');

    $('.autotests-page-analysis td:nth-child(2)').on('click', function () {
        var textParam = $(this).text();
        tabHide.show()
            .click();
        $(this).closest('.content').find('#rankingPanel .ranking-param').text(textParam)
    });


});



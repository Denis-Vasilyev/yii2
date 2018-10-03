$(document).ready(function () {

    $('#settings').click(function () {
        line($(this));
        _hashState('#settings');
        $('#settingsPanel').show();
        $('#editPanel').hide();
    });
    $('#edit').click(function () {
        line($(this));
        _hashState('#edit');
        $('#settingsPanel').hide();
        $('#editPanel').show();
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



    // открытие taba Редактирование
    var tabHide = $(' #edit');

    $('.settings-by-sity td a').on("click", function () {
        $(tabHide).removeClass('tab-hide')
            .click();
    });

    $('#settings ')
        .on("click", function () {
            $('.checked-list').hide();
            $(tabHide).addClass('tab-hide')
        });
    // end_открытие taba Редактирование


    $('.form-btn').on("click", function () {
        $('.checked-list').show();
        $(tabHide).removeClass('tab-hide')
            .click();
    });

    $('#settings ')
        .on("click", function () {
            $(tabHide).addClass('tab-hide')
        });

});
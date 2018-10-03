$(document).ready(function () {
    $('#bugs').click(function () {
        line($(this));
        _hashState('#bugs');
        $('#bugsPanel').show();
        $('#unclearPanel').hide();
        $('#closedPanel').hide();
        $('#canceledPanel').hide();
    });
    $('#unclear').click(function () {
        line($(this));
        _hashState('#unclear');
        $('#bugsPanel').hide();
        $('#unclearPanel').show();
        $('#closedPanel').hide();
        $('#canceledPanel').hide();
    });
    $('#closed').click(function () {
        line($(this));
        _hashState('#unclear');
        $('#bugsPanel').hide();
        $('#unclearPanel').hide();
        $('#closedPanel').show();
        $('#canceledPanel').hide();
    });
    $('#canceled').click(function () {
        line($(this));
        _hashState('#canceled');
        $('#bugsPanel').hide();
        $('#unclearPanel').hide();
        $('#closedPanel').hide();
        $('#canceledPanel').show();
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


    $('.header--233__btn--show').on('click', function () {
        $('.js-act-show').show();
        $(this).closest('.js-act-hide').hide()
    });
    $('.js-act-show button').on('click', function () {
        $('.js-act-show').hide();
        $('.js-act-hide').show()
    });




    /*форма плавающая добавления*/

    var topPos = $('.js-observe-scroll').offset().top + 30;
    $(window).scroll(function () {
        var top = $(document).scrollTop();
        if (top > topPos) {
            $('.bugsAdd-form__fixed').addClass('fixed');
        } else {
            $('.bugsAdd-form__fixed').removeClass('fixed');
        }
    });


});
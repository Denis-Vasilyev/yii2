$(document).ready(function () {

    $('#people').click(function () {
        line($(this));
        _hashState('#people');
        $('#peoplePanel').show();
        $('#non-residentsPanel').hide();
        $('#new-peoplePanel').hide();
        $('#birthdayPanel').hide();

    });
    $('#non-residents').click(function () {
        line($(this));
        _hashState('#non-residents');
        $('#peoplePanel').hide();
        $('#non-residentsPanel').show();
        $('#new-peoplePanel').hide();
        $('#birthdayPanel').hide();
    });
    $('#new-people').click(function () {
        line($(this));
        _hashState('#new-people');
        $('#peoplePanel').hide();
        $('#non-residentsPanel').hide();
        $('#new-peoplePanel').show();
        $('#birthdayPanel').hide();
    });
    $('#birthday').click(function () {
        line($(this));
        _hashState('#birthday');
        $('#peoplePanel').hide();
        $('#non-residentsPanel').hide();
        $('#new-peoplePanel').hide();
        $('#birthdayPanel').show();
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


    $('.people__tbl .lbc__cell.relative').hover(
        function () {
            $(this).find('.hint').show()
        },
        function () {

            $(this).find('.hint').hide()
        }
    );

});

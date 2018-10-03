$(document).ready(function () {
    $('#fill-quality').click(function () {
        line($(this));
        _hashState('#fill-quality');
        $('#fill-qualityPanel').show();
        $('#accessPanel').hide();
    });
    $('#access').click(function () {
        line($(this));
        _hashState('#access');
        $('#fill-qualityPanel').hide();
        $('#accessPanel').show();
    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.filled-profile-line ');
        $('.filled-profile-tab').removeClass('active');
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

    $('.user-block').hover(
        function () {
            $(this).find('.hint').show()
        },
        function () {
            $(this).find('.hint').hide()
        }
    );
});
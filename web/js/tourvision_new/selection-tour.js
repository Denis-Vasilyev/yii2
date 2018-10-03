$(document).ready(function () {
    $('#hotel-search').click(function () {
        line($(this));
        _hashState('#hotel-search');
        $('#hotel-searchPanel, .hotel-searchPanel').show();
        $('#my-interestsPanel, .my-interestsPanel').hide();
    });

    $('#my-interests').click(function () {
        line($(this));
        _hashState('#my-interests');
        $('#hotel-searchPanel, .hotel-searchPanel').hide();
        $('#my-interestsPanel, .my-interestsPanel').show();
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
        $('.lsfw-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange', function () {
        $(window.location.hash).click();
    });


    $('select[name="sorter-sumo"]').SumoSelect()

    $('.searchResult__hearts .box-heart__icon').hover(function () {
            $(this).prevAll().addClass('active');
            $(this).nextAll().removeClass('active');
            $(this).addClass('active');
        },
        function () {
            if ($(this).index() === 0) {
                $(this).removeClass('active');
            }
        }
    );
});

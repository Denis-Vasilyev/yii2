$(function () {
    $('#hotelSearch').click(function () {
        line($(this));
        _hashState('#hotelSearch');
        $('#hotelSearchPanel').show();
        $('#hotelSearchPricePanel').hide();
        $('#myInterestsPanel').hide();
    });
    $('#hotelSearchPrice').click(function () {
        line($(this));
        _hashState('#hotelSearchPrice');
        $('#hotelSearchPanel').hide();
        $('#hotelSearchPricePanel').show();
        $('#myInterestsPanel').hide();
    });
  $('#myInterests').click(function () {
        line($(this));
        _hashState('#myInterests');
        $('#hotelSearchPanel').hide();
        $('#hotelSearchPricePanel').hide();
        $('#myInterestsPanel').show();
    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.line');
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
        $('.tab.active').first().click();
    else
        $(window.location.hash).click();
    $(window).bind('hashchange', function () {
        $(window.location.hash).click();
    });

});
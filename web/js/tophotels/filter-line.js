$(document).ready(function () {

    $('#header-hotelSearch').click(function () {
        line($(this));
        _hashState('#hotelSearch');
        $('#header-hotelSearchPanel').show();
        $('#header-myInterestsPanel').hide();
        $('#header-hotelChainsPanel').hide();
        $('#header-hotelFilterPanel ').hide();
    });

    $('#header-myInterests').click(function () {
        line($(this));
        _hashState('#myInterests');
        $('#header-hotelSearchPanel').hide();
        $('#header-myInterestsPanel').show();
        $('#header-hotelChainsPanel').hide();
        $('#header-hotelFilterPanel ').hide();
    });
    $('#header-hotelChains').click(function () {
        line($(this));
        _hashState('#hotelChains');
        $('#header-hotelSearchPanel').hide();
        $('#header-myInterestsPanel').hide();
        $('#header-hotelChainsPanel').show();
        $('#header-hotelFilterPanel ').hide();
    });
    $('#header-hotelFilter').click(function () {
        line($(this));
        _hashState('#hotelFilter');
        $('#header-hotelSearchPanel').hide();
        $('#header-myInterestsPanel').hide();
        $('#header-hotelChainsPanel').hide();
        $('#header-hotelFilterPanel ').show();
    });


    var line = function (obj) {
        var wT = obj.width();
        var pT = obj.position().left;
        var elT = $('.topSection-wide .search-line');
        $('.topSection-wide  .search-tab ').removeClass('active');
        obj.addClass('active');
        elT.clearQueue().animate({
            left: pT,
            width: wT
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
        $('.topSection-wide  .search-tab.active').first().click();
    else
        $(window.location.hash).click();
    $(window).bind('hashchange', function () {
        $(window.location.hash).click();
    });

    $('.header-bot__filter-icon').click(function () {
        $('.topSection-wide--abs').slideToggle();
        $(this).toggleClass('active')
    });
});
jQuery(document).ready(function($){

    $('#roomsHotelsCatalog').click(function () {
        line($(this));
        _hashState('#roomsHotelsCatalog');
        $('#roomsHotelsCatalogPanel').show();
        // $('#tab2-panel').hide();
        // $('#tab3-panel').hide();
    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.room-search-price-line');
        $('.room-search-price-tab').removeClass('active');
        obj.addClass('active');
        el.clearQueue().animate({
            left: p,
            width: w
        }, 300);
    };

    var _hashState = function(_hash) {
        if(history.pushState) {
            history.pushState(null, null, _hash);
        }
        else {
            location.hash = _hash;
        }
    };



    if(!window.location.hash)
        $('.room-search-price-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange',function(){
        $(window.location.hash).click();
    });
});

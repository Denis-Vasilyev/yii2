jQuery(document).ready(function($){
    $('#searchHotels').click(function () {
        line($(this));
        _hashState('#searchHotels');
        $('#searchHotelsPanel').show();
        $('#searchResultPanel').hide();
        $('#myInterestsPanel').hide();
    });

    $('#searchResult').click(function () {
        line($(this));
        _hashState('#searchResult');
        $('#searchHotelsPanel').hide();
        $('#searchResultPanel').show();
        $('#myInterestsPanel').hide();
    });
    $('#myInterests').click(function () {
        line($(this));
        _hashState('#myInterests');
        $('#searchHotelsPanel').hide();
        $('#searchResultPanel').hide();
        $('#myInterestsPanel').show();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.search-line');
        $('.search-tab').removeClass('active');
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
        $('.search-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange',function(){
        $(window.location.hash).click();
    });
});

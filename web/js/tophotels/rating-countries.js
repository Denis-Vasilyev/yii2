$(document).ready(function() {
    $('#ratingCountries').click(function () {
        line($(this));
        _hashState('#ratingCountries');
        $('#ratingCountriesPanel').show();
        // $('#tab2-panel').hide();
        // $('#tab3-panel').hide();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.rating-countries-line');
        $('.rating-countries-tab').removeClass('active');
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
        $('.rating-countries-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange',function(){
        $(window.location.hash).click();
    });
});

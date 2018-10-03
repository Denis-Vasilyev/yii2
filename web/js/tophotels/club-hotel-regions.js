jQuery(document).ready(function($){
    $('#macroRegions').click(function () {
        line($(this));
        _hashState('#macroRegions');
        $('#macroRegions-panel').show();
        $('#microRegions-panel').hide();
        $('#countries-panel').hide();
        $('#regions-panel').hide();
        $('#cities-panel').hide();
        $('#districts-panel').hide();
        $('#areals-panel').hide();
        $('#hotels-panel').hide();
    });

    $('#microRegions').click(function () {
        line($(this));
        _hashState('#microRegions');
        $('#macroRegions-panel').hide();
        $('#microRegions-panel').show();
        $('#countries-panel').hide();
        $('#regions-panel').hide();
        $('#cities-panel').hide();
        $('#districts-panel').hide();
        $('#areals-panel').hide();
        $('#hotels-panel').hide();
    });

    $('#countries').click(function () {
        line($(this));
        _hashState('#countries');
        $('#macroRegions-panel').hide();
        $('#microRegions-panel').hide();
        $('#countries-panel').show();
        $('#regions-panel').hide();
        $('#cities-panel').hide();
        $('#districts-panel').hide();
        $('#areals-panel').hide();
        $('#hotels-panel').hide();
    });
    $('#regions').click(function () {
        line($(this));
        _hashState('#regions');
        $('#macroRegions-panel').hide();
        $('#microRegions-panel').hide();
        $('#countries-panel').hide();
        $('#regions-panel').show();
        $('#cities-panel').hide();
        $('#districts-panel').hide();
        $('#areals-panel').hide();
        $('#hotels-panel').hide();
    });
    $('#cities').click(function () {
        line($(this));
        _hashState('#cities');
        $('#macroRegions-panel').hide();
        $('#microRegions-panel').hide();
        $('#countries-panel').hide();
        $('#regions-panel').hide();
        $('#cities-panel').show();
        $('#districts-panel').hide();
        $('#areals-panel').hide();
        $('#hotels-panel').hide();
    });
    $('#districts').click(function () {
        line($(this));
        _hashState('#districts');
        $('#macroRegions-panel').hide();
        $('#microRegions-panel').hide();
        $('#countries-panel').hide();
        $('#regions-panel').hide();
        $('#cities-panel').hide();
        $('#districts-panel').show();
        $('#areals-panel').hide();
        $('#hotels-panel').hide();
    });
    $('#areals').click(function () {
        line($(this));
        _hashState('#areals');
        $('#macroRegions-panel').hide();
        $('#microRegions-panel').hide();
        $('#countries-panel').hide();
        $('#regions-panel').hide();
        $('#cities-panel').hide();
        $('#districts-panel').hide();
        $('#areals-panel').show();
        $('#hotels-panel').hide();
    });
    $('#hotels').click(function () {
        line($(this));
        _hashState('#hotels');
        $('#macroRegions-panel').hide();
        $('#microRegions-panel').hide();
        $('#countries-panel').hide();
        $('#regions-panel').hide();
        $('#cities-panel').hide();
        $('#districts-panel').hide();
        $('#areals-panel').hide();
        $('#hotels-panel').show();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.comm-hotel-line');
        $('.comm-hotel-tab').removeClass('active');
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
        $('.comm-hotel-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange',function(){
        $(window.location.hash).click();
    });
});

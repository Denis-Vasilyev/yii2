$(document).ready(function () {
    $('#promotion').click(function () {
        line($(this));
        _hashState('#promotion');
        $('#promotionPanel').show();
        $('#informersPanel').hide();
        $('#add-hotelPanel').hide();
        $('#consultationPanel').hide();
    });

    $('#informers').click(function () {
        line($(this));
        _hashState('#informers');
        $('#promotionPanel').hide();
        $('#informersPanel').show();
        $('#add-hotelPanel').hide();
        $('#consultationPanel').hide();
    });
    $('#add-hotel').click(function () {
        line($(this));
        _hashState('#add-hotel');
        $('#promotionPanel').hide();
        $('#informersPanel').hide();
        $('#add-hotelPanel').show();
        $('#consultationPanel').hide();
    });
    $('#consultation').click(function () {
        line($(this));
        _hashState('#consultation');
        $('#promotionPanel').hide();
        $('#informersPanel').hide();
        $('#add-hotelPanel').hide();
        $('#consultationPanel').show();
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

    var _hashState = function(_hash) {
        if(history.pushState) {
            history.pushState(null, null, _hash);
        }
        else {
            location.hash = _hash;
        }
    };


    if(!window.location.hash)
        $('.tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange',function(){
        $(window.location.hash).click();
    });


});
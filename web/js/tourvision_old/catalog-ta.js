'use strict';

jQuery(document).ready(function($){
    $('#touragents').click(function () {
        line($(this));
        _hashState('#touragents');
        $('#touragentsPanel').show();
        $('#travelAgencyPanel').hide();
        $('#mapPanel').hide();
        $('#citiesPanel').hide();
    });

    $('#travelAgency').click(function () {
        line($(this));
        _hashState('#travelAgency');
        $('#touragentsPanel').hide();
        $('#travelAgencyPanel').show();
        $('#mapPanel').hide();
        $('#citiesPanel').hide();
    });

    $('#map').click(function () {
        line($(this));
        _hashState('#map');
        $('#touragentsPanel').hide();
        $('#travelAgencyPanel').hide();
        $('#mapPanel').show();
        $('#citiesPanel').hide();
    });
    $('#cities').click(function () {
        line($(this));
        _hashState('#cities');
        $('#touragentsPanel').hide();
        $('#travelAgencyPanel').hide();
        $('#mapPanel').hide();
        $('#citiesPanel').show();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.catalog-ta__line');
        $('.catalog-ta-tab').removeClass('active');
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
        $('.catalog-ta-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange',function(){
        $(window.location.hash).click();
    });

    $('.js-touragents-tab').on('click', function (e) {
        e.preventDefault();
        $('#touragents').addClass('active');
        $('#cities').removeClass('active');
        $(this).closest('.panel').hide();
        $('#touragentsPanel').show();
        $('.catalog-ta__line').clearQueue().animate({
            left: $('#touragents').position().left,
            width: $('#touragents').position()
        }, 300);
    });

});



jQuery(document).ready(function($) {

    $(function () {
        $('.popup-modal').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
        $('.popup-modal').on('click', function () {
            $('html').css('margin-right', '17px');
        });
        $(document).on('click', '.map-pp__close', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });


    $(function () {
        $('.metro-modal').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
        $('.metro-modal').on('click', function () {
            $('html').css('margin-right', '17px');
        });
        $(document).on('click', '.subway-pp__close', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });
});

$(function () {
    $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

$(document).ready(function(){
    $('select[name="filter"]').SumoSelect();
});



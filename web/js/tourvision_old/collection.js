'use strict';

jQuery(document).ready(function($){
    $('#mySet').click(function () {
        line($(this));
        _hashState('#mySet');
        $('#mySetPanel').show();
        $('#paramsSetPanel').hide();
        $('#regionsCountriesPanel').hide();
        $('#hotelsParamsPanel').hide();
        $('#otherParamsPanel').hide();
        $('#directionsPanel').hide();
    });

    $('#paramsSet').click(function () {
        line($(this));
        _hashState('#paramsSet');
        $('#mySetPanel').hide();
        $('#paramsSetPanel').show();
        $('#regionsCountriesPanel').hide();
        $('#hotelsParamsPanel').hide();
        $('#otherParamsPanel').hide();
        $('#directionsPanel').hide();
    });

    $('#regionsCountries').click(function () {
        line($(this));
        _hashState('#regionsCountries');
        $('#mySetPanel').hide();
        $('#paramsSetPanel').hide();
        $('#regionsCountriesPanel').show();
        $('#hotelsParamsPanel').hide();
        $('#otherParamsPanel').hide();
        $('#directionsPanel').hide();
    });

    $('#hotelsParams').click(function () {
        line($(this));
        _hashState('#hotelsParams');
        $('#mySetPanel').hide();
        $('#paramsSetPanel').hide();
        $('#regionsCountriesPanel').hide();
        $('#hotelsParamsPanel').show();
        $('#otherParamsPanel').hide();
        $('#directionsPanel').hide();
    });

    $('#otherParams').click(function () {
        line($(this));
        _hashState('#otherParams');
        $('#mySetPanel').hide();
        $('#paramsSetPanel').hide();
        $('#regionsCountriesPanel').hide();
        $('#hotelsParamsPanel').hide();
        $('#otherParamsPanel').show();
        $('#directionsPanel').hide();
    });

    $('#directions').click(function () {
        line($(this));
        _hashState('#directions');
        $('#mySetPanel').hide();
        $('#paramsSetPanel').hide();
        $('#regionsCountriesPanel').hide();
        $('#hotelsParamsPanel').hide();
        $('#otherParamsPanel').hide();
        $('#directionsPanel').show();
    });

    $('#addNewSet').click(function (e) {
        e.preventDefault();
        _hashState('#regionsCountriesPanel');
        $('.set-tab').removeClass('active');
        $('#paramsSet').removeClass('hidden').addClass('active');
        $('#paramsSetPanel').show();
        $('#mySetPanel').hide();

        var width = $('#paramsSet').width();
        var pos = $('#paramsSet').position().left;
        var el = $('.set-line');
        el.clearQueue().animate({
            left: pos,
            width: width
        }, 300);
    });


    $('#setStep2').click(function (e) {
        e.preventDefault();
        if ($('input[id="coltype2"]').prop('checked')) {
            _hashState('#otherParamsPanel');
            $('.set-tab').removeClass('active');
            $('#otherParams').removeClass('hidden').addClass('active');
            $('#otherParamsPanel').show();
            $('#paramsSetPanel').hide();

            var width = $('#otherParams').width();
            var pos = $('#otherParams').position().left;
            var el = $('.set-line');
            el.clearQueue().animate({
                left: pos,
                width: width
            }, 300);
        } else {
            _hashState('#regionsCountries');
            $('.set-tab').removeClass('active');
            $('#regionsCountries').removeClass('hidden').addClass('active');
            $('#regionsCountriesPanel').show();
            $('#paramsSetPanel').hide();

            var width = $('#regionsCountries').width();
            var pos = $('#regionsCountries').position().left;
            var el = $('.set-line');
            el.clearQueue().animate({
                left: pos,
                width: width
            }, 300);
        }

    });

    $('#setStep3').click(function (e) {
        e.preventDefault();
        _hashState('#hotelsParams');
        $('.set-tab').removeClass('active');
        $('#hotelsParams').removeClass('hidden').addClass('active');
        $('#hotelsParamsPanel').show();
        $('#regionsCountriesPanel').hide();

        var width = $('#hotelsParams').width();
        var pos = $('#hotelsParams').position().left;
        var el = $('.set-line');
        el.clearQueue().animate({
            left: pos,
            width: width
        }, 300);
    });



    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.set-line');
        $('.set-tab').removeClass('active');
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
        $('.set-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange',function(){
        $(window.location.hash).click();
    });







});

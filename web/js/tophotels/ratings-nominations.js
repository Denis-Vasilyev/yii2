$(document).ready(function () {
    $('#ratings').click(function () {
        line($(this));
        _hashState('#ratings');
        $('#ratingsPanel').show();
        $('#topPanel').hide();
        $('#collectionsPanel').hide();
        $('#anonsPanel').hide();
        $('#collectionPanel').hide();
    });
    $('#top').click(function () {
        line($(this));
        _hashState('#top');
        $('#ratingsPanel').hide();
        $('#topPanel').show();
        $('#collectionsPanel').hide();
        $('#anonsPanel').hide();
        $('#collectionPanel').hide();
    });
    $('#collections').click(function () {
        line($(this));
        _hashState('#collections');
        $('#ratingsPanel').hide();
        $('#topPanel').hide();
        $('#collectionsPanel').show();
        $('#anonsPanel').hide();
        $('#collectionPanel').hide();
    });
    $('#anons').click(function () {
        line($(this));
        _hashState('#anons');
        $('#ratingsPanel').hide();
        $('#topPanel').hide();
        $('#collectionsPanel').hide();
        $('#anonsPanel').show();
        $('#collectionPanel').hide();
    });
    $('#collection').click(function () {
        line($(this));
        _hashState('#collection');
        $('#ratingsPanel').hide();
        $('#topPanel').hide();
        $('#collectionsPanel').hide();
        $('#anonsPanel').hide();
        $('#collectionPanel').show();
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


    $('.filter-big--add-anons  .bth__ta').on('focus', function () {
        $(this).closest('.bth__ta-block').addClass('active')
    });
    $('.filter-big--add-anons  .bth__ta').on('blur', function () {
        $(this).closest('.bth__ta-block').removeClass('active')
    });

    $('.collectionsSection__arr').on('click' , function () {
        $(this).closest('.collectionsSection__item').find('.js-full-info').toggle();
        $(this).closest('.collectionsSection__item').find('.js-short-info').toggle();
        $(this).toggleClass('active');
    }) ;

    $('.js-show-full').on('click' , function () {
        $(this).toggle();
        $(this).next().toggle();

    });
    $('.js-hide-full').on('click' , function () {
        $(this).closest('.collectionsSection__item').find('.js-full-info').toggle();
        $(this).closest('.collectionsSection__item').find('.js-short-info').toggle();

    })

});
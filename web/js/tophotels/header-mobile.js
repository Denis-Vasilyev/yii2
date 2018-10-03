$(document).ready(function () {

    $('.header-lang__block').on('click', function () {
        $('.header-lang__dropdown').toggleClass('active');
        $('.header-lang__arr ').toggleClass('active');
    });

    $('.header-lang .header-lang__dropdown').on('click', function () {
        $(this).removeClass('active');
        $('.header-lang__arr ').removeClass('active');
    });

    $('.header-lang__lang').on('click', function () {
        var def = $(this).closest('.headerMobile').find('.header-lang__cnt').text();
        var selected = $(this).text();
        $(this).closest('.headerMobile').find('.header-lang__cnt').text(selected);
        $(this).text(def)
    });
    $('.js-show-searchDesct').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest('.headerYellow-line__bubbles').find('.headerYellow-line__bubble-search').toggleClass('active');
        $(this).closest('.headerYellow-line__bubbles').find('.js-hidden').toggle()
    });


    $('.headerMobile__select').on('click', function () {
        $(this).find('.headerMobile__select-drop').toggle();
        $(this).find('.headerMobile__select-arr').toggleClass('active')
    });

    $('.headerMobile__select-drop li').on('click', function () {
        var def = $(this).closest('.headerMobile__select').find('.headerMobile__select-choice span').text();
        var selected = $(this).text();
        $(this).closest('.headerMobile__select').find('.headerMobile__select-choice span').text(selected);
        $(this).text(def);
        $(this).find('.headerMobile__select-arr').removeClass('active')
    });

    $('.headerMobile .js-show-search').on('click', function () {
        $(this).addClass('active');
        $(this).closest('.page').find('.suggest-big').show();
        $(this).closest('.page').find('.leftbar-close').show();
        $(this).closest('.page').find('.topline-hotel-big__breadcrumbs').show();
        $(this).closest('.headerMobile').find('.header-lang').hide();
        $(this).closest('.page').find('.headerMobile__bth--auth').removeClass('active');
        $(this).closest('.headerMobile').find('.headerMobile__burger').removeClass('active');
        $(this).closest('.headerMobile').find('.registration-form').hide();
        $(this).closest('.page').find('.footer').show();
        $(this).closest('.page').find('.content').show();
        $(this).closest('.page').find('.leftbar').hide();
        $('.headerMobile__navigation').removeClass('active');
        $(this).closest('.page').find('.headerMobile__registration').hide();
    });

    $('.headerMobile__burger').on('click', function () {
        $(this).closest('.page').find('.leftbar').show();
        $(this).closest('.headerMobile').find('.header-lang').hide();
        $(this).closest('.headerMobile').find('.headerMobile__line').addClass('active');
        $(this).closest('.headerMobile').find('.headerMobile__burger').addClass('active');
        $(this).closest('.page').find('.content').hide();
        $(this).closest('.page').find('.topline-hotel-big').hide();
        $(this).closest('.page').find('.footer').hide();
        $(this).closest('.page').find('.leftbar-close').show();
        $(this).closest('.headerMobile').find('.registration-form').hide();
        $(this).closest('.page').find('.headerMobile__bth--auth').removeClass('active');
        $(this).closest('.page').find('.js-show-search').removeClass('active');
        $(this).closest('.headerMobile').find('.headerMobile__search').hide();
        $(this).closest('.page').find('.topline-hotel-big__breadcrumbs').hide();
        $('.headerMobile__navigation').addClass('active');
    });


    $('.headerMobile__bth--auth').on('click', function () {

        $(this).closest('.page').find('.leftbar').hide();
        $(this).addClass('active');
        $(this).closest('.headerMobile').find('.header-lang').hide();
        $(this).closest('.headerMobile').find('.headerMobile__line').addClass('active');
        $(this).closest('.headerMobile').find('.headerMobile__burger').removeClass('active');
        $(this).closest('.page').find('.content').hide();
        $(this).closest('.page').find('.topline-hotel-big').hide();
        $(this).closest('.page').find('.footer').hide();
        $(this).closest('.page').find('.leftbar-close').show();
        $(this).closest('.page').find('.headerMobile__bth--auth').addClass('active');
        $(this).closest('.page').find('.js-show-search').removeClass('active');
        $(this).closest('.headerMobile').find('.headerMobile__search').hide();
        $(this).closest('.page').find('.topline-hotel-big__breadcrumbs').hide();
        $('.headerMobile__navigation').removeClass('active');
        $(this).closest('.page').find('.headerMobile__registration').show();
        $(this).closest('.page').find('.suggest-big').hide();
    });


    $('.leftbar-close').on('click', function () {
        $(this).closest('.headerMobile').find('.header-lang').show();
        $(this).closest('.page').find('.leftbar').hide();
        $(this).closest('.headerMobile').find('.headerMobile__line').removeClass('active');
        $(this).closest('.headerMobile').find('.headerMobile__burger').removeClass('active');
        $(this).closest('.page').find('.content').show();
        $(this).closest('.page').find('.footer').show();
        $(this).closest('.page').find('.leftbar-close').hide();
        $(this).closest('.page').find('.topline-hotel-big').show();
        $(this).closest('.headerMobile').find('.registration-form').hide();
        $(this).closest('.page').find('.topline-hotel-big__breadcrumbs').show();
        $(this).closest('.headerMobile').find('.headerMobile__stat').hide();
        $(this).closest('.headerMobile').find('.headerMobile__search').hide();
        $(this).closest('.page').find('.headerMobile__bth--auth').removeClass('active');
        $(this).closest('.page').find('.js-show-search').removeClass('active');
        $(this).closest('.headerMobile').find('.headerMobile__select').hide();
        $(this).closest('.page').find('.suggest-big').hide();
        $('.headerMobile__navigation').removeClass('active');
        $(this).closest('.page').find('.headerMobile__registration').hide();

    });


    $('.js-show-auth-link').on('click', function () {
        $(this).closest('header').find('.header-top-nav-list li:not(:first-of-type)').hide()
        $(this).closest('header').find('.header-top-nav-list li:first-of-type').show()

        $(this).hide()
    });
    $('.js-show-auth').on('click', function () {
        $(this).prev().show();
        $(this).hide()
    });
    $('.js-show-key-block').on('click', function () {
        $(this).prev().show();
        $(this).hide();
        $('.headerMobile__right-auth').hide();
        $('.headerMobile__right-noAuth').show()

    });
    $('.headerMobile__registration-eye').on('click', function () {
        $(this).toggleClass('active');

    });


    $('#menuCurrent').on('click', function () {
        $('.leftbar').show();
        $('.header__mobile-search').hide();

        $(this).next().removeClass('active');
        $(this).addClass('active');
        $('.header-cnt.header-cnt_index').hide();
        $('.header-nav').hide();

    });

    $('#menuMain').on('click', function () {
        $('.leftbar').hide();
        $('.header__mobile-search').hide();

        $('.header-cnt.header-cnt_index').show();
        $('.header-nav').show();
        $(this).prev().removeClass('active');
        $(this).addClass('active')

    });
    $('.hotelFilter .bth__inp-block--big').on('click', function () {

        $(this).next('.formDirections').show()
    });


    //авторизация
    $('#authorization').click(function () {
        line($(this));
        _hashState('#authorization');
        $('#authorizationPanel').show();
        $('#registrationPanel').hide();

        $('#reqLastPanel').hide();
    });

    $('#registration').click(function () {
        line($(this));
        _hashState('#registration');
        $('#authorizationPanel').hide();
        $('#registrationPanel').show();

        $('#reqLastPanel').hide();
    });


    $('#reqLast').click(function () {
        line($(this));
        _hashState('#reqLast');
        $('#authorizationPanel').hide();
        $('#registrationPanel').hide();

        $('#reqLastPanel').show();
    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.line--reg');
        $('.tab--reg').removeClass('active');
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


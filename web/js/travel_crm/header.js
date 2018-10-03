$(function () {

    $('.js-show-auth').on('click', function () {
        $(this).next().show();
        $(this).hide()


    });
    $('.header__mobile-cross').on('click', function () {
        $('.content-left').hide();
        $(this).hide();
        $('#headerBurger').prop('checked', false);
        $('.header__mobile-navigation').removeClass('active');
        $('.site-nav').hide();
        $('#menuCurrent').addClass('active');
        $('#menuMain').removeClass('active');

    });


    $('input.header-bubble__inp').on('change', function () {
        if ($('#headerBurger').prop('checked')) {
            $('.content-left').show();
            $('.header__mobile-cross').show();
            $('.header__mobile-search').hide();

            $('.header__mobile-navigation').addClass('active');
        }

    });

    $('#menuCurrent').on('click', function () {
        $('.content-left').show();
        $('.header__mobile-search').hide();

        $(this).next().removeClass('active');
        $(this).addClass('active');
        $('.site-nav').hide();

    });

    $('#menuMain').on('click', function () {
        $('.content-left').hide();
        $('.header__mobile-search').hide();

        $('.site-nav').show();
        $(this).prev().removeClass('active');
        $(this).addClass('active')

    })


});


$(document).ready(function () {
    $('.formDirections__bottom-close, .formDirections__close-red').on('click', function () {
        $(this).closest('.formDirections').hide()
    });



    $('.formDirections .js-act-country').on('click', function () {
        $(this).closest('.formDirections').find('.js-search-country').show();
        $(this).closest('.formDirections').find('.js-search-city').hide();
        $(this).closest('.formDirections').find('.js-search-hotels').hide();
        $(this).addClass('active');
        $('.js-act-city').removeClass('active');
        $('.js-act-hotels').removeClass('active');
    });
    $('.formDirections  .js-act-city').on('click', function () {
        $(this).closest('.formDirections').find('.js-search-country').hide();
        $(this).closest('.formDirections').find('.js-search-city').show();
        $(this).closest('.formDirections').find('.js-search-hotels').hide();


        $(this).addClass('active');
        $('.js-act-country').removeClass('active');
        $('.js-act-hotels').removeClass('active');
    });
    $('.formDirections  .js-act-hotels').on('click', function () {
        $(this).closest('.formDirections').find('.js-search-country').hide();
        $(this).closest('.formDirections').find('.js-search-city').hide();
        $(this).closest('.formDirections').find('.js-search-hotels').show();


        $(this).addClass('active');
        $('.js-act-country').removeClass('active');
        $('.js-act-city').removeClass('active');
    });
    $('.formDirections .formDirections__arr').on('click', function () {
        $(this).closest('.formDirections__city').find('.formDirections__drop-city').toggle();
        $(this).toggleClass('active')
    });


    $('.js-show-formDirections').on('click', function () {
        $(this).next('.formDirections').show()
    });
    $('.js-show-flag').on('click', function () {
        $('.js-act-hide-flag').hide();
        $('.bth__inp-flag').addClass('d-ib')
    });

});

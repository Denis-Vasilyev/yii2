$(document).ready(function () {

    $('#hotelDescription').click(function () {
        line($(this));
        _hashState('#hotelDescription');
        $('#hotelDescriptionPanel').show();
        $('#v0DescriptionPanel').hide();
        $('#v1DescriptionPanel').hide();
        $('#v2DescriptionPanel').hide();
        $('#v3DescriptionPanel').hide();
        $('#hotelInfraPanel').hide();
        $('#hotelRoomPanel').hide();
        $('#dopInfoPanel').hide();
        $('#hotelContactsPanel').hide();
    });

    $('#v0Description').click(function () {
        line($(this));
        _hashState('#v0Description');
        $('#hotelDescriptionPanel').hide();
        $('#v0DescriptionPanel').show();
        $('#v1DescriptionPanel').hide();
        $('#v2DescriptionPanel').hide();
        $('#v3DescriptionPanel').hide();
        $('#hotelRoomPanel').hide();
        $('#hotelInfraPanel').hide();
        $('#dopInfoPanel').hide();
        $('#hotelContactsPanel').hide();
    });
    $('#v1Description').click(function () {
        line($(this));
        _hashState('#v1Description');
        $('#hotelDescriptionPanel').hide();
        $('#v0DescriptionPanel').hide();
        $('#v1DescriptionPanel').show();
        $('#v2DescriptionPanel').hide();
        $('#v3DescriptionPanel').hide();
        $('#hotelRoomPanel').hide();
        $('#hotelInfraPanel').hide();
        $('#dopInfoPanel').hide();
        $('#hotelContactsPanel').hide();
        $(this).closest('.page').find('.tabs-bar__ava-noAuth').show()
    });

    $('#v2Description').click(function () {
        line($(this));
        _hashState('#v2Description');
        $('#hotelDescriptionPanel').hide();
        $('#v0DescriptionPanel').hide();
        $('#v1DescriptionPanel').hide();
        $('#v2DescriptionPanel').show();
        $('#v3DescriptionPanel').hide();
        $('#hotelRoomPanel').hide();
        $('#hotelInfraPanel').hide();
        $('#dopInfoPanel').hide();
        $('#hotelContactsPanel').hide();
    });

    $('#v3Description').click(function () {
        line($(this));
        _hashState('#v3Description');
        $('#hotelDescriptionPanel').hide();
        $('#v0DescriptionPanel').hide();
        $('#v1DescriptionPanel').hide();
        $('#v2DescriptionPanel').hide();
        $('#v3DescriptionPanel').show();
        $('#hotelRoomPanel').hide();
        $('#hotelInfraPanel').hide();
        $('#dopInfoPanel').hide();
        $('#hotelContactsPanel').hide();
    });


    $('#hotelRoom').click(function () {
        line($(this));
        _hashState('#hotelRoom');
        $('#hotelDescriptionPanel').hide();
        $('#v0DescriptionPanel').hide();
        $('#v1DescriptionPanel').hide();
        $('#v2DescriptionPanel').hide();
        $('#v3DescriptionPanel').hide();
        $('#hotelRoomPanel').show();
        $('#hotelInfraPanel').hide();
        $('#dopInfoPanel').hide();
        $('#hotelContactsPanel').hide();
    });

    $('#hotelInfra').click(function () {
        line($(this));
        _hashState('#hotelInfra');
        $('#hotelDescriptionPanel').hide();
        $('#v0DescriptionPanel').hide();
        $('#v1DescriptionPanel').hide();
        $('#v2DescriptionPanel').hide();
        $('#v3DescriptionPanel').hide();
        $('#hotelRoomPanel').hide();
        $('#hotelInfraPanel').show();
        $('#dopInfoPanel').hide();
        $('#hotelContactsPanel').hide();
    });
    $('#dopInfo').click(function () {
        line($(this));
        _hashState('#dopInfo');
        $('#hotelDescriptionPanel').hide();
        $('#v0DescriptionPanel').hide();
        $('#v1DescriptionPanel').hide();
        $('#v2DescriptionPanel').hide();
        $('#v3DescriptionPanel').hide();
        $('#hotelRoomPanel').hide();
        $('#hotelInfraPanel').hide();
        $('#dopInfoPanel').show();
        $('#hotelContactsPanel').hide();
    });
    $('#hotelContacts').click(function () {
        line($(this));
        _hashState('#hotelContacts');
        $('#hotelDescriptionPanel').hide();
        $('#v0DescriptionPanel').hide();
        $('#v1DescriptionPanel').hide();
        $('#v2DescriptionPanel').hide();
        $('#v3DescriptionPanel').hide();
        $('#hotelRoomPanel').hide();
        $('#hotelInfraPanel').hide();
        $('#dopInfoPanel').hide();
        $('#hotelContactsPanel').show();
    });


// Плавающий блок с табом на адаптиве

    var tabsBarPosition = $('.tabs-block--hotelDescr .tabs-bar').offset().top;

    $('.tabs-block--hotelDescr .tabs-bar .tab').on('click', function () {
        if ($(this).closest(".tabs-bar.fixed").length) {
            $(this).closest(".tabs-bar").removeClass('fixed');
            $('html, body').scrollTop(tabsBarPosition);
        }
    });


    $('.tab').on('click', function () {
        $('.tabs-block--hotelDescr .tabs-bar').removeClass('fixed');
    });
    $('.tabs-bar__burger').on('click', function () {
        $('html, body').scrollTop(0);
        $('.headerMobile__burger').click()
    });

    var hRegLB = $('.position-tracking').offset().top;
    $(window).scroll(function () {
        if ($(this).scrollTop() > hRegLB) {
            $('.tabs-block--hotelDescr .tabs-bar').addClass('fixed');
        } else {
            $('.tabs-block--hotelDescr .tabs-bar').removeClass('fixed');
        }
    });

    /* //карусель
    if ($(window).width() <= 685) {
        var sliderPhotoConfig = [
            {
                breakpoint: 517,
                settings: {slidesToShow: 5}
            },
            {
                breakpoint: 398,
                settings: {slidesToShow: 4}
            }

        ];


        var slide = $('.hotel-descr-carousel .slider').slick({
            centerPadding: '5px',
            slidesToShow: 6,
            slidesToScroll: 6,
            prevArrow: '<span class="slick-prev service__prev "></span>',
            nextArrow: '<span class="slick-prev service__next "></span>',

            responsive: sliderPhotoConfig
        });


    } else {
        slide({
            settings: "unslick" // destroys slick
        });
    }*/


});


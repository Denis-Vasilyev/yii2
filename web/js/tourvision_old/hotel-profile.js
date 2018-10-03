"use strict";

jQuery(document).ready(function ($) {
    $('#hotelPrisecFly').click(function () {
        line($(this));
        _hashState('#hotelPrisecFly');
        $('#hotelPrisecFlyPanel').show();
        $('#hotelRoomsPanel').hide();
        $('#hotelMonitoringPanel').hide();
        $('#hotelMoreOldPanel').hide();
        $('#hotelOperatorPanel').hide();
    });

    $('#hotelRooms').click(function () {
        line($(this));
        _hashState('#hotelRooms');
        $('#hotelPrisecFlyPanel').hide();
        $('#hotelRoomsPanel').show();
        $('#hotelMonitoringPanel').hide();
        $('#hotelMoreNewPanel').hide();
        $('#hotelMoreOldPanel').hide();
        $('#hotelOperatorPanel').hide();
    });

    $('#hotelMonitoring').click(function () {
        line($(this));
        _hashState('#hotelMonitoring');
        $('#hotelPrisecFlyPanel').hide();
        $('#hotelRoomsPanel').hide();
        $('#hotelMonitoringPanel').show();
        $('#hotelMoreOldPanel').hide();
        $('#hotelOperatorPanel').hide();
        $('#hotelMoreNewPanel').hide();
    });

    $('#hotelMoreOld').click(function () {
        line($(this));
        _hashState('#hotelMoreOld');
        $('#hotelPrisecFlyPanel').hide();
        $('#hotelRoomsPanel').hide();
        $('#hotelMonitoringPanel').hide();
        $('#hotelMoreOldPanel').show();
        $('#hotelOperatorPanel').hide();
        $('#hotelMoreNewPanel').hide();
    });
    $('#hotelOperator').click(function () {
        line($(this));
        _hashState('#hotelOperator');
        $('#hotelPrisecFlyPanel').hide();
        $('#hotelRoomsPanel').hide();
        $('#hotelMonitoringPanel').hide();
        $('#hotelMoreOldPanel').hide();
        $('#hotelOperatorPanel').show();
        $('#hotelMoreNewPanel').hide();
    });
    $('#hotelMoreNew').click(function () {
        line($(this));
        _hashState('#hotelMoreNew');
        $('#hotelPrisecFlyPanel').hide();
        $('#hotelRoomsPanel').hide();
        $('#hotelMonitoringPanel').hide();
        $('#hotelMoreOldPanel').hide();
        $('#hotelOperatorPanel').hide();
        $('#hotelMoreNewPanel').show();
    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.hotel-line');
        $('.hotel-tab').removeClass('active');
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

    $('.js-show-operatop').on('click', function () {
        $(this).text('Туроператор Natalie Tours')
        return false
    });
    $('.js-close-changePrice').on('click', function () {
        $(this).closest('div').hide('')
    });
    $('.bokingDetail-block-top__heart').on('click', function () {
        $(this).toggleClass('active')
        return false
    });
    $('.js-label').on('focus', function () {
        $(this).next('.bth__inp-lbl').addClass('active');
    });

    $('.js-label').on('blur', function () {
        if ($(this).val().trim() === '') {
            $(this).next('.bth__inp-lbl').removeClass('active');
        }
    });


    $('.js-label').on('change', function () {
        $('.js-label').each(function () {
            if ($(this).val().length) {
                $(this).next('.bth__inp-lbl').addClass('active');
            }
        });
    });

    $('.js-label').change();
    if (!window.location.hash)
        $('.hotel-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange', function () {
        $(window.location.hash).click();
    });

    var sliderPhotoConfig = [
        {
            breakpoint: 1920,
            settings: {slidesToShow: 8}
        },
        {
            breakpoint: 1750,
            settings: {slidesToShow: 7}
        },
        {
            breakpoint: 1520,
            settings: {slidesToShow: 6}
        },
        {
            breakpoint: 1320,
            settings: {slidesToShow: 5}
        },
        {
            breakpoint: 1220,
            settings: {slidesToShow: 4}
        },
        {
            breakpoint: 1024,
            settings: {slidesToShow: 3}
        },
        {
            breakpoint: 600,
            settings: {slidesToShow: 2}
        },
        {
            breakpoint: 470,
            settings: {slidesToShow: 1}
        }
    ];

    $('.slider').slick({
        centerMode: true,
        centerPadding: '55px',
        slidesToShow: 6,
        adaptiveHeight: true,
        infinite: true,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: sliderPhotoConfig
    });


    window.chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(201, 203, 207)'
    };
    var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var color = Chart.helpers.color;
    var barChartData = {
        labels: ["13.01", "14.01", "15.01", "16.01", "17.01", "18.01", "19.01", "20.01", "21.01", "22.01", "23.01", "24.01", "25.01", "26.01"],
        datasets: [{
            label: 'Dataset 1',
            backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
            borderColor: window.chartColors.red,
            borderWidth: 1,
            data: [
                40706, 5638, 25131, 30255, 28001, 12210
            ]
        }]
    };


    // загрузка
    window.onload = function () {
        var ctx3 = document.getElementById("canvas").getContext("2d");
        window.myBar = new Chart(ctx3, {
            type: 'bar',
            data: barChartData,
            options: {
                responsive: true,
                legend: {
                    position: 'top'
                },
                title: {
                    display: true
                }
            }
        });
    };
    $('.p-agreement-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('.p-agreement-pp').on('click', function () {
        $('html').css('overflow', 'hidden');
        $('#agreement').click()
    });
    $('.p-agreement-pp.role-site').on('click', function () {
        $('#siteRole').click()
    });


});
$(window).scroll(function () {
    var hRegLB = $('.bokingDetail-content__right-wrap .js-observe-scroll').offset().top;
    if (hRegLB !== 0 && $(this).scrollTop() > hRegLB) {
        $('.bokingDetail-content__right').addClass('fixed');
    } else {
        $('.bokingDetail-content__right').removeClass('fixed');
    }
});
$(function () {
    $('#agreement').click(function () {
        line($(this));
        _hashState('#agreement');
        $('#agreementPanel').show();
        $('#siteRolePanel').hide();
    });
    $('#siteRole').click(function () {
        line($(this));
        _hashState('#siteRole');
        $('#agreementPanel').hide();
        $('#siteRolePanel').show();
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
    $('.share-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('.filter-pp__close').on('click', function () {
        $.magnificPopup.close();
    });

});
$(document).on('click', '.agreement-pp__close', function () {
    $.magnificPopup.close();
});


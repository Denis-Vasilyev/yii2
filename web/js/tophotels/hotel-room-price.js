$(document).ready(function () {
    $('#roomPrice').click(function () {
        line($(this));
        _hashState('#roomPrice');
        $('#roomPricePanel').show();
        $('#roomAviaticketPanel').hide();
        $('#monitoringPricesPanel').hide();
        $('#operatorsPricePanel').hide();
        $('#bookRequestPanel').hide();
        $('#bookDetailPanel').hide();
    });

    $('#roomAviaticket').click(function () {
        line($(this));
        _hashState('#roomAviaticket');
        $('#roomPricePanel').hide();
        $('#roomAviaticketPanel').show();
        $('#monitoringPricesPanel').hide();
        $('#operatorsPricePanel').hide();
        $('#bookRequestPanel').hide();
        $('#bookDetailPanel').hide();
    });

    $('#monitoringPrices').click(function () {
        line($(this));
        _hashState('#monitoringPrices');
        $('#roomPricePanel').hide();
        $('#roomAviaticketPanel').hide();
        $('#monitoringPricesPanel').show();
        $('#operatorsPricePanel').hide();
        $('#bookRequestPanel').hide();
        $('#bookDetailPanel').hide();
    });

    $('#operatorsPrice').click(function () {
        line($(this));
        _hashState('#operatorsPrice');
        $('#roomPricePanel').hide();
        $('#roomAviaticketPanel').hide();
        $('#monitoringPricesPanel').hide();
        $('#operatorsPricePanel').show();
        $('#bookRequestPanel').hide();
        $('#bookDetailPanel').hide();
    });

    $('#bookRequest').click(function () {
        line($(this));
        _hashState('#bookRequest');
        $('#roomPricePanel').hide();
        $('#roomAviaticketPanel').hide();
        $('#monitoringPricesPanel').hide();
        $('#operatorsPricePanel').hide();
        $('#bookRequestPanel').show();
        $('#bookDetailPanel').hide();
    });

    $('#bookDetail').click(function () {
        line($(this));
        _hashState('#bookDetail');
        $('#roomPricePanel').hide();
        $('#roomAviaticketPanel').hide();
        $('#monitoringPricesPanel').hide();
        $('#operatorsPricePanel').hide();
        $('#bookRequestPanel').hide();
        $('#bookDetailPanel').show();

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

    $('#jsOpenGuestCtrl').on('click', function () {
        $(this).next('.guest-room__ctrl').show();
        $(this).prev('.inp-arr').addClass('active');

    });

    $('#jsGuestCtrlClose').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.guest-room__ctrl').hide();
        $(this).closest('.bth__inp-block').find('.inp-arr').removeClass('active');
    });

    $('#jsOpenGuestCtrl2').on('click', function () {
        $(this).next('.guest-room__ctrl').show();
        $(this).prev('.inp-arr').addClass('active');

    });

    $('#jsGuestCtrlClose2').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.guest-room__ctrl').hide();
        $(this).closest('.bth__inp-block').find('.inp-arr').removeClass('active');
    });
    $('.bokingDetail-block-top__heart').on('click', function () {
        $(this).toggleClass('active')
        return false
    });

    $('#jsOpenGuestCtrl3').on('click', function () {
        $(this).next('.guest-room__ctrl').show();
        $(this).prev('.inp-arr').addClass('active');

    });

    $('#jsGuestCtrlClose3').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.guest-room__ctrl').hide();
        $(this).closest('.bth__inp-block').find('.inp-arr').removeClass('active');
    });

    $('#jsOpenGuestCtrl4').on('click', function () {
        $(this).closest('.bth__inp-block').find('.guest-room__ctrl').show();
        $(this).prev('.inp-arr').addClass('active');

    });

    $('#jsGuestCtrlClose4').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.guest-room__ctrl').hide();
        $(this).closest('.bth__inp-block').find('.inp-arr').removeClass('active');
    });

    $('.jsOpenNightCtrl').on('click', function () {
        $(this).next('.night-room__ctrl').show();
        $(this).prev('.inp-arr').addClass('active');

    });

    $('.jsNightCtrlClose').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.night-room__ctrl').hide();
        $(this).closest('.bth__inp-block').find('.inp-arr').removeClass('active');
    });

    $('select[name="roomType"]').SumoSelect({
        search: true,
        searchText: ' ',
        noMatch: 'Нет совпадений',
        placeholder: 'Тип номера'
    });
    $('select[name="roomCity"]').SumoSelect({
        search: true,
        searchText: ' ',
        noMatch: 'Нет совпадений',
        placeholder: 'Город вылета'
    });

    $('#RequestDate').on('click', function () {
        if ($('input[id="RequestDate"]').val().trim() === '') {
            $('#RequestDateLbl').addClass('active');
        }
    });

    $('#RequestDate').on('change', function () {
        if ($('input[id="RequestDate"]').val().trim() === '') {
            $('#RequestDateLbl').removeClass('active');
        }
    });

    $('#jsOpenGuestCtrl3').on('click', function () {
        if ($('input[id="jsOpenGuestCtrl3"]').val().trim() === '') {
            $('#jsOpenGuestCtrlLbl3').addClass('active');
        }
        $(this).closest('.bth__inp-block').find('.guest-room__ctrl').show();
    });

    $('#jsOpenGuestCtrl3').on('change', function () {
        if ($('input[id="jsOpenGuestCtrl3"]').val().trim() === '') {
            $('#jsOpenGuestCtrlLbl3').removeClass('active');
        }
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

    $('.js-ta-room').on('focus', function () {
        $(this).closest('.bth__ta-block').css('height', '260px');
    });

    $('.js-ta-room').on('blur', function () {
        if ($(this).val().trim() === '') {
            $(this).closest('.bth__ta-block').css('height', '130px');
        }
    });


    $('.js-open-cur').on('click', function () {
        $(this).next('.current-pp').show();
        $(this).addClass('focus');
    });

    $('.js-current-val').on('click', function () {
        $(this).closest('.current-pp').hide();
        $(this).closest('.bth__inp-block').find('.price-current').removeClass('focus');
    });
    $('.bokingDetail-content__status-icons .bokingDetail-content__status-icon:first-of-type').on('click', function () {
        $(this).addClass('orange-ico');
        $(this).find('.bokingDetail-content__status-icon-txt').text('под запрос')
    });
    $('.bokingDetail-content__status-icons .bokingDetail-content__status-icon:nth-child(2)').on('click', function () {
        $(this).addClass('green-ico');
        $(this).find('.bokingDetail-content__status-icon-txt').text('есть места')
    });
    $('.bokingDetail-content__status-icons .bokingDetail-content__status-icon:last-of-type').on('click', function () {
        $(this).addClass('red-ico');
        $(this).find('.bokingDetail-content__status-icon-txt').text('нет мест')
    });
    $('.js-show-operatop').on('click', function () {
        $(this).text('Туроператор Natalie Tours')
        return false
    });
    $('.js-close-changePrice').on('click', function () {
        $(this).closest('div').hide('')
    });


    $('.avia-datepicker').datepicker({
        dateFormat: 'dd.mm.yy D'
    });


    $('.book-date_range').datepicker({
        range: 'period', // режим - выбор периода
        numberOfMonths: 2,
        dateFormat: 'dd.mm.yy D'
    });

    $('.share-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });


    $('.p-agreement-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('.p-agreement-pp').on('click', function () {
        $('html').css('overflow', 'hidden');
    });

    $('.p-agreement-pp.agree').on('click', function () {
        $('#agreement').click()
    });

    $('.p-agreement-pp.site-role').on('click', function () {
        $('#siteRole').click();
    });

});


$(window).scroll(function () {
    var hRegLB = $('.bokingDetail-content__right-wrap .js-observe-scroll').offset().top;
    if (hRegLB !== 0 && $(this).scrollTop() > hRegLB)  {
        $('.bokingDetail-content__right').addClass('fixed');
    } else {
        $('.bokingDetail-content__right').removeClass('fixed');
    }
});

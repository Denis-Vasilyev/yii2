$(document).ready(function () {
    $('#loyaltyProgram').click(function () {
        line($(this));
        _hashState('#loyaltyProgram');
        $('#loyaltyProgramPanel').show();
        $('#myStatusPanel').hide();
        $('#loyaltyDescrPanel').hide();
        $('#requestHotelPanel').hide();
        $('#request2HotelPanel').hide();
        $('#loyaltyProgramBonusPanel').hide();
        $('#loyaltyStatPanel').hide();
    });
    $('#myStatus').click(function () {
        line($(this));
        _hashState('#myStatus');
        $('#loyaltyProgramPanel').hide();
        $('#myStatusPanel').show();
        $('#loyaltyDescrPanel').hide();
        $('#requestHotelPanel').hide();
        $('#request2HotelPanel').hide();
        $('#loyaltyProgramBonusPanel').hide();
        $('#loyaltyStatPanel').hide();
    });
    $('#loyaltyDescr').click(function () {
        line($(this));
        _hashState('#loyaltyDescr');
        $('#loyaltyProgramPanel').hide();
        $('#myStatusPanel').hide();
        $('#loyaltyDescrPanel').show();
        $('#requestHotelPanel').hide();
        $('#request2HotelPanel').hide();
        $('#loyaltyProgramBonusPanel').hide();
        $('#loyaltyStatPanel').hide();
    });
    $('#requestHotel').click(function () {
        line($(this));
        _hashState('#requestHotel');
        $('#loyaltyProgramPanel').hide();
        $('#myStatusPanel').hide();
        $('#loyaltyDescrPanel').hide();
        $('#requestHotelPanel').show();
        $('#request2HotelPanel').hide();
        $('#loyaltyProgramBonusPanel').hide();
        $('#loyaltyStatPanel').hide();
    });
    $('#request2Hotel').click(function () {
        line($(this));
        _hashState('#request2Hotel');
        $('#loyaltyProgramPanel').hide();
        $('#myStatusPanel').hide();
        $('#loyaltyDescrPanel').hide();
        $('#requestHotelPanel').hide();
        $('#request2HotelPanel').show();
        $('#loyaltyProgramBonusPanel').hide();
        $('#loyaltyStatPanel').hide();
    });
    $('#loyaltyProgramBonus').click(function () {
        line($(this));
        _hashState('#loyaltyProgramBonus');
        $('#loyaltyProgramPanel').hide();
        $('#myStatusPanel').hide();
        $('#loyaltyDescrPanel').hide();
        $('#requestHotelPanel').hide();
        $('#request2HotelPanel').hide();
        $('#loyaltyProgramBonusPanel').show();
        $('#loyaltyStatPanel').hide();
    });
   $('#loyaltyStat').click(function () {
        line($(this));
        _hashState('#loyaltyStat');
        $('#loyaltyProgramPanel').hide();
        $('#myStatusPanel').hide();
        $('#loyaltyDescrPanel').hide();
        $('#requestHotelPanel').hide();
        $('#request2HotelPanel').hide();
        $('#loyaltyProgramBonusPanel').hide();
        $('#loyaltyStatPanel').show();
    });


    $('select[name="compliments"]').SumoSelect();
    $('select[name="birthdayDay"]').SumoSelect();
    $('select[name="birthdayMonth"]').SumoSelect();
    $('select[name="birthdayYear"]').SumoSelect();
    $('select[name="child"]').SumoSelect();


    $('input[name=bonusType]').on('click', function () {
        if ($('#bonusType2').prop('checked') || $('#bonusType3').prop('checked')) {
            $(this).closest('.panel').find('#birthdayRow').removeClass('hidden');
        } else {
            $(this).closest('.panel').find('#birthdayRow').addClass('hidden');
        }
    });

    $('.request-guest').on('click', function () {
        $('.request-guest__dropdown').removeClass('hidden');
        $(this).addClass('focus');
    });

    $('#requestGuestClose').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.request-guest__dropdown').addClass('hidden');
        $(this).closest('.request-guest__dropdown').addClass('adsadas');
        $(this).closest('.request-guest__block').find('.request-guest').removeClass('focus');
    });

    $('.js-request-ta').on('focus', function () {
        $(this).closest('.request__ta-block').css('height', 100);
    });

    $('.js-request-ta').on('blur', function () {
        if ($(this).val().length > 0) {
            $(this).closest('.request__ta-block').css('height', 100);
        } else {
            $(this).closest('.request__ta-block').css('height', 60);
        }
    });


    $('#jsLoyaltyCheck').on('click', function (e) {
        e.preventDefault();
        $('#jsLoyaltyCross').removeClass('hidden');
        $(this).addClass('hidden');
    });
    $('#jsLoyaltyCross').on('click', function (e) {
        e.preventDefault();
        $('#jsLoyaltyCheck').removeClass('hidden');
        $(this).addClass('hidden');
    });

});


$('.optWrapper').removeClass('isFloating');

$('#requestLoaderShow').on('click', function (e) {
    e.preventDefault();
    $('.request-overflow').show();
});

$(function () {
    $('.request-date-range').datepicker({
        range: 'period', // режим - выбор периода
        numberOfMonths: 2,
        dateFormat: "dd.mm.y D",
        onSelect: function (dateText, inst, extensionRange) {
            // extensionRange - объект расширения


            $('.request-date-range').val(extensionRange.startDateText + ' - ' + extensionRange.endDateText);
        }
    });

    $('.show-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('.show-modal').on('click', function () {
        $('.request-overflow').hide();
    });


});


$(document).on('click', '.close-modal', function () {
    $.magnificPopup.close();
});


$(function () {
    $('.service-description-open').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $(document).on('click', '.service-description-close', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

$(document).ready(function () {
    $('.description-loyalty__item').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 300);
    });


    $('input[name=booking]').on('click', function () {
        $('.bth__row.turoperator').hide();
        $('.bth__row.siteName').hide();
        if ($('#bookAg').prop('checked')) {
            $(this).closest('.request__tbl').find('.bth__row.turoperator').show();
        }
        if ($('#bookInet').prop('checked')) {
            $(this).closest('.request__tbl').find('.bth__row.siteName').show();
        }

    });


});


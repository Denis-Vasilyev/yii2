$(document).ready(function () {
    $('#hotelTypeReview').click(function () {
        line($(this));
        _hashState('#hotelTypeReview');
        $('#hotelTypeReviewPanel').show();
        $('#hotelServiceEvPanel').hide();
        $('#addPlus-step2Panel').hide();
        $('#hotelPlusMinusPanel').hide();
        $('#hotelRecommendPanel').hide();
        $('#addPlusPanel').hide();
    });
    $('#hotelServiceEv').click(function () {
        line($(this));
        _hashState('#hotelServiceEv');
        $('#hotelTypeReviewPanel').hide();
        $('#hotelServiceEvPanel').show();
        $('#hotelPlusMinusPanel').hide();
        $('#addPlus-step2Panel').hide();
        $('#hotelRecommendPanel').hide();
        $('#addPlusPanel').hide();
    });
    $('#hotelPlusMinus').click(function () {
        line($(this));
        _hashState('#hotelPlusMinus');
        $('#hotelTypeReviewPanel').hide();
        $('#hotelServiceEvPanel').hide();
        $('#hotelPlusMinusPanel').show();
        $('#addPlus-step2Panel').hide();
        $('#hotelRecommendPanel').hide();
        $('#addPlusPanel').hide();
    });
    $('#hotelRecommend').click(function () {
        line($(this));
        _hashState('#hotelRecommend');
        $('#hotelTypeReviewPanel').hide();
        $('#hotelServiceEvPanel').hide();
        $('#hotelPlusMinusPanel').hide();
        $('#hotelRecommendPanel').show();
        $('#addPlus-step2Panel').hide();
        $('#addPlusPanel').hide();
    });
    $('#addPlus').click(function () {
        line($(this));
        _hashState('#addPlus');
        $('#hotelTypeReviewPanel').hide();
        $('#hotelServiceEvPanel').hide();
        $('#hotelPlusMinusPanel').hide();
        $('#hotelRecommendPanel').hide();
        $('#addPlusPanel').show();
        $('#addPlus-step2Panel').hide();
    });
    $('#addPlus-step2').click(function () {
        line($(this));
        _hashState('#addPlus-step2');
        $('#hotelTypeReviewPanel').hide();
        $('#hotelServiceEvPanel').hide();
        $('#hotelPlusMinusPanel').hide();
        $('#hotelRecommendPanel').hide();
        $('#addPlusPanel').hide();
        $('#addPlus-step2Panel').show();
    });

    $(window).scroll(function () {
        var hRegLB = $('.container ').offset().top + 17;
        if ($(this).scrollTop() > hRegLB) {
            $('.tape-rev-tabs-bar__wrap').addClass('fixed');
        } else {
            $('.tape-rev-tabs-bar__wrap').removeClass('fixed');
        }
    });

// Плавающий блок, при переходе по табам фиксирование снимается
    $('.tab').on('click', function () {
        $('.tape-right__cnt').removeClass('fixed');
    });
    $(window).scroll(function () {
        var hRegLB = $('.tape-rev__block ').offset().top - 48;
        if ($(this).scrollTop() > hRegLB) {
            $('.tape-right__cnt').addClass('fixed');
        } else {
            $('.tape-right__cnt').removeClass('fixed');
        }
    });

    $('#jsShortTapeRevCnt').on('click', function () {
        $('#longTapeRevCnt').hide();
        $('#shortTapeRevCnt').show();
    });

    $('#jsLongTapeRevCnt').on('click', function () {
        $('#longTapeRevCnt').show();
        $('#shortTapeRevCnt').hide();
    });
    $('.bth__btn').on('click', function () {
        $('.js-act-error').addClass('has-error');
        $('.js-act-error').find('.hint-block--abs').show()
    });
});


$('input[name=recommend]').on('click', function () {
    $('.like-block-icon').hide();
    if ($('#notRecommend').prop('checked')) {
        $(this).closest('.color-section').css('background', 'rgba(200, 56, 49, 0.10)');
        $(this).closest('.color-section').find('.icon-not-recommend').show();

    }
    if ($('#recommend').prop('checked')) {
        $(this).closest('.color-section').css('background', 'rgba(0, 165, 81, 0.10)');
        $(this).closest('.color-section').find('.icon-recommend').show();
    }
    if ($('#refrain').prop('checked')) {
        $(this).closest('.color-section').css('background', '#e4e5ea');
        $(this).closest('.color-section').find('.icon-refrain').show();
    }
});

$(function () {
    $('.add-rev__date-range').datepicker({
        range: 'period', // режим - выбор периода
        numberOfMonths: 2,
        onSelect: function (dateText, inst, extensionRange) {
            // extensionRange - объект расширения
            $('.add-rev__date-range').val(extensionRange.startDateText + ' - ' + extensionRange.endDateText);
        }
    });
});

jQuery(document).ready(function ($) {

    $('select[name="addRevMonth"]').SumoSelect({
        search: true,
        searchText: ' ',
        noMatch: 'Нет совпадений',
        placeholder: 'Выберите год'
    });


    $('.SumoSelect.sumo_addRevMonth').on('click', function () {
        if ($(this).find('.SelectBox').find('span').hasClass('placeholder')) {
            $('#addRevMonth').removeClass('active');
            $(this).closest('.add-rev__date-block').find('#addRevDateInp').hide();
        } else {
            $('#addRevMonth').addClass('active');
            $(this).closest('.add-rev__date-block').find('#addRevDateInp').show();
        }
    });

    $('#addRevDate').on('click', function () {
        if ($('input[id="addRevDate"]').val().trim() === '') {
            $('#addRevDateLbl').addClass('active');
        }
    });

    $('#addRevDate').on('change', function () {
        if ($('input[id="addRevDate"]').val().trim() === '') {
            $('#addRevDateLbl').removeClass('active');
        }
    });

    $('#jsStep2').on('click', function () {
        $(this).closest('#addPlusPanel').find('.step1').hide();
        $(this).closest('#addPlusPanel').find('.step2').show();
    });

    $('#jsStep1').on('click', function (e) {
        e.preventDefault();
        $(this).closest('#addPlusPanel').find('.step2').hide();
        $(this).closest('#addPlusPanel').find('.step1').show();
    });


});

$(document).ready(function () {

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

    $('.js-ta-review').on('focus', function () {
        $(this).closest('.add-rev__ta-block').css('height', '260px');
    });
    $('.big-ta-icon').on('click', function () {
        $(this).closest('.add-rev__ta-block').css('height', '260px');
    });

    $('.js-ta-review').on('blur', function () {
        if ($(this).val().trim() === '') {
            $(this).closest('.add-rev__ta-block').css('height', '130px');
        }
    });

    $('#jsAddPhoto').on('click', function () {
        $(this).closest('.photo-hotel').find('.add-rev__photos').show();
        $(this).closest('.photo-hotel').find('.photo-total-block').show();
        $(this).closest('.photo-hotel').find('.photo-total-block-null').hide();
    });

    $('input[name=booking]').on('click', function () {
        if ($('#bookInternet').prop('checked')) {
            $(this).closest('.section').find('.bth__inp-block.internet').show();
        }
    });

    $('select[name="country"]').SumoSelect();
    $('select[name="yearVisit"]').SumoSelect();
    $('select[name="season"]').SumoSelect();


    $('.js-filter-big-open').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.filter-small').hide();
        $(this).closest('.section').find('.filter-big').show();
        $(this).closest('.panel').find('.hotel-rev__wrap').hide();
    });

    $('.js-filter-big-close').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.filter-big').hide();
        $(this).closest('.section').find('.filter-small').show();
        $(this).closest('.panel').find('.hotel-rev__wrap').show();
        var hhh = $('.tape-rev__block ').offset().top - 48;
        if ($('.tape-right__cnt').offset().top > hhh) {
            $('.tape-right__cnt').addClass('fixed');
        } else {
            $('.tape-right__cnt').removeClass('fixed');
        }
    });

    $('#jsOpenSearch').on('click', function () {
        $(this).closest('.filter-small').find('.filter__inp-block').toggle();
        $(this).closest('.filter-small').find('.filter__noinp').toggle();
        $(this).toggleClass('active');

    });

    $('.js-top-filter-big-open').on('click', function (e) {
        // e.preventDefault();
        $(this).closest('.tabs-block').find('.filter-big').show().offset();
        $(this).closest('.tabs-block').find('.filter-small').hide();
        $(this).closest('.tabs-block').find('.hotel-rev__wrap').hide();
    });


    $('#jsOpenRevNot').on('click', function () {
        $(this).closest('.panel').find('.hotel-rev__wrap').toggle();
        $(this).closest('.panel').find('.tape-rev__block-null').toggle();
        $(this).closest('.panel').find('.filter__inp-block').toggle();
        $(this).closest('.panel').find('.new-rev__btn').toggle();
        $(this).toggleClass('active');

    });


});


$(function () {
    $('.senderLetter-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });

});
$(function () {
    $('.preview-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $(document).on('click', '.preview-pp-close', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

$(function () {
    $('.service-rating-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true,
        callbacks: {
            open: function () {
                $(this.content).parent().height(720)
            }
        }
    });
    $('.service-rating-modal').on('click', function () {
        $('html').css('margin-right', '0')
    });


    $(document).on('click', '.filter-modal-close', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
        $(this).closest('.service-rating-pp').find('.step1').show();
        $(this).closest('.service-rating-pp').find('.step2').hide();
        $(this).closest('.service-rating-pp').find('.step3').hide();
    });
});


jQuery(document).ready(function ($) {

    $('select[name="visitHotelDate"]').SumoSelect({
        search: true,
        searchText: ' ',
        noMatch: 'Нет совпадений',
        placeholder: 'Выберите год'
    });

    $('select[name="visitHotelWith"]').SumoSelect({
        search: true,
        searchText: ' ',
        noMatch: 'Нет совпадений',
        placeholder: 'Выберите'
    });


    $('.SumoSelect.sumo_visitHotelDate').on('click', function () {
        if ($(this).find('.SelectBox').find('span').hasClass('placeholder')) {
            $('#visitHotelDate').removeClass('active');
        } else {
            $('#visitHotelDate').addClass('active');
        }
    });

    $('.jsVariant1').on('click', function () {
        $(this).hide();
        $(this).closest('.tape-rev--left').find('.jsVariant2').show();
        $(this).closest('.tape-rev--left').find('.jsVariant3').hide();
    });

    $('.jsVariant2').on('click', function () {
        $(this).hide();
        $(this).closest('.tape-rev--left').find('.jsVariant3').show();
        $(this).closest('.tape-rev--left').find('.jsVariant1').hide();
    });

    $('.jsVariant3').on('click', function () {
        $(this).hide();
        $(this).closest('.tape-rev--left').find('.jsVariant1').show();
        $(this).closest('.tape-rev--left').find('.jsVariant3').hide();
    });

    $('.role-moderation-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('.rating-reviews-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });

});
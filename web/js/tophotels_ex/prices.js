$(document).ready(function () {

    $('#hotelSearch').click(function () {
        line($(this));
        _hashState('#hotelSearch');
        $('#hotelSearchPanel, .hotelSearchPanel').show();
        $('#myInterestsPanel, .myInterestsPanel').hide();
        $('#hotelChainsPanel, .hotelChainsPanel').hide();
        $('#hotelFilterPanel ,.hotelFilterPanel').hide();
    });
    $('#myInterests').click(function () {
        line($(this));
        _hashState('#myInterests');
        $('#hotelSearchPanel, .hotelSearchPanel').hide();
        $('#myInterestsPanel, .myInterestsPanel').show();
        $('#hotelChainsPanel, .hotelChainsPanel').hide();
        $('#hotelFilterPanel ,.hotelFilterPanel').hide();
    });
    $('#hotelChains').click(function () {
        line($(this));
        _hashState('#hotelChains');
        $('#hotelSearchPanel, .hotelSearchPanel').hide();
        $('#myInterestsPanel, .myInterestsPanel').hide();
        $('#hotelChainsPanel, .hotelChainsPanel').show();
        $('#hotelFilterPanel ,.hotelFilterPanel').hide();
    });
    $('#hotelFilter').click(function () {
        line($(this));
        _hashState('#hotelFilter');
        $('#hotelSearchPanel, .hotelSearchPanel').hide();
        $('#myInterestsPanel, .myInterestsPanel').hide();
        $('#hotelChainsPanel, .hotelChainsPanel').hide();
        $('#hotelFilterPanel ,.hotelFilterPanel').show();
    });

    $('select[name="sorter-sumo"]').SumoSelect()
    $('.searchResult__hearts .box-heart__icon').hover(function () {
            $(this).prevAll().addClass('active');
            $(this).nextAll().removeClass('active');
            $(this).addClass('active');
        },
        function () {
            if ($(this).index() === 0) {
                $(this).removeClass('active');
            }
        }
    );


    $('.js-control-show').on('click', function () {
        $(this).closest('.hotelFilter').find('.js-control').removeClass('block');
        $(this).find('.js-control').addClass('block');

        $('#js-dpicker-filter-datePicker1').addClass('hidden')


    });
    $('.js-control-hide').on('click', function () {
        $(this).closest('.hotelFilter').find('.js-control').removeClass('block');
        return false
    });
    $('.order__inp.form-date').on('click', function () {
        $(this).closest('.hotelFilter').find('.js-control').removeClass('block');
    });
    $('.js-show-btn-filter').on('click', function () {
        $(this).closest('.hotelFilter').find('.bth__btn').show();
    });
    $('.js-show-more').on('click', function () {
        $(this).closest('.paginatorNew').find('.js-active').addClass('active');
    });

    // создаем  пикер
    initGeminiDPickerSingle('datePickerFilter', function (newValue) {
        var datePicker = $('#js-dpicker-filter-datePickerFilter');
        var d = newValue.newDate.split(' - ');
        $('#datePickerFilter').text('чт 14.09.2018');


        datePicker.closest('.hotelFilter').find('.js-control').removeClass('block');
        datePicker.addClass('hidden');
    });
    // создаем  пикер
    initGeminiDPickerSingle('datePickerFilter2', function (newValue) {
        var datePicker = $('#js-dpicker-filter-datePickerFilter2');
        var d = newValue.newDate.split(' - ');
        $('#datePickerFilter2').text('чт 14.09.2018');


        datePicker.closest('.hotelFilter').find('.js-control').removeClass('block');
        datePicker.addClass('hidden');
    });


    $('.hotelChains-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('.hotelChains-pp').on('click', function () {
        $('html').css('overflow', 'hidden');
        $('#hotelChainsHotels').click();
    });


});
$(function () {

    $('#hotelChainsHotels').click(function () {
        line($(this));
        _hashState('#hotelChainsHotels');
        $('#hotelChainsHotelsPanel').show();
        $('#hotelChainsDescrPanel').hide();
        $('#hotelChainsGeographyPanel').hide();
    });

    $('#hotelChainsDescr').click(function () {
        line($(this));
        _hashState('#hotelChainsDescr');
        $('#hotelChainsHotelsPanel').hide();
        $('#hotelChainsGeographyPanel').hide();
        $('#hotelChainsDescrPanel').show();
    });
    $('#hotelChainsGeography').click(function () {
        line($(this));
        _hashState('#hotelChainsGeography');
        $('#hotelChainsHotelsPanel').hide();
        $('#hotelChainsGeographyPanel').show();
        $('#hotelChainsDescrPanel').hide();
    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.agreement-pp__line');
        $('.agreement-pp__tab').removeClass('active');
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
        $('.agreement-pp__tab.active').first().click();
    else
        $(window.location.hash).click();
    $(window).bind('hashchange', function () {
        $(window.location.hash).click();
    });


    $('select[name="hotelRating-sumo"]').SumoSelect();
    $('.js-more-chains').on('click', function () {
        $(this).prev().toggleClass('active');
        return false
    });


    $('.parameter-modal__link').on('click', function () {
        $(this).closest('.parameter-modal__mdl-left').find('.parameter-modal__link').removeClass('active');
        $(this).addClass('active');
        var id = $(this).attr('href'),
            top = $(id).position().top;
        $('.parameter-modal__mdl-right').animate({scrollTop: top + $('.parameter-modal__mdl-right').scrollTop()}, 300);
        console.log(top)
    });

    $('.parameter-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });


    $('.parameter-pp').on('click', function () {
        $('html').css('margin-right', '17px', 'overflow', 'hidden');
    });


    $('.parameter-modal .cbx').on('change', function (e) {
        var cbxId = $(this).attr('id');

        if ($(this).prop('checked')) {
            $(this).closest('.cbx-block').find('.cbx-cnt').addClass('green');
            var data = $(this).closest('.cbx-block').find('.cbx-cnt').text();
            var wrap = '<div class="parameter-modal__checked" data-id="' + cbxId + '"><span></span>' + data + '</div>';
            $('.parameter-modal__mdl-right-data').append(wrap)
        } else {
            $(this).closest('.cbx-block').find('.cbx-cnt').removeClass('green');
            $('.parameter-modal__mdl-right-data [data-id="' + cbxId + '"]').remove()
        }
    });


});

$(document).on('click', '.parameter-modal__checked span', function (e) {
    var checkedId = $(this).closest('div').data('id');

    $('input[id="' + checkedId + '"]').click();


});



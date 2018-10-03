$(document).ready(function () {
    $('#infoTape').click(function () {
        line($(this));
        _hashState('#infoTape');
        $('#infoTapePanel').show();
        $('#addPostPanel').hide();
        $('#tourPanel').hide();
    });

    $('#addPost').click(function () {
        line($(this));
        _hashState('#addPost');
        $('#infoTapePanel').hide();
        $('#addPostPanel').show();
        $('#tourPanel').hide();
    });

    $('#tour').click(function () {
        line($(this));
        _hashState('#tour');
        $('#infoTapePanel').hide();
        $('#addPostPanel').hide();
        $('#tourPanel').show();
    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.feed-line');
        $('.feed-tab').removeClass('active');
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
        $('.feed-tab.active').first().click();
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

    $('.feed__item').hover(
        function () {
            $(this).find('.feed-act-block-hiden').addClass('active');
            console.log()
        },
        function () {
            $(this).find('.feed-act-block-hiden').removeClass('active')
        }
    );

    $('input[name="post"]').on('change', function () {
        if ($('#add-post').prop('checked')) {
            $('.add-post-block').show();
            $('.add-hotel-block').hide();
            $('.add-hotels-block').hide();
        }
        else if ($('#add-hotel').prop('checked')) {
            $('.add-post-block').hide();
            $('.add-hotel-block').show();
            $('.add-hotels-block').hide();
        }
        else if ($('#add-hotels').prop('checked')) {
            $('.add-post-block').hide();
            $('.add-hotel-block').hide();
            $('.add-hotels-block').show();
        }


    });


    /*контролы */

    $('.js-control-show').on('click', function () {
        $(this).closest('.panel').find('.js-control').removeClass('block');
        $(this).find('.js-control').addClass('block');

        $('#js-dpicker-filter-datePicker1').addClass('hidden')


    });
    $('.js-control-hide').on('click', function () {
        $(this).closest('.panel').find('.js-control').removeClass('block');
        return false
    });
    $('.order__inp.form-date').on('click', function () {
        $(this).closest('.panel').find('.js-control').removeClass('block');
    });

    initGeminiDPickerSingle('datePicker6', function (newValue) {
        var datePicker = $('#js-dpicker-filter-datePicker6');
        var d = newValue.newDate.split(' - ');
        $('#datePicker6').text('чт 14.09.2017');

        datePicker.closest('.panel').find('.js-control').removeClass('block');
        datePicker.addClass('hidden');
    });


    initGeminiDPickerSingle('datePicker7', function (newValue) {
        var datePicker = $('#js-dpicker-filter-datePicker7');
        var d = newValue.newDate.split(' - ');
        $('#datePicker7').text('чт 14.09.2017');

        datePicker.closest('.panel').find('.js-control').removeClass('block');
        datePicker.addClass('hidden');
    });
    initGeminiDPickerSingle('datePickerFilter', function (newValue) {
        var datePicker = $('#js-dpicker-filter-datePickerFilter');
        var d = newValue.newDate.split(' - ');
        $('#datePickerFilter').text('чт 14.09.2017');

        datePicker.closest('.panel').find('.js-control').removeClass('block');
        datePicker.addClass('hidden');
    });


    $('select[name="filter-adults"]').SumoSelect();
    var countSumoFilter = 0;
    $('.form-adults__item.age1').on('click', 'li.opt:first-child', function () {
        countSumoFilter++;
        if (countSumoFilter === 1) {

            $(this).closest('.form-adults').find('.age2').show();
        } else if (countSumoFilter === 2) {

            $(this).closest('.form-adults').find('.age3').show();
            countSumoFilter = 0;
        }


    });


    $('select[name="postAdd-adults"]').SumoSelect();


});

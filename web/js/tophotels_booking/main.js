$(document).ready(function () {

// создаем  пикер
    initGeminiDPickerSingle('datePickerFilter', function (newValue) {
        var datePicker = $('#js-dpicker-filter-datePickerFilter');
        var d = newValue.newDate.split(' - ');
        $('#datePickerFilter').text('чт 14.09.2018');


        datePicker.closest('.hotelFilter').find('.js-control').removeClass('block');
        datePicker.addClass('hidden');
    });

    $('.js-control-show').on('click', function () {
        $(this).closest('.hotelFilter').find('.js-control').removeClass('block');
        $(this).find('.js-control').addClass('block');

        $('#js-dpicker-filter-datePicker1').addClass('hidden')


    });
    $('.js-control-hide').on('click', function () {
        $(this).closest('.hotelFilter').find('.js-control').removeClass('block');
        return false
    });
    var countSumo = 0;
    $('.form-adults__item.age1').on('click', 'li.opt:first-child', function () {
        countSumo++;
        if (countSumo === 1) {

            $(this).closest('.form-adults').find('.age2').show();
        } else if (countSumo === 2) {

            $(this).closest('.form-adults').find('.age3').show();
            countSumo = 0;
        }


    });
    $('.form-adults  .form-adults__item-cross').on('click', function () {
        $(this).closest('.form-adults__item').hide();
    });
    $('select[name="adults"]').SumoSelect();
});
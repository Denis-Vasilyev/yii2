$(function () {


    $('.authorization__inp-wrap input').on('focus', function () {
        $(this).next('label').addClass('up');
    });

    $('.authorization__inp-wrap input').on('blur', function () {
        if ($(this).val().trim() === '') {
            $(this).next('label').removeClass('up');
        }
    });



    $('.authorization__inp-wrap input').on('change', function () {
        $('.authorization__inp-wrap input').each(function () {
            if ($(this).val().length) {
                $(this).next('label').addClass('up');
            }
        });
    });

    $('#js-open-eye').on('click', function () {
        $(this).toggleClass('active');
    });

});
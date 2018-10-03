$(document).ready(function () {
    $('.js-auth-form__input').each(function () {
        if ($(this).val().length) {
            $(this).next('.auth-form__label').addClass('up');
        }
    });

    $('.js-auth-form__input').on('focus', function () {
        $(this).addClass('focus');
        $(this).next('.auth-form__label').addClass('up');
    });

    $('.js-auth-form__input').on('blur', function () {
        if ($(this).val().trim() === '') {
            $(this).next('.auth-form__label').removeClass('up');
        }
        $(this).removeClass('focus');
    });

    $('#js-open-eye').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.js-validate').on('click', function () {
        if ($('input[id=email]').val().trim() === '') {
            $('#emuMessage').show();
            $('input[id=email]').addClass('error');
        }
        if ($('input[id=pwd]').val().trim() === '') {
            $('#epMessage').show();
            $('input[id=pwd]').addClass('error');
        }

    });

    $('.js-auth-form__input').on('change', function () {
        $('.js-auth-form__input').each(function () {
            if ($(this).val().length) {
                $(this).next('.auth-form__label').addClass('up');
            }
        });
    });

    $('.js-auth-form__input').change();



});
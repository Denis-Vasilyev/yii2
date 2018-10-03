// function placeLabels() {
//     $('.auth__body').find('input').each(function() {
//         if ($(this).val()) {
//             $(this).siblings('label').addClass('active');
//         };
//     });
// }
//
// $(function() {
//     $('.js-input-label').bind('focus', function(event) {
//         $(this).siblings('label').addClass('active');
//     }).bind('blur', function(event) {
//         if (!$(this).val()) {
//             $(this).siblings('label').removeClass('active');
//         };
//     }).bind('change', function(event) {
//         if (!$(this).val()) {
//             $(this).siblings('label').removeClass('active');
//         } else {
//             $(this).siblings('label').addClass('active');
//         }
//     });
//
//     placeLabels();
//
//     setTimeout(placeLabels, 100);
//     setTimeout(placeLabels, 200);
//     setTimeout(placeLabels, 500);
//     setTimeout(placeLabels, 1500);
// });


$(document).ready(function() {

    $('.js-input-label').on('focus', function () {
        $(this).addClass('focus');
        $(this).next('.auth__label').addClass('active');
    });

    $('.js-input-label').on('blur', function () {
        if ($(this).val().trim() === '') {
            $(this).next('.auth__label').removeClass('active');
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
                $(this).next('.auth-form__label').addClass('active');
            }
        });
    });

    $('.js-auth-form__input').change();

});


jQuery(window).load(function ($) {
    $('.js-auth-form__input').each(function () {
        if ($(this).val().length) {
            $(this).next('.auth-form__label').addClass('active');
        }
    });
});

jQuery(document).ready(function($) {
$(function () {
    $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

$(function () {
    $('.popup-modal2').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $(document).on('click', '.popup-modal-dismiss2', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});
});
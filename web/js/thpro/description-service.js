$('select[name="language"]').SumoSelect();

$('.js-show-ta').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.special__block').find('.edit-block__ta-block').show();
    $(this).closest('.special__block').css('border-bottom', 'none');
    $(this).closest('.special__block').css('padding-bottom', 0);
});

$('.js-special-ta').on('focus', function () {
    $(this).closest('.edit-block__ta-block').css('height', 65);
});

$('.js-special-ta').on('blur', function () {
    if ($(this).val().length>0) {
        $(this).closest('.edit-block__ta-block').css('height', 65);
    } else {
        $(this).closest('.edit-block__ta-block').css('height', 42);
    }
});


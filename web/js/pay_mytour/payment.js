
$('.js-auth-form__input').on('focus', function () {
    $(this).addClass('focus');
    $(this).prev('.auth-form__label').addClass('up');
});

$('.js-auth-form__input').on('blur', function () {
    if ($(this).val().trim() === '') {
        $(this).prev('.auth-form__label').removeClass('up');
    }
    $(this).removeClass('focus');


});

$('#payCardBtn').on('click', function () {
    $(this).closest('#payMethod').addClass('hidden');
    $('#payCardblock').removeClass('hidden');
});
$('#payBillBtn').on('click', function () {
    $(this).closest('#payMethod').addClass('hidden');
    $('#payBillblock').removeClass('hidden');
});

$('.js-link-back').on('click', function () {
    $('#payCardblock').addClass('hidden');
    $('#payBillblock').addClass('hidden');
    $('#payMethod').removeClass('hidden');
});

$('.js-pay-send').on('click', function () {
    $('#payCardblock').addClass('hidden');
    $('#payBillblock').addClass('hidden');
    $('#payResult').removeClass('hidden');
});



$('.js-focus').on('focus', function () {
    $(this).parent().addClass('focus');
});

$('.js-focus').on('blur', function () {
    $(this).parent().removeClass('focus');
});

$('.js-error').on('click', function () {
    $(this).closest('.payment__card-block').find('.payment__inp').parent().toggleClass('error');
    $(this).closest('.payment__card-block').find('.payment__inp').next().toggle();

});
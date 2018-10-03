$('.js-add-photo').on('click', function () {
    $('.good-photo').hide();
    $('.bad-photo').show();
    $(this).hide();
});
$('.js-bad-photo').on('click', function () {
    $('.good-photo').show();
    $('.add-photo').hide();
    $(this).hide();
});
$('.js-good-photo').on('click', function () {
    $('.bad-photo').hide();
    $('.add-photo').show();
    $(this).hide();
});

$('.js-recommend').on('click', function (e) {
    e.preventDefault();
    $(this).next().show();
    $(this).hide();
});
$('.js-no-recommend').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.profile__myrecommend-block').prev().show();
    $(this).closest('.profile__myrecommend-block').hide();
});

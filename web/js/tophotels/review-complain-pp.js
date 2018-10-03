$(function () {
    $('.review-complain-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('.review-complain-pp').on('click', function () {
        $('html').css('margin-right', '17px');
        $('#review-complain-pp').parent().height(561)
    });

});

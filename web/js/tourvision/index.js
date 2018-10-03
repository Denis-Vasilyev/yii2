$(document).ready(function () {

    var footerHeight = $('.footer').height();
    $('.page').css('padding-bottom', footerHeight);

    $('.paginatorNew__button-text').on('click', function () {
        $(this).find('.load-more-spinner ').addClass('load-more-spinner_animate')
    });


    $('button').on('click', function () {
        $(this).find('.load-more-spinner').addClass('load-more-spinner_animate').show();
    });
});

$(window).resize(function () {
    var footerHeight = $('.footer').height();
    $('.page').css('padding-bottom', footerHeight);

});
$(document).on('click', '.filter-modal-close', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
});
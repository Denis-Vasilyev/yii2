$(document).ready(function () {
    $('.paginatorNew__button').on('click', function () {
        $(this).find('> svg').toggle();
        $(this).find('.paginatorNew__button-cross').toggle();
    });
});

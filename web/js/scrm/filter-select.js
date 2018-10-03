$(document).ready(function () {

    $('.section-tag__select').on('click', function () {


        $(this).find('.section-tag__select-arr').toggleClass('active');
        $(this).find('.section-tag__select-drop').toggle();

    });
    $('.section-tag__select-drop li').on('click', function () {
        var def = $(this).closest('.section-tag__select').find('.section-tag__select-choice span').text();
        var selected = $(this).text();
        $(this).closest('.section-tag__select').find('.section-tag__select-choice span').text(selected);
        $(this).text(def)
    })
});

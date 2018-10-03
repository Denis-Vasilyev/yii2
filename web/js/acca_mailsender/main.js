$(function () {

    $('.filter-pp__link-del').on('click', function () {
        $('.filter-pp__section input').removeAttr('checked').eq(0).change()
    });

    $('.menu-switch').on('click', function () {
        $('.content-left').show();
    });

    $('.leftbar-close').on('click', function () {
        $('.content-left').hide().fadeOut();
    });

    // закрыть теги
    $('.filter__tag-close').on("click", function () {

        $(this).parent().hide();
    });
    // закрыть теги

    //полный - краткий вид таблиц

    $('input[name="view"]').on('change', function () {
        if ($('#long').prop('checked')) {
            $('.tape-short__tbl').hide();
            $('.tape-long__tbl').show();
        }
        if ($('#short').prop('checked')) {
            $('.tape-short__tbl').show();
            $('.tape-long__tbl').hide();
        }
    });

    //полный - краткий вид таблиц

});








$(function () {
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

    //вид таблиц
    $('input[name="view"]').on('change', function () {
        if ($('#long').prop('checked')) {
            $('.tape-short__tbl').hide();
            $('.tape-long__tbl').show();
        }
        else if ($('#short').prop('checked')) {
            $('.tape-short__tbl').show();
            $('.tape-long__tbl').hide();
        }

        else if ($('#week').prop('checked')) {
            $('.tape-week__tbl').show();
            $('.tape-day__tbl').hide();
            $('.tape-month__tbl').hide();
        }
        else if ($('#day').prop('checked')) {
            $('.tape-week__tbl').hide();
            $('.tape-day__tbl').show();
            $('.tape-month__tbl').hide();
        }
        else if ($('#month').prop('checked')) {
            $('.tape-week__tbl').hide();
            $('.tape-day__tbl').hide();
            $('.tape-month__tbl').show();
        }
    });

    //полный - краткий вид таблиц
    $('.hint-block').hover(
        function () {
            $(this).find('.hint').show()
        },
        function () {
            $(this).find('.hint').hide()
        }
    );

    $('.section--grey--2 #f-search').on('click', function () {
        $(this).closest('.section--grey').find('.filter__r--hidden ').toggle();
        $(this).closest('.section--grey').find('.rbt-block  ').hide();
        $(this).closest('.section--grey').find('.filter__inp-block ').toggle()
    });


});








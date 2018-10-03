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

    // big-filter
    $('.js-filter-open').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.filter-small').hide();
        $(this).closest('.panel').find('.filter-big').show();
        $(this).closest('.panel').find('.filter__tag').hide();
    });
    $('.js-filter-big-close').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.panel').find('.filter-small').show();
        $(this).closest('.panel').find('.filter-big').hide();
        $(this).closest('.panel').find('.filter__tag').show();
    });

});








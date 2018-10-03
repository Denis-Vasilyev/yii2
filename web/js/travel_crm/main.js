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

    //открытие большого саггеста
    $('.site-nav__item.search').on("click", function () {
        $(this).find('i').toggleClass('trigger-animate');
        $(this).closest('.content').find('.section.section--grey.search').toggle();
        $('.suggest-big').fadeIn(200);
    });
    $('.suggest-big__close').on("click", function () {
        $(this).closest('.suggest-big').fadeOut(200);
    });
    $('.suggest-big .burger-icon').on("click", function () {
        $(this).hide();
        $(this).next().toggle();
    });



    //открытие большого саггеста

    $('.idbar__loc').on("click", function () {
        $(this).hide();
        if ($(this).is('.ico')) {
            $('.idbar__loc.ex').show();
        } else {
            $(this).next().show();
        }


        if ($(this).is('.douple')) {
            $('.icons').show();
        } else {
            $('.icons').hide();
        }

    });


    $('.header__user-block').hover(function () {
            $('.header__exit').show();
        },
        function () {
            $('.header__exit').hide()
        }
    );

    $('.relative').hover(
        function () {
            $(this).find('.hint').show();

        },
        function () {
            $(this).find('.hint').hide();
        }
    );

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

    $('input[name="filter"]').on('change', function () {
        if ($('#filter').prop('checked')) {
            $(this).closest('.filter-small').find('.rbt-block').show()
        }
        else {
            $(this).closest('.filter-small').find('.rbt-block').hide()
        }
    });
    $('.section--grey--2 #f-search, .js-act-search ').on('click', function () {
        $(this).closest('.section--grey').find('.filter__r--hidden ').toggle();
        $(this).closest('.section--grey').find('.rbt-block  ').hide();
        $(this).closest('.section--grey').find('.filter__inp-block ').toggle()
    });

    $('.js-act-filter ').on('click', function () {
        $(this).closest('.filter-small').find('.rbt-block').toggle()
    });
    //меню вызываемое по ПКМ


    $('.site-nav__block').mousedown(function (event) {

        if (event.button == 2) {
            $('.site-nav__actions').hide();
            $(this).closest('div').find('.site-nav__actions').show()
        }
        return false;
    });

    $('.site-nav__item').contextmenu(function () {
        return false
    });


    $('.site-nav__actions-item span').on("click", function () {
        $('.site-nav__actions').hide()
    });


});

$(document).on("click", function (e) {
    if (!$(e.target).is('.site-nav__item')) {
        $('.site-nav__actions').hide()
    }
});
$(document).on('click', '.close-modal, .filter-pp__btn', function () {
    $.magnificPopup.close();
});







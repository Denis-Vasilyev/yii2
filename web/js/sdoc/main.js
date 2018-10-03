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

    //открытие большого саггеста
    $('.site-nav__search').on("click", function () {
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
    $('.fa-search').on("click", function () {
        $(this).hide();
        $(this).prev().toggle();
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


    $('.site-nav__item').hover(function () {
            $(this).closest('div').find('.site-nav__tooltip').show();
        },
        function () {
            $(this).closest('div').find('.site-nav__tooltip').hide();
        }
    );

    $('.site-nav__item').mousedown(function (event) {
        if (event.button == 2) {
            $(this).closest('div').find('.site-nav__actions').show()
        }
        return false;
    });

    $('.site-nav__item').contextmenu(function () {
        return false
    });

    $(document).on("click", function (e) {
        if (!$(e.target).is('.site-nav__item')) {
            $('.site-nav__actions').hide()
        }
    });


    $('.site-nav__actions-item span').on("click", function () {
        $('.site-nav__actions').hide()
    });
});








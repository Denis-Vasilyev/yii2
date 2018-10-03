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
            $('.tape-trash__tbl').hide();
            $('.tape-newView__tbl').hide();
        }
        else if ($('#short').prop('checked')) {
            $('.tape-short__tbl').show();
            $('.tape-long__tbl').hide();
            $('.tape-trash__tbl').hide();
            $('.tape-newView__tbl').hide();
        }
        else if ($('#view-trash').prop('checked')) {
            $('.tape-short__tbl').hide();
            $('.tape-long__tbl').hide();
            $('.tape-trash__tbl').show();
        } else if ($('#newView').prop('checked')) {
            $('.tape-short__tbl').hide();
            $('.tape-long__tbl').hide();
            $('.tape-trash__tbl').hide();
            $('.tape-newView__tbl').show();
        }

    });
    $('.section--grey--2 #f-search').on('click', function () {
        $(this).closest('.section--grey').find('.filter__r--hidden ').toggle();
        $(this).closest('.section--grey').find('.rbt-block  ').hide();
        $(this).closest('.section--grey').find('.filter__inp-block ').toggle()
    });
    $('input[name="filter"]').on('change', function () {
        if ($('#filter').prop('checked')) {
            $(this).closest('.filter-small').find('.rbt-block').show()
        }
        else {
            $(this).closest('.filter-small').find('.rbt-block').hide()
        }
    });
    //полный - краткий вид таблиц


    //открытие большого саггеста
    $('.site-nav__item.search').on("click", function () {
        $(this).find('i').toggleClass('trigger-animate');
        $(this).closest('.content').find('.section.section--grey.search').toggle();
        $('.suggest-big').fadeIn(200);
    });
    $('.suggest-big__close, .suggest-big__close.bottom-link').on("click", function () {
        $(this).closest('.suggest-big').fadeOut(200);
    });
    $('.suggest-big .burger-icon').on("click", function () {
        $(this).hide();
        $(this).next().toggle();
    });


//открытие большого саггеста

    $('.header__user-block').hover(function () {
            $('.header__exit').show();
        },
        function () {
            $('.header__exit').hide()
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

    $(document).on("click", function (e) {
        if (!$(e.target).is('.site-nav__item')) {
            $('.site-nav__actions').hide()
        }
    });


    $('.site-nav__actions-item span').on("click", function () {
        $('.site-nav__actions').hide()
    });

});








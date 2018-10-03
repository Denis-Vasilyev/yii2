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

    $('.section-tag__select').on('click', function () {


        $(this).find('.section-tag__select-arr').toggleClass('active');
        $(this).find('.section-tag__select-drop').toggle();

    });
    $('.section-tag__select-drop li').on('click', function () {
        var def = $(this).closest('.section-tag__select').find('.section-tag__select-choice span').text();
        var selected = $(this).text();
        $(this).closest('.section-tag__select').find('.section-tag__select-choice span').text(selected);
        $(this).text(def)
    });
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
    $('.header__user-block').hover(function () {
            $('.header__exit').show();
        },
        function () {
            $('.header__exit').hide()
        }
    );
    $('.site-nav__search').on("click", function () {
        $(this).closest('.content').find('.section.section--grey.search').toggle();
        $('.suggest-big').fadeIn(200);
    });
    $('.suggest-big__close').on("click", function () {
        $(this).closest('.suggest-big').fadeOut(200);
    });
    $('.js-act-search input').on('change', function () {
        if ($(this).prop('checked')) {
            $(this).closest('.section').find('.filter__r--hidden ').hide();
            $(this).closest('.section').find('.rbt-block  ').hide();
            $(this).closest('.section').find('.filter__inp-block ').addClass('active')
        }
        else {
            $(this).closest('.section').find('.filter__r--hidden ').show();
            $(this).closest('.section').find('.rbt-block  ').show();
            $(this).closest('.section').find('.filter__inp-block ').removeClass('active')
        }
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








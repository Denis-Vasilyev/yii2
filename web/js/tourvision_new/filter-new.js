$(document).ready(function () {

    $('.filter-new-js-search').on('change', function () {
        if ($(this).prop('checked')) {
            $(this).closest('.filter-new').find('.filter-new__suggest').addClass('active');
            $(this).closest('.filter-new').find('.js-hidden').hide();
            $(this).closest('.filter-new__item').addClass('active');
            $(this).next().addClass('active-border ');
            $('.filter-new__suggest-inp').focus()
        } else {
            $(this).closest('.filter-new').find('.filter-new__suggest').removeClass('active');
            $(this).closest('.filter-new').find('.js-hidden').show();
            $(this).next().removeClass('active-border ');
            $(this).closest('.filter-new__item').removeClass('active');
        }

    });
    $('.filter-new-js-filter').on('change', function () {
        if ($(this).prop('checked')) {
            $(this).closest('.filter-new').find('.filter-big').show();
            $(this).closest('.filter-new').find('.filter-new__flex').hide();
            $(this).closest('.panel').find('.section-tag').hide();
            $(this).closest('.panel').find('.sorter').hide();
        }

    });

    $('.js-filter-big-close').on('click', function () {
        $(this).closest('.filter-new').find('.filter-big').hide();
        $(this).closest('.filter-new').find('.filter-new__flex').show();
        $(this).closest('.panel').find('.section-tag').show();
        $(this).closest('.panel').find('.sorter').show();
        $(this).closest('.filter-new').find('.filter-new-js-filter').prop('checked', false);
    })

});
$(function () {

    $('.hotel-search-tbl td.relative').hover(
        function () {
            $(this).find('.hint').show();
        },
        function () {
            $(this).find('.hint').hide();
        }
    );


    // big-filter
    $('select[name="country"]').SumoSelect();

    $('.js-filter-open').on('click', function () {
        $(this).closest('.panel').find('.new-msg-short.tape-short__tbl').hide();
    });

    $('.js-filter-big-close').on('click', function () {
        $(this).closest('.panel').find('.new-msg-short.tape-short__tbl').show();
    });



});

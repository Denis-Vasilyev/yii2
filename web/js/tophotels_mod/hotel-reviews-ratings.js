$('.js-filter-big-open').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.filter-small').hide();
    $(this).closest('.section').find('.filter-big').show();
    $(this).closest('.panel').find('.hotel-rev__wrap').hide();
});

$('.js-filter-big-close').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.filter-big').hide();
    $(this).closest('.section').find('.filter-small').show();
    $(this).closest('.panel').find('.hotel-rev__wrap').show();
    // var hhh = $('.tape-rev__block ').offset().top - 48;
    // if ($('.tape-right__cnt').offset().top > hhh) {
    //     $('.tape-right__cnt').addClass('fixed');
    // } else {
    //     $('.tape-right__cnt').removeClass('fixed');
    // }
});

$('#jsOpenSearch').on('click', function () {
    $(this).closest('.filter-small').find('.filter__inp-block').toggle();
    $(this).closest('.filter-small').find('.filter__noinp').toggle();
    $(this).toggleClass('active');

});

$('.js-top-filter-big-open').on('click', function (e) {
    // e.preventDefault();
    $(this).closest('.tabs-block').find('.filter-big').show().offset();
    $(this).closest('.tabs-block').find('.filter-small').hide();
    $(this).closest('.tabs-block').find('.hotel-rev__wrap').hide();
});


$('#jsOpenRevNot').on('click', function () {
    $(this).closest('.panel').find('.hotel-rev__wrap').toggle();
    $(this).closest('.panel').find('.tape-rev__block-null').toggle();
    $(this).closest('.panel').find('.filter__inp-block').toggle();
    $(this).closest('.panel').find('.new-rev__btn').toggle();
    $(this).toggleClass('active');

});
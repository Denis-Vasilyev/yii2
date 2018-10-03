$('input').on('click', function () {
    // $('.color-section').removeClass('red-block', 'green-block', 'orange-block');
    if ($('.red-block').prop('checked')) {
        $(this).closest('.color-section').css('background','rgba(235, 87, 87, 0.4)');
    }
    if ($('.green-block').prop('checked')) {
        $(this).closest('.color-section').css('background','rgba(111, 207, 151, 0.4)');
    }
    if ($('.orange-block').prop('checked')) {
        $(this).closest('.color-section').css('background',' rgba(248, 165, 58, 0.4)');
    }



});

$(document).ready(function () {
    $('.topline-hb__hearts .topline-hb__icon').hover(function () {
            $(this).prevAll().addClass('active');
            $(this).nextAll().removeClass('active');
            $(this).addClass('active');
        },
        function () {
            if ($(this).index() === 0) {
                $(this).removeClass('active');
            }
        }
    );

    $('#nullRateBlock').on('click', function () {
        $(this).next().show();
        $(this).hide()
    });
    $('#closedHotelBlock').on('click', function () {
        $('#RateBlock').show();   $(this).hide()
    })
});
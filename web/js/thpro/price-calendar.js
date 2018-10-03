$(document).ready(function () {
    $('#calendar').click(function () {
        line($(this));
        _hashState('#calendar');
        $('#calendarPanel').show();
        $('#calendarMonthPanel').hide();
        $('#editPanel').hide();
        $('#surchargePanel').hide();
    });
    $('#calendarMonth').click(function () {
        line($(this));
        _hashState('#calendarMonth');
        $('#calendarPanel').hide();
        $('#calendarMonthPanel').show();
        $('#editPanel').hide();
        $('#surchargePanel').hide();
    });
    $('#edit').click(function () {
        line($(this));
        _hashState('#edit');
        $('#calendarPanel').hide();
        $('#calendarMonthPanel').hide();
        $('#editPanel').show();
        $('#surchargePanel').hide();
    });

    $('#surcharge').click(function () {
        line($(this));
        _hashState('#surcharge');
        $('#calendarPanel').hide();
        $('#calendarMonthPanel').hide();
        $('#editPanel').hide();
        $('#surchargePanel').show();
    });

    $('select[name="priceCalendar-sumo1"]').SumoSelect();
    $('select[name="priceCalendar-sumo2"]').SumoSelect();


    $('select[name="add-price-room"]').SumoSelect();
    $('select[name="add-price-food"]').SumoSelect();
});

$(document).ready(function() {
    $('#reviewNew').click(function () {
        line($(this));
        _hashState('#reviewNew');
        $('#reviewNewPanel').show();
        $('#reviewHotelRatingPanel').hide();
    });
    $('#reviewHotelRating').click(function () {
        line($(this));
        _hashState('#reviewHotelRating');
        $('#reviewNewPanel').hide();
        $('#reviewHotelRatingPanel').show();

    });


});







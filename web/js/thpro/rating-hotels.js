$(document).ready(function() {
    $('#ratingHotel').click(function () {
        line($(this));
        _hashState('#ratingHotel');
        $('#ratingHotelPanel').show();
        $('#sumRatingHotelPanel').hide();
        $('#positionPanel').hide();
    });
    $('#sumRatingHotel').click(function () {
        line($(this));
        _hashState('#sumRatingHotel');
        $('#ratingHotelPanel').hide();
        $('#sumRatingHotelPanel').show();
        $('#positionPanel').hide();

    });
$('#position').click(function () {
        line($(this));
        _hashState('#position');
        $('#ratingHotelPanel').hide();
        $('#sumRatingHotelPanel').hide();
        $('#positionPanel').show();
    });


});







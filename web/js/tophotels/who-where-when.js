jQuery(document).ready(function($){

    $('#who-communication').click(function () {
        line($(this));
        _hashState('#who-communication');
        $('#who-communication-panel').show();
        $('#who-countries-panel').hide();
        $('#who-cities-panel').hide();
        $('#who-hotels-panel').hide();
        $('#whoTravelersPanel').hide();
    });
    $('#who-countries').click(function () {
        line($(this));
        _hashState('#who-countries');
        $('#who-communication-panel').hide();
        $('#who-countries-panel').show();
        $('#who-cities-panel').hide();
        $('#who-hotels-panel').hide();
        $('#whoTravelersPanel').hide();
    });
    $('#who-cities').click(function () {
        line($(this));
        _hashState('#who-cities');
        $('#who-communication-panel').hide();
        $('#who-countries-panel').hide();
        $('#who-cities-panel').show();
        $('#who-hotels-panel').hide();
        $('#whoTravelersPanel').hide();
    });
    $('#who-hotels').click(function () {
        line($(this));
        _hashState('#who-hotels');
        $('#who-communication-panel').hide();
        $('#who-countries-panel').hide();
        $('#who-cities-panel').hide();
        $('#who-hotels-panel').show();
        $('#whoTravelersPanel').hide();
    });
    $('#whoTravelers').click(function () {
        line($(this));
        _hashState('#who-hotels');
        $('#who-communication-panel').hide();
        $('#who-countries-panel').hide();
        $('#who-cities-panel').hide();
        $('#who-hotels-panel').hide();
        $('#whoTravelersPanel').show();
    });


});
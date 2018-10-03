jQuery(document).ready(function($){

    $('#traveler').click(function () {
        line($(this));
        _hashState('#traveler');
        $('#travelerPanel').show();
        // $('#TAChoosePanel').hide();
    });


});

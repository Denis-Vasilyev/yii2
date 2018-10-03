$(document).ready(function() {
    $('#hotelTransfer').click(function () {
        line($(this));
        _hashState('#hotelTransfer');
        $('#hotelTransferPanel').show();
        $('#orderTransferPanel').hide();
    });

    $('#orderTransfer').click(function () {
        line($(this));
        _hashState('#orderTransfer');
        $('#hotelTransferPanel').hide();
        $('#orderTransferPanel').show();
    });


});

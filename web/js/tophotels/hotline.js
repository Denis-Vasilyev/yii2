jQuery(document).ready(function($){
    $('#allHotelsMessages').click(function () {
        line($(this));
        _hashState('#allHotelsMessages');
        $('#allHotelsMessagesPanel').show();
        $('#popularPromoPanel').hide();
        $('#popularHotelsPanel').hide();
        $('#archivePanel').hide();
    });

    $('#popularPromo').click(function () {
        line($(this));
        _hashState('#popularPromo');
        $('#allHotelsMessagesPanel').hide();
        $('#popularPromoPanel').show();
        $('#popularHotelsPanel').hide();
        $('#archivePanel').hide();
    });
    $('#popularHotels').click(function () {
        line($(this));
        _hashState('#popularHotels');
        $('#allHotelsMessagesPanel').hide();
        $('#popularPromoPanel').hide();
        $('#popularHotelsPanel').show();
        $('#archivePanel').hide();
    });
    $('#archive').click(function () {
        line($(this));
        _hashState('#archive');
        $('#allHotelsMessagesPanel').hide();
        $('#popularPromoPanel').hide();
        $('#popularHotelsPanel').hide();
        $('#archivePanel').show();
    });
    $('input[name="view"]').on('change', function () {
        if ($('#long').prop('checked')) {
            $('.tape-short__tbl').hide();
            $('.tape-long__tbl').show();
        }
         if ($('#short').prop('checked')) {
            $('.tape-short__tbl').show();
            $('.tape-long__tbl').hide();
        }


    });

});

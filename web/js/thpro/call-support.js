$(document).ready(function() {
    $('#myMsg').click(function () {
        line($(this));
        _hashState('#myMsg');
        $('#myMsgPanel').show();
        $('#sendMsgPanel').hide();
        $('#contactSupportPanel').hide();
    });

    $('#sendMsg').click(function () {
        line($(this));
        _hashState('#sendMsg');
        $('#myMsgPanel').hide();
        $('#sendMsgPanel').show();
        $('#contactSupportPanel').hide();
    });
    $('#contactSupport').click(function () {
        line($(this));
        _hashState('#contactSupport');
        $('#myMsgPanel').hide();
        $('#sendMsgPanel').hide();
        $('#contactSupportPanel').show();
    });


});

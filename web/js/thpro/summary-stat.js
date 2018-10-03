$(document).ready(function() {
    $('#summaryStat').click(function () {
        line($(this));
        _hashState('#channelList');
        $('#summaryStatPanel').show();
    });




});

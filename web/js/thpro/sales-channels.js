$(document).ready(function() {
    $('#channelList').click(function () {
        line($(this));
        _hashState('#channelList');
        $('#channelListPanel').show();
        $('#addChannelPanel').hide();
    });

    $('#addChannel').click(function () {
        line($(this));
        _hashState('#addChannel');
        $('#channelListPanel').hide();
        $('#addChannelPanel').show();
    });


});

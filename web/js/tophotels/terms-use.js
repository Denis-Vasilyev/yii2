$(document).ready(function () {
    $('#role-usage').click(function () {
        line($(this));
        _hashState('#role-usage');
        $('#role-usagePanel').show();
        $('#confidentialityPanel').hide();
        $('#role-moderationPanel').hide();
        $('#rating-countingPanel').hide();
    });

    $('#confidentiality').click(function () {
        line($(this));
        _hashState('#confidentiality');
        $('#role-usagePanel').hide();
        $('#confidentialityPanel').show();
        $('#role-moderationPanel').hide();
        $('#rating-countingPanel').hide();
    });

    $('#role-moderation').click(function () {
        line($(this));
        _hashState('#role-moderation');
        $('#role-usagePanel').hide();
        $('#confidentialityPanel').hide();
        $('#role-moderationPanel').show();
        $('#rating-countingPanel').hide();
    });
    $('#rating-counting').click(function () {
        line($(this));
        _hashState('#rating-counting');
        $('#role-usagePanel').hide();
        $('#confidentialityPanel').hide();
        $('#role-moderationPanel').hide();
        $('#rating-countingPanel').show();
    });


});
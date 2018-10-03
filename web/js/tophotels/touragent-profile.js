$(document).ready(function () {
    $('#pro-touragent').click(function () {
        line($(this));
        _hashState('#pro-touragent');
        $('#pro-touragentPanel').show();
        $('#widgetsPanel').hide();
        $('#activate-profilePanel').hide();
        $('#consultationPanel').hide();
    });

    $('#widgets').click(function () {
        line($(this));
        _hashState('#widgets');
        $('#pro-touragentPanel').hide();
        $('#widgetsPanel').show();
        $('#activate-profilePanel').hide();
        $('#consultationPanel').hide();
    });
    $('#activate-profile').click(function () {
        line($(this));
        _hashState('#activate-profile');
        $('#pro-touragentPanel').hide();
        $('#widgetsPanel').hide();
        $('#activate-profilePanel').show();
        $('#consultationPanel').hide();
    });
    $('#consultation').click(function () {
        line($(this));
        _hashState('#consultation');
        $('#pro-touragentPanel').hide();
        $('#widgetsPanel').hide();
        $('#activate-profilePanel').hide();
        $('#consultationPanel').show();
    });

});
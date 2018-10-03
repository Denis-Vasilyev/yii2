$(document).ready(function () {
    $('#about').click(function () {
        line($(this));
        _hashState('#about');
        $('#aboutPanel').show();
        $('#statPanel').hide();
        $('#contactsPanel').hide();
    });
    $('#stat').click(function () {
        line($(this));
        _hashState('#stat');
        $('#aboutPanel').hide();
        $('#statPanel').show();
        $('#contactsPanel').hide();
    });

    $('#contacts').click(function () {
        line($(this));
        _hashState('#contacts');
        $('#aboutPanel').hide();
        $('#statPanel').hide();
        $('#contactsPanel').show();
    });


});
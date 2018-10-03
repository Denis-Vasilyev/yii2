$(document).ready(function () {
    $('#chips').click(function () {
        line($(this));
        _hashState('#chips');
        $('#chipsPanel').show();
        $('#how-selectPanel').hide();
        $('#add-ideaPanel').hide();
    });
    $('#how-select').click(function () {
        line($(this));
        _hashState('#how-select');
        $('#chipsPanel').hide();
        $('#how-selectPanel').show();
        $('#add-ideaPanel').hide();
    });

    $('#add-idea').click(function () {
        line($(this));
        _hashState('#add-idea');
        $('#chipsPanel').hide();
        $('#how-selectPanel').hide();
        $('#add-ideaPanel').show();
    });

});
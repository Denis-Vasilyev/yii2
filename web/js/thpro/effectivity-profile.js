$(document).ready(function() {
    $('#effectivityProfile').click(function () {
        line($(this));
        _hashState('#effectivityProfile');
        $('#effectivityProfilePanel').show();
        $('#profileRecomendationPanel').hide();
        $('#percentageUsedPanel').hide();
        $('#pumpProfilePanel').hide();
    });

    $('#profileRecomendation').click(function () {
        line($(this));
        _hashState('#profileRecomendation');
        $('#effectivityProfilePanel').hide();
        $('#profileRecomendationPanel').show();
        $('#percentageUsedPanel').hide();
        $('#pumpProfilePanel').hide();
    });

    $('#percentageUsed').click(function () {
        line($(this));
        _hashState('#percentageUsed');
        $('#effectivityProfilePanel').hide();
        $('#profileRecomendationPanel').hide();
        $('#percentageUsedPanel').show();
        $('#pumpProfilePanel').hide();
    });

    $('#pumpProfile').click(function () {
        line($(this));
        _hashState('#pumpProfile');
        $('#effectivityProfilePanel').hide();
        $('#profileRecomendationPanel').hide();
        $('#percentageUsedPanel').hide();
        $('#pumpProfilePanel').show();
    });

});

$(document).ready(function () {
    $('#possibles').click(function () {
        line($(this));
        _hashState('#possibles');
        $('#possiblesPanel').show();
        $('#examplesPanel').hide();
        $('#mediakitPanel').hide();
        $('#requirementsPanel').hide();
        $('#send-requestPanel').hide();
    });
    $('#examples').click(function () {
        line($(this));
        _hashState('#examples');
        $('#possiblesPanel').hide();
        $('#examplesPanel').show();
        $('#mediakitPanel').hide();
        $('#requirementsPanel').hide();
        $('#send-requestPanel').hide();
    });


    $('#requirements').click(function () {
        line($(this));
        _hashState('#requirements');
        $('#possiblesPanel').hide();
        $('#examplesPanel').hide();
        $('#mediakitPanel').hide();
        $('#requirementsPanel').show();
        $('#send-requestPanel').hide();
    });
    $('#send-request').click(function () {
        line($(this));
        _hashState('#send-request');
        $('#possiblesPanel').hide();
        $('#examplesPanel').hide();
        $('#mediakitPanel').hide();
        $('#requirementsPanel').hide();
        $('#send-requestPanel').show();
    });

});
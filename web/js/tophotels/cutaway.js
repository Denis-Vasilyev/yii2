$(document).ready(function () {
    $('#cutaway').click(function () {
        line($(this));
        _hashState('#cutaway');
        $('#cutawayPanel').show();
        $('#recomendPanel').hide();
        $('#hotelsPanel').hide();
        $('#sertificatePanel').hide();
        $('#v0Panel').hide();
    });
    $('#recomend').click(function () {
        line($(this));
        _hashState('#recomend');
        $('#cutawayPanel').hide();
        $('#recomendPanel').show();
        $('#hotelsPanel').hide();
        $('#sertificatePanel').hide();
        $('#v0Panel').hide();
    });
    $('#hotels').click(function () {
        line($(this));
        _hashState('#hotels');
        $('#cutawayPanel').hide();
        $('#recomendPanel').hide();
        $('#hotelsPanel').show();
        $('#v0Panel').hide();
        $('#sertificatePanel').hide();
    });
    $('#sertificate').click(function () {
        line($(this));
        _hashState('#sertificate');
        $('#cutawayPanel').hide();
        $('#recomendPanel').hide();
        $('#hotelsPanel').hide();
        $('#v0Panel').hide();
        $('#sertificatePanel').show();
    });
    $('#v0').click(function () {
        line($(this));
        _hashState('#v0');
        $('#cutawayPanel').hide();
        $('#recomendPanel').hide();
        $('#hotelsPanel').hide();
        $('#sertificatePanel').hide();
        $('#v0Panel').show();
    });

});
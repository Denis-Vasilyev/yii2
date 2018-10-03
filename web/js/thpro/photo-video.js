$(document).ready(function() {
    $('#tapePhotoAdd').click(function () {
        line($(this));
        _hashState('#tapePhotoAdd');
        $('#tapePhotoAddPanel').show();
        $('#tapePhotoChangePanel').hide();
        $('#tapePhotoDelPanel').hide();
    });

    $('#tapePhotoChange').click(function () {
        line($(this));
        _hashState('#tapePhotoChange');
        $('#tapePhotoAddPanel').hide();
        $('#tapePhotoChangePanel').show();
        $('#tapePhotoDelPanel').hide();
    });

    $('#tapePhotoDel').click(function () {
        line($(this));
        _hashState('#tapePhotoDel');
        $('#tapePhotoAddPanel').hide();
        $('#tapePhotoChangePanel').hide();
        $('#tapePhotoDelPanel').show();
    });


});







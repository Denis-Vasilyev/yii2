$(document).ready(function () {
    $('#profile').click(function () {
        line($(this));
        _hashState('#profile');
        $('#profilePanel').show();
        $('#about-userPanel').hide();
        $('#write-letterPanel').hide();
        $('#delPanel').hide();
    });

    $('#about-user').click(function () {
        line($(this));
        _hashState('#about-user');
        $('#profilePanel').hide();
        $('#about-userPanel').show();
        $('#write-letterPanel').hide();
        $('#delPanel').hide();
    });
    $('#write-letter').click(function () {
        line($(this));
        _hashState('#write-letter');
        $('#profilePanel').hide();
        $('#about-userPanel').hide();
        $('#write-letterPanel').show();
        $('#delPanel').hide();
    });
    $('#del').click(function () {
        line($(this));
        _hashState('#del');
        $('#profilePanel').hide();
        $('#about-userPanel').hide();
        $('#write-letterPanel').hide();
        $('#delPanel').show();
    });
    });
jQuery(document).ready(function($){

    $('#TAEkb').click(function () {
        line($(this));
        _hashState('#TAEkb');
        $('#TAEkbPanel').show();
        $('#TAChoosePanel').hide();
    });
    $('#TAChoose').click(function () {
        line($(this));
        _hashState('#TAChoose');
        $('#TAEkbPanel').hide();
        $('#TAChoosePanel').show();
    });

    $('.js-photo-big').on('click', function () {
        $(this).toggleClass('big');
    });

});

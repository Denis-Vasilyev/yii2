$(document).ready(function () {
    $('#publications').click(function () {
        line($(this));
        _hashState('#publications');
        $('#publicationsPanel').show();
        $('#new-hotelsPanel').hide();
        $('#week-countryPanel').hide();
        $('#champPanel').hide();
    });

    $('#new-hotels').click(function () {
        line($(this));
        _hashState('#new-hotels');
        $('#publicationsPanel').hide();
        $('#new-hotelsPanel').show();
        $('#week-countryPanel').hide();
        $('#champPanel').hide();
    });
    $('#week-country').click(function () {
        line($(this));
        _hashState('#week-country');
        $('#publicationsPanel').hide();
        $('#new-hotelsPanel').hide();
        $('#week-countryPanel').show();
        $('#champPanel').hide();
    });
    $('#champ').click(function () {
        line($(this));
        _hashState('#champ');
        $('#publicationsPanel').hide();
        $('#new-hotelsPanel').hide();
        $('#week-countryPanel').hide();
        $('#champPanel').show();
    });


    $('.index-banner-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });

});


$(document).on('click', '.index-pp__close', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
});
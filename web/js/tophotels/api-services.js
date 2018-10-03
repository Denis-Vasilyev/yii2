$(document).ready(function () {
    $('#capability').click(function () {
        line($(this));
        _hashState('#capability');
        $('#capabilityPanel').show();
        $('#examplesPanel').hide();
        $('#pricePanel').hide();
        $('#sendApplicationPanel').hide();
        $('#hotelOldPanel').hide();
        $('#examplesgrapherPanel').hide();
    });

    $('#examples').click(function () {
        line($(this));
        _hashState('#examples');
        $('#capabilityPanel').hide();
        $('#examplesPanel').show();
        $('#pricePanel').hide();
        $('#sendApplicationPanel').hide();
        $('#hotelOldPanel').hide();
        $('#examplesgrapherPanel').hide();
    });
    $('#price').click(function () {
        line($(this));
        _hashState('#price');
        $('#capabilityPanel').hide();
        $('#examplesPanel').hide();
        $('#pricePanel').show();
        $('#sendApplicationPanel').hide();
        $('#hotelOldPanel').hide();
        $('#examplesgrapherPanel').hide();
    });

    $('#sendApplication').click(function () {
        line($(this));
        _hashState('#sendApplication');
        $('#capabilityPanel').hide();
        $('#examplesPanel').hide();
        $('#pricePanel').hide();
        $('#sendApplicationPanel').show();
        $('#hotelOldPanel').hide();
        $('#examplesgrapherPanel').hide();
    });

    $('.js-act-twist').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 400);
    });
});

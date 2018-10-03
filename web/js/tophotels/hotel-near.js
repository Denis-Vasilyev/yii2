$(document).ready(function() {
    $('#placeNear').click(function () {
        line($(this));
        _hashState('#placeNear');
        $('#placeNearPanel').show();
        $('#guidesExcursionsPanel').hide();
        $('#overviewResortPanel').hide();
        $('#nearAddPlacePanel').hide();
    });

    $('#guidesExcursions').click(function () {
        line($(this));
        _hashState('#guidesExcursions');
        $('#placeNearPanel').hide();
        $('#guidesExcursionsPanel').show();
        $('#overviewResortPanel').hide();
        $('#nearAddPlacePanel').hide();
    });

    $('#overviewResort').click(function () {
        line($(this));
        _hashState('#overviewResort');
        $('#placeNearPanel').hide();
        $('#guidesExcursionsPanel').hide();
        $('#overviewResortPanel').show();
        $('#nearAddPlacePanel').hide();
    });

    $('#nearAddPlace').click(function () {
        line($(this));
        _hashState('#nearAddPlace');
        $('#placeNearPanel').hide();
        $('#guidesExcursionsPanel').hide();
        $('#overviewResortPanel').hide();
        $('#nearAddPlacePanel').show();
    });

    $(function () {
        $('.js-map-open-modal').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
        $('.js-map-open-modal').on('click', function () {
            $('html').css('margin-right', '17px');
        });
        $(document).on('click', '.map-pp__close', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });

    $(function () {
        $('.js-gmap-open-modal').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
        $('.js-gmap-open-modal').on('click', function () {
            $('html').css('margin-right', '17px');
        });
        $(document).on('click', '.map-pp__close', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });

});

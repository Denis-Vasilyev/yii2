jQuery(document).ready(function ($) {
    $('#MyTravels').click(function () {
        line($(this));
        _hashState('#MyTravels');
        $('#MyTravelsPanel').show();
        $('#MyTravelPlansPanel').hide();
        $('#OnMapPanel').hide();
        $('#AddTravelPanel').hide();
        $('#MyTravelHotelsPanel').hide();
        $('#OldPanel').hide();
    });
    $('#MyTravelPlans').click(function () {
        line($(this));
        _hashState('#MyTravelPlans');
        $('#MyTravelsPanel').hide();
        $('#MyTravelPlansPanel').show();
        $('#OnMapPanel').hide();
        $('#AddTravelPanel').hide();
        $('#MyTravelHotelsPanel').hide();
        $('#OldPanel').hide();
    });

    $('#OnMap').click(function () {
        line($(this));
        _hashState('#OnMap');
        $('#MyTravelsPanel').hide();
        $('#MyTravelPlansPanel').hide();
        $('#OnMapPanel').show();
        $('#AddTravelPanel').hide();
        $('#OldPanel').hide();
        $('#MyTravelHotelsPanel').hide();
    });
    $('#AddTravel').click(function () {
        line($(this));
        _hashState('#AddTravel');
        $('#MyTravelsPanel').hide();
        $('#MyTravelPlansPanel').hide();
        $('#OnMapPanel').hide();
        $('#AddTravelPanel').show();
        $('#OldPanel').hide();
        $('#MyTravelHotelsPanel').hide();
    });

    $('#Old').click(function () {
        line($(this));
        _hashState('#Old');
        $('#MyTravelsPanel').hide();
        $('#MyTravelPlansPanel').hide();
        $('#OnMapPanel').hide();
        $('#AddTravelPanel').hide();
        $('#OldPanel').show();
        $('#MyTravelHotelsPanel').hide();
    });
    $('#MyTravelHotels').click(function () {
        line($(this));
        _hashState('#MyTravelHotels');
        $('#MyTravelsPanel').hide();
        $('#MyTravelPlansPanel').hide();
        $('#OnMapPanel').hide();
        $('#AddTravelPanel').hide();
        $('#OldPanel').hide();
        $('#MyTravelHotelsPanel').show();
    });


    $('.cloud-link').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 300);
    });

});

jQuery(document).ready(function () {
    jQuery('#vmap').vectorMap({
        map: 'world_en',
        backgroundColor: '#fff',
        borderColor: '#475669',
        borderOpacity: 0.25,
        borderWidth: 1,
        color: '#F2F2F2',
        enableZoom: true,
        hoverColor: '#5cc2b4',
        hoverOpacity: null,
        normalizeFunction: 'linear',
        selectedColor: '#00a551',
    });
});


$(function () {
    $('.edit-travel-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $(document).on('click', '.edit-travel-pp-close', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
        $(this).closest('.step2').hide();
        $(this).closest('.step2').prev('.step1').show();
    });
});


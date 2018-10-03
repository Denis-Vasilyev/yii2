jQuery(document).ready(function($){
    $('#MapTravels').click(function () {
        line($(this));
        _hashState('#MapTravels');
        $('#MapTravelsPanel').show();
        $('#TravelOnMapPanel').hide();
    });
    $('#TravelOnMap').click(function () {
        line($(this));
        _hashState('#TravelOnMap');
        $('#MapTravelsPanel').hide();
        $('#TravelOnMapPanel').show();
    });
   $('.topline-tourist__stub').click(function () {
       $(this).toggleClass('female');
       $(this).toggleClass('male')
    });


    $('.cloud-link').on('click', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 300);
    });
});

jQuery(document).ready(function() {
    jQuery('#vmap2').vectorMap({
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

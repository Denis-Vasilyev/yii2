jQuery(document).ready(function ($) {
    $('#MyPreference').click(function () {
        line($(this));
        _hashState('#MyPreference');
        $('#MyPreferencePanel').show();
        $('#MyPlansPanel').hide();
        $('#MyDirectionsPanel').hide();
        $('#MyTrackingPanel').hide();
        $('#MyPreference2Panel').hide();
    });
    $('#MyPlans').click(function () {
        line($(this));
        _hashState('#MyPlans');
        $('#MyPreferencePanel').hide();
        $('#MyPlansPanel').show();
        $('#MyDirectionsPanel').hide();
        $('#MyTrackingPanel').hide();
        $('#MyPreference2Panel').hide();
    });
    $('#MyDirections').click(function () {
        line($(this));
        _hashState('#MyDirections');
        $('#MyPreferencePanel').hide();
        $('#MyPlansPanel').hide();
        $('#MyDirectionsPanel').show();
        $('#MyTrackingPanel').hide();
        $('#MyPreference2Panel').hide();
    });
    $('#MyTracking').click(function () {
        line($(this));
        _hashState('#MyTracking');
        $('#MyPreferencePanel').hide();
        $('#MyPlansPanel').hide();
        $('#MyDirectionsPanel').hide();
        $('#MyTrackingPanel').show();
        $('#MyPreference2Panel').hide();
    });
    $('#MyPreference2').click(function () {
        line($(this));
        _hashState('#MyPreference2');
        $('#MyPreferencePanel').hide();
        $('#MyPlansPanel').hide();
        $('#MyDirectionsPanel').hide();
        $('#MyTrackingPanel').hide();
        $('#MyPreference2Panel').show();
    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.line');
        $('.tab').removeClass('active');
        obj.addClass('active');
        el.clearQueue().animate({
            left: p,
            width: w
        }, 300);
    };
    var _hashState = function (_hash) {
        if (history.pushState) {
            history.pushState(null, null, _hash);
        }
        else {
            location.hash = _hash;
        }
    };
    if (!window.location.hash)
        $('.tab.active').first().click();
    else
        $(window.location.hash).click();
    $(window).bind('hashchange', function () {
        $(window.location.hash).click();
    });

    $('input[name="travelPriority"]').on('change', function () {
        if ($('#travelPriority1').prop('checked')) {
            $(this).closest('.d-ib ').find('.js-show-filed').show();
        } else {
            $(this).closest('.d-ib ').find('.js-show-filed').hide();
        }

        if ($('#travelPriority2').prop('checked')) {
            $(this).closest('.d-ib ').find('.js-show-filed').show();
        }
        else {
            $('#travelPriority2').closest('.d-ib ').find('.js-show-filed').hide();
        }
    });

    $('input[name="travelPlane"]').on('change', function () {
        if ($('#travelPlane2').prop('checked')) {
            $('.js-transp').show();
        } else {
            $('.js-transp').hide();
        }

    });
    $('input[name="preferevce"]').on('change', function () {
        if ($(this).prop('checked')) {
            $(this).closest('.box-heart').addClass('active');
        } else {

            $(this).closest('.box-heart').removeClass('active');
        }

    });
    $('input[name="room"]').on('change', function () {
        if ($('#filterRadio1').prop('checked')) {
            $('.js-show-classHotels').show();
        } else {
            $('.js-show-classHotels').hide();
        }

    });



 $('.my-preference-wrap__star-block-item').hover(
        function () {
            console.log($(this).index());
            if ($(this).index() === 0 && $(this).hasClass('active')) {

                $(this).removeClass('active');
            } else {

                $(this).addClass('active');
            }
            $(this).prevAll().addClass('active');
            $(this).nextAll('.active').removeClass('active')
        },
        function () {

        }
    );


});

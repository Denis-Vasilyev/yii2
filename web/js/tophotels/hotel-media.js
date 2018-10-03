$(document).ready(function () {
    $('#hotelGallery').click(function () {
        line($(this));
        _hashState('#hotelGallery');
        $('#hotelGalleryPanel').show();
        $('#hotelPhotoPanel').hide();
        $('#hotelVideoPanel').hide();
        $('#hotelOldPanel').hide();
        $('#hotelPhotographerPanel').hide();
    });

    $('#hotelPhoto').click(function () {
        line($(this));
        _hashState('#hotelPhoto');
        $('#hotelGalleryPanel').hide();
        $('#hotelPhotoPanel').show();
        $('#hotelVideoPanel').hide();
        $('#hotelOldPanel').hide();
        $('#hotelPhotographerPanel').hide();
    });

    $('#hotelVideo').click(function () {
        line($(this));
        _hashState('#hotelVideo');
        $('#hotelGalleryPanel').hide();
        $('#hotelPhotoPanel').hide();
        $('#hotelVideoPanel').show();
        $('#hotelOldPanel').hide();
        $('#hotelPhotographerPanel').hide();
    });
    $('#hotelOld').click(function () {
        line($(this));
        _hashState('#hotelOld');
        $('#hotelGalleryPanel').hide();
        $('#hotelPhotoPanel').hide();
        $('#hotelVideoPanel').hide();
        $('#hotelOldPanel').show();
        $('#hotelPhotographerPanel').hide();
    });
    $('#hotelPhotographer').click(function () {
        line($(this));
        _hashState('#hotelOld');
        $('#hotelGalleryPanel').hide();
        $('#hotelPhotoPanel').hide();
        $('#hotelVideoPanel').hide();
        $('#hotelOldPanel').hide();
        $('#hotelPhotographerPanel').show();
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
        $('.photo-video-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange', function () {
        $(window.location.hash).click();
    });

    $('select[name="categorySumo"]').SumoSelect();
    $('select[name="authorsSumo"]').SumoSelect();
    $('select[name="yearsSumo"]').SumoSelect();


    $('input[name="sizePhotoList"]').on('change', function () {
        if ($('#smallPhoto').prop('checked')) {
            $(this).closest('.panel').find('.hotelPhoto-list').addClass('small-scr');
            $(this).closest('.panel').find('.hotelPhoto-list').removeClass('medium-scr');
            $(this).closest('.panel').find('.hotelPhoto-list').removeClass('big-scr');
            $(this).closest('.panel').find('.hotelPhoto-list').removeClass(' middle-scr')
        }
        else if ($('#mediumPhoto').prop('checked')) {

            $(this).closest('.panel').find('.hotelPhoto-list').removeClass('small-scr');
            $(this).closest('.panel').find('.hotelPhoto-list').addClass('medium-scr');
            $(this).closest('.panel').find('.hotelPhoto-list').removeClass('big-scr');
            $(this).closest('.panel').find('.hotelPhoto-list').removeClass(' middle-scr')
        }
        else if ($('#middlePhoto').prop('checked')) {
            $(this).closest('.panel').find('.hotelPhoto-list').removeClass('small-scr');
            $(this).closest('.panel').find('.hotelPhoto-list').removeClass('medium-scr');
            $(this).closest('.panel').find('.hotelPhoto-list').removeClass('big-scr');
            $(this).closest('.panel').find('.hotelPhoto-list').addClass(' middle-scr')
        }
        else if ($('#bigPhoto').prop('checked')) {
            $(this).closest('.panel').find('.hotelPhoto-list').removeClass('small-scr');
            $(this).closest('.panel').find('.hotelPhoto-list').removeClass('medium-scr');
            $(this).closest('.panel').find('.hotelPhoto-list').addClass('big-scr');
            $(this).closest('.panel').find('.hotelPhoto-list').removeClass(' middle-scr')
        }


    });


    $('.media-list__link').hover(function () {
            $(this).find('.media-list__ttl').hide();
            $(this).find('.media-list__ttl-hidden').addClass('active');
        },
        function () {
            $(this).find('.media-list__ttl').show();
            $(this).find('.media-list__ttl-hidden').removeClass('active');
        }
    );

});

$(document).on('click', '.modal-hotel_header-close', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
});

$(document).on('click', '.hotel-modal-bg', function (e) {
    $('.mfp-bg').addClass('modal-hotel-shadow')
});

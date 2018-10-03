jQuery(document).ready(function ($) {
    $('#TapeMyActions').click(function () {
        line($(this));
        _hashState('#TapeMyActions');
        $('#TapeMyActionsPanel').show();
        $('#MyPhotosPanel').hide();
        $('#MyActHotelsPanel').hide();
        $('#BrowsingHistoryPanel').hide();
        $('#olderPanel').hide();
        $('#MyTabPanel').hide();
    });
    $('#MyPhotos').click(function () {
        line($(this));
        _hashState('#MyPhotos');
        $('#TapeMyActionsPanel').hide();
        $('#MyPhotosPanel').show();
        $('#MyActHotelsPanel').hide();
        $('#BrowsingHistoryPanel').hide();
        $('#olderPanel').hide();
        $('#MyTabPanel').hide();
    });
    $('#MyActHotels').click(function () {
        line($(this));
        _hashState('#MyActHotels');
        $('#TapeMyActionsPanel').hide();
        $('#MyPhotosPanel').hide();
        $('#MyActHotelsPanel').show();
        $('#BrowsingHistoryPanel').hide();
        $('#olderPanel').hide();
        $('#MyTabPanel').hide();
    });
    $('#BrowsingHistory').click(function () {
        line($(this));
        _hashState('#BrowsingHistory');
        $('#TapeMyActionsPanel').hide();
        $('#MyPhotosPanel').hide();
        $('#MyActHotelsPanel').hide();
        $('#BrowsingHistoryPanel').show();
        $('#olderPanel').hide();
        $('#MyTabPanel').hide();
    });
    $('#older').click(function () {
        line($(this));
        _hashState('#older');
        $('#TapeMyActionsPanel').hide();
        $('#MyPhotosPanel').hide();
        $('#MyActHotelsPanel').hide();
        $('#BrowsingHistoryPanel').hide();
        $('#olderPanel').show();
        $('#MyTabPanel').hide();
    });
    $('#MyTab').click(function () {
        line($(this));
        _hashState('#MyTab');
        $('#TapeMyActionsPanel').hide();
        $('#MyPhotosPanel').hide();
        $('#MyActHotelsPanel').hide();
        $('#BrowsingHistoryPanel').hide();
        $('#olderPanel').hide();
        $('#MyTabPanel').show();
    });

    $('.older-review__rss').on('click', function () {
        $(this).toggleClass('active')
    });
    $('.my-act-hearts  .my-act-hearts__icon').hover(function () {
            $(this).prevAll().addClass('active');
            $(this).nextAll().removeClass('active');
            $(this).addClass('active');
        },
        function () {
            if ($(this).index() === 0) {
                $(this).removeClass('active');
            }
        }
    );


    $('.confirm-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true

    });

    $('.add-mark-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true

    });


});

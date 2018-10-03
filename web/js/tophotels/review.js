$(document).ready(function () {
    $('#search').click(function () {
        line($(this));
        _hashState('#search');
        $('#searchPanel, .searchPanel').show();
        $('#no-hotelPanel, .no-hotelPanel').hide();
        $('#olderPanel, .olderPanel').hide();
        $('#search-2Panel, .search-2Panel').hide();
    });

    $('#no-hotel').click(function () {
        line($(this));
        _hashState('#no-hotel');
        $('#searchPanel, .searchPanel').hide();
        $('#no-hotelPanel, .no-hotelPanel').show();
        $('#olderPanel, .olderPanel').hide();
        $('#search-2Panel, .search-2Panel').hide();
    });
    $('#older').click(function () {
        line($(this));
        _hashState('#older');
        $('#searchPanel, .searchPanel').hide();
        $('#no-hotelPanel, .no-hotelPanel').hide();
        $('#olderPanel, .olderPanel').show();
        $('#search-2Panel, .search-2Panel').hide();
    });
    $('#search-2').click(function () {
        line($(this));
        _hashState('#search-2');
        $('#searchPanel, .searchPanel').hide();
        $('#no-hotelPanel, .no-hotelPanel').hide();
        $('#olderPanel, .olderPanel').hide();
        $('#search-2Panel, .search-2Panel').show();
    });



    $('.topSection-wide .bth__btn ').on('click', function () {
        $(this).find('.bth__btn-txt').text('Отправляю запрос')
    });


    $('.not-my-review-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('.my-review-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
});
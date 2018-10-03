$(document).ready(function() {
    $('#inHotel').click(function () {
        line($(this));
        _hashState('#inHotel');
        $('#inHotelPanel').show();
        $('#allGuestHotelPanel').hide();
        $('#oftenVisitPanel').hide();
        $('#checkHotelPanel').hide();
        $('#statHotelPanel').hide();
    });

    $('#allGuestHotel').click(function () {
        line($(this));
        _hashState('#allGuestHotel');
        $('#inHotelPanel').hide();
        $('#allGuestHotelPanel').show();
        $('#oftenVisitPanel').hide();
        $('#checkHotelPanel').hide();
        $('#statHotelPanel').hide();
    });

    $('#oftenVisit').click(function () {
        line($(this));
        _hashState('#oftenVisit');
        $('#inHotelPanel').hide();
        $('#allGuestHotelPanel').hide();
        $('#oftenVisitPanel').show();
        $('#checkHotelPanel').hide();
        $('#statHotelPanel').hide();
    });

    $('#checkHotel').click(function () {
        line($(this));
        _hashState('#checkHotel');
        $('#inHotelPanel').hide();
        $('#allGuestHotelPanel').hide();
        $('#oftenVisitPanel').hide();
        $('#checkHotelPanel').show();
        $('#statHotelPanel').hide();
    });

    $('#statHotel').click(function () {
        line($(this));
        _hashState('#statHotel');
        $('#inHotelPanel').hide();
        $('#allGuestHotelPanel').hide();
        $('#oftenVisitPanel').hide();
        $('#checkHotelPanel').hide();
        $('#statHotelPanel').show();
    });

});

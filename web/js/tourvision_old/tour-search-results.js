jQuery(document).ready(function($){
    $('#tourSearch').click(function () {
        _hashState('#tourSearch');
        line($(this));
        $('#tourSearchPanel').show();
        $('#searchResultsPanel').hide();
        $('#hotelSearchPanel').hide();
        $('#myInterestsPanel').hide();
    });

    $('#searchResults').click(function () {
        _hashState('#searchResults');
        line($(this));
        $('#tourSearchPanel').hide();
        $('#searchResultsPanel').show();
        $('#hotelSearchPanel').hide();
        $('#myInterestsPanel').hide();
    });

    $('#hotelSearch').click(function () {
        _hashState('#hotelSearch');
        line($(this));
        $('#tourSearchPanel').hide();
        $('#searchResultsPanel').hide();
        $('#hotelSearchPanel').show();
        $('#myInterestsPanel').hide();
    });

    $('#myInterests').click(function () {
        _hashState('#myInterests');
        line($(this));
        $('#tourSearchPanel').hide();
        $('#searchResultsPanel').hide();
        $('#hotelSearchPanel').hide();
        $('#myInterestsPanel').show();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.search-line');
        $('.search-tab').removeClass('active');
        obj.addClass('active');
        el.clearQueue().animate({
            left: p,
            width: w
        }, 300);
    };


    var _hashState = function(_hash) {
        if(history.pushState) {
            history.pushState(null, null, _hash);
        }
        else {
            location.hash = _hash;
        }
    };



    if(!window.location.hash)
        $('.search-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange',function(){
        $(window.location.hash).click();
    });


    $('#js-operator-open').on('click', function () {
        $(this).hide();
        $(this).next().show();
    });

    $('#js-operator-hide').on('click', function () {
        $(this).closest('.search-operator-list').hide();
        $(this).closest('.search-operator-list').prev().show();
    });

    $('#runSearchHotelGrp').on('click', function () {
        $('.group-result__link').removeClass('active');
        $(this).addClass('active');
        $('#hotelContainer').show();
        $('#tourContainer').hide();
        $('#dateContainer').hide();
        $('#operatorContainer').hide();
    });

    $('#runSearchNoGrp').on('click', function () {
        $('.group-result__link').removeClass('active');
        $(this).addClass('active');
        $('#hotelContainer').hide();
        $('#tourContainer').show();
        $('#dateContainer').hide();
        $('#operatorContainer').hide();
    });

    $('#runSearchDepGrp').on('click', function () {
        $('.group-result__link').removeClass('active');
        $(this).addClass('active');
        $('#hotelContainer').hide();
        $('#tourContainer').hide();
        $('#dateContainer').show();
        $('#operatorContainer').hide();
    });

    $('#openTourEar').on('click', function () {
        $('.group-result__link').removeClass('active');
        $(this).addClass('active');
        $('#hotelContainer').hide();
        $('#tourContainer').hide();
        $('#dateContainer').hide();
        $('#operatorContainer').show();
    });

});


jQuery(document).ready(function($){
    $('#interestLastSearch').click(function () {
        line($(this));
        $('#interestLastSearchPanel').show();
        $('#interestHotelSearchPanel').hide();
        $('#interestFavTourPanel').hide();
        $('#interestFavHotelPanel').hide();
    });

    $('#interestHotelSearch').click(function () {
        line($(this));
        $('#interestLastSearchPanel').hide();
        $('#interestHotelSearchPanel').show();
        $('#interestFavTourPanel').hide();
        $('#interestFavHotelPanel').hide();
    });

    $('#interestFavTour').click(function () {
        line($(this));
        $('#interestLastSearchPanel').hide();
        $('#interestHotelSearchPanel').hide();
        $('#interestFavTourPanel').show();
        $('#interestFavHotelPanel').hide();
    });

    $('#interestFavHotel').click(function () {
        line($(this));
        $('#interestLastSearchPanel').hide();
        $('#interestHotelSearchPanel').hide();
        $('#interestFavTourPanel').hide();
        $('#interestFavHotelPanel').show();
    });



    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.interest-line');
        $('.interest-tab').removeClass('active');
        obj.addClass('active');
        el.clearQueue().animate({
            left: p,
            width: w
        }, 300);
    };

    var _hashState = function(_hash) {
        if(history.pushState) {
            history.pushState(null, null, _hash);
        }
        else {
            location.hash = _hash;
        }
    };



    if(!window.location.hash)
        $('.interest-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange',function(){
        $(window.location.hash).click();
    });
});


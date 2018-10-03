$(document).ready(function () {
    $('#catalog').click(function () {
        line($(this));
        _hashState('#catalog');
        $('#catalogPanel').show();
        $('#by-hotel-namePanel').hide();
        $('#byHotelPanel').hide();
    });
    $('#by-hotel-name').click(function () {
        line($(this));
        _hashState('#by-hotel-name');
        $('#catalogPanel').hide();
        $('#by-hotel-namePanel').show();
        $('#byHotelPanel').hide();
    });
    $('#by-hotel').click(function () {
        line($(this));
        _hashState('#by-hotel');
        $('#catalogPanel').hide();
        $('#by-hotel-namePanel').hide();
        $('#byHotelPanel').show();
    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.lsfw-line');
        $('.lsfw-tab').removeClass('active');
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
        $('.periodic-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange', function () {
        $(window.location.hash).click();
    });




// открытие taba По отелю
    var tabHide3 = $('#by-hotel');

    $('.list-hotel__bth')
        .on("click", function () {
            $(tabHide3).show()
                .click();

            return false
        });

    $('#catalog').on("click", function () {
        $(tabHide3).hide();

    });
// end_открытие taba По отелю


    // открытие taba По конкретному отелю
    var tabHideHotel = $('#by-hotel-name');

    $('.selected-hotel td a, .catalog-hotels td a ')
        .on("click", function () {
            var hotelName = $(this).text();
            $(tabHideHotel).text(hotelName);

            $(tabHideHotel).show()
                .click();
        });

    $('#catalog')
        .on("click", function () {
            $(tabHideHotel).hide()
        });

// end_открытие taba По конкретному отелю

    $('.all-mounth label').on('click', function () {
        $('.box-check input:disabled').removeAttr("disabled").prop("checked", true);
        $('.by-hotel-right-cell.disable-cost').removeClass('disable-cost');
        $('.hotel__calc span').text('Выбрано: 12 месяцев = 17 650');
    });

    $('.checkbox-mounth label').on('click', function (e) {
        var indexCell = $(this).closest('td').index();
        if (indexCell != 1) {
            $('.by-data td:eq(' + indexCell + ')').toggleClass('disable-cost');
        }

    });


});
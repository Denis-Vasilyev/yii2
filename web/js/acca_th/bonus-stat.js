$(document).ready(function () {
    $('#by-types').click(function () {
        line($(this));
        _hashState('#by-types');
        $('#by-typesPanel').show();
        $('#by-statusPanel').hide();
        $('#by-countryPanel').hide();
        $('#by-cityPanel').hide();
        $('#booking-statPanel').hide();
        $('#oldPanel').hide();
    });
    $('#by-status').click(function () {
        line($(this));
        _hashState('#by-status');
        $('#by-typesPanel').hide();
        $('#by-statusPanel').show();
        $('#by-countryPanel').hide();
        $('#by-cityPanel').hide();
        $('#booking-statPanel').hide();
        $('#oldPanel').hide();
    });
    $('#by-country').click(function () {
        line($(this));
        _hashState('#by-country');
        $('#by-typesPanel').hide();
        $('#by-statusPanel').hide();
        $('#by-countryPanel').show();
        $('#by-cityPanel').hide();
        $('#booking-statPanel').hide();
        $('#oldPanel').hide();
    });
    $('#by-city').click(function () {
        line($(this));
        _hashState('#by-city');
        $('#by-typesPanel').hide();
        $('#by-statusPanel').hide();
        $('#by-countryPanel').hide();
        $('#by-cityPanel').show();
        $('#booking-statPanel').hide();
        $('#oldPanel').hide();
    });
    $('#booking-stat').click(function () {
        line($(this));
        _hashState('#booking-stat');
        $('#by-typesPanel').hide();
        $('#by-statusPanel').hide();
        $('#by-countryPanel').hide();
        $('#by-cityPanel').hide();
        $('#booking-statPanel').show();
        $('#oldPanel').hide();
    });
    $('#old').click(function () {
        line($(this));
        _hashState('#old');
        $('#by-typesPanel').hide();
        $('#by-statusPanel').hide();
        $('#by-countryPanel').hide();
        $('#by-cityPanel').hide();
        $('#booking-statPanel').hide();
        $('#oldPanel').show();
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


    $('input[name="geography"]').on('change', function () {
        if ($('#cities').prop('checked')) {
            $('.js-tbl-country').hide();
            $('.js-tbl-city').show();
        }
        else {
            $('.js-tbl-country').show();
            $('.js-tbl-city').hide();
        }
    });


    $('select[id="status-f"]').SumoSelect();

    var $selectSearchHotel = $('#search-hotel').selectize({
        placeholder:'Введите отель',
        render: {
            option: function (data, escape) {
                return '<div class="user-block__info">' + data.text + '</div>'
            },

            item: function (data, escape) {
                return '<p class="user-form__info-type">' + data.text + '</p> '
            }

        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeSearchHotel.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                selectizeSearchHotel.addOption({
                    value: "1234",
                    text: "Японская водолечебница (Dalian Kerren Internatianal Hot Spring Club) 4*"
                });
            }
            if (str !== "" && "123".startsWith(str.toLowerCase())) {
                selectizeSearchHotel.addOption({
                    value: "123",
                    text: "Mriya Resort & Spa (Мрия Резорт энд Спа) 5*"
                });
            }

            selectizeSearchHotel.refreshOptions();
        },
        onDelete: function () {
            selectizeSearchHotel.clearOptions();
        }
    });

    var selectizeSearchHotel = $selectSearchHotel[0].selectize;





    var $selectCountry = $('#country').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-block__info">' + data.text + '</div>'
            },

            item: function (data, escape) {
                return '<p class="user-form__info-type">' + data.text + '</p> '
            }

        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeCountry.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                selectizeCountry.addOption({
                    value: "1234",
                    text: "Россия"
                });
            }
            if (str !== "" && "123".startsWith(str.toLowerCase())) {
                selectizeCountry.addOption({
                    value: "123",
                    text: "Украина"
                });
            }

            selectizeCountry.refreshOptions();
        },
        onDelete: function () {
            selectizeCountry.clearOptions();
        }
    });

    var selectizeCountry = $selectCountry[0].selectize;



    // создаем первый пикер
    initGeminiDPicker('datePicker1', function(newValue) {
        var datePicker = $('#js-dpicker-filter-datePicker1');
        var d = newValue.newDate.split(' - ');
        $('#datePicker1').text(newValue.newDate);

        datePicker.addClass('hidden');
        // d[0] это дата от
        // d[1] это дата до, строками - используй или newValue.newDate - это строчка
    });

    // создаем второй пикер
    initGeminiDPicker('datePicker2', function(newValue) {
        var datePicker = $('#js-dpicker-filter-datePicker2');
        var d = newValue.newDate.split(' - ');
        $('#datePicker2').text(newValue.newDate);
        datePicker.addClass('hidden');
        // d[0] это дата от
        // d[1] это дата до, строками - используй или newValue.newDate - это строчка
    });

});

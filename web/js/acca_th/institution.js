$(document).ready(function () {

    filterHotelSelect
    var $selectSearch = $('#insitution-searchHotel').selectize({
        placeholder: 'Введите название отеля',
        render: {
            option: function (data, escape) {
                return '<div class="user-block__info"><span class="bold-link">' + data.text + '</span>' +
                    '<p class="user-block__info-place">' + data.hotelID + ' , ' + data.hotelLocation + '</p> ' + '</div>'
            },

            item: function (data, escape) {
                return '<p class="user-form__info-type">' + data.text + '</p> '
            }

        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeSearch.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                selectizeSearch.addOption({
                    value: "1234",
                    text: "Японская водолечебница (Dalian Kerren Internatianal Hot Spring Club) 4*",
                    hotelID: "ID 123456",
                    hotelLocation: "Турция, Белек"

                });
            }

            selectizeSearch.refreshOptions();
        },

        onDelete: function () {
            selectizeSearch.clearOptions();
        },
        onFocus: function () {
            $('.selectize-input').focus().addClass('selectize-input-focus');
        },
        onBlur: function () {
            $('.selectize-input').focus().removeClass('selectize-input-focus');
        }
    });
    var selectizeSearch = $selectSearch[0].selectize;


    var $selectFilter = $('#filterHotelSelect').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-block__info"><span class="bold-link">' + data.text + '</span>' +
                    '<p class="user-block__info-place">' + data.hotelID + ' , ' + data.hotelLocation + '</p> ' + '</div>'
            },

            item: function (data, escape) {
                return '<p class="user-form__info-type">' + data.text + '</p> '
            }

        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeFilter.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                selectizeFilter.addOption({
                    value: "1234",
                    text: "Японская водолечебница (Dalian Kerren Internatianal Hot Spring Club) 4*",
                    hotelID: "ID 123456",
                    hotelLocation: "Турция, Белек"

                });
            }

            selectizeFilter.refreshOptions();
        },

        onDelete: function () {
            selectizeFilter.clearOptions();
        },
        onFocus: function () {
            $('.selectize-input').focus().addClass('selectize-input-focus');
        },
        onBlur: function () {
            $('.selectize-input').focus().removeClass('selectize-input-focus');
        }
    });
    var selectizeFilter = $selectFilter[0].selectize;

    $('.js-add-inp').on('click', function () {
        $(this).closest('.bth__row').after('  <div class="bth__row"><div class="bth__cell"></div><div class="bth__cell"><div class=" bth__inp-block bth__inp-block--36 "><input class="bth__inp" type="text"></div></div></div>')
    })
});
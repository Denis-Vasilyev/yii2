jQuery(document).ready(function ($) {
    $(function () {
        $('.hoteliers-actions-pp').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
    });

    var $select = $('#th-id').selectize({
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
            selectize.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                selectize.addOption({
                    value: "1234",
                    text: "Японская водолечебница (Dalian Kerren Internatianal Hot Spring Club) 4*",
                    hotelID: "ID 123456",
                    hotelLocation: "Турция, Белек"

                });
            }

            selectize.refreshOptions();
        },

        onChange: function (val) {
            var data = this.options[val];
            var block = '<div class="user-block__info"><span class="bold-link">' + data.text + '</span>' +
                '<p class="user-block__info-place">' + data.hotelID + ' , ' + data.hotelLocation + '</p> ' + '</div>';
            $('.id-hotel__selected').show().html(block);
        },

        onDelete: function () {
            selectize.clearOptions();
        }
    });

    var selectize = $select[0].selectize;

    var $selectCountry = $('#country').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-block__info">' + data.text  + '</div>'
            },

            item: function (data, escape) {
                return '<p class="user-form__info-type">' + data.text + '</p> '
            }

        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeCountry.clearOptions();

            if (str !== "" && "россия".startsWith(str.toLowerCase())) {
                selectizeCountry.addOption({
                    value: "россия",
                    text: "Россия"
                });
            }

            selectizeCountry.refreshOptions();
        },

        onDelete: function () {
            selectizeCountry.clearOptions();
        }
    });

    var selectizeCountry = $selectCountry[0].selectize;

});
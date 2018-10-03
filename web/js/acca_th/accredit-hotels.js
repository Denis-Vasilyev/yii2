$(document).ready(function () {

    var $select = $('#th-id').selectize({
        placeholder:'Введите TH ID',
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
        },

        onDelete: function () {
            selectize.clearOptions();
        },
        onFocus: function () {
            $('.selectize-input').focus().addClass('selectize-input-focus');
        },
        onBlur: function () {
            $('.selectize-input').focus().removeClass('selectize-input-focus');
        }
    });

    var selectize = $select[0].selectize;
});
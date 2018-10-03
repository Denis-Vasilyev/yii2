jQuery(document).ready(function ($) {
    $(function () {
        $('.corporate-actions-pp').magnificPopup({
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

            if (str !== "" && "dalian".startsWith(str.toLowerCase())) {
                selectize.addOption({
                    value: "dalian",
                    text: "Dalian Kerren Internatianal Hot Spring Club 4*",
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




    var $selectTpass = $('#name').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-form"><div class="user-form__ava"><span>' +
                    '<img width="30" height="30" src="' + data.imgPath + '" alt=""></span></div>' +
                    '<div class="user-form__info"><span class="user-form__info-link">' + data.userName + '</span>' +
                    '<p class="user-form__info-type">' + data.userType + '</p> '
            }
        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeTpass.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                selectizeTpass.addOption({
                    value: "1234",
                    text: "Okhapkina Irina",
                    imgPath: "/images/bth-ava.png",
                    userName: "Okhapkina Irina",
                    userType: "Тургагент",
                    userCity: "Киров",
                    email: "trewel.servis@yandex.ru"
                });
            }

            selectizeTpass.refreshOptions();
        },

        onChange: function (val) {
            var data = this.options[val];
            var block = '<div class="user-block"><div class="user-block__ava"><span>' +
                '<img width="60" height="60" src="' + data.imgPath + '" alt=""></span></div>' +
                '<div class="user-block__info"><span class="bold-link">' + data.userName + '</span>' +
                '<p class="user-block__info-place">' + data.userType + ' , ' + data.userCity + '</p> ' +
                '<p class="user-block__info-contact">' + data.email + '</p>' +
                '</div>' + '<a href="#" class="change-type">' + 'сменить тип на Отельер' + '</a>' +'</div>' + '</div>';
            $('.id-client__selected').show().html(block);

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

    var selectizeTpass = $selectTpass[0].selectize;



});
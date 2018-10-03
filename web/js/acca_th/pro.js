$(document).ready(function () {
    $('table td:last-of-type').hover(
        function () {
            $(this).find('.accreditation-tooltip').show()
        },
        function () {
            $(this).find('.accreditation-tooltip').hide()
        }
    );
    $('#log').click(function () {
        line($(this));
        _hashState('#log');
        $('#logPanel').show();
        $('#addPanel').hide();
        $('#usersPanel').hide();
        $('#hotelsPanel').hide();
        $('#basketPanel').hide();
        $('#deactivationPanel').hide();
    });
    $('#add').click(function () {
        line($(this));
        _hashState('#add');
        $('#logPanel').hide();
        $('#addPanel').show();
        $('#usersPanel').hide();
        $('#hotelsPanel').hide();
        $('#basketPanel').hide();
        $('#deactivationPanel').hide();
    });
    $('#users').click(function () {
        line($(this));
        _hashState('#users');
        $('#logPanel').hide();
        $('#addPanel').hide();
        $('#usersPanel').show();
        $('#hotelsPanel').hide();
        $('#basketPanel').hide();
        $('#deactivationPanel').hide();
    });
    $('#hotels').click(function () {
        line($(this));
        _hashState('#hotels');
        $('#logPanel').hide();
        $('#addPanel').hide();
        $('#usersPanel').hide();
        $('#hotelsPanel').show();
        $('#basketPanel').hide();
        $('#deactivationPanel').hide();
    });
    $('#basket').click(function () {
        line($(this));
        _hashState('#basket');
        $('#logPanel').hide();
        $('#addPanel').hide();
        $('#usersPanel').hide();
        $('#hotelsPanel').hide();
        $('#basketPanel').show();
        $('#deactivationPanel').hide();
    });
    $('#deactivation').click(function () {
        line($(this));
        _hashState('#deactivation');
        $('#logPanel').hide();
        $('#addPanel').hide();
        $('#usersPanel').hide();
        $('#hotelsPanel').hide();
        $('#basketPanel').hide();
        $('#deactivationPanel').show();
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

$(function () {

    var $select = $('#id-client').selectize({
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
            selectize.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                selectize.addOption({
                    value: "1234",
                    text: "Okhapkina Irina",
                    imgPath: "/images/bth-ava.png",
                    userName: "Okhapkina Irina",
                    userType: "Тургагент",
                    userCity: "Киров",
                    email: "trewel.servis@yandex.ru"
                });
            }

            selectize.refreshOptions();
        },

        onChange: function (val) {
            var data = this.options[val];
            var block = '<div class="user-block"><div class="user-block__ava"><span>' +
                '<img width="60" height="60" src="' + data.imgPath + '" alt=""></span></div>' +
                '<div class="user-block__info"><span class="bold-link">' + data.userName + '</span>' +
                '<p class="user-block__info-place">' + data.userType + ' , ' + data.userCity + '</p> ' +
                '<p class="user-block__info-contact">' + data.email + '</p>' +
                '</div>' + '<a href="#" class="change-type">' + 'сменить тип на Отельер' + '</a>' + '</div>' + '</div>';
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

    var selectize = $select[0].selectize;
    $('.id-client__selected').on('click', '.change-type', function () {
        $('.filter-pp__container').show();
    });

});


$(function () {

    var $select = $('#id-log').selectize({
        render: {
            option: function (data, escape) {
                return "<div><div><span>" + (data.userTpassid || "") + "</span></div>" +
                    "<div><span>" + (data.hotel || "") + "</span></div></div>";
            },
            optgroup_header: function (data, escape) {
                return "<div class='opt'>" + data.label + "</div>";
            }
        },
        optgroups: [
            {value: "TPASS", label: "TravelPassport"},
            {value: "Hotels", label: "Отели"}
        ],
        placeholder: "ID отеля или TPASS аккредитованного",

        optgroupField: 'class',

        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectize.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                selectize.addOption({
                    value: "120",
                    text: "ID 1209858",
                    userTpassid: "ID 1209858",
                    class: 'TPASS'
                });

                selectize.addOption({
                    value: "12345",
                    text: "ID 1234567",
                    userTpassid: "ID 1234567",
                    class: 'TPASS'
                });

                selectize.addOption({
                    value: "12",
                    text: "12 Palm Beach",
                    hotel: '12 Palm Beach',
                    class: 'Hotels'
                });

                selectize.addOption({
                    value: "123",
                    text: "123 Grand BeHotelach",
                    hotel: '123 Grand BeHotelach',
                    class: 'Hotels'
                });
            }

            selectize.refreshOptions();
        },

        onChange: function (val) {
            var data = this.options[val];
        },
        onDelete: function () {
            selectize.clearOptions();
        }

    });
    var selectize = $select[0].selectize;



    var $selectDeactivation = $('#hotelSelect').selectize({
        render: {
            option: function (data, escape) {
                return "<div>" + (data.hotel) + "</div>";
            }
        },

        placeholder: "Введите ID отеля",


        searchField: ["value"],
        onType: function (str) {
            //here load logic

            selectizeDeactivation.clearOptions();
            if (str !== "" && "123".startsWith(str.toLowerCase())) {
                selectizeDeactivation.addOption({
                    value: "123",
                    text: "Palm Beach",
                    hotel: 'Palm Beach'
                });

                selectizeDeactivation.addOption({
                    value: "1234",
                    text: "Sol Sun Beach Apart 3*",
                    hotel: 'Sol Sun Beach Apart 3*'
                });
            }

            selectizeDeactivation.refreshOptions();
        },

        onChange: function (val) {
            var data = this.options[val];
        },
        onDelete: function () {
            selectizeDeactivation.clearOptions();
        }

    });
    var selectizeDeactivation = $selectDeactivation[0].selectize;


    $('.accreditation-basket td:last-of-type').hover(
        function () {
            $(this).find('.hint').show();
        },
        function () {
            $(this).find('.hint').hide();
        }
    );

});



















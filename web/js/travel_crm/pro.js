$(function () {
    $('#new-booking').click(function () {
        line($(this));
        _hashState('#new-booking');
        $('#new-bookingPanel').show();
        $('#detail-bookingPanel').hide();
        $('#taken-bookingPanel').hide();
        $('#detail-booking2Panel').hide();
        $('#statPanel').hide();
        $('#old-bookingPanel').hide();
        $('#detail-booking11Panel').hide();

    });
    $('#detail-booking').click(function () {
        line($(this));
        _hashState('#detail-booking');
        $('#new-bookingPanel').hide();
        $('#detail-bookingPanel').show();
        $('#taken-bookingPanel').hide();
        $('#detail-booking2Panel').hide();
        $('#act-accessPanel').hide();
        $('#old-bookingPanel').hide();
        $('#statPanel').hide();
        $('#detail-booking11Panel').hide();

    });
    $('#detail-booking2').click(function () {
        line($(this));
        _hashState('#detail-booking');
        $('#new-bookingPanel').hide();
        $('#detail-bookingPanel').hide();
        $('#detail-booking2Panel').show();
        $('#taken-bookingPanel').hide();
        $('#statPanel').hide();
        $('#act-accessPanel').hide();
        $('#detail-booking11Panel').hide();
        $('#old-bookingPanel').hide();
    });

    $('#stat').click(function () {
        line($(this));
        _hashState('#stat');
        $('#new-bookingPanel').hide();
        $('#detail-bookingPanel').hide();
        $('#detail-booking2Panel').hide();
        $('#taken-bookingPanel').hide();
        $('#statPanel').show();
        $('#old-bookingPanel').hide();
        $('#act-accessPanel').hide();
        $('#detail-booking11Panel').hide();
    });

    $('#act-access').click(function () {
        line($(this));
        _hashState('#act-access');
        $('#new-bookingPanel').hide();
        $('#detail-bookingPanel').hide();
        $('#detail-booking2Panel').hide();
        $('#taken-bookingPanel').hide();
        $('#statPanel').hide();
        $('#act-accessPanel').show();
        $('#old-bookingPanel').hide();
        $('#detail-booking11Panel').hide();
    });

    $('#old-booking').click(function () {
        line($(this));
        _hashState('#old-booking');
        $('#new-bookingPanel').hide();
        $('#detail-bookingPanel').hide();
        $('#detail-booking2Panel').hide();
        $('#taken-bookingPanel').hide();
        $('#statPanel').hide();
        $('#act-accessPanel').hide();
        $('#old-bookingPanel').show();
        $('#detail-booking11Panel').hide();
    });

    $('#detail-booking11').click(function () {
        line($(this));
        _hashState('#old-booking');
        $('#new-bookingPanel').hide();
        $('#detail-bookingPanel').hide();
        $('#detail-booking2Panel').hide();
        $('#taken-bookingPanel').hide();
        $('#statPanel').hide();
        $('#act-accessPanel').hide();
        $('#old-bookingPanel').hide();
        $('#detail-booking11Panel').show();
    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.line ');
        $('.tab').removeClass('active');
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

    $('.pro-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        modal: true
    });
    $('.pro-pp .createGroup__column--l').on('click', '.createGroup__item', function () {
        $(this).closest('.createGroup__flex').find('.createGroup__column--r .createGroup__list').append($(this))
    });
    $(' .pro-pp .createGroup__column--r').on('click', '.createGroup__item', function () {
        console.log($(this).closest('.createGroup__flex'));
        console.log($(this).closest('.createGroup__flex').find('.createGroup__column--l .createGroup__list'));
        $(this).closest('.createGroup__flex').find('.createGroup__column--l .createGroup__list').append($(this))
    });
    $('input[name="type-send"]').on('change', function () {
        if ($('#type-send0').prop('checked')) {
            $('.modal .type-send1-js').hide();
            $('.modal .type-send2-js').hide();
            $('.modal .type-send3-js').hide();
        }
        else if ($('#type-send1').prop('checked')) {
            $('.modal .type-send1-js').show();
            $('.modal .type-send2-js').hide();
            $('.modal .type-send3-js').hide();

        } else if ($('#type-send2').prop('checked')) {
            $('.modal .type-send1-js').hide();
            $('.modal .type-send2-js').show();
            $('.modal .type-send3-js').hide();
        } else if ($('#type-send3').prop('checked')) {
            $('.modal .type-send1-js').hide();
            $('.modal .type-send2-js').hide();
            $('.modal .type-send3-js').show();
        }
    });



    $('.detail-booking__add-agent-pl').on('click', function () {
        $('.js-select-manager').show();
        $('.detail-booking__add-agent-img').hide();
        $('.js-select-otherOffice').hide();
    });

    $('.detail-booking__add-agent-all--blue').on('click', function () {
        $('.js-select-otherOffice').show();
        $('.js-select-manager').hide();
        $('.detail-booking__add-agent-img').hide()
    });

    $('.detail-booking__add-agent-select .selectize-close').on('click', function () {
        $('.js-select-manager').hide();
        $('.js-select-otherOffice').hide();
        $('.detail-booking__add-agent-img').show()
    });


    var $select = $('#project').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-form"><div class="user-form__ava"><span>' +
                    '<img width="40" height="40" src="' + data.imgPath + '" alt=""></span></div>' +
                    '<div class="user-form__info"><span class="user-form__info-link">' + data.userName + '</span></div></div> '
            }
        },
        searchField: ["value"],
        placeholder: "Выберите менеджера",
        options: [
            {
                value: "1234",
                text: "Okhapkina Irina",
                imgPath: "/images/bth-ava.png",
                userName: "Юлия Иванова"
            },
            {
                value: "12",
                text: "Okhapkina Irina",
                imgPath: "/images/ava2.png",
                userName: "Okhapkina Irina"
            }
        ],


        onDelete: function () {
            selectize.clearOptions();
        }

    });
    var selectize = $select[0].selectize;

    var $selectOffice = $('#oficce').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-form">' + data.text + '</div> '
            }
        },
        searchField: ["value"],
        placeholder: "Выберите офис",
        options: [
            {
                value: "1234",
                text: "Офис белый"
            },
            {
                value: "12",
                text: "Офис серый"
            }
        ],


        onDelete: function () {
            selectizeOffice.clearOptions();
        }

    });
    var selectizeOffice = $selectOffice[0].selectize;


    /*selectize Выбора города*/
    var $selectCity = $('#city-f').selectize({
        placeholder: 'Введите город',
        render: {
            option: function (data, escape) {
                return '<div class="user-block__info block fz14">' + data.text + '</div>'
            },

            item: function (data, escape) {
                return '<p class="user-form__info-type">' + data.text + '</p> '
            }

        },
        options: [
            {
                value: "москва",
                text: "Москва"

            }, {
                value: "челябинск",
                text: "Челябинск"

            }
        ],
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeCity.clearOptions();

            if (str !== "" && "москва".startsWith(str.toLowerCase())) {
                selectizeCity.addOption({
                    value: "москва",
                    text: "Москва"

                });
            }
            selectizeCity.refreshOptions();
        },

        onDelete: function () {
            selectizeCity.clearOptions();
        }
    });

    var selectizeCity = $selectCity[0].selectize;
    /*end_selectize Выбора города*/


    /*selectize Выбора метро*/
    var $selectMetro = $('#metro-f ').selectize({
        placeholder: 'Введите метро',
        render: {
            option: function (data, escape) {
                return '<div class="user-block__info block fz14">' + data.text + '</div>'
            },

            item: function (data, escape) {
                return '<p class="user-form__info-type">' + data.text + '</p> '
            }

        },
        options: [
            {
                value: "адмиралтейская",
                text: "Адмиралтейская"

            }, {
                value: "авиамоторная",
                text: "Авиамоторная"

            }
        ],
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeMetro.clearOptions();

            if (str !== "" && "адмиралтейская".startsWith(str.toLowerCase())) {
                selectizeMetro.addOption({
                    value: "адмиралтейская",
                    text: "Адмиралтейская"

                });
            }

            selectizeMetro.refreshOptions();
        },

        onDelete: function () {
            selectizeMetro.clearOptions();
        }

    });
    var selectizeMetro = $selectMetro[0].selectize;
    /*end_selectize Выбора метро*/

    /*скринап передать другому агенту*/
    $('.transferBooking-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        modal: true
    });
    $('.pro-pp, .transferBooking-pp').on('click', function () {
        $('html').css('margin-right', '0px');
    });
    $('input[name="transferBooking"]').on('change', function () {
        if ($('#transferBooking-my-office').prop('checked')) {
            $('.js-transferBooking-my-office').show();
            $('.js-transferBooking-other-office').hide()
        }
        else {
            $('.js-transferBooking-my-office').hide();
            $('.js-transferBooking-other-office').show()
        }

    });
});

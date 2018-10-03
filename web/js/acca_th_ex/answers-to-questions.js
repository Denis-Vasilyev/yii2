$(function () {

    $('#letter').click(function () {
        line($(this));
        _hashState('#letter');
        $('#letterPanel').show();
        $('#templatePanel').hide();
        $('#contactsPanel').hide();
        $('#hoteliersPanel').hide();
    });

    $('#template').click(function () {
        line($(this));
        _hashState('#template');
        $('#letterPanel').hide();
        $('#templatePanel').show();
        $('#contactsPanel').hide();
        $('#hoteliersPanel').hide();
    });

    $('#contacts').click(function () {
        line($(this));
        _hashState('#contacts');
        $('#letterPanel').hide();
        $('#templatePanel').hide();
        $('#contactsPanel').show();
        $('#hoteliersPanel').hide();
    });
    $('#hoteliers').click(function () {
        line($(this));
        _hashState('#hoteliers');
        $('#letterPanel').hide();
        $('#templatePanel').hide();
        $('#contactsPanel').hide();
        $('#hoteliersPanel').show();
    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.lsfw-line ');
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


    $('.contacts-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('.write-hotelier-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('.processing-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('.contacts-pp, .write-hotelier-pp, .processing-pp').on('click', function () {
        $('html').css('margin-right', '0');
    });


    $('.write-hotelier-pp').on('click', function () {
        $('#write-hotelier-pp').parent().height(561)
    });

    $('.js-act-contacts').on('click', function () {
        $('#contacts').click()
    });
    $('.js-act-letter').on('click', function () {
        $('#letter').click()
    });



    var $select = $('#write-hotelier-pp-select').selectize({
        placeholder: 'Контакты',
        options: [
            {
                value: "1234",
                text: "Okhapkina Irina",
                imgPath: "/images/bth-ava.png",
                userName: "Okhapkina Irina",
                userType: "Администратор",
                email: "trewel.servis@yandex.ru"
            },
            {
                value: "12",
                text: "Иванова Ирина",
                imgPath: "/images/bth-ava-25.png",
                userName: "Okhapkina Irina",
                userType: "Администратор",
                email: "trewel.servis@yandex.ru"
            }
        ],
        render: {
            option: function (data, escape) {
                return '<div class="user-form"><div class="user-form__ava"><span>' +
                    '<img width="60" height="60" src="' + data.imgPath + '" alt=""></span></div>' +
                    '<div class="user-form__info"><a class="bth__link fz14">' + data.userName + '</a>' +
                    '<p class="bth__cnt fz13">' + data.userType + '</p> ' +
                    '<p class="bth__cnt fz13">' + data.email + '</p> '
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
                    userType: "Администратор",
                    email: "trewel.servis@yandex.ru"
                });
            }

            selectize.refreshOptions();
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


$(document).on('click', '.modal__close', function () {
    $.magnificPopup.close();
});
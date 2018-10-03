$(function () {

    $('#auth-pp-authorization').click(function () {
        line($(this));
        _hashState('#auth-pp-authorization');
        $('#auth-pp-authorizationPanel').show();
        $('#auth-pp-registrationPanel').hide();
        $('#auth-pp-reqLastNewPanel').hide();
        $('#auth-pp-reqFinishPanel').hide();
        $('#auth-pp-remindPassPanel').hide();
    });
    $('#auth-pp-registration').click(function () {
        line($(this));
        _hashState('#auth-pp-registration');
        $('#auth-pp-authorizationPanel').hide();
        $('#auth-pp-registrationPanel').show();
        $('#auth-pp-reqLastNewPanel').hide();
        $('#auth-pp-reqFinishPanel').hide();
        $('#auth-pp-remindPassPanel').hide();
    });

    $('#auth-pp-reqLastNew').click(function () {
        line($(this));
        _hashState('#auth-pp-reqLastNew');
        $('#auth-pp-authorizationPanel').hide();
        $('#auth-pp-registrationPanel').hide();
        $('#auth-pp-reqLastNewPanel').show();
        $('#auth-pp-reqFinishPanel').hide();
        $('#auth-pp-remindPassPanel').hide();
    });

    $('#auth-pp-reqFinish').click(function () {
        line($(this));
        _hashState('#auth-pp-reqFinish');
        $('#auth-pp-authorizationPanel').hide();
        $('#auth-pp-registrationPanel').hide();
        $('#auth-pp-reqLastNewPanel').hide();
        $('#auth-pp-reqFinishPanel').show();
        $('#auth-pp-remindPassPanel').hide();
    });
    $('#auth-pp-remindPass').click(function () {
        line($(this));
        _hashState('#auth-pp-remindPass');
        $('#auth-pp-authorizationPanel').hide();
        $('#auth-pp-registrationPanel').hide();
        $('#auth-pp-reqLastNewPanel').hide();
        $('#auth-pp-reqFinishPanel').hide();
        $('#auth-pp-remindPassPanel').show();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.agreement-pp__line');
        $('.agreement-pp__tab').removeClass('active');
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
        $('.agreement-pp__tab.active').first().click();
    else
        $(window.location.hash).click();
    $(window).bind('hashchange', function () {
        $(window.location.hash).click();
    });

    $('.auth-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true,
        callbacks: {
            open: function () {
                $(this.content).parent().height(665)
            }
        }
    });
    $('.auth-pp').on('click', function () {
        $('html').css('overflow', 'hidden');
    });


    $('select[name="auth-pp-regDay"]').SumoSelect();


    var $selectAuthModalCity = $('#auth-pp-redCity2').selectize({

        render: {
            option: function (data, escape) {
                return '<div class="id-hotel__selected"> <p class="bth__cnt ">' + data.text + '</p></div>';
            }

            // item: function (data, escape) {
            //     return '<p class="user-form__info-type">' + data.text + '</p> ';
            // }

        },
        options: [
            {
                value: "123",
                text: "Москва, Россия"

            }
        ],

        items: ['123'],
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeAuthModalCity.clearOptions();

            if (str !== "" && "123".startsWith(str.toLowerCase())) {
                selectizeAuthModalCity.addOption({
                    value: "123",
                    text: "Москва, Россия"

                });
            }

            selectizeAuthModalCity.refreshOptions();
        },

        onDelete: function () {
            selectizeAuthModalCity.clearOptions();
        },
        onFocus: function () {
            $('.selectize-input').focus().closest('.bth__inp-block').addClass('focus');
            $('.selectize-input').focus().closest('.bth__inp-block').find('.lbl-select').addClass('active');
        },
        onBlur: function () {
            if (!$('.selectize-input').hasClass('full')) {
                $('.selectize-input').blur().closest('.bth__inp-block').find('.lbl-select').removeClass('active');
            }
            $('.selectize-input').blur().closest('.bth__inp-block').removeClass('focus');
        }

    });
    var selectizeAuthModalCity = $selectAuthModalCity[0].selectize;





    var $selectAuthModalYear = $('#auth-pp-regYear').selectize({
        placeholder: 'Год',
        render: {
            option: function (data, escape) {
                return '<div class="id-hotel__selected"> <p class="bth__cnt ">' + data.text + '</p></div>';
            }

            // item: function (data, escape) {
            //     return '<p class="user-form__info-type">' + data.text + '</p> ';
            // }

        },


        items: ['1900'],
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeAuthModalYear.clearOptions();

            if (str !== "" && "1990".startsWith(str.toLowerCase())) {
                selectizeAuthModalYear.addOption({
                    value: "1990",
                    text: "1990"

                });
            }

            selectizeAuthModalYear.refreshOptions();
        },

        onDelete: function () {
            selectizeAuthModalYear.clearOptions();
        },
        onFocus: function () {
            $('.selectize-input').focus().closest('.bth__inp-block').addClass('focus');
            $('.selectize-input').focus().closest('.bth__inp-block').find('.lbl-select').addClass('active');
        },
        onBlur: function () {
            if (!$('.selectize-input').hasClass('full')) {
                $('.selectize-input').blur().closest('.bth__inp-block').find('.lbl-select').removeClass('active');
            }
            $('.selectize-input').blur().closest('.bth__inp-block').removeClass('focus');
        }

    });
    var selectizeAuthModalYear = $selectAuthModalYear[0].selectize;




    var $selectAuthModalMonth = $('#auth-pp-regMonth').selectize({
        placeholder: 'Месяц',
        render: {
            option: function (data, escape) {
                return '<div class="id-hotel__selected"> <p class="bth__cnt ">' + data.text + '</p></div>';
            }

            // item: function (data, escape) {
            //     return '<p class="user-form__info-type">' + data.text + '</p> ';
            // }

        },


        items: ['123'],
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeAuthModalMonth.clearOptions();

            if (str !== "" && "декабрь".startsWith(str.toLowerCase())) {
                selectizeAuthModalMonth.addOption({
                    value: "декабрь",
                    text: "Декабрь"

                });
            }

            selectizeAuthModalMonth.refreshOptions();
        },

        onDelete: function () {
            selectizeAuthModalMonth.clearOptions();
        },
        onFocus: function () {
            $('.selectize-input').focus().closest('.bth__inp-block').addClass('focus');
            $('.selectize-input').focus().closest('.bth__inp-block').find('.lbl-select').addClass('active');
        },
        onBlur: function () {
            if (!$('.selectize-input').hasClass('full')) {
                $('.selectize-input').blur().closest('.bth__inp-block').find('.lbl-select').removeClass('active');
            }
            $('.selectize-input').blur().closest('.bth__inp-block').removeClass('focus');
        }

    });
    var selectizeAuthModalMonth = $selectAuthModalMonth[0].selectize;



    $('.registration__cross').on('click', function () {
        selectizeAuthModalCity.clear();
        $(this).closest('.bth__inp-block').find('.lbl-select').removeClass('active');
    });





});
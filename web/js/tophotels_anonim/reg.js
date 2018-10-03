$(document).ready(function () {

    $('#authorization').click(function () {
        line($(this));
        _hashState('#authorization');
        $('#authorizationPanel').show();
        $('#registrationPanel').hide();
        $('#remindPassPanel').hide();
        $('#reqLastPanel').hide();
        $('#regAllPanel').hide();
        $('#reqLastTouragentPanel').hide();
        $('#reqLastHotelierPanel').hide();
        $('#reqLastGuidePanel').hide();
        $('#reqLastNewPanel').hide();
        $('#reqFinishPanel').hide();
    });

    $('#registration').click(function () {
        line($(this));
        _hashState('#registration');
        $('#authorizationPanel').hide();
        $('#regAllPanel').hide();
        $('#registrationPanel').show();
        $('#reqFinishPanel').hide();
        $('#remindPassPanel').hide();
        $('#reqLastNewPanel').hide();
        $('#reqLastPanel').hide();
        $('#reqLastTouragentPanel').hide();
        $('#reqLastHotelierPanel').hide();
        $('#reqLastGuidePanel').hide();
    });

    $('#remindPass').click(function () {
        line($(this));
        _hashState('#remindPass');
        $('#authorizationPanel').hide();
        $('#registrationPanel').hide();
        $('#remindPassPanel').show();
        $('#reqLastPanel').hide();
        $('#reqFinishPanel').hide();
        $('#reqLastNewPanel').hide();
        $('#reqLastTouragentPanel').hide();
        $('#regAllPanel').hide();
        $('#reqLastHotelierPanel').hide();
        $('#reqLastGuidePanel').hide();
    });

    $('#reqLast').click(function () {
        line($(this));
        _hashState('#reqLast');
        $('#authorizationPanel').hide();
        $('#registrationPanel').hide();
        $('#remindPassPanel').hide();
        $('#regAllPanel').hide();
        $('#reqLastPanel').show();
        $('#reqFinishPanel').hide();
        $('#reqLastTouragentPanel').hide();
        $('#reqLastHotelierPanel').hide();
        $('#reqLastNewPanel').hide();
        $('#reqLastGuidePanel').hide();
    });
    $('#reqLastTouragent').click(function () {
        line($(this));
        _hashState('#reqLastTouragent');
        $('#authorizationPanel').hide();
        $('#registrationPanel').hide();
        $('#reqFinishPanel').hide();
        $('#remindPassPanel').hide();
        $('#regAllPanel').hide();
        $('#reqLastPanel').hide();
        $('#reqLastTouragentPanel').show();
        $('#reqLastHotelierPanel').hide();
        $('#reqLastNewPanel').hide();
        $('#reqLastGuidePanel').hide();
    });
    $('#reqLastHotelier').click(function () {
        line($(this));
        _hashState('#reqLastHotelier');
        $('#authorizationPanel').hide();
        $('#registrationPanel').hide();
        $('#remindPassPanel').hide();
        $('#reqLastPanel').hide();
        $('#reqFinishPanel').hide();
        $('#reqLastTouragentPanel').hide();
        $('#reqLastHotelierPanel').show();
        $('#reqLastGuidePanel').hide();
        $('#reqLastNewPanel').hide();
        $('#regAllPanel').hide();
    });
    $('#reqLastGuide').click(function () {
        line($(this));
        _hashState('#reqLastGuide');
        $('#authorizationPanel').hide();
        $('#registrationPanel').hide();
        $('#remindPassPanel').hide();
        $('#reqLastPanel').hide();
        $('#reqLastTouragentPanel').hide();
        $('#reqLastHotelierPanel').hide();
        $('#reqLastGuidePanel').show();
        $('#reqLastNewPanel').hide();
        $('#reqFinishPanel').hide();
        $('#regAllPanel').hide();
    });
    $('#reqLastNew').click(function () {
        line($(this));
        _hashState('#reqLastNew');
        $('#authorizationPanel').hide();
        $('#registrationPanel').hide();
        $('#remindPassPanel').hide();
        $('#reqLastPanel').hide();
        $('#reqLastTouragentPanel').hide();
        $('#reqLastHotelierPanel').hide();
        $('#reqLastGuidePanel').hide();
        $('#reqFinishPanel').hide();
        $('#reqLastNewPanel').show();
        $('#regAllPanel').hide();
    });
    $('#regAll').click(function () {
        line($(this));
        _hashState('#regAll');
        $('#authorizationPanel').hide();
        $('#registrationPanel').hide();
        $('#remindPassPanel').hide();
        $('#reqLastPanel').hide();
        $('#reqLastTouragentPanel').hide();
        $('#reqLastHotelierPanel').hide();
        $('#reqLastGuidePanel').hide();
        $('#reqLastNewPanel').hide();
        $('#reqFinishPanel').hide();
        $('#regAllPanel').show();
    });
    $('#reqFinish').click(function () {
        line($(this));
        _hashState('#reqFinish');
        $('#authorizationPanel').hide();
        $('#registrationPanel').hide();
        $('#remindPassPanel').hide();
        $('#reqLastPanel').hide();
        $('#reqLastTouragentPanel').hide();
        $('#reqLastHotelierPanel').hide();
        $('#reqLastGuidePanel').hide();
        $('#reqLastNewPanel').hide();
        $('#regAllPanel').hide();
        $('#reqFinishPanel').show();
    });

    $('.js-open-eye').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.jsPassStep2').on('click', function () {
        $(this).closest('.pass-step1').hide();
        $(this).closest('.pass-step1').next('.pass-step2').show();
    });
    $('.headerYellow-line__bubble.lite-pink').on('click', function () {
        $(this).toggleClass('orange');
    });
    $('.js-show-error').on('click', function () {
        $(this).closest('.panel').find('.registration__bubble').find('.registration__bubble-item:nth-child(4)').addClass('error');
        $(this).closest('.panel').find('.registration__bubble-item:nth-child(4) .hint-block').show();
        $(this).closest('.panel').find('.registration__line').find('.rbt-block:last-of-type').addClass('error');
        $(this).closest('.panel').find('.registration__line').find('.rbt-block:last-of-type .hint-block').show();
    });


    $('.bth__inp').on('focus', function () {
        $(this).addClass('focus');
        $(this).next('.bth__inp-lbl').addClass('active');
        $(this).closest('.bth__inp-block').find('.auth-form__eye').addClass('active');
    });

    $('.bth__inp').on('blur', function () {
        if ($(this).val().trim() === '') {
            $(this).next('.bth__inp-lbl').removeClass('active');
            $(this).closest('.bth__inp-block').find('.auth-form__eye').removeClass('active');
        }
        $(this).removeClass('focus');
    });


    $('.js-label').on('change', function () {
        $('.js-label').each(function () {
            if ($(this).val().length) {
                $(this).next('.bth__inp-lbl').addClass('active');
            }
        });
    });

    $('.js-label').change();


    $('.js-label').change();
    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.line');
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
        $('.tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange', function () {
        $(window.location.hash).click();
    });

    $('.birthday').datepicker();

    $(document).on('click', '.js-accredit-add', function (e) {
        e.preventDefault();
        var tpl = '<div class="accredit__line"><div class="bth__inp-block hotel-link"> <input type="text" class="bth__inp bold " placeholder="Ссылка  на отель или сайт"> </div> <a href="#" class="accredit-add js-accredit-add"> <i class="fa fa-plus"></i> </a> </div>';
        $(this).closest('.accredit__line').after(tpl);
        $(this).remove();
    });


    $(document).on('click', '.jsRegAccreditAdd', function (e) {
        e.preventDefault();
        var tpl = '<div class="bth__inp-block mt20"> <input type="text" class="bth__inp bold js-label" id="regHotel" value="" > <label for="regHotel" class="bth__inp-lbl">Ссылка на отель или сайт</label> <a href="#" class="accredit-add jsRegAccreditAdd"> <i class="fa fa-plus"></i> </a> </div>';
        $(this).closest('.bth__inp-block').after(tpl);
        $(this).remove();
    });


    $('select[name="regDay"]').SumoSelect();


    $('#regBirthday').on('click', function () {
        if ($('input[id="regBirthday"]').val().trim() === '') {
            $('#regAddBirthday').addClass('active');
        }
    });

    $('#regBirthday').on('change', function () {
        if ($('input[id="regBirthday"]').val().trim() === '') {
            $('#regAddBirthday').removeClass('active');
        }
    });

    $('input[name="social"]').on('change', function () {
        if ($(this).prop('checked')) {
            $(this).closest('.registration__bubble-item').find('.bth__inp-block').addClass('active');
            $(this).closest('.registration__bubble-item').addClass('active');
        }
    });
    $('input[name="social2"]').on('change', function () {
        if ($(this).prop('checked')) {
            $(this).closest('.registration__bubble-item').find('.bth__inp-block').addClass('active');
            $(this).closest('.registration__bubble-item').addClass('active');
        }
    });
    $('input[name="type-profile"]').on('change', function () {
        if ($('#type-profile-1').prop('checked')) {
            $(this).closest('.panel').find('.js-show-phone .bth__inp-lbl').text('Мобильный телефон (необязательно)');
        } else {
            $(this).closest('.panel').find('.js-show-phone .bth__inp-lbl').text('Мобильный телефон');

        }

    });



    var $select2 = $('#redCity2').selectize({

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
            selectize2.clearOptions();

            if (str !== "" && "123".startsWith(str.toLowerCase())) {
                selectize2.addOption({
                    value: "123",
                    text: "Москва, Россия"

                });
            }

            selectize2.refreshOptions();
        },

        onDelete: function () {
            selectize2.clearOptions();
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
    var selectize2 = $select2[0].selectize;

    $('.registration__cross').on('click', function () {
        selectize2.clear();
        $(this).closest('.bth__inp-block').find('.lbl-select').removeClass('active');
    });




    var $select3 = $('#regYear').selectize({
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
            selectize3.clearOptions();

            if (str !== "" && "1990".startsWith(str.toLowerCase())) {
                selectize3.addOption({
                    value: "1990",
                    text: "1990"

                });
            }

            selectize3.refreshOptions();
        },

        onDelete: function () {
            selectize3.clearOptions();
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

    var selectize3 = $select3[0].selectize;


    var $select4 = $('#regMonth').selectize({
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
            selectize3.clearOptions();

            if (str !== "" && "декабрь".startsWith(str.toLowerCase())) {
                selectize4.addOption({
                    value: "декабрь",
                    text: "Декабрь"

                });
            }

            selectize4.refreshOptions();
        },

        onDelete: function () {
            selectize4.clearOptions();
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

    var selectize4 = $select4[0].selectize;

});
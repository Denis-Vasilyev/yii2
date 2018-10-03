$(function () {

    $('#untreated-booking').click(function () {
        line($(this));
        _hashState('#');
        $('#untreated-bookingPanel').show();
        $('#detail-bookingPanel').hide();
        $('#all-bookingPanel').hide();
        $('#add-bookingPanel').hide();
        $('#booking-oldPanel').hide();
    });
    $('#detail-booking').click(function () {
        line($(this));
        _hashState('#detail-booking');
        $('#untreated-bookingPanel').hide();
        $('#detail-bookingPanel').show();
        $('#all-bookingPanel').hide();
        $('#add-bookingPanel').hide();
        $('#booking-oldPanel').hide();
    });
    $('#all-booking').click(function () {
        line($(this));
        _hashState('#all-booking');
        $('#untreated-bookingPanel').hide();
        $('#detail-bookingPanel').hide();
        $('#all-bookingPanel').show();
        $('#add-bookingPanel').hide();
        $('#booking-oldPanel').hide();
    });
    $('#add-booking').click(function () {
        line($(this));
        _hashState('#add-booking');
        $('#untreated-bookingPanel').hide();
        $('#detail-bookingPanel').hide();
        $('#all-bookingPanel').hide();
        $('#add-bookingPanel').show();
        $('#booking-oldPanel').hide();
    });
    $('#booking-old').click(function () {
        line($(this));
        _hashState('#booking-old');
        $('#untreated-bookingPanel').hide();
        $('#detail-bookingPanel').hide();
        $('#all-bookingPanel').hide();
        $('#add-bookingPanel').hide();
        $('#booking-oldPanel').show();
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

    $('.detail-booking__add-agent__add-wrap a').on('click', function () {
        $('.detail-booking__add-agent-select').show();
        $(this).hide()
    });

    $('.selectize-close ').on('click', function () {
        $('.detail-booking__add-agent-select').hide();
        $('.detail-booking__add-agent__add-wrap a').show()
    });
    $('.show-txta').on('click', function () {
        $(this).next('textarea').toggle()
    });
    $('.js-open-more').on('click', function () {
        $(this).prev().toggleClass('active')
    });

    $('.reclamation-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('.reclamation-pp').on('click', function () {
        $('html').css('margin-right', '0');
    });


    var $select = $('#manager').selectize({
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
                text: "Юлия Иванова",
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

    $('.js-open-night').on('click', function () {
        $('.dropdown').removeClass('open');
        $('.night-dropdown').toggleClass('open');
    });


    $('.js-close-night').on('click', function (e) {
        e.preventDefault();
        $('.night-dropdown').removeClass('open');
    });


    /*selectize Выбора страны */
    var $selectCountry = $('#country').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-block__info"><span class="bold-link">' + data.text + '</span>' +
                    '<p class="user-block__info-place"></div>'
            },

            item: function (data, escape) {
                return '<p class="user-form__info-type">' + data.text + '</p> '
            }

        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeCountry.clearOptions();

            if (str !== "" && "турция".startsWith(str.toLowerCase())) {
                selectizeCountry.addOption({
                    value: "турция",
                    text: "Турция"

                });
            } else if (str !== "" && "россия".startsWith(str.toLowerCase())) {
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
    /*end_selectize Выбора страны */

    /*selectize Выбора города */
    var $selectCity = $('#city').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-block__info"><span class="bold-link">' + data.text + '</span>' +
                    '<p class="user-block__info-place"></div>'
            },

            item: function (data, escape) {
                return '<p class="user-form__info-type">' + data.text + '</p> '
            }

        },
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
    /*end_selectize Выбора страны */


    $('.add-agent-form--callbacks textarea').on("click", function () {
        $(this).addClass('active')
    });
    //Выбрать валюту

    $('.dropdown-box.currency').on("click", function () {
        $(this).find('.fa-angle-down').toggleClass('trigger-animate');
        $(this).closest('.add-agent-wrap ').find('.dropdown-box__options.currency').toggle();
    });

    var selectedCurrency;

    $('.dropdown-box__options.currency').on("click", "div", function () {
        if (selectedCurrency) {
            $(this).parent().prepend("<div>" + selectedCurrency[0].outerHTML + "</div>");
        }
        selectedCurrency = $(this).find('i');
        $(this).closest('.add-agent-wrap').find('.dropdown-box.currency .dropdown-box__selected').html(selectedCurrency[0].outerHTML);
        $(this).closest('.dropdown-box__options.currency ').hide();
        $(this).closest('.add-agent-wrap').find('.fa-angle-down.currency').toggleClass('trigger-animate');
        selectedCurrency.parent().detach();
    });


    var $currentCur = $(".dropdown-box__selected.currency i");
    $('.dropdown-box__options.currency i[data-currency="' + $currentCur.data("currency") + '"]').click();
//end__Выбрать валюту


    $('.box-radio input[name="type-reclm"]').on("change", function () {
        if ($("#type-reclm5").is(':checked')) {
            $(this).closest('.modal').find('.js-hidden-double').show()
        } else {

            $(this).closest('.modal').find('.js-hidden-double').hide()
        }
        if ($("#type-reclm6").is(':checked')) {
            $(this).closest('.modal').find('.filter-pp__btn').hide();
            $(this).closest('.modal').find('.js-reclm-forbidden').show()
        } else {

            $(this).closest('.modal').find('.filter-pp__btn').show();
            $(this).closest('.modal').find('.js-reclm-forbidden').hide()
        }
    });

    $('.box-radio input').on("change", function () {
        if ($("#budget-type1").is(':checked')) {
            $('.hidden').removeClass('hidden');
            $(this).closest('div.mb0').hide()
        } else {
            $('.hidden').addClass('hidden')
        }
    });

    $('.add-agent-form--callbacks .type-input--300').focus(function () {
        $(this).closest('div').find('.guests__dropdown').addClass('guests__dropdown-open')
    });
    $('.closeGuest').focus(function () {
        $(this).closest('.guests__dropdown').removeClass('guests__dropdown-open')
    });


    $('select[name="child"]').SumoSelect();
    $('select[name="office"]').SumoSelect();

    $('input[name="type-tour"]').on('change', function () {
        if ($('#type-tour1').is(':checked')) {
            $(this).closest('form').find('.add-agent-form--callbacks__beach').show()
        } else {
            $(this).closest('form').find('.add-agent-form--callbacks__beach').hide()
        }
    });
    $('input[name="type-rest"]').on('change', function () {
        if ($('#type-rest1').is(':checked')) {
            $(this).closest('form').find('.add-agent-form--callbacks__hotel').show()
        } else {
            $(this).closest('form').find('.add-agent-form--callbacks__hotel').hide()
        }
    });

    $('.add-agent-form--callbacks .fa-times ').on('click', function () {
        $(this).closest('fieldset').find('.mb0').show();
        $(this).closest('div').addClass('hidden')
    });


    $('.reclamation-pp').on('click', function () {
        $('#reclamation-pp').parent().height(560)

    });

});

$(document).ready(function () {
    $('#callbacks').click(function () {
        line($(this));
        _hashState('#callbacks');
        $('#callbacksPanel').show();
        $('#closedPanel').hide();
        $('#statisticPanel').hide();
        $('#fillPanel').hide();

    });
    $('#closed').click(function () {
        line($(this));
        _hashState('#closed');
        $('#callbacksPanel').hide();
        $('#closedPanel').show();
        $('#statisticPanel').hide();
        $('#fillPanel').hide();

    });
    $('#statistic').click(function () {
        line($(this));
        _hashState('#statistic');
        $('#callbacksPanel').hide();
        $('#closedPanel').hide();
        $('#statisticPanel').show();
        $('#fillPanel').hide();

    });

    $('#fill').click(function () {
        line($(this));
        _hashState('#fill');
        $('#callbacksPanel').hide();
        $('#closedPanel').hide();
        $('#statisticPanel').hide();
        $('#fillPanel').show();

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


    var tabHide = $('#tab4');
    $('.fa-pencil-square').on('click', function () {
        tabHide.show()
            .click()
    });
    $('#tab1').on('click', function () {
        tabHide.hide()
    });
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
    })



});

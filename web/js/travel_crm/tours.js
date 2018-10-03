$(document).ready(function () {

    $('#tour').click(function () {
        line($(this));
        _hashState('#tour');
        $('#tourPanel').show();
        $('#tour-resultPanel').hide();

    });
    $('#tour-result').click(function () {
        line($(this));
        _hashState('#tour-result');
        $('#tourPanel').hide();
        $('#tour-resultPanel').show();

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

    $('.js-show').on('click', function () {
        $(this).next().show();
    });
    $('.box-check').hover(
        function () {
            $(this).find('.hint').show();

        },
        function () {
            $(this).find('.hint').hide();
        }
    );
    $('.form-popup__link').on('click', function () {
        $(this).closest('.form-popup').hide();
        return false
    });

    $('select[name="age1"]').SumoSelect();
    $('select[name="city"]').SumoSelect();

    $('.toursWrap__btn').on('click', function () {
        $('#tour-result').show().click();
    });

//Выбрать валюту

    $('.toursWrap__price').on("click", function () {
        $(this).find('.fa-angle-down').toggleClass('trigger-animate');
        $(this).closest('.toursWrap__block ').find('.toursWrap__price-drop').toggle();
    });

    var selectedCurrency;

    $('.toursWrap__price-drop').on("click", "div", function () {
        if (selectedCurrency) {
            $(this).parent().prepend("<div>" + selectedCurrency[0].outerHTML + "</div>");
        }
        selectedCurrency = $(this).find('i');
        $(this).closest('.toursWrap__block').find('.toursWrap__price .toursWrap__price-selected').html(selectedCurrency[0].outerHTML);
        $(this).closest('.toursWrap__price-drop ').hide();
        $(this).closest('.toursWrap__block').find('.fa-angle-down.currency').toggleClass('trigger-animate');
        selectedCurrency.parent().detach();
    });


    var $currentCur = $(".toursWrap__price-selected.currency i");
    $('.toursWrap__price-drop i[data-currency="' + $currentCur.data("currency") + '"]').click();
//end__Выбрать валюту


    $('#js-tab-country').on('click', function () {
        $('#js-country-list').show();
        $('#js-resort-list').hide();
        $(this).addClass('active');
        $('#js-tab-resort').removeClass('active')
    });
    $('#js-tab-resort').on('click', function () {
        $('#js-country-list').hide();
        $('#js-tab-country').removeClass('active');
        $(this).addClass('active');
        $('#js-resort-list').show()
    });

    $('.toursWrap__inlineBlock--eat .box-radio label').on('click', function () {
        var text = $(this).text();
        $(this).closest('.toursWrap__blue-drop-wrap').find('.toursWrap__blue-fall span').text(text);
        $(this).closest('.toursWrap__blue-drop-wrap').find('.toursWrap__blue-dropdown').hide()

    });
    $('.toursWrap__blue-fall').on('click', function () {
        $(this).closest('.toursWrap__blue-drop-wrap').find('.toursWrap__blue-dropdown').show()

    });


    $('.toursWrap__blue-drop-wrap--rating .box-radio label').on('click', function () {
        var text = $(this).text();
        $(this).closest('.toursWrap__blue-drop-wrap').find('.toursWrap__blue-fall span').text('Рейтинг TopHotels не ниже ' + text);
        $(this).closest('.toursWrap__blue-drop-wrap').find('.toursWrap__blue-dropdown').hide();
    });
    $('#rating9').on('click', function () {
        var text = $(this).text();
        $(this).closest('.toursWrap__blue-drop-wrap').find('.toursWrap__blue-fall span').text('Рейтинг TopHotels');
    });


    $('input[name="hotels"]').on('change', function () {
        if ($('#hotels2').prop('checked')) {
            $(this).closest('.toursWrap').find('.js-hide-selection').hide();
            $(this).closest('.toursWrap').find('.js-show-selection').show();
        }
        else {
            $(this).closest('.toursWrap').find('.js-hide-selection').show();
            $(this).closest('.toursWrap').find('.js-show-selection').hide();
        }
    });

    $('input[name="typeLine"]').on('change', function () {
        if ($('#typeLine2').prop('checked')) {
            $(this).closest('.toursWrap__blue-drop-wrap').find('.hide').show();
        }
        else {
            $(this).closest('.toursWrap__blue-drop-wrap').find('.hide').hide();
        }
    });


    /*selectize Выбора города*/
    var $selectCity = $('#city').selectize({
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
        },
    });

    var selectizeCity = $selectCity[0].selectize;
    /*end_selectize Выбора города*/


});


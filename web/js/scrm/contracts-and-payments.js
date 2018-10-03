$(document).ready(function () {

    $('#list').click(function () {
        line($(this));
        _hashState('#list');
        $('#listPanel').show();
        $('#createPanel').hide();
        $('#billPanel').hide();
        $('#manual-paymentsPanel').hide();
    });
    $('#create').click(function () {
        line($(this));
        _hashState('#create');
        $('#listPanel').hide();
        $('#createPanel').show();
        $('#billPanel').hide();
        $('#manual-paymentsPanel').hide();
    });

    $('#bill').click(function () {
        line($(this));
        _hashState('#bill');
        $('#listPanel').hide();
        $('#createPanel').hide();
        $('#billPanel').show();
        $('#manual-paymentsPanel').hide();
    });

    $('#manual-payments').click(function () {
        line($(this));
        _hashState('#manual-payments');
        $('#listPanel').hide();
        $('#createPanel').hide();
        $('#billPanel').hide();
        $('#manual-paymentsPanel').show();
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


    $('table.contracts-and-payments-create td:nth-child(6)').on("click", function () {
        $(this).closest('.create-wrap').hide();
        $(this).closest('.panel').find('.form-wrap').show();
    });
    $('.back').on("click", function () {
        $(this).closest('.panel').find('.create-wrap').show();
        $(this).closest('.panel').find('.form-wrap').hide();
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


    $('.period-wrap input').on("click", function () {
        $(this).val('368')
    });

    var $currentCur = $(".dropdown-box__selected.currency i");
    $('.dropdown-box__options.currency i[data-currency="' + $currentCur.data("currency") + '"]').click();
//end__Выбрать валюту


    //Выбрать месяцы
    $('.dropdown-box.month').on("click", function () {
        $(this).find('.fa-angle-down').toggleClass('trigger-animate');
        $(this).closest('.add-agent-wrap ').find('.dropdown-box__options.month').toggle();
    });
    $('.dropdown-box__options.month div').on("click", function () {
        var monthName = $(this).text();
        $(this).closest('.add-agent-wrap').find('.dropdown-box__selected.month').text(monthName);
        $(this).closest('.dropdown-box__options').hide();
    });
    //end__Выбрать месяцы


    $('.form__delete.link-blue').on("click", function () {
        $('.filter-pp__container').show()
    });

    $('.filter-pp__close').on("click", function () {
        $('.filter-pp__container').hide()
    });
    $('.send-comment').on("click", function () {
        $(this).animate({height: "53px"}, 500);
    });
    $('#way-cash').on("change", function () {
        var option = $(this).val();
        if (option == 'bill-and-contract') {
            $('.bill-and-contract-form').show();
            $('.card-form').hide();
            $('.billOferta-form').hide();
        }
        if (option == 'billOferta') {
            $('.billOferta-form').show();
            $('.bill-and-contract-form').hide();
            $('.card-form').hide();
        }
        if (option == 'cardOferta') {
            $('.card-form').show();
            $('.billOferta-form').hide();
            $('.bill-and-contract-form').hide();

        }
        if (option == 'card-and-contract') {
            $('.card-form').show();
            $('.billOferta-form').hide();
            $('.bill-and-contract-form').hide();
        }
        if (option == 'none') {
            $('.card-form').hide();
            $('.billOferta-form').hide();
            $('.bill-and-contract-form').hide();
        }
    });

    $('.show-datapicker').on("click", function () {
        if (!$(this).prev('input').prop('checked')) {
            $('.other-data-wrap__datapicker-inp').toggle()
        }

    });

    $('.other-data-wrap__datapicker-inp').datepicker({
        language: {
            daysShort: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
        },
        dateFormat: 'dd.mm.yyyy.D'
    });


//selectize  Для способ оплаты Счет по договору оферты
    var $selectBillOferta = $('#billOferta-form-id-client').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="selectize__user-form"><div class="selectize__user-form__ava"><span>' +
                    '<img width="30" height="30" src="' + data.imgPath + '" alt=""></span></div>' +
                    '<div class="selectize__user-form__info"><span class="selectize__user-form__info-link">' + data.userName + '</span>' +
                    '<p class="selectize__user-form__info-type">' + data.userType + '</p> '
            }
        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            $selectizeBillOferta.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                $selectizeBillOferta.addOption({
                    value: "1234",
                    text: "Okhapkina Irina",
                    imgPath: "/images/ava41.jpg",
                    userName: "Okhapkina Irina",
                    userType: "Турагент",
                    userCity: "Киров",
                    email: "trewel.servis@yandex.ru"
                });
            }

            $selectizeBillOferta.refreshOptions();
        },

        onChange: function (val) {
            var data = this.options[val];
            if (!data) return;
            var block = '<div class="selectize-dropdown__user-block"><div class="selectize-dropdown__user-ava"><span>' +
                '<img width="60" height="60" src="' + data.imgPath + '" alt=""></span></div>' +
                '<div class="selectize-dropdown__user-info"><a href="#" class="bold">' + data.userName + '</a>' +
                '<p class="selectize-dropdown__user-info-place">' + data.userType + ' , ' + data.userCity + '</p> ' +
                '<p class="selectize-dropdown__user-info-contact">' + data.email + '</p></div></div>';
            $('.billOferta-form-id-client.dropdowm-block').show().html(block);
        },
        onDelete: function () {
            $selectizeBillOferta.clearOptions();
        },
        onFocus: function () {
            $('.selectize-input').focus().addClass('selectize-input-focus');
        },
        onBlur: function () {
            $('.selectize-input').focus().removeClass('selectize-input-focus');
        }
    });
    var $selectizeBillOferta = $selectBillOferta [0].selectize;
    //end__selectize Для способ оплаты Счет по договору оферты


    //selectize  Для способ оплаты ..Карта
    var $selectCardForm = $('#card-form-id-client').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="selectize__user-form"><div class="selectize__user-form__ava"><span>' +
                    '<img width="30" height="30" src="' + data.imgPath + '" alt=""></span></div>' +
                    '<div class="selectize__user-form__info"><span class="selectize__user-form__info-link">' + data.userName + '</span>' +
                    '<p class="selectize__user-form__info-type">' + data.userType + '</p> '
            }
        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            $selectizeCardForm.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                $selectizeCardForm.addOption({
                    value: "1234",
                    text: "Okhapkina Irina",
                    imgPath: "/images/ava41.jpg",
                    userName: "Okhapkina Irina",
                    userType: "Турагент",
                    userCity: "Киров",
                    email: "trewel.servis@yandex.ru"
                });
            }

            $selectizeCardForm.refreshOptions();
        },

        onChange: function (val) {
            var data = this.options[val];
            if (!data) return;
            var block = '<div class="selectize-dropdown__user-block"><div class="selectize-dropdown__user-ava"><span>' +
                '<img width="60" height="60" src="' + data.imgPath + '" alt=""></span></div>' +
                '<div class="selectize-dropdown__user-info"><a href="#" class="bold">' + data.userName + '</a>' +
                '<p class="selectize-dropdown__user-info-place">' + data.userType + ' , ' + data.userCity + '</p> ' +
                '<p class="selectize-dropdown__user-info-contact">' + data.email + '</p></div></div>';
            $('.card-form-id-client.dropdowm-block').show().html(block);
        },
        onDelete: function () {
            $selectizeCardForm.clearOptions();
        },
        onFocus: function () {
            $('.selectize-input').focus().addClass('selectize-input-focus');
        },
        onBlur: function () {
            $('.selectize-input').focus().removeClass('selectize-input-focus');
        }
    });
    var $selectizeCardForm = $selectCardForm [0].selectize;
    //end__selectize  Для способ оплаты ..Карта


    function createSelectize(selector) {

        var $selectAddPrsn = $(selector).selectize({
            render: {
                option: function (data, escape) {
                    return '<div class="selectize__user-form"><div class="selectize__user-form__ava"><span>' +
                        '<img width="30" height="30" src="' + data.imgPath + '" alt=""></span></div>' +
                        '<div class="selectize__user-form__info"><span class="selectize__user-form__info-link">' + data.userName + '</span>' +
                        '<p class="selectize__user-form__info-type">' + data.userType + '</p> '
                }
            },
            searchField: ["value"],
            onChange: function (val) {
                var data = this.options[val];
                if (!data) return;
                var block = '<div class="selectize-dropdown__user-block"><div class="selectize-dropdown__user-ava"><span>' +
                    '<img width="60" height="60" src="' + data.imgPath + '" alt=""></span></div>' +
                    '<div class="selectize-dropdown__user-info"><a href="#" class="bold">' + data.userName + '</a>' +
                    '<p class="selectize-dropdown__user-info-place">' + data.userType + ' , ' + data.userCity + '</p> ' +
                    '<p class="selectize-dropdown__user-info-contact">' + data.email + '</p></div></div>';
                $('.add-choice-prsn.dropdowm-block').show().html(block);
            },
            onDelete: function () {
                $selectizeAddPrsn.clearOptions();
            },
            onFocus: function () {
                $('.selectize-input').focus().addClass('selectize-input-focus');
            },
            onBlur: function () {
                $('.selectize-input').focus().removeClass('selectize-input-focus');
            },
            options: [
                {
                    value: "1",
                    text: "Okhapkina Irina",
                    imgPath: "/images/ava41.jpg",
                    userName: "Okhapkina Irina",
                    userType: "Турагент",
                    userCity: "Киров",
                    email: "trewel.servis@yandex.ru"
                },
                {
                    value: "2",
                    text: "Okhapkina Irina",
                    imgPath: "/images/ava41.jpg",
                    userName: "Okhapkina Irina",
                    userType: "Турагент",
                    userCity: "Киров",
                    email: "trewel.servis@yandex.ru"
                },
                {
                    value: "3",
                    text: "Okhapkina Irina",
                    imgPath: "/images/ava41.jpg",
                    userName: "Okhapkina Irina",
                    userType: "Турагент",
                    userCity: "Киров",
                    email: "trewel.servis@yandex.ru"
                }
            ]
        });
        var $selectizeAddPrsn = $selectAddPrsn[0].selectize;
    }


    createSelectize("#bill-and-contract-form-add-prsn");
    createSelectize("#billOferta-add-prsn");
    createSelectize("#card-form-add-prsn");


    $('.js-add-show').on('click' ,function () {
        $(this).closest('.panel').find('.js-show-add').toggle();
        $(this).closest('.panel').find('table').toggle()

    });



});
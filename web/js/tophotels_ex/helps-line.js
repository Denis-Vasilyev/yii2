$(document).ready(function () {

    $('.js-control-show').on('click', function () {
        $(this).closest('.orders-wrap').find('.js-control').removeClass('block');
        $(this).find('.js-control').addClass('block');

        $('#js-dpicker-filter-datePicker1').addClass('hidden')


    });
    $('.js-control-hide').on('click', function () {
        $(this).closest('.orders-wrap').find('.js-control').removeClass('block');
        return false
    });
    $('.order__inp.form-date').on('click', function () {
        $(this).closest('.orders-wrap').find('.js-control').removeClass('block');
    });

    $('#step1').click(function () {
        line($(this));
        _hashState('#step1');
        $('#step1Panel').show();
        $('#formPanel').hide();
        $('#step2Panel').hide();
        $('#formStep2Panel').hide();
        $('.orders-consultants').show();
        $('.rega-field').hide();
        $('.orders-back-hotels').hide();
    });
    $('#form').click(function () {
        line($(this));
        _hashState('#form');
        $('#step1Panel').hide();
        $('#formPanel').show();
        $('#step2Panel').hide();
        $('#formStep2Panel').hide();

        $('.orders-consultants').hide();
        $('.orders-back-hotels').hide();
    });
    $('#formStep2').click(function () {
        line($(this));
        _hashState('#formStep2');
        $('#step1Panel').hide();
        $('#formPanel').hide();
        $('#step2Panel').hide();
        $('#formStep2Panel').show();
        $('.orders-back-hotels').show();

        $('.orders-consultants').hide()
    });
    $('#step2').click(function () {
        line($(this));
        _hashState('#step2');
        $('#step1Panel').hide();

        $('#formPanel').hide();
        $('.orders-back-hotels').hide();
        $('#formStep2Panel').hide();
        $('#step2Panel').show();

        $('.orders-consultants').hide()
    });

    $('.bth__inp-block.long textarea').on('focus', function () {
        $(this).closest('.bth__inp-block.long').addClass('active');
    });
    $('.bth__inp-block.long textarea').on('blur', function () {
        $(this).closest('.bth__inp-block.long').removeClass('active');
    });
    $('.bth__inp-block.dbl-txta textarea').on('focus', function () {
        $(this).closest('.bth__inp-block.dbl-txta').addClass('active');
    });
    $('.bth__inp-block.dbl-txta textarea').on('blur', function () {
        $(this).closest('.bth__inp-block.dbl-txta').removeClass('active');
    });

    $('.bth__inp.js-stop-label').on('focus', function () {
        $(this).addClass('focus');
        $(this).next('.bth__inp-lbl').hide();
    });


    $('.bth__inp.js-stop-label').on('blur', function () {
        if ($(this).val().trim() !== '') {
            $(this).next('.bth__inp-lbl').hide();
        } else {

            $(this).next('.bth__inp-lbl').show();
        }
    });


    $('.js-show-category ').on('click', function () {
        $(this).next().show();
        $(this).hide()

    });
    $('.js-hide-category ').on('click', function () {
        $(this).closest('.marks-block').prev().show();
        $(this).closest('.marks-block').hide();
    });
    $('.js-show-metro ').on('click', function () {
        $(this).next().show();

    });


    $('input[name="rating"]').on('change', function () {
        var text = $(this).next().find('span').text();
        $(this).closest('.marks-block').prev().show();
        $(this).closest('.marks-block').prev().find('span').text(text);
        $(this).closest('.marks-block').hide()

    });


    $('.order-form-wrapper .bth__inp').on('focus', function () {
        $(this).addClass('focus');
        $(this).next('.bth__inp-lbl').addClass('active');
    });

    $('.order-form-wrapper .bth__inp').on('blur', function () {
        if ($(this).val().trim() === '') {
            $(this).next('.bth__inp-lbl').removeClass('active');
        }
        $(this).removeClass('focus');
    });


    $(' .order-form-wrapper .js-label').on('change', function () {
        $('.js-label').each(function () {
            if ($(this).val().length) {
                $(this).next('.bth__inp-lbl').addClass('active');
            }
        });
    });

    $('.order-form-wrapper .js-label').change();


    //карусель


    $('.consultants-js-slider').slick({
        slidesToShow: 4, slidesToScroll: 1,
        infinite: true,
        prevArrow: '<span class="slick-prev   consult__prev "></span>',
        nextArrow: '<span class="slick-prev   consult__next "></span>',
        responsive: [
            {
                breakpoint: 800,

                settings: {slidesToShow: 3}
            },
            {
                breakpoint: 480,
                settings: {slidesToShow: 1}
            }
        ]
    });

    $('.js-show-cbx  ').on('click', function () {
        $(this).next().show();
        $('.order-line').closest('.orders-wrap').find('.order-line').show()

    });

    var countSumo = 0;
    $('.form-adults__item.age1').on('click', 'li.opt:first-child', function () {
        countSumo++;
        if (countSumo === 1) {

            $(this).closest('.form-adults').find('.age2').show();
        } else if (countSumo === 2) {

            $(this).closest('.form-adults').find('.age3').show();
            countSumo = 0;
        }


    });
    $('.form-adults  .form-adults__item-cross').on('click', function () {
        $(this).closest('.form-adults__item').hide();
    });
    $('.js-show-section').on('click', function () {
        $(this).closest('.orders-consultants').find('.orders-consultants__filtr-section').show();
    });


    $('.order__inp-currency-wrap').on('click', function () {
        $(this).find('.js-animate ').toggleClass('active');
        $(this).find('.order__inp-currency ').toggle();
    });


    // создаем первый пикер
    initGeminiDPicker('datePicker1', function (newValue) {
        var datePicker = $('#js-dpicker-filter-datePicker1');
        var d = newValue.newDate.split(' - ');
        $('#datePicker1').text(newValue.newDate);

        datePicker.closest('.orders-wrap').find('.js-control').removeClass('block');
        datePicker.addClass('hidden');
    });


    $('select[name="adults"]').SumoSelect();


    var $selectMetro = $('#metro').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-block__info">' + data.text + '</div>'
            },

            item: function (data, escape) {
                return '<p class="user-form__info-type">' + data.text + '</p> '
            }

        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeMetro.clearOptions();

            if (str !== "" && "12".startsWith(str.toLowerCase())) {
                selectizeMetro.addOption({
                    value: "12",
                    text: "Адмиралтейская",

                });
            }

            selectizeMetro.refreshOptions();
        },


        onDelete: function () {
            selectizeMetro.clearOptions();
        },

        onFocus: function () {
            $('#metro + .selectize-control').find('.selectize-input').focus().closest('.bth__inp-block').addClass('active');
            $('#metro + .selectize-control').find('.selectize-input').focus().closest('.bth__inp-block').find('.bth__inp-lbl').addClass('active');
        },
        onBlur: function () {
            if (!$('#metro + .selectize-control').find('.selectize-input').hasClass('full')) {
                $('#metro + .selectize-control').find('.selectize-input').blur().closest('.bth__inp-block').find('.bth__inp-lbl').removeClass('active');
            }
            $('#metro + .selectize-control').find('.selectize-input').blur().closest('.bth__inp-block').removeClass('active');
        }

    });

    var selectizeMetro = $selectMetro[0].selectize;


    var $selectCity = $('#city').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-block__info">' + data.text + '</div>'
            },

            item: function (data, escape) {
                return '<p class="user-form__info-type">' + data.text + '</p> '
            }

        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeCity.clearOptions();

            if (str !== "" && "12".startsWith(str.toLowerCase())) {
                selectizeCity.addOption({
                    value: "12",
                    text: "Москва",

                });
            }

            selectizeCity.refreshOptions();
        },


        onDelete: function () {
            selectizeCity.clearOptions();
        },

        onFocus: function () {
            $('#city + .selectize-control').find('.selectize-input').focus().closest('.bth__inp-block').addClass('active');
            $('#city + .selectize-control').find('.selectize-input').focus().closest('.bth__inp-block').find('.bth__inp-lbl').addClass('active');
        },
        onBlur: function () {
            if (!$('#city + .selectize-control').find('.selectize-input').hasClass('full')) {
                $('#city + .selectize-control').find('.selectize-input').blur().closest('.bth__inp-block').find('.bth__inp-lbl').removeClass('active');
            }
            $('#city + .selectize-control').find('.selectize-input').blur().closest('.bth__inp-block').removeClass('active');
        }
    });

    var selectizeCity = $selectCity[0].selectize;


    var $selectMetroApi = $('#metro-api').selectize({
        placeholder: 'Метро',
        render: {
            option: function (data, escape) {
                return '<div class="user-block__info">' + data.text + '</div>'
            },

            item: function (data, escape) {
                return '<p class="user-form__info-type">' + data.text + '</p> '
            }

        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeMetroApi.clearOptions();

            if (str !== "" && "12".startsWith(str.toLowerCase())) {
                selectizeMetroApi.addOption({
                    value: "12",
                    text: "Адмиралтейская",

                });
            }

            selectizeMetroApi.refreshOptions();
        },


        onDelete: function () {
            selectizeMetroApi.clearOptions();
        }
    });

    var selectizeMetroApi = $selectMetroApi[0].selectize;


    var $selectCityApi = $('#city-api').selectize({
        placeholder: 'Город',
        render: {
            option: function (data, escape) {
                return '<div class="user-block__info">' + data.text + '</div>'
            },

            item: function (data, escape) {
                return '<p class="user-form__info-type">' + data.text + '</p> '
            }

        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeCityApi.clearOptions();

            if (str !== "" && "12".startsWith(str.toLowerCase())) {
                selectizeCityApi.addOption({
                    value: "12",
                    text: "Москва",

                });
            }

            selectizeCityApi.refreshOptions();
        },


        onDelete: function () {
            selectizeCityApi.clearOptions();
        }

    });

    var selectizeCityApi = $selectCityApi[0].selectize;


});




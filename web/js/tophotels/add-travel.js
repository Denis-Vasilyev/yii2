$(function(){
    $('.date_range').datepicker({
        range: 'period', // режим - выбор периода
        numberOfMonths: 2,
        onSelect: function(dateText, inst, extensionRange) {
            // extensionRange - объект расширения
            $('.date_range').val(extensionRange.startDateText + ' - ' + extensionRange.endDateText);
        }
    });

    $('.date_range2').datepicker({
        range: 'period', // режим - выбор периода
        numberOfMonths: 2,
        onSelect: function(dateText, inst, extensionRange) {
            // extensionRange - объект расширения
            $('.date_range2').val(extensionRange.startDateText + ' - ' + extensionRange.endDateText);
        }
    });

    $('.date_range3').datepicker({
        range: 'period', // режим - выбор периода
        numberOfMonths: 2,
        onSelect: function(dateText, inst, extensionRange) {
            // extensionRange - объект расширения
            $('.date_range3').val(extensionRange.startDateText + ' - ' + extensionRange.endDateText);
        }
    });
});

$('.js-suggest').selectize();

jQuery(document).ready(function($){
    // $('select[name="addMonth"]').SumoSelect();
    // $('select[name="addMonthM"]').SumoSelect();
    // $('select[name="addYear"]').SumoSelect();

    $('select[name="addWith"]').SumoSelect({
        search : true,
        searchText : ' ',
        noMatch : 'Нет совпадений',
        placeholder: 'С кем?'
    });

    $('select[name="addMonth"]').SumoSelect({
        search : true,
        searchText : ' ',
        noMatch : 'Нет совпадений',
        placeholder: 'Выберите год'
    });

    $('select[name="addMonth2"]').SumoSelect({
        search : true,
        searchText : ' ',
        noMatch : 'Нет совпадений',
        placeholder: 'Выберите год'
    });

    $('select[name="addMonth3"]').SumoSelect({
        search : true,
        searchText : ' ',
        noMatch : 'Нет совпадений',
        placeholder: 'Выберите год'
    });

    $('select[name="addYear"]').SumoSelect({
        search : true,
        searchText : ' ',
        noMatch : 'Нет совпадений',
        placeholder: 'Выберите год'
    });

    $('select[name="addMonthM"]').SumoSelect({
        search : true,
        searchText : ' ',
        noMatch : 'Нет совпадений',
        placeholder: 'Выберите год'
    });

    $('select[name="addHotel"]').SumoSelect({
        search : true,
        searchText : ' ',
        noMatch : 'Нет совпадений',
        placeholder: 'Выберите отель'
    });

    $('select[name="addHotel2"]').SumoSelect({
        search : true,
        searchText : ' ',
        noMatch : 'Нет совпадений',
        placeholder: 'Выберите отель'
    });
    $('select[name="addHotel3"]').SumoSelect({
        search : true,
        searchText : ' ',
        noMatch : 'Нет совпадений',
        placeholder: 'Выберите отель'
    });
    $('select[name="addHotel4"]').SumoSelect({
        search : true,
        searchText : ' ',
        noMatch : 'Нет совпадений',
        placeholder: 'Выберите отель'
    });


    $('.SumoSelect.sumo_addHotel').on('click',function () {
        if ($(this).find('.SelectBox').find('span').hasClass('placeholder')) {
            $('#addHotel').removeClass('active');
        } else {
            $('#addHotel').addClass('active');
        }
    });

    $('.SumoSelect.sumo_addHotel2').on('click',function () {
        if ($(this).find('.SelectBox').find('span').hasClass('placeholder')) {
            $('#addHotel2').removeClass('active');
        } else {
            $('#addHotel2').addClass('active');
        }
    });

    $('.SumoSelect.sumo_addHotel3').on('click',function () {
        if ($(this).find('.SelectBox').find('span').hasClass('placeholder')) {
            $('#addHotel3').removeClass('active');
        } else {
            $('#addHotel3').addClass('active');
        }
    });

    $('.SumoSelect.sumo_addHotel4').on('click',function () {
        if ($(this).find('.SelectBox').find('span').hasClass('placeholder')) {
            $('#addHotel4').removeClass('active');
        } else {
            $('#addHotel4').addClass('active');
        }
    });


    $('.SumoSelect.sumo_addWith').on('click',function () {
        if ($(this).find('.SelectBox').find('span').hasClass('placeholder')) {
            $('#addWith').removeClass('active');
        } else {
            $('#addWith').addClass('active');
        }
    });

    $('.SumoSelect.sumo_addYear').on('click',function () {
        if (!$(this).find('.SelectBox').find('span').hasClass('placeholder')) {
            $('#addYear').addClass('active');
            $(this).closest('.add-travel__date-block').find('.hotel-month').show();
        } else {
            $('#addYear').removeClass('active');
            $(this).closest('.add-travel__date-block').find('.hotel-month').hide();

        }
    });

    $('.SumoSelect.sumo_addMonthM').on('click',function () {
        if ($(this).find('.SelectBox').find('span').hasClass('placeholder')) {
            $('#addMonthM').removeClass('active');
        } else {
            $('#addMonthM').addClass('active');
        }
    });

    $('.SumoSelect.sumo_addMonth').on('click',function () {
        if ($(this).find('.SelectBox').find('span').hasClass('placeholder')) {
            $(this).closest('.add-travel__date-block').find('#hotelDate').hide();
            $('#addMonth').removeClass('active');
        } else {
            $(this).closest('.add-travel__date-block').find('#hotelDate').show();
            $('#addMonth').addClass('active');
        }
    });

    // $('.SumoSelect.sumo_addMonth2').on('click',function () {
    //     if ($(this).find('.SelectBox').find('span').hasClass('placeholder')) {
    //         $(this).closest('.add-travel__date-block').find('#hotelDate2').hide();
    //         $('#addMonth2').removeClass('active');
    //     } else {
    //         $(this).closest('.add-travel__date-block').find('#hotelDate2').show();
    //         $('#addMonth2').addClass('active');
    //     }
    // });

    $('.SumoSelect.sumo_addMonth3').on('click',function () {
        if ($(this).find('.SelectBox').find('span').hasClass('placeholder')) {
            $(this).closest('.add-travel__date-block').find('#hotelDate3').hide();
            $('#addMonth3').removeClass('active');
        } else {
            $(this).closest('.add-travel__date-block').find('#hotelDate3').show();
            $('#addMonth3').addClass('active');
        }
    });


    $('#travelDate').on('click', function () {
        if ($('input[id="travelDate"]').val().trim() === '') {
            $('#addTravelDate').addClass('active');
        }
    });

    $('#travelDate').on('change', function () {
        if ($('input[id="travelDate"]').val().trim() === '') {
            $('#addTravelDate').removeClass('active');
        }
    });

    $('#travelDate2').on('click', function () {
        if ($('input[id="travelDate2"]').val().trim() === '') {
            $('#addTravelDate2').addClass('active');
        }
    });

    $('#travelDate2').on('change', function () {
        if ($('input[id="travelDate2"]').val().trim() === '') {
            $('#addTravelDate2').removeClass('active');
        }
    });

    $('#travelDate3').on('click', function () {
        if ($('input[id="travelDate3"]').val().trim() === '') {
            $('#addTravelDate3').addClass('active');
        }
    });

    $('#travelDate3').on('change', function () {
        if ($('input[id="travelDate3"]').val().trim() === '') {
            $('#addTravelDate3').removeClass('active');
        }
    });

});

$('input[name=travel]').on('click', function () {
    $('.travel-type').hide();
    if ($('#rbtLastTrip').prop('checked')) {
        $(this).closest('.add-travel__block').find('#lastTrip').show();
    }
    if ($('#rbtNowInHotel').prop('checked')) {
        $(this).closest('.add-travel__block').find('#nowInHotel').show();
    }
    if ($('#rbtFutureTrip').prop('checked')) {
        $(this).closest('.add-travel__block').find('#futureTrip').show();
    }
    if ($('#rbtWantVisit').prop('checked')) {
        $(this).closest('.add-travel__block').find('#wantVisit').show();
    }
});



$(function () {

    var $select = $('#HotelName').selectize({

        render: {
            option: function (data, escape) {
                return '<div class="id-hotel__selected"> <p class="bth__cnt ">' + data.text + '</p> <p class="bth__cnt  grey hotel-id">' + data.hotelID + ',' + data.hotelLocation + '</p> </div>';
            }

            // item: function (data, escape) {
            //     return '<p class="user-form__info-type">' + data.text + '</p> ';
            // }

        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectize.clearOptions();

            if (str !== "" && "123".startsWith(str.toLowerCase())) {
                selectize.addOption({
                    value: "123",
                    text: "Centara Karon Resort Phuket 4*",
                    hotelID: "ID 123456",
                    hotelLocation: "Таиланд, Пхукет"

                });
            }

            selectize.refreshOptions();
        },

        onChange: function (val) {
            var data = this.options[val];
            var block = ' <p class="bth__cnt ">' + data.text + '</p> <p class="bth__cnt  grey hotel-id">' + data.hotelID + ',' + data.hotelLocation + '</p> ';
            $('#HotelSelected').show().html(block);
        },

        onDelete: function () {
            selectize.clearOptions();
        },
        onFocus: function () {
            $('.selectize-input').focus().closest('.hotel-name').addClass('focus');
            $('.selectize-input').focus().closest('.hotel-name').find('.lbl-select').addClass('active');
        },
        onBlur: function () {
            if (!$('.selectize-input').hasClass('full')) {
                $('.selectize-input').blur().closest('.hotel-name').find('.lbl-select').removeClass('active');
            }
            $('.selectize-input').blur().closest('.hotel-name').removeClass('focus');
        }
    });

    var selectize = $select[0].selectize;

});

$(function () {

    var $select = $('#HotelName2').selectize({

        render: {
            option: function (data, escape) {
                return '<div class="id-hotel__selected"> <p class="bth__cnt ">' + data.text + '</p> <p class="bth__cnt  grey hotel-id">' + data.hotelID + ',' + data.hotelLocation + '</p> </div>';
            }

            // item: function (data, escape) {
            //     return '<p class="user-form__info-type">' + data.text + '</p> ';
            // }

        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectize.clearOptions();

            if (str !== "" && "123".startsWith(str.toLowerCase())) {
                selectize.addOption({
                    value: "123",
                    text: "Centara Karon Resort Phuket 4*",
                    hotelID: "ID 123456",
                    hotelLocation: "Таиланд, Пхукет"

                });
            }

            selectize.refreshOptions();
        },

        onChange: function (val) {
            var data = this.options[val];
            var block = ' <p class="bth__cnt ">' + data.text + '</p> <p class="bth__cnt  grey hotel-id">' + data.hotelID + ',' + data.hotelLocation + '</p> ';
            $('#HotelSelected2').show().html(block);
        },

        onDelete: function () {
            selectize.clearOptions();
        },
        onFocus: function () {
            $('.selectize-input').focus().closest('.hotel-name').addClass('focus');
            $('.selectize-input').focus().closest('.hotel-name').find('.lbl-select').addClass('active');
        },
        onBlur: function () {
            if (!$('.selectize-input').hasClass('full')) {
                $('.selectize-input').blur().closest('.hotel-name').find('.lbl-select').removeClass('active');
            }
            $('.selectize-input').blur().closest('.hotel-name').removeClass('focus');
        }
    });


    var selectize = $select[0].selectize;




});

$(function () {

    var $select = $('#HotelName3').selectize({

        render: {
            option: function (data, escape) {
                return '<div class="id-hotel__selected"> <p class="bth__cnt ">' + data.text + '</p> <p class="bth__cnt  grey hotel-id">' + data.hotelID + ',' + data.hotelLocation + '</p> </div>';
            }

            // item: function (data, escape) {
            //     return '<p class="user-form__info-type">' + data.text + '</p> ';
            // }

        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectize.clearOptions();

            if (str !== "" && "123".startsWith(str.toLowerCase())) {
                selectize.addOption({
                    value: "123",
                    text: "Centara Karon Resort Phuket 4*",
                    hotelID: "ID 123456",
                    hotelLocation: "Таиланд, Пхукет"

                });
            }

            selectize.refreshOptions();
        },

        onChange: function (val) {
            var data = this.options[val];
            var block = ' <p class="bth__cnt ">' + data.text + '</p> <p class="bth__cnt  grey hotel-id">' + data.hotelID + ',' + data.hotelLocation + '</p> ';
            $('#HotelSelected3').show().html(block);
        },

        onDelete: function () {
            selectize.clearOptions();
        },
        onFocus: function () {
            $('.selectize-input').focus().closest('.hotel-name').addClass('focus');
            $('.selectize-input').focus().closest('.hotel-name').find('.lbl-select').addClass('active');
        },
        onBlur: function () {
            if (!$('.selectize-input').hasClass('full')) {
                $('.selectize-input').blur().closest('.hotel-name').find('.lbl-select').removeClass('active');
            }
            $('.selectize-input').blur().closest('.hotel-name').removeClass('focus');
        }
    });

    var selectize = $select[0].selectize;

});

$(function () {

    var $select = $('#HotelName4').selectize({

        render: {
            option: function (data, escape) {
                return '<div class="id-hotel__selected"> <p class="bth__cnt ">' + data.text + '</p> <p class="bth__cnt  grey hotel-id">' + data.hotelID + ',' + data.hotelLocation + '</p> </div>';
            }

            // item: function (data, escape) {
            //     return '<p class="user-form__info-type">' + data.text + '</p> ';
            // }

        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectize.clearOptions();

            if (str !== "" && "123".startsWith(str.toLowerCase())) {
                selectize.addOption({
                    value: "123",
                    text: "Centara Karon Resort Phuket 4*",
                    hotelID: "ID 123456",
                    hotelLocation: "Таиланд, Пхукет"

                });
            }

            selectize.refreshOptions();
        },

        onChange: function (val) {
            var data = this.options[val];
            var block = ' <p class="bth__cnt ">' + data.text + '</p> <p class="bth__cnt  grey hotel-id">' + data.hotelID + ',' + data.hotelLocation + '</p> ';
            $('#HotelSelected4').show().html(block);
        },

        onDelete: function () {
            selectize.clearOptions();
        },
        onFocus: function () {
            $('.selectize-input').focus().closest('.hotel-name').addClass('focus');
            $('.selectize-input').focus().closest('.hotel-name').find('.lbl-select').addClass('active');
        },
        onBlur: function () {
            if (!$('.selectize-input').hasClass('full')) {
                $('.selectize-input').blur().closest('.hotel-name').find('.lbl-select').removeClass('active');
            }
            $('.selectize-input').blur().closest('.hotel-name').removeClass('focus');
        }
    });


    var selectize = $select[0].selectize;




});
$(function () {

    var txrpp = 'Alva Donna Exclusive Hotel & Spa';


    var $select = $('#HotelNamePP').selectize({

        render: {
            option: function (data, escape) {
                return '<div class="id-hotel__selected"> <p class="bth__cnt ">' + data.text + '</p> <p class="bth__cnt  grey hotel-id">' + data.hotelID + ',' + data.hotelLocation + '</p> </div>';
            }

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
            $('#HotelSelectedPP').show().html(block);
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

jQuery(document).ready(function($) {
    $('select[name="addMonthPP"]').SumoSelect({
        search: true,
        searchText: ' ',
        noMatch: 'Нет совпадений',
        placeholder: 'Выберите год'
    });

    $('.SumoSelect.sumo_addMonthPP').on('click',function () {
        if ($(this).find('.SelectBox').find('span').hasClass('placeholder')) {
            $(this).closest('.add-travel__date-block').find('#hotelDatePP').hide();
            $('#addTravelDatePP').removeClass('active');
        } else {
            $(this).closest('.add-travel__date-block').find('#hotelDatePP').show();
            $('#addTravelDatePP').addClass('active');
        }
    });



    $('#travelDatePP').on('click', function () {
        if ($('input[id="travelDatePP"]').val().trim() === '') {
            $('#addTravelDatePP').addClass('active');
        }
    });

    $('#travelDatePP').on('change', function () {
        if ($('input[id="travelDatePP"]').val().trim() === '') {
            $('#addTravelDatePP').removeClass('active');
        }
    });


    $('.date_rangePP').datepicker({
        range: 'period', // режим - выбор периода
        multipleDatesSeparator: ' - ',
        dateFormat: 'dd.mm.yy'
    });



    $('#step2Show').on('click', function () {
       $(this).closest('.step1').hide();
       $(this).closest('.step1').next('.step2').show();
    });


});
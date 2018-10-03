'use strict';

jQuery(document).ready(function($) {

    $('.loyalty-tab').on('click', function () {
        $('#loyaltyProgramEdit').addClass('hidden');
        $('#bonusActionEdit').addClass('hidden');
    });

    $('#loyaltyProgram').click(function () {
        line($(this));
        _hashState('#loyaltyProgram');
        $('#loyaltyProgramPanel').show();
        $('#loyaltyProgramEditPanel').hide();
        $('#bonusActionPanel').hide();
        $('#bonusActionEditPanel').hide();
        $('#complimentsPanel').hide();
        $('#preferencePanel').hide();
        $('#templatePanel').hide();
        $('#logsPanel').hide();
        $('#bonusOldPanel').hide();
    });


    $('#loyaltyProgramEdit').click(function () {
        line($(this));
        _hashState('#loyaltyProgramEdit');
        $('#loyaltyProgramPanel').hide();
        $('#loyaltyProgramEditPanel').show();
        $('#bonusActionPanel').hide();
        $('#bonusActionEditPanel').hide();
        $('#complimentsPanel').hide();
        $('#preferencePanel').hide();
        $('#templatePanel').hide();
        $('#logsPanel').hide();
        $('#bonusOldPanel').hide();
    });

    $('#bonusAction').click(function () {
        line($(this));
        _hashState('#bonusAction');
        $('#loyaltyProgramPanel').hide();
        $('#loyaltyProgramEditPanel').hide();
        $('#bonusActionPanel').show();
        $('#bonusActionEditPanel').hide();
        $('#complimentsPanel').hide();
        $('#preferencePanel').hide();
        $('#templatePanel').hide();
        $('#logsPanel').hide();
        $('#bonusOldPanel').hide();
    });
 $('#bonusOld').click(function () {
        line($(this));
        _hashState('#bonusOld');
        $('#loyaltyProgramPanel').hide();
        $('#loyaltyProgramEditPanel').hide();
        $('#bonusActionPanel').hide();
        $('#bonusOldPanel').show();
        $('#bonusActionEditPanel').hide();
        $('#complimentsPanel').hide();
        $('#preferencePanel').hide();
        $('#templatePanel').hide();
        $('#logsPanel').hide();
    });

    $('#bonusActionEdit').click(function () {
        line($(this));
        _hashState('#bonusActionEdit');
        $('#loyaltyProgramPanel').hide();
        $('#loyaltyProgramEditPanel').hide();
        $('#bonusActionPanel').hide();
        $('#bonusActionEditPanel').show();
        $('#complimentsPanel').hide();
        $('#preferencePanel').hide();
        $('#templatePanel').hide();
        $('#logsPanel').hide();
        $('#bonusOldPanel').hide();
    });

    $('#compliments').click(function () {
        line($(this));
        _hashState('#compliments');
         $('#loyaltyProgramPanel').hide();
        $('#loyaltyProgramEditPanel').hide();
        $('#bonusActionPanel').hide();
        $('#bonusActionEditPanel').hide();
        $('#complimentsPanel').show();
        $('#bonusOldPanel').hide();
        $('#preferencePanel').hide();
        $('#templatePanel').hide();
        $('#logsPanel').hide();
    });

    $('#preference').click(function () {
        line($(this));
        _hashState('#preference');
         $('#loyaltyProgramPanel').hide();
        $('#loyaltyProgramEditPanel').hide();
        $('#bonusOldPanel').hide();
        $('#bonusActionPanel').hide();
        $('#bonusActionEditPanel').hide();
        $('#complimentsPanel').hide();
        $('#preferencePanel').show();
        $('#templatePanel').hide();
        $('#logsPanel').hide();
    });

    $('#template').click(function () {
        line($(this));
        _hashState('#template');
         $('#loyaltyProgramPanel').hide();
        $('#loyaltyProgramEditPanel').hide();
        $('#bonusActionPanel').hide();
        $('#bonusActionEditPanel').hide();
        $('#complimentsPanel').hide();
        $('#preferencePanel').hide();
        $('#templatePanel').show();
        $('#logsPanel').hide();
    });

    $('#logs').click(function () {
        line($(this));
        _hashState('#logs');
        $('#loyaltyProgramPanel').hide();
        $('#loyaltyProgramEditPanel').hide();
        $('#bonusActionPanel').hide();
        $('#bonusActionEditPanel').hide();
        $('#complimentsPanel').hide();
        $('#bonusOldPanel').hide();
        $('#preferencePanel').hide();
        $('#templatePanel').hide();
        $('#logsPanel').show();
    });


    $('#loyaltyEdit').on('click', function () {
        _hashState('#loyaltyProgramEdit');
        $('.loyalty-tab').removeClass('active');
        $('#loyaltyProgramEdit').removeClass('hidden').addClass('active');
        $('#loyaltyProgramPanel').hide();
        $('#loyaltyProgramEditPanel').show();
        var width = $('#loyaltyProgramEdit').width();
        var pos = $('#loyaltyProgramEdit').position().left;
        var el = $('.loyalty-line');
        $('.loyalty-tab').removeClass('active');
        $('#loyaltyProgramEdit').addClass('active');
        el.clearQueue().animate({
            left: pos,
            width: width
        }, 300);
    });

    $('#actionEdit').on('click', function () {
        _hashState('#loyaltyProgramEdit');
        $('.loyalty-tab').removeClass('active');
        $('#bonusActionEdit').removeClass('hidden').addClass('active');
        $('#bonusActionPanel').hide();
        $('#bonusActionEditPanel').show();
        var width = $('#bonusActionEdit').width();
        var pos = $('#bonusActionEdit').position().left;
        var el = $('.loyalty-line');
        $('.loyalty-tab').removeClass('active');
        $('#bonusActionEdit').addClass('active');
        el.clearQueue().animate({
            left: pos,
            width: width
        }, 300);
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.loyalty-line');
        $('.loyalty-tab').removeClass('active');
        obj.addClass('active');
        el.clearQueue().animate({
            left: p,
            width: w
        }, 300);
    };

    var _hashState = function(_hash) {
        if(history.pushState) {
            history.pushState(null, null, _hash);
        }
        else {
            location.hash = _hash;
        }
    };


    if(!window.location.hash)
        $('.loyalty-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange',function(){
        $(window.location.hash).click();
    });

    $(function () {
        $('.popup-modal2').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });

        $('.popup-modal2').on('click', function () {
            $('html').css('margin-right', '17px');
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });


    $('select[name="type-number"]').SumoSelect({
        placeholder: 'Выберите тип номера'
    });


    $('.js-respons-loyalty').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.respons__wrap').find('.respons__block').show();

    });

    $('#responsSave').on('click', function () {
       var name = $('#responsName').val();
       var pos = $('#responsPosition').val();
       var phone = $('#responsPhone').val();
       $('#responsTotalCnt').text(name + ', ' + pos + ', ' + 'тел.:' + phone);
       $('#responsTotal').show();
       $('.respons__link').hide();
       $(this).closest('.respons__block').hide();

    });


});


$(document).ready(function () {
    $('.show-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
});


$('input').on('click', function () {
    if ($('#discount1').prop('checked')) {
        $(this).closest('.edit-loyalty__tbl').find('.size-discount').show();
        $(this).closest('.edit-loyalty__tbl').find('.user-status').hide();
    } else {
        $(this).closest('.edit-loyalty__tbl').find('.size-discount').hide();
        $(this).closest('.edit-loyalty__tbl').find('.user-status').show();
    }



});

$('input[name="userStatus"]').on('click', function () {
    if ($(this).prop('checked')) {
        $(this).closest('.cbx-block').find('.available').show();
        $(this).closest('.cbx-block').find('.no-available').hide();
    } else {
        $(this).closest('.cbx-block').find('.available').hide();
        $(this).closest('.cbx-block').find('.no-available').show();
    }

});


$('.js-height-ta').on('focus', function () {
    $(this).closest('.edit-block__ta-block').css('height', 100);
    $(this).closest('.edit-block__row').find('.simbol-count').show();
});

$('.js-height-ta').on('blur', function () {
    if ($(this).val().length>0) {
        $(this).closest('.edit-block__ta-block').css('height', 100);
        $(this).closest('.edit-block__row').find('.simbol-count').show();
    } else {
        $(this).closest('.edit-block__ta-block').css('height', 36);
        $(this).closest('.edit-block__row').find('.simbol-count').hide();
    }
});



$('select[name="loyalty"]').SumoSelect();
$('select[name="loyalNum"]').SumoSelect();
$('select[name="actionRoom"]').SumoSelect();



//
// jQuery(document).ready(function($){
//     $('#sortable').sortable();
// });

$(function () {
    var sortable = $("#sortable");

    $('.switch').on('click', function () {
        if ($(this).is('.switch-click')) {

            $(this).removeClass('switch-click');
            $(sortable).sortable({
                disabled: true
            });
        } else {

            $(this).addClass('switch-click');
            $(sortable).sortable({
                disabled: false,
                axis:'y',
                containment: '.sortable-wrap'
            });
        }
    });

    $(sortable).sortable({
        update: function (event, ui) {
            ui.item.parent().find('.sortable-block').each(function (idx) {
                $(this).find('.number-note').text(idx + 1)
            });
        },
        disabled: true

    }).disableSelection();

    $('.js-show-ta').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.special__block').find('.bth__ta-block').show();
        $(this).closest('.special__block').css('border-bottom', 'none');
        $(this).closest('.special__block').css('padding-bottom', 0);
    });


    $('.js-special-ta').on('focus', function () {
        $(this).closest('.bth__ta-block').css('height', 65);
    });

    $('.js-special-ta').on('blur', function () {
        if ($(this).val().length>0) {
            $(this).closest('.bth__ta-block').css('height', 65);
        } else {
            $(this).closest('.bth__ta-block').css('height', 42);
        }
    });



    // создаем первый пикер
    initGeminiDPicker('datePicker1', function(newValue) {
        var datePicker = $('#js-dpicker-filter-datePicker1');
        var d = newValue.newDate.split(' - ');
        $('#datePicker1').text(newValue.newDate);

        datePicker.addClass('hidden');
        // d[0] это дата от
        // d[1] это дата до, строками - используй или newValue.newDate - это строчка
    });




});
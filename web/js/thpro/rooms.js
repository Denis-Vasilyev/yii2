$(document).ready(function() {

    $('.tab').on('click', function () {
        $('.rooms-add-tab').show();
        $('.rooms-edit-tab').hide();
    });


    $('#roomDescr').click(function () {
        line($(this));
        _hashState('#roomDescr');
        $('#roomDescrPanel').show();
        $('#addRoomPanel').hide();
        $('#LogsDescrPanel').hide();
    });

    $('#addRoom').click(function () {
        line($(this));
        _hashState('#addRoom');
        $('#roomDescrPanel').hide();
        $('#addRoomPanel').show();
        $('#LogsDescrPanel').hide();
    });

    $('#LogsDescr').click(function () {
        line($(this));
        _hashState('#LogsDescr');
        $('#roomDescrPanel').hide();
        $('#addRoomPanel').hide();
        $('#LogsDescrPanel').show();
    });




    $('.js-equipment').on('click', function (e) {
        e.preventDefault();
        $(this).next('.room-equipment__block').toggle();
        $(this).find('.room__arr').toggleClass('active');
    });

    $('select[name="rumFlat"]').SumoSelect();
    $('select[name="rumNum"]').SumoSelect();
    $('select[name="rumArea"]').SumoSelect();


    $('#jsOpenGuestCtrl').on('click', function () {
        $(this).next('.guest-room__ctrl').show();
        $(this).prev('.inp-arr').addClass('active');

    });

    $('#jsGuestCtrlClose').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.guest-room__ctrl').hide();
        $(this).closest('.guest-inp').find('.inp-arr').removeClass('active');
    });

    $('#roomLong').on('click', function () {
        $('.room-short-block').hide();
        $('.switch-short').toggleClass('active');
        $('.switch').toggleClass('active');
        $(this).closest('.panel').find('.room-small-block').show();
    });

    $('#roomShort').on('click', function () {
        $('.room-small-block').hide();
        $('.switch-short').toggleClass('active');
        $('.switch').toggleClass('active');
        $(this).closest('.panel').find('.room-short-block').show();
    });


    $('#jsFilterRoomOpen').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.filter-small').hide();
        $(this).closest('.section').find('.filter-big').show();
        $(this).closest('.panel').find('.room-panel__cnt').hide();
    });

    $('.js-filter-big-close').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.filter-big').hide();
        $(this).closest('.section').find('.filter-small').show();
        $(this).closest('.panel').find('.room-panel__cnt').show();
    });

    $('.js-edit-tab').on('click', function () {
        $(this).closest('.panel').hide();
        $(this).closest('.panel').next('.panel').show();
        $('.rooms-add-tab').hide();
        $('.rooms-edit-tab').show();
        $('#roomDescr').removeClass('active');
        $('#addRoom').addClass('active');
            var w = $('#addRoom').width();
            var p = $('#addRoom').position().left;
            var el = $('.room-line');
            el.clearQueue().animate({
                left: p,
                width: w
            }, 300);
    });



    $('.js-room-ta').on('focus', function () {
        $(this).closest('.hotel-descr-ta').css('height', 100);
    });

    $('.js-room-ta').on('blur', function () {
        if ($(this).val().length>0) {
            $(this).closest('.hotel-descr-ta').css('height', 100);
        } else {
            $(this).closest('.hotel-descr-ta').css('height', 42);
        }
    });
});


jQuery(document).ready(function($){
    $('#sortablePhoto').sortable({
        disabled: false,
        axis:'x',
        containment: '.sortable-photo-wrap'
    });

    $(function () {
        $('.popup-modal3').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });

        $('.popup-modal3').on('click', function () {
            $('html').css('margin-right', '17px');
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });
});

$(document).on('click', '.add-block-link', function (e) {
    e.preventDefault();
    var tmpl = '<div class="bth__inp-block short-inp"><input type="text" class="bth__inp" placeholder="Добавить фото"><div class="add-block"><a href="#" class="add-block-link"><i class="fa fa-plus " aria-hidden="true"></i></a></div> </div>';
    $(this).closest('.bth__inp-block').after(tmpl);
    $(this).closest('.add-block').remove();
});

$(function () {
    var sortable = $("#sortable");

    $('.switch').on('click', function () {
        $(this).toggleClass('switch-click');
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
});

$(function () {
    var sortable = $("#sortableShort");

    $('.switch-short').on('click', function () {
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
                containment: '.sortable-short-wrap'
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
});
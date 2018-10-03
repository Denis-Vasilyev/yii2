$('select[name="day"]').SumoSelect();
$('select[name="month"]').SumoSelect();
$('select[name="year"]').SumoSelect();
$('select[name="hotelType"]').SumoSelect();
$('select[name="hotelPlace"]').SumoSelect();
$('select[name="hotelDistance"]').SumoSelect();
$('select[name="hotelClass"]').SumoSelect();


$('.js-suggest').selectize();
$('.js-net-suggest').selectize({
    placeholder: 'Укажите название сети',
});

jQuery(document).ready(function($) {
    $(function () {
        $('.popup-modal').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
            $('.rename-pp__step1').show();
            $('.rename-pp__step2').hide();
        });
    });

    $(function () {
        $('.hotel-net-pp-modal').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
        $(document).on('click', '.js-hotel-net-pp__close', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
            $('.hotel-net-pp__step1').show();
            $('.hotel-net-pp__step2').hide();
        });
    });


    $('.rename-pp__inp').on('focus', function () {
        $(this).closest('.rename-pp__inp-block').addClass('focus');
        $(this).data('placeholder',$(this).attr('placeholder'));
        $(this).attr('placeholder','');
    });

    $('.rename-pp__inp').on('blur', function () {
        $(this).closest('.rename-pp__inp-block').removeClass('focus');
        $(this).attr('placeholder',$(this).data('placeholder'));
    });

    $('.js-step2').on('click', function () {
        $(this).closest('.rename-pp__step1').hide();
        $('.rename-pp__step2').show();
    });



    $('.js-rename-link').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('hidden');
        var tmpl = $('.template').find('.section');
        var ttl = $('.template').find('.bth__ttl-h2');
        $(this).closest('.section').prev('.bth__ttl-h2').before(ttl);
        $(this).closest('.section').prev('.bth__ttl-h2').before(tmpl);

    });

    $('#jsNewNet').on('click', function (e) {
        e.preventDefault();
        $(this).next('.edit-block__inp-block.new-net').show();
    });

    $('#jsNetStep2').on('click', function () {
        $(this).closest('.hotel-net-pp__step1').hide();
        $('.hotel-net-pp__step2').show();
    });




});

var w = $('#descredit').width();
var p = $('#descredit').position().left;
var el = $('.description-general-line');
el.clearQueue().animate({
    left: p,
    width: w
}, 300);

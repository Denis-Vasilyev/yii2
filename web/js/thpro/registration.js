$(document).ready(function() {

    $('#authorization').click(function () {
        line($(this));
        _hashState('#authorization');
        $('#authorizationPanel').show();
        $('#registrationPanel').hide();
        $('#remindPassPanel').hide();
        $('#reqLastPanel').hide();
    });

    $('#registration').click(function () {
        line($(this));
        _hashState('#registration');
        $('#authorizationPanel').hide();
        $('#registrationPanel').show();
        $('#remindPassPanel').hide();
        $('#reqLastPanel').hide();
    });

    $('#remindPass').click(function () {
        line($(this));
        _hashState('#remindPass');
        $('#authorizationPanel').hide();
        $('#registrationPanel').hide();
        $('#remindPassPanel').show();
        $('#reqLastPanel').hide();
    });

    $('#reqLast').click(function () {
        line($(this));
        _hashState('#reqLast');
        $('#authorizationPanel').hide();
        $('#registrationPanel').hide();
        $('#remindPassPanel').hide();
        $('#reqLastPanel').show();
    });

    $('.js-open-eye').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.jsPassStep2').on('click', function () {
       $(this).closest('.pass-step1').hide();
       $(this).closest('.pass-step1').next('.pass-step2').show();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.line');
        $('.tab').removeClass('active');
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
        $('.tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange',function(){
        $(window.location.hash).click();
    });

    $('.birthday').datepicker();

    $(document).on('click', '.js-accredit-add', function (e) {
        e.preventDefault();
        var tpl = '<div class="accredit__line"><div class="bth__inp-block hotel-link"> <input type="text" class="bth__inp bold " placeholder="Ссылка  на отель или сайт"> </div> <a href="#" class="accredit-add js-accredit-add"> <i class="fa fa-plus"></i> </a> </div>';
        $(this).closest('.accredit__line').after(tpl);
        $(this).remove();
    });


    $(document).on('click', '.jsRegAccreditAdd', function (e) {
        e.preventDefault();
        var tpl = '<div class="bth__inp-block mt20"> <input type="text" class="bth__inp bold js-label" id="regHotel" value="" > <label for="regHotel" class="bth__inp-lbl">Ссылка на отель или сайт</label> <a href="#" class="accredit-add jsRegAccreditAdd"> <i class="fa fa-plus"></i> </a> </div>';
        $(this).closest('.bth__inp-block').after(tpl);
        $(this).remove();
    });




});

jQuery(document).ready(function($) {

    $('.js-label').on('focus', function () {
        $(this).next('.bth__inp-lbl').addClass('active');
    });

    $('.js-label').on('blur', function () {
        if ($(this).val().trim() === '') {
            $(this).next('.bth__inp-lbl').removeClass('active');
        }
    });

    $('.js-label').on('change', function () {
        $('.js-label').each(function () {
            if ($(this).val().length) {
                $(this).next('.bth__inp-lbl').addClass('active');
            }
        });
    });

    $('.js-label').change();

    $('select[name="myGender"]').SumoSelect({
        search : true,
        searchText : ' ',
        noMatch : 'Нет совпадений',
        placeholder: 'Выберите год'
    });

    $('select[name="myCountry"]').SumoSelect({
        search : true,
        searchText : ' ',
        noMatch : 'Нет совпадений',
        placeholder: 'Выберите страну'
    });

    $('select[name="myCity"]').SumoSelect({
        search : true,
        searchText : ' ',
        noMatch : 'Нет совпадений',
        placeholder: 'Выберите страну'
    });

    $('.SumoSelect.sumo_myGender').on('click',function () {
        if ($(this).find('.SelectBox').find('span').hasClass('placeholder')) {
            $('#myGender').removeClass('active');
        } else {
            $('#myGender').addClass('active');
        }
    });

    $('.SumoSelect.sumo_myCountry').on('click',function () {
        if ($(this).find('.SelectBox').find('span').hasClass('placeholder')) {
            $('#myCountry').removeClass('active');
        } else {
            $('#myCountry').addClass('active');
        }
    });

    $('.SumoSelect.sumo_myCity').on('click',function () {
        if ($(this).find('.SelectBox').find('span').hasClass('placeholder')) {
            $('#myCity').removeClass('active');
        } else {
            $('#myCity').addClass('active');
        }
    });

    $('#regBirthday').on('click', function () {
        if ($('input[id="regBirthday"]').val().trim() === '') {
            $('#regAddBirthday').addClass('active');
        }
    });

    $('#regBirthday').on('change', function () {
        if ($('input[id="regBirthday"]').val().trim() === '') {
            $('#regAddBirthday').removeClass('active');
        }
    });

    var tabHide = $('#reqLast');


    $('#registrationPanel .registration__btn ').on('click', function () {
        tabHide.show().click()
    });

});
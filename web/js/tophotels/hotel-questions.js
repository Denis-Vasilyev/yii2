$(document).ready(function () {
    $('#questionsHotel').click(function () {
        line($(this));
        _hashState('#questionsHotel');
        $('#questionsHotelPanel').show();
        $('#oftenQuestHotelPanel').hide();
        $('#askQuestionPanel').hide();
        $('#askAuthPanel').hide();
        $('#questionsNoAnswerPanel').hide();
        $('#askAnswererPanel').hide();
    });

    $('#oftenQuestHotel').click(function () {
        line($(this));
        _hashState('#oftenQuestHotel');
        $('#questionsHotelPanel').hide();
        $('#oftenQuestHotelPanel').show();
        $('#askQuestionPanel').hide();
        $('#askAuthPanel').hide();
        $('#questionsNoAnswerPanel').hide();
        $('#askAnswererPanel').hide();
    });
    $('#askQuestion').click(function () {
        line($(this));
        _hashState('#askQuestion');
        $('#questionsHotelPanel').hide();
        $('#oftenQuestHotelPanel').hide();
        $('#askQuestionPanel').show();
        $('#askAuthPanel').hide();
        $('#askAnswererPanel').hide();
    });
    $('#askAuth').click(function () {
        line($(this));
        _hashState('#askAuth');
        $('#questionsHotelPanel').hide();
        $('#oftenQuestHotelPanel').hide();
        $('#askQuestionPanel').hide();
        $('#askAuthPanel').show();
        $('#questionsNoAnswerPanel').hide();
        $('#askAnswererPanel').hide();
    });
    $('#questionsNoAnswer').click(function () {
        line($(this));
        _hashState('#questionsNoAnswer');
        $('#questionsHotelPanel').hide();
        $('#oftenQuestHotelPanel').hide();
        $('#askQuestionPanel').hide();
        $('#askAuthPanel').hide();
        $('#questionsNoAnswerPanel').show();
        $('#askAnswererPanel').hide();
    });
    $('#askAnswerer').click(function () {
        line($(this));
        _hashState('#askAnswerer');
        $('#questionsHotelPanel').hide();
        $('#oftenQuestHotelPanel').hide();
        $('#askQuestionPanel').hide();
        $('#askAuthPanel').hide();
        $('#questionsNoAnswerPanel').hide();
        $('#askAnswererPanel').show();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.quest-line');
        $('.quest-tab').removeClass('active');
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
        $('.quest-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange', function () {
        $(window.location.hash).click();
    });


    $('input[name=addQuestCbx]').on('click', function () {
        $('.quest-email').hide();
        if ($('#addQuestCbxNews').prop('checked')) {
            $(this).closest('.cbx-block').find('.quest-email').show();

        }
    });
    $('input[name=auth-addQuestCbx]').on('click', function () {
        $('.quest-email').hide();
        if ($('#auth-addQuestCbxNews').prop('checked')) {
            $(this).closest('.cbx-block').find('.quest-email').show();

        }
    });

    $('.js-open-text').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.question__cnt-block').find('.hide__cnt').toggle(100);
    });
    $('#js-next-step').on('click', function (e) {
        $(this).closest('.hotelQuestions-pp--step1').hide();
        $(this).closest('.hotelQuestions-pp--step2').find().show()
    });

    $('.js-open-form').on('click', function (e) {
        e.preventDefault();
        $(this).next('.answer__form').show();
        $(this).hide();
    });


    $('#viewShort').on('click', function () {
        $('#shortCnt').show();
        $('#longCnt').hide();
    });

    $('#viewLong').on('click', function () {
        $('#shortCnt').hide();
        $('#longCnt').show();
    });

    $('#jsNewQuest').on('click', function () {
        $(this).prev().show(100);
        $(this).hide();
        $(this).next().hide();
    });

    $('#jsCancelAddQuest').on('click', function () {
        $(this).closest('.add-quest__block').hide(100);
        $('#jsNewQuest').show();
        $(this).closest('.section').find('.switch').show();
    });


    $(window).scroll(function () {
        var hRegLB = $('.container ').offset().top + 17;
        if ($(this).scrollTop() > hRegLB) {
            $('.quest-tabs-bar__wrap').addClass('fixed');
        } else {
            $('.quest-tabs-bar__wrap').removeClass('fixed');
        }
    });


    $('.add-quest-eng').on('click', function () {
        $(this).closest('.add-quest__block').find('.add-quest__block-eng').show();
        return false
    });
    $('.answer__form-btm-add i').on('click', function () {
        $(this).closest('.answer__form-btm').after('<div class="answer__form-btm"><div class="answer__form-btm-add"><label><input type="file" class="hidden"><span class="bth__cnt">Прикрепить файл</span></label><span class="answer__form-delFile"></span></div></div>')
    });
});


$(function () {
    'use strict';
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
                axis: 'y',
                containment: '.sortable-wrap'
            });
        }
    });

});


$(window).scroll(function () {
    var hRegLB = $('.container ').offset().top + 17;
    if ($(this).scrollTop() > hRegLB) {
        $('.quest-tabs-bar__wrap').addClass('fixed');
    } else {
        $('.quest-tabs-bar__wrap').removeClass('fixed');
    }
});

$(function () {
    $('.hotel-questions-pp-open').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });

    $(document).on('click', '.hotel-questions-pp-close', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});


$(function () {
    $('.deleteQuestions-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $(document).on('click', '.deleteQuestions-pp-close', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
        $(this).closest('.step2').hide();
        $(this).closest('.step2').prev('.step1').show();
    });
});


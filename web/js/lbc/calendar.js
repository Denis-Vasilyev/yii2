$(document).ready(function () {

    $('#calendar').click(function () {
        line($(this));
        _hashState('#calendar');
        $('#calendarPanel').show();
        $('#commentsPanel').hide();
        $('#summaryPanel').hide();
        $('#legendPanel').hide();
    });
    $('#comments').click(function () {
        line($(this));
        _hashState('#comments');
        $('#calendarPanel').hide();
        $('#commentsPanel').show();
        $('#summaryPanel').hide();
        $('#legendPanel').hide();
    });
    $('#summary').click(function () {
        line($(this));
        _hashState('#summary');
        $('#calendarPanel').hide();
        $('#commentsPanel').hide();
        $('#summaryPanel').show();
        $('#legendPanel').hide();
    });
    $('#legend').click(function () {
        line($(this));
        _hashState('#legend');
        $('#calendarPanel').hide();
        $('#commentsPanel').hide();
        $('#summaryPanel').hide();
        $('#legendPanel').show();
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


    $('.contact-list__tbl').change(function () {
        if ($('input[name=write]').is(":checked")) {
            $('.contact-list__btn-more').addClass('active');
        } else $('.contact-list__btn-more').removeClass('active');
    });


    $('.anchor-link').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 300);
    });


    $('#openExpl').on('click', function () {
        $('.expl__container').show();
    });

    $('#expClose').on('click', function () {
        $(this).closest('.expl__container').hide();
    });

    $('#openApproval').on('click', function () {
        $('.approval__container').show();
    });

    $('#approvalClose').on('click', function () {
        $(this).closest('.approval__container').hide();
    });

    $('select[id="years"]').SumoSelect();

    $('.expl-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('.expl-affirmation-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
  $('.holiday-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('#vocationDay').on("change", function () {
        $(this).closest('.edit-block').find('.btn-holiday').removeClass('btn-holiday--disable')
    });

    $('.expl-pp, .expl-affirmation-pp, .holiday-pp').on('click', function () {
        $('html').css('margin-right', '17px');
    });



    // Сделаем неактивными воскресенье и субботу
    var disabledDays = [0, 6];

    $('.disabled-days').datepicker({
        onRenderCell: function (date, cellType) {
            if (cellType == 'day') {
                var day = date.getDay(),
                    isDisabled = disabledDays.indexOf(day) != -1;

                return {
                    disabled: isDisabled
                }
            }
        }
    })

});

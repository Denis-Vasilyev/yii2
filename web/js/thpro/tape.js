$(document).ready(function() {
    $('#timeline').click(function () {
        line($(this));
        _hashState('#timeline');
        $('#timelinePanel').show();
        $('#appTouristsPanel').hide();
        $('#answerPanel').hide();
        $('#detailPanel').hide();
        $('#kpdPanel').hide();
    });
    $('#appTourists').click(function () {
        line($(this));
        _hashState('#appTourists');
        $('#timelinePanel').hide();
        $('#appTouristsPanel').show();
        $('#answerPanel').hide();
        $('#detailPanel').hide();
        $('#kpdPanel').hide();
    });
    $('#answer').click(function () {
        line($(this));
        _hashState('#answer');
        $('#timelinePanel').hide();
        $('#appTouristsPanel').hide();
        $('#answerPanel').show();
        $('#detailPanel').hide();
        $('#kpdPanel').hide();
    });
    $('#detail').click(function () {
        line($(this));
        _hashState('#detail');
        $('#timelinePanel').hide();
        $('#appTouristsPanel').hide();
        $('#answerPanel').hide();
        $('#detailPanel').show();
        $('#kpdPanel').hide();
    });
    $('#kpd').click(function () {
        line($(this));
        _hashState('#kpd');
        $('#timelinePanel').hide();
        $('#appTouristsPanel').hide();
        $('#answerPanel').hide();
        $('#detailPanel').hide();
        $('#kpdPanel').show();
    });




    $('.js-confirm').on('click', function () {
        $(this).closest('.detail__item').hide();
        $(this).closest('.detail__item').next('.detail-answer').show();
    });

    $('.tape-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('.tape-pp').on('click', function () {
        $('html').css('margin-right', '17px');
    });

});




$('.js-detail-ta').on('focus', function () {
    $(this).closest('.bth__ta-block').css('height', 100);
});

$('.js-detail-ta').on('blur', function () {
    if ($(this).val().length>0) {
        $(this).closest('.bth__ta-block').css('height', 100);
    } else {
        $(this).closest('.bth__ta-block').css('height', 60);
    }
});




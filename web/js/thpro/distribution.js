

jQuery(document).ready(function($){

    $('#myDisrtibutions').click(function () {
        line($(this));
        _hashState('#myDisrtibutions');
        $('#myDisrtibutionsPanel').show();
        $('#mySubscribersPanel').hide();
        $('#myGroupPanel').hide();
        $('#myTapePanel').hide();
        $('#createDisrtibutionPanel').hide();
    });

    $('#mySubscribers').click(function () {
        line($(this));
        _hashState('#mySubscribers');
        $('#myDisrtibutionsPanel').hide();
        $('#mySubscribersPanel').show();
        $('#myGroupPanel').hide();
        $('#myTapePanel').hide();
        $('#createDisrtibutionPanel').hide();
    });

    $('#myGroup').click(function () {
        line($(this));
        _hashState('#myGroup');
        $('#myDisrtibutionsPanel').hide();
        $('#mySubscribersPanel').hide();
        $('#myGroupPanel').show();
        $('#myTapePanel').hide();
        $('#createDisrtibutionPanel').hide();
    });

    $('#myTape').click(function () {
        line($(this));
        _hashState('#myTape');
        $('#myDisrtibutionsPanel').hide();
        $('#mySubscribersPanel').hide();
        $('#myGroupPanel').hide();
        $('#myTapePanel').show();
        $('#createDisrtibutionPanel').hide();
    });

    $('#createDisrtibution').click(function () {
        line($(this));
        _hashState('#createDisrtibution');
        $('#myDisrtibutionsPanel').hide();
        $('#mySubscribersPanel').hide();
        $('#myGroupPanel').hide();
        $('#myTapePanel').hide();
        $('#createDisrtibutionPanel').show();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.distr-line');
        $('.distr-tab').removeClass('active');
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
        $('.distr-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange',function(){
        $(window.location.hash).click();
    });

    $('.js-from').on('click', function () {
        $(this).closest('.edit-block__inp-block').find('.from__dropdown').toggleClass('active');
    });




});
jQuery(document).ready(function($){

        // $(window).scroll(function () {

    //        плавающая кнопка
    //     var topSubsBtnBlock = $('.subs__col--right').offset().top - 30;
    //
    //     if ($(this).scrollTop() > topSubsBtnBlock) {
    //         $(this).find('.subs-btn-block').addClass('fixed');
    //     } else {
    //         $(this).find('.subs-btn-block').removeClass('fixed');
    //     }


    });
// });
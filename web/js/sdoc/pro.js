$(document).ready(function () {
    $('#new-application').click(function () {
        line($(this));
        _hashState('#new-application');
        $('#new-applicationPanel').show();
        $('#pending-paymentPanel').hide();
        $('#paidPanel').hide();
        $('#all-applicationPanel').hide();
    });
    $('#pending-payment').click(function () {
        line($(this));
        _hashState('#pending-payment');
        $('#new-applicationPanel').hide();
        $('#pending-paymentPanel').show();
        $('#paidPanel').hide();
        $('#all-applicationPanel').hide();
    });
    $('#paid').click(function () {
        line($(this));
        _hashState('#paid');
        $('#new-applicationPanel').hide();
        $('#pending-paymentPanel').hide();
        $('#paidPanel').show();
        $('#all-applicationPanel').hide();
    });
    $('#all-application').click(function () {
        line($(this));
        _hashState('#all-application');
        $('#new-applicationPanel').hide();
        $('#pending-paymentPanel').hide();
        $('#paidPanel').hide();
        $('#all-applicationPanel').show();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.pro-line ');
        $('.pro-tab').removeClass('active');
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
    $('.show-panel-actions').hover(
        function () {
            $(this).find('.panel-actions__box').show()
        },
        function () {
            $(this).find('.panel-actions__box').hide()
        }
    );  $('.suggest-big__search-list-item__manager').hover(
        function () {
            $(this).find('.hint').show()
        },
        function () {
            $(this).find('.hint').hide()
        }
    );
});


jQuery(document).ready(function($) {
    $(function () {
        $('.pro-pp').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
    });

    $(document).on('click', '.close-modal, .filter-pp__btn', function () {
        $.magnificPopup.close();
    });
});
jQuery(document).ready(function ($) {

    $('.log-messages-tab').on('click', function () {
        $('#settingNotif').removeClass('active').addClass('hidden');
        $('#settingNotifPanel').hide();
    });

    $('#LogAllMessages').click(function () {
        line($(this));
        _hashState('#LogAllMessages');
        $('#LogAllMessagesPanel').show();
        $('#MyOrdersPanel').hide();
        $('#MyApplicationPanel').hide();
        $('#MyHotelsStatPanel').hide();
        $('#listNotifPanel').hide();
        $('#settingNotifPanel').hide();
    });
    $('#MyOrders').click(function () {
        line($(this));
        _hashState('#MyOrders');
        $('#LogAllMessagesPanel').hide();
        $('#MyOrdersPanel').show();
        $('#MyApplicationPanel').hide();
        $('#MyHotelsStatPanel').hide();
        $('#listNotifPanel').hide();
        $('#settingNotifPanel').hide();
    });
    $('#MyApplication').click(function () {
        line($(this));
        _hashState('#MyApplication');
        $('#LogAllMessagesPanel').hide();
        $('#MyOrdersPanel').hide();
        $('#MyApplicationPanel').show();
        $('#MyHotelsStatPanel').hide();
        $('#listNotifPanel').hide();
        $('#settingNotifPanel').hide();
    });
    $('#MyHotelsStat').click(function () {
        line($(this));
        _hashState('#MyHotelsStat');
        $('#LogAllMessagesPanel').hide();
        $('#MyOrdersPanel').hide();
        $('#MyApplicationPanel').hide();
        $('#MyHotelsStatPanel').show();
        $('#listNotifPanel').hide();
        $('#settingNotifPanel').hide();
    });

    $('#listNotif').click(function () {
        line($(this));
        _hashState('#listNotif');
        $('#LogAllMessagesPanel').hide();
        $('#MyOrdersPanel').hide();
        $('#MyApplicationPanel').hide();
        $('#MyHotelsStatPanel').hide();
        $('#MyUsersStatPanel').hide();
        $('#listNotifPanel').show();
        $('#settingNotifPanel').hide();
    });
    $('#settingNotif').click(function () {
        line($(this));
        _hashState('#settingNotif');
        $('#LogAllMessagesPanel').hide();
        $('#MyOrdersPanel').hide();
        $('#MyApplicationPanel').hide();
        $('#MyHotelsStatPanel').hide();
        $('#listNotifPanel').hide();
        $('#settingNotifPanel').show();
    });

    $(document).on('click', '.add-block-link', function (e) {
        e.preventDefault();
        var tmpl = '<div class="bth__inp-block mt10"> <input type="text" class="bth__inp" value=""> <div class="add-block"> <a href="#" class="bth__link add-block-link"> <i class="fa fa-plus " aria-hidden="true"></i> </a> </div> </div>';
        $(this).closest('.bth__inp-block').after(tmpl);
        $(this).closest('.add-block').remove();
    });


    $('.edit-not').on('click', function () {
        $('#listNotif').removeClass('active');
        $('#listNotifPanel').hide();
        $('#settingNotif').removeClass('hidden');

        $('#settingNotifPanel').show();
        var width = $('#settingNotif').width();
        var pos = $('#settingNotif').position().left;
        var el = $('.log-messages-line');
        $('.log-messages-tab').removeClass('active');
        $('#settingNotif').addClass('active');
        el.clearQueue().animate({
            left: pos,
            width: width
        }, 300);
    });


    $('#linkBack').on('click', function () {

    });
    $('.order__tbl .relative').hover(
        function () {
            $(this).find('.hint').show();
        },
        function () {
            $(this).find('.hint').hide();
        }
    );


});


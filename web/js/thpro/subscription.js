$(document).ready(function() {
    $('#subsList').click(function () {
        line($(this));
        _hashState('#subsList');
        $('#subsListPanel').show();
        $('#subsSettingPanel').hide();
        $('#subsSubscribersPanel').hide();
    });

    $('#subsSetting').click(function () {
        line($(this));
        _hashState('#subsSetting');
        $('#subsListPanel').hide();
        $('#subsSettingPanel').show();
        $('#subsSubscribersPanel').hide();
    });
    $('#subsSubscribers').click(function () {
        line($(this));
        _hashState('#subsSubscribers');
        $('#subsListPanel').hide();
        $('#subsSettingPanel').hide();
        $('#subsSubscribersPanel').show();
    });



    $(document).on('click', '.add-block-link', function (e) {
        e.preventDefault();
        var tmpl = '<div class="edit-block__inp-block mt10"><input type="text" class="edit-block__inp" value="mail@mail.ru"><div class="add-block"><a href="#" class="add-block-link"> <i class="fa fa-plus " aria-hidden="true"></i> </a></div> </div>';
        $(this).closest('.edit-block__inp-block').after(tmpl);
        $(this).closest('.add-block').remove();
    });


    $('#linkBack').on('click', function (e) {
        e.preventDefault();
        $('#subsSetting').removeClass('active');
        $('#subsList').addClass('active');
        $('#subsListPanel').show();
        $('#subsSettingPanel').hide();
        var width = $('#subsList').width();
        $('.subs-line').clearQueue().animate({
            left: 0,
            width: width
        }, 300);
    });




});




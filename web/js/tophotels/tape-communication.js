jQuery(document).ready(function($){
    $('#TapeComm').click(function () {
        line($(this));
        _hashState('#TapeComm');
        $('#TapeCommPanel').show();
        $('#correspondencePanel').hide();
        $('#v1Panel').hide();
        $('#contactsCommPanel').hide();
        $('#InvitationPanel').hide();
        $('#NoticePanel').hide();
    });
    $('#correspondence').click(function () {
        line($(this));
        _hashState('#correspondence');
        $('#TapeCommPanel').hide();
        $('#correspondencePanel').show();
        $('#v1Panel').hide();
        $('#contactsCommPanel').hide();
        $('#InvitationPanel').hide();
        $('#NoticePanel').hide();
    });
    $('#v1').click(function () {
        line($(this));
        _hashState('#v1');
        $('#TapeCommPanel').hide();
        $('#correspondencePanel').hide();
        $('#v1Panel').show();
        $('#contactsCommPanel').hide();
        $('#InvitationPanel').hide();
        $('#NoticePanel').hide();
    });
    $('#contactsComm').click(function () {
        line($(this));
        _hashState('#contactsComm');
        $('#TapeCommPanel').hide();
        $('#correspondencePanel').hide();
        $('#v1Panel').hide();
        $('#contactsCommPanel').show();
        $('#InvitationPanel').hide();
        $('#NoticePanel').hide();
    });
    $('#Invitation').click(function () {
        line($(this));
        _hashState('#Invitation');
        $('#TapeCommPanel').hide();
        $('#correspondencePanel').hide();
        $('#v1Panel').hide();
        $('#contactsCommPanel').hide();
        $('#InvitationPanel').show();
        $('#NoticePanel').hide();
    });
    $('#Notice').click(function () {
        line($(this));
        _hashState('#Notice');
        $('#TapeCommPanel').hide();
        $('#correspondencePanel').hide();
        $('#v1Panel').hide();
        $('#contactsCommPanel').hide();
        $('#InvitationPanel').hide();
        $('#NoticePanel').show();
    });

    $('.js-comm-ta').on('focus', function () {
        $(this).closest('.tcomm__ta-block').css('height', 100);
        $(this).closest('.tcomm__ta-block').next('.tcomm__attach-block').show();
    });

    $('.js-comm-ta').on('blur', function () {
        if ($(this).val().length>0) {
            $(this).closest('.tcomm__ta-block').css('height', 100);
        } else {
            $(this).closest('.tcomm__ta-block').css('height', 56);
        }
    });



    $(document).on('click', '.js-tcomm-add-file', function (e) {
        e.preventDefault();
        var tmpl = '<div class="bth__inp-block"><label class="tcomm__attach-lbl" for="tcommAttach"><input type="file" class="hidden" id="tcommAttach"><span>Выберите файл</span></label><a class="tcomm__attach-add-line js-tcomm-add-file"><i class="fa fa-plus tcomm-attach-icon" aria-hidden="true"></i></a></div>';
        $(this).closest('.bth__inp-block').after(tmpl);
        $(this).remove();
    });

    
    $('.js-user-ban').on('click', function () {
        $(this).closest('.tcomm__cnt-block').hide();
        $(this).closest('.tcomm__cnt-block').next('.tcomm__cnt-block.user-ban').show();

    });

    $('#jsFilterTCommBigOpen').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.filter-small').hide();
        $(this).closest('.section').find('.filter-big').show();
        $(this).closest('.panel').find('.tcomm__wrap').hide();
    });

    $('.js-filter-big-close').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.filter-big').hide();
        $(this).closest('.section').find('.filter-small').show();
        $(this).closest('.panel').find('.tcomm__wrap').show();
    });

    $('input[name=fromWhom]').on('click', function () {
        $('.tcomm-filter-cbx-profi').hide();
        $('.tcomm-filter-cbx-hotel').hide();
        if ($('#fromWhom3').prop('checked')) {
            $(this).closest('.bth__cell').find('.tcomm-filter-cbx-hotel').show();
            $(this).closest('.bth__cell').find('.tcomm-filter-cbx-profi').hide();
        }
        if ($('#fromWhom4').prop('checked')) {
            $(this).closest('.bth__cell').find('.tcomm-filter-cbx-hotel').hide();
            $(this).closest('.bth__cell').find('.tcomm-filter-cbx-profi').show();
        }

    });
});


$(document).ready(function () {
    $('#myMessages').click(function () {
        line($(this));
        _hashState('#myMessages');
        $('#myMessagesPanel').show();
        $('#writeMessagePanel').hide();
        $('#contactsPanel').hide();
        $('#writeNoAuthPanel').hide();
    });

    $('#writeMessage').click(function () {
        line($(this));
        _hashState('#writeMessage');
        $('#myMessagesPanel').hide();
        $('#writeMessagePanel').show();
        $('#contactsPanel').hide();
        $('#writeNoAuthPanel').hide();
    });
    $('#contacts').click(function () {
        line($(this));
        _hashState('#contacts');
        $('#myMessagesPanel').hide();
        $('#writeMessagePanel').hide();
        $('#contactsPanel').show();
        $('#writeNoAuthPanel').hide();
    });
    $('#writeNoAuth').click(function () {
        line($(this));
        _hashState('#writeNoAuth');
        $('#myMessagesPanel').hide();
        $('#writeMessagePanel').hide();
        $('#contactsPanel').hide();
        $('#writeNoAuthPanel').show();
    });
    document.getElementById('links').onclick = function (event) {
        event = event || window.event;
        var target = event.target || event.srcElement,
            link = target.src ? target.parentNode : target,
            options = {index: link, event: event},
            links = this.getElementsByTagName('a');
        blueimp.Gallery(links, options);
    };
    document.getElementById('links1').onclick = function (event) {
        event = event || window.event;
        var target = event.target || event.srcElement,
            link = target.src ? target.parentNode : target,
            options = {index: link, event: event},
            links = this.getElementsByTagName('a');
        blueimp.Gallery(links, options);
    };
    $('.form-feedback__add').on('click', function () {
        $(this).closest('.bth__inp-block').after('<div class="bth__inp-block"><div class="bth__inp"><label><input type="file" class="hidden"><span>Добавьте файл</span</label></div></div>')
    });



    $('#jsStep2').on('click', function () {
        $(this).closest('.panel').find('.step1').hide();
        $(this).closest('.panel').find('.step2').show();
    });

    $('#jsStep1').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.panel').find('.step2').hide();
        $(this).closest('.panel').find('.step1').show();
    });
    $('.step2').on('click', function (e) {
        $(this).closest('.panel').find('.step2').hide();
        $(this).closest('.panel').find('.step1').hide();
        $(this).closest('.panel').find('.step3').show();
    });
    $('input').on('click', function () {
        if ($('#char-neutral').prop('checked')) {
            $(this).closest('.section').css('background-color', '#EEEEEE');
        }
        if ($('#char-satisfied').prop('checked')) {
            $(this).closest('.section').css('background-color', '#D8EAD2');
        }
        if ($('#char-annoyed').prop('checked')) {
            $(this).closest('.section').css('background-color', ' #F4CBCB');
        }

    });


    $('input').on('click', function () {
        if ($('#feedbackRadio1').prop('checked')) {
            $(this).closest('.section').css('background-color', '#EEEEEE');
        }
        if ($('#feedbackRadio2').prop('checked')) {
            $(this).closest('.section').css('background-color', '#D8EAD2');
        }
        if ($('#feedbackRadio3').prop('checked')) {
            $(this).closest('.section').css('background-color', ' #F4CBCB');
        }

    });



});



$(document).ready(function () {
    $('#myMsg').click(function () {
        line($(this));
        _hashState('#myMsg');
        $('#myMsgPanel').show();
        $('#myMsgDetailPanel').hide();
        $('#sendMsgPanel').hide();
        $('#contactPanel').hide();

    });

    $('#sendMsg').click(function () {
        line($(this));
        _hashState('#sendMsg');
        $('#myMsgPanel').hide();
        $('#myMsgDetailPanel').hide();
        $('#sendMsgPanel').show();
        $('#contactPanel').hide();

    });
    $('#contact').click(function () {
        line($(this));
        _hashState('#contact');
        $('#myMsgPanel').hide();
        $('#myMsgDetailPanel').hide();
        $('#sendMsgPanel').hide();
        $('#contactPanel').show();
    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.lsfw-line ');
        $('.lsfw-tab').removeClass('active');
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

    $(".details__comments-add").on("click", function () {
        $(this).closest('.details__comments-wrap').find('.details__comments-add-comment').show();
        $(this).hide();
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

    $(".grey-block__content textarea").on("click", function () {
        $(this).addClass('support-textarea-active');
        $(this).closest('form').find('.grey-block__bottom').fadeIn();
        return false
    });

    $('input').on('click', function () {
        if ($('#char-neutral').prop('checked')) {
            $(this).closest('.grey-block').css('background-color', '#EEEEEE');
        }
        if ($('#char-satisfied').prop('checked')) {
            $(this).closest('.grey-block').css('background-color', '#D8EAD2');
        }
        if ($('#char-annoyed').prop('checked')) {
            $(this).closest('.grey-block').css('background-color', ' #F4CBCB');
        }

    });
    $('.add-file-block__add').on('click', function () {
        $(this).closest('.grey-block__bottom-add').after('<div class="grey-block__bottom-add"><div class="add-file-block"><div class="add-file-block__inp-block"><label><input type="file" class="hidden"><span>Добавьте файл</span></label></div></div></div>')

    });


});
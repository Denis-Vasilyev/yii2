$(function () {
    $('#tasks-detail').click(function () {
        line($(this));
        _hashState('#tasks-detail');
        $('#oldPanel').hide();
        $('#tasks-detailPanel').show();

    });
    $('#old').click(function () {
        line($(this));
        _hashState('#old');
        $('#oldPanel').show();
        $('#tasks-detailPanel').hide();

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

    $('.detail-plan__closure .fa-plus--abs').on('click', function () {
        $(this).closest('.detail-plan__inp-wrap').after('<div class="detail-plan__inp-wrap ml5"><span class="operation-type__title"></span><div class="detail-plan__inp-block"><input id="link-file" type="text" placeholder="Вставьте ссылку"><div class="details__edit-add-file"><label><input type="file" class="hidden"><i class="far fa-file-image link-blue"></i></label></div></div></div>');
    });


//список закрытия задачи
    $('.detail-plan__ul li ul').on('click', 'li', function () {
        var selected = $(this).text();
        $(this).closest('.detail-plan__ul').hide();
        $(this).closest('.detail-plan__bottom').find('.detail-plan__inp-ul').text(selected);
        $(this).closest('.detail-plan__bottom').find('.detail-plan__closure').show();
        if ($(this).is('#statusTask13') ) {
            $(this).closest('.detail-plan__task').find('.detail-plan__closure .detail-plan__close-block').removeClass('hidden')
        } else {
            $(this).closest('.detail-plan__task').find('.detail-plan__closure .detail-plan__close-block').addClass('hidden')
        }
    });




    $('.detail-plan__inp-ul').on('click', function () {
        $(this).next('.detail-plan__ul').toggle()
    });


    $('.detail-plan input[name="type-comment"]').on('click', function () {
        if ($(this).prop('checked') && $(this).attr('data-form'))  {
            $(this).closest('.detail-plan__comment__block').find('.form1').show();

            $(this).closest('.detail-plan__comment__block').css('background-color', '##FFF2CD');
        } else {
            $(this).closest('.detail-plan__comment__block').find('.form1').hide();
            $(this).closest('.detail-plan__comment__block').css('background-color', '#EEEEEE');
        }


        if ($(this).prop('checked') && $(this).attr('data-comment'))  {
            $(this).closest('.detail-plan__comment__block').find('.form2').show();
            $(this).closest('.detail-plan__comment__block').css('background-color', '#EEEEEE');
        } else {
            $(this).closest('.detail-plan__comment__block').find('.form2').hide()
        }

    });



    $('.detail-plan__actions-cog').on('click', function () {
        $(this).closest('.detail-plan__main').find('.detail-plan__task > .detail-plan__closure.form1').show()
    });


    $('.detail-plan__close').on('click', function () {
        $(this).closest('.detail-plan__closure').hide()
    });


    $('.detail-plan__closure .filter-pp__btn').on('click', function () {
        $('.detail-plan__comment-task--hidden').show()
    });




    $('#task-time').clockpicker({
        autoclose: true,
        placement: 'bottom',
        align: 'left'
    });




});
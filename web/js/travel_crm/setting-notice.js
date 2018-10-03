$(function () {

    $('#list-notice').click(function () {
        line($(this));
        _hashState('#list-notice');
        $('#list-noticePanel').show();
        $('#settingPanel').hide();

    });
    $('#setting').click(function () {
        line($(this));
        _hashState('#setting');
        $('#list-noticePanel').hide();
        $('#settingPanel').show();
    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.setting-notice-line ');
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




    var tabSettingHide = $('#setting');

    $('.setting-icon').on("click", function () {
        $(tabSettingHide).show().click();

    }); $('#list-notice').on("click", function () {
        tabSettingHide.hide()

    });


    $(document).on('click', '.add-block-link', function (e) {
        e.preventDefault();
        var tmpl = '<div class="edit-block__inp-block mt10"><input type="text" class="edit-block__inp" value="mail@mail.ru"><div class="add-block"><a href="#" class="add-block-link"> <i class="fa fa-plus " aria-hidden="true"></i> </a></div> </div>';
        $(this).closest('.edit-block__inp-block').after(tmpl);
        $(this).closest('.add-block').remove();
    });



});



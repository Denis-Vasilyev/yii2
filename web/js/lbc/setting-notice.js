$(document).ready(function () {
    $('#my-notice').click(function () {
        line($(this));
        _hashState('#my-notice');
        $('#my-noticePanel').show();
        $('#by-projectPanel').hide();
        $('#settingsPanel').hide();
        $('#settings-projectsPanel').hide();

    });
    $('#by-project').click(function () {
        line($(this));
        _hashState('#by-project');
        $('#my-noticePanel').hide();
        $('#by-projectPanel').show();
        $('#settingsPanel').hide();
        $('#settings-projectsPanel').hide();


    });
    $('#settings').click(function () {
        line($(this));
        _hashState('#settings');
        $('#my-noticePanel').hide();
        $('#by-projectPanel').hide();
        $('#settingsPanel').show();
        $('#settings-projectsPanel').hide();

    });
 $('#settings-projects').click(function () {
        line($(this));
        _hashState('#settings-projects');
        $('#my-noticePanel').hide();
        $('#by-projectPanel').hide();
        $('#settingsPanel').hide();
        $('#settings-projectsPanel').show();

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


    var tabHide = $('#by-project');

    $('.notice-project-tbl td:nth-child(2)').on("click", function () {
        var nameProject = $(this).text();
        $(tabHide).show().text('По проекту' + ' ' + nameProject).click();

    }); $('#my-notice').on("click", function () {
        tabHide.hide()

    });

    var tabSettingHide = $('#settings');

    $('.setting-icon').on("click", function () {
        $(tabSettingHide).show().click();

    }); $('#my-notice').on("click", function () {
        tabHide.hide();
        tabSettingHide.hide()

    });


    $(document).on('click', '.add-block-link', function (e) {
        e.preventDefault();
        var tmpl = '<div class="edit-block__inp-block mt10"><input type="text" class="edit-block__inp" value="mail@mail.ru"><div class="add-block"><a href="#" class="add-block-link"> <i class="fa fa-plus " aria-hidden="true"></i> </a></div> </div>';
        $(this).closest('.edit-block__inp-block').after(tmpl);
        $(this).closest('.add-block').remove();
    });


});
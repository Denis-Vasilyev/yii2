$(function () {
    $('#personal-site').click(function () {
        line($(this));
        _hashState('#personal-site');
        $('#personal-sitePanel').show();
        $('#settingPanel').hide();
        $('#workPanel').hide();
        $('#contact-informPanel').hide();
        $('#aliasPanel').hide();

    });
    $('#setting').click(function () {
        line($(this));
        _hashState('#setting');
        $('#personal-sitePanel').hide();
        $('#settingPanel').show();
        $('#workPanel').hide();
        $('#contact-informPanel').hide();
        $('#aliasPanel').hide();

    });
    $('#contact-inform').click(function () {
        line($(this));
        _hashState('#contact-inform');
        $('#personal-sitePanel').hide();
        $('#settingPanel').hide();
        $('#contact-informPanel').show();
        $('#workPanel').hide();
        $('#aliasPanel').hide();

    });
    $('#work').click(function () {
        line($(this));
        _hashState('#work');
        $('#personal-sitePanel').hide();
        $('#settingPanel').hide();
        $('#contact-informPanel').hide();
        $('#workPanel').show();
        $('#aliasPanel').hide();

    });  $('#alias').click(function () {
        line($(this));
        _hashState('#alias');
        $('#personal-sitePanel').hide();
        $('#settingPanel').hide();
        $('#contact-informPanel').hide();
        $('#workPanel').hide();
        $('#aliasPanel').show();

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


});

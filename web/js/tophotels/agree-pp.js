$(document).ready(function () {
    $('#agreement').click(function () {
        line($(this));
        _hashState('#agreement');
        $('#agreementPanel').show();
    });
    $('#siteRole').click(function () {
        line($(this));
        _hashState('#siteRole');
        $('#agreementPanel').hide();
        $('#siteRolePanel').show();
    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.agree-line ');
        $('.agree-tab').removeClass('active');
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
        $('.agree-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange', function () {
        $(window.location.hash).click();
    });
});

$(document).ready(function () {
    $('#questAuth').click(function () {
        line($(this));
        _hashState('#questAuth');
        $('#questAuthPanel').show();
        $('#questHaveAuthPanel').hide();
    });
    $('#questHaveAuth').click(function () {
        line($(this));
        _hashState('#questHaveAuth');
        $('#questAuthPanel').hide();
        $('#questHaveAuthPanel').show();
    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.auth-line ');
        $('.auth-tab').removeClass('active');
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
        $('.auth-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange', function () {
        $(window.location.hash).click();
    });
    $('input[name="type-profile"]').on('change', function () {
        if ($('#type-profile-1').prop('checked')) {
            $(this).closest('.panel').find('.js-phone-placeholder').attr('placeholder', 'Мобильный телефон (необязательно)');
        } else {
            $(this).closest('.panel').find('.js-phone-placeholder').attr('placeholder', 'Мобильный телефон');

        }

    });

    $('.p-agreement-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('.p-agreement-pp').on('click', function () {
        $('html').css('overflow', 'hidden');
    });

    $('.p-agreement-pp.agree').on('click', function () {
        $('#agreement').click()
    });

    $('.p-agreement-pp.site-role').on('click', function () {
        $('#siteRole').click();
    });


});


$(document).ready(function () {

    $('#agreement').click(function () {
        line($(this));
        _hashState('#agreement');
        $('#agreementPanel').show();
        $('#siteRolePanel').hide();
    });
    $('#siteRole').click(function () {
        line($(this));
        _hashState('#siteRole');
        $('#agreementPanel').hide();
        $('#siteRolePanel').show();
    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.agreement-pp__line');
        $('.agreement-pp__tab').removeClass('active');
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
        $('.agreement-pp__tab.active').first().click();
    else
        $(window.location.hash).click();
    $(window).bind('hashchange', function () {
        $(window.location.hash).click();
    });
});


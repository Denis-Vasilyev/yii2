$(function () {
    $('#registration').click(function () {
        line($(this));
        _hashState('#registration');
        $('#registrationPanel').show();
        $('#registration-detailPanel').hide();
        $('#statPanel').hide();
    });
    $('#registration-detail').click(function () {
        line($(this));
        _hashState('#registration-detail');
        $('#registrationPanel').hide();
        $('#registration-detailPanel').show();
        $('#statPanel').hide();
    });

    $('#stat').click(function () {
        line($(this));
        _hashState('#stat');
        $('#registrationPanel').hide();
        $('#registration-detailPanel').hide();
        $('#statPanel').show();
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

    var tabDetail = $('#registration-detail');

    $('.profile-fill-tbl .user-block__info a').on('click', function () {
        var userName = $(this).text();
        tabDetail.text(userName).show().click();
    });
    $('#registration').on('click', function () {
        tabDetail.hide();
    });
});

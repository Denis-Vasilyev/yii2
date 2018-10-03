
$(function () {
    $('#common-list').click(function () {
        line($(this));
        _hashState('#common-list');
        $('#common-listPanel').show();
        $('#inner-listPanel').hide();

    });
    $('#inner-list').click(function () {
        line($(this));
        _hashState('#inner-list');
        $('#common-listPanel').hide();
        $('#inner-listPanel').show();


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

    $('.structure-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });



});


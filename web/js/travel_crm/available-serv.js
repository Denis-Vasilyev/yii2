$(function () {
    $('#availableServices').click(function () {
        line($(this));
        _hashState('#availableServices');
        $('#availableServicesPanel').show();
        $('#activatingServicesPanel').hide();
        $('#consultationPanel').hide();

    });
    $('#activatingServices').click(function () {
        line($(this));
        _hashState('#activatingServices');
        $('#availableServicesPanel').hide();
        $('#activatingServicesPanel').show();
        $('#consultationPanel').hide();
    });

    $('#consultation').click(function () {
        line($(this));
        _hashState('#consultation');
        $('#availableServicesPanel').hide();
        $('#activatingServicesPanel').hide();
        $('#consultationPanel').show();
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
});

$(function () {
    $('#capability').click(function () {
        line($(this));
        _hashState('#capability');
        $('#capabilityPanel').show();
        $('#descriptionPanel').hide();
        $('#faqPanel').hide();
        $('#cancel-servicesPanel').hide();

    });
    $('#description').click(function () {
        line($(this));
        _hashState('#description');
        $('#capabilityPanel').hide();
        $('#descriptionPanel').show();
        $('#faqPanel').hide();
        $('#cancel-servicesPanel').hide();

    });
    $('#faq').click(function () {
        line($(this));
        _hashState('#faq');
        $('#capabilityPanel').hide();
        $('#descriptionPanel').hide();
        $('#faqPanel').show();
        $('#cancel-servicesPanel').hide();

    });
    $('#cancel-services').click(function () {
        line($(this));
        _hashState('#cancel-services');
        $('#capabilityPanel').hide();
        $('#descriptionPanel').hide();
        $('#faqPanel').hide();
        $('#cancel-servicesPanel').show();

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

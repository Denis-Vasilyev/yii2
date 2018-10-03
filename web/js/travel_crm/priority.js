$(document).ready(function () {
    $('#priority').click(function () {
        line($(this));
        _hashState('#priority');
        $('#priorityPanel').show();
        $('#how-improvePanel').hide();
        $('#consultationPanel').hide();

    });
    $('#how-improve').click(function () {
        line($(this));
        _hashState('#how-improve');
        $('#priorityPanel').hide();
        $('#how-improvePanel').show();
        $('#consultationPanel').hide();
    });
    $('#consultation').click(function () {
        line($(this));
        _hashState('#consultation');
        $('#priorityPanel').hide();
        $('#how-improvePanel').hide();
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
    var colorArray = ['yellow-bg', 'green-bg', 'red-bg'];
    var indexCount = 0;
    $('.section--yellow').on("click", function () {
        $(this).removeClass(colorArray[indexCount]);
        if (indexCount == 3) indexCount = -1;
        $(this).addClass(colorArray[++indexCount])
    });

    $('.form-btn.pump-profile').on("click", function () {
        $('.section--grey.pump-profile ').find('.bth__ta-block.request-report').addClass('error');
        $('.section--grey.pump-profile ').find('.hint-block--abs').show()
    });


});

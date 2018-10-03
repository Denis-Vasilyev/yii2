$(document).ready(function () {
    $('#appraisal').click(function () {
        line($(this));
        _hashState('#appraisal');
        $('#appraisalPanel').show();
        $('#detailPanel').hide();
        $('#without-ratingsPanel').hide();
        $('#send-requestPanel').hide();
        $('#appraisal-by-monthPanel').hide();

    });
    $('#detail').click(function () {
        line($(this));
        _hashState('#detail');
        $('#appraisalPanel').hide();
        $('#detailPanel').show();
        $('#without-ratingsPanel').hide();
        $('#send-requestPanel').hide();
        $('#appraisal-by-monthPanel').hide();
    });
    $('#without-ratings').click(function () {
        line($(this));
        _hashState('#without-ratings');
        $('#appraisalPanel').hide();
        $('#detailPanel').hide();
        $('#without-ratingsPanel').show();
        $('#send-requestPanel').hide();
        $('#appraisal-by-monthPanel').hide();

    });
    $('#send-request').click(function () {
        line($(this));
        _hashState('#send-request');
        $('#appraisalPanel').hide();
        $('#detailPanel').hide();
        $('#without-ratingsPanel').hide();
        $('#send-requestPanel').show();
        $('#appraisal-by-monthPanel').hide();

    });  $('#appraisal-by-month').click(function () {
        line($(this));
        _hashState('#appraisal-by-month');
        $('#appraisalPanel').hide();
        $('#detailPanel').hide();
        $('#without-ratingsPanel').hide();
        $('#send-requestPanel').hide();
        $('#appraisal-by-monthPanel').show();

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

    $('.details-small__marker').hover(
        function () {
            $(this).find('.hint').show();

        },
        function () {
            $(this).find('.hint').hide();
        }
    );
});

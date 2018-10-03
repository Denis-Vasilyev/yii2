$(document).ready(function () {
    $('#processing-speed').click(function () {
        line($(this));
        _hashState('#processing-speed');
        $('#processing-speedPanel').show();
        $('#statisticsPanel').hide();
        $('#analysisPanel').hide();
        $('#logPanel').hide();

    });
    $('#statistics').click(function () {
        line($(this));
        _hashState('#statistics');
        $('#processing-speedPanel').hide();
        $('#statisticsPanel').show();
        $('#analysisPanel').hide();
        $('#logPanel').hide();
    });
    $('#analysis').click(function () {
        line($(this));
        _hashState('#analysis');
        $('#processing-speedPanel').hide();
        $('#statisticsPanel').hide();
        $('#logPanel').hide();
        $('#analysisPanel').show();
    });
    $('#log').click(function () {
        line($(this));
        _hashState('#log');
        $('#processing-speedPanel').hide();
        $('#statisticsPanel').hide();
        $('#analysisPanel').hide();
        $('#logPanel').show();
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


    $('input[name="percent"]').on('change', function () {
        if ($('#percent').prop('checked')) {
            $('.statistics-processing-tbl__percent').addClass('d-ib');
            $(this).closest('.filter__r-btn').find('span').addClass('bright-orange')
        } else {
            $('.statistics-processing-tbl__percent').removeClass('d-ib');
            $(this).closest('.filter__r-btn').find('span').removeClass('bright-orange')
        }
    });
});
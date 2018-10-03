$(function () {
    $('#charts').click(function () {
        line($(this));
        _hashState('#charts');
        $('#chartsPanel').show();
        $('#addPanel').hide();

    });
    $('#add').click(function () {
        line($(this));
        _hashState('#add');
        $('#chartsPanel').hide();
        $('#addPanel').show();
    });
    $('.fa-pencil-alt').click(function () {
        $('#add').click().show();
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
    $('.work-chart-pp').on('click', function () {
        $('html').css('margin-right', '17px');
    });


    $('.work-chart-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true,
        callbacks: {
            open: function () {
                $(this.content).parent().height(561)
            }
        }
    });


    $('input[name="closedChart"]').on('change', function () {
        if ($('#closedChart-on').prop('checked')) {
            $('.js-closed-chart').hide();
        }
        else  {
            $('.js-closed-chart').show();
        }

    });



});
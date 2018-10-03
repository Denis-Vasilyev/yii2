$(document).ready(function () {
    $('#by-days').click(function () {
        line($(this));
        _hashState('#by-days');
        $('#by-daysPanel').show();
        $('#by-cityPanel').hide();
        $('#by-projectPanel').hide();
    });
    $('#by-city').click(function () {
        line($(this));
        _hashState('#by-city');
        $('#by-daysPanel').hide();
        $('#by-cityPanel').show();
        $('#by-projectPanel').hide();
    });
   $('#by-project').click(function () {
        line($(this));
        _hashState('#by-project');
       $('#by-daysPanel').hide();
       $('#by-cityPanel').hide();
       $('#by-projectPanel').show();
    });



    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.distribution-structure-line ');
        $('.distribution-structure-tab').removeClass('active');
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


jQuery(document).ready(function($) {
    $(function () {
        $('.distribution-structure-pp').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
    });

    $(document).on('click', '.close-modal, .filter-pp__btn', function () {
        $.magnificPopup.close();
    });
});

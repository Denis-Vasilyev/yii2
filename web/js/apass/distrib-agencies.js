$(document).ready(function () {
    $('#agencies').click(function () {
        line($(this));
        _hashState('#agencies');
        $('#agenciesPanel').show();
        $('#contactsPanel').hide();
        $('#byCitysPanel').hide();

    });
    $('#contacts').click(function () {
        line($(this));
        _hashState('#contacts');
        $('#agenciesPanel').hide();
        $('#contactsPanel').show();
        $('#byCitysPanel').hide();

    });
    $('#byCitys').click(function () {
        line($(this));
        _hashState('#byCitys');
        $('#agenciesPanel').hide();
        $('#contactsPanel').hide();
        $('#byCitysPanel').show();

    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.distrib-agencies-line ');
        $('.distrib-agencies-tab').removeClass('active');
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

    $('.user-block').hover(
        function () {
            $(this).find('.hint').show()
        },
        function () {
            $(this).find('.hint').hide()
        }
    );
});
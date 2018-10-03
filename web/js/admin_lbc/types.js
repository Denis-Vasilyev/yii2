$(function () {

    $('#types').click(function () {
        line($(this));
        _hashState('#types');
        $('#typesPanel').show();
        $('#add-typePanel').hide();
        $('#editPanel').hide();

    });
    $('#edit').click(function () {
        line($(this));
        _hashState('#edit');
        $('#editPanel').show();
        $('#typesPanel').hide();
        $('#add-typePanel').hide();

    });
    $('#add-type').click(function () {
        line($(this));
        _hashState('#add-type');
        $('#typesPanel').hide();
        $('#editPanel').hide();
        $('#add-typePanel').show();

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

    var tabEdit = $('#edit');

    $('.types-tbl .fa-cog').on('click', function () {
        tabEdit.show().click()
    });
    $('#add-type, #types').on('click', function () {
        tabEdit.hide()
    })

});


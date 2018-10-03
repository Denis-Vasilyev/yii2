jQuery(document).ready(function ($) {

    $('#topics').click(function () {
        line($(this));
        _hashState('#topics');
        $('#topicsPanel').show();
        $('#addPanel').hide();
        $('#editPanel').hide();

    });
    $('#add').click(function () {
        line($(this));
        _hashState('#add');
        $('#topicsPanel').hide();
        $('#addPanel').show();
        $('#editPanel').hide();
    });
    $('#edit').click(function () {
        line($(this));
        _hashState('#edit');
        $('#topicsPanel').hide();
        $('#addPanel').hide();
        $('#editPanel').show();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.lsfw-line');
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


    $('.topics-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });

    $('.close-modal, .filter-pp__btn').click(function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });


    $('.topics-tbl td.relative').hover(
        function () {
            $(this).find('.tbl-actions').show();
        },
        function () {
            $(this).find('.tbl-actions').hide();
        }
    );

    var tabEdit = $('#edit');
    $('.topics-tbl .fa-pencil-square-o').on('click', function () {
        $(tabEdit).show().click()
    });
    $('.form-add--topic textarea').on('click', function () {
        $(this).addClass('active')
    });

});
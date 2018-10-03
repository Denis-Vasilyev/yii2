$(function () {

    var tabSection = $('#by-section');
    var tabEdit = $('#edit');


    $('#structure').click(function () {
        line($(this));
        _hashState('#structure');
        $('#structurePanel').show();
        $('#by-sectionPanel').hide();
        $('#addPanel').hide();
        $('#editPanel').hide();
        $('#deletedPanel').hide();

    });
    $('#by-section').click(function () {
        line($(this));
        _hashState('#by-section');
        $('#structurePanel').hide();
        $('#by-sectionPanel').show();
        $('#addPanel').hide();
        $('#editPanel').hide();
        $('#deletedPanel').hide();

    });
    $('#add').click(function () {
        line($(this));
        _hashState('#add');
        $('#structurePanel').hide();
        $('#by-sectionPanel').hide();
        $('#addPanel').show();
        $('#editPanel').hide();
        $('#deletedPanel').hide();

    });
    $('#edit').click(function () {
        line($(this));
        _hashState('#edit');
        $('#structurePanel').hide();
        $('#by-sectionPanel').hide();
        $('#addPanel').hide();
        $('#editPanel').show();
        $('#deletedPanel').hide();

    });
    $('#deleted').click(function () {
        line($(this));
        _hashState('#deleted');
        $('#structurePanel').hide();
        $('#by-sectionPanel').hide();
        $('#addPanel').hide();
        $('#editPanel').hide();
        $('#deletedPanel').show();

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


    $('.structure-tbl .link-blue').on('click', function () {
        var textSection = $(this).text();
        tabSection.show().text(textSection).click()
    });
    $('#structure').on('click', function () {
        tabSection.hide()
    });

    $('.structure-tbl .fa-cog').on('click', function () {
        var name = $(this).closest('tr').find('td:nth-child(2)').text();
        tabEdit.show().click();
        $('#name-edit').val(name)
    });

    $('#department').on('change', function () {
        $(this).closest('form').find('.hidden').removeClass('hidden')
    });
});


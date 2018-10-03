$(document).ready(function () {
    $('#notes').click(function () {
        line($(this));
        _hashState('#notes');
        $('#notesPanel').show();
        $('#add-notePanel').hide();
        $('#basketPanel').hide();
    });
    $('#add-note').click(function () {
        line($(this));
        _hashState('#add-note');
        $('#notesPanel').hide();
        $('#add-notePanel').show();
        $('#basketPanel').hide();
    });
   $('#basket').click(function () {
        line($(this));
        _hashState('#basket');
       $('#notesPanel').hide();
       $('#add-notePanel').hide();
       $('#basketPanel').show();

    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.notes-line ');
        $('.notes-tab').removeClass('active');
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

    var sortable = $("#sortable");
    var tabHide = $('#tab2');

    $('.switch').on('click', function () {
        if ($(this).is('.switch-click')) {

            $(this).removeClass('switch-click');
            $(sortable).sortable({
                disabled: true
            });
        } else {

            $(this).addClass('switch-click');
            $(sortable).sortable({
                disabled: false
            });
        }
    });

    $(sortable).sortable({
        update: function (event, ui) {
            ui.item.parent().find('li').each(function (idx) {
                $(this).find('.number-note').text(idx + 1)
            });
        },
        disabled: true

    }).disableSelection();


    $('.hov-block .delete-note').on('click', function () {

        var ul = $(this).closest('ul');

        $(this).closest('.ui-sortable-handle').remove();

        ul.find('li').each(function (idx) {
            $(this).find('.number-note').text(idx + 1)
        });

    });


    $('.fa-pencil-square-o').on('click', function () {
        var nameLink = $(this).closest('tr').find('.page-link').text();

        tabHide.removeClass('tab-hide')
            .click();
        $('#tab2-panel').toggleClass('.panel-show');

    });


    $('#tab1, #tab3, #tab4, #tab5').on("click", function () {
        $(tabHide).addClass('tab-hide')
    });


    $('.notes li').hover(
        function () {
            $(this).find('.note-data').hide();
            $(this).find('.hov-block div').removeClass('hide');

        },
        function () {
            $(this).find('.note-data').show();
            $(this).find('.hov-block div').addClass('hide');
        });


    $('.hov-block .fa-angle-up').on("click", function () {
        var upBlock = $(this).closest('li');
        var ul = $(this).closest('ul');
        $(this).closest('ul').prepend(upBlock);
        ul.find('li').each(function (idx) {
            $(this).find('.number-note').text(idx + 1)
        });
    });
});
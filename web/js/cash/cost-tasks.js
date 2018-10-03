$(document).ready(function () {
    $('#developers').click(function () {
        line($(this));
        _hashState('#developers');
        $('#developersPanel').show();
        $('#detailPanel').hide();
        $('#editPanel').hide();
        $('#templatesPanel').hide();
        $('#addPanel').hide();

    });
    $('#detail').click(function () {
        line($(this));
        _hashState('#detail');
        $('#developersPanel').hide();
        $('#detailPanel').show();
        $('#editPanel').hide();
        $('#templatesPanel').hide();
        $('#addPanel').hide();

    });
    $('#edit').click(function () {
        line($(this));
        _hashState('#edit');
        $('#developersPanel').hide();
        $('#detailPanel').hide();
        $('#editPanel').show();
        $('#templatesPanel').hide();
        $('#addPanel').hide();

    });
    $('#templates').click(function () {
        line($(this));
        _hashState('#templates');
        $('#developersPanel').hide();
        $('#detailPanel').hide();
        $('#editPanel').hide();
        $('#templatesPanel').show();
        $('#addPanel').hide();

    });

    $('#add').click(function () {
        line($(this));
        _hashState('#add');
        $('#developersPanel').hide();
        $('#detailPanel').hide();
        $('#editPanel').hide();
        $('#templatesPanel').hide();
        $('#addPanel').show();

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
    $('.list-cost--edit tr:not(.title-row) td:nth-child(2)').on('click', function () {
        tabEdit.show().click()
    });

    var tabDetail = $('#detail');
    $('.developers-tbl .cogBlue-20').on('click', function () {
        tabDetail.show().click()
    });


    $('#template').on("change", function () {
        var option = $(this).val();
        if (option === 'my') {
            $('.form-add__fieldset--add').show();
        } else {
            $('.form-add__fieldset--add').hide();
        }

    });


});
$(document).ready(function () {
    $('#all').click(function () {
        line($(this));
        _hashState('#all');
        $('#allPanel').show();
        $('#top10Panel').hide();
        $('#collectionsPanel').hide();
        $('#ratingsPanel').hide();
        $('#tabulatedPanel').hide();
        $('#edit-ratingPanel').hide();

    });
    $('#top10').click(function () {
        line($(this));
        _hashState('#top10');
        $('#allPanel').hide();
        $('#top10Panel').show();
        $('#collectionsPanel').hide();
        $('#ratingsPanel').hide();
        $('#tabulatedPanel').hide();
        $('#edit-ratingPanel').hide();

    });
    $('#collections').click(function () {
        line($(this));
        _hashState('#collections');
        $('#allPanel').hide();
        $('#top10Panel').hide();
        $('#collectionsPanel').show();
        $('#ratingsPanel').hide();
        $('#tabulatedPanel').hide();
        $('#edit-ratingPanel').hide();

    });
    $('#ratings').click(function () {
        line($(this));
        _hashState('#ratings');
        $('#allPanel').hide();
        $('#top10Panel').hide();
        $('#collectionsPanel').show();
        $('#ratingsPanel').hide();
        $('#tabulatedPanel').hide();
        $('#edit-ratingPanel').hide();

    });
    $('#tabulated').click(function () {
        line($(this));
        _hashState('#tabulated');
        $('#allPanel').hide();
        $('#top10Panel').hide();
        $('#collectionsPanel').hide();
        $('#ratingsPanel').hide();
        $('#tabulatedPanel').show();
        $('#edit-ratingPanel').hide();

    });
    $('#edit-rating').click(function () {
        line($(this));
        _hashState('#edit-rating');
        $('#allPanel').hide();
        $('#top10Panel').hide();
        $('#collectionsPanel').hide();
        $('#ratingsPanel').hide();
        $('#tabulatedPanel').hide();
        $('#edit-ratingPanel').show();

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


//Подсказки
    $('.relative').hover(function () {
            $(this).find('.hint').show();
        },
        function () {
            $(this).find('.hint').hide()
        }
    );


//таб редактирования
    var tabEdit = $('#edit-rating');

    $('.ratings-nominations-tbl .fa-cog').on('click', function () {
        tabEdit.show().click()
    });

    //Выбор категории

    $('#articleType').on("change", function () {
        var option = $(this).val();
        if (option === 'articleType1') {
            $(this).closest('form').find('.hidden').removeClass('hidden');
        } else {
            $(this).closest('form').find('.hidden').addClass('hidden');
        }

    });


    $('.form-add__hotel-control__del').on('click', function () {
        $(this).closest('.form-add__hotel').hide()
    });
    $('.js-show-hotel').on('click', function () {
        $(this).closest('form').find('.js-new-hotel ').show()
    });


    $('.ratings-and-nominations-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });

    $('#articleType').SumoSelect();
    $('#articleCategory').SumoSelect();


    $('.rating-editorForm .fa-angle-down, .form-add__hotel-control__txt div:first-of-type').on('click', function () {
        $(this).closest('.form-add__hotel').find('.form-add__hotel-control').toggleClass('form-add__hotel-control--full');
        $(this).closest('.form-add__hotel').find('.form-add__hotel-bottom').toggle();
    });

    $('.rating-editorForm .fa-angle-down').on('click', function () {
        $(this).toggleClass('form-add__animate ')
    });

    $('.form-add__hotel-control__txt div:first-of-type').on('click', function () {
        $(this).closest('.form-add__hotel').find('.fa-angle-down').toggleClass('form-add__animate ')
    });


    $('.input-take').on('change', function () {
        if ($(this).is(':checked')) {
            $(this).closest('.category-pp__photos__item').addClass('active')
        }
    });

    $('#sortable').sortable({
        handle: '.form-add__hotel-control__dot',
        containment: '#sortable'
    });

    // Добавить ссылку
    $('.form-add__editorTxt__block > input').on('change', function () {
        if ($('#link').is(':checked')) {
            $(this).closest('.form-add__editorTxt').find('.link-dropdown').show()
        } else {
            $(this).closest('.form-add__editorTxt').find('.link-dropdown').hide()
        }
    });

    $('.js-send-link').on('click', function () {
        $('.link-dropdown').hide()
    });
    $('.rating-left-column__tag-cross').on('click', function () {
        $(this).closest('.rating-left-column__tag').hide()
    });
// размер шрифта
    $('input[name="fsz"]').on('change', function () {

        if ($('#italic').prop('checked')) {
            $(this).closest('.form-add__inp-block--editor').next().find('input').css('font-style', 'italic');
        } else {
            $(this).closest('.form-add__inp-block--editor').next().find('input').css('font-style', 'normal');
        }

        if ($('#bold').prop('checked')) {
            $(this).closest('.form-add__inp-block--editor').next().find('input').css('font-weight', 'bold');
        } else {
            $(this).closest('.form-add__inp-block--editor').next().find('input').css('font-weight', 'normal');
        }

    });
    $.cleditor.defaultOptions.height = 100;

    $("#txt-editor").cleditor({
        controls: // controls to add to the toolbar
            "bold italic underline  bullets link unlink",
        bodyStyle: // style to assign to document body contained within the editor
            "margin:4px; font:10pt Arial,Verdana; cursor:text"

    })[0].focus();

    $("#txt-editor-2").cleditor({
        controls: // controls to add to the toolbar
            "bold italic underline  bullets link unlink",
    })[0].focus();

    $('.form-add__inp-block--editor').on('click', ' iframe', function () {
        return false

    })


});

$(document).on('click', '.close-modal, .filter-pp__btn', function () {
    $.magnificPopup.close();
});

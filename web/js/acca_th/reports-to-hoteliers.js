$(document).ready(function () {
    $('#log').click(function () {
        line($(this));
        _hashState('#log');
        $('#logPanel').show();
        $('#planPanel').hide();
        $('#addPanel').hide();
        $('#chartPanel').hide();
        $('#editPanel').hide();

    });
    $('#plan').click(function () {
        line($(this));
        _hashState('#plan');
        $('#logPanel').hide();
        $('#planPanel').show();
        $('#addPanel').hide();
        $('#chartPanel').hide();
        $('#editPanel').hide();
    });
    $('#add').click(function () {
        line($(this));
        _hashState('#add');
        $('#logPanel').hide();
        $('#planPanel').hide();
        $('#addPanel').show();
        $('#chartPanel').hide();
        $('#editPanel').hide();
    });
    $('#chart').click(function () {
        line($(this));
        _hashState('#chart');
        $('#logPanel').hide();
        $('#planPanel').hide();
        $('#addPanel').hide();
        $('#chartPanel').show();
        $('#editPanel').hide();
    });

    $('#edit').click(function () {
        line($(this));
        _hashState('#chart');
        $('#logPanel').hide();
        $('#planPanel').hide();
        $('#addPanel').hide();
        $('#chartPanel').hide();
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

    // открытие taba Редактирование отчета
    var tabHide = $(' #edit');

    $('.name-reports a').on("click", function () {
        $(tabHide).show()
            .click();
    });

    $('#log ')
        .on("click", function () {
            $(tabHide).hide()
        });
    // end_открытие taba Редактирование отчета


    $('.send-report').on('click', function () {
        $('.screenup-send-container').show();
    });

    $('.filter-pp__close').on('click', function () {
        $('.screenup-send-container').hide();
    });


    $('.contact-list__tbl').change(function () {
        if ($('input[name=write]').is(":checked")) {
            $('.contact-list__btn-more').addClass('active');
        } else $('.contact-list__btn-more').removeClass('active');
    });


    $('.anchor-link').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 300);
    });



    $('.name-reports-cell a').hover(function () {
            $('.name-reports__tooltip').show();
        },
        function () {
            $('.name-reports__tooltip').show()
        }
    );


    $('.name-reports__tooltip__close').on('click', function () {
        $(this).closest('.name-reports__tooltip').hide();

    });
});


jQuery(document).ready(function($) {
    $(function () {
        $('.reports-to-hoteliers-pp').magnificPopup({
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
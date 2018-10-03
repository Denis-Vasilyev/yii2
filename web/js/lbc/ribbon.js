$(function () {
    $('#ribbon').click(function () {
        line($(this));
        _hashState('#ribbon');
        $('#ribbonPanel').show();
        $('#contactsPanel').hide();
        $('#send-msgPanel').hide();
    });
    $('#contacts').click(function () {
        line($(this));
        _hashState('#contacts');
        $('#ribbonPanel').hide();
        $('#contactsPanel').show();
        $('#send-msgPanel').hide();
    });
    $('#send-msg').click(function () {
        line($(this));
        _hashState('#send-msg');
        $('#ribbonPanel').hide();
        $('#contactsPanel').hide();
        $('#send-msgPanel').show();

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

    $('.tape__date').hover(
        function () {
            $(this).find('.tape__date-del').show();
        },
        function () {
            $(this).find('.tape__date-del').hide();
        }
    );

    $('input[name="type-send"]').on('change', function () {
        if ($('#type-send0').prop('checked')) {
            $('.modal .type-send1-js').hide();
            $('.modal .type-send2-js').hide();
            $('.modal .type-send3-js').hide();
            $('.modal .datepicker-here').datepicker({position: "bottom right"});
        }
        else if ($('#type-send1').prop('checked')) {
            $('.modal .type-send1-js').show();
            $('.modal .type-send2-js').hide();
            $('.modal .type-send3-js').hide();

            $('.modal .datepicker-here').datepicker({position: "top left"});

        } else if ($('#type-send2').prop('checked')) {
            $('.modal .type-send1-js').hide();
            $('.modal .type-send2-js').show();
            $('.modal .type-send3-js').hide();
            $('.modal .datepicker-here').datepicker({position: "top left"});
        } else if ($('#type-send3').prop('checked')) {
            $('.modal .type-send1-js').hide();
            $('.modal .type-send2-js').hide();
            $('.modal .type-send3-js').show();
            $('.modal .datepicker-here').datepicker({position: "top left"});
        }
    });
    $('input[name="filter"]').on('change', function () {
        if ($('#filter').prop('checked')) {
            $(this).closest('.filter-small').find('.rbt-block').show()
        }
        else {
            $(this).closest('.filter-small').find('.rbt-block').hide()
        }
        if ($('#edit').prop('checked')) {
            $(this).closest('.panel').find('.tape-edit__tbl').show();
            $(this).closest('.panel').find('.tape-long__tbl ').hide();
            $(this).closest('.panel').find('.tape-short__tbl ').hide()
        }
        else {
            $(this).closest('.panel').find('.tape-edit__tbl').hide();
            $(this).closest('.panel').find('.tape-long__tbl ').show();
            $(this).closest('.panel').find('.tape-edit__tbl').hide();
        }

    });


    $('.ribbon-tbl-short .ribbon-tbl-short__block:last-of-type').hover(function () {
            $(this).find('.ribbon-tbl-short__actions.ribbon-tbl-short__actions--js').addClass('d-ib');
            $(this).find('.ribbon-tbl-short__icon-r.js-hide').hide();
            $(this).find('.ribbon-tbl-short__count').hide();
        },
        function () {
            $(this).find('.ribbon-tbl-short__actions.ribbon-tbl-short__actions--js').removeClass('d-ib');
            $(this).find('.ribbon-tbl-short__icon-r.js-hide').show();
            $(this).find('.ribbon-tbl-short__count').show();
        }
    );


    $('.dispatch-pp').magnificPopup({
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

    $('.public-msg-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });

    $('.create-group-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });

    $('.previewTape-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('.previewMail-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true,
    });
    $('.create-group-pp , .public-msg-pp, .dispatch-pp, .previewTape-pp').on('click', function () {
        $('html').css('margin-right', '17px');
    });

    $('.ribbon-tbl-short__icon-r').on('click', function () {
        $('#dispatch-pp').parent().height(561)
    });
    $('.createGroup__column--l').on('click', '.createGroup__item', function () {
        $(this).closest('.createGroup__flex').find('.createGroup__column--r .createGroup__list').append($(this));
        $(this).closest('.createGroup__flex').find('.createGroup__column--r .createGroup__item-del').addClass('block');
    });
    $('.createGroup__column--r').on('click', '.createGroup__item', function () {
        $(this).closest('.createGroup__flex').find('.createGroup__column--l .createGroup__list').append($(this));
        $(this).closest('.createGroup__flex').find('.createGroup__column--l .createGroup__item-del').removeClass('block');
    });

    $('.modal .clockpicker').clockpicker({
        autoclose: true,
        placement: 'top',
        align: 'left'
    });
    $('.modal .datepicker-here').datepicker({});

    $('.js-act-link').on('click', function () {
        $(this).next().toggle()
    });

//выбор адресата
    var $select = $('#destination').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-form"><div class="user-form__ava"><span>' +
                    '<img class="" width="35" height="35" src="' + data.imgPath + '" alt=""></span></div>' +
                    '<div class="user-block__info"><a  href="#" class="fz14">' + data.text + '</a><div>' + data.type + '</div></div> '
            }
        },
        options: [
            {
                value: "user1",
                text: "Иванов Иван",
                type: "Программист PHP",
                imgPath: "/images/bth-ava.png"
            },
        ],

        searchField: ["value"],
        placeholder: "Введите имя",
        onType: function (str) {
            //here load logic
            selectize.clearOptions();

            if (str !== "" && "Иванов".startsWith(str.toLowerCase())) {
                selectize.addOption({
                    value: "user1",
                    text: "Иванов Иван",
                    type: "Программист PHP",
                    imgPath: "/images/bth-ava.png"
                });
            }

            selectize.refreshOptions();
        },
        onDelete: function () {
            selectize.clearOptions();
        }
    });
    var selectize = $select[0].selectize;


});

$(document).on('click', '.close-modal, .filter-pp__btn', function () {
    $.magnificPopup.close();
});
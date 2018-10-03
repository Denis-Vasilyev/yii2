$(document).ready(function () {


    $('#not-close, #closed, #all-msg, #send, #trash ').on("click", function () {
        $(tabHide).hide();
        $(tabHideClosed).hide();
        $(tabTrush).hide()
    });


    $('#all-msg').click(function () {
        line($(this));
        _hashState('#all-msg');
        $('#all-msgPanel').show();
        $('#detail-all-msgPanel').hide();
        $('#not-closePanel').hide();
        $('#detail-not-closePanel').hide();
        $('#closedPanel').hide();
        $('#detail-closedPanel').hide();
        $('#sendPanel').hide();
        $('#trashPanel').hide();
        $('#detail-trashPanel').hide();
    });

    $('#detail-all-msg').click(function () {
        line($(this));
        _hashState('#detail-all-msg');
        $('#all-msgPanel').hide();
        $('#detail-all-msgPanel').show();
        $('#not-closePanel').hide();
        $('#detail-not-closePanel').hide();
        $('#closedPanel').hide();
        $('#detail-closedPanel').hide();
        $('#sendPanel').hide();
        $('#trashPanel').hide();
        $('#detail-trashPanel').hide();
    });
    $('#not-close').click(function () {
        line($(this));
        _hashState('#not-close');
        $('#all-msgPanel').hide();
        $('#detail-all-msgPanel').hide();
        $('#not-closePanel').show();
        $('#detail-not-closePanel').hide();
        $('#closedPanel').hide();
        $('#detail-closedPanel').hide();
        $('#sendPanel').hide();
        $('#trashPanel').hide();
        $('#detail-trashPanel').hide();
    });
    $('#detail-not-close').click(function () {
        line($(this));
        _hashState('#detail-not-close');
        $('#all-msgPanel').hide();
        $('#detail-all-msgPanel').hide();
        $('#not-closePanel').hide();
        $('#detail-not-closePanel').show();
        $('#closedPanel').hide();
        $('#detail-closedPanel').hide();
        $('#sendPanel').hide();
        $('#trashPanel').hide();
        $('#detail-trashPanel').hide();
    });
    $('#closed').click(function () {
        line($(this));
        _hashState('#closed');
        $('#all-msgPanel').hide();
        $('#detail-all-msgPanel').hide();
        $('#not-closePanel').hide();
        $('#detail-not-closePanel').hide();
        $('#closedPanel').show();
        $('#detail-closedPanel').hide();
        $('#sendPanel').hide();
        $('#trashPanel').hide();
        $('#detail-trashPanel').hide();
    });
    $('#detail-closed').click(function () {
        line($(this));
        _hashState('#byUsers');
        $('#all-msgPanel').hide();
        $('#detail-all-msgPanel').hide();
        $('#not-closePanel').hide();
        $('#detail-not-closePanel').hide();
        $('#closedPanel').hide();
        $('#detail-closedPanel').show();
        $('#sendPanel').hide();
        $('#trashPanel').hide();
        $('#detail-trashPanel').hide();
    });

    $('#trash').click(function () {
        line($(this));
        _hashState('#trash');
        $('#all-msgPanel').hide();
        $('#detail-all-msgPanel').hide();
        $('#not-closePanel').hide();
        $('#detail-not-closePanel').hide();
        $('#closedPanel').hide();
        $('#detail-closedPanel').hide();
        $('#sendPanel').hide();
        $('#trashPanel').show();
        $('#detail-trashPanel').hide();
    });
    $('#detail-trash').click(function () {
        line($(this));
        _hashState('#detail-trash');
        $('#all-msgPanel').hide();
        $('#detail-all-msgPanel').hide();
        $('#not-closePanel').hide();
        $('#detail-not-closePanel').hide();
        $('#closedPanel').hide();
        $('#detail-closedPanel').hide();
        $('#sendPanel').hide();
        $('#trashPanel').hide();
        $('#detail-trashPanel').show();
    });
    $('#send').click(function () {
        line($(this));
        _hashState('#send');
        $('#all-msgPanel').hide();
        $('#detail-all-msgPanel').hide();
        $('#not-closePanel').hide();
        $('#detail-not-closePanel').hide();
        $('#closedPanel').hide();
        $('#detail-closedPanel').hide();
        $('#sendPanel').show();
        $('#trashPanel').hide();
        $('#detail-trashPanel').hide();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.line ');
        $('.tab').removeClass('active');
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

    // открытие taba trush
    var tabTrush = $('#detail-trash');

    $('.trush-msg.tape-long__tbl .task__cell:first a, .trush-msg-short a').on("click", function () {
        var numMsg = $(this).text();
        $(tabTrush).show().text('Обращение ' + numMsg).click();

    });
    // end_открытие taba trush


    // открытие taba Подробности Всех сообщений
    var tabAll = $(' #detail-all-msg');

    $('.all-msg.tape-long__tbl .task__cell:first a, .all-msg-short a').on("click", function () {
        var numMsg = $(this).text();
        $(tabAll).show().text('Обращение ' + numMsg).click();

    });

    $('#not-close, #closed ')
        .on("click", function () {

            $(tabHide).hide()
        });
    // end_открытие taba Подробности Всех сообщений


    // открытие taba Подробности Не закрытых сообщений
    var tabHide = $(' #detail-not-close');

    $('.new-msg.tape-long__tbl .task__cell:first a, .new-msg-short a').on("click", function () {
        var numMsg = $(this).text();
        $(tabHide).show().text('Обращение ' + numMsg).click();

    });
    // end_открытие taba Подробности Не закрытых сообщений

    // открытие taba Подробности закрытых сообщений
    var tabHideClosed = $(' #detail-closed');

    $('.closed-big-table .task__cell:first a, .closed-short-table td:nth-child(1) a').on("click", function () {
        var numMsg = $(this).text();
        $(tabHideClosed).show().text('Обращение ' + numMsg).click();

    });
    // end_открытие taba Подробности закрытых сообщений


    /*Переключалка цветов фона Подробности обращение
     var colorArray = ['yellow-bg', 'gray-bg', 'green-bg', 'red-bg'];
     var indexCount = 0;
     $('.details--open .details__text-problem').on("click", function () {
     $(this).removeClass(colorArray[indexCount]);
     if (indexCount == 3) indexCount = -1;
     $(this).addClass(colorArray[++indexCount])
     });
     */


    $('.details__text-problem-time').hover(
        function () {
            $(this).find('.details__change-status').animate({width: "show"}, 700);
        },
        function () {
            $(this).find('.details__change-status').animate({width: "hide"}, 700);
        }
    );  //Закрыть обращение
    $('.details__initiator-list-party div').hover(
        function () {
            $(this).find('.details__initiator-list-party-delete').show()
        },
        function () {
            $(this).find('.details__initiator-list-party-delete').hide()
        }
    );


    //Открыть обращение
    $('.details.closed .task__cnt--big').hover(
        function () {
            $(this).closest('.details__text-problem').find('.details__change-status').fadeIn(300);
        },


        function () {
            $(this).closest('.details__text-problem').find('.details__change-status').fadeOut(300)
        }
    );


    //Добавить сотрудника
    $('.choice-coop__add').on('click', function () {
        $(this).after('<input type="text" class="type-input mt10" id="choice-coop" placeholder="Выбрать сотрудника">')
    });
    $('.editor__img__add').on('click', function () {
        $(this).closest('.editor__inset.add-photo').append('<div class="editor__block-photo"><label class="editor__link"><input type="file" class="hidden"> <span>Добавить картинку </span></label><i style="display: none" class="editor__block-cross"></i></div>')
    });
    $('.details__text-problem-edit').on('click', function () {
        $(this).closest('.details__comments').find('.task__user-info-comments-text p').hide();
        $(this).closest('.details__comments').find('.details__comments-liks').hide();
        $(this).closest('.details__comments').find('.details__edit').show();
        return false
    });
    $('.details__edit-file div > i').on('click', function () {
        $(this).closest('div').hide()
    });


    //Добавить сотрудника в деталяю
    $('.details__initiator-list-party--add').on("click", function () {
        $(this).closest('.details__initiator').find('.details__initiator-list-party--add__select-wrap, .selectize-control').fadeIn(200);
        $(this).hide().find('.empty').hide('slow');
        $(this).closest('.details').find('.details__initiator-list-party').hide();
    });


    $(".selectize-close").on("click", function () {
        $('.details__initiator-list-party--add__select-wrap').hide();
        $('.details__initiator-list-party--add').show().find('.empty').show();
        $(this).closest('.details').find('.details__initiator-list-party').show();

    });
    /*когда нажимаем на крестик удалить селект*/


    $(".choice-coop input").on("focus", function () {
        $('.choice-coop__select').show();
    });
    $(".choice-coop input").on("blur", function () {
        $('.choice-coop__select').hide();
    });


    $('.details__comments-data').hover(
        function () {
            $(this).find('.hint').show();
            $(this).find('.details__text-problem-edit').show()
        },
        function () {
            $(this).find('.hint').hide();
            $(this).find('.details__text-problem-edit').hide()
        }
    );

    $('.details__comments-data').hover(
        function () {
            $(this).children('span').addClass('data-active');
            $(this).find('.details__text-problem-edit').show()
        },
        function () {
            $(this).children('span').removeClass('data-active');
            $(this).find('.details__text-problem-edit').hide()
        }
    );
    $('.filter-pp__section #data').datepicker({
        autoClose: true
    });

    $(".details__comments textarea").on("click", function () {
        $(this).closest('form').find('button').show();
        $(this).addClass('active');
    });
    var $select = $('#id-collaborator').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-form"><div class="user-form__ava"><span>' +
                    '<img width="40" height="40" src="' + data.imgPath + '" alt=""></span></div>' +
                    '<div class="user-form__info"><span class="user-form__info-link">' + data.userName + '</span>' +
                    '<p class="user-form__info-type">' + data.userType + '</p> '
            }
        },
        searchField: ["value"],
        placeholder: "Введите имя",
        onType: function (str) {
            //here load logic
            selectize.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                selectize.addOption({
                    value: "1234",
                    text: "Okhapkina Irina",
                    imgPath: "/images/ava2.png",
                    userName: "Okhapkina Irina",
                    userType: "Менеджер"
                });
            }

            selectize.refreshOptions();
        },

        onDelete: function () {
            selectize.clearOptions();
        },
        onFocus: function () {
            $('.selectize-input').focus().addClass('selectize-input-focus');
        },
        onBlur: function () {
            $('.selectize-input').focus().removeClass('selectize-input-focus');
        }
    });

    var selectize = $select[0].selectize;


    $('.details__text-problem-time-data').hover(
        function () {
            $(this).find('.details__text-problem-action').show();
        },
        function () {
            $(this).find('.details__text-problem-action').hide();
        }
    );

    $('.details__initiator-list-party > div ').hover(
        function () {
            $(this).find('.hint').show();
        },
        function () {
            $(this).find('.hint').hide();
        }
    );
    $('.task__plase .relative').hover(
        function () {
            $(this).find('.hint').show();
        },
        function () {
            $(this).find('.hint').hide();
        }
    );


    $('.filter-pp__section .box-radio input').on('change', function () {

        if ($('.filter-pp__section .box-radio input:checked').length) {
            $(this).closest('.filter-pp__section').find('.add-comment-block').show()

        }
    });


    $(".details__comments--add textarea").on("click", function () {
        $(this).closest('form').find('.add-comment-block').show();
        $(this).addClass('active');
    });


    $('input').on('click', function () {
        if ($('#char-neutral').prop('checked')) {
            $(this).closest('.task__user-info-comments-text').css('background-color', '#EEEEEE');
        }
        if ($('#char-satisfied').prop('checked')) {
            $(this).closest('.task__user-info-comments-text').css('background-color', '#D8EAD2');
        }
        if ($('#char-annoyed').prop('checked')) {
            $(this).closest('.task__user-info-comments-text').css('background-color', ' #F4CBCB');
        }

        if ($('#client-reply').prop('checked')) {
            $(this).closest('.task__user-info-comments-text').css('background-color', ' #FFF2CD');
        }
    });
    // big-filter
    $('select[name="filter-sort"]').SumoSelect();
    $('select[name="filter"]').SumoSelect();
    $('select[name="project"]').SumoSelect();
    $('select[name="group"]').SumoSelect();
    $('.js-filter-open').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.filter-small').hide();
        $(this).closest('.section').find('.filter-big').show();
        $(this).closest('.panel').find('.new-msg-short.tape-short__tbl').hide();
        $(this).closest('.panel').find('.filter__tag').hide();
    });
    $('.js-filter-big-close').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.panel').find('.filter-small').show();
        $(this).closest('.section').find('.filter-big').hide();
        $(this).closest('.panel').find('.new-msg-short.tape-short__tbl').show();
        $(this).closest('.panel').find('.filter__tag').show();
    });
    $('input[name="typeMsg"]').on('change', function () {
        if ($('#typeMsg2').prop('checked')) {
            $(this).closest('.filter-big__section').find('.bth__row--comnt').show();
        } else {
            $(this).closest('.filter-big__section').find('.bth__row--comnt').hide();
        }
        if ($('#typeMsg3').prop('checked')) {
            $(this).closest('.filter-big__section').find('.bth__row--client').show();
        } else {
            $(this).closest('.filter-big__section').find('.bth__row--client').hide();
        }
    });
    $('.js-open-more').on('click', function () {
        $(this).prev().toggleClass('active');
    });
    $('.editor__block-photo span').on('click', function () {
        $(this).closest('div').find('.editor__block-cross').show()
    });
    $('.details__tech-info__ttl.open-js').on('click', function () {
        $(this).closest('.details__tech-block').find('p').toggle()
    });

    $('.classification-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('.close-msg-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });


    $('.classification-pp').on('click', function () {
        $('html').css('margin-right', '17px');
        $('#classification-pp').parent().height(561);
        var tourindexOptions = [
            {value: 1, text: 'Проблема авторизации (проблема не определена)'},
            {value: 2, text: 'Проблема авторизации (забыли пароль)'},
            {value: 3, text: 'Проблема авторизации (неправильный ввод пароля)'},
            {
                value: 4,
                text: 'Проблема авторизации (блокировка контента в браузере), проблема авторизации (блокировка по IP адресу)'
            },
            {value: 5, text: 'Сотрудничество'},
            {value: 6, text: 'Заблокировать доступ в ТИ'},
            {value: 7, text: 'Проблема поиска туров (проблема не определена)'},
            {value: 8, text: 'Проблема поиска туров (отсутствие оператора)'},
            {value: 9, text: 'Проблема поиска туров (неверная цена)'}
        ];

        var tourclientOptions = [
            {value: 1, text: 'Не работает модуль'},
            {value: 2, text: 'Неверная цена'},
            {value: 3, text: 'Отсутствие оператора'}

        ];
        var bookingOptions = [
            {value: 1, text: 'Проблема авторизации (проблема не определена)'},
            {value: 2, text: 'Проблема пуш-уведомлений'},
            {value: 3, text: 'Неверный CRM'},
            {value: 4, text: 'Проблема платежа'},
            {value: 5, text: 'Рекламация'}

        ];
        var $typeErrorSelect = $('#type-error').selectize({
            placeholder: "Выберите тип ошибки"
        });

        var typeErrorSelect = $typeErrorSelect[0].selectize;

        $('#project').selectize({
            placeholder: "Выберите проект"
        });

        $('#project').on('change', function () {
            var val = $(this).val();
            typeErrorSelect.clearOptions();
            if (val === ('tourindex')) {
                typeErrorSelect.addOption(tourindexOptions);
            } else if (val === ('tourclient')) {
                typeErrorSelect.addOption(tourclientOptions);
            } else if (val === ('booking')) {
                typeErrorSelect.addOption(bookingOptions);
            }
        });
    });


});

document.getElementById('links').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
};

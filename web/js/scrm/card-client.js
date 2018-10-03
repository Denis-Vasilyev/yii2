$(document).ready(function () {

    $('#card').click(function () {
        line($(this));
        _hashState('#card');
        $('#cardPanel').show();
        $('#personsPanel').hide();
        $('#requisitesPanel').hide();
        $('#editRequisitesPanel').hide();
        $('#office-communicationsPanel').hide();
        $('#persons2Panel').hide();
        $('#filesPanel').hide();
    });
    $('#persons').click(function () {
        line($(this));
        _hashState('#persons');
        $('#cardPanel').hide();
        $('#personsPanel').show();
        $('#requisitesPanel').hide();
        $('#editRequisitesPanel').hide();
        $('#persons2Panel').hide();
        $('#filesPanel').hide();
    });

    $('#requisites').click(function () {
        line($(this));
        _hashState('#requisites');
        $('#cardPanel').hide();
        $('#personsPanel').hide();
        $('#requisitesPanel').show();
        $('#editRequisitesPanel').hide();
        $('#office-communicationsPanel').hide();
        $('#persons2Panel').hide();
        $('#filesPanel').hide();
    });
    $('#editRequisites').click(function () {
        line($(this));
        _hashState('#editRequisites');
        $('#cardPanel').hide();
        $('#personsPanel').hide();
        $('#requisitesPanel').hide();
        $('#editRequisitesPanel').show();
        $('#office-communicationsPanel').hide();
        $('#persons2Panel').hide();
        $('#filesPanel').hide();
    });
    $('#editPerson').click(function () {
        line($(this));
        _hashState('#editPerson');
        $('#cardPanel').hide();
        $('#personsPanel').hide();
        $('#editPersonPanel').show();
        $('#requisitesPanel').hide();
        $('#editRequisitesPanel').hide();
        $('#office-communicationsPanel').hide();
        $('#persons2Panel').hide();
        $('#filesPanel').hide();
    });
    $('#office-communications').click(function () {
        line($(this));
        _hashState('#office-communications');
        $('#cardPanel').hide();
        $('#personsPanel').hide();
        $('#editPersonPanel').hide();
        $('#requisitesPanel').hide();
        $('#editRequisitesPanel').hide();
        $('#office-communicationsPanel').show();
        $('#persons2Panel').hide();
        $('#filesPanel').hide();
    });
    $('#persons2').click(function () {
        line($(this));
        _hashState('#persons2');
        $('#cardPanel').hide();
        $('#personsPanel').hide();
        $('#editPersonPanel').hide();
        $('#requisitesPanel').hide();
        $('#editRequisitesPanel').hide();
        $('#office-communicationsPanel').hide();
        $('#persons2Panel').show();
        $('#filesPanel').hide();
    });
    $('#files').click(function () {
        line($(this));
        _hashState('#files');
        $('#cardPanel').hide();
        $('#personsPanel').hide();
        $('#editPersonPanel').hide();
        $('#requisitesPanel').hide();
        $('#editRequisitesPanel').hide();
        $('#office-communicationsPanel').hide();
        $('#persons2Panel').hide();
        $('#filesPanel').show();
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


    //открытие taba Редактирование персоны
    var tabHideEdit = $('#editPerson');

    $('.persons td:nth-child(2) a').on("click", function () {
        tabHideEdit.show()
            .click();
        selectizeEdit.addOption({
            value: "12345",
            text: "Пупкин Александр",
            imgPath: "/images/ava38.png",
            userName: "Пупкин Александр",
            userType: "Отельер",
            userCity: "Киров",
            email: "trewel.servis@yandex.ru"
        });
        selectizeEdit.addItem(12345);
        return false;
    });

    $('#persons, #card, #requisites, #garbage, #add').on("click", function () {
        $(tabHideEdit).hide();
        $('#editPersonPanel').hide();
    });
    // end_открытие taba  Редактирование персоны

    //открытие taba Редактирование реквизитов

    var tabHideEditRequisites = $(' #editRequisites');


    $('.requisites .link-blue').on("click", function () {
        tabHideEditRequisites.show()
            .click();
    });

    $('#persons, #card, #requisites,  #garbage, #add').on("click", function () {
        $(tabHideEditRequisites).hide();
    });

    //end_открытие taba Редактирование реквизитов


    // Подсказка при навед. на имя изменившего
    $('.client-card tr td').hover(function () {
        $(this).find('.name-tooltip').toggle();
    });
    // end_Подсказка при навед. на имя изменившего


    //selectize Добавить персону Введите TPass ID или @
    var $selectAdd = $('#id-client').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="selectize__user-form"><div class="selectize__user-form__ava"><span>' +
                    '<img width="30" height="30" src="' + data.imgPath + '" alt=""></span></div>' +
                    '<div class="selectize__user-form__info"><span class="selectize__user-form__info-link">' + data.userName + '</span>' +
                    '<p class="selectize__user-form__info-type">' + data.userType + '</p> '
            }
        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeAdd.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                selectizeAdd.addOption({
                    value: "1234",
                    text: "Okhapkina Irina",
                    imgPath: "/images/ava41.jpg",
                    userName: "Okhapkina Irina",
                    userType: "Отельер",
                    userCity: "Киров",
                    email: "trewel.servis@yandex.ru"
                });
            }

            selectizeAdd.refreshOptions();
        },

        onChange: function (val) {
            var data = this.options[val];
            if (!data) return;
            var block = '<div class="selectize-dropdown__user-block"><div class="selectize-dropdown__user-ava"><span>' +
                '<img width="60" height="60" src="' + data.imgPath + '" alt=""></span></div>' +
                '<div class="selectize-dropdown__user-info"><a href="#" class="bold">' + data.userName + '</a>' +
                '<p class="selectize-dropdown__user-info-place">' + data.userType + ' , ' + data.userCity + '</p> ' +
                '<p class="selectize-dropdown__user-info-contact">' + data.email + '</p></div></div>';
            $('.id-client.dropdowm-block').show().html(block);
        },
        onDelete: function () {
            selectizeAdd.clearOptions();
        },
        onFocus: function () {
            $('.selectize-input').focus().addClass('selectize-input-focus');
        },
        onBlur: function () {
            $('.selectize-input').focus().removeClass('selectize-input-focus');
        }
    });
    var selectizeAdd = $selectAdd [0].selectize;
    //end__selectize Добавить персону Введите TPass ID или @


    //end__selectize Редактировать персону Введите TPass ID или @
    var $selectEdit = $('#edit-tpass').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="selectize__user-form"><div class="selectize__user-form__ava"><span>' +
                    '<img width="30" height="30" src="' + data.imgPath + '" alt=""></span></div>' +
                    '<div class="selectize__user-form__info"><span class="selectize__user-form__info-link">' + data.userName + '</span>' +
                    '<p class="selectize__user-form__info-type">' + data.userType + '</p> '
            }
        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeEdit.clearOptions();

            if (str !== "" && "12345".startsWith(str.toLowerCase())) {
                selectizeEdit.addOption({
                    value: "12345",
                    text: "Пупкин Александр",
                    imgPath: "/images/ava38.png",
                    userName: "Пупкин Александр",
                    userType: "Отельер",
                    userCity: "Киров",
                    email: "trewel.servis@yandex.ru"
                });
            }

            selectizeEdit.refreshOptions();
        },

        onChange: function (val) {
            var data = this.options[val];
            if (!data) return;

            var block = '<div class="selectize-dropdown__user-block"><div class="selectize-dropdown__user-ava"><span>' +
                '<img width="60" height="60" src="' + data.imgPath + '" alt=""></span></div>' +
                '<div class="selectize-dropdown__user-info"><a href="#" class="bold">' + data.userName + '</a>' +
                '<p class="selectize-dropdown__user-info-place">' + data.userType + ' , ' + data.userCity + '</p> ' +
                '<p class="selectize-dropdown__user-info-contact">' + data.email + '</p></div></div>';
            $('.edit-tpass.dropdowm-block').show().html(block);
        },
        onDelete: function () {
            selectizeEdit.clearOptions();
        },
        onFocus: function () {
            $('.selectize-input').focus().addClass('selectize-input-focus');
        },
        onBlur: function () {
            $('.selectize-input').focus().removeClass('selectize-input-focus');
        }
    });
    var selectizeEdit = $selectEdit[0].selectize;
    window.st = selectizeEdit;
    //end__selectize Редактировать персону Введите TPass ID или @


    $('.communications-tbl').hover(function () {
            $(this).find('.filter-pp__btn--grey').show()
        },
        function () {

            $(this).find('.filter-pp__btn--grey').hide()
        }
    );
    $('.communications-tbl td:nth-child(2)').hover(function () {
            $(this).find('.groups-tbl__data ').hide();
            $(this).find('.communications-tbl__data--abs').show()
        },
        function () {
            $(this).find('.groups-tbl__data ').show();
            $(this).find('.communications-tbl__data--abs').hide()
        }
    );

    $('.js-act-search').on('click', function () {
        $(this).closest('.section--grey ').find('.filter__inp-block').show();
        $(this).closest('.section--grey ').find('.filter__icon-abs').toggle()
    });
    $('#publicContact').on('click', function () {
        $('.add-agent-form--publicContact').show();
        $('.client-card').hide()
    });

    $('.js-show-bth').on('click', function () {
        $(this).closest('.section--grey ').find('.js-hidden').show();
        $('.client-card').hide()
    });


    $('input[name="view"]').on('change', function () {
        if ($('#publicContact').prop('checked')) {
            $('.add-agent-form--publicContact').show();
            $('.client-card').hide()
        } else {
            $('.add-agent-form--publicContact').hide();
            $('.client-card').show()
        }
        if ($('#f-add').prop('checked') || $('.js-act-form').prop('checked')) {
            $('.add-person, .js-show-form').show();
        } else {
            $('.add-person, .js-show-form').hide();
        }
    });

    $('input[name="type-req"]').on('change', function () {
        if ($('#type-req1').prop('checked')) {
            $('.grey-form__field--local').show();
            $('.grey-form__field--foreign').hide()
        } else {
            $('.grey-form__field--local').hide();
            $('.grey-form__field--foreign').show()
        }
        if ($('#f-add').prop('checked') || $('.js-act-form').prop('checked')) {
            $('.add-person, .js-show-form').show();
        } else {
            $('.add-person, .js-show-form').hide();
        }
    });

    var plusClickCount = 0;

    $('.chart-job .fa-plus').on('click', function () {
        plusClickCount++;
        if (plusClickCount == 1) {
            $('.monday').text('Понедельник - четверг');
            $('.chart-job').find('.hidden.friday').removeClass('hidden').addClass('block');
        }

        if (plusClickCount == 2) {
            $('.monday').text('Понедельник');
            $('.chart-job').find('.hidden').removeClass('hidden').addClass('block');
        }

    });

    $('.type-input--txta').on('click', function () {
        $(this).addClass('active')
    });

    /*selectize Выбора города*/
    var $selectCity = $('#localRequisites-4').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-block__info block fz14">' + data.text + '</div>'
            },

            item: function (data, escape) {
                return '<p class="user-form__info-type">' + data.text + '</p> '
            }

        },
        options: [
            {
                value: "москва",
                text: "Москва"

            }, {
                value: "челябинск",
                text: "Челябинск"

            }
        ],
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeCity.clearOptions();

            if (str !== "" && "москва".startsWith(str.toLowerCase())) {
                selectizeCity.addOption({
                    value: "москва",
                    text: "Москва"

                });
            }
            selectizeCity.refreshOptions();
        },

        onDelete: function () {
            selectizeCity.clearOptions();
        },

        /* показать поле с выбором метро*/
        onChange: function (val) {
            var data = this.options[val];
            if (data.value === 'москва') {
                $('.js-hidden').show()
            } else {
                $('.js-hidden').hide()
            }
        }

    });

    var selectizeCity = $selectCity[0].selectize;
    /*end_selectize Выбора города*/
});

$(document).ready(function () {
    $('.person-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
});


$(document).on('click', '.close-modal', function () {
    $.magnificPopup.close();
});

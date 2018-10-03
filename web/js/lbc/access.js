$(document).ready(function () {
    $('#accesses').click(function () {
        line($(this));
        _hashState('#accesses');
        $('#accessesPanel').show();
        $('#edit-accessPanel').hide();
        $('#log-changesPanel').hide();
        $('#addPanel').hide();
    });
    $('#edit-access').click(function () {
        line($(this));
        _hashState('#edit-access');
        $('#accessesPanel').hide();
        $('#edit-accessPanel').show();
        $('#log-changesPanel').hide();
        $('#addPanel').hide();
    });
    $('#log-changes').click(function () {
        line($(this));
        _hashState('#edit-access');
        $('#accessesPanel').hide();
        $('#edit-accessPanel').hide();
        $('#log-changesPanel').show();
        $('#addPanel').hide();
    });
    $('#add').click(function () {
        line($(this));
        _hashState('#add');
        $('#accessesPanel').hide();
        $('#edit-accessPanel').hide();
        $('#log-changesPanel').hide();
        $('#addPanel').show();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.access-line ');
        $('.access-tab').removeClass('active');
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


    var $select = $('#id-associate').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-form"><div class="user-form__ava"><span>' +
                    '<img width="40" height="40" src="' + data.imgPath + '" alt=""></span></div>' +
                    '<div class="user-form__info"><span class="user-form__info-link">' + data.userName + '</span>' +
                    '<div class="user-form__info-no-acces">' + (data.userHasAcces ? "Есть доступ" : "Добавить доступ") + '</div> </div>' +
                    '<p class="user-form__info-type">' + '</p></div>'
            }
        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectize.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                selectize.addOption({
                    value: "1234",
                    text: "Okhapkina Irina",
                    imgPath: "/images/bth-ava-25.png",
                    userHasAcces: false,
                    userName: "Okhapkina Irina"
                });
            }

            if (str !== "" && "123".startsWith(str.toLowerCase())) {
                selectize.addOption({
                    value: "123",
                    text: "Иванов Иван",
                    imgPath: "/images/bth-ava.png",
                    userHasAcces: true,
                    userName: "Иванов Иван"
                });
            }

            selectize.refreshOptions();
        },

        onDelete: function () {
            selectize.clearOptions();
        },

        onChange: function (val) {
            var data = this.options[val];
            if (!data) return;
            var block = '<div class="selectize-dropdown__user-block"><div class="selectize-dropdown__user-ava"><span>' +
                '<img width="60" height="60" src="' + data.imgPath + '" alt=""></span></div>' +
                '<div class="selectize-dropdown__user-info"><a href="#" class="bold">' + data.userName + '</a>' +
                '<p class="selectize-dropdown__user-info-place">' + (data.userHasAcces ? "Есть доступ" : "Добавить доступ")  + '</p></div></div>';
            $('.id-associate').show().html(block);
            var userAccess = this.options[val];
            if (userAccess.userHasAcces) {
                $('.close-access').show()
            } else {
                $('.close-access').hide()
            }
        }

    });

    var selectize = $select[0].selectize;
    $('#id-associate').on("change", function () {
        $('.show-filed').show()
    });


    $('.add-agent-form .box-radio input').on('click', function () {
        if (($('#open-data').prop('checked')) || $('#change-term').prop('checked')) {
            $(this).closest('form').find('.term').show();
        } else {
            $(this).closest('form').find('.term').hide();
        }
    });
    var tabHide = $('#edit-access');

    $('#accesses, #log-changes, #add ')
        .on("click", function () {

            $(tabHide).hide()
        });


    $('.log-access td:nth-child(2) a').on("click", function () {
        $(tabHide).show()
            .click();

        selectizeEdit.addOption({
            value: "12345",
            text: "Дегелев Артур",
            imgPath: "/images/bth-ava-25.png",
            userName: " Дегелев Артур",
            userType: "Отельер",
            userCity: "Киров",
            email: "trewel.servis@yandex.ru"
        });
        selectizeEdit.addItem(12345);


        return false
    });


    //селект в табе редактировать доступ
    var $selectEdit = $('#id-associate-edit').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-form"><div class="user-form__ava"><span>' +
                    '<img width="35" height="35" src="' + data.imgPath + '" alt=""></span></div>' +
                    '<div class="user-form__info"><span class="user-form__info-link">' + data.userName + '</span>' +
                    '<p class="user-form__info-type">' + data.userType + '</p> '
            }
        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeEdit.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                selectizeEdit.addOption({
                    value: "1234",
                    text: "Okhapkina Irina",
                    imgPath: "/images/ava41.jpg",
                    userName: "Okhapkina Irina",
                    userType: "Менеджер"
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
                '<p class="selectize-dropdown__user-info-contact">' + data.userType + '</p></div></div>';
            $('.id-associate-edit').show().html(block);
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

});
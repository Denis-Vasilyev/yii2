$(function () {
    $('#notifications-types').click(function () {
        line($(this));
        _hashState('#notifications-types');
        $('#notifications-typesPanel').show();
        $('#addPanel').hide();

    });
    $('#add').click(function () {
        line($(this));
        _hashState('#add');
        $('#notifications-typesPanel').hide();
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
    $('.add-responsible-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });

    $('#show-empty').on('change', function () {
        if ($(this).prop('checked')) {
            $('.groups-tbl--empty').show();
        }
        else {
            $('.groups-tbl--empty').hide();
        }
        console.log(12)

    });



    var $selectTypes = $('#type-selectize').selectize({
        options: [
            {
                value: "12",
                text: "Ошибка в результатах поиска",
                msgType: "Ошибка в результатах поиска "
            },
            {
                value: "1234",
                text: "Заявка на прокачку профиля",
                msgType: "Заявка на прокачку профиля"
            },
            {
                value: "12345",
                text: "Заявка на активацию комментария к отзыву от отельера",
                msgType: "Заявка на активацию комментария к отзыву от отельера"
            }
        ]
        ,

        render: {
            option: function (data, escape) {
                return '<div class="user-form">' + data.msgType + '</div> '
            }
        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeTypes.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                selectizeTypes.addOption({
                    value: "1234",
                    text: "Ошибка в результатах поиска",
                    msgType: "Ошибка в результатах поиска"
                });
            }

            selectizeTypes.refreshOptions();
        },

        onDelete: function () {
            selectizeTypes.clearOptions();
        },
        onFocus: function () {
            $('.selectize-input').focus().addClass('selectize-input-focus');
        },
        onBlur: function () {
            $('.selectize-input').focus().removeClass('selectize-input-focus');
        }
    });

    var selectizeTypes = $selectTypes[0].selectize;




    var $selectProject = $('#project-selectize').selectize({
        options: [
            {
                value: "12",
                text: "tophotels",
                msgType: "tophotels "
            },
            {
                value: "1234",
                text: "tophotels.pro",
                msgType: "tophotels.pro"
            },
            {
                value: "12345",
                text: "tourindex.ru",
                msgType: "tourindex.ru"
            }
        ]
        ,


        render: {
            option: function (data, escape) {
                return '<div class="user-form">' + data.msgType + '</div> '
            }
        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeProject.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                selectizeProject.addOption({
                    value: "1234",
                    text: "tophotels",
                    msgType: "tophotels"
                });
            }

            selectizeProject.refreshOptions();
        },

        onDelete: function () {
            selectizeProject.clearOptions();
        },
        onFocus: function () {
            $('.selectize-input').focus().addClass('selectize-input-focus');
        },
        onBlur: function () {
            $('.selectize-input').focus().removeClass('selectize-input-focus');
        }
    });

    var selectizeProject = $selectProject[0].selectize;









    var hotelsCount = 0;

    $('.form-add__plus').on('click', function () {
        hotelsCount++;
        var id = "collaborators-selectize-" + hotelsCount;
        $(".form-add .form-add__fieldset > div:last").after('<div style="margin-left: 4px"><label for="' + id + '"></label><select  id="' + id + '" ></select></div>')
        createSelect("#" + id);
    });


    //selectize//

    function createSelect(selector, options) {
        var $el = $(selector);
        var defOptions = {
            options: [
                {
                    value: "1234",
                    text: "Кирилова Яна",
                    imgPath: "/images/bth-ava.png",
                    userName: "Okhapkina Irina",
                    userType: "PHP программист"
                },
                {
                    value: "12",
                    text: "Okhapkina Irina",
                    imgPath: "/images/bth-ava.png",
                    userName: "Okhapkina Irina",
                    userType: "PHP программист"
                },
                {
                    value: "12",
                    text: "Дмитриева Алина",
                    imgPath: "/images/bth-ava.png",
                    userName: "Okhapkina Irina",
                    userType: "PHP программист"
                }
            ]
            ,
            render: {
                option: function (data, escape) {
                    return '<div class="user-form"><div class="user-form__ava"><span>' +
                        '<img width="40" height="40" src="' + data.imgPath + '" alt=""></span></div>' +
                        '<div class="user-form__info"><a href="#" class="fz14">' + data.userName + '</a>' +
                        '<p class="user-form__info-type w-auto fz13 mt5">' + data.userType + '</p> '
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
                        imgPath: "/images/bth-ava.png",
                        userName: "Okhapkina Irina",
                        userType: "PHP программист"
                    });
                }


                selectize.refreshOptions();
            },


            onDelete: function () {
                selectize.clearOptions();
            }

        };

        if (options) defOptions = $.extend(defOptions, options);

        var $select = $(selector).selectize(defOptions);
        var selectize = $select[0].selectize;
        return selectize;
    }


    var firstSelectize = createSelect("#collaborators-selectize");
    //end_selectize//





});

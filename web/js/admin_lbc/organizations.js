jQuery(document).ready(function ($) {

    $('#organizations').click(function () {
        line($(this));
        _hashState('#organizations');
        $('#organizationsPanel').show();
        $('#addPanel').hide();
        $('#editPanel').hide();

    });
    $('#add').click(function () {
        line($(this));
        _hashState('#add');
        $('#organizationsPanel').hide();
        $('#addPanel').show();
        $('#editPanel').hide();
    });
    $('#edit').click(function () {
        line($(this));
        _hashState('#edit');
        $('#organizationsPanel').hide();
        $('#addPanel').hide();
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

    $('.org-tbl td.relative').hover(
        function () {
            $(this).find('.tbl-actions').show();
            $(this).find('span').hide();
        },
        function () {
            $(this).find('.tbl-actions').hide();
            $(this).find('span').show();
        }
    );
    var tabEdit = $('#edit');
    $('.org-tbl .tbl-actions div').on('click', function () {
        $(tabEdit).show().click()
    });
    $('.form-add textarea').on('click', function () {
        $(this).addClass('active')
    });
    $('#organizations').on('click', function () {
        $(tabEdit).hide()
    });





    /*selectize Выбора страны*/
    var $selectCountry = $('#country').selectize({
        placeholder: 'Введите страну ',
        render: {
            option: function (data, escape) {
                return '<div class="user-block__info"><span class="bold-link">' + data.text + '</span>' +
                    '<p class="user-block__info-place"></div>'
            },

            item: function (data, escape) {
                return '<p class="user-form__info-type">' + data.text + '</p> '
            }

        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeCountry.clearOptions();

            if (str !== "" && "россия".startsWith(str.toLowerCase())) {
                selectizeCountry.addOption({
                    value: "россия",
                    text: "Россия"

                });
            } else if (str !== "" && "египет".startsWith(str.toLowerCase())) {
                selectizeCountry.addOption({
                    value: "египет",
                    text: "Египет"

                });
            } else if (str !== "" && "украина".startsWith(str.toLowerCase())) {
                selectizeCountry.addOption({
                    value: "украина",
                    text: "Украина"

                });
            }

            selectizeCountry.refreshOptions();
        },

        onDelete: function () {
            selectizeCountry.clearOptions();
        }


    });

    var selectizeCountry = $selectCountry[0].selectize;
    /*end_selectize Выбора страны */




    /*selectize Выбора города*/
    var $selectCity = $('#city').selectize({
        placeholder: 'Введите страну ',
        render: {
            option: function (data, escape) {
                return '<div class="user-block__info"><span class="bold-link">' + data.text + '</span>' +
                    '<p class="user-block__info-place"></div>'
            },

            item: function (data, escape) {
                return '<p class="user-form__info-type">' + data.text + '</p> '
            }

        },
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
        }


    });

    var selectizeCity = $selectCity[0].selectize;
    /*end_selectize Выбора страны */


});
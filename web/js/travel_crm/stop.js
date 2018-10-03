$(document).ready(function () {
    $('#stop-setting').click(function () {
        line($(this));
        _hashState('#stop-setting');
        $('#stop-settingPanel').show();
        $('#stop-historyPanel').hide();
        $('#targetingPanel').hide();
        $('#logsPanel').hide();

    });
    $('#stop-history').click(function () {
        line($(this));
        _hashState('#stop-history');
        $('#stop-settingPanel').hide();
        $('#stop-historyPanel').show();
        $('#targetingPanel').hide();
        $('#logsPanel').hide();

    });
    $('#targeting').click(function () {
        line($(this));
        _hashState('#targeting');
        $('#stop-settingPanel').hide();
        $('#stop-historyPanel').hide();
        $('#targetingPanel').show();
        $('#logsPanel').hide();

    });
    $('#logs').click(function () {
        line($(this));
        _hashState('#logs');
        $('#stop-settingPanel').hide();
        $('#stop-historyPanel').hide();
        $('#targetingPanel').hide();
        $('#logsPanel').show();
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


    /*selectize Выбора города*/
    var $selectCity = $('#city-targeting').selectize({
        placeholder: 'Введите город',
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
    });

    var selectizeCity = $selectCity[0].selectize;
    /*end_selectize Выбора города*/


    /*selectize Выбора метро*/
    var $selectMetro = $('#metro-targeting ').selectize({
        placeholder: 'Введите метро Москвы',
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
                value: "адмиралтейская",
                text: "Адмиралтейская"

            }, {
                value: "авиамоторная",
                text: "Авиамоторная"

            }
        ],
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeMetro.clearOptions();

            if (str !== "" && "адмиралтейская".startsWith(str.toLowerCase())) {
                selectizeMetro.addOption({
                    value: "адмиралтейская",
                    text: "Адмиралтейская"

                });
            }

            selectizeMetro.refreshOptions();
        },

        onDelete: function () {
            selectizeMetro.clearOptions();
        }

    });
    var selectizeMetro = $selectMetro[0].selectize;
    /*end_selectize Выбора метро*/


    /*selectize Выбора метро2*/
    var $selectMetro2 = $('#metro-targeting2 ').selectize({
        placeholder: 'Введите метро Санкт-Петерубрга',
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
                value: "адмиралтейская",
                text: "Адмиралтейская"

            }, {
                value: "авиамоторная",
                text: "Авиамоторная"

            }
        ],
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeMetro2.clearOptions();

            if (str !== "" && "адмиралтейская".startsWith(str.toLowerCase())) {
                selectizeMetro.addOption({
                    value: "адмиралтейская",
                    text: "Адмиралтейская"

                });
            }

            selectizeMetro2.refreshOptions();
        },

        onDelete: function () {
            selectizeMetro2.clearOptions();
        }

    });
    var selectizeMetro2 = $selectMetro2[0].selectize;
    /*end_selectize Выбора метро2*/

});
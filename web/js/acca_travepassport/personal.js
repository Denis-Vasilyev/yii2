$(function () {
    $('#personal-data').click(function () {
        line($(this));
        _hashState('#personal-data');
        $('#personal-dataPanel').show();
        $('#editPanel').hide();

    });
    $('#edit').click(function () {
        line($(this));
        _hashState('#edit');
        $('#personal-dataPanel').hide();
        $('#editPanel').show();


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

    //выбор страны
    var $selectCountry = $('#country').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-block__info"><span class="bold-link">' + data.text + '</div>'
            },

            item: function (data, escape) {
                return '<p class="user-form__info-type">' + data.text + '</p> '
            }

        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeCountry.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                selectizeCountry.addOption({
                    value: "1234",
                    text: "Россия"


                });
            }

            selectizeCountry.refreshOptions();
        },

        onDelete: function () {
            selectizeCountry.clearOptions();
        }

    });

    var selectizeCountry = $selectCountry[0].selectize;

    //выбор города
    var $selectCity= $('#city').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-block__info"><span class="bold-link">' + data.text + '</div>'
            },

            item: function (data, escape) {
                return '<p class="user-form__info-type">' + data.text + '</p> '
            }

        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeCity.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                selectizeCity.addOption({
                    value: "1234",
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
});

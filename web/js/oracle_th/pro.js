$(function () {
    $('#hotels').click(function () {
        line($(this));
        _hashState('#hotels');
        $('#hotelsPanel').show();
        $('#addPanel').hide();
        $('#legendPanel').hide();

    });
    $('#add').click(function () {
        line($(this));
        _hashState('#add');
        $('#hotelsPanel').hide();
        $('#addPanel').show();
        $('#legendPanel').hide();


    });
    $('#legend').click(function () {
        line($(this));
        _hashState('#legend');
        $('#hotelsPanel').hide();
        $('#addPanel').hide();
        $('#legendPanel').show();


    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.pro-line ');
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



    var $select = $('#id-hotel').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-form">' +
                    '<div class="user-form__info"><span class="user-form__info-link">' + data.hotelName + '</span>' +
                    '<p class="user-form__info-type">' + data.hotelPlace + '</p> '
            }
        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectize.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                selectize.addOption({
                    value: "1234",
                    text: "	Bridge Mountain Красная Поляна 3*",
                    hotelName: "	Bridge Mountain Красная Поляна 3*",
                    hotelPlace: "Аланья, Турция"
                });
            }

            selectize.refreshOptions();
        },
        onChange: function (val) {
            var data = this.options[val];
            var block = '<div class="user-block">' +
                '<div class="user-block__info"><a href="#" class="bold">' + data.hotelName + '</a>' +
                '<p class="user-block__info-place">' + data.hotelPlace +
                '</p></div></div>';
            $('.id-client__selected').show().html(block);

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

});

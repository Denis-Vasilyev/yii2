$(document).ready(function () {
    $('#log').click(function () {
        line($(this));
        _hashState('#log');
        $('#logPanel').show();
        $('#accessPanel').hide();
        $('#addPanel').hide();
        $('#principalPanel').hide();
        $('#basketPanel').hide();
    });
    $('#access').click(function () {
        line($(this));
        _hashState('#access');
        $('#logPanel').hide();
        $('#accessPanel').show();
        $('#addPanel').hide();
        $('#principalPanel').hide();
        $('#basketPanel').hide();
    });
    $('#add').click(function () {
        line($(this));
        _hashState('#add');
        $('#logPanel').hide();
        $('#accessPanel').hide();
        $('#addPanel').show();
        $('#principalPanel').hide();
        $('#basketPanel').hide();
    });
    $('#principal').click(function () {
        line($(this));
        _hashState('#principal');
        $('#logPanel').hide();
        $('#accessPanel').hide();
        $('#addPanel').hide();
        $('#principalPanel').show();
        $('#basketPanel').hide();
    });
    $('#basket').click(function () {
        line($(this));
        _hashState('#basket');
        $('#logPanel').hide();
        $('#accessPanel').hide();
        $('#addPanel').hide();
        $('#principalPanel').hide();
        $('#basketPanel').show();
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

    $('.box-radio #pay').on('click', function () {
        $('.type-access.on').show();
        $('.type-access.test, .type-access.off').hide();
    });

    $('.box-radio #test').on('click', function () {
        $('.type-access.test').show();
        $('.type-access.off, .type-access.on').hide();
    });

    $('.box-radio #off').on('click', function () {
        $('.type-access.off').show();
        $('.type-access.test, .type-access.on').hide();
    });

    var $select = $('#th-id').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-block__info"><span class="bold-link">' + data.text + '</span>' +
                    '<p class="user-block__info-place">'  + data.hotelLocation + '</p> ' + '</div>'
            },

            item: function (data, escape) {
                return '<p class="user-form__info-type">' + data.text  + '</p> '
            }

        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectize.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                selectize.addOption({
                    value: "1234",
                    text: "Dalian Kerren Internatianal Hot Spring Club 4*",
                    hotelLocation: "Белек, Турция"

                });
            }

            selectize.refreshOptions();
        },

        onChange: function (val) {
            var data = this.options[val];
            var block = '<div class="user-block__info"><a href="#" class="bold-link">' + data.text + '</a>' +
                '<p class="user-block__info-place">' + data.hotelLocation + '</p> ' + '</div>';
            $('.id-hotel__selected').show().html(block);
        },

        onDelete: function () {
            selectize.clearOptions();
        },
        onFocus:function () {
            $('.selectize-input').focus().addClass('selectize-input-focus');
        },
        onBlur:function () {
            $('.selectize-input').focus().removeClass('selectize-input-focus');
        }
    });

    var selectize = $select[0].selectize;
});
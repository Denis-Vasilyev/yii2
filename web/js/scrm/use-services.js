$(document).ready(function () {
    $('#active').click(function () {
        line($(this));
        _hashState('#active');
        $('#activePanel').show();
        $('#balancePanel').hide();
        $('#fillPanel').hide();
    });
    $('#balance').click(function () {
        line($(this));
        _hashState('#balance');
        $('#activePanel').hide();
        $('#balancePanel').show();
        $('#fillPanel').hide();
    });

    $('#fill').click(function () {
        line($(this));
        _hashState('#fill');
        $('#activePanel').hide();
        $('#balancePanel').hide();
        $('#fillPanel').show();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.use-services-line ');
        $('.use-services-tab').removeClass('active');
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
    $('#recipient2').on("change", function () {
        $(this).closest('fieldset').find('.choice-person-select').show();
    }); $('#recipient1').on("change", function () {
        $(this).closest('fieldset').find('.choice-person-select').hide();
    });

    var $selectAdd = $('#choice-person').selectize({
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
                    imgPath: "images/ava41.jpg",
                    userName: "Okhapkina Irina",
                    userType: "Турагент",
                    userCity: "Киров"
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
                '<p class="selectize-dropdown__user-info-place">' + data.userType + ' , ' + data.userCity + '</p> ' + '</p></div></div>';
            $('.id-cooper.dropdowm-block').show().html(block);
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

});
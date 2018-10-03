$(document).ready(function () {
    $('#access').click(function () {
        line($(this));
        _hashState('#access');
        $('#accessPanel').show();
        $('#addPanel').hide();
        $('#viewsPanel').hide();
    });
    $('#add').click(function () {
        line($(this));
        _hashState('#add');
        $('#accessPanel').hide();
        $('#addPanel').show();
        $('#viewsPanel').hide();
    });
    $('#views').click(function () {
        line($(this));
        _hashState('#views');
        $('#accessPanel').hide();
        $('#addPanel').hide();
        $('#viewsPanel').show();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.access-project-line ');
        $('.access-project-tab').removeClass('active');
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



    var $select = $('#add-access-select').selectize({
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
                    imgPath: "/images/bth-ava.png",
                    userHasAcces: false,
                    userName: "Okhapkina Irina"
                });
            }

            if (str !== "" && "123".startsWith(str.toLowerCase())) {
                selectize.addOption({
                    value: "123",
                    text: "Иванов Иван",
                    imgPath: "/images/bth-ava-100-2.png",
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
            if (data.userHasAcces) {
                $('.close-access').show()
            } else {
                $('.close-access').hide()
            }
        }
    });

    var selectize = $select[0].selectize;
    $('#add-access-select').on("change", function () {
        $('.show-filed').show()
    });


    $('.add-agent-form .box-radio input').on('click', function () {
        if ($('#open-data').prop('checked')) {
            $(this).closest('form').find('.term').show();
        } else {
            $(this).closest('form').find('.term').hide();
        }
    });


});
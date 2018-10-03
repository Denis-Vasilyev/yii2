$(function () {

    $('#access-project').click(function () {
        line($(this));
        _hashState('#access-project');
        $('#access-projectPanel').show();
        $('#addPanel').hide();

    });
    $('#add').click(function () {
        line($(this));
        _hashState('#add');
        $('#access-projectPanel').hide();
        $('#addPanel').show();
    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.access-project-line ');
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




    var $select = $('#id-client').selectize({
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
            if (data.userHasAcces) {
                $('.close-access').show()
            } else {
                $('.close-access').hide()
            }

            var block = '<div class="user-block"><div class="user-block__ava"><span>' +
                '<img width="50" height="50" src="' + data.imgPath + '" alt=""></span></div>' +
                '<div class="user-block__info"><a href="#" class="bold">' + data.userName + '</a>' +
                '<p class="user-block__info-place">' + (data.userHasAcces ? "Есть доступ" : "Добавить доступ") +  '</p></div></div>';
            $('.id-client__selected').show().html(block);


        }
    });

    var selectize = $select[0].selectize;
    $('#id-client').on("change", function () {
        $('.show-filed').show()
    });

    $('.add-wrap .box-radio input').on('click', function () {
        if ($('#open-data').prop('checked')) {
            $(this).closest('form').find('.term').show();
        } else {
            $(this).closest('form').find('.term').hide();
        }
    });

});
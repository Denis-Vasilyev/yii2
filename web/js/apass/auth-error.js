$(document).ready(function () {
    $('#auth-error').click(function () {
        line($(this));
        _hashState('#fill-quality');
        $('#auth-errorPanel').show();
        $('#users-groupPanel').hide();
        $('#statPanel').hide();
        $('#losersPanel').hide();
        $('#stat-typePanel').hide();
    });
    $('#users-group').click(function () {
        line($(this));
        _hashState('#users-group');
        $('#auth-errorPanel').hide();
        $('#users-groupPanel').show();
        $('#statPanel').hide();
        $('#losersPanel').hide();
        $('#stat-typePanel').hide();
    });
    $('#stat').click(function () {
        line($(this));
        _hashState('#stat');
        $('#auth-errorPanel').hide();
        $('#users-groupPanel').hide();
        $('#statPanel').show();
        $('#losersPanel').hide();
        $('#stat-typePanel').hide();
    });
    $('#losers').click(function () {
        line($(this));
        _hashState('#losers');
        $('#auth-errorPanel').hide();
        $('#users-groupPanel').hide();
        $('#statPanel').hide();
        $('#losersPanel').show();
        $('#stat-typePanel').hide();
    });
    $('#stat-type').click(function () {
        line($(this));
        _hashState('#stat-type');
        $('#auth-errorPanel').hide();
        $('#users-groupPanel').hide();
        $('#statPanel').hide();
        $('#losersPanel').hide();
        $('#stat-typePanel').show();
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

// открытие taba Группировка по пользователю
    var tabUsersGroup = $('#users-group');

    $('.auth-error-tb td:nth-child(3) a').on("click", function () {
        $(tabUsersGroup).show()
            .click();
    });

    $('#auth-error').on("click", function () {
        $(tabUsersGroup).hide()
    });
// end_открытие taba Группировка по пользователю





//фильтр сагест

    var $select = $('#auth-error-select').selectize({
        render: {
            option: function (data, escape) {
                return '<div>' +
                    '<div class="user-block__info mr5"><img class="radius-2" width="35" height="35" src="' + data.imgPath + '" alt=""></div>' +
                    '<div class="user-block__info"><a href="#" class="bold fz14">' + data.userName + '</a>' +
                    '<div class="normal">' + data.userType + '</div> </div></div>'
            }
        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectize.clearOptions();


            if (str !== "" && "123".startsWith(str.toLowerCase())) {
                selectize.addOption({
                    value: "123",
                    text: "Иванов Иван",
                    imgPath: "/images/bth-ava-100-2.png",
                    userName: "Иванов Иван",
                    userType: "Турист"
                });
            }

            selectize.refreshOptions();
        },

        onDelete: function () {
            selectize.clearOptions();
        },

    });

    var selectize = $select[0].selectize;
//фильтр сагеста
});
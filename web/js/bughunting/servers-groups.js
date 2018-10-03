$(document).ready(function () {
    $('#summary-by-group').click(function () {
        line($(this));
        _hashState('#summary-by-group');
        $('#summary-by-groupPanel').show();
        $('#project-by-daysPanel').hide();
        $('#by-serversPanel').hide();
        $('#server-by-daysPanel').hide();
    });
    $('#project-by-days').click(function () {
        line($(this));
        _hashState('#project-by-days');
        $('#summary-by-groupPanel').hide();
        $('#project-by-daysPanel').show();
        $('#by-serversPanel').hide();
        $('#server-by-daysPanel').hide();
    });
    $('#by-servers').click(function () {
        line($(this));
        _hashState('#by-servers');
        $('#summary-by-groupPanel').hide();
        $('#project-by-daysPanel').hide();
        $('#by-serversPanel').show();
        $('#server-by-daysPanel').hide();
    });
    $('#server-by-days').click(function () {
        line($(this));
        _hashState('#server-by-days');
        $('#summary-by-groupPanel').hide();
        $('#project-by-daysPanel').hide();
        $('#by-serversPanel').hide();
        $('#server-by-daysPanel').show();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.line ');
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


    var tabGrouphide = $('#project-by-days');

    $('.table-group a')
        .on("click", function () {
            var projectName = $(this).text();
            tabGrouphide.text(projectName + ' ' + 'по дням');

            tabGrouphide.show()
                .click();
        });

    $('#summary-by-group')
        .on("click", function () {
            $(tabGrouphide).hide();
            $(tabServerhide).hide()
        });

    $('#by-servers')
        .on("click", function () {
            $(tabGrouphide).hide();
            $(tabServerhide).hide()
        });
// end_открытие taba сообщения по дням


// открытие taba ошибки сервера
    var tabServerhide = $('#server-by-days');

    $('.table-server a')
        .on("click", function () {
            var projectName = $(this).text();
            tabServerhide.text(projectName + ' ' + 'по дням');

            tabServerhide.show()
                .click();
        });
// end_открытие taba ошибки сервера
});


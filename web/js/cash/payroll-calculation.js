$(document).ready(function () {
    $('#employees').click(function () {
        line($(this));
        _hashState('#employees');
        $('#employeesPanel').show();
        $('#detailPanel').hide();

    });
    $('#detail').click(function () {
        line($(this));
        _hashState('#detail');
        $('#detailPanel').show();
        $('#employeesPanel').hide();

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



    var tabDetail = $('#detail');
    $('.payroll-tbl a').on('click', function () {
        var text = $(this).text();
        tabDetail.text(text).show().click()
    });



    $('select[name="filter-month"]').SumoSelect();
    $('select[name="filter-year"]').SumoSelect();


});
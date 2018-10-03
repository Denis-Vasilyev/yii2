$(document).ready(function () {

    $('#reports-by-days').click(function () {
        line($(this));
        _hashState('#reports-by-days');
        $('#kpiPanel').hide();
        $('#reports-by-daysPanel').show();
        $('#reports-by-monthPanel').hide();
        $('#receiptPanel').hide();
        $('#add-reportPanel').hide();
        $('#edit-reports-by-monthPanel').hide();
        $('#edit-reports-by-daysPanel').hide();


    });
    $('#reports-by-month').click(function () {
        line($(this));
        _hashState('#reports-by-month');
        $('#reports-by-daysPanel').hide();
        $('#reports-by-monthPanel').show();
        $('#receiptPanel').hide();
        $('#add-reportPanel').hide();
        $('#edit-reports-by-monthPanel').hide();
        $('#edit-reports-by-daysPanel').hide();


    });
    $('#receipt').click(function () {
        line($(this));
        _hashState('#receipt');
        $('#reports-by-daysPanel').hide();
        $('#reports-by-monthPanel').hide();
        $('#receiptPanel').show();
        $('#add-reportPanel').hide();
        $('#edit-reports-by-monthPanel').hide();
        $('#edit-reports-by-daysPanel').hide();


    });
    $('#add-report').click(function () {
        line($(this));
        _hashState('#add-report');
        $('#reports-by-daysPanel').hide();
        $('#reports-by-monthPanel').hide();
        $('#receiptPanel').hide();
        $('#add-reportPanel').show();
        $('#edit-reports-by-monthPanel').hide();
        $('#edit-reports-by-daysPanel').hide();
    });
    $('#edit-reports-by-days').click(function () {
        line($(this));
        _hashState('#edit-reports-by-days');
        $('#reports-by-daysPanel').hide();
        $('#reports-by-monthPanel').hide();
        $('#receiptPanel').hide();
        $('#add-reportPanel').hide();
        $('#edit-reports-by-daysPanel').show();
        $('#edit-reports-by-monthPanel').hide();
    });
    $('#edit-reports-by-month').click(function () {
        line($(this));
        _hashState('#edit-reports-by-month');
        $('#reports-by-daysPanel').hide();
        $('#reports-by-monthPanel').hide();
        $('#receiptPanel').hide();
        $('#add-reportPanel').hide();
        $('#edit-reports-by-daysPanel').hide();
        $('#edit-reports-by-monthPanel').show();
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

    $('.fa-plus.add-task ').on('click', function () {
        $(this).closest('.add-wrap.field').after('<fieldset class="add-wrap field"> <div> <label for="task-name">Задача</label> <input type="text" class="type-input" id="task-name" placeholder="Название задачи"></div> <div> <label for="task"></label><textarea class="type-input" id="task"></textarea></div> </fieldset>')
    });

    /*
     $('.add-report-form.monthly  textarea').on("click", function () {
     $(this).addClass('active-textarea');
     $(this).animate({
     minHeight: "100px"
     }, 400);


     $(document).on("click", function (e) {
     if (!$(e.target).is('.active-textarea')) {
     $('.add-report-form.monthly textarea.active-textarea').animate({
     minHeight: "36px",
     height: "36px"
     }, 250);
     }
     });
     */


    $('.add-report-monthly').on("click", function () {
        $(this).closest('.panel').find('.add-form.add-report-form.monthly').show();
        $(this).closest('.panel').find('.add-form.add-micro-report-form.days').hide()
    });
    $('.add-report-days').on("click", function () {
        $(this).closest('.panel').find('.add-form.add-report-form.monthly').hide();
        $(this).closest('.panel').find('.add-form.add-micro-report-form.days').show()
    });
    var editMicroReport = $('#edit-reports-by-days')
    $('.micro-report .setting-icon').on("click", function () {
        editMicroReport.show().click()
    });

    var editMonthReport = $('#edit-reports-by-month')
    $('.monthly-report td:nth-child(5) a').on("click", function () {
        editMonthReport.show().click()
    });


    $('#reports-by-days').click(function () {
        $('#edit-reports-by-month').hide();
        $('#edit-reports-by-days').hide()


    });


    $('.box-radio label').click(function () {
        $(this).prev('input').prop('checked')
    });
});
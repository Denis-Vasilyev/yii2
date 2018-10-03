$(document).ready(function () {
    $('#myAgency').click(function () {
        line($(this));
        _hashState('#myAgency');
        $('#myAgencyPanel').show();
        $('#myAgencyEditPanel').hide();
        $('#allAgencysPanel').hide();
        $('#myAgencyStaffPanel').hide();

    });
    $('#myAgencyEdit').click(function () {
        line($(this));
        _hashState('#myAgencyEdit');
        $('#myAgencyPanel').hide();
        $('#myAgencyEditPanel').show();
        $('#allAgencysPanel').hide();
        $('#myAgencyStaffPanel').hide();
    });
    $('#allAgencys').click(function () {
        line($(this));
        _hashState('#allAgencys');
        $('#myAgencyPanel').hide();
        $('#myAgencyEditPanel').hide();
        $('#allAgencysPanel').show();
        $('#myAgencyStaffPanel').hide();
    });
   $('#myAgencyStaff').click(function () {
        line($(this));
        _hashState('#myAgencyStaff');
        $('#myAgencyPanel').hide();
        $('#myAgencyEditPanel').hide();
        $('#allAgencysPanel').hide();
        $('#myAgencyStaffPanel').show();
    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.my-agency-line ');
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

    $('.add-agent-wrap textarea').on('click', function () {
        $(this).animate({
            height: '58px'
        })
    });

    var plusClickCount = 0;

    $('.chart-job .fa-plus').on('click', function () {
        plusClickCount++;
        if (plusClickCount == 1) {
            $('.monday').text('Понедельник - четверг');
            $('.chart-job').find('.hidden.friday').removeClass('hidden').addClass('block');
        }

        if (plusClickCount == 2) {
            $('.monday').text('Понедельник');
            $('.chart-job').find('.hidden').removeClass('hidden').addClass('block');
        }

    });

    $('.edit-agent .link__add').on('click', function () {
        $(this).closest('div').after('<div> <label for=""></label> <input class="type-input" type="text" id=""></div>')
    });
    $('.edit-agent__close').on('click', function () {
        $(this).closest('.panel').find('.agency-edit-form').hide();
        $(this).closest('.panel').find('.agency-tables').show();
        $(this).closest('.panel').find('.filter-new').show()
    });


    $('input[name="my-agency-filter"]').on('change', function () {
        if ($('#edit').prop('checked')) {
            $(this).closest('.panel').find('.agency-edit-form').show();
            $(this).closest('.panel').find('.agency-tables').hide();
            $(this).closest('.panel').find('.filter-new').hide()
        }
        else {
            $(this).closest('.panel').find('.agency-edit-form').hide();
            $(this).closest('.panel').find('.agency-tables').show();
            $(this).closest('.panel').find('.filter-new').show()
        }

    });

});
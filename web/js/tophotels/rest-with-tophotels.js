$(function () {
    $('#projectRibbon').click(function () {
        line($(this));
        _hashState('#projectRibbon');
        $('#projectRibbonPanel').show();

    });




    $('input[name="view"]').on('change', function () {
        if ($('#long-view').prop('checked')) {
            $('.tape-long__tbl').show();
            $('.tape-short__tbl').hide()
        }
        if ($('#short-view').prop('checked')) {
            $('.tape-long__tbl').hide();
            $('.tape-short__tbl').show()
        }

    });
});

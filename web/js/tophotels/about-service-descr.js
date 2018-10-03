$(document).ready(function () {
    $('#descr').click(function () {
        line($(this));
        _hashState('#descr');
        $('#descrPanel').show();
        $('#lastNewsPanel').hide();
    });

    $('#lastNews').click(function () {
        line($(this));
        _hashState('#lastNews');
        $('#descrPanel').hide();
        $('#lastNewsPanel').show();
    });

    });
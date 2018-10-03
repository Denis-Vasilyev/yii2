$(document).ready(function() {
    $('#days').click(function () {
        line($(this));
        _hashState('#days');
        $('#daysPanel').show();
        $('#weekPanel').hide();
        $('#monthPanel').hide();
        $('#yearsPanel').hide();
        $('#summaryPanel').hide();
        $('#graphicPanel').hide();
        $('#geographicPanel').hide();
    });
    $('#week').click(function () {
        line($(this));
        _hashState('#week');
        $('#daysPanel').hide();
        $('#weekPanel').show();
        $('#monthPanel').hide();
        $('#yearsPanel').hide();
        $('#summaryPanel').hide();
        $('#graphicPanel').hide();
        $('#geographicPanel').hide();
    });

    $('#month').click(function () {
        line($(this));
        _hashState('#month');
        $('#daysPanel').hide();
        $('#weekPanel').hide();
        $('#monthPanel').show();
        $('#yearsPanel').hide();
        $('#summaryPanel').hide();
        $('#graphicPanel').hide();
        $('#geographicPanel').hide();
    });
    $('#years').click(function () {
        line($(this));
        _hashState('#years');
        $('#daysPanel').hide();
        $('#weekPanel').hide();
        $('#monthPanel').hide();
        $('#yearsPanel').show();
        $('#summaryPanel').hide();
        $('#graphicPanel').hide();
        $('#geographicPanel').hide();
    });
    $('#summary').click(function () {
        line($(this));
        _hashState('#summary');
        $('#daysPanel').hide();
        $('#weekPanel').hide();
        $('#monthPanel').hide();
        $('#yearsPanel').hide();
        $('#summaryPanel').show();
        $('#graphicPanel').hide();
        $('#geographicPanel').hide();
    });
    $('#graphic').click(function () {
        line($(this));
        _hashState('#graphic');
        $('#daysPanel').hide();
        $('#weekPanel').hide();
        $('#monthPanel').hide();
        $('#yearsPanel').hide();
        $('#summaryPanel').hide();
        $('#graphicPanel').show();
        $('#geographicPanel').hide();
    });
    $('#geographic').click(function () {
        line($(this));
        _hashState('#geographic');
        $('#daysPanel').hide();
        $('#weekPanel').hide();
        $('#monthPanel').hide();
        $('#yearsPanel').hide();
        $('#summaryPanel').hide();
        $('#graphicPanel').hide();
        $('#geographicPanel').show();
    });


});







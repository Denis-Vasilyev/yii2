$(document).ready(function() {
    $('#reportTape').click(function () {
        line($(this));
        _hashState('#reportTape');
        $('#reportTapePanel').show();
        $('#requestReportPanel').hide();
    });
    $('#requestReport').click(function () {
        line($(this));
        _hashState('#requestReport');
        $('#reportTapePanel').hide();
        $('#requestReportPanel').show();
    });


    
    $('#errorShow').on('click', function () {
        $('.bth__ta-block.request-report').toggleClass('error');
    });
});







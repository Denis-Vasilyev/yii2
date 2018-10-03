$(document).ready(function() {
    $('#informationTape').click(function () {
        line($(this));
        _hashState('#informationTape');
        $('#informationTapePanel').show();
        $('#getConsultationPanel').hide();
    });

    $('#getConsultation').click(function () {
        line($(this));
        _hashState('#getConsultation');
        $('#informationTapePanel').hide();
        $('#getConsultationPanel').show();
    });

});

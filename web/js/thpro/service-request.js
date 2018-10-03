jQuery(document).ready(function($){
    $('#serviceRequest').click(function () {
        $('#serviceEdit').addClass('hidden');
        line($(this));
        _hashState('#serviceRequest');
        $('#serviceRequestPanel').show();
        $('#serviceEditPanel').hide();
    });

    $('#serviceEdit').click(function () {
        line($(this));
        _hashState('#serviceEdit');
        $('#serviceRequestPanel').hide();
        $('#serviceEditPanel').show();
    });

    $('#serviceEditLink').click(function () {
        _hashState('#serviceEdit');
        $('#serviceRequest').removeClass('active');
        $('#serviceEdit').removeClass('hidden').addClass('active');
        $('#serviceRequestPanel').hide();
        $('#serviceEditPanel').show();
        var position = $('#serviceEdit').position();
        var width = $('#serviceEdit').width();
        $('.service-line').animate({
            left: position.left,
            width: width
        }, 300);
    });


});

$('select[name="cost"]').SumoSelect();
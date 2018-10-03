jQuery(document).ready(function($){
    $('#userAct').click(function () {
        line($(this));
        _hashState('#userAct');
        $('#userActPanel').show();
        $('#noActivationPanel').hide();
    });

    $('#noActivation').click(function () {
        line($(this));
        _hashState('#noActivation');
        $('#userActPanel').hide();
        $('#noActivationPanel').show();
    });


});

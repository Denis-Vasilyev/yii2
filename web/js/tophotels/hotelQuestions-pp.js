

jQuery(document).ready(function($) {

    $('#step2Show').on('click', function () {
        $(this).closest('.step1').hide();
        $(this).closest('.step1').next('.step2').show();
    });

});
$('input[name=statusRev]').on('click', function () {
    if ($('#statusRev1').prop('checked')) {
        $(this).closest('.bth__row').next('.bth__row').find('.type-rew__block').show();
        $(this).closest('.bth__row').next('.bth__row').find('.type-del-rew__block').hide();
    }
    if ($('#statusRev2').prop('checked')) {
        $(this).closest('.bth__row').next('.bth__row').find('.type-rew__block').hide();
        $(this).closest('.bth__row').next('.bth__row').find('.type-del-rew__block').show();
    }

});
$('select[name="country"]').SumoSelect();
$('select[name="yearVisit"]').SumoSelect();
$('select[name="season"]').SumoSelect();


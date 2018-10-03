$(document).ready(function() {
    $('#groupInfo').click(function () {
        line($(this));
        _hashState('#groupInfo');
        $('#groupInfoPanel').show();
        $('#statusManagementPanel').hide();
        $('#groupRecomendationPanel').hide();
    });
    $('#statusManagement').click(function () {
        line($(this));
        _hashState('#statusManagement');
        $('#groupInfoPanel').hide();
        $('#statusManagementPanel').show();
        $('#groupRecomendationPanel').hide();

    });
 $('#groupRecomendation').click(function () {
        line($(this));
        _hashState('#groupRecomendation');
        $('#groupInfoPanel').hide();
        $('#statusManagementPanel').hide();
        $('#groupRecomendationPanel').show();

    });

    $('input[name=addSubs]').on('click', function () {
        if ($('#addSubsCbx').prop('checked')) {
            $('.subs__cbx').addClass('active');
        } else {
            $('.subs__cbx').removeClass('active');
        }
    });

    $('#jsFilterStatusOpen').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.filter-small').hide();
        $(this).closest('.section').find('.filter-big').show();
        $(this).closest('.panel').find('.group_content').hide();
    });

    $('.js-filter-big-close').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.filter-big').hide();
        $(this).closest('.section').find('.filter-small').show();
        $(this).closest('.panel').find('.group_content').show();
    });


    $('input[name="subsAdd"]').change(function () {
        if ($('input[name="subsAdd"]').is(':checked')) {
            $('.btn-fixed-block').show();
        } else {
            $('.btn-fixed-block').hide();
        }
    });


});

$(function () {
    $('.change-status-open').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $(document).on('click', '.change-status-close', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
        $(this).closest('.step1').show();
        $(this).closest('.step1').next('.step2').hide();
    });
});





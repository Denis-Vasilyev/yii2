jQuery(document).ready(function ($) {
    $('#MyConnect').click(function () {
        line($(this));
        _hashState('#MyConnect');
        $('#MyConnectPanel').show();
        $('#PotentialLinkPanel').hide();
        $('#BanaPanel').hide();
        $('#AddUserPanel').hide();
    });
    $('#PotentialLink').click(function () {
        line($(this));
        _hashState('#PotentialLink');
        $('#MyConnectPanel').hide();
        $('#PotentialLinkPanel').show();
        $('#BanaPanel').hide();
        $('#AddUserPanel').hide();
    });
    $('#Bana').click(function () {
        line($(this));
        _hashState('#Bana');
        $('#MyConnectPanel').hide();
        $('#PotentialLinkPanel').hide();
        $('#BanaPanel').show();
        $('#AddUserPanel').hide();
    });
    $('#AddUser').click(function () {
        line($(this));
        _hashState('#AddUser');
        $('#MyConnectPanel').hide();
        $('#PotentialLinkPanel').hide();
        $('#BanaPanel').hide();
        $('#AddUserPanel').show();
    });

    $('#jsStatUser').on('click', function () {
        $(this).closest('.section').find('.find-user__block').show();
        $(this).closest('.section').find('.user-statys__rbt').show();
        $(this).closest('.section').find('.find-user__btn-block').show();
        $(this).closest('.section').find('.my-connect__search-close').show();
    });

    $('.my-connect__search-close').on('click', function () {
        $(this).closest('.section').find('.find-user__block').hide();
        $(this).closest('.section').find('.user-statys__rbt').hide();
        $(this).closest('.section').find('.find-user__btn-block').hide();
        $(this).hide();
    });

});

$('#jsFilterBigOpen').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.filter-small').hide();
    $(this).closest('.section').find('.filter-big').show();
    $(this).closest('.panel').find('.connection__wrap').hide();
});

$('.js-filter-big-close').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.filter-big').hide();
    $(this).closest('.section').find('.filter-small').show();
    $(this).closest('.panel').find('.connection__wrap').show();
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
    });
});

$(function () {
    $('.new-friend-open').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $(document).on('click', '.new-friend-close', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});


$(function () {

    $('.write-letter-open').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $(document).on('click', '.write-letter-close', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
    $('.write-letter-open').on('click', function () {
        $('#writeLetterStep1').show();
        $('#writeLetterStep2').hide();
    });
});

$('#writeLetterStep2Btn').on('click', function () {
    setTimeout(function () {
        $('#writeLetterStep1').hide();
        $('#writeLetterStep2').show();
    }, 1000);


});
$('#writeLetterStep3Btn').on('click', function () {

    $('#writeLetterStep1').hide();
    $('#writeLetterStep2').hide();
    $('#writeLetterStep3').show();


});


//
// $('input[name=linkType]').on('click', function () {
//     // $('.filter-big__friends-type').hide();
//     if ($('#linkType1').prop('checked')) {
//         $(this).closest('.bth__cell').find('.filter-big__friends-type').removeClass('hidden');
//     } else {
//         $('.filter-big__friends-type').addClass('hidden');
//     }
// });
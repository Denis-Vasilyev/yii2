$(document).ready(function () {

    $('#wayCash').click(function () {
        line($(this));
        _hashState('#wayCash');
        $('#wayCashPanel').show();
        $('#confidentialityPanel').hide();
        $('#contactsPanel').hide();
        $('#decsrPanel').hide();
    });

    $('#confidentiality').click(function () {
        line($(this));
        _hashState('#confidentiality');
        $('#wayCashPanel').hide();
        $('#confidentialityPanel').show();
        $('#contactsPanel').hide();
        $('#decsrPanel').hide();
    });
    $('#contacts').click(function () {
        line($(this));
        _hashState('#contacts');
        $('#wayCashPanel').hide();
        $('#confidentialityPanel').hide();
        $('#contactsPanel').show();
        $('#decsrPanel').hide();
    });
    $('#decsr').click(function () {
        line($(this));
        _hashState('#decsr');
        $('#wayCashPanel').hide();
        $('#confidentialityPanel').hide();
        $('#contactsPanel').hide();
        $('#decsrPanel').show();
    });

    $('.header__btn-pay-search, .js-act-back').on('click', function () {
        $('.js-step1').hide();
        $('.js-step2').show();
        $('.js-act-user-line').show()
    });

    $('.js-act-back').on('click', function () {
        $('.js-step3').hide();
        $('.js-step2').show();
        $('.js-act-user-line').show();
    });

    $('.js-act-card').on('click', function () {
        $('.js-step2').hide();
        $('.js-step-card').show();
        $('.js-act-user-line').show()
    });
    $('.js-act-bill').on('click', function () {
        $('.js-step2').hide();
        $('.js-step-card').hide();
        $('.js-act-user-line').show();
        $('.js-step3').show()
    });


    $('.js-act-offer').on('click', function () {
        $(this).closest('.thPay-80p').hide();
        $('.thPay-offer').show()
    })
});
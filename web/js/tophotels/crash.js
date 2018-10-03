$(document).ready(function () {
    $('.topline-crush .js-act-step-2').on('click', function () {
        $('.crash-step-1').hide();
        $('.crash-step-2').show();
        $('.crash-step-3').hide();
        $('.crash-step-4').hide();
        $('.crash-step-5').hide();
        $('.crash-step-6').hide();
        $('.topline-crush--matrix-layout').hide();
    });
    $('.topline-crush .js-act-step-3').on('click', function () {
        $('.crash-step-1').hide();
        $('.crash-step-2').hide();
        $('.crash-step-3').show();
        $('.crash-step-4').hide();
        $('.crash-step-6').hide();
        $('.crash-step-5').hide();
        $('.topline-crush--matrix-layout').show();
    });
    $('.topline-crush .js-act-step-4').on('click', function () {
        $('.crash-step-1').hide();
        $('.crash-step-2').hide();
        $('.crash-step-3').hide();
        $('.crash-step-4').show();
        $('.crash-step-5').hide();
        $('.crash-step-6').hide();
        $('.topline-crush--matrix-layout').hide();
    });
    $('.topline-crush .js-act-step-5').on('click', function () {
        $('.crash-step-1').hide();
        $('.crash-step-2').hide();
        $('.crash-step-3').hide();
        $('.crash-step-4').hide();
        $('.crash-step-6').hide();
        $('.topline-crush--matrix-layout').hide();
        $('.crash-step-5').show();
    });
    $('.topline-crush .js-act-step-6').on('click', function () {
        $('.crash-step-1').hide();
        $('.crash-step-2').hide();
        $('.crash-step-3').hide();
        $('.crash-step-4').hide();
        $('.topline-crush--matrix-layout').hide();
        $('.crash-step-5').hide();
        $('.crash-step-6').show();
    });
    $('.topline-crush .js-act-step-1').on('click', function () {
        $('.crash-step-1').show();
        $('.crash-step-2').hide();
        $('.crash-step-3').hide();
        $('.crash-step-4').hide();
        $('.topline-crush--matrix-layout').hide();
        $('.crash-step-5').hide();
        $('.crash-step-6').hide();
    })
});
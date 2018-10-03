jQuery(document).ready(function ($) {

    $('.service-rating__link').on('click', function (e) {
        e.preventDefault();
        $('.bth__cnt.category').hide();
        $('.service-rating__link').removeClass('active');
        $(this).addClass('active');
    });

    $('#allServiseLink').on('click', function (e) {
        e.preventDefault();
        $('.bth__cnt.category').show();
        $('.service-rating__mark-row').show();
    });

    $('#infrastructureLink').on('click', function (e) {
        e.preventDefault();
        $('.service-rating__mark-row').hide();
        $('.service-rating__mark-row.infrastructure').show();
    });

    $('#serviseQualityLink').on('click', function (e) {
        e.preventDefault();
        $('.service-rating__mark-row').hide();
        $('.service-rating__mark-row.servise-quality').show();
    });

    $('#serviceRoomLink').on('click', function (e) {
        e.preventDefault();
        $('.service-rating__mark-row').hide();
        $('.service-rating__mark-row.service-rooms').show();
    });

    $('#beachLink').on('click', function (e) {
        e.preventDefault();
        $('.service-rating__mark-row').hide();
        $('.service-rating__mark-row.beach').show();
    });

    $('#relaxingLink').on('click', function (e) {
        e.preventDefault();
        $('.service-rating__mark-row').hide();
        $('.service-rating__mark-row.relaxing').show();
    });

    $('#serviseChildLink').on('click', function (e) {
        e.preventDefault();
        $('.service-rating__mark-row').hide();
        $('.service-rating__mark-row.servise-child').show();
    });

    $('#locationLink').on('click', function (e) {
        e.preventDefault();
        $('.service-rating__mark-row').hide();
        $('.service-rating__mark-row.location').show();
    });

    $('#sreviseRatingStep2').on('click', function (e) {
        e.preventDefault();
        $('.step1').hide();
        $('.step2').show();
        $('.step3').hide();
    });

    $('#sreviseRatingStep3').on('click', function (e) {
        e.preventDefault();
        $('.step1').hide();
        $('.step2').hide();
        $('.step3').show();
    });

    var countUnp = 0;
    $('.service-rating-pp input[type="radio"]').on('click', function () {
        countUnp++;
        if (countUnp === 2) {
            $(this).prop('checked', false);
            countUnp = 0;
        }

    });


});
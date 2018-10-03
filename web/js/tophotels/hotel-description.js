$(document).ready(function() {
    $('#hotelDescription').click(function () {
        line($(this));
        _hashState('#hotelDescription');
        $('#hotelDescriptionPanel').show();
        $('#v0DescriptionPanel').hide();
        $('#v1DescriptionPanel').hide();
        $('#v2DescriptionPanel').hide();
        $('#v3DescriptionPanel').hide();
        $('#hotelInfraPanel').hide();
        $('#hotelRoomPanel').hide();
        $('#dopInfoPanel').hide();
        $('#hotelContactsPanel').hide();
    });

   $('#v0Description').click(function () {
        line($(this));
        _hashState('#v0Description');
        $('#hotelDescriptionPanel').hide();
        $('#v0DescriptionPanel').show();
        $('#v1DescriptionPanel').hide();
        $('#v2DescriptionPanel').hide();
       $('#v3DescriptionPanel').hide();
       $('#hotelRoomPanel').hide();
        $('#hotelInfraPanel').hide();
        $('#dopInfoPanel').hide();
        $('#hotelContactsPanel').hide();
    });
   $('#v1Description').click(function () {
        line($(this));
        _hashState('#v1Description');
        $('#hotelDescriptionPanel').hide();
        $('#v0DescriptionPanel').hide();
        $('#v1DescriptionPanel').show();
        $('#v2DescriptionPanel').hide();
       $('#v3DescriptionPanel').hide();
       $('#hotelRoomPanel').hide();
        $('#hotelInfraPanel').hide();
        $('#dopInfoPanel').hide();
        $('#hotelContactsPanel').hide();
    });

   $('#v2Description').click(function () {
        line($(this));
        _hashState('#v2Description');
        $('#hotelDescriptionPanel').hide();
       $('#v0DescriptionPanel').hide();
       $('#v1DescriptionPanel').hide();
       $('#v2DescriptionPanel').show();
       $('#v3DescriptionPanel').hide();
       $('#hotelRoomPanel').hide();
        $('#hotelInfraPanel').hide();
        $('#dopInfoPanel').hide();
        $('#hotelContactsPanel').hide();
    });

    $('#v3Description').click(function () {
        line($(this));
        _hashState('#v3Description');
        $('#hotelDescriptionPanel').hide();
        $('#v0DescriptionPanel').hide();
        $('#v1DescriptionPanel').hide();
        $('#v2DescriptionPanel').hide();
        $('#v3DescriptionPanel').show();
        $('#hotelRoomPanel').hide();
        $('#hotelInfraPanel').hide();
        $('#dopInfoPanel').hide();
        $('#hotelContactsPanel').hide();
    });


    $('#hotelRoom').click(function () {
        line($(this));
        _hashState('#hotelRoom');
        $('#hotelDescriptionPanel').hide();
        $('#v0DescriptionPanel').hide();
        $('#v1DescriptionPanel').hide();
        $('#v2DescriptionPanel').hide();
        $('#v3DescriptionPanel').hide();
        $('#hotelRoomPanel').show();
        $('#hotelInfraPanel').hide();
        $('#dopInfoPanel').hide();
        $('#hotelContactsPanel').hide();
    });

    $('#hotelInfra').click(function () {
        line($(this));
        _hashState('#hotelInfra');
        $('#hotelDescriptionPanel').hide();
        $('#v0DescriptionPanel').hide();
        $('#v1DescriptionPanel').hide();
        $('#v2DescriptionPanel').hide();
        $('#v3DescriptionPanel').hide();
        $('#hotelRoomPanel').hide();
        $('#hotelInfraPanel').show();
        $('#dopInfoPanel').hide();
        $('#hotelContactsPanel').hide();
    });
    $('#dopInfo').click(function () {
        line($(this));
        _hashState('#dopInfo');
        $('#hotelDescriptionPanel').hide();
        $('#v0DescriptionPanel').hide();
        $('#v1DescriptionPanel').hide();
        $('#v2DescriptionPanel').hide();
        $('#v3DescriptionPanel').hide();
        $('#hotelRoomPanel').hide();
        $('#hotelInfraPanel').hide();
        $('#dopInfoPanel').show();
        $('#hotelContactsPanel').hide();
    });
    $('#hotelContacts').click(function () {
        line($(this));
        _hashState('#hotelContacts');
        $('#hotelDescriptionPanel').hide();
        $('#v0DescriptionPanel').hide();
        $('#v1DescriptionPanel').hide();
        $('#v2DescriptionPanel').hide();
        $('#v3DescriptionPanel').hide();
        $('#hotelRoomPanel').hide();
        $('#hotelInfraPanel').hide();
        $('#dopInfoPanel').hide();
        $('#hotelContactsPanel').show();
    });


    $('.js-infra-more').on('click', function (e) {
        e.preventDefault();
        $(this).prev('.infra__cnt').hide();
        $(this).hide();
        $(this).next('.infra__descr-big').show();
    });

    $('.js-infra-sm').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.infra__descr-big').hide();
        $(this).closest('.infra__descr-big').prev().show();
        $(this).closest('.infra__item').find('.infra__cnt').show();
    });

    $('#infraOpen').on('click', function () {
        $('.infra__descr-big').show();
        $('.infra__descr-big').prev().hide();
        $('.infra__item').find('.infra__cnt').hide();
    });

    $('#infraClose').on('click', function () {
        $('.infra__descr-big').hide();
        $('.infra__descr-big').prev().show();
        $('.infra__item').find('.infra__cnt').show();
    });

     $('#rus').on('click', function (e) {
         e.preventDefault();
         $('.dop-lang-link').removeClass('active');
         $(this).addClass('active');
         $('.dop__lang-block').hide();
        $('#rusBlock').show();
    });

     $('#eng').on('click', function (e) {
         e.preventDefault();
         $('.dop-lang-link').removeClass('active');
         $(this).addClass('active');
         $('.dop__lang-block').hide();
        $('#engBlock').show();
    });

     $('#deu').on('click', function (e) {
         e.preventDefault();
         $('.dop-lang-link').removeClass('active');
         $(this).addClass('active');
         $('.dop__lang-block').hide();
        $('#deuBlock').show();
    });

     $('#fra').on('click', function (e) {
         e.preventDefault();
         $('.dop-lang-link').removeClass('active');
         $(this).addClass('active');
         $('.dop__lang-block').hide();
        $('#fraBlock').show();
    });

    $('#langMore').on('click', function (e) {
         e.preventDefault();
         $('.dop-lang__sugg').show();
         $('.dop-lang__arr').addClass('active');
    });

    $('.dop-lang__sugg .dop-lang-link').on('click', function (e) {
         e.preventDefault();
         $(this).closest('.dop-lang__sugg').hide();
        $(this).closest('.dop-lang__block').find('.dop-lang__arr').removeClass('active');
    });

    $('#jsNoMark').on('click', function () {
        $(this).closest('.description-ttl-block').next('.description-wrap__tbl').find('.description__tbl-block').toggle();
        $(this).closest('.description-ttl-block').next('.description-wrap__tbl').find('.description__rev-right-v2').toggle();
        $(this).closest('.description-ttl-block').next('.description-wrap__tbl').find('.description__dop-block').toggle();
    });

    $('#jsNoQuest').on('click', function () {
        $(this).closest('.description-ttl-block').next('.description-wrap__tbl').find('.description__tbl-block').toggle();
        $(this).closest('.description-ttl-block').next('.description-wrap__tbl').find('.description__rev-right-v2').toggle();
        $(this).closest('.description-ttl-block').next('.description-wrap__tbl').find('.description__dop-block').toggle();
    });

});


$(document).ready(function(){
    $('.service__btn').on('click', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top + 30;
        $('body,html').animate({scrollTop: top}, 300);
    });
});

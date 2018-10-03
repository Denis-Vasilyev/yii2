$(document).ready(function() {
    $('#configService').click(function () {
        _hashState('#configService');
        $('#configServicePanel').show();
        $('#activationPanel').hide();
        $('#serviceDescription').hide();
        line($(this));
    });
    $('#activation').click(function () {
        _hashState('#activation');
        $('#configServicePanel').hide();
        $('#activationPanel').show();
        $('#serviceDescription').hide();
        line($(this));
    });



    $('.js-activation-tab').on('click', function (e) {
        e.preventDefault();
        $('#configServicePanel').hide();
        $('#activationPanel').show();
        $('#configService').removeClass('active');
        $('#activation').addClass('active');
        var pos = $('#activation').position().left;
        var width = $('#activation').width();
        _hashState('#activation');
        $('.config-serv-line').clearQueue().animate({
            left: pos,
            width: width
        }, 300);
    });

    $('.js-config-tab').on('click', function (e) {
        e.preventDefault();
        $('#configServicePanel').show();
        $('#activationPanel').hide();
        $('#configService').addClass('active');
        $('#activation').removeClass('active');
        var pos = $('#configService').position().left;
        var width = $('#configService').width();
        _hashState('#configService');
        $('.config-serv-line').clearQueue().animate({
            left: pos,
            width: width
        }, 300);
    });

    $('.js-service-description').on('click', function (e) {
        e.preventDefault();
        $('#configServicePanel').hide();
        $('#serviceDescriptionPanel').show();
        $('#configService').removeClass('active');
        $('#serviceDescription').show().addClass('active');
        var pos = $('#serviceDescription').position().left;
        var width = $('#serviceDescription').width();
        _hashState('#serviceDescription');
        $('.config-serv-line').clearQueue().animate({
            left: pos,
            width: width
        }, 300);
    });

});






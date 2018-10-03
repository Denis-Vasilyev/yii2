$(document).ready(function() {
    $('#hotelNews').click(function () {
        line($(this));
        _hashState('#hotelNews');
        $('#hotelNewsPanel').show();
        $('#tapeActivityPanel').hide();
        $('#hotelSubscriberPanel').hide();
        $('#hotelSubsPanel').hide();
        $('#articleSubsPanel').hide();
    });

    $('#tapeActivity').click(function () {
        line($(this));
        _hashState('#tapeActivity');
        $('#hotelNewsPanel').hide();
        $('#tapeActivityPanel').show();
        $('#hotelSubscriberPanel').hide();
        $('#hotelSubsPanel').hide();
        $('#articleSubsPanel').hide();
    });

    $('#hotelSubscriber').click(function () {
        line($(this));
        _hashState('#hotelSubscriber');
        $('#hotelNewsPanel').hide();
        $('#tapeActivityPanel').hide();
        $('#hotelSubscriberPanel').show();
        $('#hotelSubsPanel').hide();
        $('#articleSubsPanel').hide();
    });

    $('#hotelSubs').click(function () {
        line($(this));
        _hashState('#hotelSubs');
        $('#hotelNewsPanel').hide();
        $('#tapeActivityPanel').hide();
        $('#hotelSubscriberPanel').hide();
        $('#hotelSubsPanel').show();
        $('#articleSubsPanel').hide();
    });

    $('#articleSubs').click(function () {
        line($(this));
        _hashState('#articleSubs');
        $('#hotelNewsPanel').hide();
        $('#tapeActivityPanel').hide();
        $('#hotelSubscriberPanel').hide();
        $('#hotelSubsPanel').hide();
        $('#articleSubsPanel').show();
    });



    $('input[name=addSubs]').on('click', function () {
        if ($('#addSubsCbx').prop('checked')) {
            $('.subs__cbx').addClass('active');
        } else {
            $('.subs__cbx').removeClass('active');
        }
    });




    });

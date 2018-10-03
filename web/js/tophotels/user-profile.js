$(document).ready(function () {
    $('#userProfile').click(function () {
        line($(this));
        _hashState('#userProfile');
        $('#userProfilePanel').show();
        $('#userPersonalPanel').hide();
        $('#userStatPanel').hide();
        $('#userPopularityPanel').hide();
        $('#userOldPanel').hide();
    });
    $('#userPersonal').click(function () {
        line($(this));
        _hashState('#userPersonal');
        $('#userProfilePanel').hide();
        $('#userPersonalPanel').show();
        $('#userStatPanel').hide();
        $('#userPopularityPanel').hide();
        $('#userOldPanel').hide();
    });
    $('#userStat').click(function () {
        line($(this));
        _hashState('#userStat');
        $('#userProfilePanel').hide();
        $('#userPersonalPanel').hide();
        $('#userStatPanel').show();
        $('#userPopularityPanel').hide();
        $('#userOldPanel').hide();
    });
    $('#userPopularity').click(function () {
        line($(this));
        _hashState('#userPopularity');
        $('#userProfilePanel').hide();
        $('#userPersonalPanel').hide();
        $('#userStatPanel').hide();
        $('#userPopularityPanel').show();
        $('#userOldPanel').hide();
    });

    $('#userOld').click(function () {
        line($(this));
        _hashState('#userPopularity');
        $('#userProfilePanel').hide();
        $('#userPersonalPanel').hide();
        $('#userStatPanel').hide();
        $('#userPopularityPanel').hide();
        $('#userOldPanel').show();
    });

    $('.userProfile__friends-total').on('click', function () {
        $(this).closest('.userProfile__block').find('.js-noFriend').show()
        $(this).closest('.userProfile__block').find('.js-haveFriend').hide()
    })


});
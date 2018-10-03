$(document).ready(function() {
    $('#inviteGroup').click(function () {
        line($(this));
        _hashState('#inviteGroup');
        $('#inviteGroupPanel').show();
        $('#resultsSubscriptionPanel').hide();
        $('#logInvitePanel').hide();
        $('#addContactPanel').hide();
        $('#invitePanel').hide();
    });
    $('#resultsSubscription').click(function () {
        line($(this));
        _hashState('#resultsSubscription');
        $('#inviteGroupPanel').hide();
        $('#resultsSubscriptionPanel').show();
        $('#logInvitePanel').hide();
        $('#addContactPanel').hide();
        $('#invitePanel').hide();

    });

    $('#logInvite').click(function () {
        line($(this));
        _hashState('#logInvite');
        $('#inviteGroupPanel').hide();
        $('#resultsSubscriptionPanel').hide();
        $('#logInvitePanel').show();
        $('#addContactPanel').hide();
        $('#invitePanel').hide();
    });

    $('#addContact').click(function () {
        line($(this));
        _hashState('#addContact');
        $('#inviteGroupPanel').hide();
        $('#resultsSubscriptionPanel').hide();
        $('#logInvitePanel').hide();
        $('#addContactPanel').show();
        $('#invitePanel').hide();
    });

    $('#invite').click(function () {
        line($(this));
        _hashState('#invite');
        $('#inviteGroupPanel').hide();
        $('#resultsSubscriptionPanel').hide();
        $('#logInvitePanel').hide();
        $('#addContactPanel').hide();
        $('#invitePanel').show();
    });

});







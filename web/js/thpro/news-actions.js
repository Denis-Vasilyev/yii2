jQuery(document).ready(function ($) {
    $('#newsTape').click(function () {
        line($(this));
        _hashState('#newsTape');
        $('#newsTapePanel').show();
        $('#addNewPanel').hide();
        $('#newsTapeOldPanel').hide();
        $('#newsGroupsPanel').hide();
    });
    $('#addNew').click(function () {
        line($(this));
        _hashState('#addNew');
        $('#newsTapePanel').hide();
        $('#addNewPanel').show();
        $('#newsTapeOldPanel').hide();
        $('#newsGroupsPanel').hide();
    });
    $('#newsTapeOld').click(function () {
        line($(this));
        _hashState('#newsTapeOld');
        $('#newsTapePanel').hide();
        $('#addNewPanel').hide();
        $('#newsTapeOldPanel').show();
        $('#newsGroupsPanel').hide();
    });
    $('#newsGroups').click(function () {
        line($(this));
        _hashState('#newsGroups');
        $('#newsTapePanel').hide();
        $('#addNewPanel').hide();
        $('#newsTapeOldPanel').hide();
        $('#newsGroupsPanel').show();
    });

});







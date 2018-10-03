$(document).ready(function () {
    $('#forum').click(function () {
        line($(this));
        _hashState('#forum');
        $('#forumPanel').show();
        $('#addPanel').hide();
        $('#topicsPanel').hide();
        $('#topicPanel').hide();
    });

    $('#add').click(function () {
        line($(this));
        _hashState('#add');
        $('#forumPanel').hide();
        $('#addPanel').show();
        $('#topicsPanel').hide();
        $('#topicPanel').hide();
    });

    $('#topics').click(function () {
        line($(this));
        _hashState('#topics');
        $('#forumPanel').hide();
        $('#addPanel').hide();
        $('#topicsPanel').show();
        $('#topicPanel').hide();
    });
    $('#topic').click(function () {
        line($(this));
        _hashState('#topic');
        $('#forumPanel').hide();
        $('#addPanel').hide();
        $('#topicsPanel').hide();
        $('#topicPanel').show();
    });


});

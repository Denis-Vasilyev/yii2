jQuery(document).ready(function($){

    $('#vote').click(function () {
        line($(this));
        _hashState('#vote');
        $('#votePanel').show();
        $('#newVotePanel').hide();
    });

    $('#newVote').click(function () {
        line($(this));
        _hashState('#newVote');
        $('#votePanel').hide();
        $('#newVotePanel').show();
    });



});


$('#jsVoteShort').on('click', function () {
    $('.short-list').removeClass('hidden');
    $('.long-list').addClass('hidden');
});

$('#jsVoteLong').on('click', function () {
    $('.short-list').addClass('hidden');
    $('.long-list').removeClass('hidden');
});


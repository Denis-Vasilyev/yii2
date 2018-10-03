$(document).ready(function() {
    $('#infoReleases').click(function () {
        line($(this));
        _hashState('#infoReleases');
        $('#infoReleasesPanel').show();
        $('#profileRecomendationPanel').hide();
    });



});

jQuery(document).ready(function($){
    $('#MyProgress').click(function () {
        line($(this));
        _hashState('#MyProgress');
        $('#MyProgressPanel').show();
        $('#BonusPointsPanel').hide();
        $('#MyStatisticsPanel').hide();
        $('#ManualsPanel').hide();
        $('#OldPanel').hide();
    });
    $('#BonusPoints').click(function () {
        line($(this));
        _hashState('#BonusPoints');
        $('#MyProgressPanel').hide();
        $('#BonusPointsPanel').show();
        $('#MyStatisticsPanel').hide();
        $('#ManualsPanel').hide();
        $('#OldPanel').hide();
    });
    $('#MyStatistics').click(function () {
        line($(this));
        _hashState('#MyStatistics');
        $('#MyProgressPanel').hide();
        $('#BonusPointsPanel').hide();
        $('#MyStatisticsPanel').show();
        $('#ManualsPanel').hide();
        $('#OldPanel').hide();
    });

    $('#Manuals').click(function () {
        line($(this));
        _hashState('#Manuals');
        $('#MyProgressPanel').hide();
        $('#BonusPointsPanel').hide();
        $('#MyStatisticsPanel').hide();
        $('#ManualsPanel').show();
        $('#OldPanel').hide();
    });


    $('#Old').click(function () {
        line($(this));
        _hashState('#Old');
        $('#MyProgressPanel').hide();
        $('#BonusPointsPanel').hide();
        $('#MyStatisticsPanel').hide();
        $('#ManualsPanel').hide();
        $('#OldPanel').show();
    });


});

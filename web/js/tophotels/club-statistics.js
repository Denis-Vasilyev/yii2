jQuery(document).ready(function($){
    $('#statistic').click(function () {
        line($(this));
        _hashState('#statistic');
        $('#statisticPanel').show();
        // $('#tab2-panel').hide();
        // $('#tab3-panel').hide();
    });



});

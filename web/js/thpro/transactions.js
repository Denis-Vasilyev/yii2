$(document).ready(function() {
    $('#transactionsDay').click(function () {
        line($(this));
        _hashState('#transactionsDay');
        $('#transactionsDayPanel').show();
        $('#transactionsMonthPanel').hide();
    });

    $('#transactionsMonth').click(function () {
        line($(this));
        _hashState('#transactionsMonth');
        $('#transactionsDayPanel').hide();
        $('#transactionsMonthPanel').show();
    });


});

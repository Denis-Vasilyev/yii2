var w = $('#descrLogs').width();
var p = $('#descrLogs').position().left;
var el = $('.description-logs-line');
el.clearQueue().animate({
    left: p,
    width: w
}, 300);

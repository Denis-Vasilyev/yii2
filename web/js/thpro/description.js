var w = $('#description').width();
var p = $('#description').position().left;
var el = $('.description-line');
el.clearQueue().animate({
    left: p,
    width: w
}, 300);

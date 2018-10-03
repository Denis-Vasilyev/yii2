var w = $('#descrNear').width();
var p = $('#descrNear').position().left;
var el = $('.description-near-line');
el.clearQueue().animate({
    left: p,
    width: w
}, 300);

    var w = $('#descrObj').width();
    var p = $('#descrObj').position().left;
    var el = $('.description-infra-line');
    el.clearQueue().animate({
        left: p,
        width: w
    }, 300);

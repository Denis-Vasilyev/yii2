$('select[name="objType"]').SumoSelect();

var w = $('#descrObjEdit').width();
var p = $('#descrObjEdit').position().left;
var el = $('.description-infra-edit-line');
el.clearQueue().animate({
    left: p,
    width: w
}, 300);

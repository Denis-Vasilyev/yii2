$(document).ready(function() {

    var footerHeight = $('.footer').height();
    $('.page').css('padding-bottom', footerHeight );

});

$(window).resize(function(){
    var footerHeight = $('.footer').height();
    $('.page').css('padding-bottom', footerHeight );

});
$(document).ready(function() {
    $('#userTape').click(function () {
        line($(this));
        _hashState('#userTape');
        $('#userTapePanel').show();
        $('#userPhotoPanel').hide();
        $('#userActivityPanel').hide();
        $('#writeMsgPanel').hide();
        $('#oldPanel').hide();
    });
    $('#userPhoto').click(function () {
        line($(this));
        _hashState('#userPhoto');
        $('#userTapePanel').hide();
        $('#userPhotoPanel').show();
        $('#userActivityPanel').hide();
        $('#writeMsgPanel').hide();
        $('#oldPanel').hide();
    });

    $('#userActivity').click(function () {
        line($(this));
        _hashState('#userActivity');
        $('#userTapePanel').hide();
        $('#userPhotoPanel').show();
        $('#userActivityPanel').hide();
        $('#writeMsgPanel').hide();
        $('#oldPanel').hide();
    });

    $('#writeMsg').click(function () {
        line($(this));
        _hashState('#writeMsg');
        $('#userTapePanel').hide();
        $('#userPhotoPanel').hide();
        $('#userActivityPanel').hide();
        $('#writeMsgPanel').show();
        $('#oldPanel').hide();
    });
    $('#old').click(function () {
        line($(this));
        _hashState('#old');
        $('#userTapePanel').hide();
        $('#userPhotoPanel').hide();
        $('#userActivityPanel').hide();
        $('#writeMsgPanel').hide();
        $('#oldPanel').show();
    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.tourist-line');
        $('.tourist-tab').removeClass('active');
        obj.addClass('active');
        el.clearQueue().animate({
            left: p,
            width: w
        }, 300);
    };

    var _hashState = function(_hash) {
        if(history.pushState) {
            history.pushState(null, null, _hash);
        }
        else {
            location.hash = _hash;
        }
    };



    if(!window.location.hash)
        $('.tourist-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange',function(){
        $(window.location.hash).click();
    });
});

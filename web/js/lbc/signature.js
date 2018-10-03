$(document).ready(function () {
    $('#signature').click(function () {
        line($(this));
        _hashState('#contact');
        $('#signaturePanel').show();
        $('#editPanel').hide();
        $('#receiptPanel').hide();

    });
    $('#edit').click(function () {
        line($(this));
        _hashState('#edit');
        $('#signaturePanel').hide();
        $('#editPanel').show();
        $('#receiptPanel').hide();


    });
    $('#receipt').click(function () {
        line($(this));
        _hashState('#receipt');
        $('#signaturePanel').hide();
        $('#editPanel').hide();
        $('#receiptPanel').show();


    });


    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.signature-line ');
        $('.signature-tab').removeClass('active');
        obj.addClass('active');
        el.clearQueue().animate({
            left: p,
            width: w
        }, 300);
    };

    var _hashState = function (_hash) {
        if (history.pushState) {
            history.pushState(null, null, _hash);
        }
        else {
            location.hash = _hash;
        }
    };


    if (!window.location.hash)
        $('.periodic-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange', function () {
        $(window.location.hash).click();
    });
    $('.signature-form .fa-plus').on("click", function () {
        $(this).closest('div').append(' <div class="mt20 ml5"><label for="add-filed"></label><input id="add-filed" class="type-input" type="text"> </div>')
    });
    $('#comment').on("click", function () {
        $(this).addClass('active')
    });
});
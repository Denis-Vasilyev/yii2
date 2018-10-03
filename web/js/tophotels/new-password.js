jQuery(document).ready(function ($) {
    $('#new-pass').click(function () {
        line($(this));
        _hashState('#new-pass');
        $('#new-passPanel').show();
    });
});
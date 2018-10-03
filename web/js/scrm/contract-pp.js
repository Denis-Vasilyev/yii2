$(document).ready(function () {
    $('.show-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
});


$(document).on('click', '.close-modal', function () {
    $.magnificPopup.close();
});

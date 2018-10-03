jQuery(document).ready(function($) {
    $(function () {
        $('.client-mytour-pp').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
    });

    $(document).on('click', '.close-modal, .filter-pp__btn', function () {
        $.magnificPopup.close();
    });
});

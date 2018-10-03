jQuery(document).ready(function($) {
    $(function () {
        $('.effectivity-modal').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
        $('.effectivity-modal').on('click', function () {
            $('html').css('margin-right', '17px');
        });
        $(document).on('click', '.effectivity-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });
});
jQuery(document).ready(function($){
    $('#lookWithYou').click(function () {
        line($(this));
        _hashState('#lookWithYou');
        $('#lookWithYouPanel').show();
        $('#lookNoActivatePanel').hide();
    });

    $('#lookNoActivate').click(function () {
        line($(this));
        _hashState('#lookNoActivate');
        $('#lookWithYouPanel').hide();
        $('#lookNoActivatePanel').show();
    });


});



jQuery(document).ready(function($) {

    $('.js-option-change').on('click', function () {
        $('.option-there').toggle();
        $('.option-none').toggle();
    });

    $(function () {
        $('.popup-modal').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
        $('.popup-modal').on('click', function () {
            $('html').css('margin-right', '17px');
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });

});
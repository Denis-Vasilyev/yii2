jQuery(document).ready(function($){
    $('#leftbarOpen').on('click', function (e) {
        e.preventDefault();
        $('.leftbar').addClass('open');
        $('#overlay').show();
    });

    $('#leftbarClose').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.leftbar').removeClass('open');
        $('#overlay').hide();
    });




});



$(document).ready(function(){
    $('.header-topmenu__menu-btn').click(function(){
        $(this).toggleClass('active');
        $('.header-topmenu__menu, .header-nav').toggleClass('show');
        $('#overlay').show();
    });

    $('.js-tab-more').click(function(){
        $(this).addClass('active');
        $(this).find('.form-popup').show();
    });
    $('.tab .form-popup__list-item').click(function(e){
        $(this).closest('.js-tab-more').removeClass('active');
        $(this).closest('.form-popup').hide();
        e.preventDefault();
    });
    // $('.js-header-second').click(function(){
    //     $('.js-h1').hide();
    //     $('.js-h2').show();
    // });
    // $('.js-header-first').click(function(){
    //     $('.js-h2').hide();
    //     $('.js-h1').show();
    // });
    $('#overlay').click(function(){
        $(this).hide();
        $('.header-topmenu__menu-btn').removeClass('active');
        $('.header-topmenu__menu, .header-nav').removeClass('show');
    });
});

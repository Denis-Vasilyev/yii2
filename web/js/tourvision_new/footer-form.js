$(document).ready( function() {

    $('.form__input').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'));
        $(this).attr('placeholder','');
    });

    $('.form__input').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
    });

    $('.form__group_dynamic-label .form__input').keyup(function(){
        inpComplete($(this));
    });
    function inpComplete(obj) {
        if (obj.val() != '') {
            obj.addClass('complete');
        } else {
            obj.removeClass('complete');
        }
    }
});
$(document).ready(function () {
    $('.createGroup__column--l').on('click', '.createGroup__item', function () {
        $(this).closest('.createGroup__flex').find('.createGroup__column--r .createGroup__list').append($(this));
        $(this).closest('.createGroup__flex').find('.createGroup__column--r .createGroup__item-del').addClass('block');
    });
    $('.createGroup__column--r').on('click', '.createGroup__item', function () {
        $(this).closest('.createGroup__flex').find('.createGroup__column--l .createGroup__list').append($(this));
        $(this).closest('.createGroup__flex').find('.createGroup__column--l .createGroup__item-del').removeClass('block');
    });
});
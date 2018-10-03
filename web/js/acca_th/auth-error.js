$(document).ready(function () {

// открытие taba Группировка по пользователю
    var tabUsersGroup = $('#users-group');

    $('.auth-error-tb td:nth-child(3) a').on("click", function () {
        $(tabUsersGroup).show()
            .click();
    });

    $('#auth-error').on("click", function () {
        $(tabUsersGroup).hide()
    });
// end_открытие taba Группировка по пользователю


    $('.auth-error-tb .relative').hover(
        function () {
            $(this).find('.hint').show()
        },
        function () {
            $(this).find('.hint').hide()
        }
    );
    $('.auto-trash-tbl__del').on("click", function () {
        $(this).hide();
        $(this).closest('td').find('.auto-trash-tbl__cancel').show()
    });
    $('.auto-trash-tbl__cancel').on("click", function () {
        $(this).hide();
        $(this).closest('td').find('.auto-trash-tbl__del').show()
    });

});
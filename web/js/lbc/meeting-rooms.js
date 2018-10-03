$(function () {
    $('.meeting-rooms .datepicker-here').datepicker({
        // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
        minDate: new Date()
    });
    $('.meeting-rooms-cards__item:last-of-type').hover(
        function () {
            $(this).find('.actions').show();

        },
        function () {
            $(this).find('.actions').hide();
        });
    $('.meeting-rooms-cards .actions').on("click", function () {
        $(this).closest('.meeting-rooms-cards').hide()
    });

});
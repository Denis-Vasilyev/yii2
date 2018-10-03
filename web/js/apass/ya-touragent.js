$('.add-agent-wrap--site #switch').on('change', function () {
    if ($(this).prop('checked')) {
        $(this).closest('.add-agent-wrap--site').find('.switch-text').text('Сайт активен');
        $(this).closest('.add-agent-wrap--site').removeClass('red-bg');
        $(this).closest('.add-agent-wrap--site').addClass('green-bg')

    } else {
        $(this).closest('.add-agent-wrap--site').find('.switch-text').text('Сайт не активен');
        $(this).closest('.add-agent-wrap--site').removeClass('green-bg');
        $(this).closest('.add-agent-wrap--site').addClass('red-bg');
    }
});
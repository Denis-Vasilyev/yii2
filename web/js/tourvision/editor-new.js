$(document).ready( function () {

    // Уничтожить
    $('.js-editor-dropdown') .on('click', function () {
        $('.editor__dropdown').toggleClass('active');
    });

    // Цвет текста
    $('input[name="color"]').on('change', function () {
        if ($('#rbt-blue').prop('checked')) {
            $(this).closest('.editor__block').find('.editor__ta').css('color','#475669');
        }
        if ($('#rbt-red').prop('checked')) {
            $(this).closest('.editor__block').find('.editor__ta').css('color','#c40b00');
        }
    });

    // размер шрифта
    $('input[name="fsz"]').on('change', function () {
        if ($('#fsz15').prop('checked')) {
            $(this).closest('.editor__block').find('.editor__ta').css('font-size','15px');
        }
        if ($('#fsz21').prop('checked')) {
            $(this).closest('.editor__block').find('.editor__ta').css('font-size','21px');
        }
        if ($('#italic').prop('checked')) {
            $(this).closest('.editor__block').find('.editor__ta').css('font-style','italic');
        } else {
            $(this).closest('.editor__block').find('.editor__ta').css('font-style','normal');
        }
    });

    // Добавить ссылку
    $('.js-open-addlink').on('click', function () {
       $(this).toggleClass('active');
       $(this).next().toggleClass('active');
    });

    // Сохранить ссылку
    $('.js-send-link').on('click', function () {
        $(this).closest('.editor__section').find('.label-rbt-e').removeClass('active');
        $(this).closest('.link-dropdown').removeClass('active');
    });

    // Переход на следующий блок редактора
    $('.js-add-photo-msg').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.editor__block').hide();
        $(this).closest('.editor__block').next().show();
    });

    // замена белого блока на фото
    $('.js-change-photo').on('click', function (e) {
        e.preventDefault();
        $(this).prev().show();
        $(this).hide();
        $('.about-photo').show();
    });

    // Возврат на первый блок редактора
    $('.js-add-photo-msg-save').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.editor__block').hide();
        $(this).closest('.editor__block').prev().show();
        $('.editor__link-add').hide();
        $('.editor__link-add').next().show();
    });

// счетчик символов
    $('.editor__simbol-count').each(function () {
        var count = $(this).next().val().length;
        $(this).text(500 - count);

        $('.js-count').keyup(function () {
            var cnt = $(this).val();
            var count = 500 - cnt.length;
            $(this).prev().text(count);
        });
    });


    $('.js-kill').on('click', function (e) {
        e.preventDefault();
        $(this).next().show();
    });


    $('input[name="kill"]').on('change', function () {
        if ($(this).prop('checked')) {
            var text = $(this).next().find('.label-rbt-b-cnt').text();
            $(this).closest('.editor__block').find('.kil-val').text(text);
            $(this).closest('.editor__dropdown-kill').hide();

        }
    });



});
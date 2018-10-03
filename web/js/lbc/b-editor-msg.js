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


    $('.js-kill').on('click', function () {
        $(this).next().show();
    });


    $('input[name="type-kill"]').on('change', function () {
        if ($(this).prop('checked')) {
            var text = $(this).next().text();
            $(this).closest('.editorMsg__kill-block').find('.kil-val').text(text);
            $('.editorMsg__kill-dropdown').hide();

        }
    });



    $('.js-from').on('click', function () {
        $(this).closest('.edit-block__inp-block').find('.from__dropdown').toggleClass('active');
    });
});
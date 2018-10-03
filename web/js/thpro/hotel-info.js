$(document).ready(function () {
    $('#hotelCard').click(function () {
        line($(this));
        _hashState('#hotelCard');
        $('#hotelCardPanel').show();
        $('#translationsPanel').hide();
        $('#hotelPersonsPanel').hide();
    });
    $('#translations').click(function () {
        line($(this));
        _hashState('#translations');
        $('#hotelCardPanel').hide();
        $('#translationsPanel').show();
        $('#hotelPersonsPanel').hide();
    });
    $('#hotelPersons').click(function () {
        line($(this));
        _hashState('#hotelPersons');
        $('#hotelCardPanel').hide();
        $('#translationsPanel').hide();
        $('#hotelPersonsPanel').show();
    });


    $('.add-person-js').on('click', function () {
        $(this).closest('article').find('.form-add-person').show();
        $(this).closest('article').find('.filter-big').hide();
        $(this).closest('article').find('.filter-new__flex').hide();
        $(this).closest('.panel').find('.persons-hotels').hide()
    });
    $('.form-add-person .js-filter-big-close').on('click', function () {
        $(this).closest('article').find('.form-add-person').hide();
        $(this).closest('article').find('.filter-big').hide();
        $(this).closest('article').find('.filter-new__flex').show();
        $(this).closest('.panel').find('.persons-hotels').show()
    });
    $('.js-filter-big-close').on('click', function () {
        $(this).closest('article').find('.filter-new__inp').prop('checked', false);
    });
    $('.persons-hotels__bubble ').on('click', function () {
        $(this).closest('.persons-hotels').find('.persons-hotels__bottom').toggle();
    });


    $('.js-act-show-perosns ').on('click', function () {
        $('.persons-hotels__bottom').toggle();
    });
    $('.edit-block__row .js-act-multi-inp').on('click', function () {
        $(this).closest('.edit-block__row').after('<div class="edit-block__row"><div class="edit-block__cell"></div><div class="edit-block__cell"><div class="edit-block__inp-block  "><input id="phone" type="text" class="edit-block__inp "></div></div> </div>')

    });


    $('.js-act-multi-inp').on('click', function () {
        $(this).closest('.bth__row').after('<div class="bth__row"><div class="bth__cell"><label for="" class="bth__cnt  bold uppercase"></label></div><div class="bth__cell"><div class=" bth__inp-block "><input id="" type="text" class="bth__inp"></div></div></div>')

    });

    $('.edit-block__row  .js-act-multi-select').on('click', function () {
        $(this).closest('.edit-block__row').after('<div class="edit-block__row"><div class="edit-block__cell"><label for="tpass" class="bth__cnt"></label></div><div class="edit-block__cell"><div class="edit-block__inp-block "><select id="language" class="edit-block__inp "><option selected disabled>Выберите язык</option><option>Русский</option><option>English</option></select></div></div></div>')

    });


    $('.js-act-multi-select').on('click', function () {
        $(this).closest('.bth__row').after('<div class="bth__row"><div class="bth__cell"><label for="" class="bth__cnt  bold uppercase"></label></div><div class="bth__cell"><div class=" bth__inp-block pb0"><select id="" class="bth__inp"><option selected disabled>Выберите язык</option><option>Русский</option></select></div></div></div>')

    });
    $('.js-edit-info').on('click', function () {
        $(this).closest('.persons-hotels').find('.js-show-edit').show();
        $(this).closest('.persons-hotels__tbl').hide()
    });
    $('.js-close-edit').on('click', function () {
        $(this).closest('.js-show-edit').hide();
        $(this).closest('.persons-hotels').find('.persons-hotels__tbl').show()
    });
    $('.js-hide-select').on('click', function () {
        $(this).closest('.edit-block__cell').find('.js-show-select').hide();
        $('.persons-hotels__edit-type').show();
    });


    $('input[name="type-tpass"]').on('change', function () {

        $(this).closest('.edit-block__cell').find('.js-show-select').show();
        $(this).closest('.persons-hotels__edit-type').hide();

    });

    $('select[name="tpass-type-select"]').SumoSelect();
    $('select[name="departmn"]').SumoSelect();
    $('select[name="post"]').SumoSelect();


    $('.addPerson-success-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('.addPerson-success-pp').on('click', function () {
        $('html').css('margin-right', '17px');
    });

});


$(document).on('click', '.js-magnific-close', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
});




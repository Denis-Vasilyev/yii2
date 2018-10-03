$(document).ready(function () {
    $('#conversationTape').click(function () {
        line($(this));
        _hashState('#conversationTape');
        $('#conversationTapePanel').show();
        $('#calendarPanel').hide();
        $('#callsPanel').hide();
        $('#addPanel').hide();
        $('#statisticPanel').hide();
    });
    $('#calendar').click(function () {
        line($(this));
        _hashState('#calendar');
        $('#conversationTapePanel').hide();
        $('#calendarPanel').show();
        $('#callsPanel').hide();
        $('#addPanel').hide();
        $('#statisticPanel').hide();
    });

    $('#сalls').click(function () {
        line($(this));
        _hashState('#calls');
        $('#conversationTapePanel').hide();
        $('#calendarPanel').hide();
        $('#callsPanel').show();
        $('#addPanel').hide();
        $('#statisticPanel').hide();
    });
    $('#add').click(function () {
        line($(this));
        _hashState('#add');
        $('#conversationTapePanel').hide();
        $('#calendarPanel').hide();
        $('#callsPanel').hide();
        $('#addPanel').show();
        $('#statisticPanel').hide();
    });
    $('#statistic').click(function () {
        line($(this));
        _hashState('#statistic');
        $('#conversationTapePanel').hide();
        $('#calendarPanel').hide();
        $('#callsPanel').hide();
        $('#addPanel').hide();
        $('#statisticPanel').show();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.conversation-tape-line ');
        $('.conversation-tape-tab').removeClass('active');
        obj.addClass('active');
        el.clearQueue().animate({
            left: p,
            width: w
        }, 300);
    };

    var _hashState = function (_hash) {
        if (history.pushState) {
            history.pushState(null, null, _hash);
        }
        else {
            location.hash = _hash;
        }
    };


    if (!window.location.hash)
        $('.periodic-tab.active').first().click();
    else
        $(window.location.hash).click();

    $(window).bind('hashchange', function () {
        $(window.location.hash).click();
    });

    function createSelectize(selector) {
        var $selectAddPrsn = $(selector).selectize({
            render: {
                option: function (data, escape) {
                    return '<div class="selectize__user-form"><div class="selectize__user-form__ava"><span>' +
                        '<img width="35" height="35" src="' + data.imgPath + '" alt=""></span></div>' +
                        '<div class="selectize__user-form__info"><span class="selectize__user-form__info-link">' + data.userName + '</span></div></div>'
                }
            },
            searchField: ["value"],
            onChange: function (val) {
                var data = this.options[val];
                if (!data) return;
                var block = '<div class="selectize-dropdown__user-block"><div class="selectize-dropdown__user-ava"><span>' +
                    '<img width="35" height="35" src="' + data.imgPath + '" alt=""></span></div>' +
                    '<div class="selectize-dropdown__user-info"><a href="#" class="bold ">' + data.userName + '</a>' +
                    '<a href="#" class="ml20  fz12">Привязать TPASS</a></div></div>';
                $('.add-choice-prsn.dropdowm-block').show().html(block);
            },
            onDelete: function () {
                $selectizeAddPrsn.clearOptions();
            },
            onFocus: function () {
                $('.selectize-input').focus().addClass('selectize-input-focus');
            },
            onBlur: function () {
                $('.selectize-input').focus().removeClass('selectize-input-focus');
            },
            options: [
                {
                    value: "1",
                    text: "Okhapkina Irina",
                    imgPath: "/images/ava41.jpg",
                    userName: "Okhapkina Irina"

                },
                {
                    value: "2",
                    text: "Okhapkina Irina",
                    imgPath: "/images/ava41.jpg",
                    userName: "Okhapkina Irina"
                },
                {
                    value: "3",
                    text: "Okhapkina Irina",
                    imgPath: "/images/ava41.jpg",
                    userName: "Okhapkina Irina"
                }
            ]
        });
        var $selectizeAddPrsn = $selectAddPrsn[0].selectize;
    }


    createSelectize("#add-prsncontTransfer");
    createSelectize("#add-contMyword");
    createSelectize("#add-contMail");

    $('#add-prsncontTransfer').on("change", function () {
        $(this).closest('fieldset').addClass('section-grey')
    });
    $('#add-contMyword').on("change", function () {
        $(this).closest('fieldset').addClass('section-grey')
    });
    $('#add-contMail').on("change", function () {
        $(this).closest('fieldset').addClass('section-grey')
    });

//Таб добавить Тут показываем разные формы в зависимости от того что выбрали
    $('#add-cont').on("change", function () {
        var option = $(this).val();
        if (option == 'transfer') {
            $('.add-contTransfer').show();
            $('.add-contMyword').hide();
            $('.add-contMail').hide();
        }
        if (option == 'my-word') {
            $('.add-contMyword').show();
            $('.add-contTransfer').hide();
            $('.add-contMail').hide();
        }
        if (option == 'mail') {
            $('.add-contMail').show();
            $('.add-contMyword').hide();
            $('.add-contTransfer').hide();
        }
        if (option == 'call') {
            $('.add-contMail').show();
            $('.add-contMyword').hide();
            $('.add-contTransfer').hide();
        }
        if (option == 'add-contNone') {

        } else {
            $(this).closest('div').addClass('section-grey')
        }
    });
    //end_Таб добавить Тут показываем разные формы в зависимости от того что выбрали


    $('.sliding-area').on("click", function () {
        $(this).animate({height: "53px"}, 500);
    });
    $('.type-service-wrap .form__plus').on("click", function () {
        $(this).closest('.type-service-wrap').append('<div class="mt10"> <label for="type-service"></label> <select id="type-service"> <option value="type-service1">API TopHotels</option> <option value="type-service2">PRO-турагент</option> <option value="type-service3">TH баннерная реклама</option> <option value="type-service4">TourClient</option> </select> <input placeholder="Следующий контакт" data-timepicker="true" type="text" class="datepicker-here type-input"> </div>')

        return false
    });
    $('.add-agent-form.add-contMail .box-radio #mailpurpose1').on("click", function () {
        $(this).closest('form').find('.purpose1-select').show();
        $(this).closest('form').find('.purpose2-select').hide();
        $(this).closest('form').find('.result-block').find('.operation-type__title').text('Результат контакта');
        $(this).closest('form').find('.result-block').removeClass('mb0');

    });
    $('.add-agent-form.add-contMail .box-radio #mailpurpose2').on("click", function () {
        $(this).closest('form').find('.purpose2-select').show();
        $(this).closest('form').find('.purpose1-select').hide();
        $(this).closest('form').find('.result-block').find('.operation-type__title').text('Результат консультации');
        $(this).closest('form').find('.result-block').removeClass('mb0');

    });
    $('.type-service-wrap input').datepicker({
        minDate: new Date()
    });


    $('.contacts tr').hover(function () {
            $(this).find('.calls__play').show()
        },
        function () {
            $(this).find('.calls__play').hide()
        }
    );

});
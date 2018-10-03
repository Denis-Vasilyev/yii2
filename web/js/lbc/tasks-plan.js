$(function () {
    $('#tasks-plan').click(function () {
        line($(this));
        _hashState('#tasks-plan');
        $('#tasks-planPanel').show();
        $('#tasks-hangsPanel').hide();
        $('#tasks-donePanel').hide();
        $('#add-tasksPanel').hide();
        $('#oldPanel').hide();
        $('#tasks-detailPanel').hide();

    });
    $('#tasks-hangs').click(function () {
        line($(this));
        _hashState('#tasks-hangs');
        $('#tasks-tasks-planPanel').hide();
        $('#tasks-hangsPanel').show();
        $('#tasks-donePanel').hide();
        $('#add-tasksPanel').hide();
        $('#oldPanel').hide();
        $('#tasks-detailPanel').hide();

    });
    $('#tasks-done').click(function () {
        line($(this));
        _hashState('#tasks-done');
        $('#tasks-planPanel').hide();
        $('#tasks-hangsPanel').hide();
        $('#tasks-donePanel').show();
        $('#add-tasksPanel').hide();
        $('#oldPanel').hide();
        $('#tasks-detailPanel').hide();

    });
    $('#add-tasks').click(function () {
        line($(this));
        _hashState('#add-tasks');
        $('#tasks-planPanel').hide();
        $('#tasks-hangsPanel').hide();
        $('#tasks-donePanel').hide();
        $('#add-tasksPanel').show();
        $('#oldPanel').hide();
        $('#tasks-detailPanel').hide();

    });




    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.line ');
        $('.tab').removeClass('active');
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


    var sortable = $("#sortable-plan");


    $('.switch-sortable').on('click', function () {
        if ($(this).is('.switch-active')) {

            $(this).removeClass('switch-active');
            $(sortable).sortable({
                disabled: true,
                containment: '.tasks-plans-wrap'
            });
        } else {

            $(this).addClass('switch-active');
            $(sortable).sortable({
                disabled: false,
                containment: '.tasks-plans-wrap'
            });
        }
    });

    $('.add-task-form textarea').on('click', function () {
        $(this).addClass('active')
    });


    $('.relative').hover(
        function () {
            $(this).find('.hint').show();

        },
        function () {
            $(this).find('.hint').hide();
        }
    );


    $('.tasks-plans-tbl__date').hover(
        function () {
            $(this).find('.tasks-plans-tbl-act').show();
            $(this).closest('.tasks-plans-tbl__date').find('.relative').hide();

        },
        function () {
            $(this).find('.tasks-plans-tbl-act').hide();
            $(this).closest('.tasks-plans-tbl__date').find('.relative').show();
        }
    );


    $('.filter__inp-select-item button').on('click', function () {
        $(this).toggleClass('active')
    });


    $('.tasks-plan-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });

    $('.clockpicker').clockpicker({
        autoclose: true,
        placement: 'top',
        align: 'left'
    });


    $('.add-wrap').on('click', '.user-block__ava', function () {
        var $parent = $(this).parent();
        $parent.closest('.dropdown-block--guarantor2').hide();
        selectizeQuarantor2.clearOptions();
        $parent.remove();
        $selectQuarantor2.next().show();
    });

    $('.task-txt__crossroads').on('click', function () {
        $(this).closest('form').find('.add-task-form__pp').show()
    });
    $('.add-task-form__pp-top__close').on('click', function () {
        $(this).closest('form').find('.add-task-form__pp').hide()
    });


//детали
    $('.detail-plan__task-top__right ').hover(
        function () {
            $(this).find('.detail-plan__actions').show();

        },
        function () {
            $(this).find('.detail-plan__actions').hide();
        }
    );




    $('.js-filter-open').on('click', function () {
        $(this).closest('.panel').find('.filter-small').hide();
    });
    $('.js-filter-big-close').on('click', function () {
        $(this).closest('.panel').find('.filter-small').show();
    });



    $('.add-wrap__tegs .add-wrap__teg').on('click', function () {
        var project = $(this).text();
        $('.selectize-input > input').val(project)
    });


    $('.detail-plan__colors .cbx-color ').hover(
        function () {
            $(this).find('.hint').show();

        },
        function () {
            $(this).find('.hint').hide();
        }
    );


    $('.detail-plan__closure .js-close').on('click', function () {
        $(this).closest('.detail-plan__closure.form1').hide();
        return false
    });
    $('.tasks-tbl-short td:nth-child(2)').on('click', function () {
        window.open('http://ls.spage.ru/lbc/tasks-plan-detail','_blank')
    });

    //end_выбор проекта


    $('.add-wrap__add-plus-1').on('click', function () {
        $('.select-wrapper-1').show();
        $(this).hide()
    });
    $('.add-wrap__add-plus-2').on('click', function () {
        $('.select-wrapper-2').show();
        $(this).hide()
    });



//выбор проекта
    var $selectProject = $('#project').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-form">' + data.text + '</div>'
            }
        },
        searchField: ["value"],
        placeholder: "Введите проект",
        onType: function (str) {
            //here load logic
            selectizeProject.clearOptions();

            if (str !== "" && "tophotels".startsWith(str.toLowerCase())) {
                selectizeProject.addOption({
                    value: "tophotels",
                    text: "Tophotels"
                });
            }

            selectizeProject.refreshOptions();
        },
        onDelete: function () {
            selectizeProject.clearOptions();
        }
    });
    var selectizeProject = $selectProject[0].selectize;



//выбор исполнителя
    var $selectQuarantor = $('#guarantor').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-form"><div class="user-form__ava"><span>' +
                    '<img class="" width="35" height="35" src="' + data.imgPath + '" alt=""></span></div>' +
                    '<div class="user-form__info"><a  href="#" class="fz14 bold">' + data.text + '</a></div> '
            }
        },
        searchField: ["text"],
        placeholder: "Введите фамилию или LBC ID",
        onType: function (str) {
            //here load logic
            selectizeQuarantor.clearOptions();

            if (str !== "" && "иванов иван".startsWith(str.toLowerCase())) {
                selectizeQuarantor.addOption({
                    value: "user1",
                    text: "Иванов Иван",
                    type: "ИСПОЛНИТЕЛЬ",
                    imgPath: "/images/bth-ava.png"
                });
            }

            selectizeQuarantor.refreshOptions();
        },

        onChange: function (val) {
            var data = this.options[val];
            if (!data) return;

            var block = '<div id="' + val + '" class="user-block d-ib"><div class="user-block__ava"><div class="user-block__cross"></div><span>' +
                '<img width="36" height="36" src="' + data.imgPath + '" alt=""></span></div>' +
                '<div class="user-block__info"><a  href="#" class="fz14 bold">' + data.text + '</a><div>' + data.type + '</div></div></div></div>';
            $('.dropdown-block--guarantor').show().html(block);
            $selectQuarantor.next().hide();
        },
        onDelete: function () {
            selectizeQuarantor.clearOptions();
        }

    });

    var selectizeQuarantor = $selectQuarantor[0].selectize;
//end_выбор исполнителя

    $('.add-wrap').on('click', '.user-block__ava', function () {
        var $parent = $(this).parent();
        $parent.closest('.dropdown-block--guarantor').hide();
        selectizeQuarantor.clearOptions();
        $parent.remove();
        $selectQuarantor.next().show();
    });

//выбор постановщика
    var $selectQuarantor2 = $('#guarantor2').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-form"><div class="user-form__ava"><span>' +
                    '<img  width="35" height="35" src="' + data.imgPath + '" alt=""></span></div>' +
                    '<div class="user-form__info"><a  href="#" class="fz14 bold">' + data.text + '</a></div> '
            }
        },
        searchField: ["text"],
        placeholder: "Введите фамилию или LBC ID",
        onType: function (str) {
            //here load logic
            selectizeQuarantor2.clearOptions();

            if (str !== "" && "иванов иван".startsWith(str.toLowerCase())) {
                selectizeQuarantor2.addOption({
                    value: "user1",
                    text: "Иванов Иван",
                    type: "ПОСТАНОВЩИК",
                    imgPath: "/images/bth-ava.png"
                });
            }

            selectizeQuarantor2.refreshOptions();
        },

        onChange: function (val) {
            var data = this.options[val];
            if (!data) return;

            var block = '<div id="' + val + '" class="user-block d-ib"><div class="user-block__ava user-block__ava-2"><div class="user-block__cross"></div><span>' +
                '<img width="36" height="36" src="' + data.imgPath + '" alt=""></span></div>' +
                '<div class="user-block__info"><a  href="#" class="fz14 bold">' + data.text + '</a><div>' + data.type + '</div></div></div></div>';
            $('.dropdown-block--guarantor2').show().html(block);
            $('#guarantor2').next().hide();
        },
        onDelete: function () {
            selectizeQuarantor2.clearOptions();
        }

    });

    var selectizeQuarantor2 = $selectQuarantor2[0].selectize;
//end_выбор постановщика

    $('.datepicker-here').datepicker({});
    $('.datepicker-here').data('datepicker').selectDate(new Date);



});
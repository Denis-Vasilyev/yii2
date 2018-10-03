$(document).ready(function () {
    $('#active-agents').click(function () {
        line($(this));
        _hashState('#active-agents');
        $('#active-agentsPanel').show();
        $('#log-activityPanel').hide();
        $('#lostPanel').hide();
        $('#cityPanel').hide();
        $('#statisticPanel').hide();
        $('#addPanel').hide();

    });
    $('#log-activity').click(function () {
        line($(this));
        _hashState('#log-activity');
        $('#active-agentsPanel').hide();
        $('#log-activityPanel').show();
        $('#lostPanel').hide();
        $('#cityPanel').hide();
        $('#statisticPanel').hide();
        $('#addPanel').hide();

    });
    $('#lost').click(function () {
        line($(this));
        _hashState('#lost');
        $('#active-agentsPanel').hide();
        $('#log-activityPanel').hide();
        $('#lostPanel').show();
        $('#cityPanel').hide();
        $('#statisticPanel').hide();
        $('#addPanel').hide();

    });
    $('#city').click(function () {
        line($(this));
        _hashState('#city');
        $('#active-agentsPanel').hide();
        $('#log-activityPanel').hide();
        $('#lostPanel').hide();
        $('#cityPanel').show();
        $('#statisticPanel').hide();
        $('#addPanel').hide();
    });
    $('#statistic').click(function () {
        line($(this));
        _hashState('#statistic');
        $('#active-agentsPanel').hide();
        $('#log-activityPanel').hide();
        $('#lostPanel').hide();
        $('#cityPanel').hide();
        $('#statisticPanel').show();
        $('#addPanel').hide();
    });
    $('#add').click(function () {
        line($(this));
        _hashState('#add');
        $('#active-agentsPanel').hide();
        $('#log-activityPanel').hide();
        $('#lostPanel').hide();
        $('#cityPanel').hide();
        $('#statisticPanel').hide();
        $('#addPanel').show();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.pro-touragent-line ');
        $('.pro-touragent-tab').removeClass('active');
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

    $('.user-block').hover(
        function () {
            $(this).find('.hint').show()
        },
        function () {
            $(this).find('.hint').hide()
        }
    );


    var $select = $('#id-client').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-form"><div class="user-form__ava"><span>' +
                    '<img width="30" height="30" src="' + data.imgPath + '" alt=""></span></div>' +
                    '<div class="user-form__info"><span class="user-form__info-link">' + data.userName + '</span>' +
                    '<p class="user-form__info-type">' + data.userType + '</p> '
            }
        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectize.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                selectize.addOption({
                    value: "1234",
                    text: "Okhapkina Irina",
                    imgPath: "/images/bth-ava.png",
                    userName: "Okhapkina Irina",
                    userType: "Touragent",
                    userCity: "Kirov",
                    email: "trewel.servis@yandex.ru"
                });
            }

            selectize.refreshOptions();
        },

        onChange: function (val) {
            var data = this.options[val];
            var block = '<div class="user-block"><div class="user-block__ava"><span>' +
                '<img width="50" height="50" src="' + data.imgPath + '" alt=""></span></div>' +
                '<div class="user-block__info"><span class="bold-link">' + data.userName + '</span>' +
                '<p class="user-block__info-place">' + data.userType + ' , ' + data.userCity + '</p> ' +
                '<p class="user-block__info-contact">' + data.email + '</p></div></div>';
            $('.id-client__selected').show().html(block);
        },
        onDelete: function () {
            selectize.clearOptions();
        }
    });

    var selectize = $select[0].selectize;


    $('#id-client').on("change", function () {
        $('.list-service-box').show()

    });
    $('.list-service div span:first-child').on("click", function () {
        $('.type-service, .operation-type').show();
        $(this).closest('.list-service-box').hide()

    });

    $('.menu-switch').on('click', function () {
        $('.leftbar, .rightbar').show();
    });

    $('.leftbar-close').on('click', function () {
        $('.leftbar, .rightbar').hide().fadeOut();
    });

    var plusClickCount = 0;

    $('.chart-job .fa-plus').on('click', function () {
        plusClickCount++;
        if (plusClickCount == 1) {
            $('.monday').text('Понедельник - четверг');
            $('.chart-job').find('.hidden.friday').removeClass('hidden').addClass('block');
        }

        if (plusClickCount == 2) {
            $('.monday').text('Понедельник');
            $('.chart-job').find('.hidden').removeClass('hidden').addClass('block');
        }

    });

    var todayDate = $('#data-activation').datepicker({
        // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
        minDate: new Date()
    }).data('datepicker');


    $('.data-activation__today').on('click', function () {
        todayDate.selectDate(new Date());
    });

    $('.box-radio.show-fieldset-data').on('click', function () {
        if ($(this).find('input').prop('checked')) {
            $('.add-agent-wrap.choice-data').removeClass('hide')
        }
    });

    $('.box-radio.hide-fieldset-data').on('click', function () {
        if ($(this).find('input').prop('checked')) {
            $('.add-agent-wrap.choice-data, .add-agent-wrap.edit-agent').addClass('hide');
        }
    });

    $('.add-agent-wrap.choice-data .datepicker-here:nth-child(2)').on('click', function () {
        $('.add-agent-wrap.edit-agent, .form-btn').removeClass('hide');
    });

    $('.term-input i').on('click', function () {
        $("#term-calendar").data('datepicker').show()
    });
    $('.add-agent-wrap textarea').on('click', function () {
        $(this).animate({
            height: '58px'
        })
    });
    $(function () {
        $('.box-radio').hover(
            function () {
                $(this).find('.hint').show()
            },
            function () {
                $(this).find('.hint').hide()
            }
        );
    });

});
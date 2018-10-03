$(document).ready(function () {
    $('#summary-by-projects').click(function () {
        line($(this));
        _hashState('#summary-by-projects');
        $('#summary-by-projectsPanel').show();
        $('#standardsPanel').hide();
        $('#addPanel').hide();
        $('#by-projectPanel').hide();
        $('#by-project-standardsPanel').hide();
    });

    $('#standards').click(function () {
        line($(this));
        _hashState('#standards');
        $('#summary-by-projectsPanel').hide();
        $('#standardsPanel').show();
        $('#addPanel').hide();
        $('#by-projectPanel').hide();
        $('#by-project-standardsPanel').hide();
    });
    $('#by-project-standards').click(function () {
        line($(this));
        _hashState('#by-project-standards');
        $('#summary-by-projectsPanel').hide();
        $('#standardsPanel').hide();
        $('#addPanel').hide();
        $('#by-projectPanel').hide();
        $('#by-project-standardsPanel').show();
    });

    $('#by-project').click(function () {
        line($(this));
        _hashState('#by-project');
        $('#summary-by-projectsPanel').hide();
        $('#standardsPanel').hide();
        $('#addPanel').hide();
        $('#by-project-standardsPanel').hide();
        $('#by-projectPanel').show();
    });
    $('#add').click(function () {
        line($(this));
        _hashState('#add');
        $('#summary-by-projectsPanel').hide();
        $('#standardsPanel').hide();
        $('#addPanel').hide();
        $('#by-projectPanel').hide();
        $('#by-project-standardsPanel').hide();
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


// открытие taba По проекту
    var tabHide = $('#by-project');

    $('.log td:nth-child(2) a').on('click', function () {
        var nameProject = $(this).text();
        tabHide.show().text(nameProject).click();
    });

    var tabHide3 = $('#by-project-standards');
    $('.autotest-page td:nth-child(2)').on('click', function () {
        var nameProject = $(this).text();
        tabHide3.show().text(nameProject).click();
    });

//selectize  Выбрать ответственного
    var $selectResponsible = $('#autotest-responsible').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="selectize__user-form"><div class="selectize__user-form__ava"><span>' +
                    '<img width="30" height="30" src="' + data.imgPath + '" alt=""></span></div>' +
                    '<div class="selectize__user-form__info"><span class="selectize__user-form__info-link">' + data.userName + '</span>' +
                    '<p class="selectize__user-form__info-type">' + data.userType + '</p> '
            }
        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            $selectizeResponsible.clearOptions();

            if (str !== "" && "иванов".startsWith(str.toLowerCase())) {
                $selectizeResponsible.addOption({
                    value: "иванов",
                    text: "Иванов Иван",
                    imgPath: "images/ava38.png",
                    userName: "Иванов Иван",
                    userType: "Разработчик PHP"
                });
            }

            $selectizeResponsible.refreshOptions();
        },

        onChange: function (val) {
            var data = this.options[val];
            if (!data) return;
            var block = '<div class="selectize-dropdown__user-block"><div class="selectize-dropdown__user-ava"><span>' +
                '<img width="60" height="60" src="' + data.imgPath + '" alt=""></span></div>' +
                '<div class="selectize-dropdown__user-info"><a href="#" class="bold">' + data.userName + '</a>' +
                '<p class="selectize-dropdown__user-info-place">' + data.userType + '</p></div></div>';
            $('.responsible.dropdowm-block').show().html(block);
        },
        onDelete: function () {
            $selectizeResponsible.clearOptions();
        },
        onFocus: function () {
            $('.selectize-input').focus().addClass('selectize-input-focus');
        },
        onBlur: function () {
            $('.selectize-input').focus().removeClass('selectize-input-focus');
        }
    });
    var $selectizeResponsible = $selectResponsible [0].selectize;
    //end__selectize   Выбрать ответственного


});

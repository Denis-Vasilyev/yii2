$(document).ready(function () {
    $('#developers-news').click(function () {
        line($(this));
        _hashState('#developers-news');
        $('#developers-newsPanel').show();
        $('#release-logPanel').hide();
        $('#projectsPanel').hide();
        $('#planPanel').hide();
        $('#Panel').hide();

    });
    $('#release-log').click(function () {
        line($(this));
        _hashState('#release-log');
        $('#developers-newsPanel').hide();
        $('#release-logPanel').show();
        $('#projectsPanel').hide();
        $('#planPanel').hide();
        $('#Panel').hide();

    });
    $('#projects').click(function () {
        line($(this));
        _hashState('#projects');
        $('#developers-newsPanel').hide();
        $('#release-logPanel').hide();
        $('#projectsPanel').show();
        $('#planPanel').hide();
        $('#Panel').hide();
    });
    $('#plan').click(function () {
        line($(this));
        _hashState('#plan');
        $('#developers-newsPanel').hide();
        $('#release-logPanel').hide();
        $('#projectsPanel').hide();
        $('#planPanel').show();
        $('#Panel').hide();
    });
    $('#stat').click(function () {
        line($(this));
        _hashState('#stat');
        $('#developers-newsPanel').hide();
        $('#release-logPanel').hide();
        $('#projectsPanel').hide();
        $('#planPanel').hide();
        $('#Panel').show();
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



    $('.card-developing__edit').on('click', function () {
        $(this).closest('.card-developing__inner-wrap').find('.card-developing__editor').show();
        $(this).closest('.card-developing__inner-wrap').find('.card-developing__inner').hide();
    });

    $('.cards-developing .card-developing__editor textarea').on('click', function () {
        $(this).addClass('active')
    });

    $('.card-developing__editor button').on('click', function () {
        $(this).closest('.card-developing__inner-wrap').find('.card-developing__editor').hide();
        $(this).closest('.card-developing__inner-wrap').find('.card-developing__inner').show();
    });

    $('.card-developing__inner-top-l').hover(
        function () {
            $(this).find('.card-developing__edit').show();
            $(this).find('div').hide()
        },
        function () {
            $(this).find('.card-developing__edit').hide();
            $(this).find('div').show()
        }
    );

    $('.projects-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });

    var $selectExecutor = $('#executor').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-form"><div class="user-form__ava"><span>' +
                    '<img width="40" height="40" src="' + data.imgPath + '" alt=""></span></div>' +
                    '<div class="user-form__info"><span class="user-form__info-link">' + data.userName + '</span>' +
                    '<div class="fz13">' + data.userType + '</div> '
            }
        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeExecutor.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                selectizeExecutor.addOption({
                    value: "1234",
                    text: "Okhapkina Irina",
                    imgPath: "/images/bth-ava.png",
                    userName: "Okhapkina Irina",
                    userType: "Менеджер"
                });
            }

            selectizeExecutor.refreshOptions();
        },

        onDelete: function () {
            selectizeExecutor.clearOptions();
        }
    });

    var selectizeExecutor = $selectExecutor[0].selectize;



    var $selectInitiator = $('#initiator').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-form"><div class="user-form__ava"><span>' +
                    '<img width="40" height="40" src="' + data.imgPath + '" alt=""></span></div>' +
                    '<div class="user-form__info"><span class="user-form__info-link">' + data.userName + '</span>' +
                    '<div class="fz13">' + data.userType + '</div> '
            }
        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeInitiator.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                selectizeInitiator.addOption({
                    value: "1234",
                    text: "Okhapkina Irina",
                    imgPath: "/images/bth-ava.png",
                    userName: "Okhapkina Irina",
                    userType: "Менеджер"
                });
            }

            selectizeInitiator.refreshOptions();
        },

        onDelete: function () {
            selectizeInitiator.clearOptions();
        }
    });

    var selectizeInitiator= $selectInitiator[0].selectize;

    var $selectResponsible = $('#responsible').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-form"><div class="user-form__ava"><span>' +
                    '<img width="40" height="40" src="' + data.imgPath + '" alt=""></span></div>' +
                    '<div class="user-form__info"><span class="user-form__info-link">' + data.userName + '</span>' +
                    '<div class="fz13">' + data.userType + '</div> '
            }
        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeResponsible.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                selectizeResponsible.addOption({
                    value: "1234",
                    text: "Okhapkina Irina",
                    imgPath: "/images/bth-ava.png",
                    userName: "Okhapkina Irina",
                    userType: "Менеджер"
                });
            }

            selectizeResponsible.refreshOptions();
        },

        onDelete: function () {
            selectizeResponsible.clearOptions();
        }
    });

    var selectizeResponsible= $selectResponsible[0].selectize;



    var $selectProject = $('#project').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-form">' + data.text +'</div> '
            }
        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeProject.clearOptions();

            if (str !== "" && "lbc".startsWith(str.toLowerCase())) {
                selectizeProject.addOption({
                    value: "lbc",
                    text: "LBC"
                });
            }

            selectizeProject.refreshOptions();
        },

        onDelete: function () {
            selectizeProject.clearOptions();
        }
    });

    var selectizeProject= $selectProject[0].selectize;

    // big-filter
    $('.js-filter-open').on('click', function (e) {
        e.preventDefault();
    });
    $('.js-filter-big-close').on('click', function (e) {
        e.preventDefault();
    });



});
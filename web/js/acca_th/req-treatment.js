$(document).ready(function () {

    $('#new').click(function () {
        line($(this));
        _hashState('#new');
        $('#newPanel').show();
        $('#oldPanel').hide();
        $('#allPanel').hide();
        $('#statPanel').hide();
    });
    $('#old').click(function () {
        line($(this));
        _hashState('#old');
        $('#newPanel').hide();
        $('#oldPanel').show();
        $('#allPanel').hide();
        $('#statPanel').hide();
    });
    $('#all').click(function () {
        line($(this));
        _hashState('#all');
        $('#newPanel').hide();
        $('#oldPanel').hide();
        $('#allPanel').show();
        $('#statPanel').hide();
    });
    $('#stat').click(function () {
        line($(this));
        _hashState('#stat');
        $('#newPanel').hide();
        $('#oldPanel').hide();
        $('#allPanel').hide();
        $('#statPanel').show();
    });

    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.lsfw-line');
        $('.lsfw-tab').removeClass('active');
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


    $('.js-open-more').on('click', function () {
        $(this).prev().toggleClass('active');
    });
    $('.rate-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('.rate-pp').on('click', function () {
        $('html').css('margin-right', '0');
    });


    $('input[name="f-status"]').on('change', function () {
        if ($('#f-status2').prop('checked')) {
            $('.js-show-1').show();
        }
        if ($('#f-status4').prop('checked')) {
            $('.js-show-2').show();
        }
    });
    $('input[name="mode"]').on('change', function () {
        if ($('#mode-1').prop('checked')) {
            $('.req-tbl-day').show();
            $('.js-act-hiden').hide();
            $('.filter__r-btn.fsz21').hide();
            $('.filter__r--ttl').show()
        } else {
            $('.req-tbl-day').hide();
            $('.js-act-hiden').show();
            $('.filter__r-btn.fsz21').show();
            $('.filter__r--ttl').hide()


        }

    });


    $('.appoint-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('.appoint-pp').on('click', function () {
        $('html').css('margin-right', '0');
    });

    var $select = $('#appoint-select').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-form"><div class="user-form__ava"><span>' +
                    '<img width="35" height="35" src="' + data.imgPath + '" alt=""></span>' +
                    '<div class="user-form__info ml5"><span class="user-form__info-link normal fz15">' + data.userName + '</span></div></div> '
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
                    email: "trewel.servis@yandex.ru"
                });
            }

            selectize.refreshOptions();
        },


        onDelete: function () {
            selectize.clearOptions();
        }
    });

    var selectize = $select[0].selectize;

});


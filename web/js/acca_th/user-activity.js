$(document).ready(function () {
    $('#user-activity').click(function () {
        line($(this));
        _hashState('#user-activity');
        $('#user-activityPanel').show();
        $('#log-activityPanel').hide();
        $('#addPanel').hide();
    });
    $('#log-activity').click(function () {
        line($(this));
        _hashState('#log-activity');
        $('#user-activityPanel').hide();
        $('#log-activityPanel').show();
        $('#addPanel').hide();
    });
    $('#add').click(function () {
        line($(this));
        _hashState('#add');
        $('#user-activityPanel').hide();
        $('#log-activityPanel').hide();
        $('#addPanel').show();
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

    //selectize//

    function createSelect(selector, options) {
        var $el = $(selector);
        var defOptions = {
            render: {
                option: function (data, escape) {
                    return '<div class="user-block__info"><span class="bold-link">' + data.text + '</span>' +
                        '<p class="user-block__info-place">' + data.hotelID + ' , ' + data.hotelLocation + '</p> ' + '</div>'
                },

                item: function (data, escape) {
                    return '<p class="user-form__info-type">' + data.text + '</p> '
                }

            },
            searchField: ["value"],
            onType: function (str) {
                //here load logic
                selectize.clearOptions();

                if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                    selectize.addOption({
                        value: "1234",
                        text: "Японская водолечебница (Dalian Kerren Internatianal Hot Spring Club) 4*",
                        hotelID: "ID 123456",
                        hotelLocation: "Турция, Белек"

                    });
                }

                selectize.refreshOptions();
            },


            onDelete: function () {
                selectize.clearOptions();
            }
        };

        if (options) defOptions = $.extend(defOptions, options);

        var $select = $(selector).selectize(defOptions);
        var selectize = $select[0].selectize;
        return selectize;
    }


    var firstSelectize = createSelect("#id-hotel");
//end_selectize//

    var hotelsCount = 0;

    $('.log-act-add-hotel').on('click', function () {
        hotelsCount++;
        var id = "th-id-" + hotelsCount;
        $(this).closest('div').after('<div class="hotel-select-wrap"><label for="' + id + '"></label><select class="input-take" id="' + id + '" required></select></div>');
        createSelect("#" + id);
    });
});

jQuery(document).ready(function($) {
    $(function () {
        $('.user-activity-pp').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
    });

    $(document).on('click', '.close-modal, .filter-pp__btn', function () {
        $.magnificPopup.close();
    });

    $('.add-agent-form .rbt-pp-block input').on('click', function () {
        if ($('#access-data').prop('checked')) {
            $(this).closest('form').find('.term').show();
        } else {
            $(this).closest('form').find('.term').hide();
        }
    });
    $('.action-relative').hover(
        function () {
            $(this).find('.actions-panel').show();

        },
        function () {
            $(this).find('.actions-panel').hide();
        });
});
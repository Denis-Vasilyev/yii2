$(function () {
    $('#analysis').click(function () {
        line($(this));
        _hashState('#analysis');
        $('#analysisPanel').show();
        $('#questionaryPanel').hide();
    });
    $('#questionary').click(function () {
        line($(this));
        _hashState('#questionary');
        $('#analysisPanel').hide();
        $('#questionaryPanel').show();
    });
    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.lsfw-line ');
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

    var tabHide = $('#questionary');
    $('.questionary-tourist-analysis-tbl td:first-of-type a').on('click', function () {
        var text = $(this);
        tabHide.show().click();
        return false
    });
    $('#analysis').on('click', function () {
        tabHide.hide();
    });


    var chart = c3.generate({
        bindto: '#q-analysis',
        legend: {
            item: {
                onclick: function (id) {
                    return false;
                }
            },

            position: 'right'
        },

        data: {
            columns: [
                ['В течение часа', 50],
                ['В течение дня', 30],
                ['На следующий день', 15],
                ['Не связались', 5]
            ],
            type: 'pie',
            onclick: function (d, i) {
                console.log("onclick", d, i);
            },
            onmouseover: function (d, i) {
                console.log("onmouseover", d, i);
            },
            onmouseout: function (d, i) {
                console.log("onmouseout", d, i);
            }
        },

        size: {
            width: 530,
            height: 280
        },

        tooltip: {
            show: false
        },
        color: {
            pattern: ['rgba(0, 165, 81, 0.83) ',  'rgb(70, 156, 226)', '#FF8E41', '#e03a3a']
        }


    });
    var chart4 = c3.generate({
        bindto: '#q-analysis4',
        legend: {
            item: {
                onclick: function (id) {
                    return false;
                }
            },

            position: 'right'
        },

        data: {
            columns: [
                ['Рекомендую', 50],
                ['Не рекомендую', 5],
                ['Воздержусь', 45]
            ],
            type: 'pie',
            onclick: function (d, i) {
                console.log("onclick", d, i);
            },
            onmouseover: function (d, i) {
                console.log("onmouseover", d, i);
            },
            onmouseout: function (d, i) {
                console.log("onmouseout", d, i);
            }
        },

        size: {
            width: 530,
            height: 280
        },

        tooltip: {
            show: false
        },
        color: {
            pattern: ['rgba(0, 165, 81, 0.83) ',    'rgb(70, 156, 226)', 'rgb(224, 58, 58)']
        }


    });
    var chart2 = c3.generate({
        bindto: '#q-analysis2',
        legend: {
            item: {
                onclick: function (id) {
                    return false;
                }
            },

            position: 'right'
        },

        data: {
            columns: [
                ['Да', 50],
                ['Еще подбираю', 30],
                ['Не поеду', 20]
            ],
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },


        donut: {
            title: ""
        },

        size: {
            width: 530,
            height: 280
        },

        tooltip: {
            show: false
        },
        color: {
            pattern: ['rgba(0, 165, 81, 0.83) ',  'rgb(70, 156, 226)', '#FF8E41']
        }


    });

    var chart3 = c3.generate({
        bindto: '#q-analysis3',
        legend: {
            item: {
                onclick: function (id) {
                    return false;
                }
            },

            position: 'right'
        },

        data: {
            columns: [
                ['Точно порекомендую', 80],
                ['Не буду советовать', 20]
            ],
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },


        donut: {
            title: ""
        },

        size: {
            width: 530,
            height: 280
        },

        tooltip: {
            show: false
        },
        color: {
            pattern: ['rgba(0, 165, 81, 0.83) ',  'rgb(224, 58, 58)']
        }


    });




    $('input[name="chart"]').change(function () {
        if ($('#buble-chart').is(':checked')) {
            $('.buble-pie').show()
        } else {
            $('.buble-pie').hide()
        }
        if ($('#pie-chart').is(':checked')) {
            $('.chart-pie').show()
        } else {
            $('.chart-pie').hide()
        }

        if ($('#bar-chart').is(':checked')) {
            $('.bar-chart').show()
        } else {
            $('.bar-chart').hide()
        }

        if ($('#comments').is(':checked')) {
            $('.comments-chart').show()
        } else {
            $('.comments-chart').hide()
        }

    });

});

$(document).ready(function () {
    $('#summary').click(function () {
        line($(this));
        _hashState('#summary');
        $('#summaryPanel').show();
        $('#logPanel').hide();
    });
    $('#logs').click(function () {
        line($(this));
        _hashState('#log');
        $('#summaryPanel').hide();
        $('#logPanel').show();
    });
    var line = function (obj) {
        var w = obj.width();
        var p = obj.position().left;
        var el = $('.summary-by-client-line');
        $('.summary-by-client-tab').removeClass('active');
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

    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"],
            datasets: [{
                label: 'Платежи',
                borderWidth: 1,
                data: [1, 3,9,7,5,8,6, 3,9],
                backgroundColor: [
                    'rgb(124, 181, 236)',
                    'rgb(124, 181, 236)',
                    'rgb(124, 181, 236)',
                    'rgb(124, 181, 236)',
                    'rgb(124, 181, 236)',
                    'rgb(124, 181, 236)',
                    'rgb(124, 181, 236)',
                    'rgb(124, 181, 236)',
                    'rgb(124, 181, 236)',
                    'rgb(124, 181, 236)'
                ],
                borderColor: [
                    'rgb(124, 181, 236)',
                    'rgb(124, 181, 236)',
                    'rgb(124, 181, 236)',
                    'rgb(124, 181, 236)',
                    'rgb(124, 181, 236)',
                    'rgb(124, 181, 236)',
                    'rgb(124, 181, 236)',
                    'rgb(124, 181, 236)',
                    'rgb(124, 181, 236)',
                    'rgb(124, 181, 236)'
                ]
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Платежи по годам',
                fontFamily: "'apercu_pro', sans-serif",
                fontSize: 20,
                fontColor:'#475669'
            },

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
});
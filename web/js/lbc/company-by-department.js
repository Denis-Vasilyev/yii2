$(document).ready(function () {

        $('#structure').click(function () {
            line($(this));
            _hashState('#structure');
            $('#structurePanel').show();
            $('#by-cityPanel').hide();

        });
        $('#by-city').click(function () {
            line($(this));
            _hashState('#by-city');
            $('#structurePanel').hide();
            $('#by-cityPanel').show();

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




        $('.structure__tbl .user__block').hover(
        function () {
            $(this).find('.hint').show()
        },
        function () {

            $(this).find('.hint').hide()
        }
    );
});

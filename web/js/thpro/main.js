jQuery(document).ready(function($){
    // селект фильтра
    $('.section-tag__select').on('click', function () {


        $(this).find('.section-tag__select-arr').toggleClass('active');
        $(this).find('.section-tag__select-drop').toggle();

    });
    $('.section-tag__select-drop li').on('click', function () {
        var def = $(this).closest('.section-tag__select').find('.section-tag__select-choice span').text();
        var selected = $(this).text();
        $(this).closest('.section-tag__select').find('.section-tag__select-choice span').text(selected);
        $(this).text(def)
    });


    // саггест ленты
    $('.js-sug-open').on('click', function () {
        $(this).closest('.filter__inp-block').find('.saggest__dropdown').toggleClass('active');
    });

    $('.js-drop-link').on('click', function () {
        $('.saggest__dropdown-item').toggle();
        $(this).closest('.saggest__dropdown-item').toggle();
        $(this).closest('.saggest__dropdown-item').find('.saggest__dropdown-sub-list').toggle();
    });

    $(function () {
        $('.filter-pp-open').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
        $('.filter-pp-open, .filter-modal').on('click', function () {
            $('html').css('margin-right', '17px');
        });   $('.filter-modal').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
        $(document).on('click', '.filter-modal-close', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });


    $('input[name="view"]').on('change', function () {
        if ($('#long').prop('checked')) {
            $('.tape-short__tbl').hide();
            $('.tape-long__tbl').show();
        }
        if ($('#short').prop('checked')) {
            $('.tape-short__tbl').show();
            $('.tape-long__tbl').hide();
        }
    });

// Переключение языка в шапке
    $('.js-lang-open').on('click', function () {
        $('.lang-block__dropdown').addClass('active');
        $(this).addClass('active');
    });


    $('.js-lang-change').on('click', function () {
        var val = $(this).text();
        $(this).closest('.lang-block__dropdown').prev('.lang-block').find('.lang-block__cnt').text(val);
        $(this).closest('.lang-block__dropdown').toggleClass('active');
        $('.lang-block__lang').show();
        $(this).hide();
        $('.lang-block').toggleClass('active');
    });


    // Мои отели, выпадающий список
    $('#myHotels').on('click', function () {
        $(this).next().toggle();
    });


$('.act-side-left-toggle').on('click', function () {
    $('#leftbar3').removeClass('active');
    $('#leftbar').toggleClass('active');

});

$('.js-side-left3-toggle').on('click', function () {
    $('#leftbar').removeClass('active');
    $('#leftbar3').toggleClass('active');
});

    $('.edit-block__inp').on('focus', function () {
        $(this).closest('.edit-block__inp-block').addClass('focus');
    });

    $('.edit-block__inp').on('blur', function () {
        $(this).closest('.edit-block__inp-block').removeClass('focus');
    });

    $('.bth__inp').on('focus', function () {
        $(this).closest('.bth__inp-block').addClass('focus');
    });

    $('.bth__inp').on('blur', function () {
        $(this).closest('.bth__inp-block').removeClass('focus');
    });

    $('select[name="filter"]').SumoSelect();


    // Всплывающий label
    $('.js-input-label').on('focus', function () {
        $(this).next('.bth__inp-lbl').addClass('active');
    });

    $('.js-input-label').on('blur', function () {
        if ($(this).val().trim() === '') {
            $(this).next('.bth__inp-lbl').removeClass('active');
        }
    });

    $('.js-input-label').on('change', function () {
        $('.js-input-label').each(function () {
            if ($(this).val().length) {
                $(this).next('.bth__inp-lbl').addClass('active');
            }
        });
    });

    $('.js-input-label').change();



});

// var compilationBlock = {
//     init: function() {
//         var $posFooter = $('.page-footer').offset().top,
//             $hWindow = $(window).outerHeight(true),
//             $scrollTop = $(window).scrollTop();
//
//         if ($compilationOpen) {
//             if ($scrollTop > $hWindow) {
//                 $compilationEl.addClass('open');
//             } else {
//                 $compilationEl.removeClass('open');
//             }
//
//             if (($scrollTop + $hWindow) > $posFooter) {
//                 $compilationEl.find('.compilation-wrap')main.css('bottom', $scrollTop + $hWindow - $posFooter + 'px');
//             } else {
//                 $compilationEl.find('.compilation-wrap')main.css('bottom', 0);
//             }
//         } else {
//             $compilationEl.removeClass('open').find('.compilation-wrap')main.css('bottom', 0);
//         }
//     }
// }

$(window).scroll(function () {

    var heightSub = $('.subscriber__tbl').height();
    var posFooter = $('.tape-footer').offset().top;
    var hWindow = $(window).outerHeight(true);
    var scrollTop = $(window).scrollTop();

    if ((scrollTop + hWindow + 120) < posFooter) {
        $('.btn-fixed-block').addClass('fixed');
    } else {
        $('.btn-fixed-block').removeClass('fixed');
    }





    var topSubsBtnBlock = $('.subs__col--right').offset().top - 30;

    if ($(this).scrollTop() > topSubsBtnBlock) {
        $('.subs__col--right').find('.subs-btn-block').addClass('fixed');
    } else {
        $('.subs__col--right').find('.subs-btn-block').removeClass('fixed');
    }

    var hRight = $('.activate-serv__container').offset().top;
    if ($(this).scrollTop() > hRight) {
        $('.button__block').addClass('fixed');
    } else {
        $('.button__block').removeClass('fixed');
    }


});

var line = function (obj) {
    var w = obj.width();
    var p = obj.position().left;
    var el = $('.line');
    $('.tab').removeClass('active');
    obj.addClass('active');
    el.clearQueue().animate({
        left: p,
        width: w
    }, 300);
};

var _hashState = function(_hash) {
    if(history.pushState) {
        history.pushState(null, null, _hash);
    }
    else {
        location.hash = _hash;
    }
};

if(!window.location.hash)
    $('.tab.active').first().click();
else
    $(window.location.hash).click();

$(window).bind('hashchange',function(){
    $(window.location.hash).click();
});

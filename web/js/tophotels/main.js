jQuery(document).ready(function ($) {
    // подсветка инпутов
    $('.bth__inp').on('focus', function () {
        $(this).closest('.bth__inp-block').addClass('focus');
    });

    $('.bth__inp').on('blur', function () {
        $(this).closest('.bth__inp-block').removeClass('focus');
    });


    $('.js-sug-open').on('click', function () {
        // $(this).next('.saggest__dropdown').addClass('qwert');
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

        $('.filter-pp-open').on('click', function () {
            $('html').css('margin-right', '17px');
        });
        $(document).on('click', '.filter-modal-close', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });


    $(function () {
        $('.city-pp-open').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });

        $(document).on('click', '.city-pp-close', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });

    $('select[name="filter"]').SumoSelect();


    // Всплывающий сагест
    $('.js-open-bs').on('focus', function () {
        $('.suggest-big').fadeIn();
    });
    $('.suggest-big__close').on('click', function () {
        $(this).closest('.suggest-big').fadeOut();
    });


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


    $('#js-auth').on('click', function () {
        $(this).closest('.header-bot-cnt.no-auth').hide();
        $(this).closest('.header-bot-cnt.no-auth').prev('.header-bot-cnt.auth').show();

        $('.auth__auth-btn').hide();
        $('.header__news-left-suggest').show();
        if ($(window).width() <= 1023) {
            $('.header-profile.auth').hide();
            $('.header-profile.no-auth').hide();
        } else {
            $('.header-profile.auth').show();
            $('.header-profile.no-auth').hide();
        }
        if ($(window).width() <= '479') {
            $('.header__news-left-suggest').hide();
        }
    });

    $('#jsExit, #jsExit2').on('click', function () {

        $('.header-profile.auth').hide();
        $('.header-profile.no-auth').show();
        if ($(window).width() <= 1023) {
            $('.header-profile.auth').hide();
            $('.header-profile.no-auth').hide();
        }
        if ($(window).width() <= 479) {
            $('.header__news-left-suggest').hide();
        }
    });

    $('.js-search-open').on('click', function () {
        $(this).closest('.header-bot-cnt.no-auth').hide();
        $('.header-bot-cnt.auth').show();
        $('.header__news-left-suggest').hide();
        $('.auth__auth-btn').show();
    });

    $('.js-auth-open').on('click', function () {
        $(this).hide();
        $('.header-bot-cnt.no-auth').show();
        $(this).closest('.header-bot-cnt.auth').hide();
        $(this).closest('.header__news-left-suggest').show();
    });
    $('.bth__inp-block-eye').on('click', function () {
        $(this).toggleClass('active');
    });

});


$(document).ready(function () {
    $(window).resize(function () {
        if ($(window).width() <= '639') {
            $('#email').attr("placeholder", "E-mail");
        } else {
            $('#email').attr("placeholder", "Электронная почта");
        }
    });

    $('.js-open-city').on('click', function () {
        $(this).next('.header-city-pp').toggle();
    });

    $('select[name="cityHeader"]').SumoSelect();
    $('.js-city-suggest').selectize({
        onFocus: function () {
            $('.city-pp').find('.selectize-input').focus().closest('.bth__inp-block').addClass('focus');
        },
        onBlur: function () {
            $('.city-pp').find('.selectize-input').blur().closest('.bth__inp-block').removeClass('focus');
        }
    });


});


// пропадает placeholder при фокусе в поле
$('.auth__input, .bth__inp, .bth__ta, .filter__inp').focus(function () {
    $(this).data('placeholder', $(this).attr('placeholder'));
    $(this).attr('placeholder', '');
});
$('.auth__input, .bth__inp, .bth__ta, .club__ta, .filter__inp').blur(function () {
    $(this).attr('placeholder', $(this).data('placeholder'));
});


// табы плавающая линия
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
var _hashState = function (_hash) {
    if (history.pushState) {
        history.pushState(null, null, _hash);
    }
    else {
        location.hash = _hash;
    }
};
if (!window.location.hash)
    $('.tab.active').first().click();
else
    $(window.location.hash).click();
$(window).bind('hashchange', function () {
    $(window.location.hash).click();
});

// закрыть теги
$('.filter__tag-close').on("click", function () {

    $(this).parent().hide();
});


$('.js-rate-block-toggle').on("click", function () {
    $('#RateBlock').toggle();
    $('#nullRateBlock').toggle();
});

// Анимированная кнокпа
$('.bth__btn ').on('click', function () {
    $(this).find('.load-more-spinner').addClass('load-more-spinner_animate').show();
});
$('.js-act-form-dropdown-stars').on('click', function () {
    $(this).find('.bth__inp-arrr').toggleClass('active');
    $(this).find('.form-dropdown-stars').toggle()
});
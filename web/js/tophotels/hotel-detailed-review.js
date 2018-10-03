$(document).ready(function () {
    $('#userReview').click(function () {
        line($(this));
        _hashState('#userReview');
        $('#userReviewPanel').show();
        $('#userThxPanel').hide();
        $('#userCheckListPanel').hide();
        $('#userLogWiewsPanel').hide();
        $('#userDeletePanel').hide();

        $(this).closest('.container').find('.detailed-review__y-ava-block ').show();
        $(this).closest('.container').find('.detailed-review__no-ava-block').hide();

        $(this).closest('.container').find('.detailed-review__left-secure ').addClass('check');
        $(this).closest('.container').find('.detailed-review__left-secure ').removeClass('uncheck')
    });
    $('#userThx').click(function () {
        line($(this));
        _hashState('#userThx');
        $('#userReviewPanel').hide();
        $('#userThxPanel').show();
        $('#userCheckListPanel').hide();
        $('#userLogWiewsPanel').hide();
        $('#userDeletePanel').hide();
        $(this).closest('.container').find('.js-change-ava').addClass('female').show();
        $(this).closest('.container').find('.js-change-ava').removeClass('male');
        $(this).closest('.container').find('.detailed-review__y-ava-block ').hide()
    });
    $('#userCheckList').click(function () {
        line($(this));
        _hashState('#userCheckList');
        $('#userReviewPanel').hide();
        $('#userThxPanel').hide();
        $('#userCheckListPanel').show();
        $('#userLogWiewsPanel').hide();
        $('#userDeletePanel').hide();


    });
    $('#userLogWiews').click(function () {
        line($(this));
        _hashState('#userLogWiews');
        $('#userReviewPanel').hide();
        $('#userThxPanel').hide();
        $('#userCheckListPanel').hide();
        $('#userLogWiewsPanel').show();
        $('#userDeletePanel').hide();
    });
    $('#userDelete').click(function () {
        line($(this));
        _hashState('#userDelete');
        $('#userReviewPanel').hide();
        $('#userThxPanel').hide();
        $('#userCheckListPanel').hide();
        $('#userLogWiewsPanel').hide();
        $('#userDeletePanel').show();

        $(this).closest('.container').find('.js-change-ava').addClass('male').show();
        $(this).closest('.container').find('.js-change-ava').removeClass('female');
        $(this).closest('.container').find('.detailed-review__y-ava-block ').hide();
        $(this).closest('.container').find('.detailed-review__left-secure ').removeClass('check');
        $(this).closest('.container').find('.detailed-review__left-secure ').addClass('uncheck')
    });


    $('.js-det-rev-ta').on('focus', function () {
        $(this).closest('.bth__ta-block').css('height', 100);
    });

    $('.js-det-rev-ta').on('blur', function () {
        if ($(this).val().length > 0) {
            $(this).closest('.bth__ta-block').css('height', 100);
        } else {
            $(this).closest('.bth__ta-block').css('height', 56);
        }
    });

    $('input[name=aboutReview]').on('click', function () {
        if ($('#aboutReview3').prop('checked')) {
            $(this).closest('.review-comment__add-block').css('background', 'rgba(200, 56, 49, 0.17)');
        }
        if ($('#aboutReview2').prop('checked')) {
            $(this).closest('.review-comment__add-block').css('background', 'rgba(0, 165, 81, 0.17)');
        }
        if ($('#aboutReview1').prop('checked')) {
            $(this).closest('.review-comment__add-block').css('background', ' #efefef');
        }

        if ($('#aboutReview6').prop('checked')) {
            $(this).closest('.review-comment__add-block').css('background', 'rgba(200, 56, 49, 0.17)');
        }
        if ($('#aboutReview5').prop('checked')) {
            $(this).closest('.review-comment__add-block').css('background', 'rgba(0, 165, 81, 0.17)');
        }
        if ($('#aboutReview4').prop('checked')) {
            $(this).closest('.review-comment__add-block').css('background', ' #efefef');
        }
    });


    $('.js-open-thx-block').on('click', function () {
        $(this).closest('.thx-section').find('.thx-section-hide-block').slideDown();
    });

    $('.js-thx-ta').on('focus', function () {
        $(this).closest('.bth__ta-block').css('height', 100);
    });

    $('.js-thx-ta').on('blur', function () {
        if ($(this).val().length > 0) {
            $(this).closest('.bth__ta-block').css('height', 100);
        } else {
            $(this).closest('.bth__ta-block').css('height', 56);
        }
    });

    $('.js-thx-ta').keyup(function () {
        var cnt = $(this).val();
        var count = 300 - cnt.length;
        $(this).closest('.thx-section').find('.simbol-count').text(count);
    });

    $('.js-det-rev-ta').keyup(function () {
        var cnt = $(this).val();
        var count = 300 - cnt.length;
        $(this).closest('.review-comment__add-block').find('.simbol-count').text(count);
    });

    $('.js-change-ava').on('click', function () {
        $(this).closest('.detailed-review__left-block').find('.detailed-review__y-ava-block').toggle();
        $(this).closest('.detailed-review__left-block').find('.detailed-review__no-ava-block').toggle();
    });

    $('.js-cnt-change-ava').on('click', function () {
        $(this).closest('.detailed-review__user-block').toggleClass('no-ava');
    });

    $('.js-add-auth').on('click', function () {
        $(this).closest('.review-comment__item--right').find('.review-comment__add-block.var1').toggle();
        $(this).closest('.review-comment__item--right').find('.review-comment__add-block.var2').toggle();
        $('.rev-add-block.step1').show();
        $('.rev-add-block.step2').hide();
        $('.rev-add-block.step4').hide();
    });


    // Для неавторизата
    $('.jsNoAuthRewBtn').on('click', function () {
        $(this).closest('.rev-add-block').hide().next('.rev-add-block').show();
    });
    $('.jsAddRevBtn').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.rev-add-block').hide().next('.rev-add-block').show();
    });
    $('.jsCaptchaCick').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.rev-add-block').hide().next('.rev-add-block').show();
    });

    // Для авторизата

    $('.jsAuthRewBtn').on('click', function () {
        $(this).closest('.rev-add-block').hide().next('.rev-add-block').show();
    });
    $('.jsAddRevBtn').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.rev-add-block').hide().next('.rev-add-block').show();
    });
    $('.jsCaptchaCick').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.rev-add-block').hide().next('.rev-add-block').show();
    });


    $(function () {
        $('.captcha-pp-open').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });

        $(document).on('click', '.captcha-pp-close', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });

    $('.jsShowAllMark').on('click', function (e) {
        e.preventDefault();
        $(this).prev('.detailed-review__service-mark-block').find('.service-mark__item').addClass('show');
        $(this).hide();
        $(this).next().show();
    });

    $('.jsHideAllMark').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.detailed-review__dop-block').find('.service-mark__item').removeClass('show');
        $(this).hide();
        $(this).prev().show();
    });


    $('.jsRatingBlockChange').on('click', function () {
        $('.reader-reach-sm').toggle();
        $('.reader-reach-bg').toggle();
    });

    $('.js-big-photo').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.detailed-review__photo-block').hide();
        $(this).closest('.detailed-review__photo-block').next().show();
    });

    $('.js-small-photo').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.detailed-review__photo-block').hide();
        $(this).closest('.detailed-review__container').find('.detailed-review__photo-block.small-photos').show();
    });

    $('.js-mdl-photo').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.detailed-review__photo-block').hide();
        $(this).closest('.detailed-review__container').find('.detailed-review__photo-block.middle-photos').show();
    });

    $('.js-more-photo-link').on('click', function (e) {
        e.preventDefault();
        $(this).hide();
        $('.detailed-review__photo').removeClass('more-photo-show');

    });

    $('.unUseless-rev-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('.filter-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });


    $('.addComment-link').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 400);
    });
    $('.js-trustStep').on('click', function () {
        $(this).hide();
        $(this).next().show()

    });

    $('.review-comment__reply').on('click', function () {
        $('.review-comment__add-block').addClass('review-comment__add-block--reply')
    });
    $('.js-has-error').on('click', function () {
        $('.bth__inp-block.js-error').addClass('error');
        $('.bth__inp-block.js-error').find('.hint-block.hint-block--abs').show()
    })

});




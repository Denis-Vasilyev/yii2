'use strict';
jQuery(document).ready(function ($) {
    var initPanel = false;
    $('#PersonalData').click(function () {
        line($(this));
        _hashState('#PersonalData');
        $('#PersonalDataPanel').show();
        $('#DataEditPanel').hide();
        $('#MyPhotosPanel').hide();
        $('#MySettingsPanel').hide();
        $('#MyPassPanel').hide();
        $('#EditAvatarPanel').hide();
    });
    $('#DataEdit').click(function () {
        line($(this));
        _hashState('#DataEdit');
        $('#PersonalDataPanel').hide();
        $('#DataEditPanel').show();
        $('#MyPhotosPanel').hide();
        $('#MySettingsPanel').hide();
        $('#MyPassPanel').hide();
        $('#EditAvatarPanel').hide();
    });
    $('#MyPhotos').click(function () {
        line($(this));
        _hashState('#MyPhotos');
        $('#PersonalDataPanel').hide();
        $('#DataEditPanel').hide();
        $('#MyPhotosPanel').show();
        $('#MySettingsPanel').hide();
        $('#MyPassPanel').hide();
        $('#EditAvatarPanel').hide();
    });
    $('#MySettings').click(function () {
        line($(this));
        _hashState('#MySettings');
        $('#PersonalDataPanel').hide();
        $('#DataEditPanel').hide();
        $('#MyPhotosPanel').hide();
        $('#MySettingsPanel').show();
        $('#MyPassPanel').hide();
        $('#EditAvatarPanel').hide();

    });
    $('#MyPass').click(function () {
        line($(this));
        _hashState('#MyPass');
        $('#PersonalDataPanel').hide();
        $('#DataEditPanel').hide();
        $('#MyPhotosPanel').hide();
        $('#MySettingsPanel').hide();
        $('#MyPassPanel').show();
        $('#EditAvatarPanel').hide();
    });
    $('#EditAvatar').click(function () {
        line($(this));
        _hashState('#EditAvatar');
        $('#PersonalDataPanel').hide();
        $('#DataEditPanel').hide();
        $('#MyPhotosPanel').hide();
        $('#MySettingsPanel').hide();
        $('#MyPassPanel').hide();
        $('#EditAvatarPanel').show();
        if (initPanel) return;

        initPanel = true;
        /* Документация https://github.com/fengyuanchen/cropperjs/blob/master/README.md*/


        var image = document.getElementById('image');
        var originalImageURL = image.src;
        var uploadedImageType = 'image/jpeg';
        var uploadedImageURL;
        var widthPreview = $('.img-editor-actions__size-w');
        var heightPreview = $('.img-editor-actions__size-h');
        var options = {
            minCropBoxWidth: 250,
            minCropBoxHeight: 250,
            preview: '.avablock-preview-img',
            aspectRatio: 1 / 1,
            crop: function (event) {
                var data = event.detail;
                widthPreview.text(data.width.toFixed());
                heightPreview.text(data.height.toFixed());
                console.log(event.detail.x);
                console.log(event.detail.y);
                console.log(event.detail.width);
                console.log(event.detail.height);
                console.log(event.detail.rotate);
                console.log(event.detail.scaleX);
                console.log(event.detail.scaleY);
            },
            ready: function () {
                this.cropper.setCropBoxData({
                    width: 250,
                    height: 250,
                    minWidth: 250,
                    minHeight: 250
                });
            }
        };

        var cropper = new Cropper(image, options);

        var sc = 1;
        $('div[data-method="scalex"]').on('click', function () {
            cropper.scaleX(sc);
            sc = -sc;
        });
        $('div[data-method="rotate-l"]').on('click', function () {
            cropper.rotate(-45);
        });
        $('div[data-method="rotate-r"]').on('click', function () {
            cropper.rotate(45);
        });
        $('div[data-method="zoom-plus"]').on('click', function () {
            cropper.zoom(0.1);
        });

        $('div[data-method="zoom-min"]').on('click', function () {
            cropper.zoom(-0.1);
        });


        // Import image
        var inputImage = document.getElementById('inputImage');

        if (URL) {
            inputImage.onchange = function () {
                var files = this.files;
                var file;

                if (cropper && files && files.length) {
                    file = files[0];
                    console.log(file);

                    if (/^image\/\w+/.test(file.type)) {
                        uploadedImageType = file.type;

                        if (uploadedImageURL) {
                            URL.revokeObjectURL(uploadedImageURL);
                        }

                        image.src = uploadedImageURL = URL.createObjectURL(file);
                        cropper.destroy();
                        cropper = new Cropper(image, options);
                        inputImage.value = null;
                    } else {
                        window.alert('Please choose an image file.');
                    }
                }
            };

        } else {
            inputImage.disabled = true;
            inputImage.parentNode.className += ' disabled';
        }
    });
    $('.personal-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('.del-avatar-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });

    $('.personal-pp, .del-avatar-pp').on('click', function () {
        $('html').css('margin-right', '17px');
    });
    $('.cropper-container .request-overflow').on('click', function () {
        $(this).hide();
    });


    $(document).on('click', '.close-modal, .filter-pp__btn', function () {
        $.magnificPopup.close();
    });


    $('.img-editor-actions__button').hover(function () {
            $(this).find('.hint').show();
        },
        function () {
            $(this).find('.hint').hide()
        }
    );

//Подсказки
    $('.cropper-panel .relative, .filter__editor').hover(function () {
            $(this).find('.hint').show();
        },
        function () {
            $(this).find('.hint').hide()
        }
    );
    $('.cropper-panel .relative').hover(function () {
            $(this).find('.hint').show();
        },
        function () {
            $(this).find('.hint').hide()
        }
    );
    $('.filter__inp-question').hover(function () {
            $(this).find('.hint').show();
        },
        function () {
            $(this).find('.hint').hide()
        }
    );

    $('.cropper-panel__info-btm').on('click', function () {
        $(this).toggleClass('red')
    });
    $('.js-loader').on('click', function () {
        $(this).find('.cropper-panel__loader').toggle()
    });

    $('input.js-bth-profile').on('change', function () {
        if ($('#edit-profile').prop('checked')) {
            $('.personal-data').hide();
            $('.my-settings').hide();
            $('.js-edit-form').show();
            $(this).closest('article.filter-new').hide();
        }
        else {
            $('.js-edit-form').hide();
        }

        if ($('#privat-profile').prop('checked')) {
            $('.my-settings').show();
            $('.js-edit-form').hide();
            $('.personal-data').hide();
            $(this).closest('article.filter-new').hide();
        }
    });

    $('.filter__close,  .delete__link').on('click', function () {
        $(this).closest('.js-edit-form').hide();
        $('article.filter-new').show();
        $('.js-bth-profile').prop('checked', false);
        $(this).closest('.panel').find('.personal-data').show();
        $(this).closest('.my-settings').hide();
    });



});


jQuery(document).ready(function ($) {
    $('input[name=privatSet]').on('click', function () {
        $(this).closest('.bth__row').find('.not-available').toggle();
        $(this).closest('.bth__row').find('.available').toggle();
    });

    $('#privatSet0').on('click', function () {
        if ($(this).prop('checked')) {
            $('input[name=privatSet]').prop('checked', true);
            $('.not-available').hide();
            $('.available').show();
        } else {
            $('input[name=privatSet]').prop('checked', false);
            $('.not-available').show();
            $('.available').hide();
        }
    });
});


$('select[name="myGender"]').SumoSelect();
$('select[name="myCity"]').SumoSelect();
$('select[name="myCountry"]').SumoSelect();


$('.js-pers-ta').on('focus', function () {
    $(this).closest('.bth__ta-block').css('height', 100);
});

$('.js-pers-ta').on('blur', function () {
    if ($(this).val().length > 0) {
        $(this).closest('.bth__ta-block').css('height', 100);
    } else {
        $(this).closest('.bth__ta-block').css('height', 65);
    }

});


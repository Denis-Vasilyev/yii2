'use strict';
$(document).ready(function () {
    var initPanel = false;


    $('#contact').click(function () {
        line($(this));
        _hashState('#contact');
        $('#contactPanel').show();
        $('#editPanel').hide();
        $('#avatar-editPanel').hide();
    });
    $('#edit').click(function () {
        line($(this));
        _hashState('#edit');
        $('#contactPanel').hide();
        $('#editPanel').show();
        $('#avatar-editPanel').hide();

//Подсказки
        $('.cropper-panel .relative, .filter__editor').hover(function () {
                $(this).find('.hint').show();
            },
            function () {
                $(this).find('.hint').hide()
            }
        );


    });
    $('#avatar-edit').click(function () {
        line($(this));
        _hashState('#avatar-edit');
        $('#contactPanel').hide();
        $('#editPanel').hide();
        $('#avatar-editPanel').show();
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
            minCropBoxWidth: 50,
            minCropBoxHeight: 50,
            responsive:true,
            restore:true,
            checkCrossOrigin:true,
            checkOrientation:true,
            rotatable:true,
            scalable:true,
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

    $('.personal-edit-form .add-wrap .fa-plus').click(function () {
        $(this).closest('div').after('<div class="form__plus-block"><label for="added" class="operation-type__title"></label><input class="type-input" type="text" id="added"></div>')

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


    $('.personal-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });

    $('.cropper-panel .relative').hover(function () {
            $(this).find('.hint').show();
        },
        function () {
            $(this).find('.hint').hide()
        }
    );

    $('')


});
$(document).on('click', '.close-modal, .filter-pp__btn', function () {
    $.magnificPopup.close();
});

$(document).ready(function () {
    var initPanel = false;

    $('.edit-photo-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('.edit-photo-pp').on('click', function () {
        $('html').css('overflow', 'hidden');
    });
    $('.edit-photo-pp').on('click', function () {

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
            responsive: true,
            restore: true,
            checkCrossOrigin: true,
            checkOrientation: true,
            rotatable: true,
            scalable: true,
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


    $('.editorMsg__photo-del').on('click', function () {
        $(this).closest('.editorMsg__photo').hide()
    });


    $('.js-act-link').on('click', function () {
        $(this).next().toggle()
    });
});



$(document).on('click', '.close-modal', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
    $('html').css('overflow', 'auto');
    $('.editor__inset .feed__added-photo').show();
    $('.editor__inset .bth__add-photo').hide();
});
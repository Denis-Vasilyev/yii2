$(document).ready(function () {
    var initPanel = false;
    // Цвет текста
    $('input[name="color"]').on('change', function () {
        if ($('#rbt-blue').prop('checked')) {
            $(this).closest('.editorMsg__item').find('.editorMsg__txta').css('color', '#475669');
        }
        if ($('#rbt-red').prop('checked')) {
            $(this).closest('.editorMsg__item').find('.editorMsg__txta').css('color', '#c40b00');
        }
    });

    // размер шрифта
    $('input[name="fsz"]').on('change', function () {
        if ($('#fsz15').prop('checked')) {
            $(this).closest('.editorMsg__item').find('.editorMsg__txta').css('font-size', '15px');
        }
        if ($('#fsz21').prop('checked')) {
            $(this).closest('.editorMsg__item').find('.editorMsg__txta').css('font-size', '21px');
        }
        if ($('#italic').prop('checked')) {
            $(this).closest('.editorMsg__item').find('.editorMsg__txta').css('font-style', 'italic');
        } else {
            $(this).closest('.editorMsg__item').find('.editorMsg__txta').css('font-style', 'normal');
        }
    });


// счетчик символов
    $('.editorMsg__simbol-count').each(function () {
        var count = $(this).next().val().length;
        $(this).text(500 - count);

        $('.js-count').keyup(function () {
            var cnt = $(this).val();
            var count = 500 - cnt.length;
            $(this).prev().text(count);
        });
    });


    $('.editorMsg__file-block').hover(function () {
            $(this).find('.hint').show();
        },
        function () {
            $(this).find('.hint').hide()
        }
    );

    $('.tape-short__tbl td:nth-child(2)').hover(function () {
            $(this).find('.fa-eye').show();
        },
        function () {
            $(this).find('.fa-eye').hide()
        }
    );

    $('.editorMsg__photo ').hover(function () {
            $(this).find('.editorMsg__photo-shadow').show();
        },
        function () {
            $(this).find('.editorMsg__photo-shadow').hide()
        }
    );


    $('input[name="type-photo"]').on('change', function () {
        if ($('#type-photo3').prop('checked')) {
            $(this).closest('.d-ib').find('.editorMsg__inp-block').show()
        } else {
            $(this).closest('.d-ib').find('.editorMsg__inp-block').hide()
        }
    });

    $('input[name="full-pp"]').on('change', function () {
        if ($('#full-pp').prop('checked')) {
            $(this).closest('.editorMsg__grey').find('.editorMsg__txt-block').addClass('active')
        } else {
            $(this).closest('.editorMsg__grey').find('.editorMsg__txt-block').removeClass('active')
        }
    });
    $('.edit-photo-pp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
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

    $(' .datepicker-here').datepicker({});


    $('.clockpicker').clockpicker({
        autoclose: true,
        placement: 'top',
        align: 'left'
    });


    $('.modal .clockpicker').clockpicker({
        autoclose: true,
        placement: 'top',
        align: 'left'
    });
    $('input[name="view"]').on('change', function () {
        if ($('#long').prop('checked')) {
            $('.tape-short__tbl').hide();
            $('.tape-long__tbl').show();
            $('.tape-trash__tbl').hide();
            $('.tape-newView__tbl').hide();
        }
        else if ($('#short').prop('checked')) {
            $('.tape-short__tbl').show();
            $('.tape-long__tbl').hide();
            $('.tape-trash__tbl').hide();
            $('.tape-newView__tbl').hide();
        }
        else if ($('#view-trash').prop('checked')) {
            $('.tape-short__tbl').hide();
            $('.tape-long__tbl').hide();
            $('.tape-trash__tbl').show();
        } else if ($('#newView').prop('checked')) {
            $('.tape-short__tbl').hide();
            $('.tape-long__tbl').hide();
            $('.tape-trash__tbl').hide();
            $('.tape-newView__tbl').show();
        }

    });
    $(' .datepicker-here').data('datepicker').selectDate(new Date);

    $('.modal .datepicker-here').data('datepicker').selectDate(new Date);

});
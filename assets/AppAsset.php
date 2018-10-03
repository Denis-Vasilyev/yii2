<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

/**
 * Main application asset bundle.
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        "/css/tophotels/reset-ls.css",
        "/css/_lsfw/fonts.css",
        "/css/vendor/font-awesome-5.0/css/fontawesome-all.css",
        "/css/vendor/font-awesome-4.7.0/css/font-awesome.min.css",
        "/css/vendor/sumoselect.css",
        "/css/vendor/magnific-popup.css",
        "/css/vendor/vmap/jqvmap.css",
        "/css/vendor/datepicker-jquery-ui-1.12.1.custom/jquery-ui-1.10.3.custom.css",
        "/css/vendor/selectize-standalone.css",
        "/css/vendor/airDatepicker.min.css",
        "/css/tophotels/atom.css",
        "/css/tophotels/main.css",
        "/css/tophotels/main-cnt.css",
        "/css/tophotels/th-sumoselect.css",
        "/css/tophotels/paginator.css",
        "/css/tophotels/sorter.css",
        "/css/tophotels/layouts/header.css",
        "/css/tophotels/layouts/header-mobile.css",
        "/css/tophotels/layouts/footer.css",
        "/css/tophotels/layouts/footer2018.css",
        "/css/tophotels/layouts/suggest-big.css",
        "/css/tophotels/left-menu.css",
        "/css/tophotels/filter.css",
        "/css/tophotels/breadcrumbs.css",
        "/css/tophotels/filter-pp.css",
        "/css/tophotels/authorization.css",
        "/css/tophotels/city-pp.css",
        "/css/tophotels/filter-big.css",
        "/css/tophotels/captcha-pp.css",
        "/css/tophotels/hotel-questions-pp.css",
        "/css/tophotels/filter-new.css",
        "/css/tophotels/paginator-new.css",
        "/css/tophotels/agree-pp.css",
        "/css/tophotels/section-bubbles.css",
        "/css/tophotels/new-password.css",
        "/css/tophotels/processing-agreement-pp.css",
        "/css/tophotels/topSection-wide.css",
        "/css/tophotels/parameter-modal.css",
        "/css/tophotels/form-stars.css",
        "/css/tophotels/form-dropdown-stars.css",
        "/css/tophotels/form-durability.css",
        "/css/tophotels/form-date.css",
        "/css/tophotels/form-adults.css",
        "/css/tophotels/form-direction.css",
        "/css/tophotels/hotels-catalog.css",
        "/css/tophotels/index.css",
        "/css/tophotels/crash.css",
        "/css/tophotels/terms-use.css",
        "/css/tophotels/api-services.css",
        "/css/tophotels/review.css",
        "/css/tophotels/auth-pp.css",
        "/css/tophotels/consultation-form.css",
        "/css/vendor/slick.css",
        "/css/tophotels/registration.css",
        "/css/tophotels/registration-form.css",
        "/css/tophotels/orders-line.css",
        "/css/tophotels/order-form.css",
        "/css/tophotels/orders-consultants.css",
        "/css/site.css"
    ];
    public $js = [
        //"/js/jquery.min.js",
        "/js/jquery.311.min.js",
        "/js/jquery-ui.min.js",
        "/js/tophotels/main.js",
        "/js/vendor/chart.min.js",
        "/js/vendor/SumoSelectLS/js/jquery.sumoselect.min.js",
        "/js/vendor/vmap/jquery.vmap.js",
        "/js/vendor/vmap/jquery.vmap.world.js",
        "/js/vendor/datepicker-jquery-ui-1.12.1.custom/jquery-ui.min.js",
        "/js/vendor/datepicker-jquery-ui-1.12.1.custom/datepicker-ru.js",
        "/js/vendor/datepicker-jquery-ui-1.12.1.custom/jquery.datepicker.extension.range.min.js",
        "/js/vendor/selectize-standalone.min.js",
        "/js/vendor/airDatepicker.min.js",
        "/js/vendor/magnific-popup.min.js",
        "/js/vendor/gemini-calendar.js",
        "/js/vendor/filter-pp.js",
        "/js/tophotels/filter-big.js",
        "/js/tophotels/city-pp.js",
        "/js/tophotels/filter-new.js",
        "/js/tophotels/filter-select.js",
        "/js/tophotels/form-directions.js",
        "/js/tophotels/paginator-new.js",
        "/js/tophotels/header-mobile.js",
        "/js/tophotels/review-complain-pp.js",
        "/js/tophotels/agree-pp.js",
        "/js/tophotels/new-password.js",
        "/js/tophotels/hotels-catalog.js",
        "/js/tophotels/topline-hotel-big.js",
        "/js/tophotels/filter-line.js",
        "/js/tophotels/index.js",
        "/js/tophotels/crash.js",
        "/js/tophotels/terms-use.js",
        "/js/tophotels/api-services.js",
        "/js/tophotels/review.js",
        "/js/tophotels/auth-pp.js",
        "/js/tophotels/validation-form.js",
        "/js/tophotels/legal-inform-pp.js",
        "/js/vendor/slick.js",
        "/js/tophotels/help-selection.js",
        //"/assets/74e30187/yii.js?v=1534806768",
        "/js/libs/array-function.js",
        "/js/libs/date-function.js",
        "/js/libs/number-function.js",
        "/js/libs/string-function.js",
        "/js/libs/debounce.js",
        "/js/libs/reverseLocale.js",
        "/js/libs/LSPager.js",
        "/js/libs/LSSuggest.js"
    ];
    public $depends = [
        /*'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',*/
    ];
}

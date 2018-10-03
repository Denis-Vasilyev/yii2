<?php

/* @var $this \yii\web\View */
/* @var $content string */

use app\widgets\Alert;
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>

<div class="page">
    <div class="headerMobile">
        <div class="headerMobile__flex">
            <div class="headerMobile__logo">
                <img src="/i/th-logo.png" width="112" height="40" class="mr10">
            </div>
            <div class="headerMobile__right">
                <div class="headerMobile__right-auth">
                    <i class="far fa-envelope"></i>
                    <a href="#" class="headerMobile__msg-icon "><span>989</span></a>
                </div>
                <div class="headerMobile__right-noAuth" style="display: none">
                    1 507 753 участников
                </div>
            </div>
        </div>
        <div class="headerMobile__line">
            <div class="js-hide">
                <div class="headerMobile__bth headerMobile__bth--auth mr10" style="display: none">
                    <div class="headerMobile__key"></div>
                </div>
                <a href="#" class="headerMobile__user js-show-key-block">
                    <img src="http://tophotels.ru/icache/user_avatars/1365/1364928_4137298655_130x130.png">
                </a>
                <div class="headerMobile__bth mr10">
                    <div class="headerMobile__burger"></div>
                </div>
                <div class="headerMobile__bth js-show-search">
                    <i class="fas fa-search"></i>
                </div>
            </div>
            <div class="headerMobile__right js-hide">
                <div class="header-lang">
                    <div class="header-lang__block">
                        <span class="header-lang__cnt">Rus</span>
                        <i class="fa fa-chevron-down header-lang__arr" aria-hidden="true"></i>
                    </div>
                    <div class="header-lang__dropdown">
                        <div class="header-lang__lang js-ru" style="display: none;">Rus</div>
                        <div class="header-lang__lang js-eng">Eng</div>
                    </div>
                </div>
            </div>
            <a class="leftbar-close"></a>
        </div>
        <div class="headerMobile__navigation ">
            <div class="headerMobile__navigation-tabs">
                <div id="menuCurrent" class="headerMobile__navigation-tab active">Отель</div>
                <div id="menuMain" class="headerMobile__navigation-tab">Основное меню</div>
            </div>
        </div>
        <div class="headerMobile__registration">
            <div class="tabs-block">
                <div class="tabs-bar">
                    <div id="authorization" class="tab tab--reg active">Вход</div>
                    <div id="registration" class="tab tab--reg">Регистрация</div>
                    <div class="line--reg" style="width: 0px; left: 0px; overflow: hidden;"></div>
                </div>
                <div class="panel" id="authorizationPanel" style="">
                    <div class="headerMobile__registration-line">
                        <div class="bth__inp-block error">
                            <input type="text" class="bth__inp  js-input-label" id="regEmail">
                            <label for="regEmail" class="bth__inp-lbl ">email</label>
                            <div class="hint-block hint-block--abs">
                                <i class="fa fa-question-circle question-error" aria-hidden="true"></i>
                                <div class="hint">
                                    <p class="bth__cnt">Текст подсказки</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="headerMobile__registration-line">
                        <div class="bth__inp-block ">
                            <input type="password" class="bth__inp  js-input-label" id="regPass">
                            <label for="regPass" class="bth__inp-lbl">Пароль</label>
                            <i class="headerMobile__registration-eye js-open-eye"></i>
                        </div>
                    </div>
                    <button class="bth__btn bth__btn--fill ">Войти</button>
                    <button class="bth__btn  js-show-remind headerMobile__registration-abs-btn">Напомнить пароль</button>
                    <div class="registration-form__remind" style="display: none">
                        <div class="pass-step1">
                            <div class="headerMobile__registration-line">
                                <div class="bth__inp-block ">
                                    <input type="text" class="bth__inp  js-input-label" id="regRemindEmail">
                                    <label for="regRemindEmail" class="bth__inp-lbl">E-mail</label>
                                </div>
                            </div>
                            <button class="bth__btn bth__btn--fill  jsPassStep2 mt20">Напомнить</button>
                        </div>
                        <div class="pass-step2" style="display:none;">
                            <p class="bth__cnt bth__cnt--big">Остался один шаг!</p>
                            <p class="bth__cnt bth__cnt--big mt20">Проверьте e-mail и подтвердите регистрацию на
                                проекте.</p>
                        </div>
                    </div>
                </div>
                <div class="panel" id="registrationPanel" style="display: none;">
                    <div class="headerMobile__registration-line">
                        <div class="bth__inp-block ">
                            <input type="text" class="bth__inp  js-input-label" id="regName">
                            <label for="regName" class="bth__inp-lbl ">Имя</label>
                        </div>
                    </div>
                    <div class="headerMobile__registration-line mt15">
                        <div class="rbt-block d-ib mr20">
                            <input type="radio" name="male" class="rbt" id="male1">
                            <label class="label-rbt" for="male1">
                                <span class="rbt-cnt uppercase">Мужчина</span>
                            </label>
                        </div>
                        <div class="rbt-block  d-ib">
                            <input type="radio" name="male" class="rbt" id="male2">
                            <label class="label-rbt" for="male2">
                                <span class="rbt-cnt uppercase">Женщина</span>
                            </label>
                        </div>
                    </div>
                    <div class="headerMobile__registration-line headerMobile__registration-line--border">
                        <div class="bth__inp-block">
                            <input type="text" class="bth__inp  js-input-label" id="regEmailOsn">
                            <label for="regEmailOsn" class="bth__inp-lbl ">E-mail регистрации </label>
                        </div>
                    </div>
                    <div class="headerMobile__registration-line">
                        <div class="bth__inp-block ">
                            <input type="password" class="bth__inp  js-input-label" id="regPassNew">
                            <label for="regPassNew" class="bth__inp-lbl">Пароль</label>
                            <i class="headerMobile__registration-eye js-open-eye"></i>
                        </div>
                    </div>
                    <div class="headerMobile__registration-line">
                        <div class="bth__inp-block ">
                            <input type="password" class="bth__inp  js-input-label" id="regPassNewRep">
                            <label for="regPassNewRep" class="bth__inp-lbl">Повторный пароль</label>
                            <i class="headerMobile__registration-eye js-open-eye"></i>
                        </div>
                    </div>
                    <div class="relative">
                        <button class="bth__btn bth__btn--fill jsRegStep2 ">Продолжить*</button>
                        <div class="headerMobile__registration-text-abs">
                            <p class="bth__cnt bth__cnt--sm">*Нажимая на кнопку "продолжить", я принимаю <a href="#">Соглашение
                                    об обработке личных данных</a> и <a href="#">Правила
                                    сайта</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <header class="header">
        <div class="header-menu header-menu_slim">
            <a class="header-menu-link act-side-left-toggle" href="javascript:void(0);">Отель</a>
            <a onclick="$('#leftbar3').toggle();return false;" class="header-menu-link header-menu-link_heading" href="#">Рубрики</a>
        </div>
        <div class="header-top-auth min header-top_index pt0 pb0">
            <ul class="header-top-nav-list">
                <li class="header-top-nav-item" style="display: none">
                    <a href="#" class="header-top-nav-link green fz14">Авторизоваться</a>
                </li>
                <li class="header-top-nav-item auth">
                    <a href="#" class="header-top-profile-link header-top-auth-link-unl mr10">Екатерина</a>
                    <a href="javascript:void(0)" class="m10l header-top-profile-link header-top-auth-link-unl header-top-auth-btn-do-logout" id="jsExit2">Выйти</a>
                </li>
                <li class="header-top-nav-item">
                    <a href="#" class="header-top-nav-link header-top-auth-link-unl"><span class=" bold">40%</span> - мой
                        профиль</a>
                </li>
                <li class="header-top-nav-item">
                    <a href="#" class="header-top-nav-link header-top-auth-link-unl"><span class="red bold">1 сообщение</span></a>
                </li>
            </ul>
        </div>
        <div class="header-cnt header-cnt_index ">
            <a href="/tophotels/" class="header-logo">
                <img src="/i/th-logo.png" alt="">
            </a>
            <div class="header-nav">
                <div class="header-nav-cont">
                    <ul class="header-nav-list">
                        <li class="header-nav-item">
                            <a href="#" class="header-nav-link  grey ">Мой профиль</a>
                        </li>
                        <li class="header-nav-item">
                            <a href="#" class="header-nav-link  grey ">Каталог отелей</a>
                        </li>
                        <li class="header-nav-item">
                            <a href="#" class="header-nav-link grey  ">Клуб ТопХотелс</a>
                        </li>
                        <li class="header-nav-item">
                            <a href="/tophotels_site_html/help-selection" class="header-nav-link active">Помощь в подборе</a>
                        </li>
                        <li class="header-nav-item">
                            <a href="#" class="header-nav-link grey ">Добавить отзыв</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="exit__block">
                <div class="header__exit js-show-auth-link" id="jsExit">Выйти</div>
            </div>
        </div>
        <div class="header-bot header-bot-suggest-big">
            <div class="header-bot-cnt auth ">
                <div class="header__news">
                    <button class="header-bot__filter-icon">
                        <i class="fas fa-thumbs-up grey" style=""></i>
                    </button>
                    <div class="header__news-center">
                        <input class="header__inp js-open-bs" placeholder="Введите отель, город или страну">
                    </div>
                </div>
            </div>
            <div class="header-profile auth " style="display:none;">
                <a href="#"><img class="header-profile-img" src="http://lbc.ru/images/u/6368.jpg" alt=""></a>
                <span class="header-profile__msgs">
                    <span>989</span>
                </span>
                <div class="header-profile__dropdown" style="display:none;">
                    <div class="header-profile__item">
                        <a href="#" class="header-profile__link">Мой профиль</a>
                    </div>
                    <div class="header-profile__item">
                        <a href="#" class="header-profile__link">Мои интересы</a>
                    </div>
                    <div class="header-profile__item">
                        <a href="#" class="header-profile__link">Мои действия</a>
                    </div>
                    <div class="header-profile__item">
                        <a href="#" class="header-profile__link">Мои друзья</a>
                    </div>
                    <div class="header-profile__item">
                        <a href="#" class="header-profile__link">Избранные отели</a>
                    </div>
                    <div class="header-profile__item">
                        <a href="#" class="header-profile__link">Уведомления</a>
                    </div>
                    <div class="header-profile__item">
                        <a href="#" class="header-profile__link red">Выйти</a>
                    </div>
                </div>
            </div>
            <span class="header-bot__key js-show-auth"></span>
            <div class="header-lang">
                <div class="lang-block js-lang-open">
                    <span class="lang-block__cnt">Rus</span>
                    <i class="fa fa-chevron-down lang__arr" aria-hidden="true"></i>
                </div>
                <div class="lang-block__dropdown">
                    <div class="lang-block__lang js-lang-change" style="display: none;">Rus</div>
                    <div class="lang-block__lang js-lang-change">Eng</div>
                </div>
            </div>
        </div>
    </header>
    <!--
    <div id="auth-pp" class="agreement-pp  registration-form mfp-hide">
        <div class="agreement-pp__mdl">
            <div class="agreement-pp__section">
                <div class="tabs-block">
                    <div class="tabs-bar">
                        <div id="auth-pp-authorization" class="agreement-pp__tab active">Авторизация</div>
                        <div id="auth-pp-registration" class="agreement-pp__tab">Регистрация</div>
                        <div id="auth-pp-reqLastNew" class="agreement-pp__tab">Доп инфо</div>
                        <div id="auth-pp-reqFinish" class="agreement-pp__tab">End</div>
                        <div id="auth-pp-remindPass" class="agreement-pp__tab">Напомнить пароль</div>
                        <div class="agreement-pp__line" style="width: 101px"></div>
                        <div class="agreement-pp__close filter-modal-close"></div>
                    </div>
                    <div class="panel" id="auth-pp-authorizationPanel">
                        <div class="section  registration ">
                            <div class="registration__line">
                                <div class="bth__inp-block error">
                                    <input type="text" class="bth__inp bold js-input-label" id="regEmail">
                                    <label for="regEmail" class="bth__inp-lbl">email - логин</label>
                                    <div class="hint-block hint-block--abs">
                                        <i class="fa fa-question-circle question-error" aria-hidden="true"></i>
                                        <div class="hint">
                                            <p class="bth__cnt">Текст подсказки</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="registration__line">
                                <div class="bth__inp-block ">
                                    <input type="password" class="bth__inp bold js-input-label" value="" id="regPass">
                                    <label for="regPass" class="bth__inp-lbl">Пароль</label>
                                    <i class="auth-form__eye js-open-eye"></i>
                                </div>
                            </div>
                            <button class="bth__btn registration__btn  mt20">Войти</button>
                        </div>
                    </div>
                    <div class="panel" id="auth-pp-registrationPanel" style="display: none">
                        <div class="registration__bubble mt10">
                            <div class="registration__bubble-item ">
                                <input type="radio" name="type-profile" id="type-profile-1" class="registration__bubble-inp">
                                <label for="type-profile-1" class="registration__bubble-lb">
                                    <span> Я турист</span>
                                </label>
                            </div>
                            <div class="registration__bubble-item ">
                                <input type="radio" name="type-profile" id="type-profile-2" class="registration__bubble-inp js-act-phone">
                                <label for="type-profile-2" class="registration__bubble-lb"><span>Турагент</span></label>
                            </div>
                            <div class="registration__bubble-item ">
                                <input type="radio" name="type-profile" id="type-profile-3" class="registration__bubble-inp  js-act-phone">
                                <label for="type-profile-3" class="registration__bubble-lb"><span>Отельер</span></label>
                            </div>
                            <div class="registration__bubble-item">
                                <input type="radio" name="type-profile" id="type-profile-4" class="registration__bubble-inp  js-act-phone">
                                <label for="type-profile-4" class="registration__bubble-lb"><span>Гид</span></label>
                                <div class="hint-block hint-block--abs">
                                    <i class="fa fa-question-circle question-error" aria-hidden="true"></i>
                                    <div class="hint">
                                        <p class="bth__cnt">Текст подсказки</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section registration ">
                            <div class="registration__line">
                                <div class="bth__inp-block ">
                                    <input type="text" class="bth__inp bold js-input-label" id="regName">
                                    <label for="regName" class="bth__inp-lbl">Имя</label>
                                </div>
                            </div>
                            <div class="registration__line mt25">
                                <div class="rbt-block d-ib mr20">
                                    <input type="radio" name="male" class="rbt" id="male1">
                                    <label class="label-rbt" for="male1">
                                        <span class="rbt-cnt uppercase">Мужчина</span>
                                    </label>
                                </div>
                                <div class="rbt-block  d-ib ">
                                    <input type="radio" name="male" class="rbt" id="male2">
                                    <label class="label-rbt" for="male2">
                                        <span class="rbt-cnt uppercase">Женщина</span>
                                    </label>
                                    <div class="hint-block hint-block--abs">
                                        <i class="fa fa-question-circle question-error" aria-hidden="true"></i>
                                        <div class="hint">
                                            <p class="bth__cnt">Текст подсказки</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section registration registration--border">
                            <div class="registration__line js-show-phone">
                                <div class="bth__inp-block ">
                                    <input type="text" class="bth__inp bold js-input-label" id="regPhone">
                                    <label for="regPhone" class="bth__inp-lbl">Мобильный телефон  </label>
                                </div>
                            </div>
                            <div class="registration__line">
                                <div class="bth__inp-block ">
                                    <input type="text" class="bth__inp bold js-input-label" id="regEmailOsn">
                                    <label for="regEmailOsn" class="bth__inp-lbl">email регистрации - Ваш логин </label>
                                </div>
                            </div>
                            <div class="registration__line">
                                <div class="bth__inp-block ">
                                    <input type="password" class="bth__inp bold js-input-label" id="regPassNew" value="">
                                    <label for="regPassNew" class="bth__inp-lbl">Пароль</label>
                                    <i class="auth-form__eye js-open-eye"></i>
                                </div>
                            </div>
                            <div class="registration__line">
                                <div class="bth__inp-block ">
                                    <input type="password" class="bth__inp bold js-input-label" id="regPassNewRep" value="">
                                    <label for="regPassNewRep" class="bth__inp-lbl">Повторить пароль</label>
                                    <i class="auth-form__eye js-open-eye"></i>
                                </div>
                            </div>
                        </div>
                        <div class="registration__btn-block mt20">
                            <button class="bth__btn registration__btn js-show-error ">Продолжить*</button>
                            <div class="registration__btn-text registration__btn-text--abs">
                                <p class="bth__cnt bth__cnt--sm">*Нажимая на кнопку "продолжить", я принимаю <a href="#p-agreement-pp " class="p-agreement-pp agree">Соглашение об обработке личных данных</a> и
                                    <a class="p-agreement-pp site-role" href="#p-agreement-pp">Правила сайта</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="panel" id="auth-pp-remindPassPanel" style="display: none">
                        <div class="pass-step1">
                            <div class="section  registration ">
                                <div class="registration__line">
                                    <div class="bth__inp-block error">
                                        <input type="text" class="bth__inp bold js-input-label" id="regRemindEmail">
                                        <label for="regRemindEmail" class="bth__inp-lbl">email</label>
                                        <div class="hint-block hint-block--abs">
                                            <i class="fa fa-question-circle question-error" aria-hidden="true"></i>
                                            <div class="hint">
                                                <p class="bth__cnt">Текст подсказки</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="bth__btn registration__btn  jsPassStep2 mt20">Напомнить</button>
                            </div>
                        </div>
                        <div class="pass-step2" style="display:none;">
                            <div class="section registration ">
                                <p class="bth__cnt bth__cnt--big">Остался один шаг!</p>
                                <p class="bth__cnt bth__cnt--big mt20">Проверьте email и подтвердите регистрацию на
                                    проекте.</p>
                            </div>
                        </div>
                    </div>
                    <div class="panel" id="auth-pp-reqLastNewPanel" style="display: none">
                        <p class=" fz18">Мы будем признательны, если Вы укажите Ваши дополнительные
                            данные.</p>
                        <div class="section registration ">
                            <div class="registration__line">
                                <div class="bth__inp-block registration__birth ">
                                    <div class="SumoSelect sumo_auth-pp-regDay" tabindex="0"><select type="text" name="auth-pp-regDay" class="SumoUnder" tabindex="-1">
                                        <option disabled="" selected="" value="Дата рождения">Дата рождения</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                    </select><p class="CaptionCont SelectBox" title=" Дата рождения"><span class="placeholder"> Дата рождения</span><label><i></i></label></p><div class="optWrapper"><ul class="options"><li class="opt disabled selected"><label>Дата рождения</label></li><li class="opt"><label>1</label></li><li class="opt"><label>2</label></li><li class="opt"><label>3</label></li><li class="opt"><label>4</label></li><li class="opt"><label>5</label></li><li class="opt"><label>6</label></li><li class="opt"><label>7</label></li><li class="opt"><label>8</label></li><li class="opt"><label>9</label></li><li class="opt"><label>10</label></li><li class="opt"><label>11</label></li><li class="opt"><label>12</label></li><li class="opt"><label>13</label></li><li class="opt"><label>14</label></li><li class="opt"><label>15</label></li><li class="opt"><label>16</label></li><li class="opt"><label>17</label></li><li class="opt"><label>18</label></li><li class="opt"><label>19</label></li><li class="opt"><label>20</label></li><li class="opt"><label>21</label></li><li class="opt"><label>22</label></li><li class="opt"><label>23</label></li><li class="opt"><label>24</label></li><li class="opt"><label>25</label></li><li class="opt"><label>26</label></li><li class="opt"><label>27</label></li><li class="opt"><label>28</label></li><li class="opt"><label>29</label></li><li class="opt"><label>30</label></li></ul></div></div>
                                </div>
                                <div class="bth__inp-block registration__birth ">
                                    <select type="text" id="auth-pp-regMonth" tabindex="-1" class="selectized" style="display: none;"><option value="" selected="selected"></option></select><div class="selectize-control single"><div class="selectize-input items not-full has-options"><input type="text" autocomplete="off" tabindex="" id="auth-pp-regMonth-selectized" placeholder="Месяц" style="width: 44.9625px;"></div><div class="selectize-dropdown single" style="display: none; width: 100px; top: 100px; left: 0px;"><div class="selectize-dropdown-content"></div></div></div>
                                </div>
                                <div class="bth__inp-block registration__birth ">
                                    <select type="text" id="auth-pp-regYear" tabindex="-1" class="selectized" style="display: none;"><option value="" selected="selected"></option></select><div class="selectize-control single"><div class="selectize-input items not-full has-options"><input type="text" autocomplete="off" tabindex="" id="auth-pp-regYear-selectized" placeholder="Год" style="width: 27.675px;"></div><div class="selectize-dropdown single" style="display: none; width: 100px; top: 100px; left: 0px;"><div class="selectize-dropdown-content"></div></div></div>
                                </div>
                            </div>
                            <div class="registration__line">
                                <div class=" bth__inp-block hotel-name">
                                    <label for="auth-pp-redCity2-selectized" class="bth__inp-lbl js-input-label lbl-select active">Ваш город</label>
                                    <select class="select selectized" id="auth-pp-redCity2" tabindex="-1" style="display: none;"><option value="123" selected="selected">Москва, Россия</option></select><div class="selectize-control select single"><div class="selectize-input items full has-options has-items"><div class="item" data-value="123">Москва, Россия</div><input type="text" autocomplete="off" tabindex="" id="auth-pp-redCity2-selectized" style="width: 4px;"></div><div class="selectize-dropdown single select" style="display: none;"><div class="selectize-dropdown-content"></div></div></div>

                                    <i class="registration__cross"></i>
                                </div>
                            </div>
                            <div class="registration__line registration__line--border">
                                <p class="mb15 fz18">Взять мои данные из социальной сети</p>
                                <a href="#" class="registration__social-link vk"></a>
                                <a href="#" class="registration__social-link fb"></a>
                                <a href="#" class="registration__social-link ok"></a>
                                <a href="#" class="registration__social-link tw"></a>
                                <a href="#" class="registration__social-link insta"></a>
                            </div>
                        </div>
                        <div class="registration__btn-block mt20">
                            <button class="bth__btn registration__btn jsRegStep2 ">Сохранить данные</button>
                            <button class="bth__btn bth__btn--contur registration__btn  ">Пропустить</button>
                        </div>
                    </div>
                    <div class="panel" id="auth-pp-reqFinishPanel" style="display: none">
                        <p class=" fz18 mb40 mt40">Осталось проверить  <a href="#">kurchavova@list.ru</a> и подтвердить регистрацию.</p>
                        <button class="bth__btn registration__btn jsRegStep2 ">Проверить email </button>
                    </div>
                </div>
            </div>
        </div>
    </div> -->    
    <?= Alert::widget() ?>
    <?= $content ?>
    <footer class="footer footer2018">
        <div class="footer__line footer__line--bot">
            <div class="footer__copyright">
                <p class="footer__cnt bold  copyright">© TopHotels 2003-<?= date('Y') ?></p>
                <a href="#legal-information-pp" class="legal-information-pp footer__cnt-link legal ">правовая информация</a>
            </div>
            <div class="footer__cnt-wrap">
                <p class="footer__cnt footer__cnt--sm fz12 footer-text">Все права защищены. Перепечатка, включение информации, содержащейся в рекламных и иных материалах сайта, во всевозможные базы данных для дальнейшего их коммерческого использования, размещение таких материалов в любых СМИ и Интернете допускаются только с письменного разрешения редакции сайта. Предоставляемый сервис является информационным. Администрация сайта не несет ответственности за достоверность и качество информации, предоставляемой посетителями сайта, в том числе турфирмами и отельерами. </p>
            </div>
        </div>
    </footer>
</div>
<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>

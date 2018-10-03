<?php
use yii\bootstrap\ActiveForm;
use yii\helpers\Html;
?>
<div class="order-form-wrapper">
	<div class="tabs-block">
		<div class="tabs-bar">
			<div id="form" class="tab active">Простая форма</div><!--
			<div id="step1" class="tab">Параметры тура</div>
			<div id="step2" class="tab">Шаг 2</div>
			<div id="formStep2" class="tab">Рега</div>-->
			<div class="line" style="width: 108.388px; left: 0px;"></div>
		</div>
		<!--
		<div class="panel" id="step1Panel" style="display: none;">
			<div class="orders-wrap">
				<div class=" order-line orders-wrap__dbl mt40">
					<div class="order__inp-block ">
						<div class="order__inp form-date">
							<span class="date-text" id="datePicker1" placeholder="Please pick a day" style=""></span>
							чт 14.09.2017 <span class="fz14 normal">+ 12 дней</span>
						</div><div id="js-dpicker-filter-datePicker1" class="hidden" style="z-index: 2008; transform-origin: 50% 0px 0px; max-width: 520px; top: 0px; left: 0px;"><div class="form-popup__mdl"><ul id="dateMonthList" class="form-popup__month-list"><li data-id="0" data-mon="9" data-year="2018" class="js-calendar-month form-popup__month-item">окт</li><li data-id="1" data-mon="10" data-year="2018" class="js-calendar-month form-popup__month-item">ноя</li><li data-id="2" data-mon="11" data-year="2018" class="js-calendar-month form-popup__month-item">дек</li><li data-id="3" data-mon="0" data-year="2019" class="js-calendar-month form-popup__month-item">янв</li><li data-id="4" data-mon="1" data-year="2019" class="js-calendar-month form-popup__month-item">фев</li><li data-id="5" data-mon="2" data-year="2019" class="js-calendar-month form-popup__month-item">мар</li><li data-id="6" data-mon="3" data-year="2019" class="js-calendar-month form-popup__month-item">апр</li><li data-id="7" data-mon="4" data-year="2019" class="js-calendar-month form-popup__month-item">май</li><li data-id="8" data-mon="5" data-year="2019" class="js-calendar-month form-popup__month-item">июн</li><li data-id="9" data-mon="6" data-year="2019" class="js-calendar-month form-popup__month-item">июл</li><li data-id="10" data-mon="7" data-year="2019" class="js-calendar-month form-popup__month-item">авг</li><li data-id="11" data-mon="8" data-year="2019" class="js-calendar-month form-popup__month-item">сен</li></ul></div><div class="form-popup__dates"><div data-role="date-range" class="gmi-picker-panel gmi-date-range-picker " style=""><div class="gmi-picker-panel__body gmi-date-range-picker__body"><div class="gmi-picker-panel__body__main f-lt"><div class="gmi-date-range-picker__body__header"><p>2018  Окт</p><em data-action="prev-year" class="gmi-date-range-picker__header__icon-btn gmi-date-range-picker__btn--prev gmi-date-range-picker__btn--prev-year iconfont icon-double-arrow-left"></em><em data-action="prev-month" class="gmi-date-range-picker__header__icon-btn gmi-date-range-picker__btn--prev gmi-date-range-picker__btn--prev-month fa fa-angle-left"></em></div><table cellspacing="0" cellpadding="0" class="gmi-date-table"><tbody><tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th></tr><tr class="gmi-date-table__row"><td data-year="2018" data-month="9" class="available disabled">1</td><td data-year="2018" data-month="9" class="available today in-range start-date">2</td><td data-year="2018" data-month="9" class="available in-range">3</td><td data-year="2018" data-month="9" class="available in-range">4</td><td data-year="2018" data-month="9" class="available in-range">5</td><td data-year="2018" data-month="9" class="available in-range">6</td><td data-year="2018" data-month="9" class="available in-range">7</td></tr><tr class="gmi-date-table__row"><td data-year="2018" data-month="9" class="available in-range">8</td><td data-year="2018" data-month="9" class="available in-range">9</td><td data-year="2018" data-month="9" class="available in-range">10</td><td data-year="2018" data-month="9" class="available in-range">11</td><td data-year="2018" data-month="9" class="available in-range">12</td><td data-year="2018" data-month="9" class="available in-range">13</td><td data-year="2018" data-month="9" class="available in-range">14</td></tr><tr class="gmi-date-table__row"><td data-year="2018" data-month="9" class="available in-range">15</td><td data-year="2018" data-month="9" class="available in-range">16</td><td data-year="2018" data-month="9" class="available in-range">17</td><td data-year="2018" data-month="9" class="available in-range">18</td><td data-year="2018" data-month="9" class="available in-range">19</td><td data-year="2018" data-month="9" class="available in-range">20</td><td data-year="2018" data-month="9" class="available in-range">21</td></tr><tr class="gmi-date-table__row"><td data-year="2018" data-month="9" class="available in-range">22</td><td data-year="2018" data-month="9" class="available in-range">23</td><td data-year="2018" data-month="9" class="available in-range">24</td><td data-year="2018" data-month="9" class="available in-range">25</td><td data-year="2018" data-month="9" class="available in-range">26</td><td data-year="2018" data-month="9" class="available in-range">27</td><td data-year="2018" data-month="9" class="available in-range">28</td></tr><tr class="gmi-date-table__row"><td data-year="2018" data-month="9" class="available in-range">29</td><td data-year="2018" data-month="9" class="available in-range">30</td><td data-year="2018" data-month="9" class="available in-range">31</td><td data-year="2018" data-month="10" class="next-month">1</td><td data-year="2018" data-month="10" class="next-month">2</td><td data-year="2018" data-month="10" class="next-month">3</td><td data-year="2018" data-month="10" class="next-month">4</td></tr><tr class="gmi-date-table__row"><td data-year="2018" data-month="10" class="next-month">5</td><td data-year="2018" data-month="10" class="next-month">6</td><td data-year="2018" data-month="10" class="next-month">7</td><td data-year="2018" data-month="10" class="next-month">8</td><td data-year="2018" data-month="10" class="next-month">9</td><td data-year="2018" data-month="10" class="next-month">10</td><td data-year="2018" data-month="10" class="next-month">11</td></tr></tbody></table></div><div class="gmi-picker-panel__body__main f-rt"><div class="gmi-date-range-picker__body__header"><p>2018  Ноя</p><em data-action="next-year" class="gmi-date-range-picker__header__icon-btn gmi-date-range-picker__btn--next gmi-date-range-picker__btn--next-year iconfont icon-double-arrow-right"></em><em data-action="next-month" class="gmi-date-range-picker__header__icon-btn gmi-date-range-picker__btn--next gmi-date-range-picker__btn--next-month fa fa-angle-right"></em></div><table cellspacing="0" cellpadding="0" class="gmi-date-table"><tbody><tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th></tr><tr class="gmi-date-table__row"><td data-year="2018" data-month="9" class="prev-month">29</td><td data-year="2018" data-month="9" class="prev-month">30</td><td data-year="2018" data-month="9" class="prev-month">31</td><td data-year="2018" data-month="10" class="available in-range">1</td><td data-year="2018" data-month="10" class="available in-range">2</td><td data-year="2018" data-month="10" class="available in-range">3</td><td data-year="2018" data-month="10" class="available in-range">4</td></tr><tr class="gmi-date-table__row"><td data-year="2018" data-month="10" class="available in-range">5</td><td data-year="2018" data-month="10" class="available in-range">6</td><td data-year="2018" data-month="10" class="available in-range">7</td><td data-year="2018" data-month="10" class="available in-range">8</td><td data-year="2018" data-month="10" class="available in-range">9</td><td data-year="2018" data-month="10" class="available in-range">10</td><td data-year="2018" data-month="10" class="available in-range">11</td></tr><tr class="gmi-date-table__row"><td data-year="2018" data-month="10" class="available in-range">12</td><td data-year="2018" data-month="10" class="available in-range">13</td><td data-year="2018" data-month="10" class="available in-range">14</td><td data-year="2018" data-month="10" class="available in-range">15</td><td data-year="2018" data-month="10" class="available in-range">16</td><td data-year="2018" data-month="10" class="available in-range">17</td><td data-year="2018" data-month="10" class="available in-range">18</td></tr><tr class="gmi-date-table__row"><td data-year="2018" data-month="10" class="available in-range">19</td><td data-year="2018" data-month="10" class="available in-range">20</td><td data-year="2018" data-month="10" class="available in-range">21</td><td data-year="2018" data-month="10" class="available in-range">22</td><td data-year="2018" data-month="10" class="available in-range">23</td><td data-year="2018" data-month="10" class="available in-range">24</td><td data-year="2018" data-month="10" class="available in-range">25</td></tr><tr class="gmi-date-table__row"><td data-year="2018" data-month="10" class="available in-range">26</td><td data-year="2018" data-month="10" class="available in-range">27</td><td data-year="2018" data-month="10" class="available in-range">28</td><td data-year="2018" data-month="10" class="available in-range">29</td><td data-year="2018" data-month="10" class="available in-range">30</td><td data-year="2018" data-month="11" class="next-month">1</td><td data-year="2018" data-month="11" class="next-month">2</td></tr><tr class="gmi-date-table__row"><td data-year="2018" data-month="11" class="next-month">3</td><td data-year="2018" data-month="11" class="next-month">4</td><td data-year="2018" data-month="11" class="next-month">5</td><td data-year="2018" data-month="11" class="next-month">6</td><td data-year="2018" data-month="11" class="next-month">7</td><td data-year="2018" data-month="11" class="next-month">8</td><td data-year="2018" data-month="11" class="next-month">9</td></tr></tbody></table></div></div></div></div></div>
						<div class="order__inp-label">Даты поездки (период)</div>
					</div>
					<div class="order__inp-block">
						<div class="order__inp  js-show-formDirections">
							<span class="date-text">1 - 14 ночей</span>
						</div>
						<div class="formDirections" style="display: none;">
							<div class="formDirections__wrap">
								<div class="formDirections__top formDirections__top--white">
									<i class="formDirections__bottom-close"></i>
									<div class="formDirections__top-tab active js-act-country uppercase">
										<i class="fas fa-moon mr5"></i>
										Количество ночей
									</div>
								</div>
								<div class="formDirections__bottom js-search-country">
									<div class="formDirections__bottom-blocks">
										<div class="formDirections__bottom-item formDirections__bottom-item--white">
											<div class="form-durability__select ">
												<div class="form-durability__durability">
													<div class="form-durability__select-row">
														<div data-d="1" class="form-durability__select-item js-duration-cell">1
														</div>
														<div data-d="2" class="form-durability__select-item js-duration-cell">2
														</div>
														<div data-d="3" class="form-durability__select-item js-duration-cell">3
														</div>
														<div data-d="4" class="form-durability__select-item js-duration-cell">4
														</div>
														<div data-d="5" class="form-durability__select-item js-duration-cell">5
														</div>
														<div data-d="6" class="form-durability__select-item js-duration-cell">6
														</div>
														<div data-d="7" class="form-durability__select-item js-duration-cell">7
														</div>
													</div>
													<div class="form-durability__select-row">
														<div data-d="8" class="form-durability__select-item js-duration-cell">8
														</div>
														<div data-d="9" class="form-durability__select-item js-duration-cell start">
															9
														</div>
														<div data-d="10" class="form-durability__select-item js-duration-cell selected">
															10
														</div>
														<div data-d="11" class="form-durability__select-item js-duration-cell selected">
															11
														</div>
														<div data-d="12" class="form-durability__select-item js-duration-cell selected">
															12
														</div>
														<div data-d="13" class="form-durability__select-item js-duration-cell selected">
															13
														</div>
														<div data-d="14" class="form-durability__select-item js-duration-cell selected">
															14
														</div>
													</div>
													<div class="form-durability__select-row">
														<div data-d="15" class="form-durability__select-item js-duration-cell selected">
															15
														</div>
														<div data-d="16" class="form-durability__select-item js-duration-cell selected">
															16
														</div>
														<div data-d="17" class="form-durability__select-item js-duration-cell selected">
															17
														</div>
														<div data-d="18" class="form-durability__select-item js-duration-cell end selected">
															18
														</div>
														<div data-d="19" class="form-durability__select-item js-duration-cell">19
														</div>
														<div data-d="20" class="form-durability__select-item js-duration-cell">20
														</div>
														<div data-d="21" class="form-durability__select-item js-duration-cell">21
														</div>
													</div>
													<div class="form-durability__select-row">
														<div data-d="22" class="form-durability__select-item js-duration-cell">22
														</div>
														<div data-d="23" class="form-durability__select-item js-duration-cell">23
														</div>
														<div data-d="24" class="form-durability__select-item js-duration-cell">24
														</div>
														<div data-d="25" class="form-durability__select-item js-duration-cell">25
														</div>
														<div data-d="26" class="form-durability__select-item js-duration-cell">26
														</div>
														<div data-d="27" class="form-durability__select-item js-duration-cell">27
														</div>
														<div data-d="28" class="form-durability__select-item js-duration-cell">28
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="order__inp-label">Пребывание</div>
					</div>
				</div>
				<div class="order-line  orders-wrap__dbl   mt40">
					<div class="order__inp-block">
						<div class="order__inp  js-show-formDirections">
							<span class="date-text">2 взрослых</span>
						</div>
						<div class="formDirections">
							<div class="formDirections__wrap">
								<div class="formDirections__top formDirections__top--white">
									<i class="formDirections__bottom-close"></i>
									<div class="formDirections__top-tab active js-act-country uppercase">
										<i class="fas fa-male mr5"></i>
										Количество человек
									</div>
								</div>
								<div class="formDirections__bottom js-search-country">
									<div class="formDirections__bottom-blocks h-auto">
										<div class="formDirections__bottom-item formDirections__bottom-item--white">
											<div class="form-durability__select ">
												<div class="form-adults">
													<div class="form-adults__item adults">
														<button class="form-adults__item-btn">-</button>
														<div class="form-adults__item-md">2 взрослых</div>
														<button class="form-adults__item-btn">+</button>
													</div>
													<div class="form-adults__item SumoSelect">
														<div class="SumoSelect sumo_hotelRating-adults" tabindex="0"><select name="hotelRating-adults" class="SumoUnder" tabindex="-1">
															<option value="Добавить ребенка">Добавить ребенка</option>
															<option value="Младенец">Младенец</option>
															<option value="Ребенок 1 год">Ребенок 1 год</option>
															<option value="Ребенок 2 года">Ребенок 2 года</option>
															<option value="Ребенок 3 года">Ребенок 3 года</option>
															<option value="Ребенок 4 года">Ребенок 4 года</option>
															<option value="Ребенок 5 лет">Ребенок 5 лет</option>
														</select><p class="CaptionCont SelectBox" title=" Добавить ребенка"><span> Добавить ребенка</span><label><i></i></label></p><div class="optWrapper"><ul class="options"><li class="opt selected"><label>Добавить ребенка</label></li><li class="opt"><label>Младенец</label></li><li class="opt"><label>Ребенок 1 год</label></li><li class="opt"><label>Ребенок 2 года</label></li><li class="opt"><label>Ребенок 3 года</label></li><li class="opt"><label>Ребенок 4 года</label></li><li class="opt"><label>Ребенок 5 лет</label></li></ul></div></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="order__inp-label">Человек в номере</div>
					</div>
					<div class="order__inp-block currency">
						<div class="order__inp">
							<input class="bth__inp">
						</div>
						<div class="order__inp-label">Бюджет не более не более</div>
						<div class="order__inp-in">
							<div class="order__inp-currency-wrap">
								<span class="date-text">
								<i class="fa fa-rub" aria-hidden="true"></i>
								</span>
								<i class="js-animate fa fa-angle-down"></i>
								<div class="order__inp-currency">
									<div class="order__inp-currency-item"><i data-currency="usd" class="fa fa-usd" aria-hidden="true"></i></div>
									<div class="order__inp-currency-item"><i data-currency="eur" class="fa fa-eur" aria-hidden="true"></i></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="order-line mt30">
				<div class="order-form">
					<label class="order-form-label">
						<input type="radio" class="order-form-input" name="rest" value="-1" checked="">
						<span class="order-form-box"><span></span></span>
						<span class="order-form-text">Пляжный отдых</span>
					</label>
				</div>
				<div class="order-form">
					<label class="order-form-label">
						<input type="radio" class="order-form-input" name="rest" value="-3">
						<span class="order-form-box"><span></span></span>
						<span class="order-form-text">Экскурсионный</span>
					</label>
				</div>
				<div class="order-form">
					<label class="order-form-label">
						<input type="radio" class="order-form-input" name="rest" value="-5">
						<span class="order-form-box"><span></span></span>
						<span class="order-form-text">Горнолыжный</span>
					</label>
				</div>
				<div class="order-form">
					<label class="order-form-label">
						<input type="radio" class="order-form-input" name="rest" value="-2">
						<span class="order-form-box"><span></span></span>
						<span class="order-form-text">Другое</span>
					</label>
				</div>
			</div>
			<div class="section orders-step triple">
				<div class="bth__inp-block mt25 ">
					<input type="text" class="bth__inp bold  js-label" id="Paramname">
					<label for="Paramname" class="bth__inp-lbl">Ваше имя1</label>
				</div>
				<div class="bth__inp-block mt25">
					<input type="text" class="bth__inp bold js-label " id="Paramphone" placeholder="">
					<label for="Paramphone" class="bth__inp-lbl">Телефон</label>
				</div>
				<div class="bth__inp-block mt25 ">
					<input type="text" class="bth__inp bold js-input-label " id="Parammail">
					<label for="Parammail" class="bth__inp-lbl">email</label>
				</div>
			</div>
			<div class="relative">
				<button class="bth__btn  bth__btn--fill  js-show-error  mt30">Выбрать направление*</button>
				<div class="registration__btn-text registration__btn-text--abs long">
					<p class="bth__cnt bth__cnt--sm ">*Нажимая на кнопку "отправить", я принимаю <a href="#p-agreement-pp" class="p-agreement-pp agree">Соглашение об обработке личных
							данных</a> и <a href="#p-agreement-pp" class="p-agreement-pp site-role">Правила
							сайта</a>
					</p>
				</div>
			</div>
		</div>
		<div class="panel" id="step2Panel" style="display: none;">
			<div class="orders-wrap">
				<div class="output-block">
					<a href="#" class="output-block__top">
						<span class="uppercase mr10">Пляжный отдых </span>
						<span class=" mr10">до 500 000 рублей </span>
					</a>
					<div class="output-block__item">
						<div class="output-block__item-block">
							<b class="fz15 mr5">12.07 - 22.07.2018</b>
							<span class="fz13">даты вылета</span>
						</div>
						<div class="output-block__item-block">
							<b class="fz15 mr5">14 ночей</b>
							<span class="fz13">пребывание</span>
						</div>
						<div class="output-block__item-block">
							<b class="fz15 mr5">2 взрослых </b>
							<span class="fz13">человек в номере</span>
						</div>
					</div>
				</div>
				<h2 class="uppercase bth__ttl-h2 mt20">Выберите интересующие вас направление</h2>
				<div class="order-line orders-wrap__cbx-dbl orders-wrap__cbx-dbl--space   mt20">
					<div class="order-line d-ib middle js-show-cbx">
						<div class="relative">
							<div class="bth__inp-block bth__inp-direction js-show-formDirections w100p h-auto">
								<div class="bth__inp ">
									<i class="bth__inp-flag"><img class="bth__img" src="/i/tophotels/russia-new-flag.jpg"></i>
									<span class="date-text d-ib" style="">Ялта </span>
									<span class="grey ml10 fz11 normal">Россия</span>

									<i class="formDirections__bottom-close"></i>
								</div>
							</div>
							<div class="formDirections" style="display: none;">
								<div class="formDirections__wrap">
									<div class="formDirections__top">
										<i class="formDirections__bottom-close"></i>
										<span class="formDirections__top-tab js-act-country">
										<i class="bth__inp-flag"><img class="bth__img" src="/i/tophotels/russia-new-flag.jpg"></i>
										<i class="fa  fa-bars js-act-hide-flag"></i>
										Страны
									</span>
										<span class="formDirections__top-tab js-act-city"><i class="fa fa-plane"></i>Города</span>
										<span class="formDirections__top-tab js-act-hotels"><i class="fas fa-home"></i>Отели</span>
									</div>
									<div class="formDirections__bottom js-search-country">
										<div class="formDirections__search">
											<input class="bth__inp" type="text" placeholder="Поиск страны">
										</div>
										<div class="formDirections__bottom-blocks">
											<div class="formDirections__bottom-item js-show-flag">
												<span class="formDirections__city">Абхазия</span>
												<span class="formDirections__count">8 городов</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city">Австрия</span>
												<span class="formDirections__count">39 городов</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city">Болгария</span>
												<span class="formDirections__count">39 городов</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city">Бельгия</span>
												<span class="formDirections__count">39 городов</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city">Беларусь</span>
												<span class="formDirections__count">2 города</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city">Великобритания</span>
												<span class="formDirections__count">39 городов</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city">Ватикан</span>
												<span class="formDirections__count">1 город</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city">Гонудрас</span>
												<span class="formDirections__count">1 город</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city">Дания</span>
												<span class="formDirections__count">1 город</span>
											</div>
										</div>
									</div>
									<div class="formDirections__bottom js-search-city" style="display: none">
										<div class="formDirections__search">
											<input class="bth__inp" type="text" placeholder="Поиск города">
										</div>
										<div class="formDirections__bottom-blocks">
											<div class="formDirections__city">
												<div class="formDirections__bottom-item">
													<span class="formDirections__city">Ларнака</span>
													<span class="formDirections__count">39 отелей</span>
													<i class="formDirections__arr fas fa-angle-down"></i>
												</div>
												<div class="formDirections__drop-city">
													<div class="bth__cnt">Агитос Антониос</div>
													<div class="bth__cnt">Кампос</div>
													<div class="bth__cnt">Каравостаси</div>
													<div class="bth__cnt">Никитари</div>
												</div>
											</div>
											<div class="formDirections__city">
												<div class="formDirections__city">
													<div class="formDirections__bottom-item">
														<span class="formDirections__city">Айя-Напа</span>
														<span class="formDirections__count">20 отелей</span>
														<i class="formDirections__arr fas fa-angle-down"></i>
													</div>
												</div>
												<div class="formDirections__drop-city">
													<div class="bth__cnt">Агитос Антониос</div>
													<div class="bth__cnt">Кампос</div>
													<div class="bth__cnt">Каравостаси</div>
													<div class="bth__cnt">Никитари</div>
												</div>
											</div>
											<div class="formDirections__city">
												<div class="formDirections__bottom-item">
													<span class="formDirections__city">Лимассол</span>
													<span class="formDirections__count">20 отелей</span>
												</div>
											</div>
											<div class="formDirections__city">
												<div class="formDirections__bottom-item">
													<span class="formDirections__city">Никосия</span>
													<span class="formDirections__count">15 отелей</span>
												</div>
											</div>
											<div class="formDirections__city">
												<div class="formDirections__bottom-item">
													<span class="formDirections__city">Паралимни</span>
													<span class="formDirections__count">1 отель</span>
												</div>
											</div>
											<div class="formDirections__city">
												<div class="formDirections__bottom-item">
													<span class="formDirections__city">Пафос</span>
													<span class="formDirections__count">11 отелей</span>
												</div>
											</div>
											<div class="formDirections__city">
												<div class="formDirections__bottom-item">
													<span class="formDirections__city">Протарас</span>
													<span class="formDirections__count">1 отель</span>
												</div>
											</div>
										</div>
									</div>
									<div class="formDirections__bottom js-search-hotels" style="display: none">
										<div class="formDirections__search">
											<input class="bth__inp" type="text" placeholder="Поиск отеля">
										</div>
										<div class="formDirections__bottom-blocks">
											<div class="formDirections__bottom-item js-show-flag">
												<span class="formDirections__city"><span class="formDirections__cut"> Mriya Resort &amp; Spa (Мрия Резорт энд Спа) </span>5*</span>
												<span class="formDirections__count">Агитос Антониос</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city"><span class="formDirections__cut"> Resort &amp; Spa</span> 5*</span>
												<span class="formDirections__count">Кампос</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city"><span class="formDirections__cut"> Resort &amp; Spa Mriya </span>5*</span>
												<span class="formDirections__count">Каравостаси</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city"><span class="formDirections__cut"> Resort &amp; Spa Mriya</span> 5*</span>
												<span class="formDirections__count">Никитари</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city"><span class="formDirections__cut"> Alva Donna Exclusive Hotel &amp; Spa</span> 5*</span>
												<span class="formDirections__count">Тикитари</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city"><span class="formDirections__cut"> Don Udo's Hotel and Restauran </span>2*</span>
												<span class="formDirections__count">Тикититари</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city"><span class="formDirections__cut"> Peninsula Bangkok</span> 5*</span>
												<span class="formDirections__count">Кампос</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city"><span class="formDirections__cut">Wind of Lara Hotel &amp; Spa </span> 5*</span>
												<span class="formDirections__count">Каравостаси</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city"><span class="formDirections__cut">Candeo Hotels Tokyo Roppongi</span> 4*</span>
												<span class="formDirections__count">Тикититари</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city"><span class="formDirections__cut">Larnaca Golden Beach Apts</span> 5*</span>
												<span class="formDirections__count">Агитос Антониос</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city"><span class="formDirections__cut">Hotel Glaros</span> 5*</span>
												<span class="formDirections__count">Агитос Антониос</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class=" cbx-block cbx-block--in-b  cbx-block--small w-auto" style="">
						<input type="checkbox" class="cbx" id="otherWay">
						<label class="label-cbx pl30" for="otherWay">
							<span class="cbx-cnt">Рассмотрю другие направления</span>
						</label>
					</div>
				</div>
				<div class="order-line mt20" style="">
					<div class="orders-wrap__cbx-wrap orders-wrap__stars mr10">
						<div class="order__inp-label static">Категория отеля</div>
						<div class="cbx-block ">
							<input type="checkbox" name="categoty" class="cbx" id="categoty1">
							<label class="label-cbx pl25" for="categoty1">
								<span class="cbx-cnt">5 <i class="fa fa-star"></i></span>
							</label>
						</div>
						<div class="cbx-block  ">
							<input type="checkbox" name="categoty" class="cbx" id="categoty2">
							<label class="label-cbx pl25" for="categoty2">
								<span class="cbx-cnt">4 <i class="fa fa-star"></i></span>
							</label>
						</div>
						<div class="cbx-block    ">
							<input type="checkbox" name="categoty" class="cbx" id="categoty3">
							<label class="label-cbx pl25" for="categoty3">
								<span class="cbx-cnt">3 <i class="fa fa-star"></i></span>
							</label>
						</div>
						<div class="cbx-block  ">
							<input type="checkbox" name="categoty" class="cbx" id="categoty4">
							<label class="label-cbx pl25" for="categoty4">
								<span class="cbx-cnt">2<i class="fa fa-star ml5"></i> и ниже </span>
							</label>
						</div>
					</div>
					<div class="orders-wrap__cbx-wrap relative">
						<b class="bth__cnt hotelFilter__green js-show-formDirections">
							<img src="/i/tophotels/crown-green-20.png" width="24" height="18px " class="mr5 va-top">
							рейтинг отеля
						</b>
						<div class="formDirections" style="display: none;">
							<div class="formDirections__wrap">
								<div class="formDirections__top formDirections__top-line">
									<i class="formDirections__bottom-close"></i>
									<div class="formDirections__top-tab js-act-country active">
										<i class="formDirections__crown"></i>
										Рейтинг отеля
									</div>
									<div class="formDirections__top-tab js-act-city">
										<i class="fas fa-comment"></i>
										Кол-во отзывов
									</div>
								</div>
								<div class="formDirections__bottom js-search-country" style="">
									<div class="formDirections__bottom-blocks">
										<div class="formDirections__bottom-blocks">
											<div class="formDirections__bottom-item">
												<span class="formDirections__city">Не важно</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city">Не ниже 5,0</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city">Не ниже 4,75</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city">Не ниже 4,5</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city">Не ниже 4,25</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city">Не ниже 4,0</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city">Не ниже 3,75</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city">Не ниже 3,5</span>
											</div>
											<div class="formDirections__bottom-item">
												<span class="formDirections__city">Не ниже 3,25</span>
											</div>
										</div>
									</div>
								</div>
								<div class="formDirections__bottom js-search-city" style="display: none;">
									<div class="formDirections__bottom-blocks">
										<div class="formDirections__bottom-item">
											<div class="rbt-block ">
												<input type="radio" name="hotels-rev" class="rbt" id="hotels-rev-1" checked="">
												<label class="label-rbt" for="hotels-rev-1">
													<span class="rbt-cnt uppercase">Не важно</span>
												</label>
											</div>
										</div>
										<div class="formDirections__bottom-item">
											<div class="rbt-block ">
												<input type="radio" name="hotels-rev" class="rbt" id="hotels-rev-2">
												<label class="label-rbt" for="hotels-rev-2">
													<span class="rbt-cnt uppercase">Больше 2 отзывов</span>
												</label>
											</div>
										</div>
										<div class="formDirections__bottom-item">
											<div class="rbt-block ">
												<input type="radio" name="hotels-rev" class="rbt" id="hotels-rev-3">
												<label class="label-rbt" for="hotels-rev-3">
													<span class="rbt-cnt uppercase">Больше 5 отзывов</span>
												</label>
											</div>
										</div>
										<div class="formDirections__bottom-item">
											<div class="rbt-block ">
												<input type="radio" name="hotels-rev" class="rbt" id="hotels-rev-4">
												<label class="label-rbt" for="hotels-rev-4">
													<span class="rbt-cnt uppercase">Больше 10 отзывов</span>
												</label>
											</div>
										</div>
										<div class="formDirections__bottom-item">
											<div class="cbx-block  mt0">
												<input type="checkbox" class="cbx" id="hotels-rev-5">
												<label class="label-cbx" for="hotels-rev-5">
													<span class="cbx-cnt uppercase">За последние 2 года</span>
												</label>
											</div>
										</div>
										<div class="formDirections__bottom-item">
											<span class="bth__cnt formDirections__close-red">Закрыть</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="order-line   mt20" style="">
					<div class="orders-wrap__cbx-wrap ">
						<div class="order__inp-label static">Важно в отеле</div>
						<div class="d-ib mr65">
							<div class=" cbx-block  cbx-block--small  block ">
								<input type="checkbox" class="cbx" id="cbxHotel1">
								<label class="label-cbx pl30" for="cbxHotel1">
									<span class="cbx-cnt">1-я линия пляжа</span>
								</label>
							</div>
							<div class=" cbx-block  cbx-block--small block">
								<input type="checkbox" class="cbx" id="cbxHotel2">
								<label class="label-cbx pl30" for="cbxHotel2">
									<span class="cbx-cnt">Питание все включено</span>
								</label>
							</div>
						</div>
						<div class="d-ib">
							<div class=" cbx-block  cbx-block--small block ">
								<input type="checkbox" class="cbx" id="cbxHotel3">
								<label class="label-cbx pl30" for="cbxHotel3">
									<span class="cbx-cnt">Веселая анимация</span>
								</label>
							</div>
							<div class=" cbx-block  cbx-block--small block">
								<input type="checkbox" class="cbx" id="cbxHotel4">
								<label class="label-cbx pl30" for="cbxHotel4">
									<span class="cbx-cnt">Тусовки рядом с отелем</span>
								</label>
							</div>
						</div>
					</div>
				</div>
				<div class="order-line orders-wrap__cbx-wrap  mt20 " style="">
					<div class="order__inp-label static">Для детей</div>
					<div class="d-ib mr108">
						<div class=" cbx-block  cbx-block--small block">
							<input type="checkbox" class="cbx" id="cbxHotelChild1">
							<label class="label-cbx pl30" for="cbxHotelChild1">
								<span class="cbx-cnt">Детский горшок</span>
							</label>
						</div>
						<div class=" cbx-block  cbx-block--small block">
							<input type="checkbox" class="cbx" id="cbxHotelChild2">
							<label class="label-cbx pl30" for="cbxHotelChild2">
								<span class="cbx-cnt">Детские блюда</span>
							</label>
						</div>
					</div>
					<div class="d-ib">
						<div class=" cbx-block  cbx-block--small block">
							<input type="checkbox" class="cbx" id="cbxHotelChild3">
							<label class="label-cbx pl30" for="cbxHotelChild3">
								<span class="cbx-cnt">Пеленальный столик</span>
							</label>
						</div>
						<div class=" cbx-block  cbx-block--small block">
							<input type="checkbox" class="cbx" id="cbxHotelChild4">
							<label class="label-cbx pl30" for="cbxHotelChild4">
								<span class="cbx-cnt">Aнимация</span>
							</label>
						</div>
					</div>
				</div>
				<div class="bth__inp-block order-line orders-wrap__full dbl-txta mt20 " style="">
					<textarea type="text" class="bth__inp bold " id="parametrs" placeholder=""></textarea>
					<label for="parametrs" class="bth__inp-lbl" style="">Дополнительные пожелания</label>
				</div>
				<div class="order-line orders-wrap__cbx-dbl mt20" style="">
					<div class="bth__inp-block mr5 js-show-metro">
						<select class="bth__selectize bold selectized" id="city" tabindex="-1" style="display: none;"><option value="" selected="selected"></option></select><div class="selectize-control bth__selectize bold single"><div class="selectize-input items not-full"><input type="text" autocomplete="off" tabindex="" id="city-selectized" style="width: 4px;"></div><div class="selectize-dropdown single bth__selectize bold" style="display: none;"><div class="selectize-dropdown-content"></div></div></div>
						<label for="city-selectized" class="bth__inp-lbl" style="">Ваш город</label>
					</div>
					<div class="bth__inp-block " style="">
						<select class="bth__selectize bold selectized" id="metro" tabindex="-1" style="display: none;"><option value="" selected="selected"></option></select><div class="selectize-control bth__selectize bold single"><div class="selectize-input items not-full"><input type="text" autocomplete="off" tabindex="" id="metro-selectized" style="width: 4px;"></div><div class="selectize-dropdown single bth__selectize bold" style="display: none;"><div class="selectize-dropdown-content"></div></div></div>
						<label for="metro-selectized" class="bth__inp-lbl" style="">Метро</label>
					</div>
				</div>
				<button class="bth__btn  bth__btn--fill  js-show-error  mt30">Выбрать направление</button>
			</div>
		</div>
		<div class="panel" id="formStep2Panel" style="display: none;">
			<div class="bth__cnt fz18 bold">Спасибо, Ваша заявка отправлена и будет обработана в ближайшее время.</div>
			<div class="mt40 bth__cnt fz18 ">Вы можете оценить работу агента в своем <a href="#">личном кабинете </a> в
				разделе Заявки.
			</div>
			<div class="mt20 bth__cnt fz18 ">Если у Вас нет регистрации это легко сделать за 30 секунд.</div>
			<button class="bth__btn  bth__btn--fill  d-ib mt40 mr10">Регистрация</button>
			<button class="bth__btn bth__btn--290  d-ib  mt40">Авторизация</button>
		</div>
		-->
		<div class="panel" id="formPanel" style="">
			<?php $form = ActiveForm::begin(['id' => 'simple-feedback-form']); ?>
			<div class="orders-wrap">
					<div class="section orders-step">
						<?=$form->field(	$model, 'country', 
											[   'template' => 
													"   <div class='bth__inp-block mt30'>							
															{input}
															{label}
															<div class='hint-block hint-block--abs'>
																<i class='fa fa-question-circle question-error' aria-hidden='true'></i>
																<div class='hint'>
																	<p class='bth__cnt'>Текст подсказки</p>
																</div>
															</div>
														</div>",
												'inputOptions' => 
													['class' => 'bth__inp bold js-label','id' => 'country'], 
												'labelOptions' => 
													['class' => 'bth__inp-lbl', 'for'=> 'country']
                    						])->textInput()->label('Укажите страну, курорт или отель')?>
						<?=$form->field(	$model, 'detailInfo', 
											[   'template' => 
													"   <div class='bth__inp-block long mt20'>							
															{input}
															{label}
															<div class='hint-block hint-block--abs'>
																<i class='fa fa-question-circle question-error' aria-hidden='true'></i>
																<div class='hint'>
																	<p class='bth__cnt'>Текст подсказки</p>
																</div>
															</div>
														</div>",
												'inputOptions' => 
													['class' => 'bth__inp bold js-stop-label','id' => 'parametrs'], 
												'labelOptions' => 
													['class' => 'bth__inp-lbl', 'for'=> 'parametrs']
											])->textarea()->label('	<span class="block  mb5">- укажите ваши предпочтения по отелю</span>
																	<span class="block mb5">- ваш бюджет</span>
																	<span class="block">- другие пожелания</span>')?>						
					</div>
					<div class="section orders-step triple">
						<?=$form->field(	$model, 'name', 
												[   'template' => 
														"<div class='bth__inp-block mt30 js-add-error' style='width:220px;'>							
																{input}
																{label}
																<div class='hint-block hint-block--abs'>
																	<i class='fa fa-question-circle question-error' aria-hidden='true'></i>
																	<div class='hint'>
																		<p class='bth__cnt'>Текст подсказки</p>
																	</div>
																</div>
															</div>",
													'inputOptions' => 
														['class' => 'bth__inp bold js-label','id' => 'name'], 
													'labelOptions' => 
														['class' => 'bth__inp-lbl', 'for'=> 'name']
												])->textarea()->label('Ваше имя')
						
						?><?=$form->field(	$model, 'phone', 
												[   'template' => 
														"<div class='bth__inp-block mt30 js-add-error' style='width:220px;'>							
																{input}
																{label}
																<div class='hint-block hint-block--abs'>
																	<i class='fa fa-question-circle question-error' aria-hidden='true'></i>
																	<div class='hint'>
																		<p class='bth__cnt'>Текст подсказки</p>
																	</div>
																</div>
															</div>",
													'inputOptions' => 
														['class' => 'bth__inp bold js-label','id' => 'phone'], 
													'labelOptions' => 
														['class' => 'bth__inp-lbl', 'for'=> 'phone']
												])->textarea()->label('Телефон')
						?><?=$form->field(	$model, 'mail', 
												[   'template' => 
														"<div class='bth__inp-block mt30 js-add-error' style='width:220px;'>							
																{input}
																{label}
																<div class='hint-block hint-block--abs'>
																	<i class='fa fa-question-circle question-error' aria-hidden='true'></i>
																	<div class='hint'>
																		<p class='bth__cnt'>Текст подсказки</p>
																	</div>
																</div>
															</div>",
													'inputOptions' => 
														['class' => 'bth__inp bold js-label','id' => 'mail'], 
													'labelOptions' => 
														['class' => 'bth__inp-lbl', 'for'=> 'mail']
												])->textarea()->label('email')
				?></div>
			</div>
			<div class="relative">
				<button class="bth__btn  bth__btn--fill  js-show-error  mt30" type="submit">Отправить заявку* <span class="load-more-spinner" style="display: none">
					<i class="load-more-spinner__bounce"></i>
					<i class="load-more-spinner__bounce"></i>
					<i class="load-more-spinner__bounce"></i>
				</span></button>
				<div class="registration__btn-text registration__btn-text--abs registration__btn-text--abs-simple">
					<p class="bth__cnt bth__cnt--sm">*Нажимая на кнопку "отправить", я принимаю <a href="#p-agreement-pp" class="p-agreement-pp agree">Соглашение об обработке личных
							данных</a> и <a href="#p-agreement-pp" class="p-agreement-pp role-site">Правила
							сайта</a></p>
				</div>
			</div>			
			<?php 
				if(isset($successfullSending) && $successfullSending){
					echo "<pre style='color: green;font-size:18px;'>". "Ваша заявка успешно отправлена" ."</pre>";
				}
			?>
			<?php ActiveForm::end(); ?>
		</div>
	</div>
</div>
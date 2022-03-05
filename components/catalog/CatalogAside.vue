<template>
  <div class="aside">
    <form class="aside__form">
      <div class="aside__search aside__block">
        <input class="aside__search-input" type="text" placeholder="Поиск">
      </div>
      <div class="aside__price aside__block">
        <div class="aside__top">
          <h6 class="aside__top-title">Цена:</h6>
          <img
            class="aside__top-arrow"
            src="@/assets/images/icons/select-icon.svg"
            alt=""
          />
        </div>
        <div class="aside__body aside__price-body">
          <input class="aside__price-input aside__price-from" type="text" placeholder="0 ₸"/>
          <input class="aside__price-input" type="text" value="15.000 ₸"/>
        </div>
      </div>
      <div class="aside__product aside__block">
        <div class="aside__top">
          <h6 class="aside__top-title">Товар:</h6>
          <img
            class="aside__top-arrow"
            src="@/assets/images/icons/select-icon.svg"
            alt=""
          />
        </div>
        <div class="aside__body">
          <div class="aside__checkbox">
            <input id="bags" class="aside__check" type="checkbox" />
            <label class="aside__label" for="bags"> Сумки </label>
          </div>
          <div class="aside__checkbox">
            <input id="clock" class="aside__check" type="checkbox" />
            <label class="aside__label" for="clock"> Часы </label>
          </div>
          <div class="aside__checkbox">
            <input id="glasses" class="aside__check" type="checkbox" />
            <label class="aside__label" for="glasses"> Очки </label>
          </div>
          <div class="aside__checkbox">
            <input id="accessories" class="aside__check" type="checkbox" />
            <label class="aside__label" for="accessories"> Аксессуары </label>
          </div>
          <div class="aside__checkbox">
            <input id="shoes" class="aside__check" type="checkbox" />
            <label class="aside__label" for="shoes"> Обувь </label>
          </div>
        </div>
      </div>
      <div class="aside__discount aside__block">
        <div class="aside__top">
          <h6 class="aside__top-title">Скидка:</h6>
          <img
            class="aside__top-arrow"
            src="@/assets/images/icons/select-icon.svg"
            alt=""
          />
        </div>
        <div class="aside__body">
          <div class="aside__checkbox">
            <input id="12%" class="aside__check" type="checkbox" />
            <label class="aside__label" for="12%"> 12% </label>
          </div>
          <div class="aside__checkbox">
            <input id="15%" class="aside__check" type="checkbox" />
            <label class="aside__label" for="15%"> 15% </label>
          </div>
          <div class="aside__checkbox">
            <input id="20%" class="aside__check" type="checkbox" />
            <label class="aside__label" for="20%"> 20% </label>
          </div>
          <div class="aside__checkbox">
            <input id="40%" class="aside__check" type="checkbox" />
            <label class="aside__label" for="40%"> 40% </label>
          </div>
        </div>
      </div>
      <div class="aside__colors aside__block">
        <div class="aside__top">
          <h6 class="aside__top-title">Цвета:</h6>
          <img
            class="aside__top-arrow"
            src="@/assets/images/icons/select-icon.svg"
            alt=""
          />
        </div>
        <div class="aside__body">
          <div class="aside__checkbox">
            <input id="biscuit" class="aside__check" type="checkbox" />
            <label class="aside__label" for="biscuit"> Бисквит </label>
          </div>
          <div class="aside__checkbox">
            <input id="bordeaux" class="aside__check" type="checkbox" />
            <label class="aside__label" for="bordeaux"> Бордо </label>
          </div>
          <div class="aside__checkbox">
            <input id="grenadine" class="aside__check" type="checkbox" />
            <label class="aside__label" for="grenadine"> Гренадин </label>
          </div>
          <div class="aside__checkbox">
            <input id="accessories" class="aside__check" type="checkbox" />
            <label class="aside__label" for="accessories"> Карри </label>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CatalogAside',
}
</script>
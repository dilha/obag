<template>
  <div class="aside">
    <form class="aside__form">
      <div class="aside__search aside__block">
        <input class="aside__search-input" type="text" placeholder="Поиск" />
      </div>
      <div class="aside__price aside__block">
        <div class="aside__top" @click="togglePrice">
          <h6 class="aside__top-title">Цена:</h6>
          <img
            class="aside__top-arrow"
            src="@/assets/images/icons/select-icon.svg"
            alt=""
          />
        </div>
        <div class="aside__body aside__price-body">
          <input
            class="aside__price-input aside__price-from"
            type="text"
            placeholder="0 ₸"
          />
          <input class="aside__price-input" type="text" value="15.000 ₸" />
        </div>
      </div>
      <div class="aside__product aside__block">
        <div class="aside__top" @click="toggleProduct">
          <h6 class="aside__top-title">Товар:</h6>
          <img
            class="aside__top-arrow"
            src="@/assets/images/icons/select-icon.svg"
            alt=""
          />
        </div>
        <div v-if="!showProduct && categories.length" class="aside__body">
          <div
            v-for="category of categories"
            :key="category.id"
            class="aside__checkbox"
          >
            <input
              :id="category.id"
              name="category"
              class="aside__check"
              type="checkbox"
              :checked="selectedCategory.id === category.id"
              @change="loadAllCategoryProducts(category)"
            />
            <label class="aside__label" :for="category.id">
              {{ category.title }}
            </label>
          </div>
        </div>
      </div>
      <!-- <div class="aside__discount aside__block"> -->
      <!-- <div class="aside__top" @click="toggleDiscount">
          <h6 class="aside__top-title">Скидка:</h6>
          <img
            class="aside__top-arrow"
            src="@/assets/images/icons/select-icon.svg"
            alt=""
          />
        </div> -->
      <!-- <div v-if="sales" class="aside__body">
          <div v-for="sale in sales" :key="sale.id" class="aside__checkbox">
            <input
              :id="sale.title"
              class="aside__check"
              type="checkbox"
              @change="updateSelectedSales(sale)"
            />
            <label class="aside__label" :for="sale.title">
              {{ sale.title }}
              {{ sale.text }}
            </label>
          </div>
        </div> -->
      <!-- </div> -->
      <div class="aside__colors aside__block">
        <div class="aside__top" @click="toggleColor">
          <h6 class="aside__top-title">Цвета:</h6>
          <img
            class="aside__top-arrow"
            src="@/assets/images/icons/select-icon.svg"
            alt=""
          />
        </div>
        <div v-if="showColor" class="aside__body">
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
import { mapState, mapGetters, mapActions } from 'vuex'
import { actionTypes } from '@/store/catalog'

export default {
  name: 'CatalogAside',
  data() {
    return {
      showPrice: false,
      showProduct: false,
      showDiscount: false,
      showColor: false,
    }
  },
  computed: {
    ...mapState('catalog', ['categories', 'sales']),
    ...mapGetters('catalog', ['selectedCategory']),
    defaultCategory() {
      return this.categories.length > 0 ? this.categories[0] : null
    },
  },

  mounted() {
    this.loadAllCategories().then((categories) => {
      console.log('START lODING PORDUCTS ASAID')
      // if (categories?.legnth > 0) {
      this.loadAllCategoryProducts(this.selectedCategory)
      // }
    })
  },
  methods: {
    ...mapActions('catalog', {
      loadAllCategories: actionTypes.loadAllCategories,
      loadAllCategoryProducts: actionTypes.loadAllCategoryProducts,
      updateSelectedSales: actionTypes.updateSelectedSales,
    }),

    togglePrice() {
      this.showPrice = !this.showPrice
    },
    toggleProduct() {
      this.showProduct = !this.showProduct
    },
    toggleDiscount() {
      this.showDiscount = !this.showDiscount
    },
    toggleColor() {
      this.showColor = !this.showColor
    },
  },
}
</script>

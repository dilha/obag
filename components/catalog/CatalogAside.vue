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
            v-model="price_from"
            class="aside__price-input aside__price-from"
            type="number"
            placeholder="0 ₸"
            @change="getFilteredProducts"
          />
          <input
            v-model="price_to"
            class="aside__price-input"
            type="number"
            placeholder="15.000 ₸"
            @change="getFilteredProducts"
          />
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

      <div v-for="(field, index) in Object.keys(filters)" :key="index">
        <div class="aside__colors aside__block">
          <div class="aside__top" @click="toggleColor">
            <h6 class="aside__top-title">{{ field }}:</h6>
            <img
              class="aside__top-arrow"
              src="@/assets/images/icons/select-icon.svg"
              alt=""
            />
          </div>
          <div class="aside__body">
            <div
              v-for="filterVal in filters[field]"
              :key="field + filterVal.title"
              class="aside__checkbox"
            >
              <input
                :id="field + filterVal.title"
                :name="field + filterVal.title"
                class="aside__check"
                type="checkbox"
                @change="updateFilter(filterVal)"
              />
              <label class="aside__label" :for="field + filterVal.title">
                {{ filterVal.title }}
              </label>
            </div>
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
      selectedFilters: [],
      showPrice: false,
      showProduct: false,
      showDiscount: false,
      showColor: false,
      price_from: null,
      price_to: null,
    }
  },
  computed: {
    ...mapState('catalog', ['categories', 'filters', 'selectedSubCategory']),
    ...mapGetters('catalog', ['selectedCategory']),
    defaultCategory() {
      return this.categories.length > 0 ? this.categories[0] : null
    },
  },
  watch: {
    selectedSubCategory: {
      handler() {
        this.price_from = null
        this.price_to = null
      },
    },
  },
  mounted() {
    this.loadAllCategories().then(() => {
      this.loadAllCategoryProducts(this.selectedCategory)
    })
  },

  methods: {
    ...mapActions('catalog', {
      loadAllCategories: actionTypes.loadAllCategories,
      loadAllCategoryProducts: actionTypes.loadAllCategoryProducts,
      loadFilterProducts: actionTypes.loadFilterProducts,
    }),
    updateFilter(filter) {
      console.log(filter)
      const indexOf = this.selectedFilters.indexOf(filter.id)
      if (indexOf !== -1) {
        this.selectedFilters.splice(indexOf, 1)
      } else {
        this.selectedFilters.push(filter.id)
      }
      this.getFilteredProducts()
    },
    getFilteredProducts() {
      // Бля перепиши
      if (!this.selectedSubCategory) {
        this.loadFilterProducts({
          filters: this.selectedFilters,
          categoryId: this.selectedCategory.id,
          price_from: this.price_from,
          price_to: this.price_to,
        })
        return
      }
      this.loadFilterProducts({
        filters: this.selectedFilters,
        subCategoryId: this.selectedSubCategory,
        price_from: this.price_from,
        price_to: this.price_to,
      })
    },
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

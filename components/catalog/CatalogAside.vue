<template>
  <div class="aside">
    <form class="aside__form">
      <div class="aside__search aside__block">
        <div class="form-row">
          <input
            v-model="searchTerm"
            class="aside__search-input"
            type="text"
            placeholder="Поиск"
            @keydown.enter="search"
          />
          <button class="search__icon" @click.prevent="search">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE9SURBVHgBlVLbbYNAEOQw8E0HoYOQDlyCO7ARAomvJBUYSvAXEiCRDuJUEDoIJbgEvnlmBnMWQcRRVlrfmtvZnZ09ocwsz3OzbduDqqqP06eq7/sPz/MKZWFCBlmW7Yid/pYEwS24DS+apnGCILj8AE6gd/hps9mEjuNUMiGOY0vX9U/GuHuSd4L0uq77EkIUrus6yopJ8DxHxQzsZtV1HSm/GCkOw3CC79hIArecYc5/zTRNe8NhYlZrBI58hbgLosnZoPgVCFAFCvZfwCRJxhzkXgsgOOO00zTd3gOi0zOOi9ypOgUFOudUbw00FT1Aj5uAGn+4XMpNB6UI55kzsZBhGHuwCpmHPT5I4O3lMAnKhei8XzSkBuxk4u4ID7HLSCxpTe/Vpnp4GKXv++WMMgsfUehVKP80gF+o7Df/zJ2q/BFUhgAAAABJRU5ErkJggg=="
              alt=""
            />
          </button>
        </div>
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
              @change="handleToggleCategory(category)"
            />
            <label class="aside__label" :for="category.id">
              {{ category.title }}
            </label>
          </div>
        </div>
      </div>

      <div v-if="completes.length" class="aside__product aside__block">
        <div class="aside__top">
          <h6 class="aside__top-title">Комплектующие:</h6>
          <img
            class="aside__top-arrow"
            src="@/assets/images/icons/select-icon.svg"
            alt=""
          />
        </div>
        <div class="aside__body">
          <div
            v-for="complect of completes"
            :key="complect.id"
            class="aside__checkbox"
          >
            <input
              :id="complect.id + complect.title"
              name="completes"
              class="aside__check"
              type="checkbox"
              :checked="selectedComplect.id === complect.id"
              @change="getFilteredProducts(complect)"
            />
            <label class="aside__label" :for="complect.id + complect.title">
              {{ complect.title }}
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
                :checked="selectedFilters.includes(parseInt(filterVal.id))"
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
  props: {},
  data() {
    return {
      selectedFilters: [],
      selectedComplect: {},
      showPrice: false,
      showProduct: false,
      showDiscount: false,
      showColor: false,
      price_from: null,
      price_to: null,
      searchTerm: '',

      routeCategory: {
        id: -1,
      },
      routeSubcategory: -1,
      routeComplete: -1,
    }
  },
  computed: {
    ...mapState('catalog', [
      'categories',
      'filters',
      'selectedSubCategory',
      'completes',
    ]),
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
    this.loadAllCategories()
      .then(async () => {
        if (this.$route?.params?.id) {
          this.routeCategory = this.categories.find(
            (c) => c.id === parseInt(this.$route?.params?.id)
          )
        }

        if (this.$route?.params?.subcatId) {
          this.routeSubcategory = parseInt(this.$route?.params?.subcatId)
        }

        if (this.$route?.query?.completId) {
          this.routeComplete = parseInt(this.$route?.query?.completId)
        }

        const termFromRoute = this.$route.query?.term
        if (termFromRoute) {
          this.loadSearchProducts(termFromRoute)
          return
        }

        if (this.routeCategory.id !== -1) {
          if (this.routeSubcategory !== -1) {
            this.setSelectedCategory(this.routeCategory)
            await this.loadAllSubCategoryProducts(this.routeSubcategory)

            if (this.routeComplete !== -1)
              this.getFilteredProducts({ id: this.routeComplete })
          } else {
            this.setSelectedSubCategory(null)
            this.loadAllCategoryProducts(this.routeCategory)
          }
        } else {
          this.$router.replace({
            params: {
              id: this.categories[0].id,
              slug: this.categories[0].slug,
            },
          })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  },

  methods: {
    ...mapActions('catalog', {
      loadAllCategories: actionTypes.loadAllCategories,
      loadAllCategoryProducts: actionTypes.loadAllCategoryProducts,
      loadAllSubCategoryProducts: actionTypes.loadAllSubCategoryProducts,
      loadFilterProducts: actionTypes.loadFilterProducts,
      loadSearchProducts: actionTypes.loadSearchProducts,
      setSelectedCategory: actionTypes.setSelectedCategory,
      setSelectedSubCategory: actionTypes.setSelectedSubCategory,
    }),
    search() {
      this.$router.replace({
        params: {
          id: null,
          slug: null,
          subcatId: null,
          subcatSlug: null,
        },
        query: {
          term: this.searchTerm,
        },
      })
      this.loadSearchProducts(this.searchTerm)
    },
    updateFilter(filter) {
      const indexOf = this.selectedFilters.indexOf(filter.id)
      if (indexOf !== -1) {
        this.selectedFilters.splice(indexOf, 1)
      } else {
        this.selectedFilters.push(parseInt(filter.id))
      }
      this.getFilteredProducts()
    },
    getFilteredProducts(complect) {
      if (complect) {
        this.selectedComplect = complect
        this.$router.replace({
          query: {
            completId: complect.id,
          },
        })
      }
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
      if (this.selectedComplect.id) {
        this.loadFilterProducts({
          filters: this.selectedFilters,
          complete_id: this.selectedComplect.id,
          subCategoryId: this.selectedSubCategory,
          price_from: this.price_from,
          price_to: this.price_to,
        })
      } else {
        this.loadFilterProducts({
          filters: this.selectedFilters,
          subCategoryId: this.selectedSubCategory,
          price_from: this.price_from,
          price_to: this.price_to,
        })
      }
    },
    handleToggleCategory(category) {
      this.selectedFilters = []
      this.selectedComplect = {}
      this.setSelectedSubCategory(null)
      this.loadAllCategoryProducts(category)
      this.$router.replace({
        params: {
          id: category.id,
          slug: category.slug,
          subcatId: null,
          subcatSlug: null,
        },
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
    isFilterChecked(id) {
      return this.selectedFilters.includes(id)
    },
    clearAllFilters() {
      this.selectedFilters = []
      this.selectedComplect = {}
    },
  },
}
</script>

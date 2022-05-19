<template>
  <div v-if="selectedCategory && selectedCategory.subcategories.length" class="catalog__model">
    <div class="catalog__model-top">
      <h6 class="catalog__model-title">Модель:</h6>
      <div class="catalog__model-buttons">
        <button class="catalog__model-btn catalog__model-prev button-prev">
          <img src="@/assets/images/icons/left-arrow.svg" alt="" />
        </button>
        <button class="catalog__model-btn catalog__model-next button-next">
          <img src="@/assets/images/icons/right-arrow.svg" alt="" />
        </button>
      </div>
    </div>
    <swiper v-if="selectedCategory" ref="reviewsSlider" class="catalog__model-slider" :options="swiperOption">
      <swiper-slide v-for="item in selectedCategory.subcategories" :key="item.id"
        :class="['catalog__model-item', { 'is-active': selectedSubCategory === item.id }]" :data-id="item.id"
        @click.native.stop="handleToggleSubcategory(item)">
        <template v-if="item.preview_image">
          <div class="catalog__model-item-image">
            <img :src="getImage(item)" alt="obag" />
          </div>
          <h5 class="catalog__model-item-title">{{ item.title }}</h5>
          <!-- <img v-if="selectedSubCategory === item.id" :src="item.preview_image" :alt="item.title" /> -->
          <!-- <img v-else :src="item.image" :alt="item.title" /> -->
        </template>
        <img v-else class="catalog__model-item-cover-image" src="@/assets/images/icons/obag.png" :alt="item.title" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { actionTypes } from '~/store/catalog'

export default {
  name: 'CatalogModel',
  components: {},
  props: {
  },
  data() {
    return {
      swiperOption: {
        slideTo: 1,
        slidesPerView: 'auto',
        responsive: true,
        // loop: true,
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
      },
    }
  },
  computed: {
    ...mapState('catalog', ['selectedCategory', 'selectedSubCategory']),
    swiper() {
      return this.$refs.reviewsSlider?.$swiper
    },
  },
  mounted() { },
  methods: {
    ...mapActions('catalog', {
      loadAllSubCategoryProducts: actionTypes.loadAllSubCategoryProducts,
    }),
    handleToggleSubcategory(subcategory) {
      this.loadAllSubCategoryProducts(subcategory.id)
      this.handleClearFilters()
      this.$router.replace({
        params: {
          subcatId: subcategory.id,
          subcatSlug: subcategory.slug
        }
      })
    },
    handleClearFilters() {
      this.$emit('clear-filters')
    },
    getImage(item) {
      if (item.preview_image) {
        return item.preview_image
      }
      else {
        return require('@/' + 'assets/images/icons/obag.png')
      }
    }
  },
}
</script>

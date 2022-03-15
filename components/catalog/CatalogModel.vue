<template>
  <div class="catalog__model">
    <div class="catalog__model-top">
      <h6 class="catalog__model-title">Модель:</h6>
      <div class="catalog__model-buttons">
        <button
          slot="button-prev"
          class="catalog__model-btn catalog__model-prev button-prev"
        >
          <img src="@/assets/images/icons/left-arrow.svg" alt="" />
        </button>
        <button
          slot="button-next"
          class="catalog__model-btn catalog__model-next button-next"
        >
          <img src="@/assets/images/icons/right-arrow.svg" alt="" />
        </button>
      </div>
    </div>
    <swiper
      v-if="selectedCategory"
      ref="reviewsSlider"
      class="catalog__model-slider"
      :options="swiperOption"
    >
      <swiper-slide
        v-for="item in selectedCategory.subcategories"
        :key="item.id"
        class="catalog__model-item"
        :data-id="item.id"
        @click.native.stop="loadAllSubCategoryProducts(item.id)"
      >
        <img :src="item.image" :alt="item.title" />
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
  data() {
    return {
      swiperOption: {
        slideTo: 1,
        slidesPerView: 10,
        responsive: true,
        // on: {
        //   click: ({ target }) => {
        //     console.log('FROM SWIPER OPT', target)
        //     this.loadAllSubCategoryProducts(target.dataset.id)
        //   },
        // },
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
        // breakpoints: {
        //   1000: {
        //     slidesPerView: 11,
        //   },
        //   700: {
        //     slidesPerView: 8,
        //   },
        //   350: {
        //     slidesPerView: 6,
        //   },
        //   300: {
        //     slidesPerView: 4,
        //   },
        // },
      },
    }
  },
  computed: {
    ...mapState('catalog', ['selectedCategory']),
    swiper() {
      return this.$refs.reviewsSlider?.$swiper
    },
  },
  mounted() {},
  methods: {
    ...mapActions('catalog', {
      loadAllSubCategoryProducts: actionTypes.loadAllSubCategoryProducts,
    }),
  },
}
</script>

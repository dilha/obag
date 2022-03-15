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
      v-if="defaultSubCategories"
      ref="reviewsSlider"
      class="catalog__model-slider"
      :options="swiperOption"
    >
      <swiper-slide
        v-for="item in testSlider"
        :key="item.id"
        class="catalog__model-item"
      >
        <img :src="item.image" :alt="item.title" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// import IconClassic from '~/components/icons/constructor-icons/IconClassic.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'CatalogModel',
  components: {
    // IconClassic,
  },
  data() {
    return {
      swiperOption: {
        slideTo: 1,
        on: {
          click: () => {
            // this.readAllReviews(e.realIndex)
          },
        },
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
        breakpoints: {
          1000: {
            slidesPerView: 11,
          },
          700: {
            slidesPerView: 8,
          },
          350: {
            slidesPerView: 6,
          },
          300: {
            slidesPerView: 4,
          },
        },
      },
      images: [],
    }
  },
  computed: {
    ...mapGetters('catalog', ['defaultSubCategories']),
    swiper() {
      return this.$refs.reviewsSlider?.$swiper
    },
    testSlider() {
      const test2 = [...this.defaultSubCategories]
      const test3 = [...test2, ...this.defaultSubCategories]
      const test4 = [...test3, ...this.defaultSubCategories]
      return test4
    },
  },
  mounted() {
    // this.slideTotalCount = this.swiper.slides.length
    // this.activeSlideIndex = this.swiper.activeIndex + 1
    // this.pageCount = Math.ceil(
    //   this.swiper.slides.length / this.swiper.params.slidesPerView
    // )
  },
  methods: {
    // prevSlide() {
    //   this.swiper.slidePrev()
    //   this.activeSlideIndex = this.swiper.activeIndex + 1
    // },
    // nextSlide() {
    //   this.swiper.slideNext()
    //   this.activeSlideIndex = this.swiper.activeIndex + 1
    // },
  },
}
</script>

<template>
  <div class="catalog__model">
    <div class="catalog__model-top">
      <h6 class="catalog__model-title">Модель:</h6>
      <div class="catalog__model-buttons">
        <button
          slot="button-prev"
          class="catalog__model-btn catalog__model-prev"
          @click="prevSlide"
        >
          <img src="@/assets/images/icons/left-arrow.svg" alt="" />
        </button>
        <button
          slot="button-next"
          class="catalog__model-btn catalog__model-next"
          @click="nextSlide"
        >
          <img src="@/assets/images/icons/right-arrow.svg" alt="" />
        </button>
      </div>
    </div>
    <swiper
      ref="reviewsSlider"
      class="catalog__model-slider"
      :options="swiperOption"
    >
      <swiper-slide
        v-for="item in 12"
        :key="item.id"
        class="catalog__model-item"
      >
        <img src="@/assets/images/constructor/constructor-item-1.svg" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// import IconClassic from '~/components/icons/constructor-icons/IconClassic.vue'
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
          }
        },
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.reviewsSlider?.$swiper
    },
  },
  mounted() {
    this.slideTotalCount = this.swiper.slides.length
    this.activeSlideIndex = this.swiper.activeIndex + 1
    this.pageCount = Math.ceil(
      this.swiper.slides.length / this.swiper.params.slidesPerView
    )
  },
  methods: {
    prevSlide() {
      this.swiper.slidePrev()
      this.activeSlideIndex = this.swiper.activeIndex + 1
    },
    nextSlide() {
      this.swiper.slideNext()
      this.activeSlideIndex = this.swiper.activeIndex + 1
    },
  },
}
</script>